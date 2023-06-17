<template>
  <v-form v-if="get(deposit, 'parameters.account')">
    <div class="mb-5">
      {{ $t('Please complete the bank transfer using the below credentials.') }}
    </div>

    <v-text-field
      ref="amount"
      :label="$t('Amount')"
      :value="get(deposit, 'payment_amount')"
      :suffix="get(deposit, 'payment_currency')"
      outlined
      readonly
      append-icon="mdi-content-copy"
      @click:append="copyToClipboard($refs.amount.$el.querySelector('input'))"
    />

    <v-text-field
      ref="name"
      :label="$t('Bank name')"
      :value="get(deposit, 'parameters.name')"
      outlined
      readonly
      append-icon="mdi-content-copy"
      @click:append="copyToClipboard($refs.name.$el.querySelector('input'))"
    />

    <v-text-field
      ref="code"
      :label="$t('Bank code')"
      :value="get(deposit, 'parameters.code')"
      outlined
      readonly
      append-icon="mdi-content-copy"
      @click:append="copyToClipboard($refs.code.$el.querySelector('input'))"
    />

    <v-text-field
      ref="agency"
      :label="$t('Agency')"
      :value="get(deposit, 'parameters.agency')"
      outlined
      readonly
      append-icon="mdi-content-copy"
      @click:append="copyToClipboard($refs.agency.$el.querySelector('input'))"
    />

    <v-text-field
      ref="account"
      :label="$t('Account')"
      :value="get(deposit, 'parameters.account')"
      outlined
      readonly
      append-icon="mdi-content-copy"
      @click:append="copyToClipboard($refs.account.$el.querySelector('input'))"
    />

    <v-text-field
      ref="account_operation"
      :label="$t('Account operation')"
      :value="get(deposit, 'parameters.account_operation')"
      outlined
      readonly
      append-icon="mdi-content-copy"
      @click:append="copyToClipboard($refs.account_operation.$el.querySelector('input'))"
    />

    <v-text-field
      ref="document"
      :label="$t('Document')"
      :value="get(deposit, 'parameters.document')"
      outlined
      readonly
      append-icon="mdi-content-copy"
      @click:append="copyToClipboard($refs.document.$el.querySelector('input'))"
    />

    <v-text-field
      ref="beneficiary"
      :label="$t('Beneficiary')"
      :value="get(deposit, 'parameters.beneficiary')"
      outlined
      readonly
      append-icon="mdi-content-copy"
      @click:append="copyToClipboard($refs.beneficiary.$el.querySelector('input'))"
    />
  </v-form>
  <v-form v-else-if="get(deposit, 'parameters.qrcode')">
    <div class="mb-5">
      {{ $t('Please complete the payment using the below credentials.') }}
    </div>

    <v-text-field
      ref="amount"
      :label="$t('Amount')"
      :value="get(deposit, 'payment_amount')"
      :suffix="get(deposit, 'payment_currency')"
      outlined
      readonly
      append-icon="mdi-content-copy"
      @click:append="copyToClipboard($refs.amount.$el.querySelector('input'))"
    />

    <v-text-field
      ref="reference"
      :label="$t('Reference')"
      :value="get(deposit, 'parameters.reference')"
      outlined
      readonly
    >
      <template #append>
        <v-dialog v-model="modal" width="300">
          <template #activator="{ on }">
            <v-icon @click="modal = true">
              mdi-qrcode
            </v-icon>
          </template>
          <div class="text-center" v-html="get(deposit, 'parameters.qr')" />
        </v-dialog>
        <v-icon class="ml-3" @click="copyToClipboard($refs.reference.$el.querySelector('input'))">
          mdi-content-copy
        </v-icon>
      </template>
    </v-text-field>

    <v-text-field
      ref="beneficiary"
      :label="$t('Beneficiary')"
      :value="get(deposit, 'parameters.beneficiary')"
      outlined
      readonly
      append-icon="mdi-content-copy"
      @click:append="copyToClipboard($refs.beneficiary.$el.querySelector('input'))"
    />

    <template v-if="get(deposit, 'parameters.expires_in')">
      <span>{{ $t('Time left') }}</span>
      <countdown-timer :end-date="get(deposit, 'parameters.expires_in')" />
    </template>
  </v-form>
</template>
<script>
import { get, copyToClipboard } from '~/plugins/utils'
import CountdownTimer from '~/components/CountdownTimer'

export default {
  components: { CountdownTimer },

  props: {
    deposit: {
      type: Object,
      required: false,
      default: null
    }
  },

  data () {
    return {
      modal: false
    }
  },

  created () {
    const time = Math.floor(new Date().getTime() / 1000)

    if (get(this.deposit, 'parameters.qrcode') && time > get(this.deposit, 'parameters.expires_in', time)) {
      this.$store.dispatch('message/error', { text: this.$t('This deposit has expired.') })
      this.$router.push({ name: 'user.account.deposits.index' })
    }
  },

  methods: {
    get,
    copyToClipboard
  }
}
</script>
