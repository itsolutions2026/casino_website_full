<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-toolbar>
            <v-btn icon @click="$router.go(-1)">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>
              {{ $t('Withdrawal method {0}', [id]) }}
            </v-toolbar-title>
            <v-spacer />
            <withdrawal-method-menu :id="id" :item="method || {}" />
            <preloader :active="!method" />
          </v-toolbar>
          <v-card-text>
            <v-form v-model="formIsValid" @submit.prevent="update('withdrawal')">
              <template v-if="method && method.payment_method">
                <v-text-field
                  :value="method.payment_method.gateway.name"
                  :label="$t('Payment gateway')"
                  :disabled="true"
                  outlined
                />

                <v-text-field
                  :value="method.payment_method.name"
                  :label="$t('Payment method')"
                  :disabled="true"
                  outlined
                />
              </template>

              <v-text-field
                v-model="form.name"
                :label="$t('Name')"
                type="text"
                :disabled="!method"
                :rules="[validationRequired]"
                :error="form.errors.has('name')"
                :error-messages="form.errors.get('name')"
                outlined
                @keydown="clearFormErrors($event,'name')"
              />

              <v-textarea
                v-model="form.description"
                :label="$t('Description')"
                :disabled="!method"
                :error="form.errors.has('description')"
                :error-messages="form.errors.get('description')"
                outlined
                :hint="$t('Text or HTML')"
                :persistent-hint="true"
                class="mb-3"
                @keydown="clearFormErrors($event,'description')"
              />

              <file-upload
                v-model="form.banner"
                :label="$t('Banner')"
                name="banner"
                folder="payments/withdrawal-methods"
                :clearable="true"
              />

              <v-select
                v-if="get(method, 'payment_method.allowed_currencies.0')"
                v-model="form.currency"
                :items="method ? method.payment_method.allowed_currencies : []"
                :label="$t('Reference currency')"
                :disabled="!method"
                :error="form.errors.has('currency')"
                :error-messages="form.errors.get('currency')"
                outlined
                @change="clearFormErrors($event,'currency')"
              />

              <v-text-field
                v-else
                v-model="form.currency"
                :label="$t('Reference currency')"
                type="text"
                :disabled="!method"
                :rules="[validationRequired]"
                :error="form.errors.has('currency')"
                :error-messages="form.errors.get('currency')"
                outlined
                @keydown="clearFormErrors($event,'currency')"
              />

              <v-text-field
                v-model.number="form.rate"
                :label="$t('Reference exchange rate')"
                type="text"
                :disabled="!method"
                :rules="[validationRequired, validationPositiveNumber]"
                :error="form.errors.has('rate')"
                :error-messages="form.errors.get('rate')"
                :prefix="method ? '1 ' + form.currency + ' = ' : ''"
                :suffix="$t('credits')"
                :hint="$t('Amount of credits per 1 unit of the reference currency')"
                :persistent-hint="true"
                outlined
                @keydown="clearFormErrors($event,'rate')"
              />

              <v-text-field
                v-model.number="form.min_amount"
                :label="$t('Min withdrawal amount')"
                :rules="[validationPositiveInteger]"
                :error="form.errors.has('min_amount')"
                :error-messages="form.errors.get('min_amount')"
                :suffix="$t('credits')"
                outlined
                @keydown="clearFormErrors($event,'min_amount')"
              />

              <v-text-field
                v-model.number="form.max_amount"
                :label="$t('Max withdrawal amount')"
                :rules="[validationPositiveInteger]"
                :error="form.errors.has('max_amount')"
                :error-messages="form.errors.get('max_amount')"
                :suffix="$t('credits')"
                outlined
                @keydown="clearFormErrors($event,'max_amount')"
              />

              <v-text-field
                v-model.number="form.decimal_places"
                :label="$t('Decimal places')"
                type="text"
                :disabled="!method"
                :rules="[validationInteger, v => validationMin(v, 0), v => validationMax(v, 8)]"
                :error="form.errors.has('decimal_places')"
                :error-messages="form.errors.get('decimal_places')"
                :hint="$t('Number of decimal places, which payment amount should be rounded to.')"
                :persistent-hint="true"
                outlined
                @keydown="clearFormErrors($event,'code')"
              />

              <div v-if="get(method, 'payment_method')" class="mt-5">
                <form-parameter
                  v-for="parameter in method.payment_method.parameters"
                  v-show="typeof parameter.visible_if === 'undefined' ? true : !!form.payment_method_parameters[parameter.visible_if]"
                  :key="parameter.id"
                  v-model="form.payment_method_parameters[parameter.id]"
                  :parameter="parameter"
                  :form="form"
                  form-key="payment_method_parameters"
                />
              </div>

              <v-row>
                <v-col>
                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        {{ $t('Custom parameters') }}
                        <span v-if="form.parameters.length" class="ml-2">
                          ({{ form.parameters.length }})
                        </span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <entity-parameters v-if="method" v-model="form.parameters">
                          <template #description>
                            <p>
                              {{ $t('Add any number of extra parameters that should be present on the withdrawal form and filled in by the user.') }}
                            </p>
                          </template>
                        </entity-parameters>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>

              <v-switch
                v-model="form.enabled"
                :label="$t('Enabled')"
                color="primary"
                :disabled="!method"
                :false-value="0"
                :true-value="1"
                :error="form.errors.has('enabled')"
                :error-messages="form.errors.get('enabled')"
                class="mb-3"
                @change="clearFormErrors($event,'enabled')"
              />

              <v-skeleton-loader type="button" :loading="!method">
                <v-btn type="submit" color="primary" :disabled="!formIsValid || form.busy" :loading="form.busy">
                  {{ $t('Save') }}
                </v-btn>
              </v-skeleton-loader>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { get } from '~/plugins/utils'
import FormMixin from '~/mixins/Form'
import Preloader from '~/components/Preloader'
import WithdrawalMethodMenu from 'packages/payments/resources/js/components/Admin/WithdrawalMethodMenu'
import FormParameter from '~/components/FormParameter'
import EditDepositWithdrawalMethod from 'packages/payments/resources/js/mixins/Admin/EditDepositWithdrawalMethod'
import EntityParameters from '~/components/Admin/EntityParameters'
import FileUpload from '~/components/Admin/FileUpload'

export default {
  components: { FileUpload, WithdrawalMethodMenu, Preloader, EntityParameters, FormParameter },

  mixins: [FormMixin, EditDepositWithdrawalMethod],

  middleware: ['auth', 'verified', '2fa_passed', 'admin'],

  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },

  metaInfo () {
    return { title: this.$t('Withdrawal method {0}', [this.id]) }
  },

  async created () {
    this.pullMethod('withdrawal')
  },

  methods: {
    get
  }
}
</script>
