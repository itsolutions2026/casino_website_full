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
                :label="$t('Deposit amount')"
                :suffix="$t('credits')"
                :rules="[v => validationMin(v, depositMin), v => validationMax(v, depositMax)]"
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
                :suffix="paymentCurrenciesCount > 0 ? '' : currency"
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

              <template v-if="get(method, 'payment_method.gateway.code') === 'stripe'">
                <input v-model="form.parameters.payment_method_id" type="hidden" />
                <div ref="card"></div>
                <div ref="error" class="mb-5"></div>
              </template>

              <template v-else-if="get(method, 'payment_method.gateway.code') === 'evm'">
                <v-text-field
                  v-show="evm.wallet.isConnected"
                  v-model="form.parameters.address"
                  :label="$t('Your address')"
                  :rules="[validationRequired]"
                  :error="form.errors.has('parameters.address')"
                  :error-messages="form.errors.get('parameters.address')"
                  :readonly="true"
                  outlined
                  @change="clearFormErrors($event,'parameters.address')"
                >
                  <template v-slot:append-outer>
                    <v-btn
                      class="mt-n2"
                      :disabled="evmAddressIsConfirmed || !form.parameters.address || evm.confirmedAddresses === null || evm.addressConfirmationInProgress"
                      :loading="evm.addressConfirmationInProgress"
                      @click="confirmBlockchainAddress"
                    >
                      {{ $t('Confirm') }}
                    </v-btn>
                  </template>
                </v-text-field>

                <p v-if="evmChainName" class="success--text">
                  {{ $t('You are connected to') }} {{ evmChainName }}
                </p>

                <template v-if="evm.wallet.isInstalled">
                  <div v-if="!evm.wallet.isConnected" class="mb-5">
                    <v-btn color="secondary" @click="connectWeb3Wallet()">
                      {{ $t('Connect wallet') }}
                    </v-btn>
                  </div>
                </template>
                <v-alert
                  v-else
                  dense
                  outlined
                  text
                  type="warning"
                  class="justify-center align-center align-content-center"
                >
                  <p>
                    {{ $t('Web3 wallet is not detected.') }}
                    {{ $t('If you are using a desktop computer, install the Metamask wallet browser extension.') }}
                    {{ $t('If you are using a mobile phone, use the in-app browser.') }}
                  </p>
                </v-alert>
              </template>

              <template v-else-if="get(method, 'payment_method.gateway.code') === 'tron'">
                <v-text-field
                  v-show="tron.wallet.isConnected"
                  v-model="form.parameters.address"
                  :label="$t('Your address')"
                  :rules="[validationRequired]"
                  :error="form.errors.has('parameters.address')"
                  :error-messages="form.errors.get('parameters.address')"
                  :readonly="true"
                  outlined
                  @change="clearFormErrors($event,'parameters.address')"
                >
                  <template v-slot:append-outer>
                    <v-btn
                      class="mt-n2"
                      :disabled="tronAddressIsConfirmed || !form.parameters.address || tron.confirmedAddresses === null || tron.addressConfirmationInProgress"
                      :loading="tron.addressConfirmationInProgress"
                      @click="confirmBlockchainAddress"
                    >
                      {{ $t('Confirm') }}
                    </v-btn>
                  </template>
                </v-text-field>

                <template v-if="tron.wallet.isInstalled">
                  <div v-if="!tron.wallet.isConnected" class="mb-5">
                    <v-btn color="secondary" @click="connectTronlink()">
                      {{ $t('Connect Tronlink') }}
                    </v-btn>
                  </div>
                </template>
                <v-alert
                  v-else
                  dense
                  outlined
                  text
                  type="warning"
                  class="justify-center align-center align-content-center"
                >
                  <p>
                    {{ $t('Tronlink wallet is not detected.') }}
                    {{ $t('If you are using a desktop computer, install the Tronlink wallet browser extension.') }}
                    {{ $t('If you are using a mobile phone, use the in-app browser.') }}
                  </p>
                </v-alert>
              </template>

              <template v-else-if="get(method, 'payment_method.gateway.code') === 'solana'">
                <v-text-field
                  v-show="solana.phantom.isConnected"
                  v-model="form.parameters.address"
                  :label="$t('Your address')"
                  :rules="[validationRequired]"
                  :error="form.errors.has('parameters.address')"
                  :error-messages="form.errors.get('parameters.address')"
                  :readonly="true"
                  outlined
                  @change="clearFormErrors($event,'parameters.address')"
                >
                  <template v-slot:append-outer>
                    <v-btn
                      class="mt-n2"
                      :disabled="solanaAddressIsConfirmed || !form.parameters.address || solana.confirmedAddresses === null || solana.addressConfirmationInProgress"
                      :loading="solana.addressConfirmationInProgress"
                      @click="confirmBlockchainAddress"
                    >
                      {{ $t('Confirm') }}
                    </v-btn>
                  </template>
                </v-text-field>

                <template v-if="solana.phantom.isInstalled">
                  <div v-if="!solana.phantom.isConnected" class="mb-5">
                    <v-btn color="secondary" @click="connectPhantom(false)">
                      {{ $t('Connect Phantom wallet') }}
                    </v-btn>
                  </div>
                </template>
                <v-alert
                  v-else
                  dense
                  outlined
                  text
                  type="warning"
                  class="justify-center align-center align-content-center"
                >
                  <p>
                    {{ $t('Phantom wallet is not detected.') }}
                    {{ $t('If you are using a desktop computer, install the Phantom wallet browser extension.') }}
                    {{ $t('If you are using a mobile phone, use the in-app browser.') }}
                  </p>
                </v-alert>
              </template>

              <template v-else-if="get(method, 'payment_method.gateway.code') === 'xrpl'">
                <v-text-field
                    v-show="xrpl.xumm.isConnected"
                    v-model="form.parameters.address"
                    :label="$t('Your address')"
                    :rules="[validationRequired]"
                    :error="form.errors.has('parameters.address')"
                    :error-messages="form.errors.get('parameters.address')"
                    :readonly="true"
                    outlined
                    @change="clearFormErrors($event,'parameters.address')"
                >
                  <template v-slot:append-outer>
                    <v-btn
                        class="mt-n2"
                        :disabled="xrplAddressIsConfirmed || !form.parameters.address || xrpl.confirmedAddresses === null || xrpl.addressConfirmationInProgress"
                        :loading="xrpl.addressConfirmationInProgress"
                        @click="confirmBlockchainAddress"
                    >
                      {{ $t('Confirm') }}
                    </v-btn>
                  </template>
                </v-text-field>

                <template v-if="xrpl.xumm.isInstalled">
                  <div v-if="!xrpl.xumm.isConnected" class="mb-5">
                    <v-btn color="secondary" @click="connectXumm()">
                      {{ $t('Connect Xumm wallet') }}
                    </v-btn>
                  </div>
                  <div v-else class="mb-5">
                    <v-btn color="secondary" @click="disconnectXumm()">
                      {{ $t('Disconnect wallet') }}
                    </v-btn>
                  </div>
                </template>
                <v-alert
                    v-else
                    dense
                    outlined
                    text
                    type="warning"
                    class="justify-center align-center align-content-center"
                >
                  <p>
                    {{ $t('Xumm wallet is not detected.') }}
                  </p>
                </v-alert>
              </template>

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

              <v-btn type="submit" color="primary" :disabled="!formIsValid || form.busy || formIsProcessing" :loading="form.busy">
                {{ submitButtonText }}
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else-if="methods.length === 0" align="center" justify="center">
      <v-col>
        <p class="text-center">
          {{ $t('No deposit methods enabled.') }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import { config } from '~/plugins/config'
import { get, loadScript } from '~/plugins/utils'
import { decimal } from '~/plugins/format'
import { mapState } from 'vuex'
import Form from 'vform'
import FormMixin from '~/mixins/Form'
import Web3 from 'web3'
import FormParameter from '~/components/FormParameter'
import bs58 from 'bs58'
import chains from 'packages/payments/resources/js/static/chains'
import { Xumm } from 'xumm'

export default {
  components: { FormParameter },

  mixins: [FormMixin],

  middleware: ['auth', 'verified', '2fa_passed'],

  metaInfo () {
    return { title: this.$t('Make a deposit') }
  },

  data () {
    return {
      method: null, // currently selected deposit method object
      methods: null,
      formIsProcessing: false,
      submitButtonText: this.$t('Proceed'),
      form: new Form({
        amount: null,
        payment_currency: null,
        parameters: {}
      }),
      evm: {
        addresses: [],
        confirmedAddresses: null,
        addressConfirmationInProgress: false,
        web: null,
        wallet: {
          isInstalled: false,
          isConnected: false
        }
      },
      tron: {
        addresses: [],
        confirmedAddresses: null,
        addressConfirmationInProgress: false,
        web: null,
        wallet: {
          isInstalled: false,
          isConnected: false
        }
      },
      solana: {
        confirmedAddresses: null,
        addressConfirmationInProgress: false,
        phantom: {
          isInstalled: false,
          isConnected: false
        }
      },
      xrpl: {
        confirmedAddresses: null,
        addressConfirmationInProgress: false,
        xumm: {
          signature: null,
          isInstalled: false,
          isConnected: false
        }
      },
      xummInstance: null,
      stripe: {
        instance: null,
        elements: null,
        card: null
      }
    }
  },

  computed: {
    ...mapState('auth', [
      'user'
    ]),
    currency () {
      return get(this.method, 'currency')
    },
    rate () {
      return this.form.payment_currency && this.paymentCurrenciesCount > 0
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
    depositMin () {
      return get(this.method, 'min_amount')
    },
    depositMax () {
      return get(this.method, 'max_amount')
    },
    evmAddressIsConfirmed () {
      return this.evm.confirmedAddresses && !!this.evm.confirmedAddresses.find(item => item.address === this.form.parameters.address)
    },
    tronAddressIsConfirmed () {
      return this.tron.confirmedAddresses && !!this.tron.confirmedAddresses.find(item => item.address === this.form.parameters.address)
    },
    solanaAddressIsConfirmed () {
      return this.solana.confirmedAddresses && !!this.solana.confirmedAddresses.find(item => item.address === this.form.parameters.address)
    },
    xrplAddressIsConfirmed () {
      return this.xrpl.confirmedAddresses && !!this.xrpl.confirmedAddresses.find(item => item.address === this.form.parameters.address)
    },
    evmChainName () {
      return Web3.givenProvider ? (chains[Web3.givenProvider.networkVersion] || this.$t('Unknown chain')) : null
    }
  },

  watch: {
    async method (method) {
      this.formIsValid = true
      this.form.errors.clear()

      this.$nextTick(() => {
        this.form.amount = this.depositMin
      })

      const code = get(method, 'payment_method.gateway.code')

      // disable credentials for tron to avoid this error:
      // Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'
      axios.defaults.withCredentials = code !== 'tron'

      this.form.parameters = {}
      // Assign default values to custom parameters
      if (method && method.parameters) {
        method.parameters.forEach(parameter => {
          this.$set(this.form.parameters, parameter.id, parameter.default)
        })
      }

      // Assign default values to built-in method parameters
      if (method && method.payment_method) {
        method.payment_method.input_parameters.forEach(parameter => {
          this.$set(this.form.parameters, parameter.id, parameter.default)
        })
      }

      if (code === 'stripe') {
        if (this.stripe.instance) {
          this.$nextTick(() => { this.initStripe() })
        } else {
          loadScript('https://js.stripe.com/v3/', this.initStripe)
        }
      } else if (code === 'evm') {
        if (Web3.givenProvider) {
          this.evm.wallet.isInstalled = true
          if (Web3.givenProvider.selectedAddress) {
            this.connectWeb3Wallet()
          }
        }
      } else if (code === 'tron') {
        if (window.tronWeb) {
          this.tron.wallet.isInstalled = true
        }
      } else if (code === 'solana') {
        if (window.solana) {
          this.solana.phantom.isInstalled = window.solana && window.solana.isPhantom
          this.connectPhantom(true)
        }
      } else if (code === 'xrpl') {

        this.xummInstance = new Xumm(config('payments.xrpl.api_key'))

        this.xummInstance.on('success', async () =>{
          const { payload_uuidv4 } = await this.xummInstance.environment.jwt
          this.xrpl.xumm.signature = payload_uuidv4
          this.xummInstance.user.account.then(account => {
            if(account){
              this.$set(this.form.parameters, 'address', account)
              this.xrpl.xumm.isConnected = true
              this.fetchConfirmedBlockchainAddresses('xrpl')
            }
          })
        })
        if (this.xummInstance) {
          this.xrpl.xumm.isInstalled = true
        }
      }

      this.form.payment_currency = this.paymentCurrencies ? Object.keys(this.paymentCurrencies)[0] : null
    },
    evmAddressIsConfirmed (confirmed) {
      this.checkAddress(confirmed)
    },
    tronAddressIsConfirmed (confirmed) {
      this.checkAddress(confirmed)
    },
    solanaAddressIsConfirmed (confirmed) {
      this.checkAddress(confirmed)
    }
  },

  async created () {
    this.$store.dispatch('auth/fetchUser')

    const { data } = await axios.get('/api/deposit-methods')
    this.methods = data
  },

  beforeDestroy () {
    axios.defaults.withCredentials = true
  },

  methods: {
    get,
    chooseMethod (method) {
      this.method = method
      window.scrollTo(0, 0)
    },
    checkAddress (confirmed) {
      if (confirmed) {
        this.form.errors.clear('parameters.address')
      } else if (!confirmed && this.form.parameters.address) {
        this.form.errors.set('parameters.address', this.$t('Please confirm this address belongs to you by signing a random text string.'))
      }
    },
    async initWeb3 (blockchain) {
      if (!Web3.givenProvider) {
        this.$store.dispatch('message/error', { text: this.$t('Please check that a {0} compatible wallet (such as {1}) is installed and enabled in your browser.', ['Web3', 'Metamask']) })
        this.formIsValid = false
        return false
      }

      const web = new Web3(Web3.givenProvider)
      this[blockchain].web = web

      try {
        const addresses = await web.eth.requestAccounts()
        this[blockchain].addresses = addresses
        this.$set(this.form.parameters, 'address', addresses[0])
        this.fetchConfirmedBlockchainAddresses(blockchain)
      } catch (error) {
        this.$store.dispatch('message/error', {
          text: error.code === 4001
            ? this.$t('Access to your account is not authorized')
            : error.message
        })
        this.formIsValid = false
      }
    },
    async connectTronlink () {
      const web = window.tronWeb
      this.tron.web = web

      const address = web.defaultAddress.base58

      if (address !== false) {
        this.tron.wallet.isConnected = true
        this.$set(this.form.parameters, 'address', address)
        this.fetchConfirmedBlockchainAddresses('tron')
      } else {
        this.$store.dispatch('message/error', { text: this.$t('Access to your account is not authorized') })
        this.formIsValid = false
      }
    },
    async connectWeb3Wallet () {
      const web = new Web3(Web3.givenProvider)
      this.evm.web = web
      let addresses

      try {
        addresses = await web.eth.requestAccounts()
      } catch (err) {
        this.$store.dispatch('message/error', { text: err.message })
        this.formIsValid = false
        return false
      }

      this.evm.wallet.isConnected = !!addresses[0]
      this.$set(this.form.parameters, 'address', addresses[0])
      this.fetchConfirmedBlockchainAddresses('evm')
    },
    async connectPhantom (silent) {
      try {
        await window.solana.connect({ onlyIfTrusted: silent })
      } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
        if (!silent) {
          this.$store.dispatch('message/error', { text: err.message })
          this.formIsValid = false
        }
        return false
      }

      this.solana.phantom.isConnected = window.solana.isConnected
      this.$set(this.form.parameters, 'address', window.solana.publicKey.toString())
      this.fetchConfirmedBlockchainAddresses('solana')
    },
    async connectXumm(){
      try {
        this.xummInstance.authorize()
      } catch (err) {
        this.$store.dispatch('message/error', { text: err.message })
        this.formIsValid = false
        return false
      }
    },
    async disconnectXumm(){
      await this.xummInstance.logout()
      this.xrpl.xumm.isConnected = false
      this.xrpl.xumm.signature = null
      this.$set(this.form.parameters, 'address', '')
    },
    async fetchConfirmedBlockchainAddresses (blockchain) {
      if (!this[blockchain].confirmedAddresses) {
        const { data } = await axios.get(`/api/blockchains/${blockchain}/addresses`)

        this[blockchain].confirmedAddresses = data
      }
    },
    async confirmBlockchainAddress () {
      const blockchain = get(this.method, 'payment_method.gateway.code')

      this[blockchain].addressConfirmationInProgress = true

      const { data } = await axios.post(`/api/blockchains/${blockchain}/addresses`, { address: this.form.parameters.address })

      let signature
      const address = data
      const web = this[blockchain].web

      try {
        if (blockchain === 'tron') {
          signature = await web.trx.sign(web.toHex(address.message).replace(/^0x/, ''))
        } else if (blockchain === 'solana') {
          const response = await window.solana.signMessage(new TextEncoder().encode(address.message), 'utf8')
          signature = bs58.encode(response.signature)
        } else if (blockchain === 'xrpl') {
          signature = this.xrpl.xumm.signature
        }
        else {
          signature = await web.eth.personal.sign(address.message, this.form.parameters.address)
        }
      } catch (error) {
        this.form.errors.set('parameters.address', error.message)
      }

      if (signature) {
        const request = await axios.post(`/api/blockchains/${blockchain}/addresses/${address.id}/verify`, { signature })

        this[blockchain].confirmedAddresses.push(request.data)
      }

      this[blockchain].addressConfirmationInProgress = false
    },
    initStripe () {
      this.stripe.instance = window.Stripe(config('payments.stripe.public_key'))

      const style = {
        base: {
          color: this.$vuetify.theme.isDark ? '#fff' : '#000',
          lineHeight: '20px',
          fontFamily: 'inherit',
          fontSize: '16px',
          '::placeholder': {
            color: this.$vuetify.theme.isDark ? 'rgba(255, 255, 255, 0.7)' : '#000'
          },
          fontSmoothing: 'antialiased'
        },
        invalid: {
          color: '#ff5252',
          iconColor: '#ff5252'
        }
      }

      this.stripe.elements = this.stripe.instance.elements()
      this.stripe.card = this.stripe.elements.create('card', { style })
      this.stripe.card.mount(this.$refs.card)

      // Handle real-time validation errors from the card Element.
      this.stripe.card.addEventListener('change', event => {
        this.$refs.error.textContent = event.error ? event.error.message : ''
      })
    },
    async submit () {
      this.formIsProcessing = true

      if (get(this.method, 'payment_method.gateway.code') === 'stripe') {
        const { paymentMethod } = await this.stripe.instance.createPaymentMethod(
          'card',
          this.stripe.card, {
            billing_details: {
              name: this.user.name,
              email: this.user.email
            }
          })
        this.form.parameters.payment_method_id = paymentMethod.id
      }

      const { data } = await this.form.post(`/api/deposits/methods/${this.method.id}`)
        .catch(() => {
          return false
        })

      // data will be undefined in case of any form errors (422 HTTP code)

      if (data) {
        if (data.success) {
          if (data.redirect) {
            if (data.redirect.external) {
              this.submitButtonText = this.$t('Redirecting') + '...'
              window.location.href = data.redirect.url
            } else {
              this.$router.push({ name: data.redirect.url, params: data.redirect.params })
            }
          } else {
            this.$router.push({ name: 'user.account.deposits.index', query: { status: 'complete' } })
          }
        // error
        } else {
          this.$store.dispatch('message/error', { text: data.message })
          this.formIsProcessing = false
        }
      } else {
        this.formIsProcessing = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .method-description {
    white-space: pre-line;
  }

  .StripeElement {
    padding: 16px 0 16px 12px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.24);

    .ElementsApp {
      .InputElement {
        font-size: 16px;
        line-height: 20px;
        padding: 8px 0 8px;
      }
    }
  }

  .StripeElement--focus {
    border-width: 2px;
    border-color: var(--v-primary-base);
  }

  .StripeElement--invalid {
    border-color: #ff5252;
  }

  .theme-light {
    .StripeElement {
      border-color: rgba(0, 0, 0, 0.42);
    }

    .StripeElement--focus {
      border-color: var(--v-primary-base);
    }
  }

  /*.v-alert::v-deep {
    .v-alert__wrapper {
      .v-icon {
        align-self: center;
      }
    }
  }*/
</style>
