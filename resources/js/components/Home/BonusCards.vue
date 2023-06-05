<template>
  <section class="banner__feature wow fadeInUp" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
    <div class="container">
      <div class="banner__feature__wrapper">
        <div class="row g-4">
          <div class="col-xxl-4 col-lg-4 col-md-6">
            <div class="banner__feature__items">
              <div class="thumb">
                <img :src="image.thumb1" alt="f-img">
              </div>
              <div class="content">
                <h5>
                  <a href="https://xrp.cafe/collection/looters">Purchase lOOter NFTs</a>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-lg-4 col-md-6">
            <div class="banner__feature__items">
              <div class="thumb">
                <img :src="image.thumb2" alt="f-img">
              </div>
              <div class="content">
                <h5>
                  <a href="https://xrp.cafe/collection/hooters"> Purchase hOOter NFTs </a>
                </h5>

              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-lg-4 col-md-6">
            <div class="banner__feature__items">
              <div class="thumb">
                <img :src="image.thumb3" alt="f-img">
              </div>
              <div class="content">
                <h5>
                  <a href="https://xrp.cafe/collection/looters3d"> Purchase 3D lOOters </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { config } from '~/plugins/config'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      image : {
        thumb1: require("../../../img/feature1.webp"),
        thumb2: require("../../../img/feature2.webp"),
        thumb3: require("../../../img/feature3.webp"),
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.bonus-card {
  transition: all 0.5s;
  min-height: 220px;

  &.hover {
    border-color: var(--v-primary-base) !important;
  }
}
</style>
