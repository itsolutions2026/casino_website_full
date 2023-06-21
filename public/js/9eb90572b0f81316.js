(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/horse-racing-resources-js-pages-game"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var image_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! image-promise */ "./node_modules/image-promise/index.js");
/* harmony import */ var _helpers_runner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/runner */ "./packages/horse-racing/resources/js/pages/helpers/runner.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _mixins_Game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/mixins/Game */ "./resources/js/mixins/Game.vue");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");
/* harmony import */ var _audio_common_click_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/../audio/common/click.wav */ "./resources/audio/common/click.wav");
/* harmony import */ var packages_horse_racing_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! packages/horse-racing/resources/audio/win.wav */ "./packages/horse-racing/resources/audio/win.wav");
/* harmony import */ var packages_horse_racing_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! packages/horse-racing/resources/audio/lose.wav */ "./packages/horse-racing/resources/audio/lose.wav");
/* harmony import */ var packages_horse_racing_resources_audio_flash_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! packages/horse-racing/resources/audio/flash.wav */ "./packages/horse-racing/resources/audio/flash.wav");
/* harmony import */ var packages_horse_racing_resources_audio_gallop_wav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! packages/horse-racing/resources/audio/gallop.wav */ "./packages/horse-racing/resources/audio/gallop.wav");
/* harmony import */ var _components_BlockPreloader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/components/BlockPreloader */ "./resources/js/components/BlockPreloader.vue");
/* harmony import */ var packages_horse_racing_resources_images_background_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! packages/horse-racing/resources/images/background.png */ "./packages/horse-racing/resources/images/background.png");
/* harmony import */ var packages_horse_racing_resources_images_background_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_background_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var packages_horse_racing_resources_images_forest_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! packages/horse-racing/resources/images/forest.png */ "./packages/horse-racing/resources/images/forest.png");
/* harmony import */ var packages_horse_racing_resources_images_forest_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_forest_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var packages_horse_racing_resources_images_meadow_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! packages/horse-racing/resources/images/meadow.png */ "./packages/horse-racing/resources/images/meadow.png");
/* harmony import */ var packages_horse_racing_resources_images_meadow_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_meadow_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var packages_horse_racing_resources_images_grass_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! packages/horse-racing/resources/images/grass.jpg */ "./packages/horse-racing/resources/images/grass.jpg");
/* harmony import */ var packages_horse_racing_resources_images_grass_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_grass_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var packages_horse_racing_resources_images_sand_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! packages/horse-racing/resources/images/sand.jpg */ "./packages/horse-racing/resources/images/sand.jpg");
/* harmony import */ var packages_horse_racing_resources_images_sand_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_sand_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var packages_horse_racing_resources_images_fence_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! packages/horse-racing/resources/images/fence.png */ "./packages/horse-racing/resources/images/fence.png");
/* harmony import */ var packages_horse_racing_resources_images_fence_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_fence_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var packages_horse_racing_resources_images_fence_post_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! packages/horse-racing/resources/images/fence_post.png */ "./packages/horse-racing/resources/images/fence_post.png");
/* harmony import */ var packages_horse_racing_resources_images_fence_post_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_fence_post_png__WEBPACK_IMPORTED_MODULE_19__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HorseRacing',
  components: {
    BlockPreloader: _components_BlockPreloader__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_Game__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_Sound__WEBPACK_IMPORTED_MODULE_6__["default"]],
  data: function data() {
    return {
      loading: false,
      playing: false,
      ready: false,
      message: null,
      inputBets: [],
      positions: [],
      progress: 0,
      runners_sorted: [],
      game: {
        p: 0,
        runners: [],
        positions: [],
        shot: 0,
        "static": {
          bg: null,
          bg_pos: 0,
          bg_speed: 1,
          forest: null,
          forest_pos: 0,
          forest_speed: 2,
          meadow: null,
          meadow_pos: 0,
          meadow_speed: 3,
          grass: null,
          grass_pos: 0,
          grass_speed: 6,
          sand: null,
          sand_pos: 0,
          sand_speed: 8,
          fence: null,
          fence_pos: 0,
          fence_speed: 8,
          fence_post: null,
          fence_post_pos: 0
        },
        buf: null,
        buf_ctx: null,
        ctx: null,
        width: 0,
        height: 0,
        t_frame: 5,
        t_last: 0,
        t_repos: 0,
        paused: false,
        complete: 0
      },
      betTypes: [this.$t('Win'), this.$t('Place'), this.$t('Show')]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_20__.mapState)('auth', ['account'])), {}, {
    config: function config() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_3__.config)('horse-racing') || {};
    },
    defaultBet: function defaultBet() {
      return parseInt(this.config.default_bet_amount, 10);
    },
    minBet: function minBet() {
      return parseInt(this.config.min_bet, 10);
    },
    maxBet: function maxBet() {
      return parseInt(this.config.max_bet, 10);
    },
    betStep: function betStep() {
      return parseInt(this.config.bet_change_amount, 10);
    },
    paytable: function paytable() {
      return this.config.paytable;
    },
    isPlayDisabled: function isPlayDisabled() {
      return !this.provablyFairGame.hash || !this.formIsValid || !this.bets.length || this.playing || this.totalBetAmount > this.account.balance;
    },
    bets: function bets() {
      var bets = [];
      this.inputBets.forEach(function (positionBets, type) {
        positionBets.forEach(function (bet, position) {
          if (bet > 0) {
            bets.push({
              type: type,
              positions: [position],
              bet: bet
            });
          }
        });
      });
      return bets;
    },
    totalBetAmount: function totalBetAmount() {
      return this.bets.reduce(function (a, item) {
        return a + item.bet;
      }, 0);
    }
  }),
  beforeDestroy: function beforeDestroy() {
    this.gameStop();
  },
  created: function created() {
    var _this = this;
    // wait until next tick to ensure all computed properties are available (important to set lines property)
    window.addEventListener('resize', this.resize);
    this.$nextTick(function () {
      _this.init();
    });
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.resize);
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_20__.mapActions)({
    updateUserAccountBalance: 'auth/updateUserAccountBalance',
    setProvablyFairGame: 'provably-fair/set'
  })), {}, {
    init: function init() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var i, runner;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // init bets object
              _this2.betTypes.forEach(function (betType) {
                // this.$set(this.inputBets, betType, Array(this.config.runners.length).fill(0))
                _this2.inputBets.push(Array(_this2.config.runners.length).fill(0));
              });
              _this2.game.runners = [];
              _context.t0 = _regeneratorRuntime().keys(_this2.config.runners);
            case 3:
              if ((_context.t1 = _context.t0()).done) {
                _context.next = 11;
                break;
              }
              i = _context.t1.value;
              runner = new _helpers_runner__WEBPACK_IMPORTED_MODULE_1__["default"](_this2.config.runners[i].colors, _this2.config.runners[i].name, parseInt(i) + 1);
              _context.next = 8;
              return runner.init();
            case 8:
              _this2.game.runners.push(runner);
              _context.next = 3;
              break;
            case 11:
              _context.next = 13;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_background_png__WEBPACK_IMPORTED_MODULE_13___default()));
            case 13:
              _this2.game["static"].bg = _context.sent;
              _this2.game["static"].bg_pos = 0;
              _context.next = 17;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_forest_png__WEBPACK_IMPORTED_MODULE_14___default()));
            case 17:
              _this2.game["static"].forest = _context.sent;
              _this2.game["static"].forest_pos = 0;
              _context.next = 21;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_meadow_png__WEBPACK_IMPORTED_MODULE_15___default()));
            case 21:
              _this2.game["static"].meadow = _context.sent;
              _this2.game["static"].meadow_pos = 0;
              _context.next = 25;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_grass_jpg__WEBPACK_IMPORTED_MODULE_16___default()));
            case 25:
              _this2.game["static"].grass = _context.sent;
              _this2.game["static"].grass_pos = 0;
              _context.next = 29;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_sand_jpg__WEBPACK_IMPORTED_MODULE_17___default()));
            case 29:
              _this2.game["static"].sand = _context.sent;
              _this2.game["static"].sand_pos = 0;
              _context.next = 33;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_fence_png__WEBPACK_IMPORTED_MODULE_18___default()));
            case 33:
              _this2.game["static"].fence = _context.sent;
              _this2.game["static"].fence_pos = 0;
              _context.next = 37;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_fence_post_png__WEBPACK_IMPORTED_MODULE_19___default()));
            case 37:
              _this2.game["static"].fence_post = _context.sent;
              _this2.game.buf = document.createElement('canvas');
              _this2.game.buf_ctx = _this2.game.buf.getContext('2d');
              _this2.requestAnimationFrameGet();
              _this2.ready = true;
            case 42:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    requestAnimationFrameGet: function requestAnimationFrameGet() {
      var _raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
      this.requestAnimationFrame = _raf ? _raf.bind(window) : null;
    },
    drawBg: function drawBg(frames) {
      var a, p, w, h;
      a = this.game.height * 0.5 / this.game["static"].bg.height;
      p = this.game["static"].bg_pos * a;
      w = this.game["static"].bg.width * a;
      h = this.game["static"].bg.height * a;
      while (p < this.game.width) {
        this.game.buf_ctx.drawImage(this.game["static"].bg, p, 0, w, h);
        p += w;
      }
      this.game["static"].bg_pos -= frames * this.game["static"].bg_speed;
      if (this.game["static"].bg_pos < -this.game["static"].bg.width) {
        this.game["static"].bg_pos += this.game["static"].bg.width;
      }
      a = this.game.height * 0.5 / this.game["static"].forest.height;
      p = this.game["static"].forest_pos * a;
      w = this.game["static"].forest.width * a;
      h = this.game["static"].forest.height * a;
      while (p < this.game.width) {
        this.game.buf_ctx.drawImage(this.game["static"].forest, p, 0, w, h);
        p += w;
      }
      this.game["static"].forest_pos -= frames * this.game["static"].forest_speed;
      if (this.game["static"].forest_pos < -this.game["static"].forest.width) {
        this.game["static"].forest_pos += this.game["static"].forest.width;
      }
      a = this.game.height * 0.5 / this.game["static"].meadow.height;
      p = this.game["static"].meadow_pos * a;
      w = this.game["static"].meadow.width * a;
      h = this.game["static"].meadow.height * a;
      while (p < this.game.width) {
        this.game.buf_ctx.drawImage(this.game["static"].meadow, p, 0, w, h);
        p += w;
      }
      this.game["static"].meadow_pos -= frames * this.game["static"].meadow_speed;
      if (this.game["static"].meadow_pos < -this.game["static"].meadow.width) {
        this.game["static"].meadow_pos += this.game["static"].meadow.width;
      }
    },
    drawTrack: function drawTrack(frames) {
      var a, p, w, hG, hO, hS, y;
      y = this.game.height * 0.49;
      a = this.game.height * 0.5 / this.game["static"].bg.height;
      p = this.game["static"].grass_pos * a;
      w = this.game["static"].grass.width * a;
      hG = this.game["static"].grass.height * a;
      while (p < this.game.width) {
        this.game.buf_ctx.drawImage(this.game["static"].grass, p, y, w, hG);
        this.game.buf_ctx.drawImage(this.game["static"].grass, p, y + hG, w, hG);
        p += w;
      }
      this.game["static"].grass_pos -= frames * this.game["static"].grass_speed;
      if (this.game["static"].grass_pos < -this.game["static"].grass.width) {
        this.game["static"].grass_pos += this.game["static"].grass.width;
      }
      p = this.game["static"].sand_pos * a;
      w = this.game["static"].sand.width * a;
      hS = this.game["static"].sand.height * a;
      while (p < this.game.width) {
        for (var dy = y + hG * 2; dy < this.game.height; dy += hS) {
          this.game.buf_ctx.drawImage(this.game["static"].sand, p, dy, w, hS);
        }
        p += w;
      }
      this.game["static"].sand_pos -= frames * this.game["static"].sand_speed;
      if (this.game["static"].sand_pos < -this.game["static"].sand.width) {
        this.game["static"].sand_pos += this.game["static"].sand.width;
      }
      p = this.game["static"].fence_pos * a;
      w = this.game["static"].fence.width * a;
      hO = this.game["static"].fence.height * a;
      while (p < this.game.width) {
        if (!this.game.step_finish || !(p < this.game["static"].fence_post_pos * a && this.game["static"].fence_post_pos * a < p + this.game["static"].fence.width * a || p < this.game["static"].fence_post_pos * a + this.game["static"].fence_post.width * a && this.game["static"].fence_post_pos * a + this.game["static"].fence_post.width * a < p + this.game["static"].fence.width * a)) {
          this.game.buf_ctx.drawImage(this.game["static"].fence, p, y + hG * 2 - hO + 18 * a, w, hO);
        }
        p += w;
      }
      this.game["static"].fence_pos -= frames * this.game["static"].fence_speed;
      if (this.game["static"].fence_pos < -this.game["static"].fence.width) {
        this.game["static"].fence_pos += this.game["static"].fence.width;
      }
      if (this.game.step_finish) {
        this.game.buf_ctx.drawImage(this.game["static"].fence_post, this.game["static"].fence_post_pos * a, y + hG * 2 - this.game["static"].fence_post.height * a + 25 * a, this.game["static"].fence_post.width * a, this.game["static"].fence_post.height * a);
        this.game["static"].fence_post_pos -= frames * this.game["static"].fence_speed;
      }
    },
    animation: function animation() {
      var _this3 = this;
      if (!this.playing) return;
      var t = new Date().getTime();
      var frames = Math.floor((t - this.game.t_last) / this.game.t_frame);
      if (!(this.$vuetify.breakpoint.width > this.$vuetify.breakpoint.height)) {
        this.game.t_start += t - this.game.t_last;
        this.game.t_last = t;
        this.requestAnimationFrame(this.animation);
        return;
      }
      if (this.game.shot && this.game.shot + 300 < t) {
        this.soundLoop(packages_horse_racing_resources_audio_gallop_wav__WEBPACK_IMPORTED_MODULE_11__["default"]);
        this.game.shot = 0;
        this.requestAnimationFrame(this.animation);
        this.game.t_last = t;
        this.game.runners.forEach(function (runner) {
          return runner["continue"]();
        });
        if (this.game.step_finish === 4) this.game.endFunc();
        return;
      } else if (this.game.shot) {
        this.requestAnimationFrame(this.animation);
        return;
      }
      this.game.t_last += this.game.t_frame * frames;
      this.drawBg(frames);
      this.drawTrack(frames);
      var a = this.game.height * 0.5 / this.game["static"].bg.height;
      var aH = a * 4;
      var pos = this.game.height * 0.5 + 300 * a;
      var posStep = (this.game.height - 20 - pos) / (this.game.runners.length - 1);
      var isRepos = false;
      for (var i in this.game.runners) {
        this.game.buf_ctx.drawImage(this.game.runners[i].getFrame(), (this.game.width - 100 * a - this.game.runners[i].frmW * aH) * (this.game.runners[i].position * 0.01), pos - this.game.runners[i].frmH * aH + 40 * aH, this.game.runners[i].frmW * aH, this.game.runners[i].frmH * aH);
        pos += posStep;
        if (frames > 0 && !this.game.step_finish) {
          var d = this.config.animation.overtake_multiplier * (1 - this.game.runners[i].p / 100 - Math.random()) * 0.5;
          this.game.runners[i].dir += d;
          this.game.runners[i].p += this.game.runners[i].dir * frames;
          this.game.runners[i].position = this.game.runners[i].p * (50 - Math.abs(this.game.complete - 50)) * 2 / 100 + this.game.runners[i].target * (this.game.complete > this.game.runners[i].nature ? (this.game.complete - this.game.runners[i].nature) / (100 - this.game.runners[i].nature) : 0);
        } else if (this.game.step_finish && this.game.step_finish < 4 && !this.game.runners[i].finished && (this.game.width - 100 * a - this.game.runners[i].frmW * aH) * (this.game.runners[i].position * 0.01) + this.game.runners[i].frmW * aH - 40 * aH > this.game["static"].fence_post_pos * a + this.game["static"].fence_post.width * a * 0.5) {
          this.game.runners[i].finished = true;
          this.game.runners.forEach(function (runner) {
            return runner.pause();
          });
          this.game.shot = t;
          this.game.step_finish++;
          this.sound(packages_horse_racing_resources_audio_flash_wav__WEBPACK_IMPORTED_MODULE_10__["default"]);
          this.soundStop(packages_horse_racing_resources_audio_gallop_wav__WEBPACK_IMPORTED_MODULE_11__["default"]);
        }
        if (t - this.game.t_repos > 250) {
          var rpos = this.game.runners.reduce(function (acc, runner) {
            return acc + (runner.position > _this3.game.runners[i].position ? 1 : 0);
          }, 0);
          if (this.game.positions[i].pos !== rpos) {
            this.game.positions[i].pos = rpos;
            isRepos = true;
          }
        }
      }
      if (isRepos) this.game.t_repos = t;
      if (frames > 0) {
        this.game.complete = (t - this.game.t_start) / this.game.length * 100;
        if (this.game.complete > 100) {
          this.game.complete = 100;
          if (this.game.step_finish === 0) {
            this.game.step_finish = 1;
            this.game["static"].fence_post_pos = this.game.width / a + this.game["static"].fence_post.width / a;
          }
        }
        if (Math.round(this.game.complete) !== this.progress) this.progress = Math.round(this.game.complete);
      }
      if (this.runners_sorted.reduce(function (acc, item) {
        return acc + item.num;
      }, '') !== Object.values(this.game.positions).sort(function (a, b) {
        return a.pos === b.pos ? a.num > b.num ? -1 : 1 : a.pos > b.pos ? 1 : -1;
      }).reduce(function (acc, item) {
        return acc + item.num;
      }, '')) {
        this.runners_sorted = Object.values(this.game.positions).sort(function (a, b) {
          return a.pos === b.pos ? a.num > b.num ? -1 : 1 : a.pos > b.pos ? 1 : -1;
        });
        // this.sound(clickSound)
      }

      this.game.ctx.drawImage(this.game.buf, 0, 0);
      if (this.game.step_finish && this.game["static"].fence_post_pos + this.game["static"].fence_post.width * a < 0) {
        this.game.paused = true;
        this.soundStop(packages_horse_racing_resources_audio_gallop_wav__WEBPACK_IMPORTED_MODULE_11__["default"]);
      } else {
        this.requestAnimationFrame(this.animation);
      }
    },
    gameStop: function gameStop() {
      this.soundStop(packages_horse_racing_resources_audio_gallop_wav__WEBPACK_IMPORTED_MODULE_11__["default"]);
      this.playing = false;
    },
    gameAnimation: function gameAnimation() {
      var _this4 = this;
      return new Promise(function (resolve, reject) {
        _this4.playing = true;
        _this4.$nextTick(function () {
          _this4.resize();
          _this4.game.ctx = _this4.$refs.animation.getContext('2d');
          _this4.game.length = _this4.config.animation.length * 1000;
          _this4.game.positions = [];
          var i;
          for (i = 0; i < _this4.game.runners.length; i++) {
            _this4.game.positions.push({
              name: _this4.game.runners[i].name,
              num: _this4.game.runners[i].num,
              pos: i,
              colors: _this4.game.runners[i].colors
            });
            _this4.game.runners[i].finished = false;
            _this4.game.runners[i].position = 0;
            _this4.game.runners[i].p = 50;
            _this4.game.runners[i].nature = Math.random() * 50 + 25;
            // this.game.runners[i].position_start = 15 + 70 * Math.random()
            // this.game.runners[i].dir = 0.015 // 0.05 + Math.random() * 0.05
            _this4.game.runners[i].dir = 0; // 0.05 + Math.random() * 0.05
          }

          var last = 100 - 40 * Math.random();
          for (i = 0; i < _this4.game.runners.length; i++) {
            var runner = _this4.positions[i];
            // var runner = this.positions.indexOf(i)
            // if (runner !== -1) {
            if (i === 0) {
              _this4.game.runners[runner].target = last;
            } else {
              var max = last;
              var min = (_this4.game.runners.length - 1 - i) * (2 + 3 * Math.random());
              min += (max - min - 1) * Math.random();
              last -= Math.random() * (max - min);
              _this4.game.runners[runner].target = last;
            }
            last--;
            // }
          }

          _this4.runners_sorted = Object.values(_this4.game.positions).sort(function (a, b) {
            return a.pos === b.pos ? a.num > b.num ? -1 : 1 : a.pos > b.pos ? 1 : -1;
          });
          _this4.game.step_finish = 0;
          _this4.game.complete = 0;
          _this4.progress = 0;
          _this4.game.t_start = new Date().getTime();
          _this4.game.paused = false;
          _this4.game.t_last = new Date().getTime();
          _this4.game.endFunc = resolve;
          _this4.soundLoop(packages_horse_racing_resources_audio_gallop_wav__WEBPACK_IMPORTED_MODULE_11__["default"]);
          _this4.requestAnimationFrame(_this4.animation);
        });
      });
    },
    resize: function resize() {
      if (this.$refs.animation) {
        this.game.width = this.$refs.animation.clientWidth;
        this.game.height = this.$refs.animation.clientHeight;
        this.$refs.animation.width = this.game.width;
        this.$refs.animation.height = this.game.height;
        this.game.buf.width = this.game.width;
        this.game.buf.height = this.game.height;
      }
    },
    reset: function reset() {
      var _this5 = this;
      this.betTypes.forEach(function (title, type) {
        _this5.inputBets[type].forEach(function (bet, index) {
          _this5.minimizeBet(type, index);
        });
      });
    },
    minimizeBet: function minimizeBet(type, index) {
      this.inputBets[type].splice(index, 1, this.minBet);
    },
    maximizeBet: function maximizeBet(type, index) {
      this.inputBets[type].splice(index, 1, this.maxBet);
    },
    decrementBet: function decrementBet(type, index) {
      var bet = this.inputBets[type][index] - this.betStep;
      this.inputBets[type].splice(index, 1, Math.max(this.minBet, bet));
    },
    incrementBet: function incrementBet(type, index) {
      var bet = this.inputBets[type][index] + this.betStep;
      this.inputBets[type].splice(index, 1, Math.min(this.maxBet, bet));
    },
    play: function play() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var endpoint, requestParams, _yield$axios$post, game;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this6.sound(_audio_common_click_wav__WEBPACK_IMPORTED_MODULE_7__["default"]);
              _this6.loading = true;
              _this6.message = null;
              _this6.positions = [];

              // update user balance
              _this6.updateUserAccountBalance(_this6.account.balance - _this6.totalBetAmount);

              // API request params
              endpoint = _this6.getRoute('play');
              requestParams = {
                hash: _this6.provablyFairGame.hash,
                bets: _this6.bets
              }; // execute the action
              _context2.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().post(endpoint, requestParams);
            case 9:
              _yield$axios$post = _context2.sent;
              game = _yield$axios$post.data;
              _this6.loading = false;
              _this6.setProvablyFairGame({
                key: _this6.gamePackageId,
                game: game.pf_game
              });
              _this6.positions = game.gameable.positions.map(function (item) {
                return parseInt(item);
              });
              _context2.next = 16;
              return _this6.gameAnimation();
            case 16:
              // this.playing = false

              // update balance
              _this6.updateUserAccountBalance(game.account.balance);

              // play sound
              if (game.win > 0) {
                _this6.sound(_this6.config.sounds.win || packages_horse_racing_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_8__["default"]);
                _this6.message = _this6.$t('You won') + ' ' + game.win;
              } else {
                _this6.sound(_this6.config.sounds.lose || packages_horse_racing_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_9__["default"]);
                _this6.message = _this6.$t('You lost');
              }
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixins/Game.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixins/Game.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _plugins_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/plugins/route */ "./resources/js/plugins/route.js");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    gamePackageId: function gamePackageId() {
      return this.$route.params.game;
    },
    gameSlug: function gameSlug() {
      return this.$route.params.slug;
    },
    config: function config() {
      var _this = this;
      return this.gameSlug ? (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)(this.gamePackageId).variations.find(function (o) {
        return o.slug === _this.gameSlug;
      }) : (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)(this.gamePackageId);
    },
    provablyFairGame: function provablyFairGame() {
      return this.$store.getters['provably-fair/get'](this.gamePackageId) || {};
    }
  },
  methods: {
    getRoute: function getRoute(action) {
      return (0,_plugins_route__WEBPACK_IMPORTED_MODULE_1__.route)("games.".concat(this.gamePackageId, ".").concat(action));
    },
    loadCardDeck: function loadCardDeck() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.preloadImages)(window.assets.deck);
    }
  }
});

/***/ }),

/***/ "./packages/horse-racing/resources/js/pages/helpers/runner.js":
/*!********************************************************************!*\
  !*** ./packages/horse-racing/resources/js/pages/helpers/runner.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CRunner)
/* harmony export */ });
/* harmony import */ var image_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! image-promise */ "./node_modules/image-promise/index.js");
/* harmony import */ var colornames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! colornames */ "./node_modules/colornames/index.js");
/* harmony import */ var colornames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(colornames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clone_deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clone-deep */ "./node_modules/clone-deep/index.js");
/* harmony import */ var clone_deep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clone_deep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var packages_horse_racing_resources_images_num_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! packages/horse-racing/resources/images/num_1.png */ "./packages/horse-racing/resources/images/num_1.png");
/* harmony import */ var packages_horse_racing_resources_images_num_1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_num_1_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var packages_horse_racing_resources_images_num_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! packages/horse-racing/resources/images/num_2.png */ "./packages/horse-racing/resources/images/num_2.png");
/* harmony import */ var packages_horse_racing_resources_images_num_2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_num_2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var packages_horse_racing_resources_images_num_3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! packages/horse-racing/resources/images/num_3.png */ "./packages/horse-racing/resources/images/num_3.png");
/* harmony import */ var packages_horse_racing_resources_images_num_3_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_num_3_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var packages_horse_racing_resources_images_num_4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! packages/horse-racing/resources/images/num_4.png */ "./packages/horse-racing/resources/images/num_4.png");
/* harmony import */ var packages_horse_racing_resources_images_num_4_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_num_4_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var packages_horse_racing_resources_images_num_5_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! packages/horse-racing/resources/images/num_5.png */ "./packages/horse-racing/resources/images/num_5.png");
/* harmony import */ var packages_horse_racing_resources_images_num_5_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_num_5_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var packages_horse_racing_resources_images_num_6_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! packages/horse-racing/resources/images/num_6.png */ "./packages/horse-racing/resources/images/num_6.png");
/* harmony import */ var packages_horse_racing_resources_images_num_6_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_num_6_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var packages_horse_racing_resources_images_num_7_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! packages/horse-racing/resources/images/num_7.png */ "./packages/horse-racing/resources/images/num_7.png");
/* harmony import */ var packages_horse_racing_resources_images_num_7_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_num_7_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var packages_horse_racing_resources_images_num_8_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! packages/horse-racing/resources/images/num_8.png */ "./packages/horse-racing/resources/images/num_8.png");
/* harmony import */ var packages_horse_racing_resources_images_num_8_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_num_8_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var packages_horse_racing_resources_images_num_9_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! packages/horse-racing/resources/images/num_9.png */ "./packages/horse-racing/resources/images/num_9.png");
/* harmony import */ var packages_horse_racing_resources_images_num_9_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_num_9_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var packages_horse_racing_resources_images_num_10_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! packages/horse-racing/resources/images/num_10.png */ "./packages/horse-racing/resources/images/num_10.png");
/* harmony import */ var packages_horse_racing_resources_images_num_10_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_num_10_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var packages_horse_racing_resources_images_num_11_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! packages/horse-racing/resources/images/num_11.png */ "./packages/horse-racing/resources/images/num_11.png");
/* harmony import */ var packages_horse_racing_resources_images_num_11_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_num_11_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var packages_horse_racing_resources_images_num_12_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! packages/horse-racing/resources/images/num_12.png */ "./packages/horse-racing/resources/images/num_12.png");
/* harmony import */ var packages_horse_racing_resources_images_num_12_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_num_12_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var packages_horse_racing_resources_images_shadow_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! packages/horse-racing/resources/images/shadow.png */ "./packages/horse-racing/resources/images/shadow.png");
/* harmony import */ var packages_horse_racing_resources_images_shadow_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_shadow_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var packages_horse_racing_resources_images_any_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! packages/horse-racing/resources/images/any.png */ "./packages/horse-racing/resources/images/any.png");
/* harmony import */ var packages_horse_racing_resources_images_any_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_any_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var packages_horse_racing_resources_images_body_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! packages/horse-racing/resources/images/body.png */ "./packages/horse-racing/resources/images/body.png");
/* harmony import */ var packages_horse_racing_resources_images_body_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_body_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var packages_horse_racing_resources_images_face_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! packages/horse-racing/resources/images/face.png */ "./packages/horse-racing/resources/images/face.png");
/* harmony import */ var packages_horse_racing_resources_images_face_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_face_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var packages_horse_racing_resources_images_head_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! packages/horse-racing/resources/images/head.png */ "./packages/horse-racing/resources/images/head.png");
/* harmony import */ var packages_horse_racing_resources_images_head_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_head_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var packages_horse_racing_resources_images_horse_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! packages/horse-racing/resources/images/horse.png */ "./packages/horse-racing/resources/images/horse.png");
/* harmony import */ var packages_horse_racing_resources_images_horse_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_horse_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var packages_horse_racing_resources_images_saddle_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! packages/horse-racing/resources/images/saddle.png */ "./packages/horse-racing/resources/images/saddle.png");
/* harmony import */ var packages_horse_racing_resources_images_saddle_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_saddle_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var packages_horse_racing_resources_images_tail_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! packages/horse-racing/resources/images/tail.png */ "./packages/horse-racing/resources/images/tail.png");
/* harmony import */ var packages_horse_racing_resources_images_tail_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(packages_horse_racing_resources_images_tail_png__WEBPACK_IMPORTED_MODULE_22__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }























var imgTplNum = [(packages_horse_racing_resources_images_num_1_png__WEBPACK_IMPORTED_MODULE_3___default()), (packages_horse_racing_resources_images_num_2_png__WEBPACK_IMPORTED_MODULE_4___default()), (packages_horse_racing_resources_images_num_3_png__WEBPACK_IMPORTED_MODULE_5___default()), (packages_horse_racing_resources_images_num_4_png__WEBPACK_IMPORTED_MODULE_6___default()), (packages_horse_racing_resources_images_num_5_png__WEBPACK_IMPORTED_MODULE_7___default()), (packages_horse_racing_resources_images_num_6_png__WEBPACK_IMPORTED_MODULE_8___default()), (packages_horse_racing_resources_images_num_7_png__WEBPACK_IMPORTED_MODULE_9___default()), (packages_horse_racing_resources_images_num_8_png__WEBPACK_IMPORTED_MODULE_10___default()), (packages_horse_racing_resources_images_num_9_png__WEBPACK_IMPORTED_MODULE_11___default()), (packages_horse_racing_resources_images_num_10_png__WEBPACK_IMPORTED_MODULE_12___default()), (packages_horse_racing_resources_images_num_11_png__WEBPACK_IMPORTED_MODULE_13___default()), (packages_horse_racing_resources_images_num_12_png__WEBPACK_IMPORTED_MODULE_14___default())];
function colorNormilize(color) {
  if (color[0] !== '#') color = colornames__WEBPACK_IMPORTED_MODULE_1___default()(color);
  return color;
}
function HexToRGB(Hex) {
  var Long = parseInt(Hex.replace(/^#/, ''), 16);
  return {
    R: Long >>> 16 & 0xff,
    G: Long >>> 8 & 0xff,
    B: Long & 0xff
  };
}
function getPixels(img) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d', {
    alpha: true
  });
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, img.width, img.height);
  return ctx.getImageData(0, 0, img.width, img.height);
}
function changeColor(img, color) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d', {
    alpha: true
  });
  var newColor = HexToRGB(color);
  var pixels = getPixels(img);
  for (var I = 0, L = pixels.data.length; I < L; I += 4) {
    if (pixels.data[I + 3] > 0) {
      pixels.data[I + 0] = newColor.R * (pixels.data[I + 0] / 255) + (newColor.R < 100 && pixels.data[I + 0] > 180 ? (pixels.data[I + 0] - 180) / 75 * 50 : 0);
      if (pixels.data[I + 0] > 255) pixels.data[I + 0] = 255;
      pixels.data[I + 1] = newColor.G * (pixels.data[I + 1] / 255) + (newColor.G < 100 && pixels.data[I + 1] > 180 ? (pixels.data[I + 1] - 180) / 75 * 50 : 0);
      if (pixels.data[I + 1] > 255) pixels.data[I + 1] = 255;
      pixels.data[I + 2] = newColor.B * (pixels.data[I + 2] / 255) + (newColor.B < 100 && pixels.data[I + 2] > 180 ? (pixels.data[I + 2] - 180) / 75 * 50 : 0);
      if (pixels.data[I + 2] > 255) pixels.data[I + 2] = 255;
    }
  }
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.putImageData(pixels, 0, 0);
  return canvas;
}
var CRunner = /*#__PURE__*/function () {
  function CRunner(colors, name, num) {
    _classCallCheck(this, CRunner);
    _defineProperty(this, "name", '');
    _defineProperty(this, "colors", {});
    _defineProperty(this, "frames", []);
    _defineProperty(this, "num", 1);
    _defineProperty(this, "framesCnt", 12);
    _defineProperty(this, "frmW", 0);
    _defineProperty(this, "frmH", 0);
    _defineProperty(this, "frame", 0);
    _defineProperty(this, "paused", true);
    _defineProperty(this, "position", 0);
    _defineProperty(this, "target", 0);
    _defineProperty(this, "dir", 0);
    _defineProperty(this, "preview", '');
    _defineProperty(this, "finished", false);
    this.colors = clone_deep__WEBPACK_IMPORTED_MODULE_2___default()(colors);
    this.num = num;
    this.name = name;
    this.t_last = 0;
    this.t_frame = 25;
    this.position_start = 0;
  }
  _createClass(CRunner, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var shadow, horse, tail, saddle, num, body, face, head, any, c, idx, ctx;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_shadow_png__WEBPACK_IMPORTED_MODULE_15___default()));
            case 2:
              shadow = _context.sent;
              _context.t0 = changeColor;
              _context.next = 6;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_horse_png__WEBPACK_IMPORTED_MODULE_20___default()));
            case 6:
              _context.t1 = _context.sent;
              _context.t2 = this.colors.horse.body ? colorNormilize(this.colors.horse.body) : '#000000';
              horse = (0, _context.t0)(_context.t1, _context.t2);
              _context.t3 = changeColor;
              _context.next = 12;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_tail_png__WEBPACK_IMPORTED_MODULE_22___default()));
            case 12:
              _context.t4 = _context.sent;
              _context.t5 = this.colors.horse.tail ? colorNormilize(this.colors.horse.tail) : '#333333';
              tail = (0, _context.t3)(_context.t4, _context.t5);
              _context.t6 = changeColor;
              _context.next = 18;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_saddle_png__WEBPACK_IMPORTED_MODULE_21___default()));
            case 18:
              _context.t7 = _context.sent;
              _context.t8 = this.colors.horse.pad && this.colors.horse.pad.background ? colorNormilize(this.colors.horse.pad.background) : '#aaaaaa';
              saddle = (0, _context.t6)(_context.t7, _context.t8);
              _context.t9 = changeColor;
              _context.next = 24;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])(this.num > 0 && this.num < 13 ? imgTplNum[this.num - 1] : (packages_horse_racing_resources_images_num_1_png__WEBPACK_IMPORTED_MODULE_3___default()));
            case 24:
              _context.t10 = _context.sent;
              _context.t11 = this.colors.horse.pad && this.colors.horse.pad.text ? colorNormilize(this.colors.horse.pad.text) : '#333333';
              num = (0, _context.t9)(_context.t10, _context.t11);
              _context.t12 = changeColor;
              _context.next = 30;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_body_png__WEBPACK_IMPORTED_MODULE_17___default()));
            case 30:
              _context.t13 = _context.sent;
              _context.t14 = this.colors.jockey.shirt ? colorNormilize(this.colors.jockey.shirt) : '#ffffff';
              body = (0, _context.t12)(_context.t13, _context.t14);
              _context.t15 = changeColor;
              _context.next = 36;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_face_png__WEBPACK_IMPORTED_MODULE_18___default()));
            case 36:
              _context.t16 = _context.sent;
              _context.t17 = this.colors.jockey.face ? colorNormilize(this.colors.jockey.face) : ['#FFDCB1', '#E5C298', '#E4B98E', '#710200', '#E1ADA4'][Math.round(Math.random() * 4)];
              face = (0, _context.t15)(_context.t16, _context.t17);
              _context.t18 = changeColor;
              _context.next = 42;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_head_png__WEBPACK_IMPORTED_MODULE_19___default()));
            case 42:
              _context.t19 = _context.sent;
              _context.t20 = this.colors.jockey.hat ? colorNormilize(this.colors.jockey.hat) : '#ffffff';
              head = (0, _context.t18)(_context.t19, _context.t20);
              _context.next = 47;
              return (0,image_promise__WEBPACK_IMPORTED_MODULE_0__["default"])((packages_horse_racing_resources_images_any_png__WEBPACK_IMPORTED_MODULE_16___default()));
            case 47:
              any = _context.sent;
              this.frmW = shadow.width / this.framesCnt;
              this.frmH = shadow.height;
              this.frames = [];
              while (this.frames.length < this.framesCnt) {
                c = document.createElement('canvas');
                c.height = this.frmH;
                c.width = this.frmW;
                this.frames.push(c);
              }
              for (idx in this.frames) {
                ctx = this.frames[idx].getContext('2d', {
                  alpha: true
                });
                ctx.drawImage(shadow, this.frmW * idx, 0, this.frmW, this.frmH, 0, 0, this.frmW, this.frmH);
                ctx.drawImage(horse, this.frmW * idx, 0, this.frmW, this.frmH, 0, 0, this.frmW, this.frmH);
                ctx.drawImage(tail, this.frmW * idx, 0, this.frmW, this.frmH, 0, 0, this.frmW, this.frmH);
                ctx.drawImage(saddle, this.frmW * idx, 0, this.frmW, this.frmH, 0, 0, this.frmW, this.frmH);
                ctx.drawImage(num, this.frmW * idx, 0, this.frmW, this.frmH, 0, 0, this.frmW, this.frmH);
                ctx.drawImage(body, this.frmW * idx, 0, this.frmW, this.frmH, 0, 0, this.frmW, this.frmH);
                ctx.drawImage(face, this.frmW * idx, 0, this.frmW, this.frmH, 0, 0, this.frmW, this.frmH);
                ctx.drawImage(head, this.frmW * idx, 0, this.frmW, this.frmH, 0, 0, this.frmW, this.frmH);
                ctx.drawImage(any, this.frmW * idx, 0, this.frmW, this.frmH, 0, 0, this.frmW, this.frmH);
              }
              this.paused = false;
              this.t_last = new Date().getTime();
              this.frame = 0;
              this.preview = this.frames[1].toDataURL('image/png');
            case 57:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "getFrame",
    value: function getFrame(i) {
      if (typeof i !== 'undefined') {
        if (i < 0) return this.frames[0];
        if (i >= this.framesCnt) return this.frames[this.framesCnt - 1];
        return this.frames[i];
      } else if (this.paused) {
        return this.frames[this.frame];
      } else {
        var t = new Date().getTime();
        if (t > this.t_last + this.t_frame) {
          var cnt = Math.floor((t - this.t_last) / this.t_frame);
          this.t_last = t;
          this.frame += cnt;
          while (this.frame >= this.framesCnt) this.frame -= this.framesCnt;
        }
        return this.frames[this.frame];
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
    }
  }, {
    key: "continue",
    value: function _continue() {
      if (this.paused) {
        this.paused = false;
        this.t_last = new Date().getTime();
      }
    }
  }]);
  return CRunner;
}();


/***/ }),

/***/ "./packages/horse-racing/resources/images/any.png":
/*!********************************************************!*\
  !*** ./packages/horse-racing/resources/images/any.png ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/any.png?8ff6ad712bded36b043a874ccb41d4fb";

/***/ }),

/***/ "./packages/horse-racing/resources/images/background.png":
/*!***************************************************************!*\
  !*** ./packages/horse-racing/resources/images/background.png ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/background.png?3eda53f12292d1d83e44a502f3e7764d";

/***/ }),

/***/ "./packages/horse-racing/resources/images/body.png":
/*!*********************************************************!*\
  !*** ./packages/horse-racing/resources/images/body.png ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/body.png?fb490f9b189ea5790870f1555240fb2d";

/***/ }),

/***/ "./packages/horse-racing/resources/images/face.png":
/*!*********************************************************!*\
  !*** ./packages/horse-racing/resources/images/face.png ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/face.png?2d6522ae00d9b56d0e3cd5d9154c6181";

/***/ }),

/***/ "./packages/horse-racing/resources/images/fence.png":
/*!**********************************************************!*\
  !*** ./packages/horse-racing/resources/images/fence.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/fence.png?29e9dfc078c172966296d7e0bf1c68f0";

/***/ }),

/***/ "./packages/horse-racing/resources/images/fence_post.png":
/*!***************************************************************!*\
  !*** ./packages/horse-racing/resources/images/fence_post.png ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/fence_post.png?90805e260c2a6d5ab8392de6895a7bb4";

/***/ }),

/***/ "./packages/horse-racing/resources/images/forest.png":
/*!***********************************************************!*\
  !*** ./packages/horse-racing/resources/images/forest.png ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/forest.png?8a602563712ec58a13347ac831477cb2";

/***/ }),

/***/ "./packages/horse-racing/resources/images/grass.jpg":
/*!**********************************************************!*\
  !*** ./packages/horse-racing/resources/images/grass.jpg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/grass.jpg?de94cd9e3917643b88071a86862e29fa";

/***/ }),

/***/ "./packages/horse-racing/resources/images/head.png":
/*!*********************************************************!*\
  !*** ./packages/horse-racing/resources/images/head.png ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/head.png?3f54aeb4081ac7da98b34dc6ed7b4390";

/***/ }),

/***/ "./packages/horse-racing/resources/images/horse.png":
/*!**********************************************************!*\
  !*** ./packages/horse-racing/resources/images/horse.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/horse.png?d5a6db45d838eb6516fc96830c089884";

/***/ }),

/***/ "./packages/horse-racing/resources/images/meadow.png":
/*!***********************************************************!*\
  !*** ./packages/horse-racing/resources/images/meadow.png ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/meadow.png?4946ab1bc122894545715a7607c2077d";

/***/ }),

/***/ "./packages/horse-racing/resources/images/num_1.png":
/*!**********************************************************!*\
  !*** ./packages/horse-racing/resources/images/num_1.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/num_1.png?f5cab810df6f1df9cd55a0450d4f1609";

/***/ }),

/***/ "./packages/horse-racing/resources/images/num_10.png":
/*!***********************************************************!*\
  !*** ./packages/horse-racing/resources/images/num_10.png ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/num_10.png?d2549367a926585d2a939de97ff59393";

/***/ }),

/***/ "./packages/horse-racing/resources/images/num_11.png":
/*!***********************************************************!*\
  !*** ./packages/horse-racing/resources/images/num_11.png ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/num_11.png?315b823889620b37568677974f292bcf";

/***/ }),

/***/ "./packages/horse-racing/resources/images/num_12.png":
/*!***********************************************************!*\
  !*** ./packages/horse-racing/resources/images/num_12.png ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/num_12.png?b3b08e65a471394f614a0f96a3581e41";

/***/ }),

/***/ "./packages/horse-racing/resources/images/num_2.png":
/*!**********************************************************!*\
  !*** ./packages/horse-racing/resources/images/num_2.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/num_2.png?72aba1ba66f565feec6f3b310c85f24b";

/***/ }),

/***/ "./packages/horse-racing/resources/images/num_3.png":
/*!**********************************************************!*\
  !*** ./packages/horse-racing/resources/images/num_3.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/num_3.png?a1bcbdd7906b2a422c11b8c8cd2cc418";

/***/ }),

/***/ "./packages/horse-racing/resources/images/num_4.png":
/*!**********************************************************!*\
  !*** ./packages/horse-racing/resources/images/num_4.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/num_4.png?b569f981c8ecf8204918cbf869584f92";

/***/ }),

/***/ "./packages/horse-racing/resources/images/num_5.png":
/*!**********************************************************!*\
  !*** ./packages/horse-racing/resources/images/num_5.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/num_5.png?9f6fb518f8fd899855e33cb265be20c8";

/***/ }),

/***/ "./packages/horse-racing/resources/images/num_6.png":
/*!**********************************************************!*\
  !*** ./packages/horse-racing/resources/images/num_6.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/num_6.png?32911be5911ef36899f552f1f8e7c992";

/***/ }),

/***/ "./packages/horse-racing/resources/images/num_7.png":
/*!**********************************************************!*\
  !*** ./packages/horse-racing/resources/images/num_7.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/num_7.png?91591370699e4e24a2cfa65ffa5fd179";

/***/ }),

/***/ "./packages/horse-racing/resources/images/num_8.png":
/*!**********************************************************!*\
  !*** ./packages/horse-racing/resources/images/num_8.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/num_8.png?834af04a5c369c8511645848f6538769";

/***/ }),

/***/ "./packages/horse-racing/resources/images/num_9.png":
/*!**********************************************************!*\
  !*** ./packages/horse-racing/resources/images/num_9.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/num_9.png?435e68e99a974bdba7f28c66981d3094";

/***/ }),

/***/ "./packages/horse-racing/resources/images/saddle.png":
/*!***********************************************************!*\
  !*** ./packages/horse-racing/resources/images/saddle.png ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/saddle.png?32a0cdf77a80cd0054fec70afb4df789";

/***/ }),

/***/ "./packages/horse-racing/resources/images/sand.jpg":
/*!*********************************************************!*\
  !*** ./packages/horse-racing/resources/images/sand.jpg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/sand.jpg?ed12aaf7f23b8c5bd1a892ec2ab56cd8";

/***/ }),

/***/ "./packages/horse-racing/resources/images/shadow.png":
/*!***********************************************************!*\
  !*** ./packages/horse-racing/resources/images/shadow.png ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/shadow.png?8202a6efacf5d904c85067ee4c7fb1b7";

/***/ }),

/***/ "./packages/horse-racing/resources/images/tail.png":
/*!*********************************************************!*\
  !*** ./packages/horse-racing/resources/images/tail.png ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/tail.png?a30f5a7cf9fa9df7a5c22c288a56359d";

/***/ }),

/***/ "./packages/horse-racing/resources/audio/flash.wav":
/*!*********************************************************!*\
  !*** ./packages/horse-racing/resources/audio/flash.wav ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/horse-racing/flash.wav");

/***/ }),

/***/ "./packages/horse-racing/resources/audio/gallop.wav":
/*!**********************************************************!*\
  !*** ./packages/horse-racing/resources/audio/gallop.wav ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/horse-racing/gallop.wav");

/***/ }),

/***/ "./packages/horse-racing/resources/audio/lose.wav":
/*!********************************************************!*\
  !*** ./packages/horse-racing/resources/audio/lose.wav ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/horse-racing/lose.wav");

/***/ }),

/***/ "./packages/horse-racing/resources/audio/win.wav":
/*!*******************************************************!*\
  !*** ./packages/horse-racing/resources/audio/win.wav ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/horse-racing/win.wav");

/***/ }),

/***/ "./resources/audio/common/click.wav":
/*!******************************************!*\
  !*** ./resources/audio/common/click.wav ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/common/click.wav");

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/game.vue?vue&type=style&index=0&id=211789ec&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/game.vue?vue&type=style&index=0&id=211789ec&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".payout-chip[data-v-211789ec] {\n  width: 60px;\n}\n@keyframes shotani-211789ec {\n0% {\n    filter: grayscale(0) brightness(1);\n}\n25% {\n    filter: grayscale(1) brightness(1.5);\n}\n50% {\n    filter: grayscale(0) brightness(1);\n}\n75% {\n    filter: grayscale(1) brightness(1.5);\n}\n100% {\n    filter: grayscale(0) brightness(1);\n}\n}\n@keyframes pauseani-211789ec {\n0% {\n    filter: grayscale(0) brightness(1);\n}\n100% {\n    filter: grayscale(1) brightness(1.5);\n}\n}\n.animation-container[data-v-211789ec] {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 112px);\n}\n.animation-container .progress[data-v-211789ec] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.animation-container .runners[data-v-211789ec] {\n  top: 20px;\n  left: 20px;\n  background: rgba(0, 0, 0, 0.3);\n  position: absolute;\n}\n.animation-container .animation[data-v-211789ec] {\n  width: 100%;\n  height: 100%;\n}\n.animation-container .animation.shot[data-v-211789ec] {\n  animation: shotani-211789ec 0.3s infinite ease-in-out;\n}\n.animation-container .animation.paused[data-v-211789ec] {\n  filter: grayscale(1) brightness(1.5);\n  animation: pauseani-211789ec 0.1s;\n}\n.animation-container .results[data-v-211789ec] {\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.flip-list-move[data-v-211789ec] {\n  transition: transform 0.1s;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loader[data-v-29e85514] {\n  width: 150px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/game.vue?vue&type=style&index=0&id=211789ec&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/game.vue?vue&type=style&index=0&id=211789ec&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_211789ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=211789ec&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/game.vue?vue&type=style&index=0&id=211789ec&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_211789ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_211789ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_style_index_0_id_29e85514_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_style_index_0_id_29e85514_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_style_index_0_id_29e85514_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./packages/horse-racing/resources/js/pages/game.vue":
/*!***********************************************************!*\
  !*** ./packages/horse-racing/resources/js/pages/game.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_vue_vue_type_template_id_211789ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.vue?vue&type=template&id=211789ec&scoped=true& */ "./packages/horse-racing/resources/js/pages/game.vue?vue&type=template&id=211789ec&scoped=true&");
/* harmony import */ var _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.vue?vue&type=script&lang=js& */ "./packages/horse-racing/resources/js/pages/game.vue?vue&type=script&lang=js&");
/* harmony import */ var _game_vue_vue_type_style_index_0_id_211789ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.vue?vue&type=style&index=0&id=211789ec&lang=scss&scoped=true& */ "./packages/horse-racing/resources/js/pages/game.vue?vue&type=style&index=0&id=211789ec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _game_vue_vue_type_template_id_211789ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _game_vue_vue_type_template_id_211789ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "211789ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/horse-racing/resources/js/pages/game.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/horse-racing/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./packages/horse-racing/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/mixins/Game.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/mixins/Game.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixins/Game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/horse-racing/resources/js/pages/game.vue?vue&type=style&index=0&id=211789ec&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./packages/horse-racing/resources/js/pages/game.vue?vue&type=style&index=0&id=211789ec&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_211789ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=211789ec&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/game.vue?vue&type=style&index=0&id=211789ec&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_style_index_0_id_29e85514_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/game.vue?vue&type=template&id=211789ec&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/game.vue?vue&type=template&id=211789ec&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/VToolbar.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/VTooltip.js");


















var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    "class": {
      "d-flex justify-center align-center": !_vm.ready,
      "fill-height": !_vm.ready || !(_vm.$vuetify.breakpoint.width > _vm.$vuetify.breakpoint.height)
    }
  }, [_vm.ready ? _c("div", {
    staticClass: "d-flex justify-center align-center",
    "class": {
      "fill-height": !(_vm.$vuetify.breakpoint.width > _vm.$vuetify.breakpoint.height)
    }
  }, [_vm.playing && _vm.$vuetify.breakpoint.width > _vm.$vuetify.breakpoint.height ? _c("div", {
    staticClass: "animation-container"
  }, [_c("canvas", {
    ref: "animation",
    staticClass: "animation",
    "class": {
      shot: _vm.game.shot !== 0,
      paused: _vm.game.paused
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    staticClass: "runners px-4 py-2",
    attrs: {
      flat: ""
    }
  }, [_c("transition-group", {
    staticClass: "pl-0",
    attrs: {
      name: "flip-list",
      tag: "ul"
    }
  }, _vm._l(_vm.runners_sorted, function (runner) {
    return _c("div", {
      key: runner.num,
      staticClass: "body-1 py-1"
    }, [_c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_1__["default"], {
      staticClass: "mr-4",
      attrs: {
        color: runner.colors.horse.pad.background,
        "text-color": runner.colors.horse.pad.text,
        label: "",
        "x-small": ""
      }
    }, [_vm._v("\n              " + _vm._s(runner.num) + "\n            ")]), _vm._v("\n            " + _vm._s(runner.name) + "\n          ")], 1);
  }), 0)], 1), _vm._v(" "), _c(vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "progress",
    model: {
      value: _vm.progress,
      callback: function callback($$v) {
        _vm.progress = $$v;
      },
      expression: "progress"
    }
  }), _vm._v(" "), _c("transition", {
    attrs: {
      name: "scale"
    }
  }, [_vm.game.step_finish === 4 && _vm.game.shot === 0 ? _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    staticClass: "results px-16 pt-4 pb-4"
  }, [_c("div", {
    staticClass: "align-center"
  }, [_c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_3__["default"], {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.message,
      expression: "message"
    }],
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      color: "primary"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.message) + "\n            ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attrs: {
      color: "primary",
      loading: _vm.loading,
      disabled: _vm.loading || _vm.totalBetAmount > _vm.account.balance
    },
    on: {
      click: _vm.play
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Play again")) + "\n            ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attrs: {
      color: "primary",
      outlined: "",
      disabled: _vm.loading
    },
    on: {
      click: _vm.gameStop
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Change bet")) + "\n            ")])], 1)]) : _vm._e()], 1)], 1) : _vm.$vuetify.breakpoint.width > _vm.$vuetify.breakpoint.height ? _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attrs: {
      fluid: ""
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      align: "center",
      justify: "center"
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      cols: "12",
      md: "8"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_8__["default"], [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_9__.VToolbarTitle, [_vm._v("\n                " + _vm._s(_vm.$t("Place your bet")) + "\n              ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_10__.VCardText, [_c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
    model: {
      value: _vm.formIsValid,
      callback: function callback($$v) {
        _vm.formIsValid = $$v;
      },
      expression: "formIsValid"
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"], _vm._l(_vm.game.runners, function (runner, index) {
    return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: index,
      attrs: {
        sm: "12",
        md: "6"
      }
    }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
      attrs: {
        sm: "12",
        lg: "4",
        xl: "6"
      }
    }, [_c("h3", {
      staticClass: "heading text-center text-no-wrap mb-3"
    }, [_c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_1__["default"], {
      staticClass: "ma-2",
      attrs: {
        color: runner.colors.horse.pad.background,
        "text-color": runner.colors.horse.pad.text,
        label: "",
        small: ""
      }
    }, [_vm._v("\n                            " + _vm._s(runner.num) + "\n                          ")]), _vm._v("\n                          " + _vm._s(runner.name) + "\n                        ")], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
      staticClass: "d-flex align-center justify-center",
      attrs: {
        height: "100",
        flat: ""
      }
    }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__["default"], {
      attrs: {
        src: runner.preview,
        contain: "",
        height: "180"
      }
    })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
      attrs: {
        sm: "12",
        lg: "8",
        xl: "6"
      }
    }, [_vm._l(_vm.betTypes, function (title, type) {
      return [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: type,
        staticClass: "text-center mb-2",
        attrs: {
          dense: "",
          outlined: "",
          label: title,
          disabled: _vm.loading,
          rules: [_vm.validationInteger, function (v) {
            return _vm.validationMin(v, _vm.minBet);
          }, function (v) {
            return _vm.validationMax(v, Math.min(Math.floor(_vm.account.balance), _vm.maxBet));
          }],
          "hide-details": true,
          "prepend-inner-icon": "mdi-minus",
          "append-icon": "mdi-plus"
        },
        scopedSlots: _vm._u([{
          key: "prepend-inner",
          fn: function fn() {
            return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
              attrs: {
                small: "",
                text: "",
                icon: "",
                color: "primary"
              },
              on: {
                click: function click($event) {
                  return _vm.minimizeBet(type, index);
                }
              }
            }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
              attrs: {
                small: ""
              }
            }, [_vm._v("\n                                  mdi-arrow-down\n                                ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
              attrs: {
                small: "",
                text: "",
                icon: "",
                color: "primary"
              },
              on: {
                click: function click($event) {
                  return _vm.decrementBet(type, index);
                }
              }
            }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
              attrs: {
                small: ""
              }
            }, [_vm._v("\n                                  mdi-minus\n                                ")])], 1)];
          },
          proxy: true
        }, {
          key: "append",
          fn: function fn() {
            return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
              attrs: {
                small: "",
                text: "",
                icon: "",
                color: "primary"
              },
              on: {
                click: function click($event) {
                  return _vm.incrementBet(type, index);
                }
              }
            }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
              attrs: {
                small: ""
              }
            }, [_vm._v("\n                                  mdi-plus\n                                ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
              attrs: {
                small: "",
                text: "",
                icon: "",
                color: "primary"
              },
              on: {
                click: function click($event) {
                  return _vm.maximizeBet(type, index);
                }
              }
            }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
              attrs: {
                small: ""
              }
            }, [_vm._v("\n                                  mdi-arrow-up\n                                ")])], 1)];
          },
          proxy: true
        }, {
          key: "append-outer",
          fn: function fn() {
            return [_c(vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_15__["default"], {
              attrs: {
                bottom: ""
              },
              scopedSlots: _vm._u([{
                key: "activator",
                fn: function fn(_ref) {
                  var on = _ref.on;
                  return [_c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_1__["default"], _vm._g({
                    staticClass: "payout-chip justify-center mt-n1",
                    attrs: {
                      color: "primary",
                      label: ""
                    }
                  }, on), [_vm._v("\n                                    x " + _vm._s(_vm.paytable[type][index]) + "\n                                  ")])];
                }
              }], null, true)
            }, [_vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Payout")) + " " + _vm._s(_vm.$t("bet x {0}", [_vm.paytable[type][index]])))])])];
          },
          proxy: true
        }], null, true),
        model: {
          value: _vm.inputBets[type][index],
          callback: function callback($$v) {
            _vm.$set(_vm.inputBets[type], index, _vm._n($$v));
          },
          expression: "inputBets[type][index]"
        }
      })];
    })], 2)], 1)], 1);
  }), 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_10__.VCardActions, {
    staticClass: "justify-center pb-5"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attrs: {
      outlined: "",
      color: "primary",
      disabled: _vm.loading || !_vm.bets.length
    },
    on: {
      click: _vm.reset
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Reset")) + "\n              ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    staticClass: "ml-2",
    attrs: {
      color: "primary",
      loading: _vm.loading,
      disabled: _vm.isPlayDisabled
    },
    on: {
      click: _vm.play
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Play")) + "\n              ")])], 1)], 1)], 1)], 1)], 1) : _c("div", {
    staticClass: "d-flex fill-height align-center justify-center"
  }, [_c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_3__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      color: "primary"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Please use landscape (horizontal) orientation.")) + "\n      ")])], 1)], 1) : _c("block-preloader")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js");


var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "loader"
  }, [_c("p", {
    staticClass: "text-center text--primary"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("Loading")) + "\n  ")]), _vm._v(" "), _c(vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      color: "primary",
      indeterminate: "",
      rounded: "",
      height: "5",
      width: "100"
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/horse-racing/resources/js/pages/game.vue?vue&type=template&id=211789ec&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./packages/horse-racing/resources/js/pages/game.vue?vue&type=template&id=211789ec&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_211789ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_211789ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_211789ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=template&id=211789ec&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/game.vue?vue&type=template&id=211789ec&scoped=true&");


/***/ }),

/***/ "./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_template_id_29e85514_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_template_id_29e85514_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_template_id_29e85514_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true&");


/***/ })

}]);