<template>
  <div class="landingpagecss">
    <dynamic-template
      :template="html"
      :components="{Slider, GamesList, ProviderGamesList, ProvidersList, Predictions, PrimaryFooter, ProvablyFair, BonusCards, Features, Raffles, BiggestWin, RecentGames, Search, Social }"
    />
  </div>
</template>

<script>
import axios from 'axios'
import DynamicTemplate from '~/components/DynamicTemplate'
import Slider from '~/components/Home/Slider'
import GamesList from '~/components/Home/GamesList'
import ProviderGamesList from '~/components/Home/ProviderGamesList'
import ProvidersList from '~/components/Home/ProvidersList'
import Predictions from '~/components/Home/Predictions'
import PrimaryFooter from '~/components/Home/PrimaryFooter'
import ProvablyFair from '~/components/Home/ProvablyFair'
import BonusCards from '~/components/Home/BonusCards'
import Features from '~/components/Home/Features'
import Raffles from '~/components/Home/Raffles'
import BiggestWin from '~/components/Home/BiggestWin'
import RecentGames from '~/components/Home/RecentGames'
import Search from '~/components/Home/Search'
import Social from '~/components/Home/Social'
import { mapGetters } from 'vuex'



export default {
  components: { DynamicTemplate },

  metaInfo () {
    return {
      title: this.$t('Fair online casino games')
    }
  },

  data () {
    return {
      Slider,
      GamesList,
      ProviderGamesList,
      ProvidersList,
      Predictions,
      PrimaryFooter,
      ProvablyFair,
      BonusCards,
      Features,
      Raffles,
      BiggestWin,
      RecentGames,
      Search,
      Social,
      html: ''
    }
  },

  computed: {
    ...mapGetters({ authenticated: 'auth/check' })
  },

  async created () {
    const { data: { html } } = await axios.get('/api/pages/home')
    this.html = `<div>${html}</div>`
    if (this.authenticated) {
      // update user balance
      this.$store.dispatch('auth/fetchUser')
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,600;1,600&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px var(--ratting-color);
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--ratting-color);
  border-radius: 5px;
}

:root {
  --theme-color: #E4A91B;
  --base-color: #E4A91B;
  --header-color: #222222;
  --banner-color: #000000;
  --box-bg: #1d191d;
  --body-color: #000000;
  --section-bg: #231d70;
  --white-color: #fff;
  --black-theme: #350B2D;
  --black-color: #000000;
  --calender: #191D23;
  --ratting-color: #E4A853;
  --pragraph-color: #666666;
  --border: #8A5F31;
  --border-two: #BDBDBD;
  --cate-border: #E1CFB7;
  --placehol: #b0bcde;
  --modal-bg: #55184B;
}


.landingpagecss {

  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));
    margin-left: calc(-.5 * var(--bs-gutter-x));
  }

  .justify-content-center{
    justify-content: center!important;
  }


  .collapse:not(.show) {
    display: none;
  }

  .accordion {
    --bs-accordion-color: #212529;
    --bs-accordion-bg: #fff;
    --bs-accordion-transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,border-radius 0.15s ease;
    --bs-accordion-border-color: var(--bs-border-color);
    --bs-accordion-border-width: 1px;
    --bs-accordion-border-radius: 0.375rem;
    --bs-accordion-inner-border-radius: calc(0.375rem - 1px);
    --bs-accordion-btn-padding-x: 1.25rem;
    --bs-accordion-btn-padding-y: 1rem;
    --bs-accordion-btn-color: #212529;
    --bs-accordion-btn-bg: var(--bs-accordion-bg);
    --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    --bs-accordion-btn-icon-width: 1.25rem;
    --bs-accordion-btn-icon-transform: rotate(-180deg);
    --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
    --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    --bs-accordion-btn-focus-border-color: #86b7fe;
    --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    --bs-accordion-body-padding-x: 1.25rem;
    --bs-accordion-body-padding-y: 1rem;
    --bs-accordion-active-color: #0c63e4;
    --bs-accordion-active-bg: #e7f1ff
  }

  .accordion-button {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);
    font-size: 1rem;
    color: var(--bs-accordion-btn-color);
    text-align: left;
    background-color: var(--bs-accordion-btn-bg);
    border: 0;
    border-radius: 0;
    overflow-anchor: none;
    transition: var(--bs-accordion-transition)
  }

  @media (prefers-reduced-motion:reduce) {
    .accordion-button {
      transition: none
    }
  }

  .accordion-button:not(.collapsed) {
    color: var(--bs-accordion-active-color);
    background-color: var(--bs-accordion-active-bg);
    box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color)
  }

  .accordion-button:not(.collapsed)::after {
    background-image: var(--bs-accordion-btn-active-icon);
    transform: var(--bs-accordion-btn-icon-transform)
  }

  .accordion-button::after {
    flex-shrink: 0;
    width: var(--bs-accordion-btn-icon-width);
    height: var(--bs-accordion-btn-icon-width);
    margin-left: auto;
    content: "";
    background-image: var(--bs-accordion-btn-icon);
    background-repeat: no-repeat;
    background-size: var(--bs-accordion-btn-icon-width);
    transition: var(--bs-accordion-btn-icon-transition)
  }

  @media (prefers-reduced-motion:reduce) {
    .accordion-button::after {
      transition: none
    }
  }

  .accordion-button:hover {
    z-index: 2
  }

  .accordion-button:focus {
    z-index: 3;
    border-color: var(--bs-accordion-btn-focus-border-color);
    outline: 0;
    box-shadow: var(--bs-accordion-btn-focus-box-shadow)
  }

  .accordion-header {
    margin-bottom: 0
  }

  .accordion-item {
    color: var(--bs-accordion-color);
    background-color: var(--bs-accordion-bg);
    border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)
  }

  .accordion-item:first-of-type {
    border-top-left-radius: var(--bs-accordion-border-radius);
    border-top-right-radius: var(--bs-accordion-border-radius)
  }

  .accordion-item:first-of-type .accordion-button {
    border-top-left-radius: var(--bs-accordion-inner-border-radius);
    border-top-right-radius: var(--bs-accordion-inner-border-radius)
  }

  .accordion-item:not(:first-of-type) {
    border-top: 0
  }

  .accordion-item:last-of-type {
    border-bottom-right-radius: var(--bs-accordion-border-radius);
    border-bottom-left-radius: var(--bs-accordion-border-radius)
  }

  .accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: var(--bs-accordion-inner-border-radius);
    border-bottom-left-radius: var(--bs-accordion-inner-border-radius)
  }

  .accordion-item:last-of-type .accordion-collapse {
    border-bottom-right-radius: var(--bs-accordion-border-radius);
    border-bottom-left-radius: var(--bs-accordion-border-radius)
  }

  .accordion-body {
    padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)
  }

  .accordion-flush .accordion-collapse {
    border-width: 0
  }

  .accordion-flush .accordion-item {
    border-right: 0;
    border-left: 0;
    border-radius: 0
  }

  .accordion-flush .accordion-item:first-child {
    border-top: 0
  }

  .accordion-flush .accordion-item:last-child {
    border-bottom: 0
  }

  .accordion-flush .accordion-item .accordion-button,.accordion-flush .accordion-item .accordion-button.collapsed {
    border-radius: 0
  }

  h1 {
    font-size: 76px;
    font-weight: 600;
    line-height: 98.8px;
    font-family: "Jost", sans-serif;
  }

  h2 {
    font-size: 57px;
    font-weight: 400;
    line-height: 74.1px;
    font-family: "Jost", sans-serif;
  }

  h3 {
    font-size: 43px;
    line-height: 55.9px;
    font-weight: 600;
    font-family: "Jost", sans-serif;
  }

  h4 {
    font-size: 32px;
    line-height: 41.6px;
    font-weight: 600;
    font-family: "Jost", sans-serif;
  }

  h5 {
    font-size: 24px;
    line-height: 31.2px;
    font-weight: 600;
    font-family: "Jost", sans-serif;
  }

  h6 {
    font-size: 18px;
    line-height: 23.4px;
    font-weight: 600;
    font-family: "Jost", sans-serif;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    margin: 0;
    color: var(--theme-color);
  }

  a:hover {
    text-decoration: none;
    color: var(--theme-color);
  }

  input:focus {
    color: var(--white-color);
  }

  p {
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 0;
    font-weight: 400;
    color: var(--pragraph-color);
  }

  .pt-120 {
    padding-top: 120px;
  }

  .pb-120 {
    padding-bottom: 120px;
  }

  .pt-80 {
    padding-top: 80px;
  }

  .pb-80 {
    padding-bottom: 80px;
  }

  .pb-60 {
    padding-bottom: 51px;
  }

  .container {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-right: auto;
    margin-left: auto;
  }


  /*-Responsive-*/
  /*-Responsive-*/
  @media screen and (max-width: 1399px) {
    h1 {
      font-size: 76px;
      line-height: 88.8px;
    }
    h2 {
      font-size: 57px;
      font-weight: 400;
      line-height: 74.1px;
      font-family: "Jost", sans-serif;
    }
    h3 {
      font-size: 43px;
      line-height: 55.9px;
      font-weight: 600;
      font-family: "Jost", sans-serif;
    }
    h4 {
      font-size: 32px;
      line-height: 41.6px;
      font-weight: 600;
      font-family: "Jost", sans-serif;
    }
    h5 {
      font-size: 20px;
      line-height: 26.2px;
    }
    h6 {
      font-size: 18px;
      line-height: 23.4px;
      font-weight: 500;
      font-family: "Jost", sans-serif;
    }
  }
  @media screen and (max-width: 1199px) {
    h1 {
      font-size: 56px;
      line-height: 76.8px;
    }
    h2 {
      font-size: 57px;
      font-weight: 400;
      line-height: 74.1px;
      font-family: "Jost", sans-serif;
    }
    h3 {
      font-size: 43px;
      line-height: 55.9px;
      font-weight: 600;
      font-family: "Jost", sans-serif;
    }
    h4 {
      font-size: 32px;
      line-height: 41.6px;
      font-weight: 600;
      font-family: "Jost", sans-serif;
    }
    h5 {
      font-size: 18px;
      line-height: 26.2px;
    }
    h6 {
      font-size: 18px;
      line-height: 23.4px;
      font-weight: 500;
      font-family: "Jost", sans-serif;
    }
  }
  @media screen and (max-width: 991px) {
    .pt-120 {
      padding-top: 80px;
    }
    .pb-120 {
      padding-bottom: 80px;
    }
    .pt-80 {
      padding-top: 60px;
    }
    .pb-80 {
      padding-bottom: 60px;
    }
    h1 {
      font-size: 48px;
      line-height: 68.8px;
    }
    h2 {
      font-size: 57px;
      font-weight: 400;
      line-height: 74.1px;
      font-family: "Jost", sans-serif;
    }
    h3 {
      font-size: 43px;
      line-height: 55.9px;
      font-weight: 600;
      font-family: "Jost", sans-serif;
    }
    h4 {
      font-size: 32px;
      line-height: 41.6px;
      font-weight: 600;
      font-family: "Jost", sans-serif;
    }
    h5 {
      font-size: 18px;
      line-height: 26.2px;
    }
    h6 {
      font-size: 18px;
      line-height: 23.4px;
      font-weight: 500;
      font-family: "Jost", sans-serif;
    }
    .section-header h2 {
      margin-bottom: 1px !important;
      font-size: 48px;
    }
    .section-header p {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 767px) {
    .pt-120 {
      padding-top: 70px;
    }
    .pb-120 {
      padding-bottom: 70px;
    }
    p {
      font-size: 15px;
      line-height: 24px;
    }
    h1 {
      font-size: 44px;
      line-height: 60.8px;
    }
    h2 {
      font-size: 57px;
      font-weight: 400;
      line-height: 74.1px;
      font-family: "Jost", sans-serif;
    }
    h3 {
      font-size: 43px;
      line-height: 55.9px;
      font-weight: 600;
      font-family: "Jost", sans-serif;
    }
    h4 {
      font-size: 32px;
      line-height: 41.6px;
      font-weight: 600;
      font-family: "Jost", sans-serif;
    }
    h5 {
      font-size: 18px;
      line-height: 26.2px;
    }
    h6 {
      font-size: 18px;
      line-height: 23.4px;
      font-weight: 500;
      font-family: "Jost", sans-serif;
    }
    .section-header h2 {
      margin-bottom: 15px !important;
      font-size: 40px;
      line-height: 48px;
    }
    .section-header p {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 575px) {
    .pt-120 {
      padding-top: 60px;
    }
    .pb-120 {
      padding-bottom: 60px;
    }
    .pt-80 {
      padding-top: 60px;
    }
    .pb-80 {
      padding-bottom: 60px;
    }
    p {
      font-size: 16px;
      line-height: 26px;
    }
    h1 {
      font-size: 36px;
      line-height: 44.8px;
    }
    h2 {
      font-size: 57px;
      font-weight: 400;
      line-height: 74.1px;
      font-family: "Jost", sans-serif;
    }
    h3 {
      font-size: 43px;
      line-height: 55.9px;
      font-weight: 600;
      font-family: "Jost", sans-serif;
    }
    h4 {
      font-size: 32px;
      line-height: 41.6px;
      font-weight: 600;
      font-family: "Jost", sans-serif;
    }
    h5 {
      font-size: 18px;
      line-height: 26.2px;
    }
    h6 {
      font-size: 18px;
      line-height: 23.4px;
      font-weight: 500;
      font-family: "Jost", sans-serif;
    }
  }
  @media screen and (max-width: 480px) {
    .section-header h2 {
      margin-bottom: 8px !important;
      font-size: 30px;
      line-height: 40px;
    }
    .section-header p {
      font-size: 16px !important;
    }
  }


  .button__grp {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .section-bg {
    background: var(--section-bg);
  }

  .bg-white {
    background: var(--white-color);
  }

  .center {
    text-align: center;
    margin: 0 auto;
  }



  .text-base:not(.has-sub-menu) {
    background: linear-gradient(114.26deg, #E4A91B 13.41%, #F88021 87.24%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  /*--Section Header Start--*/
  /*--Section Header Start--*/
  .section-center {
    text-align: center;
  }

  .max-width1 {
    max-width: 880px;
    margin: 0 auto 60px;
    text-align: center;
  }
  .max-width1 p {
    max-width: 680px;
    margin: 0 auto;
  }

  .max-width2 {
    max-width: 740px;
  }

  .section-header {
    margin-bottom: 55px;
  }

  .section-header h2 {
    margin-bottom: 12px;
    margin-top: -16px;
    color: var(--white-color);
  }
  .section-header .ptext1 {
    margin-bottom: 10px;
  }
  .section-header .ptext2 {
    margin-bottom: 36px;
  }
  .section-header p {
    font-size: 18px;
    padding: 0;
    color: var(--white-color);
  }

  .black-theme {
    color: var(--black-theme) !important;
  }

  /*--Section Header End--*/
  /*--Section Header End--*/
  /*Abstracts / typography*/
  /*Abstracts / about*/
  .about__thumb {
    width: 100%;
    position: relative;
  }
  .about__thumb img {
    width: 100%;
    height: 100%;
  }
  .about__thumb .play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .about__thumb .play .play-btn {
    width: 100px;
    height: 100px;
    display: block;
    z-index: 1;
    position: relative;
  }
  .about__thumb .play .play-btn img {
    width: 100%;
    height: 100%;
  }
  .about__thumb::before {
    position: absolute;
    inset: 0;
    content: "";
    background: #35082B;
    opacity: 0.47;
  }

  /*------Footer Section Start--------*/
  /*------Footer Section Start--------*/
  .footer__section {
    position: relative;
    overflow: hidden;
  }
  .footer__section .shape__left {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .footer__section .shape__right {
    position: absolute;
    bottom: 0;
    right: 0;
  }


  .footer__bottom {
    padding: 29px 0;
    text-align: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }
  .footer__bottom p {
    font-size: 18px;
    color: var(--white-color);
  }
  .footer__bottom p a {
    font-weight: 500;
  }
  .footer__bottom .bottom__ling {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .footer__bottom .bottom__ling li a {
    color: var(--white-color);
    font-size: 18px;
    font-weight: 400;
  }

  /*------Footer Section End--------*/
  /*------Footer Section End--------*/
  /*Abstracts / footer*/


  /*Abstracts / banner*/
  .banner__section {
    background-color: var(--banner-color);
    overflow: hidden;
    position: relative;
    padding: 0 0 100px;
  }
  .banner__section .banner__shape {
    position: absolute;
    top: 15px;
    left: 0;
  }

  .banner__thumb {
    position: relative;
  }
  .banner__thumb img {
    width: 100%;
    height: 100%;
  }
  .banner__thumb .bet__one {
    position: absolute;
    top: 20px;
    left: 40%;
    animation: bet1 30s linear infinite;
  }
  .banner__thumb .bet__two {
    position: absolute;
    width: 50px;
    left: 50px;
    bottom: 50px;
    animation: bet1 30s linear infinite;
  }

  .banner__content {
    position: relative;
  }
  .banner__content h1 {
    color: var(--white-color);
    margin-bottom: 0px;
  }
  .banner__content p {
    color: var(--white-color);
    margin-bottom: 35px;
  }

  /*Abstracts / banner*/
  /*Abstracts / section*/

  .banner__feature__wrapper {
    transform: translateY(-80px);
  }

  .banner__feature__items {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: var(--box-bg);
    padding: 20px 20px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .banner__feature__items .thumb {
    background: linear-gradient(168.62deg, #715FA5 2.08%, rgba(226, 107, 206, 0.44) 96.46%);
    border-radius: 10px;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s;
  }
  .banner__feature__items .thumb img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    transition: all 0.4s;
  }
  .banner__feature__items .content {
    width: calc(100% - 120px);
  }
  .banner__feature__items .content h5 {
    color: var(--white-color);
    margin-bottom: 15px;
    transition: all 0.4s;
  }
  .banner__feature__items .content p {
    color: var(--white-color);
  }
  .banner__feature__items:hover .thumb {
    transform: rotate(90deg);
  }
  .banner__feature__items:hover .thumb img {
    transform: rotate(-90deg);
  }
  .banner__feature__items:hover .content h5 {
    color: var(--theme-color);
  }

  .game__items {
    position: relative;
    width: 100%;
    border-radius: 20px;
  }
  .game__items img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
  .game__items .game__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    inset: 0 0 -100% 0;
    border: 1px solid var(--theme-color);
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(53, 8, 43, 0) 0%, #35082B 88.22%);
    opacity: 0;
    transition: all 0.4s;
  }
  .game__items .game__overlay .content {
    padding: 0 0 40px;
    text-align: center;
  }
  .game__items .game__overlay .content h4 {
    color: var(--white-color);
  }
  .game__items .game__overlay .content h6 {
    color: var(--theme-color);
    margin-bottom: 25px;
  }
  .game__items:hover .game__overlay {
    inset: 0 0 -100% 0;
    opacity: 1;
  }

  .faq__section {
    overflow: hidden;
    position: relative;
  }

  .faq__board .accordion-button:not(.collapsed) {
    color: var(--white-color);
    background-color: var(--banner-color);
    box-shadow: none;
    border-bottom: 1px solid var(--border);
  }
  .faq__board .accordion-button:not(.collapsed) span {
    color: var(--white-color);
  }
  .faq__board .accordion-button:not(.collapsed)::before {
    background-color: var(--theme-color);
    color: var(--white-color) !important;
  }
  .faq__board .accordion-body p {
    color: var(--white-color);
    font-size: 18px;
    line-height: 30px;
    padding: 10px 15px;
  }
  .faq__board .accordion-item {
    background-color: var(--banner-color);
    border: unset;
    overflow: hidden;
    background: linear-gradient(#35082B, #35082B) padding-box, linear-gradient(to right, #E4A91B, #F88021) border-box;
    border-radius: 0.5em;
    border: 1px solid transparent;
  }
  .faq__board .accordion-item:not(:last-child) {
    margin-bottom: 20px;
  }
  .faq__board .accordion-item .collapsed::after {
    content: "\f0d7";
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    transform: rotate(0deg);
    color: #FFF4DA;
  }
  .faq__board .accordion-item:first-of-type .accordion-button {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  .faq__board .accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .faq__board .accordion-button {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    box-shadow: none;
    padding: 17px 20px 20px;
    line-height: 31px;
    font-size: 24px;
    font-weight: 600;
    font-family: "Jost", sans-serif;
    color: var(--white-color);
    text-align: left;
    background-color: var(--banner-color);
    border: 0;
    overflow-anchor: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
  }
  .faq__board .accordion-button::before {
    content: "";
    right: 0;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    color: var(--theme-color);
  }
  .faq__board .accordion-button::after {
    font-family: "Font Awesome 6 Free";
    content: "\f0d8";
    font-weight: 900;
    background-image: none;
    position: absolute;
    top: 17px;
    color: var(--theme-color);
    right: 20px;
    transform: rotate(0deg);
  }

  .faq__section .shape1 {
    position: absolute;
    right: 0px;
    top: 50px;
    max-width: 500px;
    z-index: 2;
    opacity: .25;
  }

  .faq__thumb {
    width: 520px;
  }
  .faq__thumb img {
    width: 100%;
    height: 100%;
  }

  .player__items {
    background: linear-gradient(#35082B, #35082B) padding-box, linear-gradient(to right, #E4A91B, #F88021) border-box;
    border-radius: 0.5em;
    border: 1px solid transparent;
    padding: 40px 30px;
    position: relative;
    width: 100%;
  }
  .player__items .quation {
    position: absolute;
    top: 20px;
    right: 25px;
  }
  .player__items .player__head {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .player__items .player__head .thumb {
    width: 60px;
    height: 60px;
  }
  .player__items .player__head .thumb img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .player__items .player__head .content h6 {
    color: var(--white-color);
    margin-bottom: 1px;
    font-weight: 700;
  }
  .player__items .player__head .content span {
    color: var(--white-color);
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
  .player__items p {
    color: var(--white-color);
    border-bottom: 1px solid #622455;
    padding: 18px 0 21px;
    font-size: 18px;
  }
  .player__items .player__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 22px;
  }
  .player__items .player__footer .ratting {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .player__items .player__footer .ratting li i {
    background: linear-gradient(114.26deg, #E4A91B 13.41%, #F88021 87.24%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .player__items .player__footer .time {
    color: var(--white-color);
    display: block;
  }

  .contact__section {
    background-color: var(--banner-color);
    position: relative;
    overflow: hidden;
  }
  .contact__section .c__shpae {
    position: absolute;
    left: 0;
    top: 50px;
  }
  .contact__section .l__shape {
    position: absolute;
    right: 0;
    bottom: 30px;
    width: 380px;
    opacity: 0.4;
  }
  .contact__section .l__shape img {
    width: 100%;
    height: 100%;
  }
  .contact__section .king__ludu {
    position: absolute;
    top: 30px;
    right: 220px;
    animation: round1 15s linear infinite;
  }
  .contact__section .king__ludu2 {
    position: absolute;
    bottom: 0;
    left: 0;
    animation: round1 15s linear infinite;
  }

  .form__area__left {
    position: relative;
    z-index: 1;
  }
  .form__area__left #form {
    position: relative;
  }
  .form__area__left #form .form__items {
    margin-bottom: 20px;
  }
  .form__area__left #form .form-control {
    padding: unset;
    margin-bottom: 20px;
    border: none;
    position: relative;
    background-color: transparent;
  }
  .form__area__left #form .form-control input {
    box-shadow: none;
    outline: none;
    border: none;
    background: linear-gradient(#35082B, #35082B) padding-box, linear-gradient(to right, #E4A91B, #F88021) border-box;
    border-radius: 0.5em;
    border: 1px solid transparent;
    color: #989898;
    padding: 13px 15px 15px;
    border-radius: 10px;
    width: 100%;
  }
  .form__area__left #form .form-control ::placeholder {
    color: #989898;
  }
  .form__area__left #form .form-control label {
    color: var(--theme-color);
    font-size: 18px;
    font-weight: 600;
    display: block;
    margin-bottom: 15px;
  }
  .form__area__left #form .cmn--btn2 {
    margin-top: 15px;
    border: none;
  }
  .form__area__left #form .form-control textarea {
    box-shadow: none;
    outline: none;
    border: none;
    width: 100%;
    background: linear-gradient(#35082B, #35082B) padding-box, linear-gradient(to right, #E4A91B, #F88021) border-box;
    border-radius: 0.5em;
    border: 1px solid transparent;
    color: var(--theme-color);
    padding: 15px 15px 15px 20px;
    border-radius: 10px;
  }
  .form__area__left #form .form-control textarea:focus {
    outline: 0;
    border-color: transparent;
  }
  .form__area__left #form .form-control.success textarea {
    border-color: #2ecc71;
  }
  .form__area__left #form .form-control.error textarea {
    border-color: #e74c3c;
  }
  .form__area__left #form .form-control input:focus {
    outline: 0;
    border-color: transparent;
  }
  .form__area__left #form .form-control.success input {
    border-color: #2ecc71;
  }
  .form__area__left #form .form-control.error input {
    border-color: #e74c3c;
  }
  .form__area__left #form .form-control small {
    color: #e74c3c;
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
  }
  .form__area__left #form .form-control.error small {
    visibility: visible;
  }
  .form__area__left #form .thank_you p {
    position: absolute;
    bottom: 25px;
    right: 0;
    font-size: 16px;
    color: green;
    animation: scaleone 0.5s linear;
    transition: all 0.5s;
    display: none;
  }
  @keyframes scaleone {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  .right__contact {
    margin-right: 50px;
    position: relative;
    z-index: 1;
  }
  .right__contact .contact li {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .right__contact .contact li:not(:last-child) {
    margin-bottom: 20px;
  }
  .right__contact .contact li .thumb {
    width: 80px;
    height: 80px;
  }
  .right__contact .contact li .thumb img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .right__contact .contact li .email-part h5 {
    color: var(--white-color);
    margin-bottom: 5px;
  }
  .right__contact .contact li .email-part p {
    color: var(--white-color);
    font-size: 16px;
    line-height: 22px;
  }


  /*Abstracts / section*/
  /*Abstracts / animation*/
  @keyframes durat {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes bet1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes round1 {
    0% {
      transform: rotate(360deg);
    }
  }
  /*Abstracts / animation*/
  /*Abstracts / blog*/
  /*Abstracts / blog*/
  /*Abstracts / componets*/
  /*--Button Area Start--*/
  /*--Button Area Start--*/
  .cmn--btn {
    padding: 10px 30px 12px;
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
    display: inline-block;
    color: var(--black-theme) !important;
    text-transform: capitalize;
    font-family: "Jost", sans-serif;
    transition: all 0.3s;
    text-align: center;
    background: linear-gradient(114.26deg, #FFF4DA 13.41%, #E4914E 87.24%);
    border-radius: 22px;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .cmn--btn::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background: linear-gradient(114.26deg, #E4A91B 13.41%, #F88021 87.24%);
    height: 100%;
    width: 0px;
    transition: all 0.4s;
  }
  .cmn--btn:hover::before {
    width: 100%;
  }
  .cmn--btn:hover {
    color: var(--theme-color) !important;
  }
  .cmn--btn:hover span {
    color: var(--white-color);
  }
  .cmn--btn span {
    z-index: 1;
    position: relative;
    transition: all 0.4s;
  }

  .cmn--btn2 {
    border-radius: 10px;
    padding: 10px 30px 12px;
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
    display: inline-block;
    color: var(--white-color) !important;
    text-transform: capitalize;
    letter-spacing: 1px;
    transition: all 0.3s;
    font-family: "Jost", sans-serif;
    text-align: center;
    background: linear-gradient(114.26deg, #E4A91B 13.41%, #F88021 87.24%);
    border-radius: 22px;
    position: relative;
    overflow: hidden;
  }
  .cmn--btn2::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background: linear-gradient(114.26deg, #FFF4DA 13.41%, #E4914E 87.24%);
    height: 100%;
    width: 0px;
    transition: all 0.4s;
  }
  .cmn--btn2:hover::before {
    width: 100%;
  }
  .cmn--btn2:hover span {
    color: var(--black-theme);
  }
  .cmn--btn2 span {
    z-index: 1;
    position: relative;
    transition: all 0.4s;
  }

  .mneu-btn-grp {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  /*--Button Area End--*/
  /*--Button Area End--*/
  /*Abstracts / componets*/
  /*Abstracts / reponsive*/
  @media screen and (max-width: 1919px) {
    .contact__section .l__shape {
      opacity: 0.25;
    }
  }
  @media screen and (max-width: 1399px) {
    .banner__content h1 {
      font-size: 55px;
      line-height: 70px;
      margin-bottom: 5px;
    }
    .banner__thumb img {
      width: 100%;
      height: 100%;
    }
    .banner__feature__items {
      gap: 15px;
    }
    .banner__feature__items .thumb {
      width: 90px;
      height: 90px;
    }
    .banner__feature__items .thumb img {
      width: 60px;
      height: 60px;
    }
    .banner__feature__items .content {
      width: calc(100% - 90px);
    }
    .banner__feature__items .content h5 {
      margin-bottom: 5px;
    }
    .banner__feature__items .content p {
      font-size: 15px;
      line-height: 24px;
    }
    .contact__section .l__shape {
      opacity: 0.25;
    }
    .footer__section .shape__left {
      opacity: 0.25;
      width: 180px;
    }
    .footer__section .shape__left img {
      width: 100%;
      height: 100%;
    }
    .footer__section .shape__right {
      opacity: 0.25;
      width: 180px;
    }
    .footer__section .shape__right img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 1199px) {
    .banner__thumb img {
      width: 100%;
      height: 100%;
    }
    .banner__thumb .bet__one {
      width: 60px;
    }
    .banner__thumb .bet__one img {
      width: 100%;
      height: 100%;
    }
    .banner__content h1 {
      font-size: 45px;
      line-height: 60px;
      margin-bottom: 5px;
    }
    .banner__feature__items {
      padding: 15px 15px;
      gap: 15px;
    }
    .banner__feature__items .thumb {
      width: 80px;
      height: 80px;
    }
    .banner__feature__items .thumb img {
      width: 50px;
      height: 50px;
    }
    .banner__feature__items .content {
      width: calc(100% - 80px);
    }
    .banner__feature__items .content h5 {
      margin-bottom: 5px;
    }
    .banner__feature__items .content p {
      font-size: 15px;
      line-height: 24px;
    }
    .faq__thumb {
      width: 374px;
    }
    .max-width1 {
      margin: 0 auto 50px;
    }
    .pb-60 {
      padding-bottom: 41px;
    }
    .footer__top .widget__items .content-area p {
      margin-top: -5px;
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media screen and (max-width: 991px) {
    .banner__section {
      padding: 70px 0 150px;
    }
    .banner__content {
      margin-bottom: 30px;
    }

    .about__content .ptext2 {
      margin-bottom: 30px;
    }
    .about__content {
      margin-bottom: 35px;
    }
    .faq__thumb {
      display: none;
    }
    .max-width1 {
      margin: 0 auto 40px;
    }
    .pb-60 {
      padding-bottom: 31px;
    }
    .form__area__left {
      margin-bottom: 35px;
    }
    .contact__section .king__ludu {
      display: none;
    }
    .contact__section .king__ludu2 {
      display: none;
    }
    .footer__top .widget__items .content-area .quick-link li a {
      font-size: 17px;
    }
    .footer__top .widget__items .content-area form {
      margin-top: 20px;
    }
    .footer__top .widget__items .content-area form input {
      padding: 15px 128px 15px 20px;
      margin-bottom: 22px;
      font-size: 16px;
    }
    .footer__top .widget__items .content-area form .cmn--btn2 {
      padding: 11px 18px 14px;
      font-size: 16px;
    }

  }
  @media screen and (max-width: 767px) {
    .faq__section .section-header h2 {
      margin-top: -1px;
    }
    .faq__board .accordion-body p {
      font-size: 16px;
      line-height: 26px;
    }
    .faq__board .accordion-button {
      padding: 15px 20px 18px;
      line-height: 28px;
      font-size: 18px;
    }
    .faq__board .accordion-button::after {
      top: 17px;
      right: 20px;
    }
    .footer__bottom {
      padding: 19px 0;
      display: grid;
      justify-content: center;
      text-align: center;
      margin: 0 auto;
    }
    .footer__bottom p {
      font-size: 18px;
    }
    .footer__bottom .bottom__ling {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 8px;
    }
    .footer__bottom .bottom__ling li a {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 575px) {
    .banner__content h1 {
      font-size: 36px;
      line-height: 48px;
      margin-bottom: 10px;
    }
    .banner__content p {
      margin-bottom: 25px;
    }
    .banner__content .button__grp {
      gap: 10px;
    }
    .about__content .ptext2 {
      margin-bottom: 20px;
    }
    .about__content {
      margin-bottom: 30px;
    }
    .faq__board .accordion-body p {
      font-size: 16px;
      line-height: 26px;
    }
    .faq__board .accordion-button {
      padding: 10px 15px 12px;
      line-height: 24px;
      font-size: 16px;
    }
    .faq__board .accordion-button::after {
      top: 9px;
      right: 10px;
    }
    .faq__board .accordion-button span {
      margin-right: 20px;
    }
    .max-width1 {
      margin: 0 auto 35px;
    }
    .pb-60 {
      padding-bottom: 25px;
    }
  }
  @media screen and (max-width: 500px) {
    .footer__section .shape__right {
      display: none;
    }

  }
  @media screen and (max-width: 420px) {
    .right__contact {
      margin-right: 0;
    }
    .contact__section .l__shape {
      opacity: 0.1;
    }
    .footer__top .widget__items .content-area form {
      margin-top: 20px;
    }
    .footer__top .widget__items .content-area form input {
      padding: 15px 128px 15px 20px;
      margin-bottom: 22px;
      font-size: 14px;
    }
    .footer__top .widget__items .content-area form .cmn--btn2 {
      padding: 9px 18px 12px;
      font-size: 14px;
    }
    .footer__bottom p {
      font-size: 17px;
    }
    .footer__bottom .bottom__ling {
      margin-top: 5px;
    }
    .footer__bottom .bottom__ling li a {
      font-size: 16px;
    }
  }


  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
    .player__items {
      width: 45%;
      margin-left: 5px;
      margin-bottom: 25px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
    .player__items {
      width: 30%;
      margin-left: 5px;
      margin-bottom: 25px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
    .player__items {
      width: 30%;
      margin-left: 5px;
      margin-bottom: 25px;
    }
  }

  @media (min-width: 1400px) {
    .container {
      max-width: 1320px;
    }
    .player__items {
      width: 30%;
      margin-left: 5px;
      margin-bottom: 25px;
    }
  }

}

/*Abstracts / reponsive*/
/*CSS Table Of Content Ends End*//*# sourceMappingURL=main.css.map */

</style>
