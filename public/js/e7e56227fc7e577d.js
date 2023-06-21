"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/slots-3d-resources-js-pages-admin-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/Admin/FileUpload */ "./resources/js/components/Admin/FileUpload.vue");
/* harmony import */ var _components_ColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/ColorPicker */ "./resources/js/components/ColorPicker.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ColorPicker: _components_ColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"],
    FileUpload: _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_3__["default"],
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_2___default())
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
      variables: {
        GAME_SLOTS_3D_CATEGORIES: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".categories")),
        GAME_SLOTS_3D_BANNER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".banner")),
        GAME_SLOTS_3D_BACKGROUND_SKYBOX: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".background_skybox")),
        GAME_SLOTS_3D_BACKGROUND_SKYBOX_ROTATE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".background_skybox_rotate")),
        GAME_SLOTS_3D_BACKGROUND_SKYBOX_DEEP: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".background_skybox_deep")),
        GAME_SLOTS_3D_TEXTURE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".texture")),
        GAME_SLOTS_3D_TABLE_TEXTURE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".table_texture")),
        GAME_SLOTS_3D_TABLE_COLOR: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".table_color")),
        GAME_SLOTS_3D_TABLE_BORDER_COLOR: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".table_border_color")),
        GAME_SLOTS_3D_MIN_BET: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".min_bet")), 10),
        GAME_SLOTS_3D_MAX_BET: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".max_bet")), 10),
        GAME_SLOTS_3D_BET_CHANGE_AMOUNT: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bet_change_amount")), 10),
        GAME_SLOTS_3D_DEFAULT_BET_AMOUNT: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".default_bet_amount")), 10),
        GAME_SLOTS_3D_AUTO_PLAY_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".auto_play.enabled")),
        GAME_SLOTS_3D_AUTO_PLAY_INTERVAL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".auto_play.interval")),
        GAME_SLOTS_3D_SYMBOLS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".symbols")),
        GAME_SLOTS_3D_REELS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".reels")),
        GAME_SLOTS_3D_PAYTABLE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".paytable")),
        GAME_SLOTS_3D_SOUNDS_WIN: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.win")),
        GAME_SLOTS_3D_SOUNDS_LOSE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.lose"))
      }
    };
  },
  computed: {
    symbols: function symbols() {
      return [{
        text: this.$t('Any'),
        value: null
      }].concat(this.variables.GAME_SLOTS_3D_SYMBOLS.map(function (file, i) {
        return {
          text: file,
          value: i
        };
      }));
    }
  },
  created: function created() {
    this.$emit('input', this.variables);
  },
  methods: {
    symbolImagePath: function symbolImagePath(symbolIndex) {
      return this.form.GAME_SLOTS_3D_SYMBOLS[symbolIndex] || '';
    },
    addSymbol: function addSymbol() {
      this.variables.GAME_SLOTS_3D_SYMBOLS.push('');
    },
    removeSymbol: function removeSymbol(symbolIndex) {
      this.variables.GAME_SLOTS_3D_SYMBOLS.splice(symbolIndex, 1);
    },
    addSymbolToReel: function addSymbolToReel(reelIndex, symbolIndex) {
      this.variables.GAME_SLOTS_3D_REELS[reelIndex].push(symbolIndex);
    },
    removeSymbolFromReel: function removeSymbolFromReel(reelIndex, index) {
      this.variables.GAME_SLOTS_3D_REELS[reelIndex].splice(index, 1);
    },
    addPayline: function addPayline() {
      this.variables.GAME_SLOTS_3D_PAYTABLE.push({
        positions: [0, 0, 0],
        payout: 10
      });
    },
    deletePayline: function deletePayline(index) {
      this.variables.GAME_SLOTS_3D_PAYTABLE.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=fc916cf0&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=fc916cf0&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".v-badge[data-v-fc916cf0] {\n  cursor: move;\n  /* fallback if grab cursor is unsupported */\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n.sortable-chosen .v-badge[data-v-fc916cf0], .sortable-ghost .v-badge[data-v-fc916cf0] {\n  cursor: move;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=fc916cf0&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=fc916cf0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_fc916cf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=style&index=0&id=fc916cf0&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=fc916cf0&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_fc916cf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_fc916cf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./packages/slots-3d/resources/js/pages/admin/settings.vue":
/*!*****************************************************************!*\
  !*** ./packages/slots-3d/resources/js/pages/admin/settings.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_fc916cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=fc916cf0&scoped=true& */ "./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=template&id=fc916cf0&scoped=true&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _settings_vue_vue_type_style_index_0_id_fc916cf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.vue?vue&type=style&index=0&id=fc916cf0&lang=scss&scoped=true& */ "./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=fc916cf0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_fc916cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_fc916cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fc916cf0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/slots-3d/resources/js/pages/admin/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=fc916cf0&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=fc916cf0&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_fc916cf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=style&index=0&id=fc916cf0&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=fc916cf0&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=template&id=fc916cf0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=template&id=fc916cf0&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VBadge */ "./node_modules/vuetify/lib/components/VBadge/VBadge.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCombobox */ "./node_modules/vuetify/lib/components/VCombobox/VCombobox.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VList.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItemIcon.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/VMenu.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js");
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
      value: _vm.form.GAME_SLOTS_3D_CATEGORIES,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_CATEGORIES", $$v);
      },
      expression: "form.GAME_SLOTS_3D_CATEGORIES"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Banner"),
      name: "banner",
      folder: "games/".concat(_vm.packageId)
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_BANNER,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_BANNER", $$v);
      },
      expression: "form.GAME_SLOTS_3D_BANNER"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Slot machine texture"),
      name: "texture",
      folder: "games/".concat(_vm.packageId)
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_TEXTURE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_TEXTURE", $$v);
      },
      expression: "form.GAME_SLOTS_3D_TEXTURE"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Panoramic background image"),
      name: "background-skybox",
      folder: "games/".concat(_vm.packageId)
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_BACKGROUND_SKYBOX,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_BACKGROUND_SKYBOX", $$v);
      },
      expression: "form.GAME_SLOTS_3D_BACKGROUND_SKYBOX"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Y rotate angle"),
      rules: [_vm.validationInteger],
      outlined: ""
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_BACKGROUND_SKYBOX_ROTATE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_BACKGROUND_SKYBOX_ROTATE", _vm._n($$v));
      },
      expression: "form.GAME_SLOTS_3D_BACKGROUND_SKYBOX_ROTATE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Z axis offset"),
      rules: [_vm.validationInteger],
      outlined: ""
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_BACKGROUND_SKYBOX_DEEP,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_BACKGROUND_SKYBOX_DEEP", _vm._n($$v));
      },
      expression: "form.GAME_SLOTS_3D_BACKGROUND_SKYBOX_DEEP"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Table texture"),
      name: "table-texture",
      folder: "games/".concat(_vm.packageId)
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_TABLE_TEXTURE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_TABLE_TEXTURE", $$v);
      },
      expression: "form.GAME_SLOTS_3D_TABLE_TEXTURE"
    }
  }), _vm._v(" "), _c("color-picker", {
    attrs: {
      label: _vm.$t("Table overlay color")
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_TABLE_COLOR,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_TABLE_COLOR", $$v);
      },
      expression: "form.GAME_SLOTS_3D_TABLE_COLOR"
    }
  }), _vm._v(" "), _c("color-picker", {
    attrs: {
      label: _vm.$t("Table border color")
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_TABLE_BORDER_COLOR,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_TABLE_BORDER_COLOR", $$v);
      },
      expression: "form.GAME_SLOTS_3D_TABLE_BORDER_COLOR"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Min bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      outlined: "",
      suffix: _vm.$t("credits")
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_MIN_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_MIN_BET", _vm._n($$v));
      },
      expression: "form.GAME_SLOTS_3D_MIN_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Max bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      outlined: "",
      suffix: _vm.$t("credits")
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_MAX_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_MAX_BET", _vm._n($$v));
      },
      expression: "form.GAME_SLOTS_3D_MAX_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Bet increment / decrement amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      outlined: "",
      suffix: _vm.$t("credits")
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_BET_CHANGE_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_BET_CHANGE_AMOUNT", _vm._n($$v));
      },
      expression: "form.GAME_SLOTS_3D_BET_CHANGE_AMOUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Default bet amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      outlined: "",
      suffix: _vm.$t("credits")
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_DEFAULT_BET_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_DEFAULT_BET_AMOUNT", _vm._n($$v));
      },
      expression: "form.GAME_SLOTS_3D_DEFAULT_BET_AMOUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Auto play"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_AUTO_PLAY_ENABLED,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_AUTO_PLAY_ENABLED", $$v);
      },
      expression: "form.GAME_SLOTS_3D_AUTO_PLAY_ENABLED"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.form.GAME_SLOTS_3D_AUTO_PLAY_ENABLED === "true",
      expression: "form.GAME_SLOTS_3D_AUTO_PLAY_ENABLED === 'true'"
    }],
    attrs: {
      label: _vm.$t("Auto play interval"),
      rules: [_vm.validationPositiveInteger],
      error: _vm.form.errors.has("GAME_SLOTS_3D_AUTO_PLAY_INTERVAL"),
      "error-messages": _vm.form.errors.get("GAME_SLOTS_3D_AUTO_PLAY_INTERVAL"),
      outlined: "",
      suffix: _vm.$t("seconds")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_SLOTS_3D_AUTO_PLAY_INTERVAL");
      }
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_AUTO_PLAY_INTERVAL,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_AUTO_PLAY_INTERVAL", _vm._n($$v));
      },
      expression: "form.GAME_SLOTS_3D_AUTO_PLAY_INTERVAL"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Symbols")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_vm._l(_vm.form.GAME_SLOTS_3D_SYMBOLS, function (symbol, symbolIndex) {
    return [_c("div", {
      key: symbolIndex
    }, [_c("file-upload", {
      attrs: {
        label: _vm.$t("Image"),
        name: "symbol-".concat(symbolIndex),
        folder: "games/".concat(_vm.packageId)
      },
      scopedSlots: _vm._u([_vm.form.GAME_SLOTS_3D_SYMBOLS.length > 1 ? {
        key: "append-outer",
        fn: function fn() {
          return [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
            on: {
              click: function click($event) {
                return _vm.removeSymbol(symbolIndex);
              }
            }
          }, [_vm._v("\n                    mdi-delete\n                  ")])];
        },
        proxy: true
      } : null], null, true),
      model: {
        value: _vm.form.GAME_SLOTS_3D_SYMBOLS[symbolIndex],
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_3D_SYMBOLS, symbolIndex, $$v);
        },
        expression: "form.GAME_SLOTS_3D_SYMBOLS[symbolIndex]"
      }
    })], 1)];
  }), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["default"], [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.addSymbol();
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Add symbol")) + "\n              ")])], 1)], 1)], 2)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Reels")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], _vm._l([0, 1, 2], function (reelIndex) {
    return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: reelIndex
    }, [_vm.form.GAME_SLOTS_3D_REELS ? _c("draggable", {
      attrs: {
        list: _vm.form.GAME_SLOTS_3D_REELS[reelIndex]
      }
    }, _vm._l(_vm.form.GAME_SLOTS_3D_REELS[reelIndex], function (symbolIndex, k) {
      return _c("div", {
        key: k,
        staticClass: "text-center mb-3"
      }, [_c(vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_13__["default"], {
        attrs: {
          color: "rgba(255,255,255,0)"
        }
      }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
        attrs: {
          slot: "badge",
          color: "error",
          icon: "",
          "x-small": ""
        },
        on: {
          click: function click($event) {
            return _vm.removeSymbolFromReel(reelIndex, k);
          }
        },
        slot: "badge"
      }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], [_vm._v("mdi-close")])], 1), _vm._v(" "), _c(vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        attrs: {
          size: "64",
          tile: ""
        }
      }, [_c("img", {
        attrs: {
          src: _vm.symbolImagePath(symbolIndex),
          alt: _vm.symbolImagePath(symbolIndex)
        }
      })])], 1)], 1);
    }), 0) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "text-center mt-5"
    }, [_c(vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_15__["default"], {
      attrs: {
        "offset-y": "",
        top: "",
        right: "",
        "max-height": "300"
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(_ref) {
          var on = _ref.on;
          return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_12__["default"], _vm._g({
            attrs: {
              color: "primary",
              small: ""
            }
          }, on), [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], [_vm._v("mdi-plus")]), _vm._v("\n                      " + _vm._s(_vm.$t("Add")) + "\n                    ")], 1)];
        }
      }], null, true)
    }, [_vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_16__["default"], _vm._l(_vm.form.GAME_SLOTS_3D_SYMBOLS, function (symbol, symbolIndex) {
      return _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_17__["default"], {
        key: symbolIndex,
        on: {
          click: function click($event) {
            return _vm.addSymbolToReel(reelIndex, symbolIndex);
          }
        }
      }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_18__["default"], {
        staticClass: "mr-0"
      }, [_c(vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        attrs: {
          size: "64",
          tile: ""
        }
      }, [_c("img", {
        attrs: {
          src: _vm.symbolImagePath(symbolIndex),
          alt: _vm.symbolImagePath(symbolIndex)
        }
      })])], 1)], 1);
    }), 1)], 1)], 1)], 1);
  }), 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Paytable")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_vm._l(_vm.form.GAME_SLOTS_3D_PAYTABLE, function (payline, paylineIndex) {
    return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: paylineIndex
    }, [_vm._l([0, 1, 2], function (reelIndex) {
      return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        key: reelIndex,
        attrs: {
          cols: "12",
          lg: "2"
        }
      }, [_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_19__["default"], {
        attrs: {
          items: _vm.symbols,
          label: _vm.$t("Symbol")
        },
        scopedSlots: _vm._u([{
          key: "item",
          fn: function fn(_ref2) {
            var item = _ref2.item;
            return [_c(vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
              attrs: {
                size: "32"
              }
            }, [item.value !== null ? _c("img", {
              attrs: {
                src: _vm.symbolImagePath(item.value),
                alt: _vm.symbolImagePath(item.value)
              }
            }) : _c("span", [_vm._v(_vm._s(_vm.$t("Any")))])])];
          }
        }, {
          key: "selection",
          fn: function fn(_ref3) {
            var item = _ref3.item;
            return [_c(vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
              attrs: {
                size: "32"
              }
            }, [item.value !== null ? _c("img", {
              attrs: {
                src: _vm.symbolImagePath(item.value),
                alt: _vm.symbolImagePath(item.value)
              }
            }) : _c("span", [_vm._v(_vm._s(_vm.$t("Any")))])])];
          }
        }], null, true),
        model: {
          value: payline.positions[reelIndex],
          callback: function callback($$v) {
            _vm.$set(payline.positions, reelIndex, $$v);
          },
          expression: "payline.positions[reelIndex]"
        }
      })], 1);
    }), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      attrs: {
        cols: "12",
        lg: "6"
      }
    }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
      attrs: {
        label: _vm.$t("Payout"),
        prefix: _vm.$t("Bet") + " x ",
        rules: [_vm.validationPositiveInteger],
        outlined: "",
        "append-outer-icon": "mdi-delete"
      },
      on: {
        "click:append-outer": function clickAppendOuter($event) {
          return _vm.deletePayline(paylineIndex);
        }
      },
      model: {
        value: payline.payout,
        callback: function callback($$v) {
          _vm.$set(payline, "payout", _vm._n($$v));
        },
        expression: "payline.payout"
      }
    })], 1)], 2);
  }), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["default"], [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.addPayline();
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Add payline")) + "\n              ")])], 1)], 1)], 2)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Sounds")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c("file-upload", {
    attrs: {
      label: _vm.$t("Win"),
      name: "win",
      folder: "games/".concat(_vm.packageId),
      accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
      clearable: true
    },
    model: {
      value: _vm.form.GAME_SLOTS_3D_SOUNDS_WIN,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_SOUNDS_WIN", $$v);
      },
      expression: "form.GAME_SLOTS_3D_SOUNDS_WIN"
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
      value: _vm.form.GAME_SLOTS_3D_SOUNDS_LOSE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_SLOTS_3D_SOUNDS_LOSE", $$v);
      },
      expression: "form.GAME_SLOTS_3D_SOUNDS_LOSE"
    }
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=template&id=fc916cf0&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=template&id=fc916cf0&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_fc916cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_fc916cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_fc916cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=fc916cf0&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots-3d/resources/js/pages/admin/settings.vue?vue&type=template&id=fc916cf0&scoped=true&");


/***/ })

}]);