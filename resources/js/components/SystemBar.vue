<template>
  <v-system-bar
    app
    :height="isMobile ? 80 : 40"
    :color="background"
    :dark="isDark"
  >
    <v-row>
      <v-col cols="12" md="3" class="text-center text-md-left py-0 mb-1 mb-md-0">
        <template v-if="lastWinGame.id">
          <v-icon>mdi-star</v-icon>
          <span class="text-uppercase">{{ $t('Last win') }}</span>
          <span class="ml-1 warning--text">{{ lastWinGame.win }}</span>
          <user-profile-modal :user="lastWinGame.account.user">
            <template #default="{ on }">
              <span class="text--primary link ml-1" v-on="on">{{ truncate(lastWinGame.account.user.name) }}</span>
            </template>
          </user-profile-modal>
          <span class="ml-1">{{ $t('in') }} {{ lastWinGame.title }}</span>
        </template>
      </v-col>
      <v-col cols="12" md="6" class="text-center text-md-center py-0">
        <span class="warning--text">10% bonus</span> on your first deposit. <span class="warning--text">5% bonus</span> bonus on all deposits in the month of June
      </v-col>
      <v-col cols="12" md="3" class="text-center text-md-right py-0">
        <v-icon>mdi-account-multiple</v-icon>
        <span class="text-uppercase">{{ $t('Online') }}</span>
        <span class="ml-1 warning--text">{{ onlineUsersCount }}</span>
        <v-icon class="ml-2">
          mdi-dice-5-outline
        </v-icon>
        <span class="text-uppercase">{{ $t('Bets') }}</span>
        <span class="ml-1 warning--text">{{ betsCount }}</span>
      </v-col>
    </v-row>
  </v-system-bar>
</template>

<script>
import { truncate } from '~/plugins/utils'
import { mapGetters, mapState } from 'vuex'
import DeviceMixin from '~/mixins/Device'
import UserProfileModal from '~/components/UserProfileModal'
import { config } from '~/plugins/config'
import { GAME_ADD } from '~/store/mutation-types'

export default {
  name: 'SystemBar',

  components: { UserProfileModal },

  mixins: [DeviceMixin],

  data () {
    return {
      lastWinGame: {},
      unsubscribe: () => {}
    }
  },

  computed: {
    ...mapState('auth', ['user']),
    ...mapState('game', { recent: 'recent', betsCount: 'count' }),
    ...mapGetters({ onlineUsersCount: 'online/count' }),
    windowWidth () {
      return window.innerWidth
    },
    background () {
      return config('settings.theme.backgrounds.system_bar')
    },
    isDark () {
      return this.$vuetify.theme.isDark
    }
  },

  created () {
    if (this.recent.length) {
      this.lastWinGame = this.recent[0]
    }

    this.unsubscribe = this.$store.subscribe(({ type, payload: game }, state) => {
      if (type === `game/${GAME_ADD}`) {
        if (game.win > game.bet) {
          this.lastWinGame = { ...game }
        }
      }
    })
  },

  beforeDestroy () {
    this.unsubscribe()
  },

  methods: {
    truncate
  }
}
</script>
