<template>
  <section class="banner__section">

    <div>
      <div class="row justify-content-between">
        <div>
          <div class="banner__thumb wow fadeInDown" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInDown;">
            <div class="bet__two">
              <img :src="bet" alt="bet-img">
            </div>
            <img :src="background" alt="banner-img">
            <div class="bet__one">
              <img :src="bet1" alt="bet-img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { config } from '~/plugins/config'
import DeviceMixin from '~/mixins/Device'

export default {
  mixins: [DeviceMixin],

  data() {
    return {
      background: require("../../../img/background1.jpeg"),
      bet: require("../../../img/bet1.png"),
      bet1: require("../../../img/bet2.png")
    }
  },
  computed: {
    slider () {
      return config('settings.content.home.slider')
    },
    slidesCount () {
      return this.slider ? this.slider.slides.length : 0
    }
  }
}
</script>
<style lang="scss" scoped>
.darken-60 {
  background: rgba(0, 0, 0, 0.6);
}
.slide-image::v-deep {
  .v-responsive__content {
    height: 100%;
  }
}
</style>
