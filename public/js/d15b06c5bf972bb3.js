"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/lucky-wheel-resources-js-pages-game"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _mixins_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/mixins/Game */ "./resources/js/mixins/Game.vue");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var packages_lucky_wheel_resources_audio_clack_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! packages/lucky-wheel/resources/audio/clack.wav */ "./packages/lucky-wheel/resources/audio/clack.wav");
/* harmony import */ var packages_lucky_wheel_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! packages/lucky-wheel/resources/audio/lose.wav */ "./packages/lucky-wheel/resources/audio/lose.wav");
/* harmony import */ var packages_lucky_wheel_resources_audio_start_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! packages/lucky-wheel/resources/audio/start.wav */ "./packages/lucky-wheel/resources/audio/start.wav");
/* harmony import */ var packages_lucky_wheel_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! packages/lucky-wheel/resources/audio/win.wav */ "./packages/lucky-wheel/resources/audio/win.wav");
/* harmony import */ var _components_Games_PlayControls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/components/Games/PlayControls */ "./resources/js/components/Games/PlayControls.vue");
/* harmony import */ var _components_Games_GameMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/components/Games/GameMessage */ "./resources/js/components/Games/GameMessage.vue");
/* harmony import */ var _components_BlockPreloader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/components/BlockPreloader */ "./resources/js/components/BlockPreloader.vue");
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
  name: 'LuckyWheel',
  components: {
    BlockPreloader: _components_BlockPreloader__WEBPACK_IMPORTED_MODULE_12__["default"],
    GameMessage: _components_Games_GameMessage__WEBPACK_IMPORTED_MODULE_11__["default"],
    PlayControls: _components_Games_PlayControls__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_Game__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_Sound__WEBPACK_IMPORTED_MODULE_4__["default"]],
  data: function data() {
    return {
      loading: false,
      playing: false,
      ready: false,
      message: null,
      animation: {
        planned: false,
        t: 0,
        aClack: 0,
        spinBlur: 0,
        spinAngle: 0,
        breakM: 0,
        breakAngle: 0,
        breakAngleFrom: 0,
        ledAngle: 0,
        lPosAngle: 0,
        lAngle: 0,
        speed: 0,
        speedLedMin: 50,
        speedLed: 50,
        speedReverseMax: 15,
        speedMax: 600,
        speedMin: 0.1,
        speedNoise: 400,
        breakSpins: 4,
        ledPanelOffset: 0,
        stage: 0,
        // 0 - stopped, 1 - acceleration, 2 - spin, 3 - deceleration, 4 - reverse
        index: null,
        requestAnimationFrame: null
      },
      interval: null
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_13__.mapState)('auth', ['account'])), {}, {
    variations: function variations() {
      return this.gamePackageId ? (0,_plugins_config__WEBPACK_IMPORTED_MODULE_1__.config)("".concat(this.gamePackageId)).variations : null;
    },
    variation: function variation() {
      var _this = this;
      return this.variations && this.variations.length ? this.variations.findIndex(function (o) {
        return o.slug === _this.$route.params.slug;
      }) : null;
    },
    config: function config() {
      return this.variation !== null ? this.variations[this.variation] : {};
    },
    sectorX: function sectorX() {
      return Math.cos(360 / this.config.sections.length * Math.PI / 180 / 2) * 1000;
    },
    sectorY: function sectorY() {
      return Math.sin(360 / this.config.sections.length * Math.PI / 180 / 2) * 1000;
    },
    sectorBX: function sectorBX() {
      return Math.abs(Math.cos(360 / this.config.sections.length * Math.PI / 180 / 2 + Math.PI / 2) * 20);
    },
    sectorBY: function sectorBY() {
      return Math.abs(Math.sin(360 / this.config.sections.length * Math.PI / 180 / 2 + Math.PI / 2) * 20);
    }
  }),
  watch: {
    variation: function variation(n, o) {
      // don't call init() when component is initiated, because it's called in the created() hook
      if (o !== null) {
        this.init();
      }
    }
  },
  created: function created() {
    document.addEventListener('visibilitychange', this.visibilityCnage);
  },
  beforeDestroy: function beforeDestroy() {
    this.playing = false;
    clearInterval(this.interval);
    document.removeEventListener('visibilitychange', this.visibilityCnage);
  },
  mounted: function mounted() {
    var _this2 = this;
    // wait until next tick to ensure all computed properties are available (important to set lines property)
    this.$nextTick(function () {
      _this2.init();
    });
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_13__.mapActions)({
    updateUserAccountBalance: 'auth/updateUserAccountBalance',
    setProvablyFairGame: 'provably-fair/set'
  })), {}, {
    init: function init() {
      var _this3 = this;
      this.ready = false;
      this.animation.lPosAngle = 360 / this.config.sections.length / 2;
      this.requestAnimationFrameGet();
      this.animation.t = Date.now();
      this.interval = setInterval(function () {
        if (!_this3.animation.planned) {
          _this3.animation.planned = true;
          _this3.animation.requestAnimationFrame(_this3.animationCalculate);
        }
      }, 25);
      setTimeout(function () {
        _this3.ready = true;
      }, 1000);
    },
    play: function play(bet) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var endpoint, requestParams, _yield$axios$post, game;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this4.loading = true;
              _this4.playing = true;
              _this4.message = null;
              _this4.sound(packages_lucky_wheel_resources_audio_start_wav__WEBPACK_IMPORTED_MODULE_8__["default"]);
              _this4.startSpin();

              // update user balance
              _this4.updateUserAccountBalance(_this4.account.balance - bet);
              _context.next = 8;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_5__.sleep)(500);
            case 8:
              // API request params
              endpoint = _this4.getRoute('play');
              requestParams = {
                hash: _this4.provablyFairGame.hash,
                bet: bet,
                variation: _this4.variation
              }; // execute the action
              _context.next = 12;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post(endpoint, requestParams);
            case 12:
              _yield$axios$post = _context.sent;
              game = _yield$axios$post.data;
              _this4.loading = false;
              _this4.setProvablyFairGame({
                key: _this4.gamePackageId,
                game: game.pf_game
              });
              _this4.respnoseData = {
                position: game.gameable.position,
                balance: game.account.balance,
                win: game.win,
                bet: game.bet
              };
              setTimeout(function () {
                return _this4.stopSpin(_this4.respnoseData.position);
              }, 1000);
              _this4.$refs.controls.onGameCompleted(game);
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getLabelSize: function getLabelSize(segment) {
      if (!isNaN(segment.font)) {
        return segment.font;
      } else {
        return (typeof segment.title === 'string' ? segment.title.split('\n').reduce(function (v, el) {
          if (el.length > v) v = el.length;
          return v;
        }, 0) : segment.title.toString().length) > 6 ? 12 / (typeof segment.title === 'string' ? segment.title.split('\n').reduce(function (v, el) {
          if (el.length > v) v = el.length;
          return v;
        }, 0) : segment.title.toString().length) * 70 : 160;
      }
    },
    getLabelX: function getLabelX(segment) {
      if (typeof segment.title === 'string' && segment.title.split('\n').length > 1) {
        return -600;
      } else if ((typeof segment.title === 'string' ? segment.title.split('\n').reduce(function (v, el) {
        if (el.length > v) v = el.length;
        return v;
      }, 0) : segment.title.toString().length) > 6) {
        return -600;
      } else {
        return -650;
      }
    },
    getLabelY: function getLabelY(segment) {
      if (typeof segment.title === 'string' && segment.title.split('\n').length > 1) {
        return -this.getLabelSize(segment) * 1.6 * segment.title.split('\n').length / 2;
      } else {
        return 0;
      }
    },
    getLabelSpanDY: function getLabelSpanDY(segment) {
      return this.getLabelSize(segment) * 1.2;
    },
    getLedOuterFill: function getLedOuterFill(idx) {
      // console.log(((idx+this.animation.ledPanelOffset-1) % this.config.sections.length), this.config.sections.length)
      return this.config.sections[(idx + this.animation.ledPanelOffset - 1) % this.config.sections.length].backgroundColor;
    },
    visibilityCnage: function visibilityCnage() {
      if (document.hidden !== undefined) {
        if (document.hidden) {
          this.animation.t_hide = Date.now();
        } else {
          var r = Date.now() - this.animation.t_hide;
          this.animation.t += r;
        }
      }
    },
    requestAnimationFrameGet: function requestAnimationFrameGet() {
      var _raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
      this.animation.requestAnimationFrame = _raf ? _raf.bind(window) : null;
    },
    onStopSpin: function onStopSpin() {
      if (!this.respnoseData) return;
      this.updateUserAccountBalance(this.respnoseData.balance);
      if (this.respnoseData.win > 0) {
        this.message = this.$t('You won') + ' ' + this.respnoseData.win;
        this.sound(this.config.sounds.win || packages_lucky_wheel_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_9__["default"]);
      } else {
        this.sound(this.config.sounds.lose || packages_lucky_wheel_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_7__["default"]);
      }
      this.playing = false;
      this.respnoseData = null;
    },
    animationCalculate: function animationCalculate() {
      this.animation.planned = false;
      var tc = Date.now() - this.animation.t;
      this.animation.t = Date.now();
      switch (this.animation.stage) {
        case 1:
          this.animation.speed += this.animation.speedMax / 1000 * tc;
          this.animation.spinBlur = Math.round(this.animation.speed / 10) - 10;
          if (this.animation.spinBlur < 0) this.animation.spinBlur = 0;
          this.animation.speedLed = Math.round(this.animation.speed);
          if (this.animation.speed >= this.animation.speedMax) {
            this.animation.speed = this.animation.speedMax;
            this.animation.stage++;
          }
          break;
        case 2:
          if (this.animation.index != null) {
            this.animation.breakAngle = 360 * this.animation.breakSpins - this.animation.spinAngle - this.animation.index * 360 / this.config.sections.length + 360 / this.config.sections.length / 2 + 4;
            this.animation.breakAngleFrom = this.animation.breakAngle;
            this.animation.breakM = this.animation.speedMax / Math.sqrt(this.animation.breakAngleFrom);
            this.animation.stage++;
          }
          break;
        case 3:
          if (this.animation.breakAngle > 0) {
            this.animation.speed = this.animation.breakM * Math.sqrt(this.animation.breakAngle / this.animation.breakAngleFrom * this.animation.speedMax);
            // this.animation.breakAngle/this.animation.breakAngleFrom * this.animation.speedMax;
            // this.animation.speed = this.animation.breakAngle/this.animation.breakAngleFrom * this.animation.speedMax;
            if (this.animation.speed < this.animation.speedMin) this.animation.speed = this.animation.speedMin;
            this.animation.spinBlur = Math.round(this.animation.speed / 10) - 10;
            if (this.animation.spinBlur < 0) this.animation.spinBlur = 0;
            this.animation.speedLed = Math.round(this.animation.speed);
            break;
          } else if (this.animation.breakAngle <= 0) {
            this.animation.breakAngle = 0;
            // this.animation.speed=-this.animation.speedMin;
            this.animation.spinBlur = 0;
            this.animation.speedLed = this.animation.speedLedMin;
            this.animation.breakM = this.animation.speedReverseMax / Math.sqrt(4 + 360 / this.config.sections.length / 2);
            this.onStopSpin();
            this.animation.stage++;
          } else {
            break;
          }
        case 4:
          this.animation.speed = -this.animation.breakM * Math.sqrt(4 + 360 / this.config.sections.length - this.animation.breakAngle);
          if (this.animation.speed > -this.animation.speedMin) this.animation.speed = -this.animation.speedMin;
          if (this.animation.breakAngle >= 4 + 360 / this.config.sections.length / 2) {
            this.animation.speed = 0;
            this.animation.stage = 0;
          }
          break;
      }
      if (this.animation.stage === 3 || this.animation.stage === 4) this.animation.breakAngle -= this.animation.speed / 1000 * tc;
      this.animation.spinAngle += this.animation.speed / 1000 * tc;
      this.animation.lPosAngle += this.animation.speed / 1000 * tc;
      this.animation.aClack += this.animation.speed / 1000 * tc;
      this.animation.ledAngle += this.animation.speedLed / 1000 * tc;
      while (this.animation.spinAngle > 360) this.animation.spinAngle -= 360;
      while (this.animation.ledAngle > 360 * 2) this.animation.ledAngle -= 360 * 2;
      while (this.animation.ledAngle < 0) this.animation.ledAngle += 360;
      this.animation.ledPanelOffset = Math.round(this.animation.ledAngle / (360 / (this.config.sections.length * 2)));
      if (this.animation.lPosAngle >= 360 / this.config.sections.length - 3 && this.animation.lPosAngle <= 360 / this.config.sections.length + 8) {
        while (this.animation.lPosAngle > 360 / this.config.sections.length + 8) this.animation.lPosAngle -= 360 / this.config.sections.length;
        this.animation.lAngle = ((11 - (360 / this.config.sections.length + 8 - this.animation.lPosAngle)) / 11 * 45).toFixed(1);
        if (this.animation.lAngle > 45) this.animation.lAngle = 45;
        if (this.animation.lAngle < 0) this.animation.lAngle = 0;
      } else if (this.animation.lAngle > 0) {
        if (this.animation.lPosAngle > 360 / this.config.sections.length) {
          this.animation.lAngle = 45;
        }
        while (this.animation.lPosAngle > 360 / this.config.sections.length) this.animation.lPosAngle -= 360 / this.config.sections.length;
        this.animation.lAngle -= 360 / 1000 * tc;
        if (this.animation.lAngle < 0) this.animation.lAngle = 0;
      } else if (this.animation.lPosAngle > 360 / this.config.sections.length) {
        this.animation.lAngle = 45;
      }
      if (this.animation.aClack > 360 / this.config.sections.length) {
        this.sound(packages_lucky_wheel_resources_audio_clack_wav__WEBPACK_IMPORTED_MODULE_6__["default"]);
        while (this.animation.aClack > 360 / this.config.sections.length) this.animation.aClack -= 360 / this.config.sections.length;
      }
    },
    startSpin: function startSpin() {
      this.animation.index = null;
      this.animation.stage = 1;
    },
    stopSpin: function stopSpin(index) {
      this.animation.index = index;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    message: {
      required: true,
      validator: function validator(value) {
        return typeof value === 'string' || value === null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _mixins_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/mixins/Game */ "./resources/js/mixins/Game.vue");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");
/* harmony import */ var _audio_common_click_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/../audio/common/click.wav */ "./resources/audio/common/click.wav");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_Game__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_Sound__WEBPACK_IMPORTED_MODULE_3__["default"]],
  props: {
    betLabel: {
      type: String,
      required: false,
      "default": ''
    },
    playLabel: {
      type: String,
      required: false,
      "default": ''
    },
    loading: {
      type: Boolean,
      required: true
    },
    playing: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      "default": false
    },
    provable: {
      type: Boolean,
      required: false,
      "default": true
    }
  },
  data: function data() {
    return {
      bet: null,
      autoPlay: {
        baseBet: 0,
        onWin: {
          reset: true,
          amount: 0
        },
        onLoss: {
          reset: true,
          amount: 0
        },
        games: [],
        minBet: 0,
        maxBet: 0,
        betsCount: 0,
        maxBetsCount: 0,
        maxBalance: 0,
        minBalance: 0,
        winsCount: 0,
        lossesCount: 0
      },
      autoPlayInProgress: false,
      autoPlayEnabled: false,
      autoPlaySettingsDialog: false,
      autoPlayHistoryDialog: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapState)('auth', ['account'])), {}, {
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
    autoPlaySupport: function autoPlaySupport() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_0__.get)(this.config, 'auto_play.enabled', false);
    },
    autoPlayInterval: function autoPlayInterval() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_0__.get)(this.config, 'auto_play.interval');
    },
    isPlayDisabled: function isPlayDisabled() {
      return this.provable && !this.provablyFairGame.hash || this.playing || typeof this.account === 'undefined' || this.bet > this.account.balance;
    },
    autoPlayNetResult: function autoPlayNetResult() {
      return this.autoPlay.games.reduce(function (a, game) {
        return a + game.win - game.bet;
      }, 0);
    }
  }),
  watch: {
    bet: function bet(_bet, oldBet) {
      this.$emit('bet-change', (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_0__.isInteger)(_bet) ? _bet : 0);
    }
  },
  created: function created() {
    var _this = this;
    // it's important to wait until next tick to ensure config computed property is updated
    // after switching from one game page to another.
    this.$nextTick(function () {
      _this.bet = _this.defaultBet;
    });
  },
  methods: {
    play: function play() {
      this.sound(_audio_common_click_wav__WEBPACK_IMPORTED_MODULE_4__["default"]);
      if (this.autoPlaySupport && this.autoPlayEnabled && !this.autoPlayInProgress) {
        this.autoPlayInProgress = true;
        this.autoPlay.baseBet = this.bet;
        this.autoPlay.betsCount = 0;
        this.autoPlay.winsCount = 0;
        this.autoPlay.lossesCount = 0;
        this.autoPlay.games = [];
      }
      this.$emit('play', this.bet, this.autoPlayInProgress);
    },
    decreaseBet: function decreaseBet() {
      this.sound(_audio_common_click_wav__WEBPACK_IMPORTED_MODULE_4__["default"]);
      var bet = this.bet - this.betStep;
      this.bet = Math.max(this.minBet, bet);
    },
    increaseBet: function increaseBet() {
      this.sound(_audio_common_click_wav__WEBPACK_IMPORTED_MODULE_4__["default"]);
      var bet = this.bet + this.betStep;
      this.bet = Math.min(this.maxBet, bet);
    },
    onGameCompleted: function onGameCompleted(game) {
      var _this2 = this;
      if (this.autoPlayEnabled) {
        var isWin = game.win > game.bet;
        this.autoPlay.betsCount++;
        this.autoPlay.games.push({
          bet: game.bet,
          win: game.win
        });

        // win
        if (isWin) {
          this.autoPlay.winsCount++;
          if (this.autoPlay.onWin.reset) {
            this.setBet(this.autoPlay.baseBet);
          } else {
            this.setBet(this.bet + this.autoPlay.onWin.amount);
          }
          // loss
        } else {
          this.autoPlay.lossesCount++;
          if (this.autoPlay.onLoss.reset) {
            this.setBet(this.autoPlay.baseBet);
          } else {
            this.setBet(this.bet + this.autoPlay.onLoss.amount);
          }
        }
        if (this.bet > this.account.balance || this.autoPlay.minBalance > 0 && this.account.balance < this.autoPlay.minBalance || this.autoPlay.maxBalance > 0 && this.account.balance > this.autoPlay.maxBalance || this.autoPlay.maxBetsCount > 0 && this.autoPlay.betsCount >= this.autoPlay.maxBetsCount) {
          this.stopAutoPlay();
        }
        setTimeout(function () {
          if (_this2.autoPlayInProgress) {
            _this2.play();
          } else {
            _this2.stopAutoPlay();
          }
        }, parseInt(this.autoPlayInterval) * 1000);
      }
    },
    setBet: function setBet(value) {
      var minValues = this.autoPlay.maxBet > 0 ? [value, this.maxBet, this.autoPlay.maxBet] : [value, this.maxBet];
      var maxValues = this.autoPlay.minBet > 0 ? [this.minBet, this.autoPlay.minBet] : [this.minBet];
      this.bet = Math.max.apply(Math, [Math.min.apply(Math, minValues)].concat(maxValues));
    },
    stopAutoPlay: function stopAutoPlay() {
      this.autoPlayInProgress = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixins/Game.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixins/Game.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./packages/lucky-wheel/resources/audio/clack.wav":
/*!********************************************************!*\
  !*** ./packages/lucky-wheel/resources/audio/clack.wav ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/lucky-wheel/clack.wav");

/***/ }),

/***/ "./packages/lucky-wheel/resources/audio/lose.wav":
/*!*******************************************************!*\
  !*** ./packages/lucky-wheel/resources/audio/lose.wav ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/lucky-wheel/lose.wav");

/***/ }),

/***/ "./packages/lucky-wheel/resources/audio/start.wav":
/*!********************************************************!*\
  !*** ./packages/lucky-wheel/resources/audio/start.wav ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/lucky-wheel/start.wav");

/***/ }),

/***/ "./packages/lucky-wheel/resources/audio/win.wav":
/*!******************************************************!*\
  !*** ./packages/lucky-wheel/resources/audio/win.wav ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/lucky-wheel/win.wav");

/***/ }),

/***/ "./resources/audio/common/click.wav":
/*!******************************************!*\
  !*** ./resources/audio/common/click.wav ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/common/click.wav");

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=style&index=0&id=3fe8ae0c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=style&index=0&id=3fe8ae0c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wheel[data-v-3fe8ae0c] {\n  max-width: 70%;\n  width: 100%;\n}\n@media (min-width: 600px) {\n.wheel[data-v-3fe8ae0c] {\n    width: 400px;\n}\n}\n.wheel svg[data-v-3fe8ae0c] {\n  width: 100%;\n  height: auto;\n}\n@media (min-width: 1200px) {\n.wheel .segment-pin[data-v-3fe8ae0c] {\n    filter: url(#spin_blur);\n}\n}\n.wheel g path.border[data-v-3fe8ae0c] {\n  stroke-width: 0;\n  fill: var(--v-primary-base);\n}\n@media (min-width: 1200px) {\n.wheel g path.border[data-v-3fe8ae0c] {\n    filter: url(#spin_blur);\n}\n}\n.wheel g path.segment[data-v-3fe8ae0c] {\n  stroke-width: 0;\n}\n@media (min-width: 1200px) {\n.wheel g path.segment[data-v-3fe8ae0c] {\n    filter: url(#spin_blur);\n}\n}\n.wheel g path.segment.win[data-v-3fe8ae0c] {\n  filter: url(#winBrightness);\n}\n.wheel .label[data-v-3fe8ae0c] {\n  stroke-width: 0;\n  alignment-baseline: central;\n  dominant-baseline: central;\n  text-anchor: middle;\n}\n.wheel .circle-inner[data-v-3fe8ae0c] {\n  stroke: var(--v-primary-base);\n  fill: var(--v-primary-darken1);\n}\n.wheel .circle-inner-2[data-v-3fe8ae0c] {\n  fill: var(--v-primary-lighten1);\n}\n.wheel .circle-outer[data-v-3fe8ae0c] {\n  stroke: var(--v-primary-darken3);\n}\n.wheel .stroke-pin[data-v-3fe8ae0c] {\n  stroke: black;\n  fill: red;\n}\n.wheel .outer-pin[data-v-3fe8ae0c] {\n  fill: var(--v-primary-darken1);\n}\n.wheel .segment-pin[data-v-3fe8ae0c] {\n  fill: var(--v-primary-darken1);\n}\n.wheel .led-outer[data-v-3fe8ae0c] {\n  transition: 0.3s;\n}\n.wheel .led-outer-light[data-v-3fe8ae0c] {\n  transition: 0.3s;\n}\n.wheel .stopper-body[data-v-3fe8ae0c] {\n  fill: var(--v-primary-lighten1);\n}\n.wheel .stopper-pin[data-v-3fe8ae0c] {\n  fill: var(--v-primary-darken1);\n}\n.wheel .stopper-pin-inner[data-v-3fe8ae0c] {\n  fill: var(--v-primary-darken2);\n}\n.message-container[data-v-3fe8ae0c] {\n  height: 0;\n  padding: 25px 0 20px 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".scale-enter[data-v-74957228], .scale-leave-to[data-v-74957228] {\n  transform: scale(0);\n  opacity: 1;\n}\n.scale-enter-active[data-v-74957228], .scale-leave-active[data-v-74957228] {\n  transition: all 0.3s;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bet-input[data-v-921fb73a] {\n  max-width: 250px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=style&index=0&id=3fe8ae0c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=style&index=0&id=3fe8ae0c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_3fe8ae0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=3fe8ae0c&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=style&index=0&id=3fe8ae0c&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_3fe8ae0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_3fe8ae0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_style_index_0_id_74957228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_style_index_0_id_74957228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_style_index_0_id_74957228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_style_index_0_id_921fb73a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_style_index_0_id_921fb73a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_style_index_0_id_921fb73a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./packages/lucky-wheel/resources/js/pages/game.vue":
/*!**********************************************************!*\
  !*** ./packages/lucky-wheel/resources/js/pages/game.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_vue_vue_type_template_id_3fe8ae0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.vue?vue&type=template&id=3fe8ae0c&scoped=true& */ "./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=template&id=3fe8ae0c&scoped=true&");
/* harmony import */ var _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.vue?vue&type=script&lang=js& */ "./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=script&lang=js&");
/* harmony import */ var _game_vue_vue_type_style_index_0_id_3fe8ae0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.vue?vue&type=style&index=0&id=3fe8ae0c&lang=scss&scoped=true& */ "./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=style&index=0&id=3fe8ae0c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _game_vue_vue_type_template_id_3fe8ae0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _game_vue_vue_type_template_id_3fe8ae0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3fe8ae0c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/lucky-wheel/resources/js/pages/game.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/GameMessage.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Games/GameMessage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GameMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlayControls.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/mixins/Game.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/mixins/Game.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixins/Game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=style&index=0&id=3fe8ae0c&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=style&index=0&id=3fe8ae0c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_3fe8ae0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=3fe8ae0c&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=style&index=0&id=3fe8ae0c&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_style_index_0_id_29e85514_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_style_index_0_id_74957228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_style_index_0_id_921fb73a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=template&id=3fe8ae0c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=template&id=3fe8ae0c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex flex-column fill-height py-3 pt-md-3 pt-12"
  }, [_c("div", {
    staticClass: "message-container d-flex justify-center align-center"
  }, [_c("game-message", {
    attrs: {
      message: _vm.message
    }
  })], 1), _vm._v(" "), _vm.ready ? _c("div", {
    staticClass: "d-flex justify-center fill-height align-center"
  }, [_c("div", {
    staticClass: "wheel"
  }, [_c("object", [_c("svg", {
    attrs: {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "2600",
      height: "2600",
      viewBox: "0 0 2600 2600"
    }
  }, [_c("defs", [_c("filter", {
    attrs: {
      id: "spin_blur",
      x: "0",
      y: "0"
    }
  }, [_c("feGaussianBlur", {
    attrs: {
      "in": "SourceGraphic",
      stdDeviation: _vm.animation.spinBlur
    }
  })], 1), _vm._v(" "), _c("filter", {
    attrs: {
      id: "l_blur",
      x: "0",
      y: "0"
    }
  }, [_c("feGaussianBlur", {
    attrs: {
      "in": "SourceGraphic",
      stdDeviation: Math.round(_vm.animation.spinBlur / 5)
    }
  })], 1), _vm._v(" "), _c("clipPath", {
    attrs: {
      id: "wheel_clip"
    }
  }, [_c("circle", {
    attrs: {
      r: "1035",
      cx: "0",
      cy: "0"
    }
  })]), _vm._v(" "), _c("filter", {
    attrs: {
      id: "ledBrightness"
    }
  }, [_c("feComponentTransfer", [_c("feFuncR", {
    attrs: {
      type: "linear",
      slope: "4"
    }
  }), _vm._v(" "), _c("feFuncG", {
    attrs: {
      type: "linear",
      slope: "4"
    }
  }), _vm._v(" "), _c("feFuncB", {
    attrs: {
      type: "linear",
      slope: "4"
    }
  })], 1)], 1), _vm._v(" "), _c("filter", {
    attrs: {
      id: "winBrightness"
    }
  }, [_c("feComponentTransfer", [_c("feFuncR", {
    attrs: {
      type: "linear",
      slope: "2"
    }
  }), _vm._v(" "), _c("feFuncG", {
    attrs: {
      type: "linear",
      slope: "2"
    }
  }), _vm._v(" "), _c("feFuncB", {
    attrs: {
      type: "linear",
      slope: "2"
    }
  })], 1)], 1)]), _vm._v(" "), _c("g", {
    attrs: {
      transform: "translate(1300,1300) rotate(" + _vm.animation.spinAngle + ")",
      "clip-path": "url(#wheel_clip)"
    }
  }, [_vm._l(_vm.config.sections, function (section, idx) {
    return _c("g", {
      ref: idx,
      refInFor: true,
      staticClass: "section",
      attrs: {
        transform: "rotate(" + idx * 360 / _vm.config.sections.length + ")"
      }
    }, [_c("path", {
      staticClass: "section",
      "class": _vm.animation.index != null && (_vm.animation.stage == 0 || _vm.animation.stage >= 4) && _vm.animation.index == idx ? "win" : "",
      attrs: {
        d: "M0 00 -" + _vm.sectorX.toFixed(2) + " -" + _vm.sectorY.toFixed(2) + " A1000 1000 0 0 0-" + _vm.sectorX.toFixed(2) + " " + _vm.sectorY.toFixed(2) + "Z",
        fill: section.backgroundColor
      }
    }), _vm._v(" "), _c("text", {
      staticClass: "label",
      attrs: {
        x: _vm.getLabelX(section),
        y: _vm.getLabelY(section),
        "font-size": _vm.getLabelSize(section),
        fill: section.fontColor ? section.fontColor : "#000000"
      }
    }, [typeof section.title == "string" && section.title.split("\n").length > 1 ? _vm._l(section.title.split("\n"), function (line) {
      return _c("tspan", {
        attrs: {
          x: _vm.getLabelX(section),
          dy: _vm.getLabelSpanDY(section)
        }
      }, [_vm._v(_vm._s(line))]);
    }) : [_vm._v(_vm._s(section.title))]], 2)]);
  }), _vm._v(" "), _vm._l(_vm.config.sections, function (section, idx) {
    return _c("g", {
      staticClass: "section",
      attrs: {
        transform: "rotate(" + idx * 360 / _vm.config.sections.length + ")"
      }
    }, [_c("path", {
      staticClass: "border",
      attrs: {
        d: "M" + _vm.sectorBX.toFixed(2) + " -" + _vm.sectorBY.toFixed(2) + " -" + _vm.sectorBX.toFixed(2) + " " + _vm.sectorBY.toFixed(2) + " -" + _vm.sectorX.toFixed(2) + " -" + _vm.sectorY.toFixed(2) + "Z"
      }
    })]);
  }), _vm._v(" "), _c("circle", {
    staticClass: "circle-inner",
    attrs: {
      cx: "0",
      cy: "0",
      r: "200",
      "stroke-width": "35"
    }
  }), _vm._v(" "), _c("circle", {
    staticClass: "circle-inner-2",
    attrs: {
      cx: "0",
      cy: "0",
      r: "50",
      "stroke-width": "0"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "wheelDarken",
      cx: "0",
      cy: "0",
      r: "1000",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "transparent"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "transparent"
    },
    attrs: {
      offset: "0.85"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "rgba(0, 0, 0,0.25)"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("circle", {
    staticClass: "circle-outer",
    attrs: {
      cx: "0",
      cy: "0",
      r: "1000",
      "stroke-width": "70",
      fill: "url(#wheelDarken)"
    }
  }), _vm._v(" "), _vm._l(_vm.config.sections.length, function (idx) {
    return _c("circle", {
      staticClass: "segment-pin",
      attrs: {
        cx: Math.cos(360 / _vm.config.sections.length * Math.PI / 180 / 2 + Math.PI + 360 / _vm.config.sections.length * Math.PI / 180 * idx) * 1000,
        cy: Math.sin(360 / _vm.config.sections.length * Math.PI / 180 / 2 + Math.PI + 360 / _vm.config.sections.length * Math.PI / 180 * idx) * 1000,
        r: "20",
        "stroke-width": "0"
      }
    });
  })], 2), _vm._v(" "), _c("g", {
    attrs: {
      transform: "translate(1300,1300)"
    }
  }, [_c("circle", {
    staticClass: "circle-outer",
    attrs: {
      cx: "0",
      cy: "0",
      r: "1200",
      "stroke-width": "140",
      fill: "transparent"
    }
  }), _vm._v(" "), _vm._l(_vm.config.sections, function (section, idx) {
    return _c("radialGradient", {
      key: idx,
      attrs: {
        id: "LOUTER" + idx,
        cx: "0",
        cy: "0",
        r: "100",
        gradientUnits: "userSpaceOnUse"
      }
    }, [_c("stop", {
      style: "stop-color: " + section.backgroundColor + ";",
      attrs: {
        offset: "0"
      }
    }), _vm._v(" "), _c("stop", {
      style: "stop-color: " + section.backgroundColor + "aa;",
      attrs: {
        offset: "0.025"
      }
    }), _vm._v(" "), _c("stop", {
      style: "stop-color: " + section.backgroundColor + "00;",
      attrs: {
        offset: "1"
      }
    })], 1);
  }), _vm._v(" "), _vm._l(_vm.config.sections.length * 2 - 1, function (idx) {
    return _c("g", {
      attrs: {
        transform: "rotate(" + (360 / (_vm.config.sections.length * 2) * idx).toFixed(2) + ") translate(-1200,0)"
      }
    }, [_c("circle", {
      staticClass: "led-outer",
      attrs: {
        cx: "0",
        cy: "0",
        r: "40",
        "stroke-width": "0",
        filter: "url(#ledBrightness)",
        fill: _vm.getLedOuterFill(idx)
      }
    }), _vm._v(" "), _c("circle", {
      staticClass: "led-outer-light",
      attrs: {
        cx: "0",
        cy: "0",
        r: "100",
        "stroke-width": "0",
        filter: "url(#ledBrightness)",
        fill: "url(#LOUTER" + ((idx + _vm.animation.ledPanelOffset - 1) % _vm.config.sections.length + 1) + ")"
      }
    })]);
  }), _vm._v(" "), _vm._l(_vm.config.sections.length * 2, function (idx) {
    return _c("g", {
      attrs: {
        transform: "rotate(" + (360 / (_vm.config.sections.length * 2) * idx - 360 / (_vm.config.sections.length * 2) / 2).toFixed(2) + ") translate(-1200,0)"
      }
    }, [_c("path", {
      staticClass: "outer-pin",
      attrs: {
        "stroke-width": "0",
        d: "M 20 0 6 6 0 20 -6 6 -20 0 -6 -6 0 -20 6 -6Z"
      }
    })]);
  }), _vm._v(" "), _c("g", {
    attrs: {
      transform: "translate(-1150,0) rotate(-" + _vm.animation.lAngle + ")"
    }
  }, [_c("path", {
    staticClass: "stopper-body",
    attrs: {
      filter: "url(#l_blur)",
      fill: "white",
      "stroke-width": "0",
      stroke: "black",
      d: "\n                            M178 -5\n                            28 -70\n                            A75 75 0 1 0 28 70\n                            L 178 5\n                            A18 10 0 0 0 178 -5\n                            Z"
    }
  }), _vm._v(" "), _c("circle", {
    staticClass: "stopper-pin",
    attrs: {
      cx: "0",
      cy: "0",
      r: "60",
      "stroke-width": "0",
      fill: "#ff0000"
    }
  }), _vm._v(" "), _c("circle", {
    staticClass: "stopper-pin-inner",
    attrs: {
      cx: "0",
      cy: "0",
      r: "20",
      "stroke-width": "0",
      fill: "#00ff00"
    }
  })])], 2)])])])]) : _c("div", {
    staticClass: "d-flex justify-center fill-height align-center"
  }, [_c("block-preloader")], 1), _vm._v(" "), _c("play-controls", {
    ref: "controls",
    attrs: {
      loading: _vm.loading,
      playing: _vm.playing
    },
    on: {
      play: _vm.play
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=template&id=74957228&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=template&id=74957228&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");


var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("transition", {
    attrs: {
      name: "scale"
    }
  }, [_vm.message ? _c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      color: "primary"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.message) + "\n  ")]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VBtnToggle */ "./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/VDialog.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/VSimpleTable.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VSpacer.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");















var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_0__["default"], {
    ref: "form",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.play.apply(null, arguments);
      }
    },
    model: {
      value: _vm.formIsValid,
      callback: function callback($$v) {
        _vm.formIsValid = $$v;
      },
      expression: "formIsValid"
    }
  }, [_vm.autoPlaySupport ? _c("div", {
    staticClass: "d-flex justify-center"
  }, [_c(vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    staticClass: "align-self-center mb-3",
    attrs: {
      "active-class": "primary--text",
      mandatory: "",
      rounded: "",
      group: ""
    },
    model: {
      value: _vm.autoPlayEnabled,
      callback: function callback($$v) {
        _vm.autoPlayEnabled = $$v;
      },
      expression: "autoPlayEnabled"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "mx-1",
    attrs: {
      disabled: _vm.playing || _vm.autoPlayInProgress,
      small: "",
      value: false
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Manual")) + "\n      ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "mx-1",
    attrs: {
      disabled: _vm.playing || _vm.autoPlayInProgress,
      small: "",
      value: true
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Auto")) + "\n      ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      persistent: "",
      "max-width": "600px"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on,
          attrs = _ref.attrs;
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], _vm._g(_vm._b({
          attrs: {
            icon: "",
            color: "primary",
            disabled: !_vm.autoPlayEnabled || _vm.playing || _vm.autoPlayInProgress
          }
        }, "v-btn", attrs, false), on), [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v("mdi-cog")])], 1)];
      }
    }], null, false, 3358863509),
    model: {
      value: _vm.autoPlaySettingsDialog,
      callback: function callback($$v) {
        _vm.autoPlaySettingsDialog = $$v;
      },
      expression: "autoPlaySettingsDialog"
    }
  }, [_vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "headline my-5"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Auto play settings")) + "\n        ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      label: _vm.$t("On loss"),
      rules: [_vm.validationInteger],
      readonly: _vm.autoPlay.onLoss.reset,
      suffix: _vm.$t("credits")
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
          staticClass: "align-self-center",
          attrs: {
            "active-class": "primary--text",
            mandatory: "",
            rounded: "",
            group: ""
          },
          model: {
            value: _vm.autoPlay.onLoss.reset,
            callback: function callback($$v) {
              _vm.$set(_vm.autoPlay.onLoss, "reset", $$v);
            },
            expression: "autoPlay.onLoss.reset"
          }
        }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            value: true,
            small: ""
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.$t("Reset to base")) + "\n                ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            value: false,
            small: ""
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.$t("Change by")) + "\n                ")])], 1)];
      },
      proxy: true
    }], null, false, 3331114620),
    model: {
      value: _vm.autoPlay.onLoss.amount,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay.onLoss, "amount", _vm._n($$v));
      },
      expression: "autoPlay.onLoss.amount"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      label: _vm.$t("On win"),
      rules: [_vm.validationInteger],
      readonly: _vm.autoPlay.onWin.reset,
      suffix: _vm.$t("credits")
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
          staticClass: "align-self-center",
          attrs: {
            "active-class": "primary--text",
            mandatory: "",
            rounded: "",
            group: ""
          },
          model: {
            value: _vm.autoPlay.onWin.reset,
            callback: function callback($$v) {
              _vm.$set(_vm.autoPlay.onWin, "reset", $$v);
            },
            expression: "autoPlay.onWin.reset"
          }
        }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            value: true,
            small: ""
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.$t("Reset to base")) + "\n                ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            value: false,
            small: ""
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.$t("Change by")) + "\n                ")])], 1)];
      },
      proxy: true
    }], null, false, 2613860143),
    model: {
      value: _vm.autoPlay.onWin.amount,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay.onWin, "amount", _vm._n($$v));
      },
      expression: "autoPlay.onWin.amount"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      label: _vm.$t("Number of games"),
      rules: [_vm.validationNonNegativeInteger]
    },
    model: {
      value: _vm.autoPlay.maxBetsCount,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay, "maxBetsCount", _vm._n($$v));
      },
      expression: "autoPlay.maxBetsCount"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      label: _vm.$t("Min bet"),
      suffix: _vm.$t("credits"),
      rules: [_vm.validationNonNegativeInteger]
    },
    model: {
      value: _vm.autoPlay.minBet,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay, "minBet", _vm._n($$v));
      },
      expression: "autoPlay.minBet"
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      label: _vm.$t("Max bet"),
      suffix: _vm.$t("credits"),
      rules: [_vm.validationNonNegativeInteger]
    },
    model: {
      value: _vm.autoPlay.maxBet,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay, "maxBet", _vm._n($$v));
      },
      expression: "autoPlay.maxBet"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      prefix: _vm.$t("less than"),
      label: _vm.$t("Stop if balance is"),
      rules: [_vm.validationNonNegativeInteger]
    },
    model: {
      value: _vm.autoPlay.minBalance,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay, "minBalance", _vm._n($$v));
      },
      expression: "autoPlay.minBalance"
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      prefix: _vm.$t("greater than"),
      label: _vm.$t("Stop if balance is"),
      rules: [_vm.validationNonNegativeInteger]
    },
    model: {
      value: _vm.autoPlay.maxBalance,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay, "maxBalance", _vm._n($$v));
      },
      expression: "autoPlay.maxBalance"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardActions, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.autoPlaySettingsDialog = false;
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Apply")) + "\n          ")])], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      persistent: "",
      "max-width": "600px"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref2) {
        var on = _ref2.on,
          attrs = _ref2.attrs;
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], _vm._g(_vm._b({
          attrs: {
            icon: "",
            color: "primary",
            disabled: !_vm.autoPlayEnabled || _vm.playing || _vm.autoPlayInProgress
          }
        }, "v-btn", attrs, false), on), [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v("mdi-poll")])], 1)];
      }
    }], null, false, 2222554209),
    model: {
      value: _vm.autoPlayHistoryDialog,
      callback: function callback($$v) {
        _vm.autoPlayHistoryDialog = $$v;
      },
      expression: "autoPlayHistoryDialog"
    }
  }, [_vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "headline my-5"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Auto play history")) + "\n        ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_vm.autoPlay.games.length ? _c(vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      dense: "",
      "fixed-header": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn() {
        return [_c("thead", [_c("tr", [_c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                    #\n                  ")]), _vm._v(" "), _c("th", {
          staticClass: "text-right"
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Bet")) + "\n                  ")]), _vm._v(" "), _c("th", {
          staticClass: "text-right"
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Win")) + "\n                  ")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.autoPlay.games, function (game, i) {
          return _c("tr", {
            key: i
          }, [_c("td", {
            staticClass: "text-left"
          }, [_vm._v("\n                    " + _vm._s(++i) + "\n                  ")]), _vm._v(" "), _c("td", {
            staticClass: "text-right"
          }, [_vm._v("\n                    " + _vm._s(game.bet) + "\n                  ")]), _vm._v(" "), _c("td", {
            staticClass: "text-right"
          }, [_vm._v("\n                    " + _vm._s(game.win) + "\n                  ")])]);
        }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("th", {
          staticClass: "text-right",
          attrs: {
            colspan: "2"
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Total net win")) + "\n                  ")]), _vm._v(" "), _c("th", {
          staticClass: "text-right",
          "class": _vm.autoPlayNetResult > 0 ? "green--text" : "error--text"
        }, [_vm._v("\n                    " + _vm._s(_vm.autoPlayNetResult.toFixed(2)) + "\n                  ")])])])];
      },
      proxy: true
    }], null, false, 4084813946)
  }) : _c("p", [_vm._v("\n            " + _vm._s(_vm.$t("No games played in the auto mode.")) + "\n          ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardActions, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.autoPlayHistoryDialog = false;
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Close")) + "\n          ")])], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-center flex-wrap mt-3"
  }, [_vm._t("before-bet-input"), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "bet-input text-center",
    attrs: {
      dense: "",
      outlined: "",
      "full-width": false,
      label: _vm.betLabel || _vm.$t("Bet"),
      disabled: _vm.playing,
      rules: [_vm.validationInteger, function (v) {
        return _vm.validationMin(v, _vm.minBet);
      }, function (v) {
        return typeof _vm.account !== "undefined" && _vm.validationMax(v, Math.min(Math.floor(_vm.account.balance), _vm.maxBet));
      }],
      "prepend-inner-icon": "mdi-minus",
      "append-icon": "mdi-plus"
    },
    on: {
      "click:prepend-inner": _vm.decreaseBet,
      "click:append": _vm.increaseBet
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            small: "",
            text: "",
            icon: "",
            color: "primary"
          },
          on: {
            click: function click($event) {
              _vm.bet = _vm.minBet;
            }
          }
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attrs: {
            small: ""
          }
        }, [_vm._v("\n            mdi-arrow-down\n          ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            small: "",
            text: "",
            icon: "",
            color: "primary"
          },
          on: {
            click: _vm.decreaseBet
          }
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attrs: {
            small: ""
          }
        }, [_vm._v("\n            mdi-minus\n          ")])], 1)];
      },
      proxy: true
    }, {
      key: "append",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            small: "",
            text: "",
            icon: "",
            color: "primary"
          },
          on: {
            click: _vm.increaseBet
          }
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attrs: {
            small: ""
          }
        }, [_vm._v("\n            mdi-plus\n          ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            small: "",
            text: "",
            icon: "",
            color: "primary"
          },
          on: {
            click: function click($event) {
              _vm.bet = _vm.maxBet;
            }
          }
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attrs: {
            small: ""
          }
        }, [_vm._v("\n            mdi-arrow-up\n          ")])], 1)];
      },
      proxy: true
    }]),
    model: {
      value: _vm.bet,
      callback: function callback($$v) {
        _vm.bet = _vm._n($$v);
      },
      expression: "bet"
    }
  }), _vm._v(" "), _vm._t("after-bet-input"), _vm._v(" "), _vm.autoPlayEnabled ? _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "ml-2",
    attrs: {
      color: "primary",
      disabled: !_vm.autoPlayInProgress,
      outlined: "",
      icon: "",
      tile: ""
    },
    on: {
      click: _vm.stopAutoPlay
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v("mdi-stop")])], 1) : _vm._e(), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "ml-2",
    attrs: {
      type: "submit",
      color: "primary",
      loading: _vm.loading,
      disabled: _vm.disabled || !_vm.formIsValid || _vm.isPlayDisabled || _vm.autoPlayInProgress
    }
  }, [_vm._v("\n      " + _vm._s(_vm.playLabel || _vm.$t("Play")) + "\n    ")]), _vm._v(" "), _vm._t("after-play-button")], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=template&id=3fe8ae0c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=template&id=3fe8ae0c&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_3fe8ae0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_3fe8ae0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_3fe8ae0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=template&id=3fe8ae0c&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/lucky-wheel/resources/js/pages/game.vue?vue&type=template&id=3fe8ae0c&scoped=true&");


/***/ }),

/***/ "./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_template_id_29e85514_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_template_id_29e85514_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_template_id_29e85514_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/GameMessage.vue?vue&type=template&id=74957228&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Games/GameMessage.vue?vue&type=template&id=74957228&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_template_id_74957228_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_template_id_74957228_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_template_id_74957228_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GameMessage.vue?vue&type=template&id=74957228&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=template&id=74957228&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_template_id_921fb73a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_template_id_921fb73a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_template_id_921fb73a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlayControls.vue?vue&type=template&id=921fb73a&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true&");


/***/ })

}]);