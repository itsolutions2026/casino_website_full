<template>
  <v-form @submit.prevent="login">
    <template v-if="isInstalled">
      <div v-if="isConnected" class="mb-5">
        <v-text-field
            :value="form.address"
            :label="$t('Your address')"
            :disabled="true"
            hide-details
            outlined
        />
        <v-row align="center" class="mt-3">
          <v-col class="text-center text-md-left">
            <v-btn type="submit" color="primary" :disabled="isLoading" :loading="isLoading">
              {{ $t('Log in') }}
            </v-btn>
            <v-btn  color="secondary" :disabled="isLoading" :loading="isLoading" @click="disconnectWallet()">
              {{ $t('Disconnect Wallet') }}
            </v-btn>
          </v-col>
        </v-row>
      </div>

      <v-btn v-else color="secondary" class="mb-3" @click="connectWallet()">
          {{ $t('Connect wallet') }}
      </v-btn>


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
        {{ $t('XUMM Provider is not detected.') }}
      </p>
    </v-alert>
  </v-form>
</template>

<script>
import { config } from '~/plugins/config'
import { Xumm } from 'xumm'
import Form from "vform";
import { route } from '~/plugins/route'
import { ucfirst } from '~/plugins/utils'


export default {

  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('{0} authentication', [ucfirst(this.$options._componentTag)]) }
  },

  data () {
    return {
      isLoading: false,
      isInstalled: false,
      isConnected: false,
      form: new Form({
        address: null,
        signature: null
      })
    }
  },

  computed: {
    xumm_api_key () {
      return config('payments.xrpl.api_key')
    },
  },

  created () {
    console.log(this.$store.state.auth)
    if(this.$store.state.auth.xummInstance && this.$store.state.auth.xummInstance.instance === '1') {
      this.xummInstance = this.$store.state.auth.xummInstance
    }
    else{
      this.xummInstance = new Xumm(this.xumm_api_key)
    }

    if(this.xummInstance.instance !== "1") window.location.reload()

    this.xummInstance.on('success', async () =>{
      const { payload_uuidv4 } = await this.xummInstance.environment.jwt
      this.form.signature = payload_uuidv4
      this.xummInstance.user.account.then(account => {
        if(account){
          this.form.address = account
          this.isConnected = true
        }
      })
    })
    if (this.xummInstance) {
      this.isInstalled = true
    }
  },

  methods: {

    async connectWallet () {
      try {
        this.xummInstance.authorize()
      } catch (err) {
        console.log(err.message)
      }
    },

    async disconnectWallet(){
      await this.xummInstance.logout()
      this.form.address = ''
      this.form.signature = ''
      this.isConnected = false
    },

    async login () {
      this.isLoading = true

      if (this.form.signature) {

        const { data: { success, user, message } } = await this.form.post(route('auth.web3.login').replace('{provider}', this.$options._componentTag))

        if (success) {
          this.$store.dispatch('auth/updateUser', user)
          this.$store.dispatch('auth/updateXummInstance', this.xummInstance)

          if (user.two_factor_auth_enabled && !user.two_factor_auth_passed) {
            this.$router.push({ name: '2fa' })
          } else {
            this.$router.push({ name: 'home' })
          }
        } else {
          this.$store.dispatch('message/error', { text: message })
        }
      }

      this.isLoading = false
    }
  }
}
</script>
