<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-toolbar>
            <v-btn icon @click="$router.go(-1)">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>
              {{ $t('Withdrawal {0}', [id]) }}
            </v-toolbar-title>
            <v-spacer />
            <withdrawal-menu v-if="withdrawal" :id="id" :item="withdrawal" />
          </v-toolbar>
          <v-card-text>
            <key-value-table
              name="withdrawal"
              :api="`/api/admin/withdrawals/${id}`"
              :headers="headers"
              class="wrap-long-text"
              @load="withdrawal = $event.data"
            >
              <template v-slot:user="{ item: { account: { user } } }">
                <router-link :to="{ name: 'admin.users.show', params: { id: user.id } }">
                  {{ user.name }}
                </router-link>
              </template>
              <template v-slot:response="{ item }">
                <v-dialog v-if="item.response" v-model="modal" width="600">
                  <template v-slot:activator="{ on }">
                    <slot :on="on">
                      <a class="link" v-on="on">
                        {{ $t('View') }}
                      </a>
                    </slot>
                  </template>
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        {{ $t('API response') }}
                      </v-toolbar-title>
                      <v-spacer />
                      <v-btn icon @click="modal = false">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-card-text class="pa-4">
                      <pre>{{ JSON.stringify(item.response, null, 2) }}</pre>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </template>
              <template v-slot:after="{ item: { withdrawal: { method, parameters } } }">
                <tr v-for="(value, key) in parameters" :key="key">
                  <td>
                    {{ ucfirst(getParameterAttribute('name', key, method.parameters, key).replace(/_/, ' ')) }}
                  </td>
                  <td v-if="getParameterAttribute('type', key, method.parameters) === 'switch'" class="text-right">
                    {{ value ? $t('Yes') : $t('No') }}
                  </td>
                  <td v-else class="text-right">
                    {{ value }}
                  </td>
                </tr>
              </template>
            </key-value-table>
            <v-row v-if="withdrawal" class="mt-5">
              <v-col cols="12" class="text-center">
                <v-tooltip v-if="withdrawal.is_created || withdrawal.is_pending" bottom>
                  <template #activator="{ on }">
                    <v-form v-model="formIsValid" class="d-inline-block" @submit.prevent="action('cancel')">
                      <v-btn type="submit" color="error" :disabled="!formIsValid || form.busy" :loading="form.busy" v-on="on">
                        {{ $t('Cancel') }}
                      </v-btn>
                    </v-form>
                  </template>
                  <span>{{ $t('Cancel request and return funds to user account.') }}</span>
                </v-tooltip>
                <v-tooltip v-if="withdrawal.is_created && ['freekassa', 'coinpayments', 'smartfastpay', 'easywire'].indexOf(get(withdrawal, 'method.payment_method.gateway.code')) > -1" bottom>
                  <template v-slot:activator="{ on }">
                    <v-form v-model="formIsValid" class="d-inline-block" @submit.prevent="action('send')">
                      <v-btn type="submit" color="primary" :disabled="!formIsValid || form.busy" :loading="form.busy" v-on="on">
                        {{ $t('Approve') }} & {{ $t('Send') }}
                      </v-btn>
                    </v-form>
                  </template>
                  <span>{{ $t('Approve request and send funds to user through API.') }}</span>
                </v-tooltip>
                <v-tooltip v-if="withdrawal.is_created && ['evm'].indexOf(get(withdrawal, 'method.payment_method.gateway.code')) > -1" bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      color="primary"
                      :disabled="transactionInProgress || !!get(withdrawal, 'external_id') || form.busy"
                      :loading="transactionInProgress || form.busy"
                      @click="createEvmTransaction"
                      v-on="on"
                    >
                      {{ $t('Pay') }}
                    </v-btn>
                  </template>
                  <span>{{ $t('Complete the payment with a {0} compatible wallet (such as {1}).', ['Web3', 'Metamask']) }}</span>
                </v-tooltip>
                <v-tooltip v-if="withdrawal.is_created && get(withdrawal, 'method.payment_method.gateway.code') === 'tron'" bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      color="primary"
                      :disabled="transactionInProgress || !!get(withdrawal, 'external_id') || form.busy"
                      :loading="transactionInProgress || form.busy"
                      @click="createTronTransaction"
                      v-on="on"
                    >
                      {{ $t('Pay') }}
                    </v-btn>
                  </template>
                  <span>{{ $t('Complete the payment with a {0} compatible wallet (such as {1}).', ['Tronweb', 'Tronlink']) }}</span>
                </v-tooltip>
                <v-tooltip v-if="withdrawal.is_created && get(withdrawal, 'method.payment_method.gateway.code') === 'solana'" bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      color="primary"
                      :disabled="transactionInProgress || !!get(withdrawal, 'external_id') || form.busy"
                      :loading="transactionInProgress || form.busy"
                      @click="createSolanaTransaction"
                      v-on="on"
                    >
                      {{ $t('Pay') }}
                    </v-btn>
                  </template>
                  <span>{{ $t('Make a payment using the Phantom Wallet.') }}</span>
                </v-tooltip>
                <v-tooltip v-if="withdrawal.is_created || withdrawal.is_pending" bottom>
                  <template #activator="{ on }">
                    <v-form v-model="formIsValid" class="d-inline-block" @submit.prevent="action('complete')">
                      <v-btn type="submit" color="success" :disabled="!formIsValid || form.busy" :loading="form.busy" v-on="on">
                        {{ $t('Complete') }}
                      </v-btn>
                    </v-form>
                  </template>
                  <span>{{ $t('Send funds manually and mark request as completed.') }}</span>
                </v-tooltip>
              </v-col>
              <v-col cols="12">
                <v-alert
                  v-if="transactionInProgress"
                  dense
                  outlined
                  text
                  color="warning"
                  class="mt-3"
                >
                  {{ $t('Please do not leave this page until the transaction is completed.') }}
                </v-alert>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Form from 'vform'
import FormMixin from '~/mixins/Form'
import { config } from '~/plugins/config'
import { get, ucfirst } from '~/plugins/utils'
import KeyValueTable from '~/components/KeyValueTable'
import WithdrawalMenu from 'packages/payments/resources/js/components/Admin/WithdrawalMenu'
import Web3 from 'web3'
import ABI from 'packages/payments/resources/js/static/contract-abi' // https://github.com/ethereum/wiki/wiki/Contract-ERC20-ABI
import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js'

export default {
  components: { WithdrawalMenu, KeyValueTable },

  mixins: [FormMixin],

  middleware: ['auth', 'verified', '2fa_passed', 'admin'],

  props: ['id'],

  data () {
    return {
      modal: false,
      withdrawal: null,
      form: new Form(),
      transactionInProgress: false
    }
  },

  metaInfo () {
    return { title: this.$t('Withdrawal {0}', [this.id]) }
  },

  computed: {
    config () {
      return config('payments')
    },
    headers () {
      return [
        { text: this.$t('ID'), value: 'id' },
        { text: this.$t('External ID'), value: 'external_id' },
        { text: this.$t('User'), value: 'user' },
        { text: this.$t('Method'), value: 'method.name' },
        { text: this.$t('Amount'), value: 'payment_amount', format: 'float' },
        { text: this.$t('Currency'), value: 'payment_currency' },
        { text: this.$t('Credits'), value: 'amount', format: 'decimal' },
        { text: this.$t('Status'), value: 'status_title' },
        { text: this.$t('API response'), value: 'response' },
        { text: this.$t('Created at'), value: 'created_at' },
        { text: this.$t('Updated at'), value: 'updated_at' }
      ]
    }
  },

  methods: {
    get,
    ucfirst,
    getParameterAttribute (attr, id, parameters, defaultValue = null) {
      const obj = parameters.find(o => o.id === id)
      return obj ? obj[attr] : (defaultValue || id)
    },
    async action (name, params = {}) {
      this.form = new Form(params)
      const { data } = await this.form.post(`/api/admin/withdrawals/${this.id}/${name}`)
      this.$store.dispatch('message/' + (data.success ? 'success' : 'error'), { text: data.message })

      if (data.success) {
        this.$router.push({ name: 'admin.withdrawals.index' })
      }

      this.form.reset()
    },
    async createEvmTransaction () {
      if (!Web3.givenProvider) {
        this.$store.dispatch('message/error', { text: this.$t('Please check that a {0} compatible wallet (such as {1}) is installed and enabled in your browser.', ['Web3', 'Metamask']) })
        return false
      }

      this.transactionInProgress = true
      const web3 = new Web3(Web3.givenProvider)
      let addresses, transaction

      try {
        addresses = await web3.eth.requestAccounts()
      } catch (error) {
        this.$store.dispatch('message/error', {
          text: error.code === 4001
            ? this.$t('Access to your account is not authorized')
            : error.message
        })
      }

      // if user authorized access to their account
      if (addresses) {
        try {
          // ERC20 token
          if (['evm_token'].indexOf(this.withdrawal.method.payment_method.code) > -1) {
            const contract = new web3.eth.Contract(ABI, this.withdrawal.parameters.contractAddress, {
              from: addresses[0]
            })

            const wei = web3.utils.toBN(this.withdrawal.payment_amount_in_units)
            const data = contract.methods.transfer(this.withdrawal.parameters.address, wei).encodeABI()

            transaction = await web3.eth.sendTransaction({
              from: addresses[0],
              to: this.withdrawal.parameters.contractAddress,
              value: 0, // don't transfer ETH, just tokens
              data
            })
          // ETH transfer
          } else {
            transaction = await web3.eth.sendTransaction({
              from: addresses[0],
              to: this.withdrawal.parameters.address,
              value: this.withdrawal.payment_amount_in_units
            })
          }
        } catch (error) {
          this.$store.dispatch('message/error', {
            text: error.code === 4001
              ? this.$t('Transaction is not authorized')
              : error.message
          })
        }

        if (transaction) {
          this.action('complete', { external_id: transaction.transactionHash })
        }
      }

      this.transactionInProgress = false
    },
    async createTronTransaction () {
      if (!window.tronWeb) {
        this.$store.dispatch('message/error', { text: this.$t('Please check that a {0} compatible wallet (such as {1}) is installed and enabled in your browser.', ['Tronweb', 'Tronlink']) })
        return false
      }

      this.transactionInProgress = true

      const web = window.tronWeb
      const address = web.defaultAddress.base58

      if (address !== false) {
        let success, transactionId

        try {
          // TRC20 token
          if (this.withdrawal.method.payment_method.code === 'trc20') {
            const { abi } = await web.trx.getContract(this.withdrawal.parameters.contractAddress)
            const contract = web.contract(abi.entrys, this.withdrawal.parameters.contractAddress)

            transactionId = await contract.methods.transfer(web.address.toHex(this.withdrawal.parameters.address), this.withdrawal.payment_amount_in_units).send()
            if (transactionId) {
              success = true
            }
          } else {
            const transaction = await web.transactionBuilder.sendTrx(
              web.address.toHex(this.withdrawal.parameters.address),
              this.withdrawal.payment_amount_in_units,
              address
            )
            const signedTransaction = await web.trx.sign(transaction);
            ({ result: success, txid: transactionId } = await web.trx.sendRawTransaction(signedTransaction))
          }

          if (success === true) {
            this.action('complete', { external_id: transactionId })
          }
        } catch (error) {
          this.$store.dispatch('message/error', { text: error.message || error })
        }
      } else {
        this.$store.dispatch('message/error', { text: this.$t('Access to your account is not authorized') })
      }

      this.transactionInProgress = false
    },
    async createSolanaTransaction () {
      if (!get(window, 'solana.isPhantom', false)) {
        this.$store.dispatch('message/error', { text: this.$t('Phantom wallet is not detected.') })
        return false
      }

      try {
        await window.solana.connect()
      } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
        this.$store.dispatch('message/error', { text: err.message })
        return false
      }

      this.transactionInProgress = true

      try {
        const url = this.withdrawal.method.payment_method_parameters.url
        const connection = new Connection(url, 'finalized')
        const recentBlockhash = await connection.getLatestBlockhash('finalized')

        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: window.solana.publicKey,
            toPubkey: new PublicKey(this.withdrawal.parameters.address),
            lamports: this.withdrawal.payment_amount_in_units
          })
        )

        transaction.feePayer = window.solana.publicKey
        transaction.recentBlockhash = recentBlockhash.blockhash

        const { signature: transactionId } = await window.solana.signAndSendTransaction(transaction)
        // await connection.confirmTransaction(transactionId)
        this.action('complete', { external_id: transactionId })
      } catch (error) {
        this.$store.dispatch('message/error', { text: error.message || error })
      }

      this.transactionInProgress = false
    }
  }
}
</script>
