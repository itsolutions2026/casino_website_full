<template>
  <v-card flat>
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Notifications') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>{{ $t('Admin') }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col>
                      <v-switch
                        v-model="form.PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_ENABLED"
                        :label="$t('Notify after a user completes a deposit')"
                        color="primary"
                        false-value="false"
                        true-value="true"
                      />
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model.number="form.PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_TRESHOLD"
                        :label="$t('Deposit amount treshold')"
                        :error="form.errors.has('PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_TRESHOLD')"
                        :error-messages="form.errors.get('PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_TRESHOLD')"
                        :rules="'' + form.PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_ENABLED === 'false' ? [] : [validationNonNegativeInteger]"
                        :disabled="'' + form.PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_ENABLED === 'false'"
                        outlined
                        :suffix="$t('credits')"
                        @keydown="clearFormErrors($event,'PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_TRESHOLD')"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-switch
                        v-model="form.PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_ENABLED"
                        :label="$t('Notify after a user creates a withdrawal')"
                        color="primary"
                        false-value="false"
                        true-value="true"
                      />
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model.number="form.PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_TRESHOLD"
                        :label="$t('Deposit amount treshold')"
                        :error="form.errors.has('PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_TRESHOLD')"
                        :error-messages="form.errors.get('PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_TRESHOLD')"
                        :rules="'' + form.PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_ENABLED === 'false' ? [] : [validationNonNegativeInteger]"
                        :disabled="'' + form.PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_ENABLED === 'false'"
                        outlined
                        :suffix="$t('credits')"
                        @keydown="clearFormErrors($event,'PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_TRESHOLD')"
                      />
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Deposits') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model.number="form.PAYMENTS_DEPOSIT_AUTO_CANCEL_DAYS"
              :label="$t('Automatically cancel after')"
              :rules="[validationNonNegativeInteger]"
              :error="form.errors.has('PAYMENTS_DEPOSIT_AUTO_CANCEL_DAYS')"
              :error-messages="form.errors.get('PAYMENTS_DEPOSIT_AUTO_CANCEL_DAYS')"
              :suffix="$t('days')"
              outlined
              :hint="$t('If a deposit is in Created or Pending state')"
              :persistent-hint="true"
              @keydown="clearFormErrors($event,'PAYMENTS_DEPOSIT_AUTO_CANCEL_DAYS')"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Withdrawals') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model.number="form.PAYMENTS_WITHDRAWAL_DAILY_LIMIT"
              :label="$t('Daily withdrawal limit')"
              :rules="[validationInteger]"
              :error="form.errors.has('PAYMENTS_WITHDRAWAL_DAILY_LIMIT')"
              :error-messages="form.errors.get('PAYMENTS_WITHDRAWAL_DAILY_LIMIT')"
              :suffix="$t('credits')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_WITHDRAWAL_DAILY_LIMIT')"
            />

            <v-text-field
              v-model.number="form.PAYMENTS_WITHDRAWAL_WEEKLY_LIMIT"
              :label="$t('Weekly withdrawal limit')"
              :rules="[validationInteger]"
              :error="form.errors.has('PAYMENTS_WITHDRAWAL_WEEKLY_LIMIT')"
              :error-messages="form.errors.get('PAYMENTS_WITHDRAWAL_WEEKLY_LIMIT')"
              :suffix="$t('credits')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_WITHDRAWAL_WEEKLY_LIMIT')"
            />

            <v-text-field
              v-model.number="form.PAYMENTS_WITHDRAWAL_MONTHLY_LIMIT"
              :label="$t('Monthly withdrawal limit')"
              :rules="[validationInteger]"
              :error="form.errors.has('PAYMENTS_WITHDRAWAL_MONTHLY_LIMIT')"
              :error-messages="form.errors.get('PAYMENTS_WITHDRAWAL_MONTHLY_LIMIT')"
              :suffix="$t('credits')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_WITHDRAWAL_MONTHLY_LIMIT')"
            />

            <v-text-field
              v-model.number="form.PAYMENTS_MIN_TOTAL_DEPOSIT_TO_WITHDRAW"
              :label="$t('Min total deposit to allow withdrawals')"
              :rules="[validationInteger]"
              :error="form.errors.has('PAYMENTS_MIN_TOTAL_DEPOSIT_TO_WITHDRAW')"
              :error-messages="form.errors.get('PAYMENTS_MIN_TOTAL_DEPOSIT_TO_WITHDRAW')"
              :suffix="$t('credits')"
              :hint="minDepositAmountToWithdrawHint"
              :persistent-hint="true"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_MIN_TOTAL_DEPOSIT_TO_WITHDRAW')"
            />

            <v-switch
              v-model="form.PAYMENTS_WITHDRAWAL_ONLY_PROFITS"
              :label="$t('Allow only profit withdrawals')"
              color="primary"
              false-value="false"
              true-value="true"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Paypal') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.PAYMENTS_PAYPAL_USER"
              :label="$t('API username')"
              :error="form.errors.has('PAYMENTS_PAYPAL_USER')"
              :error-messages="form.errors.get('PAYMENTS_PAYPAL_USER')"
              outlined
              :hint="$t('Please note, it is different from your regular Paypal account username')"
              persistent-hint
              @keydown="clearFormErrors($event,'PAYMENTS_PAYPAL_USER')"
            />

            <v-text-field
              v-model="form.PAYMENTS_PAYPAL_PASSWORD"
              :label="$t('API password')"
              :error="form.errors.has('PAYMENTS_PAYPAL_PASSWORD')"
              :error-messages="form.errors.get('PAYMENTS_PAYPAL_PASSWORD')"
              outlined
              :hint="$t('Please note, it is different from your regular Paypal account password')"
              persistent-hint
              @keydown="clearFormErrors($event,'PAYMENTS_PAYPAL_PASSWORD')"
            />

            <v-text-field
              v-model="form.PAYMENTS_PAYPAL_SIGNATURE"
              :label="$t('API signature')"
              :error="form.errors.has('PAYMENTS_PAYPAL_SIGNATURE')"
              :error-messages="form.errors.get('PAYMENTS_PAYPAL_SIGNATURE')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_PAYPAL_SIGNATURE')"
            />

            <v-switch
              v-model="form.PAYMENTS_PAYPAL_TEST_MODE"
              :label="$t('Test mode')"
              color="primary"
              false-value="false"
              true-value="true"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Skrill') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.PAYMENTS_SKRILL_ACCOUNT_EMAIL"
              :label="$t('Account email')"
              :error="form.errors.has('PAYMENTS_SKRILL_ACCOUNT_EMAIL')"
              :error-messages="form.errors.get('PAYMENTS_SKRILL_ACCOUNT_EMAIL')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_SKRILL_ACCOUNT_EMAIL')"
            />
            <v-text-field
              v-model="form.PAYMENTS_SKRILL_SECRET_WORD"
              :label="$t('Secret word')"
              :error="form.errors.has('PAYMENTS_SKRILL_SECRET_WORD')"
              :error-messages="form.errors.get('PAYMENTS_SKRILL_SECRET_WORD')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_SKRILL_SECRET_WORD')"
            />
            <v-select
              v-model="form.PAYMENTS_SKRILL_PAYMENT_METHODS"
              :items="skrillPaymentMethods"
              :label="$t('Payment methods')"
              :error="form.errors.has('PAYMENTS_SKRILL_PAYMENT_METHODS')"
              :error-messages="form.errors.get('PAYMENTS_SKRILL_PAYMENT_METHODS')"
              multiple
              outlined
              @change="clearFormErrors($event,'PAYMENTS_SKRILL_PAYMENT_METHODS')"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Stripe') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.PAYMENTS_STRIPE_PUBLIC_KEY"
              :label="$t('Public key')"
              :error="form.errors.has('PAYMENTS_STRIPE_PUBLIC_KEY')"
              :error-messages="form.errors.get('PAYMENTS_STRIPE_PUBLIC_KEY')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_STRIPE_PUBLIC_KEY')"
            />

            <v-text-field
              v-model="form.PAYMENTS_STRIPE_SECRET_KEY"
              :label="$t('Secret key')"
              :error="form.errors.has('PAYMENTS_STRIPE_SECRET_KEY')"
              :error-messages="form.errors.get('PAYMENTS_STRIPE_SECRET_KEY')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_STRIPE_SECRET_KEY')"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Freekassa') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.PAYMENTS_FREEKASSA_MERCHANT_ID"
              :label="$t('Merchant ID')"
              :error="form.errors.has('PAYMENTS_FREEKASSA_MERCHANT_ID')"
              :error-messages="form.errors.get('PAYMENTS_FREEKASSA_MERCHANT_ID')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_FREEKASSA_MERCHANT_ID')"
            />

            <v-text-field
              v-model="form.PAYMENTS_FREEKASSA_API_KEY"
              :label="$t('API key')"
              :error="form.errors.has('PAYMENTS_FREEKASSA_API_KEY')"
              :error-messages="form.errors.get('PAYMENTS_FREEKASSA_API_KEY')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_FREEKASSA_API_KEY')"
            />

            <v-text-field
              v-model="form.PAYMENTS_FREEKASSA_SECRET_WORD"
              :label="$t('Secret word')"
              :error="form.errors.has('PAYMENTS_FREEKASSA_SECRET_WORD')"
              :error-messages="form.errors.get('PAYMENTS_FREEKASSA_SECRET_WORD')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_FREEKASSA_SECRET_WORD')"
            />

            <v-text-field
              v-model="form.PAYMENTS_FREEKASSA_SECRET_WORD2"
              :label="$t('Secret word 2')"
              :error="form.errors.has('PAYMENTS_FREEKASSA_SECRET_WORD2')"
              :error-messages="form.errors.get('PAYMENTS_FREEKASSA_SECRET_WORD2')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_FREEKASSA_SECRET_WORD2')"
            />

            <v-text-field
              ref="notifyUrl"
              :value="getNotifyUrl('freekassa')"
              :label="$t('Notification URL')"
              :persistent-hint="true"
              :hint="$t('The URL should be copied and pasted on the Freekassa settings page.')"
              readonly
              outlined
              append-icon="mdi-content-copy"
              @click:append="copyToClipboard($refs.notifyUrl.$el.querySelector('input'))"
            />

            <v-text-field
              ref="returnUrlComplete"
              :value="getReturnUrl('complete')"
              :label="$t('Successful payment return URL')"
              :persistent-hint="true"
              :hint="$t('The URL should be copied and pasted on the Freekassa settings page.')"
              readonly
              outlined
              append-icon="mdi-content-copy"
              class="mt-5"
              @click:append="copyToClipboard($refs.returnUrlComplete.$el.querySelector('input'))"
            />

            <v-text-field
              ref="returnUrlError"
              :value="getReturnUrl('error')"
              :label="$t('Error payment return URL')"
              :persistent-hint="true"
              :hint="$t('The URL should be copied and pasted on the Freekassa settings page.')"
              readonly
              outlined
              append-icon="mdi-content-copy"
              class="mt-5"
              @click:append="copyToClipboard($refs.returnUrlError.$el.querySelector('input'))"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Mercado Pago') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.PAYMENTS_MERCADOPAGO_ACCESS_TOKEN"
              :label="$t('Access token')"
              :error="form.errors.has('PAYMENTS_MERCADOPAGO_ACCESS_TOKEN')"
              :error-messages="form.errors.get('PAYMENTS_MERCADOPAGO_ACCESS_TOKEN')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_MERCADOPAGO_ACCESS_TOKEN')"
            />

            <v-switch
              v-model="form.PAYMENTS_MERCADOPAGO_LIVE"
              :label="$t('Live mode')"
              color="primary"
              false-value="false"
              true-value="true"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('SmartFastPay') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.PAYMENTS_SMARTFASTPAY_CLIENT_ID"
              :label="$t('Client ID')"
              :error="form.errors.has('PAYMENTS_SMARTFASTPAY_CLIENT_ID')"
              :error-messages="form.errors.get('PAYMENTS_SMARTFASTPAY_CLIENT_ID')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_SMARTFASTPAY_CLIENT_ID')"
            />

            <v-text-field
              v-model="form.PAYMENTS_SMARTFASTPAY_SECRET_KEY"
              :label="$t('Secret key')"
              :error="form.errors.has('PAYMENTS_SMARTFASTPAY_SECRET_KEY')"
              :error-messages="form.errors.get('PAYMENTS_SMARTFASTPAY_SECRET_KEY')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_SMARTFASTPAY_SECRET_KEY')"
            />

            <v-switch
              v-model="form.PAYMENTS_SMARTFASTPAY_LIVE"
              :label="$t('Live mode')"
              color="primary"
              false-value="false"
              true-value="true"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('EasyWire') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.PAYMENTS_EASYWIRE_USER"
              :label="$t('API user')"
              :error="form.errors.has('PAYMENTS_EASYWIRE_USER')"
              :error-messages="form.errors.get('PAYMENTS_EASYWIRE_USER')"
              outlined
            />

            <v-text-field
              v-model="form.PAYMENTS_EASYWIRE_PASSWORD"
              :label="$t('API password')"
              :error="form.errors.has('PAYMENTS_EASYWIRE_PASSWORD')"
              :error-messages="form.errors.get('PAYMENTS_EASYWIRE_PASSWORD')"
              outlined
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Coinpayments') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.PAYMENTS_COINPAYMENTS_MERCHANT_ID"
              :label="$t('Merchant ID')"
              :error="form.errors.has('PAYMENTS_COINPAYMENTS_MERCHANT_ID')"
              :error-messages="form.errors.get('PAYMENTS_COINPAYMENTS_MERCHANT_ID')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_COINPAYMENTS_MERCHANT_ID')"
            />

            <v-text-field
              v-model="form.PAYMENTS_COINPAYMENTS_PUBLIC_KEY"
              :label="$t('Public key')"
              :error="form.errors.has('PAYMENTS_COINPAYMENTS_PUBLIC_KEY')"
              :error-messages="form.errors.get('PAYMENTS_COINPAYMENTS_PUBLIC_KEY')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_COINPAYMENTS_PUBLIC_KEY')"
            />

            <v-text-field
              v-model="form.PAYMENTS_COINPAYMENTS_PRIVATE_KEY"
              :label="$t('Private key')"
              :error="form.errors.has('PAYMENTS_COINPAYMENTS_PRIVATE_KEY')"
              :error-messages="form.errors.get('PAYMENTS_COINPAYMENTS_PRIVATE_KEY')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_COINPAYMENTS_PRIVATE_KEY')"
            />

            <v-text-field
              v-model="form.PAYMENTS_COINPAYMENTS_SECRET_KEY"
              :label="$t('Secret key')"
              :error="form.errors.has('PAYMENTS_COINPAYMENTS_SECRET_KEY')"
              :error-messages="form.errors.get('PAYMENTS_COINPAYMENTS_SECRET_KEY')"
              outlined
              @keydown="clearFormErrors($event,'PAYMENTS_COINPAYMENTS_SECRET_KEY')"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Tron') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-select
              v-model="form.PAYMENTS_TRON_NETWORK"
              :items="tronNetworks"
              :label="$t('Network')"
              :error="form.errors.has('PAYMENTS_TRON_NETWORK')"
              :error-messages="form.errors.get('PAYMENTS_TRON_NETWORK')"
              outlined
              @change="clearFormErrors($event,'PAYMENTS_TRON_NETWORK')"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('CryptAPI') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.PAYMENTS_CRYPTAPI_SECRET"
              :label="$t('Secret key')"
              :error="form.errors.has('PAYMENTS_CRYPTAPI_SECRET')"
              :error-messages="form.errors.get('PAYMENTS_CRYPTAPI_SECRET')"
              outlined
              :hint="$t('Input a random alphanumeric string without spaces')"
              :persistent-hint="true"
              class="mb-5"
              @keydown="clearFormErrors($event,'PAYMENTS_CRYPTAPI_SECRET')"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('XRPL') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
                v-model="form.PAYMENTS_XRPL_APIKEY"
                :label="$t('API KEY')"
                :error="form.errors.has('PAYMENTS_XRPL_APIKEY')"
                :error-messages="form.errors.get('PAYMENTS_XRPL_APIKEY')"
                outlined
            />

            <v-text-field
                v-model="form.PAYMENTS_XRPL_APISECRET"
                :label="$t('API SECRET')"
                :error="form.errors.has('PAYMENTS_XRPL_APISECRET')"
                :error-messages="form.errors.get('PAYMENTS_XRPL_APISECRET')"
                outlined
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
import { config } from '~/plugins/config'
import FormMixin from '~/mixins/Form'
import { baseUrl, copyToClipboard } from '~/plugins/utils'

export default {
  mixins: [FormMixin],

  props: {
    packageId: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },

  data () {
    console.log(this.packageId)
    return {
      variables: {
        PAYMENTS_DEPOSIT_AUTO_CANCEL_DAYS: config(`${this.packageId}.deposit_auto_cancel_days`),
        PAYMENTS_WITHDRAWAL_DAILY_LIMIT: parseInt(config(`${this.packageId}.withdrawal_daily_limit`), 10),
        PAYMENTS_WITHDRAWAL_WEEKLY_LIMIT: parseInt(config(`${this.packageId}.withdrawal_weekly_limit`), 10),
        PAYMENTS_WITHDRAWAL_MONTHLY_LIMIT: parseInt(config(`${this.packageId}.withdrawal_monthly_limit`), 10),
        PAYMENTS_WITHDRAWAL_ONLY_PROFITS: '' + config(`${this.packageId}.withdrawal_only_profits`),
        PAYMENTS_MIN_TOTAL_DEPOSIT_TO_WITHDRAW: config(`${this.packageId}.min_total_deposit_to_withdraw`),
        PAYMENTS_PAYPAL_USER: config(`${this.packageId}.paypal.user`),
        PAYMENTS_PAYPAL_PASSWORD: config(`${this.packageId}.paypal.password`),
        PAYMENTS_PAYPAL_SIGNATURE: config(`${this.packageId}.paypal.signature`),
        PAYMENTS_PAYPAL_TEST_MODE: '' + config(`${this.packageId}.paypal.test_mode`),
        PAYMENTS_SKRILL_ACCOUNT_EMAIL: config(`${this.packageId}.skrill.account`),
        PAYMENTS_SKRILL_SECRET_WORD: config(`${this.packageId}.skrill.secret`),
        PAYMENTS_SKRILL_PAYMENT_METHODS: Array.isArray(config(`${this.packageId}.skrill.methods`)) ? config(`${this.packageId}.skrill.methods`) : [],
        PAYMENTS_STRIPE_PUBLIC_KEY: config(`${this.packageId}.stripe.public_key`),
        PAYMENTS_STRIPE_SECRET_KEY: config(`${this.packageId}.stripe.secret_key`),
        PAYMENTS_FREEKASSA_MERCHANT_ID: config(`${this.packageId}.freekassa.merchant_id`),
        PAYMENTS_FREEKASSA_API_KEY: config(`${this.packageId}.freekassa.api_key`),
        PAYMENTS_FREEKASSA_SECRET_WORD: config(`${this.packageId}.freekassa.secret`),
        PAYMENTS_FREEKASSA_SECRET_WORD2: config(`${this.packageId}.freekassa.secret2`),
        PAYMENTS_MERCADOPAGO_ACCESS_TOKEN: config(`${this.packageId}.mercadopago.access_token`),
        PAYMENTS_MERCADOPAGO_LIVE: '' + config(`${this.packageId}.mercadopago.live`),
        PAYMENTS_SMARTFASTPAY_CLIENT_ID: config(`${this.packageId}.smartfastpay.client_id`),
        PAYMENTS_SMARTFASTPAY_SECRET_KEY: config(`${this.packageId}.smartfastpay.secret_key`),
        PAYMENTS_SMARTFASTPAY_LIVE: '' + config(`${this.packageId}.smartfastpay.live`),
        PAYMENTS_EASYWIRE_USER: config(`${this.packageId}.easywire.user`),
        PAYMENTS_EASYWIRE_PASSWORD: config(`${this.packageId}.easywire.password`),
        PAYMENTS_XRPL_APIKEY: config(`${this.packageId}.xrpl.api_key`),
        PAYMENTS_XRPL_APISECRET: config(`${this.packageId}.xrpl.api_secret`),
        PAYMENTS_COINPAYMENTS_MERCHANT_ID: config(`${this.packageId}.coinpayments.merchant_id`),
        PAYMENTS_COINPAYMENTS_PUBLIC_KEY: config(`${this.packageId}.coinpayments.public_key`),
        PAYMENTS_COINPAYMENTS_PRIVATE_KEY: config(`${this.packageId}.coinpayments.private_key`),
        PAYMENTS_COINPAYMENTS_SECRET_KEY: config(`${this.packageId}.coinpayments.secret_key`),
        PAYMENTS_TRON_NETWORK: config(`${this.packageId}.tron.network`),
        PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_ENABLED: '' + config(`${this.packageId}.notifications.admin.deposit.enabled`),
        PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_TRESHOLD: parseInt(config(`${this.packageId}.notifications.admin.deposit.treshold`), 10),
        PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_ENABLED: '' + config(`${this.packageId}.notifications.admin.withdrawal.enabled`),
        PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_TRESHOLD: parseInt(config(`${this.packageId}.notifications.admin.withdrawal.treshold`), 10),
        PAYMENTS_CRYPTAPI_SECRET: config(`${this.packageId}.cryptapi.secret`)
      }
    }
  },

  computed: {
    autoConfirmWithdrawalsHint () {
      return this.$t('Please note that this setting only affects whether an extra email confirmation is required for all withdrawals from your coinpayments.net account.') + ' ' +
        this.$t('For this setting to work you also need to set "Allow auto_confirm = 1 in create_withdrawal" permission in your coinpayments.net account for the given API key.')
    },
    maxAutoWithdrawalHint () {
      return this.$t('Automatically confirm and process withdrawals, which are less than or equal to the above amount.') + ' ' +
        this.$t('Please note that even though such withdrawals will be processed automatically on the application side an extra email confirmation might be required on the payments provider side (see "Auto confirm withdrawals" setting).') + ' ' +
        this.$t('Leave zero if you like to manually approve all withdrawals.')
    },
    minDepositAmountToWithdrawHint () {
      return this.$t('User will need to deposit at least this amount before being able to withdraw funds.') + ' ' +
        this.$t('Set the value to 0 if you do not want to limit withdrawals.')
    },
    tronNetworks () {
      return [
        { text: this.$t('Mainnet (trongrid)'), value: 'api.trongrid.io' },
        { text: this.$t('Mainnet (tronstack)'), value: 'api.tronstack.io' },
        { text: this.$t('Shasta testnet'), value: 'api.shasta.trongrid.io' }
      ]
    },
    skrillPaymentMethods () {
      return [
        { text: this.$t('Skrill Digital Wallet'), value: 'WLT' },
        { text: this.$t('Neteller'), value: 'NTL' },
        { text: this.$t('Paysafecard'), value: 'PSC' },
        { text: this.$t('Paysafecash'), value: 'PCH' },
        { text: this.$t('All card types available in the customer’s country'), value: 'ACC' },
        { text: this.$t('Visa'), value: 'VSA' },
        { text: this.$t('Mastercard'), value: 'MSC' },
        { text: this.$t('Visa Electron'), value: 'VSE' },
        { text: this.$t('Maestro'), value: 'MAE' },
        { text: this.$t('Carte Bleue'), value: 'GCB' },
        { text: this.$t('Dankort'), value: 'DNK' },
        { text: this.$t('PostePay'), value: 'PSP' },
        { text: this.$t('CartaSi'), value: 'CSI' },
        { text: this.$t('Rapid Transfer (Online Bank Transfer)'), value: 'OBT' },
        { text: this.$t('Rapid Transfer (Online Bank Transfer, detailed payment type information)'), value: 'NGP' },
        { text: this.$t('giropay'), value: 'GIR' },
        { text: this.$t('Direct Debit/SEPA'), value: 'DID' },
        { text: this.$t('Klarna (was Sofort)'), value: 'SFT' },
        { text: this.$t('iDEAL'), value: 'IDL' },
        { text: this.$t('iDEAL (GlobalConnect)'), value: 'GCI' },
        { text: this.$t('POLi'), value: 'PLI' },
        { text: this.$t('Przelewy24'), value: 'PWY' },
        { text: this.$t('ePay.bg'), value: 'EPY' },
        { text: this.$t('Trustly'), value: 'GLU' },
        { text: this.$t('Alipay'), value: 'ALI' },
        { text: this.$t('Astropay - Online bank transfer (Direct Bank Transfer)'), value: 'ADB' },
        { text: this.$t('Astropay - Offline bank transfer'), value: 'AOB' },
        { text: this.$t('Astropay - Cash (Invoice)'), value: 'ACI' },
        { text: this.$t('Rapyd'), value: 'RBR' },
      ]
    }
  },

  created () {
    this.$emit('input', this.variables)
  },

  methods: {
    copyToClipboard,
    getNotifyUrl (method) {
      const url = config('app.url') || baseUrl()
      return `${url}/api/webhooks/deposits/${method}`
    },
    getReturnUrl (status) {
      const url = config('app.url') || baseUrl()
      return `${url}/user/account/deposits?status=${status}`
    }
  }
}
</script>
