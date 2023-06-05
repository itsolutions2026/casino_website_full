<template>
  <v-form>
    <v-skeleton-loader type="heading" :loading="!deposit">
      <v-text-field
        :label="$t('Amount')"
        :value="get(deposit, 'payment_amount')"
        :suffix="get(deposit, 'payment_currency')"
        outlined
        readonly
      />
    </v-skeleton-loader>

    <v-skeleton-loader type="button" :loading="!deposit">
      <v-btn
        color="primary"
      >
        {{ $t('Pay') }}
      </v-btn>
    </v-skeleton-loader>
  </v-form>
</template>
<script>
import { get } from '~/plugins/utils'

export default {
  components: {},

  props: {
    deposit: {
      type: Object,
      required: false,
      default: null
    }
  },

  data () {
    return {
      //
    }
  },

  methods: {
    get
  }
}
</script>
