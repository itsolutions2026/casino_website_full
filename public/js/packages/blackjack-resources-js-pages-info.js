"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/blackjack-resources-js-pages-info"],{

/***/ "./packages/blackjack/resources/js/pages/info.vue":
/*!********************************************************!*\
  !*** ./packages/blackjack/resources/js/pages/info.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _info_vue_vue_type_template_id_3dcf3420___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=3dcf3420& */ "./packages/blackjack/resources/js/pages/info.vue?vue&type=template&id=3dcf3420&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _info_vue_vue_type_template_id_3dcf3420___WEBPACK_IMPORTED_MODULE_0__.render,
  _info_vue_vue_type_template_id_3dcf3420___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/blackjack/resources/js/pages/info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/blackjack/resources/js/pages/info.vue?vue&type=template&id=3dcf3420&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/blackjack/resources/js/pages/info.vue?vue&type=template&id=3dcf3420& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h5", [_vm._v("\n    " + _vm._s(_vm.$t("How to play")) + "\n  ")]), _vm._v(" "), _c("p", [_vm._v("\n    " + _vm._s(_vm.$t("The objective of the game is to get a hand total of closer to 21 than the dealer without going over 21.")) + "\n    " + _vm._s(_vm.$t("The numeral cards 2 to 10 have their face values, Jacks, Queens and Kings are valued at 10, and Aces can have a value of either 1 or 11.")) + "\n    " + _vm._s(_vm.$t("The Ace is always valued at 11 unless that would result in the hand going over 21, in which case it is valued as 1.")) + "\n  ")]), _vm._v(" "), _c("p", [_vm._v("\n    " + _vm._s(_vm.$t("After you place a bet the dealer then deals you two cards face up.")) + "\n    " + _vm._s(_vm.$t("The dealer also gets two cards - one face up and another face down.")) + "\n    " + _vm._s(_vm.$t("You have several choices to continue the game.")) + "\n  ")]), _vm._v(" "), _c("p", [_vm._v("\n    " + _vm._s(_vm.$t("Stand")) + " – " + _vm._s(_vm.$t("If your first two cards are acceptable, you can stand.")) + "\n  ")]), _vm._v(" "), _c("p", [_vm._v("\n    " + _vm._s(_vm.$t("Hit")) + " – " + _vm._s(_vm.$t("If you would like more cards to improve your hand total, the dealer will deal you more cards, one at a time, until you either bust (go over 21) or you choose to stand.")) + "\n  ")]), _vm._v(" "), _c("p", [_vm._v("\n    " + _vm._s(_vm.$t("Double")) + " – " + _vm._s(_vm.$t("If you have a hand total that is advantageous to you but you need to take an additional card you can double your initial wager and the dealer will deal you only 1 additional card.")) + "\n  ")]), _vm._v(" "), _c("p", [_vm._v("\n    " + _vm._s(_vm.$t("Split")) + " – " + _vm._s(_vm.$t("If you are dealt a pair (2 cards of equal value) you have the option to put out a second wager and the dealer will split the two cards so that each card will become the first card on two new hands.")) + "\n    " + _vm._s(_vm.$t("You will be dealt a second card on each hand and can play each hand one after another.")) + "\n  ")]), _vm._v(" "), _c("p", [_vm._v("\n    " + _vm._s(_vm.$t("Insurance")) + " – " + _vm._s(_vm.$t("Insurance is a side bet offered when the dealer has an Ace as an up-card.")) + "\n    " + _vm._s(_vm.$t("You can put up a wager equal to half your original bet, which will get paid 2 to 1 if the dealer has a Blackjack.")) + "\n  ")]), _vm._v(" "), _c("p", [_vm._v("\n    " + _vm._s(_vm.$t("If your hand has not busted, then it is time for the dealer to play their hand.")) + "\n    " + _vm._s(_vm.$t('The dealer will first flip over their "hole card" (the face down card) and add up their 2-card hand.')) + "\n    " + _vm._s(_vm.$t("If the dealer has a hand total of 17 or higher, they will automatically stand.")) + "\n    " + _vm._s(_vm.$t("If the dealer has a hand total of 16 or lower, they will take additional cards until they either bust or get a hand total of 17 or higher.")) + "\n  ")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/blackjack/resources/js/pages/info.vue?vue&type=template&id=3dcf3420&":
/*!***************************************************************************************!*\
  !*** ./packages/blackjack/resources/js/pages/info.vue?vue&type=template&id=3dcf3420& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_3dcf3420___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_3dcf3420___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_3dcf3420___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=template&id=3dcf3420& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/blackjack/resources/js/pages/info.vue?vue&type=template&id=3dcf3420&");


/***/ })

}]);