<template>
  <!--About Here-->
  <section class="about__section" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-7">
          <div class="about__content wow fadeInRight" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInRight;">
            <div class="section-header">
              <h2>
                Welcome to Club <span class="text-base">OOtopia</span>
              </h2>
              <p class="ptext1">
                Welcome to Club OOtopia. Bringing the first licensed online crypto casino built on the XRP Ledger. NO SIGN up. Sign in with your Xumm wallet and play instantly using XRP.
              </p>
              <p class="ptext2">
                NFT holders share 30% of the monthly revenue from Club OOtopia online casino.
              </p>

            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-5">
          <div class="about__thumb wow fadeInLeft animated" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <img :src="image.about" alt="a-img">
            <div class="play">
              <a href="https://www.youtube.com/watch?v=DsnKLIZWZIw" class="play-btn">
                <img :src="image.play" alt="a-img">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--About End-->
</template>

<script>
import { config } from '~/plugins/config'

export default {
  data () {
    return {
      image: {
        about: require("../../../img/about.png"),
        play: require("../../../img/play(1).png"),
      }
    }
  },
  computed: {
    links () {
      return config('settings.content.social')
    }
  }
}
</script>
