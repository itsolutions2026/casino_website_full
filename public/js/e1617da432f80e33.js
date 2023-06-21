"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/casino-holdem-resources-js-pages-admin-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/casino-holdem/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/casino-holdem/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Admin/FileUpload */ "./resources/js/components/Admin/FileUpload.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FileUpload: _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    packageId: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      anteHands: [this.$t('High card'), this.$t('Pair'), this.$t('Two pair'), this.$t('Three of a kind'), this.$t('Straight'), this.$t('Flush'), this.$t('Full house'), this.$t('Four of a kind'), this.$t('Straight flush'), this.$t('Royal flush')],
      bonusHands: [this.$t('High card'), this.$t('Pair of aces'), this.$t('Two pair'), this.$t('Three of a kind'), this.$t('Straight'), this.$t('Flush'), this.$t('Full house'), this.$t('Four of a kind'), this.$t('Straight flush'), this.$t('Royal flush')],
      variables: {
        GAME_CASINO_HOLDEM_CATEGORIES: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".categories")),
        GAME_CASINO_HOLDEM_BANNER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".banner")),
        GAME_CASINO_HOLDEM_MIN_BET: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".min_bet")), 10),
        GAME_CASINO_HOLDEM_MIN_BONUS_BET: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".min_bonus_bet")), 10),
        GAME_CASINO_HOLDEM_MAX_BET: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".max_bet")), 10),
        GAME_CASINO_HOLDEM_MAX_BONUS_BET: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".max_bonus_bet")), 10),
        GAME_CASINO_HOLDEM_BET_CHANGE_AMOUNT: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bet_change_amount")), 10),
        GAME_CASINO_HOLDEM_BONUS_BET_CHANGE_AMOUNT: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bonus_bet_change_amount")), 10),
        GAME_CASINO_HOLDEM_DEFAULT_BET_AMOUNT: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".default_bet_amount")), 10),
        GAME_CASINO_HOLDEM_DEFAULT_BONUS_BET_AMOUNT: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".default_bonus_bet_amount")), 10),
        GAME_CASINO_HOLDEM_ANTE_PAYTABLE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".ante_paytable")),
        GAME_CASINO_HOLDEM_BONUS_PAYTABLE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bonus_paytable")),
        GAME_CASINO_HOLDEM_SOUNDS_WIN: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.win")),
        GAME_CASINO_HOLDEM_SOUNDS_LOSE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.lose")),
        GAME_CASINO_HOLDEM_SOUNDS_PUSH: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.push"))
      }
    };
  },
  created: function created() {
    this.$emit('input', this.variables);
  }
});

/***/ }),

/***/ "./packages/casino-holdem/resources/js/pages/admin/settings.vue":
/*!**********************************************************************!*\
  !*** ./packages/casino-holdem/resources/js/pages/admin/settings.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_0defa886___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=0defa886& */ "./packages/casino-holdem/resources/js/pages/admin/settings.vue?vue&type=template&id=0defa886&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./packages/casino-holdem/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_0defa886___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_0defa886___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/casino-holdem/resources/js/pages/admin/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/casino-holdem/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./packages/casino-holdem/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/casino-holdem/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/casino-holdem/resources/js/pages/admin/settings.vue?vue&type=template&id=0defa886&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/casino-holdem/resources/js/pages/admin/settings.vue?vue&type=template&id=0defa886& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCombobox */ "./node_modules/vuetify/lib/components/VCombobox/VCombobox.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");









var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      flat: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("General")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Categories"),
      multiple: "",
      outlined: "",
      chips: "",
      "small-chips": "",
      "deletable-chips": "",
      "hide-selected": "",
      "no-filter": ""
    },
    model: {
      value: _vm.form.GAME_CASINO_HOLDEM_CATEGORIES,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CASINO_HOLDEM_CATEGORIES", $$v);
      },
      expression: "form.GAME_CASINO_HOLDEM_CATEGORIES"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Banner"),
      name: "banner",
      folder: "games/".concat(_vm.packageId)
    },
    model: {
      value: _vm.form.GAME_CASINO_HOLDEM_BANNER,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CASINO_HOLDEM_BANNER", $$v);
      },
      expression: "form.GAME_CASINO_HOLDEM_BANNER"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Min bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_CASINO_HOLDEM_MIN_BET"),
      "error-messages": _vm.form.errors.get("GAME_CASINO_HOLDEM_MIN_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CASINO_HOLDEM_MIN_BET");
      }
    },
    model: {
      value: _vm.form.GAME_CASINO_HOLDEM_MIN_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CASINO_HOLDEM_MIN_BET", _vm._n($$v));
      },
      expression: "form.GAME_CASINO_HOLDEM_MIN_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Max bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_CASINO_HOLDEM_MAX_BET"),
      "error-messages": _vm.form.errors.get("GAME_CASINO_HOLDEM_MAX_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CASINO_HOLDEM_MAX_BET");
      }
    },
    model: {
      value: _vm.form.GAME_CASINO_HOLDEM_MAX_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CASINO_HOLDEM_MAX_BET", _vm._n($$v));
      },
      expression: "form.GAME_CASINO_HOLDEM_MAX_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Bet increment / decrement amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_CASINO_HOLDEM_BET_CHANGE_AMOUNT"),
      "error-messages": _vm.form.errors.get("GAME_CASINO_HOLDEM_BET_CHANGE_AMOUNT"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CASINO_HOLDEM_BET_CHANGE_AMOUNT");
      }
    },
    model: {
      value: _vm.form.GAME_CASINO_HOLDEM_BET_CHANGE_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CASINO_HOLDEM_BET_CHANGE_AMOUNT", _vm._n($$v));
      },
      expression: "form.GAME_CASINO_HOLDEM_BET_CHANGE_AMOUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Default bet amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_CASINO_HOLDEM_DEFAULT_BET_AMOUNT"),
      "error-messages": _vm.form.errors.get("GAME_CASINO_HOLDEM_DEFAULT_BET_AMOUNT"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CASINO_HOLDEM_DEFAULT_BET_AMOUNT");
      }
    },
    model: {
      value: _vm.form.GAME_CASINO_HOLDEM_DEFAULT_BET_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CASINO_HOLDEM_DEFAULT_BET_AMOUNT", _vm._n($$v));
      },
      expression: "form.GAME_CASINO_HOLDEM_DEFAULT_BET_AMOUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Min bonus bet"),
      rules: [_vm.validationInteger],
      error: _vm.form.errors.has("GAME_CASINO_HOLDEM_MIN_BONUS_BET"),
      "error-messages": _vm.form.errors.get("GAME_CASINO_HOLDEM_MIN_BONUS_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CASINO_HOLDEM_MIN_BONUS_BET");
      }
    },
    model: {
      value: _vm.form.GAME_CASINO_HOLDEM_MIN_BONUS_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CASINO_HOLDEM_MIN_BONUS_BET", _vm._n($$v));
      },
      expression: "form.GAME_CASINO_HOLDEM_MIN_BONUS_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Max bonus bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_CASINO_HOLDEM_MAX_BONUS_BET"),
      "error-messages": _vm.form.errors.get("GAME_CASINO_HOLDEM_MAX_BONUS_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CASINO_HOLDEM_MAX_BONUS_BET");
      }
    },
    model: {
      value: _vm.form.GAME_CASINO_HOLDEM_MAX_BONUS_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CASINO_HOLDEM_MAX_BONUS_BET", _vm._n($$v));
      },
      expression: "form.GAME_CASINO_HOLDEM_MAX_BONUS_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Bonus bet increment / decrement amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_CASINO_HOLDEM_BONUS_BET_CHANGE_AMOUNT"),
      "error-messages": _vm.form.errors.get("GAME_CASINO_HOLDEM_BONUS_BET_CHANGE_AMOUNT"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CASINO_HOLDEM_BONUS_BET_CHANGE_AMOUNT");
      }
    },
    model: {
      value: _vm.form.GAME_CASINO_HOLDEM_BONUS_BET_CHANGE_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CASINO_HOLDEM_BONUS_BET_CHANGE_AMOUNT", _vm._n($$v));
      },
      expression: "form.GAME_CASINO_HOLDEM_BONUS_BET_CHANGE_AMOUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Default bet amount"),
      rules: [_vm.validationInteger],
      error: _vm.form.errors.has("GAME_CASINO_HOLDEM_DEFAULT_BONUS_BET_AMOUNT"),
      "error-messages": _vm.form.errors.get("GAME_CASINO_HOLDEM_DEFAULT_BONUS_BET_AMOUNT"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CASINO_HOLDEM_DEFAULT_BONUS_BET_AMOUNT");
      }
    },
    model: {
      value: _vm.form.GAME_CASINO_HOLDEM_DEFAULT_BONUS_BET_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CASINO_HOLDEM_DEFAULT_BONUS_BET_AMOUNT", _vm._n($$v));
      },
      expression: "form.GAME_CASINO_HOLDEM_DEFAULT_BONUS_BET_AMOUNT"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Ante paytable")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_vm._l(_vm.anteHands, function (hand, i) {
    return [i !== 0 ? _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: i,
      attrs: {
        label: hand,
        rules: [_vm.validationInteger],
        error: _vm.form.errors.has("GAME_CASINO_HOLDEM_ANTE_PAYTABLE"),
        "error-messages": _vm.form.errors.get("GAME_CASINO_HOLDEM_ANTE_PAYTABLE"),
        outlined: "",
        prefix: _vm.$t("Bet") + " x ",
        suffix: _vm.variables.GAME_CASINO_HOLDEM_ANTE_PAYTABLE[i] - 1 + ":1"
      },
      on: {
        keydown: function keydown($event) {
          return _vm.clearFormErrors($event, "GAME_CASINO_HOLDEM_ANTE_PAYTABLE");
        }
      },
      model: {
        value: _vm.form.GAME_CASINO_HOLDEM_ANTE_PAYTABLE[i],
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_CASINO_HOLDEM_ANTE_PAYTABLE, i, _vm._n($$v));
        },
        expression: "form.GAME_CASINO_HOLDEM_ANTE_PAYTABLE[i]"
      }
    }) : _c("input", {
      key: i,
      attrs: {
        type: "hidden",
        name: "GAME_CASINO_HOLDEM_ANTE_PAYTABLE[0]",
        value: "0"
      }
    })];
  })], 2)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Bonus paytable")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_vm._l(_vm.bonusHands, function (hand, i) {
    return [i !== 0 ? _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: i,
      attrs: {
        label: hand,
        rules: [_vm.validationInteger],
        error: _vm.form.errors.has("GAME_CASINO_HOLDEM_BONUS_PAYTABLE"),
        "error-messages": _vm.form.errors.get("GAME_CASINO_HOLDEM_BONUS_PAYTABLE"),
        outlined: "",
        prefix: _vm.$t("Bet") + " x ",
        suffix: _vm.variables.GAME_CASINO_HOLDEM_BONUS_PAYTABLE[i] - 1 + ":1"
      },
      on: {
        keydown: function keydown($event) {
          return _vm.clearFormErrors($event, "GAME_CASINO_HOLDEM_BONUS_PAYTABLE");
        }
      },
      model: {
        value: _vm.form.GAME_CASINO_HOLDEM_BONUS_PAYTABLE[i],
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_CASINO_HOLDEM_BONUS_PAYTABLE, i, _vm._n($$v));
        },
        expression: "form.GAME_CASINO_HOLDEM_BONUS_PAYTABLE[i]"
      }
    }) : _c("input", {
      key: i,
      attrs: {
        type: "hidden",
        name: "GAME_CASINO_HOLDEM_BONUS_PAYTABLE[0]",
        value: "0"
      }
    })];
  })], 2)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Sounds")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c("file-upload", {
    attrs: {
      label: _vm.$t("Win"),
      name: "win",
      folder: "games/".concat(_vm.packageId),
      accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
      clearable: true
    },
    model: {
      value: _vm.form.GAME_CASINO_HOLDEM_SOUNDS_WIN,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CASINO_HOLDEM_SOUNDS_WIN", $$v);
      },
      expression: "form.GAME_CASINO_HOLDEM_SOUNDS_WIN"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Lose"),
      name: "lose",
      folder: "games/".concat(_vm.packageId),
      accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
      clearable: true
    },
    model: {
      value: _vm.form.GAME_CASINO_HOLDEM_SOUNDS_LOSE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CASINO_HOLDEM_SOUNDS_LOSE", $$v);
      },
      expression: "form.GAME_CASINO_HOLDEM_SOUNDS_LOSE"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Push"),
      name: "lose",
      folder: "games/".concat(_vm.packageId),
      accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
      clearable: true
    },
    model: {
      value: _vm.form.GAME_CASINO_HOLDEM_SOUNDS_PUSH,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CASINO_HOLDEM_SOUNDS_PUSH", $$v);
      },
      expression: "form.GAME_CASINO_HOLDEM_SOUNDS_PUSH"
    }
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/casino-holdem/resources/js/pages/admin/settings.vue?vue&type=template&id=0defa886&":
/*!*****************************************************************************************************!*\
  !*** ./packages/casino-holdem/resources/js/pages/admin/settings.vue?vue&type=template&id=0defa886& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_0defa886___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_0defa886___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_0defa886___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=0defa886& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/casino-holdem/resources/js/pages/admin/settings.vue?vue&type=template&id=0defa886&");


/***/ })

}]);