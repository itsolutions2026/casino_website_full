"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/payments-resources-js-pages-admin-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
    console.log(this.packageId);
    return {
      variables: {
        PAYMENTS_DEPOSIT_AUTO_CANCEL_DAYS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".deposit_auto_cancel_days")),
        PAYMENTS_WITHDRAWAL_DAILY_LIMIT: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".withdrawal_daily_limit")), 10),
        PAYMENTS_WITHDRAWAL_WEEKLY_LIMIT: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".withdrawal_weekly_limit")), 10),
        PAYMENTS_WITHDRAWAL_MONTHLY_LIMIT: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".withdrawal_monthly_limit")), 10),
        PAYMENTS_WITHDRAWAL_ONLY_PROFITS: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".withdrawal_only_profits")),
        PAYMENTS_MIN_TOTAL_DEPOSIT_TO_WITHDRAW: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".min_total_deposit_to_withdraw")),
        PAYMENTS_PAYPAL_USER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".paypal.user")),
        PAYMENTS_PAYPAL_PASSWORD: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".paypal.password")),
        PAYMENTS_PAYPAL_SIGNATURE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".paypal.signature")),
        PAYMENTS_PAYPAL_TEST_MODE: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".paypal.test_mode")),
        PAYMENTS_SKRILL_ACCOUNT_EMAIL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".skrill.account")),
        PAYMENTS_SKRILL_SECRET_WORD: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".skrill.secret")),
        PAYMENTS_SKRILL_PAYMENT_METHODS: Array.isArray((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".skrill.methods"))) ? (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".skrill.methods")) : [],
        PAYMENTS_STRIPE_PUBLIC_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".stripe.public_key")),
        PAYMENTS_STRIPE_SECRET_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".stripe.secret_key")),
        PAYMENTS_FREEKASSA_MERCHANT_ID: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".freekassa.merchant_id")),
        PAYMENTS_FREEKASSA_API_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".freekassa.api_key")),
        PAYMENTS_FREEKASSA_SECRET_WORD: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".freekassa.secret")),
        PAYMENTS_FREEKASSA_SECRET_WORD2: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".freekassa.secret2")),
        PAYMENTS_MERCADOPAGO_ACCESS_TOKEN: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".mercadopago.access_token")),
        PAYMENTS_MERCADOPAGO_LIVE: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".mercadopago.live")),
        PAYMENTS_SMARTFASTPAY_CLIENT_ID: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".smartfastpay.client_id")),
        PAYMENTS_SMARTFASTPAY_SECRET_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".smartfastpay.secret_key")),
        PAYMENTS_SMARTFASTPAY_LIVE: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".smartfastpay.live")),
        PAYMENTS_EASYWIRE_USER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".easywire.user")),
        PAYMENTS_EASYWIRE_PASSWORD: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".easywire.password")),
        PAYMENTS_XRPL_APIKEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".xrpl.api_key")),
        PAYMENTS_XRPL_APISECRET: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".xrpl.api_secret")),
        PAYMENTS_COINPAYMENTS_MERCHANT_ID: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".coinpayments.merchant_id")),
        PAYMENTS_COINPAYMENTS_PUBLIC_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".coinpayments.public_key")),
        PAYMENTS_COINPAYMENTS_PRIVATE_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".coinpayments.private_key")),
        PAYMENTS_COINPAYMENTS_SECRET_KEY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".coinpayments.secret_key")),
        PAYMENTS_TRON_NETWORK: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".tron.network")),
        PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".notifications.admin.deposit.enabled")),
        PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_TRESHOLD: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".notifications.admin.deposit.treshold")), 10),
        PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".notifications.admin.withdrawal.enabled")),
        PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_TRESHOLD: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".notifications.admin.withdrawal.treshold")), 10),
        PAYMENTS_CRYPTAPI_SECRET: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".cryptapi.secret"))
      }
    };
  },
  computed: {
    autoConfirmWithdrawalsHint: function autoConfirmWithdrawalsHint() {
      return this.$t('Please note that this setting only affects whether an extra email confirmation is required for all withdrawals from your coinpayments.net account.') + ' ' + this.$t('For this setting to work you also need to set "Allow auto_confirm = 1 in create_withdrawal" permission in your coinpayments.net account for the given API key.');
    },
    maxAutoWithdrawalHint: function maxAutoWithdrawalHint() {
      return this.$t('Automatically confirm and process withdrawals, which are less than or equal to the above amount.') + ' ' + this.$t('Please note that even though such withdrawals will be processed automatically on the application side an extra email confirmation might be required on the payments provider side (see "Auto confirm withdrawals" setting).') + ' ' + this.$t('Leave zero if you like to manually approve all withdrawals.');
    },
    minDepositAmountToWithdrawHint: function minDepositAmountToWithdrawHint() {
      return this.$t('User will need to deposit at least this amount before being able to withdraw funds.') + ' ' + this.$t('Set the value to 0 if you do not want to limit withdrawals.');
    },
    tronNetworks: function tronNetworks() {
      return [{
        text: this.$t('Mainnet (trongrid)'),
        value: 'api.trongrid.io'
      }, {
        text: this.$t('Mainnet (tronstack)'),
        value: 'api.tronstack.io'
      }, {
        text: this.$t('Shasta testnet'),
        value: 'api.shasta.trongrid.io'
      }];
    },
    skrillPaymentMethods: function skrillPaymentMethods() {
      return [{
        text: this.$t('Skrill Digital Wallet'),
        value: 'WLT'
      }, {
        text: this.$t('Neteller'),
        value: 'NTL'
      }, {
        text: this.$t('Paysafecard'),
        value: 'PSC'
      }, {
        text: this.$t('Paysafecash'),
        value: 'PCH'
      }, {
        text: this.$t('All card types available in the customer’s country'),
        value: 'ACC'
      }, {
        text: this.$t('Visa'),
        value: 'VSA'
      }, {
        text: this.$t('Mastercard'),
        value: 'MSC'
      }, {
        text: this.$t('Visa Electron'),
        value: 'VSE'
      }, {
        text: this.$t('Maestro'),
        value: 'MAE'
      }, {
        text: this.$t('Carte Bleue'),
        value: 'GCB'
      }, {
        text: this.$t('Dankort'),
        value: 'DNK'
      }, {
        text: this.$t('PostePay'),
        value: 'PSP'
      }, {
        text: this.$t('CartaSi'),
        value: 'CSI'
      }, {
        text: this.$t('Rapid Transfer (Online Bank Transfer)'),
        value: 'OBT'
      }, {
        text: this.$t('Rapid Transfer (Online Bank Transfer, detailed payment type information)'),
        value: 'NGP'
      }, {
        text: this.$t('giropay'),
        value: 'GIR'
      }, {
        text: this.$t('Direct Debit/SEPA'),
        value: 'DID'
      }, {
        text: this.$t('Klarna (was Sofort)'),
        value: 'SFT'
      }, {
        text: this.$t('iDEAL'),
        value: 'IDL'
      }, {
        text: this.$t('iDEAL (GlobalConnect)'),
        value: 'GCI'
      }, {
        text: this.$t('POLi'),
        value: 'PLI'
      }, {
        text: this.$t('Przelewy24'),
        value: 'PWY'
      }, {
        text: this.$t('ePay.bg'),
        value: 'EPY'
      }, {
        text: this.$t('Trustly'),
        value: 'GLU'
      }, {
        text: this.$t('Alipay'),
        value: 'ALI'
      }, {
        text: this.$t('Astropay - Online bank transfer (Direct Bank Transfer)'),
        value: 'ADB'
      }, {
        text: this.$t('Astropay - Offline bank transfer'),
        value: 'AOB'
      }, {
        text: this.$t('Astropay - Cash (Invoice)'),
        value: 'ACI'
      }, {
        text: this.$t('Rapyd'),
        value: 'RBR'
      }];
    }
  },
  created: function created() {
    this.$emit('input', this.variables);
  },
  methods: {
    copyToClipboard: _plugins_utils__WEBPACK_IMPORTED_MODULE_2__.copyToClipboard,
    getNotifyUrl: function getNotifyUrl(method) {
      var url = (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('app.url') || (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.baseUrl)();
      return "".concat(url, "/api/webhooks/deposits/").concat(method);
    },
    getReturnUrl: function getReturnUrl(status) {
      var url = (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('app.url') || (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.baseUrl)();
      return "".concat(url, "/user/account/deposits?status=").concat(status);
    }
  }
});

/***/ }),

/***/ "./packages/payments/resources/js/pages/admin/settings.vue":
/*!*****************************************************************!*\
  !*** ./packages/payments/resources/js/pages/admin/settings.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_3ba5048c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=3ba5048c& */ "./packages/payments/resources/js/pages/admin/settings.vue?vue&type=template&id=3ba5048c&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./packages/payments/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_3ba5048c___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_3ba5048c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/payments/resources/js/pages/admin/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/payments/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./packages/payments/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/admin/settings.vue?vue&type=template&id=3ba5048c&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/admin/settings.vue?vue&type=template&id=3ba5048c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");












var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      flat: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Notifications")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Admin")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], [_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Notify after a user completes a deposit"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_ENABLED,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_ENABLED", $$v);
      },
      expression: "form.PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_ENABLED"
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Deposit amount treshold"),
      error: _vm.form.errors.has("PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_TRESHOLD"),
      "error-messages": _vm.form.errors.get("PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_TRESHOLD"),
      rules: "" + _vm.form.PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_ENABLED === "false" ? [] : [_vm.validationNonNegativeInteger],
      disabled: "" + _vm.form.PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_ENABLED === "false",
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_TRESHOLD");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_TRESHOLD,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_TRESHOLD", _vm._n($$v));
      },
      expression: "form.PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_TRESHOLD"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], [_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Notify after a user creates a withdrawal"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_ENABLED,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_ENABLED", $$v);
      },
      expression: "form.PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_ENABLED"
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Deposit amount treshold"),
      error: _vm.form.errors.has("PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_TRESHOLD"),
      "error-messages": _vm.form.errors.get("PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_TRESHOLD"),
      rules: "" + _vm.form.PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_ENABLED === "false" ? [] : [_vm.validationNonNegativeInteger],
      disabled: "" + _vm.form.PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_ENABLED === "false",
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_TRESHOLD");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_TRESHOLD,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_TRESHOLD", _vm._n($$v));
      },
      expression: "form.PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_TRESHOLD"
    }
  })], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Deposits")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Automatically cancel after"),
      rules: [_vm.validationNonNegativeInteger],
      error: _vm.form.errors.has("PAYMENTS_DEPOSIT_AUTO_CANCEL_DAYS"),
      "error-messages": _vm.form.errors.get("PAYMENTS_DEPOSIT_AUTO_CANCEL_DAYS"),
      suffix: _vm.$t("days"),
      outlined: "",
      hint: _vm.$t("If a deposit is in Created or Pending state"),
      "persistent-hint": true
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_DEPOSIT_AUTO_CANCEL_DAYS");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_DEPOSIT_AUTO_CANCEL_DAYS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_DEPOSIT_AUTO_CANCEL_DAYS", _vm._n($$v));
      },
      expression: "form.PAYMENTS_DEPOSIT_AUTO_CANCEL_DAYS"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Withdrawals")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Daily withdrawal limit"),
      rules: [_vm.validationInteger],
      error: _vm.form.errors.has("PAYMENTS_WITHDRAWAL_DAILY_LIMIT"),
      "error-messages": _vm.form.errors.get("PAYMENTS_WITHDRAWAL_DAILY_LIMIT"),
      suffix: _vm.$t("credits"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_WITHDRAWAL_DAILY_LIMIT");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_WITHDRAWAL_DAILY_LIMIT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_WITHDRAWAL_DAILY_LIMIT", _vm._n($$v));
      },
      expression: "form.PAYMENTS_WITHDRAWAL_DAILY_LIMIT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Weekly withdrawal limit"),
      rules: [_vm.validationInteger],
      error: _vm.form.errors.has("PAYMENTS_WITHDRAWAL_WEEKLY_LIMIT"),
      "error-messages": _vm.form.errors.get("PAYMENTS_WITHDRAWAL_WEEKLY_LIMIT"),
      suffix: _vm.$t("credits"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_WITHDRAWAL_WEEKLY_LIMIT");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_WITHDRAWAL_WEEKLY_LIMIT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_WITHDRAWAL_WEEKLY_LIMIT", _vm._n($$v));
      },
      expression: "form.PAYMENTS_WITHDRAWAL_WEEKLY_LIMIT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Monthly withdrawal limit"),
      rules: [_vm.validationInteger],
      error: _vm.form.errors.has("PAYMENTS_WITHDRAWAL_MONTHLY_LIMIT"),
      "error-messages": _vm.form.errors.get("PAYMENTS_WITHDRAWAL_MONTHLY_LIMIT"),
      suffix: _vm.$t("credits"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_WITHDRAWAL_MONTHLY_LIMIT");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_WITHDRAWAL_MONTHLY_LIMIT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_WITHDRAWAL_MONTHLY_LIMIT", _vm._n($$v));
      },
      expression: "form.PAYMENTS_WITHDRAWAL_MONTHLY_LIMIT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Min total deposit to allow withdrawals"),
      rules: [_vm.validationInteger],
      error: _vm.form.errors.has("PAYMENTS_MIN_TOTAL_DEPOSIT_TO_WITHDRAW"),
      "error-messages": _vm.form.errors.get("PAYMENTS_MIN_TOTAL_DEPOSIT_TO_WITHDRAW"),
      suffix: _vm.$t("credits"),
      hint: _vm.minDepositAmountToWithdrawHint,
      "persistent-hint": true,
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_MIN_TOTAL_DEPOSIT_TO_WITHDRAW");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_MIN_TOTAL_DEPOSIT_TO_WITHDRAW,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_MIN_TOTAL_DEPOSIT_TO_WITHDRAW", _vm._n($$v));
      },
      expression: "form.PAYMENTS_MIN_TOTAL_DEPOSIT_TO_WITHDRAW"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Allow only profit withdrawals"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.PAYMENTS_WITHDRAWAL_ONLY_PROFITS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_WITHDRAWAL_ONLY_PROFITS", $$v);
      },
      expression: "form.PAYMENTS_WITHDRAWAL_ONLY_PROFITS"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Paypal")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("API username"),
      error: _vm.form.errors.has("PAYMENTS_PAYPAL_USER"),
      "error-messages": _vm.form.errors.get("PAYMENTS_PAYPAL_USER"),
      outlined: "",
      hint: _vm.$t("Please note, it is different from your regular Paypal account username"),
      "persistent-hint": ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_PAYPAL_USER");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_PAYPAL_USER,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_PAYPAL_USER", $$v);
      },
      expression: "form.PAYMENTS_PAYPAL_USER"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("API password"),
      error: _vm.form.errors.has("PAYMENTS_PAYPAL_PASSWORD"),
      "error-messages": _vm.form.errors.get("PAYMENTS_PAYPAL_PASSWORD"),
      outlined: "",
      hint: _vm.$t("Please note, it is different from your regular Paypal account password"),
      "persistent-hint": ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_PAYPAL_PASSWORD");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_PAYPAL_PASSWORD,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_PAYPAL_PASSWORD", $$v);
      },
      expression: "form.PAYMENTS_PAYPAL_PASSWORD"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("API signature"),
      error: _vm.form.errors.has("PAYMENTS_PAYPAL_SIGNATURE"),
      "error-messages": _vm.form.errors.get("PAYMENTS_PAYPAL_SIGNATURE"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_PAYPAL_SIGNATURE");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_PAYPAL_SIGNATURE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_PAYPAL_SIGNATURE", $$v);
      },
      expression: "form.PAYMENTS_PAYPAL_SIGNATURE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Test mode"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.PAYMENTS_PAYPAL_TEST_MODE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_PAYPAL_TEST_MODE", $$v);
      },
      expression: "form.PAYMENTS_PAYPAL_TEST_MODE"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Skrill")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Account email"),
      error: _vm.form.errors.has("PAYMENTS_SKRILL_ACCOUNT_EMAIL"),
      "error-messages": _vm.form.errors.get("PAYMENTS_SKRILL_ACCOUNT_EMAIL"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_SKRILL_ACCOUNT_EMAIL");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_SKRILL_ACCOUNT_EMAIL,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_SKRILL_ACCOUNT_EMAIL", $$v);
      },
      expression: "form.PAYMENTS_SKRILL_ACCOUNT_EMAIL"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Secret word"),
      error: _vm.form.errors.has("PAYMENTS_SKRILL_SECRET_WORD"),
      "error-messages": _vm.form.errors.get("PAYMENTS_SKRILL_SECRET_WORD"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_SKRILL_SECRET_WORD");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_SKRILL_SECRET_WORD,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_SKRILL_SECRET_WORD", $$v);
      },
      expression: "form.PAYMENTS_SKRILL_SECRET_WORD"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attrs: {
      items: _vm.skrillPaymentMethods,
      label: _vm.$t("Payment methods"),
      error: _vm.form.errors.has("PAYMENTS_SKRILL_PAYMENT_METHODS"),
      "error-messages": _vm.form.errors.get("PAYMENTS_SKRILL_PAYMENT_METHODS"),
      multiple: "",
      outlined: ""
    },
    on: {
      change: function change($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_SKRILL_PAYMENT_METHODS");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_SKRILL_PAYMENT_METHODS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_SKRILL_PAYMENT_METHODS", $$v);
      },
      expression: "form.PAYMENTS_SKRILL_PAYMENT_METHODS"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Stripe")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Public key"),
      error: _vm.form.errors.has("PAYMENTS_STRIPE_PUBLIC_KEY"),
      "error-messages": _vm.form.errors.get("PAYMENTS_STRIPE_PUBLIC_KEY"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_STRIPE_PUBLIC_KEY");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_STRIPE_PUBLIC_KEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_STRIPE_PUBLIC_KEY", $$v);
      },
      expression: "form.PAYMENTS_STRIPE_PUBLIC_KEY"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Secret key"),
      error: _vm.form.errors.has("PAYMENTS_STRIPE_SECRET_KEY"),
      "error-messages": _vm.form.errors.get("PAYMENTS_STRIPE_SECRET_KEY"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_STRIPE_SECRET_KEY");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_STRIPE_SECRET_KEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_STRIPE_SECRET_KEY", $$v);
      },
      expression: "form.PAYMENTS_STRIPE_SECRET_KEY"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Freekassa")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Merchant ID"),
      error: _vm.form.errors.has("PAYMENTS_FREEKASSA_MERCHANT_ID"),
      "error-messages": _vm.form.errors.get("PAYMENTS_FREEKASSA_MERCHANT_ID"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_FREEKASSA_MERCHANT_ID");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_FREEKASSA_MERCHANT_ID,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_FREEKASSA_MERCHANT_ID", $$v);
      },
      expression: "form.PAYMENTS_FREEKASSA_MERCHANT_ID"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("API key"),
      error: _vm.form.errors.has("PAYMENTS_FREEKASSA_API_KEY"),
      "error-messages": _vm.form.errors.get("PAYMENTS_FREEKASSA_API_KEY"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_FREEKASSA_API_KEY");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_FREEKASSA_API_KEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_FREEKASSA_API_KEY", $$v);
      },
      expression: "form.PAYMENTS_FREEKASSA_API_KEY"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Secret word"),
      error: _vm.form.errors.has("PAYMENTS_FREEKASSA_SECRET_WORD"),
      "error-messages": _vm.form.errors.get("PAYMENTS_FREEKASSA_SECRET_WORD"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_FREEKASSA_SECRET_WORD");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_FREEKASSA_SECRET_WORD,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_FREEKASSA_SECRET_WORD", $$v);
      },
      expression: "form.PAYMENTS_FREEKASSA_SECRET_WORD"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Secret word 2"),
      error: _vm.form.errors.has("PAYMENTS_FREEKASSA_SECRET_WORD2"),
      "error-messages": _vm.form.errors.get("PAYMENTS_FREEKASSA_SECRET_WORD2"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_FREEKASSA_SECRET_WORD2");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_FREEKASSA_SECRET_WORD2,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_FREEKASSA_SECRET_WORD2", $$v);
      },
      expression: "form.PAYMENTS_FREEKASSA_SECRET_WORD2"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: "notifyUrl",
    attrs: {
      value: _vm.getNotifyUrl("freekassa"),
      label: _vm.$t("Notification URL"),
      "persistent-hint": true,
      hint: _vm.$t("The URL should be copied and pasted on the Freekassa settings page."),
      readonly: "",
      outlined: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.notifyUrl.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: "returnUrlComplete",
    staticClass: "mt-5",
    attrs: {
      value: _vm.getReturnUrl("complete"),
      label: _vm.$t("Successful payment return URL"),
      "persistent-hint": true,
      hint: _vm.$t("The URL should be copied and pasted on the Freekassa settings page."),
      readonly: "",
      outlined: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.returnUrlComplete.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: "returnUrlError",
    staticClass: "mt-5",
    attrs: {
      value: _vm.getReturnUrl("error"),
      label: _vm.$t("Error payment return URL"),
      "persistent-hint": true,
      hint: _vm.$t("The URL should be copied and pasted on the Freekassa settings page."),
      readonly: "",
      outlined: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.returnUrlError.$el.querySelector("input"));
      }
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Mercado Pago")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Access token"),
      error: _vm.form.errors.has("PAYMENTS_MERCADOPAGO_ACCESS_TOKEN"),
      "error-messages": _vm.form.errors.get("PAYMENTS_MERCADOPAGO_ACCESS_TOKEN"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_MERCADOPAGO_ACCESS_TOKEN");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_MERCADOPAGO_ACCESS_TOKEN,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_MERCADOPAGO_ACCESS_TOKEN", $$v);
      },
      expression: "form.PAYMENTS_MERCADOPAGO_ACCESS_TOKEN"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Live mode"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.PAYMENTS_MERCADOPAGO_LIVE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_MERCADOPAGO_LIVE", $$v);
      },
      expression: "form.PAYMENTS_MERCADOPAGO_LIVE"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("SmartFastPay")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Client ID"),
      error: _vm.form.errors.has("PAYMENTS_SMARTFASTPAY_CLIENT_ID"),
      "error-messages": _vm.form.errors.get("PAYMENTS_SMARTFASTPAY_CLIENT_ID"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_SMARTFASTPAY_CLIENT_ID");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_SMARTFASTPAY_CLIENT_ID,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_SMARTFASTPAY_CLIENT_ID", $$v);
      },
      expression: "form.PAYMENTS_SMARTFASTPAY_CLIENT_ID"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Secret key"),
      error: _vm.form.errors.has("PAYMENTS_SMARTFASTPAY_SECRET_KEY"),
      "error-messages": _vm.form.errors.get("PAYMENTS_SMARTFASTPAY_SECRET_KEY"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_SMARTFASTPAY_SECRET_KEY");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_SMARTFASTPAY_SECRET_KEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_SMARTFASTPAY_SECRET_KEY", $$v);
      },
      expression: "form.PAYMENTS_SMARTFASTPAY_SECRET_KEY"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Live mode"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.PAYMENTS_SMARTFASTPAY_LIVE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_SMARTFASTPAY_LIVE", $$v);
      },
      expression: "form.PAYMENTS_SMARTFASTPAY_LIVE"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("EasyWire")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("API user"),
      error: _vm.form.errors.has("PAYMENTS_EASYWIRE_USER"),
      "error-messages": _vm.form.errors.get("PAYMENTS_EASYWIRE_USER"),
      outlined: ""
    },
    model: {
      value: _vm.form.PAYMENTS_EASYWIRE_USER,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_EASYWIRE_USER", $$v);
      },
      expression: "form.PAYMENTS_EASYWIRE_USER"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("API password"),
      error: _vm.form.errors.has("PAYMENTS_EASYWIRE_PASSWORD"),
      "error-messages": _vm.form.errors.get("PAYMENTS_EASYWIRE_PASSWORD"),
      outlined: ""
    },
    model: {
      value: _vm.form.PAYMENTS_EASYWIRE_PASSWORD,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_EASYWIRE_PASSWORD", $$v);
      },
      expression: "form.PAYMENTS_EASYWIRE_PASSWORD"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Coinpayments")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Merchant ID"),
      error: _vm.form.errors.has("PAYMENTS_COINPAYMENTS_MERCHANT_ID"),
      "error-messages": _vm.form.errors.get("PAYMENTS_COINPAYMENTS_MERCHANT_ID"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_COINPAYMENTS_MERCHANT_ID");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_COINPAYMENTS_MERCHANT_ID,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_COINPAYMENTS_MERCHANT_ID", $$v);
      },
      expression: "form.PAYMENTS_COINPAYMENTS_MERCHANT_ID"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Public key"),
      error: _vm.form.errors.has("PAYMENTS_COINPAYMENTS_PUBLIC_KEY"),
      "error-messages": _vm.form.errors.get("PAYMENTS_COINPAYMENTS_PUBLIC_KEY"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_COINPAYMENTS_PUBLIC_KEY");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_COINPAYMENTS_PUBLIC_KEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_COINPAYMENTS_PUBLIC_KEY", $$v);
      },
      expression: "form.PAYMENTS_COINPAYMENTS_PUBLIC_KEY"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Private key"),
      error: _vm.form.errors.has("PAYMENTS_COINPAYMENTS_PRIVATE_KEY"),
      "error-messages": _vm.form.errors.get("PAYMENTS_COINPAYMENTS_PRIVATE_KEY"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_COINPAYMENTS_PRIVATE_KEY");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_COINPAYMENTS_PRIVATE_KEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_COINPAYMENTS_PRIVATE_KEY", $$v);
      },
      expression: "form.PAYMENTS_COINPAYMENTS_PRIVATE_KEY"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Secret key"),
      error: _vm.form.errors.has("PAYMENTS_COINPAYMENTS_SECRET_KEY"),
      "error-messages": _vm.form.errors.get("PAYMENTS_COINPAYMENTS_SECRET_KEY"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_COINPAYMENTS_SECRET_KEY");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_COINPAYMENTS_SECRET_KEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_COINPAYMENTS_SECRET_KEY", $$v);
      },
      expression: "form.PAYMENTS_COINPAYMENTS_SECRET_KEY"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Tron")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attrs: {
      items: _vm.tronNetworks,
      label: _vm.$t("Network"),
      error: _vm.form.errors.has("PAYMENTS_TRON_NETWORK"),
      "error-messages": _vm.form.errors.get("PAYMENTS_TRON_NETWORK"),
      outlined: ""
    },
    on: {
      change: function change($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_TRON_NETWORK");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_TRON_NETWORK,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_TRON_NETWORK", $$v);
      },
      expression: "form.PAYMENTS_TRON_NETWORK"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("CryptAPI")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    staticClass: "mb-5",
    attrs: {
      label: _vm.$t("Secret key"),
      error: _vm.form.errors.has("PAYMENTS_CRYPTAPI_SECRET"),
      "error-messages": _vm.form.errors.get("PAYMENTS_CRYPTAPI_SECRET"),
      outlined: "",
      hint: _vm.$t("Input a random alphanumeric string without spaces"),
      "persistent-hint": true
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "PAYMENTS_CRYPTAPI_SECRET");
      }
    },
    model: {
      value: _vm.form.PAYMENTS_CRYPTAPI_SECRET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_CRYPTAPI_SECRET", $$v);
      },
      expression: "form.PAYMENTS_CRYPTAPI_SECRET"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("XRPL")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("API KEY"),
      error: _vm.form.errors.has("PAYMENTS_XRPL_APIKEY"),
      "error-messages": _vm.form.errors.get("PAYMENTS_XRPL_APIKEY"),
      outlined: ""
    },
    model: {
      value: _vm.form.PAYMENTS_XRPL_APIKEY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_XRPL_APIKEY", $$v);
      },
      expression: "form.PAYMENTS_XRPL_APIKEY"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("API SECRET"),
      error: _vm.form.errors.has("PAYMENTS_XRPL_APISECRET"),
      "error-messages": _vm.form.errors.get("PAYMENTS_XRPL_APISECRET"),
      outlined: ""
    },
    model: {
      value: _vm.form.PAYMENTS_XRPL_APISECRET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "PAYMENTS_XRPL_APISECRET", $$v);
      },
      expression: "form.PAYMENTS_XRPL_APISECRET"
    }
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/payments/resources/js/pages/admin/settings.vue?vue&type=template&id=3ba5048c&":
/*!************************************************************************************************!*\
  !*** ./packages/payments/resources/js/pages/admin/settings.vue?vue&type=template&id=3ba5048c& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_3ba5048c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_3ba5048c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_3ba5048c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=3ba5048c& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/admin/settings.vue?vue&type=template&id=3ba5048c&");


/***/ })

}]);