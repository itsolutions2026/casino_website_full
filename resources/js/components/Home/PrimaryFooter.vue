<template>
  <v-footer
      id="primary-footer"
      :app="inset"
      :inset="inset"
      :color="background"
      class="d-block mt-10 px-5 py-10 text--secondary text--darken-3"
  >
    <section class="footer__section">
      <div class="container">
        <v-row>
          <v-col class="text-center">
            <div class="footer-logo d-flex align-center justify-center">
              <router-link :to="{ name: 'home' }">
                <v-hover v-slot="{ hover }">
                  <v-avatar size="50" tile :class="{ grayscale: !hover }">
                    <v-img :src="appLogoUrl" :alt="appName"/>
                  </v-avatar>
                </v-hover>
              </router-link>
              <h4 class="d-inline ml-3 text-h4 font-weight-thin">
                {{ appName }}
              </h4>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pages-list text-center">
            <v-btn
                v-for="page in pages"
                :key="page.id"
                :to="{ name: 'page', params: { id: page.id } }"
                small
                text
                outlined
                rounded
                active-class="primary grey--text text--lighten-5"
                class="mx-2 my-4 my-lg-0"
            >
              {{ page.title }}
            </v-btn>
          </v-col>
        </v-row>
        <v-divider class="my-8 secondary lighten-1"/>
        <v-row v-if="links.length">
          <v-col class="social-icons text-center">
            <v-hover v-for="(link, i) in links" :key="i" v-slot="{ hover }">
              <v-btn
                  class="mx-2 my-4 my-lg-0"
                  fab
                  x-small
                  :color="hover ? link.color : 'secondary lighten-1'"
                  :href="link.url"
                  target="_blank"
              >
                <v-icon color="grey lighten-5">
                  {{ link.icon }}
                </v-icon>
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>
        <div class="footer__bottom" style="text-align: center;">
          <p class="text-white">
            Copyright © 2023, <a href="#about" class="text-base" style="font-weight: 700">OOtopia</a> - All Right Reserved
          </p>
        </div>
        <div class="shape__right">
          <img :src="rightbanner" alt="f-img">
        </div>
      </div>
    </section>
  </v-footer>
</template>
<script>
import CountryFlag from 'vue-country-flag'
import {config} from '~/plugins/config'
import {mapGetters, mapState} from 'vuex'
import LanguageSearchModal from '~/components/LanguageSearchModal'
import GameSearchModal from '~/components/GameSearchModal'

export default {
  components: {CountryFlag, LanguageSearchModal, GameSearchModal},

  props: {
    inset: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      pages: config('settings.content.footer.menu'),
      rightbanner: require("../../../img/footerleft.png")
    }
  },

  computed: {
    ...mapState('lang', ['locale']),
    ...mapGetters({
      games: 'package-manager/getOriginalGames',
      flag: 'lang/flag'
    }),
    appName() {
      return config('app.name')
    },
    appLogoUrl() {
      return config('app.logo')
    },
    background() {
      return config('settings.theme.backgrounds.footer')
    },
    links() {
      return config('settings.content.social')
    }
  }
}
</script>
<style lang="scss" scoped>
#primary-footer {
  a {
    &.text-decoration-none {
      &:hover {
        text-decoration: underline !important;
      }
    }
  }

  .v-avatar {
    transition: all ease 0.5s;

    &.grayscale {
      filter: grayscale(100%);
    }
  }

  .banner {
    height: 50px;

    &:hover {
      path {
        fill: var(--v-primary-base);
      }
    }

    path {
      fill: var(--v-secondary-lighten2);
    }
  }
}
</style>
