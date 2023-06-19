"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/multiplayer-blackjack-resources-js-pages-admin-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  computed: {
    pusherEnabled: function pusherEnabled() {
      return this.form.PUSHER_APP_ID && this.form.PUSHER_APP_KEY && this.form.PUSHER_APP_SECRET && this.form.PUSHER_APP_CLUSTER;
    }
  },
  data: function data() {
    return {
      variables: {
        GAME_MULTIPLAYER_BLACKJACK_MIN_BET: parseFloat((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('multiplayer-blackjack.min_bet')),
        GAME_MULTIPLAYER_BLACKJACK_MAX_BET: parseFloat((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('multiplayer-blackjack.max_bet')),
        GAME_MULTIPLAYER_BLACKJACK_FEE: parseFloat((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('multiplayer-blackjack.fee')),
        GAME_MULTIPLAYER_BLACKJACK_ACTION_DURATION: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('multiplayer-blackjack.action_duration'), 10),
        GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('multiplayer-blackjack.final_hit_threshold'), 10),
        GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('multiplayer-blackjack.cancel_threshold'), 10)
      }
    };
  },
  created: function created() {
    this.$emit('input', this.variables);
  }
});

/***/ }),

/***/ "./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue":
/*!******************************************************************************!*\
  !*** ./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_2a66de9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=2a66de9c& */ "./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue?vue&type=template&id=2a66de9c&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_2a66de9c___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_2a66de9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue?vue&type=template&id=2a66de9c&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue?vue&type=template&id=2a66de9c& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      flat: ""
    }
  }, [_vm.pusherEnabled ? _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      label: _vm.$t("Min bet"),
      rules: [function (v) {
        return _vm.validationInteger(parseInt(v, 10));
      }, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_MULTIPLAYER_BLACKJACK_MIN_BET"),
      "error-messages": _vm.form.errors.get("GAME_MULTIPLAYER_BLACKJACK_MIN_BET"),
      outlined: "",
      suffix: _vm.$t("credits"),
      "persistent-hint": true,
      hint: _vm.$t("This setting sets the min bet for creating a new game room.")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_BLACKJACK_MIN_BET");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_BLACKJACK_MIN_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_BLACKJACK_MIN_BET", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_BLACKJACK_MIN_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      label: _vm.$t("Max bet"),
      rules: [function (v) {
        return _vm.validationInteger(parseInt(v, 10));
      }, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_MULTIPLAYER_BLACKJACK_MAX_BET"),
      "error-messages": _vm.form.errors.get("GAME_MULTIPLAYER_BLACKJACK_MAX_BET"),
      outlined: "",
      suffix: _vm.$t("credits"),
      "persistent-hint": true,
      hint: _vm.$t("This setting sets the max bet for creating a new game room.")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_BLACKJACK_MAX_BET");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_BLACKJACK_MAX_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_BLACKJACK_MAX_BET", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_BLACKJACK_MAX_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "mb-5",
    attrs: {
      label: _vm.$t("Game house fee"),
      rules: [_vm.validationNumeric],
      error: _vm.form.errors.has("GAME_MULTIPLAYER_BLACKJACK_FEE"),
      "error-messages": _vm.form.errors.get("GAME_MULTIPLAYER_BLACKJACK_FEE"),
      outlined: "",
      suffix: "%",
      "persistent-hint": true,
      hint: _vm.$t("Percentage of all players bets")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_BLACKJACK_FEE");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_BLACKJACK_FEE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_BLACKJACK_FEE", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_BLACKJACK_FEE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      label: _vm.$t("Player turn duration"),
      rules: [function (v) {
        return _vm.validationInteger(parseInt(v, 10));
      }, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_MULTIPLAYER_BLACKJACK_ACTION_DURATION"),
      "error-messages": _vm.form.errors.get("GAME_MULTIPLAYER_BLACKJACK_ACTION_DURATION"),
      outlined: "",
      suffix: _vm.$t("seconds")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_BLACKJACK_ACTION_DURATION");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_BLACKJACK_ACTION_DURATION,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_BLACKJACK_ACTION_DURATION", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_BLACKJACK_ACTION_DURATION"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "mb-5",
    attrs: {
      label: _vm.$t("Last hit threshold"),
      rules: [function (v) {
        return _vm.validationInteger(parseInt(v, 10));
      }, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD"),
      "error-messages": _vm.form.errors.get("GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD"),
      outlined: "",
      suffix: _vm.$t("seconds"),
      "persistent-hint": true,
      hint: _vm.$t("Hit will cause immediate stand when less than {0} seconds left.", [_vm.form.GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD])
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      label: _vm.$t("Cancel threshold"),
      rules: [function (v) {
        return _vm.validationInteger(parseInt(v, 10));
      }, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD"),
      "error-messages": _vm.form.errors.get("GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD"),
      outlined: "",
      suffix: _vm.$t("seconds"),
      "persistent-hint": true,
      hint: _vm.$t("If a player started a game, but other players left the room, the player has a chance to cancel the game after {0} seconds.", [_vm.form.GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD])
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD"
    }
  })], 1) : _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      color: "error"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Please fill Pusher settings first under Services tab.")) + "\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue?vue&type=template&id=2a66de9c&":
/*!*************************************************************************************************************!*\
  !*** ./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue?vue&type=template&id=2a66de9c& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_2a66de9c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_2a66de9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_2a66de9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=2a66de9c& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/admin/settings.vue?vue&type=template&id=2a66de9c&");


/***/ })

}]);