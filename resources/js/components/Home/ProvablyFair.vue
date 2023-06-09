<template>
  <div>
  <section class="players__section pb-120" id="testi">
    <div class="container">
      <div class="section-header max-width1" style="animation-delay: 0.2s; animation-name: none;">
        <h2>
          What <span class="text-base">OOtopia's</span> Players Say
        </h2>
        <p>
          OOtopia is the best. I can't stop playing this game. I love this game.
        </p>
      </div>
      <div class="row" style="justify-content: space-between">
        <div class="player__items ">
          <div class="quation">
            <img :src="quotation" alt="q-img">
          </div>
          <div class="player__head">
            <div class="thumb">
              <img :src="nft1" alt="player-img">
            </div>
            <div class="content">
              <h6>
                L☮sT
              </h6>
              <span>Major Whale 80+</span>
            </div>
          </div>
          <p>
            100% the best xrp gaming site I've been on , can't wait for the new games  . Gary gensler can jog on can't be a security if you can use it on here.
          </p>
          <div class="player__footer">
            <ul class="ratting">
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
            </ul>
            <span class="time">
                                            1 month ago
                                        </span>
          </div>
        </div>
        <div class="player__items ">
          <div class="quation">
            <img :src="quotation" alt="q-img">
          </div>
          <div class="player__head">
            <div class="thumb">
              <img :src="nft2" alt="player-img">
            </div>
            <div class="content">
              <h6>
                GOAT
              </h6>
              <span>Major Whale 80+</span>
            </div>
          </div>
          <p>
            Number 1 XRP gaming site off all times super smooths transactions and right after I Won 🏆 on a game boom the funds were already returned plus my winnings to my XUMM love it 😍.
          </p>
          <div class="player__footer">
            <ul class="ratting">
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
            </ul>
            <span class="time">
                                                                     1 month ago
                                                                 </span>
          </div>
        </div>
        <div class="player__items ">
          <div class="quation">
            <img :src="quotation" alt="q-img">
          </div>
          <div class="player__head">
            <div class="thumb">
              <img :src="nft3" alt="player-img">
            </div>
            <div class="content">
              <h6>
                ETizzle-SGS
              </h6>
              <span>Major Whale 80+</span>
            </div>
          </div>
          <p>
            Great experience with gameplay very easy to sign in and play . Very clean site graphics are amazing easy to navigate through different parts of the igaming site totally the No # 1 XRP gaming site with smooth transactions and a game changer with 49 more games still to come it gives me 49 reasons to play 💯 you also have the opportunity to purchase nfts as well all on one site amazing experience come play 👑.
          </p>
          <div class="player__footer">
            <ul class="ratting">
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-sharp fa-solid fa-star"></i>
              </li>
            </ul>
            <span class="time">
                                                                     1 month ago
                                                                 </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- FAQ start -->

  <section class="faq__section contact__section pt-120 pb-120 overflow-hidden" id="faq">
    <div class="c__shpae">
      <img :src="cshape" alt="c-shape">
    </div>
    <div class="king__ludu">
      <img :src="king" alt="king">
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-xl-6">
          <div class="section-header text-center">
            <h2 class="section-header__title">Frequently Asked Questions</h2>
            <p>Here are some of the most frequently asked questions about our platform. If you have any other questions, please feel free to contact us.</p>
          </div>
        </div>
      </div>
      <div class="faq__board row justify-content-between">
        <div class="col-lg-6">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button" :class="{ 'collapsed' : !expanded.one }" @click="show('one')"  type="button"  aria-controls="flush-collapseOne">
                What cryptocurrency do you accept?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-body accordion-collapse collapse"  :class="{'show': expanded.one }" aria-labelledby="flush-headingOne" >
              <p>We currently only accept XRP.</p>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button" :class="{'collapsed' : !expanded.two}" @click="show('two')"  type="button"  aria-controls="flush-collapseTwo">
                Where can I see the rules for each game?
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-body accordion-collapse collapse"  :class="{'show': expanded.two}" aria-labelledby="flush-headingTwo" >
              <p>Go to the games rule tab at the top of the homepage.</p>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button" :class="{'collapsed' : !expanded.three}" @click="show('three')"  type="button"  aria-controls="flush-collapseThree">
                Is Club OOtopia licensed?
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-body accordion-collapse collapse"  :class="{'show': expanded.three}" aria-labelledby="flush-headingThree" >
              <p>Yes, Club OOtopia is a registered company in Costa Rica which gives us permission to operate an online crypto casino operating outside of Costa Rica.</p>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingseven">
              <button class="accordion-button" :class="{'collapsed' : !expanded.seven}" @click="show('seven')"  type="button"  aria-controls="flush-collapseseven">
                How to sign up?
              </button>
            </h2>
            <div id="flush-collapseseven" class="accordion-body accordion-collapse collapse"  :class="{'show': expanded.seven}" aria-labelledby="flush-headingThree" >
              <p>There is no sign up, registration, or KYC. Sign in with your Xumm wallet and begin play.</p>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingeight">
              <button class="accordion-button" :class="{'collapsed' : !expanded.eight}" @click="show('eight')"  type="button"   aria-controls="flush-collapseeight">
                Is Club OOtopia fair?
              </button>
            </h2>
            <div id="flush-collapseeight" class="accordion-body accordion-collapse collapse"  :class="{'show': expanded.eight}" aria-labelledby="flush-headingThree" >
              <p>Absolutely, everyone has the same chance at winning in our casino. All of our games use Random Number Generators, which ensures that the outcomes are unexpected and uninterrupted. </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingfour">
              <button class="accordion-button" :class="{'collapsed' : !expanded.four}" @click="show('four')"  type="button"  aria-controls="flush-collapsefour">
                Can I have more than one account?
              </button>
            </h2>
            <div id="flush-collapsefour" class="accordion-body accordion-collapse collapse"  :class="{'show': expanded.four}" aria-labelledby="flush-headingOne" >
              <p>This is the Test contents</p>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingfive">
              <button class="accordion-button" :class="{'collapsed' : !expanded.five}" @click="show('five')"  type="button"   aria-controls="flush-collapsefive">
                Is there deposit or withdrawal limits?
              </button>
            </h2>
            <div id="flush-collapsefive" class=" accordion-body accordion-collapse collapse"  :class="{'show': expanded.five}" aria-labelledby="flush-headingTwo" >
              <p>No, there is no limits on deposits or withdrawals.</p>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingsix">
              <button class="accordion-button" :class="{'collapsed' : !expanded.six}" @click="show('six')"  type="button"  aria-controls="flush-collapsesix">
                How long does withdrawals/deposits take?
              </button>
            </h2>
            <div id="flush-collapsesix" class="accordion-body accordion-collapse collapse"  :class="{'show': expanded.six}" aria-labelledby="flush-headingThree" >
              <p>Within 10 seconds your withdrawal/deposit will be credited.</p>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingnine">
              <button class="accordion-button" :class="{'collapsed' : !expanded.nine}" @click="show('nine')"  type="button"  aria-controls="flush-collapsenine">
                What fees do I pay?
              </button>
            </h2>
            <div id="flush-collapsenine" class="accordion-body accordion-collapse collapse"  :class="{'show': expanded.nine}"  aria-labelledby="flush-collapsenine" >
              <p>Club OOtopia does not charge any fees on withdrawals or deposits. You will only pay the blockchain transction fee.</p>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingten">
              <button class="accordion-button" :class="{'collapsed' : !expanded.ten}" @click="show('ten')"  type="button"  aria-controls="flush-collapseten">
                What happens if I encounter an error or game freeze?
              </button>
            </h2>
            <div id="flush-collapseten" class="accordion-body accordion-collapse collapse"  :class="{'show': expanded.ten}" aria-labelledby="flush-headingThree" >
              <p>Please contact customer services and refresh the page.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="l__shape">
      <img :src="lsharp" alt="l-shape">
    </div>
    <div class="king__ludu2">
      <img :src="king" alt="king">
    </div>
  </section>
  <!-- FAQ End -->
  </div>
</template>

<script>

export default {
  computed: {
  },
  data() {
    return {
      expanded: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false,
        ten: false
      },
      quotation: require("../../../img/quotation.png"),
      nft1: require("../../../img/nft/ashlyn.webp"),
      nft2: require("../../../img/nft/dulce.webp"),
      nft3: require("../../../img/nft/dale.webp"),
      mainshape: require("../../../img/shape1.png"),
      cshape: require("../../../img/c-shape.png"),
      king: require("../../../img/king.png"),
      lsharp: require("../../../img/l-shape.png"),
      email: require("../../../img/email.png")
    }
  },

  methods: {
    show(id) {
      this.expanded[id] = !this.expanded[id]
    }
  }
}
</script>

<style lang="scss" scoped>
.darken-50 {
  background: rgba(0, 0, 0, 0.5);
}
</style>
