<template>
  <v-container>
    <v-row v-if="!methods" align="center" justify="center">
      <v-col v-for="i in [0,1,2]" :key="i" cols="12" md="4" lg="3">
        <v-skeleton-loader type="card" />
      </v-col>
    </v-row>
    <v-row v-else-if="methods.length > 0" align="center" justify="center">
      <template v-if="!method" class="text-center">
        <v-col v-for="mtd in methods" :key="mtd.id" cols="12" md="4" lg="3" @click="chooseMethod(mtd)">
          <v-card>
            <v-img
              v-if="mtd.banner"
              :src="mtd.banner"
              height="200"
              class="cursor-pointer"
            />
            <v-card-title class="cursor-pointer justify-center">
              {{ mtd.name }}
            </v-card-title>
          </v-card>
        </v-col>
      </template>
      <v-col v-else cols="12" md="6">
        <v-card>
          <v-toolbar>
            <v-btn icon @click="method = null">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>
              {{ method.name }}
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div v-if="method.description" class="method-description mb-5" v-html="method.description" />
            <v-form v-model="formIsValid" @submit.prevent="submit">
              <v-text-field
                v-model.number="form.amount"
                :label="$t('Withdrawal amount')"
                :suffix="$t('credits')"
                :rules="[v => validationMin(v, withdrawalMin), v => validationMax(v, withdrawalMax)]"
                :error="form.errors.has('amount')"
                :error-messages="form.errors.get('amount')"
                :disabled="formIsProcessing"
                outlined
                @keydown="clearFormErrors($event,'amount')"
              />

              <v-text-field
                class="input-with-button"
                :value="paymentAmount"
                :label="$t('Payment amount')"
                :suffix="paymentCurrenciesCount ? '' : currency"
                :error="form.errors.has('payment_currency')"
                :error-messages="form.errors.get('payment_currency')"
                :disabled="formIsProcessing"
                outlined
                readonly
              >
                <template v-if="paymentCurrenciesCount > 0" #append>
                  <v-menu
                    top
                    right
                    max-height="300"
                    :disabled="formIsProcessing || paymentCurrenciesCount === 1"
                  >
                    <template #activator="{ on }">
                      <v-btn text v-on="on">
                        {{ form.payment_currency }}
                        <v-icon v-if="paymentCurrenciesCount > 1">
                          mdi-menu-down
                        </v-icon>
                      </v-btn>
                    </template>

                    <v-list>
                      <v-list-item
                        v-for="(ccy, symbol) in paymentCurrencies"
                        :key="symbol"
                        @click="form.payment_currency = symbol"
                      >
                        <v-list-item-title>
                          <template v-if="ccy.name">
                            {{ symbol }} - {{ ccy.name }}
                          </template>
                          <template v-else>
                            {{ symbol }}
                          </template>
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </v-text-field>

              <template v-if="method.payment_method">
                <form-parameter
                  v-for="parameter in method.payment_method.input_parameters"
                  :key="parameter.id"
                  v-model="form.parameters[parameter.id]"
                  :parameter="parameter"
                  :form="form"
                  form-key="parameters"
                  :disabled="formIsProcessing"
                />
              </template>

              <template v-if="method.parameters">
                <form-parameter
                  v-for="parameter in method.parameters"
                  :key="parameter.id"
                  v-model="form.parameters[parameter.id]"
                  :parameter="parameter"
                  :form="form"
                  form-key="parameters"
                  :disabled="formIsProcessing"
                />
              </template>

              <v-btn type="submit" color="primary" :disabled="!formIsValid || form.busy" :loading="form.busy">
                {{ $t('Submit') }}
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else-if="methods.length === 0" align="center" justify="center">
      <v-col>
        <p class="text-center">
          {{ $t('No withdrawal methods enabled.') }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import { get } from '~/plugins/utils'
import { decimal } from '~/plugins/format'
import { mapState, mapActions } from 'vuex'
import Form from 'vform'
import FormMixin from '~/mixins/Form'
import FormParameter from '~/components/FormParameter'

export default {
  components: { FormParameter },

  mixins: [FormMixin],

  middleware: ['auth', 'verified', '2fa_passed'],

  metaInfo () {
    return { title: this.$t('Make a withdrawal') }
  },

  data () {
    return {
      method: null, // currently selected method object
      methods: null,
      formIsProcessing: false,
      form: new Form({
        amount: null,
        payment_currency: null,
        parameters: {}
      })
    }
  },

  computed: {
    ...mapState('auth', [
      'user',
      'account'
    ]),
    currency () {
      return get(this.method, 'currency')
    },
    rate () {
      return this.form.payment_currency
        ? this.paymentCurrencies[this.form.payment_currency].rate_credits
        : get(this.method, 'rate', 0)
    },
    paymentAmount () {
      const decimalPlaces = get(this.method, 'decimal_places')

      return this.rate > 0 && this.form.amount > 0
        ? decimal(this.form.amount / this.rate, decimalPlaces || 8)
        : 0
    },
    paymentCurrencies () {
      return get(this.method, 'payment_currencies')
    },
    paymentCurrenciesCount () {
      return this.paymentCurrencies ? Object.keys(this.paymentCurrencies).length : 0
    },
    withdrawalMin () {
      return get(this.method, 'min_amount')
    },
    withdrawalMax () {
      return get(this.method, 'max_amount')
    }
  },

  watch: {
    method (method) {
      this.form.parameters = {}

      this.$nextTick(() => {
        this.form.amount = this.withdrawalMin
      })

      // Assign default values to custom parameters
      if (method && method.parameters) {
        method.parameters.forEach(parameter => {
          this.form.parameters[parameter.id] = parameter.default
        })
      }

      // Assign default values to built-in method parameters
      if (method && method.payment_method) {
        method.payment_method.input_parameters.forEach(parameter => {
          this.form.parameters[parameter.id] = parameter.default
        })
      }

      this.form.payment_currency = this.paymentCurrencies ? Object.keys(this.paymentCurrencies)[0] : null
    }
  },

  async created () {
    this.$store.dispatch('auth/fetchUser')

    const { data } = await axios.get('/api/withdrawal-methods')

    this.methods = data
  },

  methods: {
    ...mapActions({
      updateUserAccountBalance: 'auth/updateUserAccountBalance'
    }),
    chooseMethod (method) {
      this.method = method
      window.scrollTo(0, 0)
    },
    async submit () {
      this.formIsProcessing = true

      const { data } = await this.form.post(`/api/withdrawals/methods/${this.method.id}`)
        .catch(() => {
          return false
        })

      // data will be undefined in case of any form errors (422 HTTP code)
      if (data) {
        this.$store.dispatch('message/' + (data.success ? 'success' : 'error'), { text: data.message })

        if (data.success) {
          this.$router.push({ name: 'user.account.withdrawals.index' })
          this.updateUserAccountBalance(this.account.balance - this.form.amount)
        }
      }

      this.formIsProcessing = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .method-description {
    white-space: pre-line;
  }
</style>
