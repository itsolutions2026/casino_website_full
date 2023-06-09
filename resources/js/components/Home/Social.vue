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
                Welcome to Club OOtopia Ltd., the pioneering multichain online crypto casino developed on the XRP Ledger. We proudly accept a range of prominent cryptocurrencies, including XRP, SOL, Bitcoin, Matic, and Ethereum.
              </p>
              <p class="ptext2">
                As an esteemed NFT holder, you are entitled to a generous 30% share of the casino's monthly revenue. We value your participation and are committed to providing a transparent and rewarding experience for our valued NFT holders.
              </p>
              <p class="ptext2">
                Join us at Club OOtopia Ltd. and immerse yourself in the exhilarating world of crypto gambling, where cutting-edge technology and thrilling entertainment combine to offer an unparalleled gaming experience.
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
