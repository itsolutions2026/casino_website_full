"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/multiplayer-blackjack-resources-js-pages-game"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _mixins_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/mixins/Game */ "./resources/js/mixins/Game.vue");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");
/* harmony import */ var _components_Games_CardGame_Hand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/Games/CardGame/Hand */ "./resources/js/components/Games/CardGame/Hand.vue");
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var _audio_common_click_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/../audio/common/click.wav */ "./resources/audio/common/click.wav");
/* harmony import */ var packages_multiplayer_blackjack_resources_audio_deal_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! packages/multiplayer-blackjack/resources/audio/deal.wav */ "./packages/multiplayer-blackjack/resources/audio/deal.wav");
/* harmony import */ var packages_multiplayer_blackjack_resources_audio_swoosh_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! packages/multiplayer-blackjack/resources/audio/swoosh.wav */ "./packages/multiplayer-blackjack/resources/audio/swoosh.wav");
/* harmony import */ var packages_multiplayer_blackjack_resources_audio_flip_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! packages/multiplayer-blackjack/resources/audio/flip.wav */ "./packages/multiplayer-blackjack/resources/audio/flip.wav");
/* harmony import */ var packages_multiplayer_blackjack_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! packages/multiplayer-blackjack/resources/audio/win.wav */ "./packages/multiplayer-blackjack/resources/audio/win.wav");
/* harmony import */ var packages_multiplayer_blackjack_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! packages/multiplayer-blackjack/resources/audio/lose.wav */ "./packages/multiplayer-blackjack/resources/audio/lose.wav");
/* harmony import */ var packages_multiplayer_blackjack_resources_audio_push_wav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! packages/multiplayer-blackjack/resources/audio/push.wav */ "./packages/multiplayer-blackjack/resources/audio/push.wav");
/* harmony import */ var _components_Games_GameRoom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/components/Games/GameRoom */ "./resources/js/components/Games/GameRoom.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MultiplayerBlackjack',
  components: {
    GameRoom: _components_Games_GameRoom__WEBPACK_IMPORTED_MODULE_14__["default"],
    Hand: _components_Games_CardGame_Hand__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_Game__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_Sound__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data: function data() {
    return {
      ready: false,
      room: null,
      game: null,
      action: null,
      loading: false,
      playing: false,
      defaultHand: {
        name: '',
        cards: [],
        score: -1,
        result: '',
        bet: 0,
        win: 0
      },
      player: {},
      opponents: {},
      time: null,
      intervalId: null
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_15__.mapState)('auth', ['account', 'user'])), {}, {
    actionDuration: function actionDuration() {
      return parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_5__.config)('multiplayer-blackjack.action_duration'), 10);
    },
    finalHitThreshold: function finalHitThreshold() {
      return parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_5__.config)('multiplayer-blackjack.final_hit_threshold'), 10);
    },
    cancelThreshold: function cancelThreshold() {
      return parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_5__.config)('multiplayer-blackjack.cancel_threshold'), 10);
    },
    isPlayerTurn: function isPlayerTurn() {
      return this.time && this.player.action_start && this.player.action_end && this.player.action_start <= this.time && this.time < this.player.action_end;
    },
    bet: function bet() {
      return this.room ? this.room.parameters.bet : 0;
    },
    playersCount: function playersCount() {
      return this.room ? parseInt(this.room.parameters.players_count, 10) : 0;
    },
    balanceIsSufficient: function balanceIsSufficient() {
      return this.account.balance >= this.bet;
    },
    winnersCount: function winnersCount() {
      var _this = this;
      return [this.player.win || 0].concat(_toConsumableArray(Object.keys(this.opponents).map(function (id) {
        return _this.opponents[id].win;
      }))).filter(function (win) {
        return win > 0;
      }).length;
    },
    cancelAllowed: function cancelAllowed() {
      var _this2 = this;
      return this.playing && this.opponents && this.time && this.game && this.game.created < this.time - this.cancelThreshold && Object.keys(this.opponents).filter(function (id) {
        return _this2.opponents[id].cards[0] !== null;
      }).length < this.playersCount - 1;
    }
  }),
  watch: {
    time: function time(_time, prevTime) {
      if (this.playing && !this.action && _time === this.player.action_end && prevTime === this.player.action_end - 1) {
        this.doAction('stand');
      }
    },
    playing: function playing(_playing, wasPlaying) {
      // clear action time interval when the game is completed
      if (wasPlaying && !_playing) {
        this.clearActionTimeInterval();
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_15__.mapActions)({
    updateUserAccountBalance: 'auth/updateUserAccountBalance'
  })), {}, {
    isOpponentTurn: function isOpponentTurn(opponent) {
      return this.time && opponent.action_start && opponent.action_end && opponent.action_start <= this.time && this.time <= opponent.action_end;
    },
    updatePlayerHand: function updatePlayerHand(player, values) {
      Object.keys(values).forEach(function (key) {
        player[key] = values[key];
      });
    },
    // handle game actions (play, hit, stand)
    doAction: function doAction(action) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _loop, userId, _yield$axios$post, game;
        return _regeneratorRuntime().wrap(function _callee$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this3.action = action;

              // clear previous game results
              if (!(action === 'play')) {
                _context2.next = 15;
                break;
              }
              _this3.sound(packages_multiplayer_blackjack_resources_audio_swoosh_wav__WEBPACK_IMPORTED_MODULE_9__["default"]);
              _this3.playing = true;
              _this3.updateUserAccountBalance(_this3.account.balance - _this3.bet);

              // assign default hand values (remove existing cards)
              _this3.player = _objectSpread({}, _this3.defaultHand);
              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(userId) {
                return _regeneratorRuntime().wrap(function _loop$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (_this3.opponents[userId].score > 0) {
                        _this3.opponents[userId] = _objectSpread(_objectSpread({}, _this3.defaultHand), {}, {
                          name: _this3.opponents[userId].name
                        });
                        setTimeout(function () {
                          return _this3.updatePlayerHand(_this3.opponents[userId], {
                            cards: [null, null]
                          });
                        }, 200);
                      }
                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }, _loop);
              });
              _context2.t0 = _regeneratorRuntime().keys(_this3.opponents);
            case 8:
              if ((_context2.t1 = _context2.t0()).done) {
                _context2.next = 13;
                break;
              }
              userId = _context2.t1.value;
              return _context2.delegateYield(_loop(userId), "t2", 11);
            case 11:
              _context2.next = 8;
              break;
            case 13:
              _context2.next = 16;
              break;
            case 15:
              _this3.sound(_audio_common_click_wav__WEBPACK_IMPORTED_MODULE_7__["default"]);
            case 16:
              _context2.next = 18;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post(_this3.getRoute(action).replace('{room}', "".concat(_this3.room.id)));
            case 18:
              _yield$axios$post = _context2.sent;
              game = _yield$axios$post.data;
              _this3.game = game;

              // deal sound
              if (action === 'play' || action === 'hit') {
                _this3.sound(packages_multiplayer_blackjack_resources_audio_deal_wav__WEBPACK_IMPORTED_MODULE_8__["default"]);
              }
              if (action !== 'cancel') {
                // update player hand
                _this3.player = _objectSpread(_objectSpread({}, _this3.player), game.gameable.player_hand);
              } else {
                // assign default hand values (remove existing cards)
                _this3.updatePlayerHand(_this3.player, _objectSpread(_objectSpread({}, _this3.defaultHand), {}, {
                  cards: [null, null],
                  result: _this3.$t('Cancelled')
                }));
                _this3.updateUserAccountBalance(_this3.account.balance + game.gameable.player_hand.win);
              }

              // enable action buttons
              _this3.action = null;

              // enable action time interval
              _this3.enableActionTimeInterval();
            case 25:
            case "end":
              return _context2.stop();
          }
        }, _callee);
      }))();
    },
    isActionDisabled: function isActionDisabled(action) {
      return !!this.action || action === 'hit' && this.player.score >= 21 || !this.isPlayerTurn || Object.keys(this.opponents).length < this.playersCount - 1;
    },
    enableActionTimeInterval: function enableActionTimeInterval() {
      var _this4 = this;
      if (!this.intervalId) {
        this.time = (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_6__.time)();
        this.intervalId = setInterval(function () {
          _this4.time++;
        }, 1000);
      }
    },
    clearActionTimeInterval: function clearActionTimeInterval() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.time = null;
      }
    },
    resultClass: function resultClass(player) {
      return player.score > 0 ? player.win > 0 ? this.winnersCount === 1 ? 'primary text--primary' : 'warning' : 'error' : 'secondary';
    },
    resultMessage: function resultMessage(player) {
      return player.win > 0 ? player.score === 21 && player.cards.length === 2 ? this.$t('Blackjack') : this.winnersCount === 1 ? this.$t('Win') : this.$t('Push') : this.$t('Lose');
    },
    onRoomChange: function onRoomChange(room) {
      this.room = room;
    },
    onPlayers: function onPlayers(players) {
      var _this5 = this;
      // loop through player hands
      players.forEach(function (player) {
        // if the hand belongs to the current user
        if (_this5.user.id === player.id) {
          // set the player hand to default values
          _this5.player = _objectSpread({}, _this5.defaultHand);
          // update player hand to display cards
          setTimeout(function () {
            _this5.updatePlayerHand(_this5.player, _this5.game ? _objectSpread({}, (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_6__.get)(_this5.game, 'gameable.player_hand')) : {
              cards: [null, null],
              result: players.length === _this5.playersCount ? _this5.$t('Click Play') : _this5.$t('Waiting')
            });
            if (_this5.playing) {
              _this5.enableActionTimeInterval();
            }
          }, 100);
          // if the hand DOES NOT belong to the current user
        } else {
          // set the opponent hand to default values
          _this5.$set(_this5.opponents, player.id, _objectSpread(_objectSpread({}, _this5.defaultHand), {}, {
            name: player.name
          }));
          // update opponent hand to display values
          setTimeout(function () {
            return _this5.updatePlayerHand(_this5.opponents[player.id], (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_6__.get)(_this5.game, 'gameable.opponent_hands') ? _objectSpread({}, (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_6__.get)(_this5.game, 'gameable.opponent_hands.' + player.id)) : {
              cards: [null, null]
            });
          }, 100);
        }
      });
    },
    onPlayerJoined: function onPlayerJoined(player) {
      var _this6 = this;
      // if this player didn't join earlier
      if (!this.opponents[player.id]) {
        this.$set(this.opponents, player.id, _objectSpread(_objectSpread({}, this.defaultHand), {}, {
          name: player.name
        }));
        setTimeout(function () {
          return _this6.updatePlayerHand(_this6.opponents[player.id], {
            cards: [null, null]
          });
        }, 100);

        // update player message when all players joined
        if (Object.keys(this.opponents).length + 1 === this.playersCount) {
          this.updatePlayerHand(this.player, {
            result: this.$t('Click Play')
          });
        }
        // if this player already exists (probably left and joined again)
      } else {
        this.updatePlayerHand(this.opponents[player.id], {
          result: ''
        });
      }
    },
    onPlayerLeft: function onPlayerLeft(player) {
      // add a message when a player leaves the room (it also happens when the page is refreshed)
      this.updatePlayerHand(this.opponents[player.id], {
        result: this.$t('Left')
      });
    },
    // called when the page is refreshed
    onGame: function onGame(game) {
      this.game = game;

      // get time when the game should finish
      var scheduledCompletionTime = (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_6__.get)(game, 'gameable.player_hand') && (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_6__.get)(game, 'gameable.opponent_hands') ? Math.max.apply(Math, [game.gameable.player_hand.action_end || 0].concat(_toConsumableArray(Object.keys(game.gameable.opponent_hands).map(function (id) {
        return game.gameable.opponent_hands[id].action_end;
      })))) : null;

      // complete the game explicitly if this time is in the past
      if (scheduledCompletionTime && (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_6__.time)() > scheduledCompletionTime) {
        this.doAction('complete');
      }
      if (!game.is_completed) {
        this.playing = true;
      }
    },
    onEvent: function onEvent(event) {
      var _this7 = this;
      if (event.action !== 'cancel') {
        // loop through player hands
        Object.keys(event.gameable.hands).forEach(function (userId) {
          // if the hand belongs to the current user
          if (_this7.user.id === parseInt(userId, 10) && _this7.user.id !== event.user_id) {
            _this7.updatePlayerHand(_this7.player, {
              action_start: event.gameable.hands[userId].action_start,
              action_end: event.gameable.hands[userId].action_end,
              win: event.gameable.hands[userId].win
            });
            // if the hand DOES NOT belong to the current user
          } else if (typeof _this7.opponents[userId] !== 'undefined') {
            // deal sound
            if (event.gameable.hands[userId].cards.length > _this7.opponents[userId].cards.length) {
              _this7.sound(packages_multiplayer_blackjack_resources_audio_deal_wav__WEBPACK_IMPORTED_MODULE_8__["default"]);
            } else if (event.game.is_completed) {
              _this7.sound(packages_multiplayer_blackjack_resources_audio_flip_wav__WEBPACK_IMPORTED_MODULE_10__["default"]);
            }
            // set the opponent hand
            _this7.opponents[userId] = _objectSpread(_objectSpread({}, _this7.opponents[userId]), event.gameable.hands[userId]);
          }
        });
      }

      // if game is completed
      if (event.game.is_completed) {
        this.playing = false;

        // push
        if (this.winnersCount > 1) {
          this.sound(packages_multiplayer_blackjack_resources_audio_push_wav__WEBPACK_IMPORTED_MODULE_13__["default"]);
          this.updateUserAccountBalance(this.account.balance + this.player.win);
          // player wins
        } else if (this.player.win > 0) {
          this.sound(packages_multiplayer_blackjack_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_11__["default"]);
          this.updateUserAccountBalance(this.account.balance + this.player.win);
          // player loses
        } else {
          this.sound(packages_multiplayer_blackjack_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_12__["default"]);
        }
        // if game is cancelled
      } else if (event.game.is_cancelled) {
        this.playing = false;
      } else {
        this.enableActionTimeInterval();
      }
    },
    onExit: function onExit() {
      this.game = null;
      this.player = {};
      this.opponents = {};
      this.playing = false;
      this.clearActionTimeInterval();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormParameter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormParameter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FormParameter',
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    parameter: {
      type: Object,
      required: true
    },
    value: {
      validator: function validator(value) {
        return typeof value === 'string' || typeof value === 'number' || value === null;
      },
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    formKey: {
      type: String,
      required: true,
      "default": 'parameters'
    },
    disabled: {
      type: Boolean,
      required: false,
      "default": false
    }
  },
  methods: {
    clearErrors: function clearErrors(event, formKey, parameterId) {
      this.clearFormErrors(event, formKey + '.' + parameterId);
    },
    change: function change(event) {
      this.$emit('input', event);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");
/* harmony import */ var _audio_common_card_deal_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/../audio/common/card-deal.wav */ "./resources/audio/common/card-deal.wav");
/* harmony import */ var _audio_common_card_flip_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/../audio/common/card-flip.wav */ "./resources/audio/common/card-flip.wav");
// right: calc(-1 * (3184px - ${calcResultPosX}px));top: calc(-1 * (1440px / 2 + ${calcResultPosY}px));
// background-position: -${calcResultPosX - 300 - resultWidth / 4 + 100 * positionY}px -${637 + calcResultPosY * 0.9}px;





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_Sound__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    opacity: {
      type: Number,
      "default": 1
    },
    cards: {
      type: Array,
      required: true
    },
    result: {
      type: String,
      required: false,
      "default": ''
    },
    resultBottom: {
      type: Boolean,
      "default": false
    },
    fold: {
      type: Boolean,
      "default": false
    },
    demo: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    hintView: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    cardsCount: {
      type: Number,
      required: false,
      "default": 1
    },
    positionX: {
      type: Number,
      required: false,
      "default": 0
    },
    positionY: {
      type: Number,
      required: false,
      "default": 0
    }
  },
  data: function data() {
    return {
      cardsCountLast: 0,
      cardsCountAdded: 0,
      animationsDisabled: {},
      animationsSource: {},
      animations: []
    };
  },
  computed: {
    frontImageUrl: function frontImageUrl() {
      return this.deck ? this.value !== null ? "url('/images/games/playing-cards/".concat(this.deck, "/").concat(this.suit.toLowerCase()).concat(this.value.toLowerCase(), ".png')") : '' : "url(\"".concat((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('settings.games.playing_cards.front_image'), "\")");
    },
    backImageUrl: function backImageUrl() {
      return this.deck ? "url(\"/images/games/playing-cards/".concat(this.deck, "/back.png\")") : "url(\"".concat((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('settings.games.playing_cards.back_image'), "\")");
    },
    deck: function deck() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('settings.games.playing_cards.deck');
    },
    handCards: function handCards() {
      var _this = this;
      return this.cards.map(function (card, i) {
        var suit = typeof card === 'string' ? card[0] : null;
        var value = typeof card === 'string' ? card[1] : null;
        return {
          card: card,
          hintView: _this.hintView.indexOf(i) !== -1,
          demo: _this.demo.indexOf(card) !== -1,
          suit: suit ? suit.toLowerCase() : null,
          value: value ? value.toLowerCase() : null,
          faceUp: !!card,
          positionX: _this.calcCardPosX(i),
          positionY: _this.calcCardPosY(i),
          frontImageUrl: _this.deck ? value && suit ? "url('/images/games/playing-cards/".concat(_this.deck, "/").concat(suit.toLowerCase()).concat(value.toLowerCase(), ".png')") : '' : "url(\"".concat((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('settings.games.playing_cards.front_image'), "\")"),
          backImageUrl: _this.deck ? "url(\"/images/games/playing-cards/".concat(_this.deck, "/back.png\")") : "url(\"".concat((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('settings.games.playing_cards.back_image'), "\")")
        };
      });
    },
    calcResultPosX: function calcResultPosX() {
      if (this.resultBottom) {
        return 3184 / 2 + this.positionX * ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount);
      } else {
        return 3184 / 2 - ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount) / 2 - 32 + this.positionX * ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount);
      }
    },
    calcResultPosY: function calcResultPosY() {
      if (this.resultBottom) {
        return 231 * this.positionY + 16 * this.positionY + 231 + 64;
      } else {
        return 231 * this.positionY + 16 * this.positionY + 231 / 2;
      }
    }
  },
  watch: {
    cards: function cards(newVal) {
      if (this.cardsCountLast === newVal.length) {
        this.sound(_audio_common_card_flip_wav__WEBPACK_IMPORTED_MODULE_3__["default"]);
      }
      if (newVal.length > this.cardsCountLast) this.cardsCountAdded += newVal.length - this.cardsCountLast;
      this.cardsCountLast = newVal.length;
    }
  },
  beforeDestroy: function beforeDestroy() {
    while (this.animations.length) this.animations.pop().kill();
  },
  methods: {
    calcCardPosX: function calcCardPosX(i) {
      if (this.fold) {
        return 3184 / 2 - ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount) / 2 + 60 * i + this.positionX * ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount);
      } else {
        return 3184 / 2 - ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount) / 2 + (162.8 + 16) * i + this.positionX * ((this.cardsCount - 1) * 16 + 162.8 * this.cardsCount);
      }
    },
    calcCardPosY: function calcCardPosY(i) {
      return 231 * this.positionY + 16 * this.positionY;
    },
    cardAnimationBeforeEnter: function cardAnimationBeforeEnter(el) {
      var index = parseInt(el.dataset.index);
      if (this.animationsSource[index]) {
        el.style.animationDuration = '0s';
        gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(el, {
          left: this.animationsSource[index].positionX,
          top: this.animationsSource[index].positionY,
          // rotateZ: 0,
          // scaleY: 1,
          // rotateX: 0,
          // rotateY: 180,
          z: 0
        });
        // eslint-disable-next-line eqeqeq
      } else if (el.dataset.face == 1) {
        el.style.animationDuration = '0s';
        gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(el, {
          left: 2144,
          top: -646,
          rotateZ: 40,
          scaleY: 1.1,
          rotateY: 180,
          rotateX: 180,
          z: 0,
          opacity: 0,
          animation: 'none'
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(el, {
          left: 2144,
          top: -646,
          rotateZ: 40,
          scaleY: 1.1,
          rotateY: 0,
          opacity: 0,
          z: 0
        });
      }
    },
    cardAnimationEnter: function cardAnimationEnter(el, done) {
      var _this2 = this;
      var positionX = parseFloat(el.dataset.positionX);
      var positionY = parseFloat(el.dataset.positionY);
      var index = parseInt(el.dataset.index);
      // const firstDelay = (index - (this.cards.length - this.cardsCountAdded)) * 0.35 + 0.1
      var firstDelay = (this.cardsCountAdded - (this.cards.length - index)) * 0.35 + 0.1;
      // console.log(firstDelay, index, this.cardsCountAdded, this.cards.length)
      var delay = 0.4;
      // const delay = 1
      if (this.animationsSource[index]) {
        this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
          duration: delay / 2,
          left: positionX,
          top: positionY,
          // rotateZ: 0,
          // scaleY: 1,
          // rotateX: 180,
          z: 0,
          ease: 'none',
          clearProps: 'transform',
          onComplete: function onComplete() {
            el.style.animationDuration = '';
            _this2.animations.shift();
            _this2.cardsCountAdded--;
            done();
          }
        }));
        this.$delete(this.animationsSource, index);
      } else {
        // onStart
        this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
          duration: 0.1,
          delay: firstDelay - 0.1,
          left: 1945,
          top: -421,
          rotateZ: 40,
          scaleY: 1,
          rotateY: 180,
          rotateX: 0,
          z: 0 + index * 2,
          ease: 'none',
          onStart: function onStart() {
            setTimeout(function () {
              return _this2.sound(_audio_common_card_deal_wav__WEBPACK_IMPORTED_MODULE_2__["default"]);
            }, 250);
            gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(el, {
              clearProps: 'opacity'
            });
          },
          onComplete: function onComplete() {
            return _this2.animations.shift();
          }
        }));
        // eslint-disable-next-line eqeqeq
        if (el.dataset.face == 1) {
          this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
            duration: delay / 4,
            delay: firstDelay,
            left: (1945 - positionX) / 2 + positionX,
            top: (-421 - positionY) / 2 + positionY,
            rotateZ: 0,
            scaleY: 1,
            rotateX: 0,
            rotateY: 180,
            z: 150 + index * 2,
            ease: 'none',
            onComplete: function onComplete() {
              return _this2.animations.shift();
            }
          }));
          this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
            duration: delay / 4,
            delay: firstDelay + delay / 4,
            left: positionX - (1945 - positionX) / 4,
            top: positionY - (-421 - positionY) / 4,
            rotateZ: 0,
            scaleY: 1,
            rotateX: 0,
            rotateY: 180,
            z: 150 + index * 2,
            ease: 'none',
            onComplete: function onComplete() {
              return _this2.animations.shift();
            }
          }));
          this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
            duration: delay / 4,
            delay: firstDelay + delay / 2,
            left: positionX,
            top: positionY,
            rotateZ: 0,
            scaleY: 1,
            rotateX: 0,
            rotateY: 180,
            z: 100 + index * 2,
            ease: 'none',
            clearProps: 'transform',
            onComplete: function onComplete() {
              el.style.animationDuration = '';
              _this2.animations.shift();
              _this2.cardsCountAdded--;
              done();
            }
          }));
        } else {
          this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
            duration: delay / 2,
            delay: firstDelay,
            left: positionX,
            top: positionY,
            rotateZ: 0,
            scaleX: 1,
            rotateY: 0,
            ease: 'none',
            clearProps: 'transform',
            onComplete: function onComplete() {
              _this2.animations.shift();
              _this2.cardsCountAdded--;
              done();
            }
          }));
        }
      }
    },
    cardAnimationLeave: function cardAnimationLeave(el, done) {
      var _this3 = this;
      gsap__WEBPACK_IMPORTED_MODULE_4__["default"].set(el, {
        transition: 0
      });
      var positionX = parseFloat(el.dataset.positionX);
      var positionY = parseFloat(el.dataset.positionY);
      var index = parseInt(el.dataset.index);
      if (this.animationsDisabled[index]) {
        this.$delete(this.animationsDisabled, index);
        done();
        return;
      }
      var delay = index * 100 / 1000 - 0.15 + 0.1 + 0.1 * this.positionY;
      // eslint-disable-next-line eqeqeq
      if (el.dataset.face == 1) {
        this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
          duration: 0.15,
          delay: delay += 0.15,
          left: positionX,
          top: positionY,
          rotateZ: 0,
          scaleY: 1,
          rotateY: 90,
          x: 130,
          z: 200,
          ease: 'none',
          onStart: function onStart() {
            // this.sound(flipSound)
          },
          onComplete: function onComplete() {
            return _this3.animations.shift();
          }
        }));
        this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
          duration: 0.15,
          delay: delay += 0.15,
          left: positionX,
          top: positionY,
          rotateZ: 0,
          scaleY: 1,
          rotateY: 0,
          x: 0,
          z: index * 5 * this.positionY,
          ease: 'none',
          onComplete: function onComplete() {
            return _this3.animations.shift();
          }
        }));
      }
      this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
        duration: 0.2,
        delay: delay += 0.15,
        left: 1100,
        top: -345.5,
        rotateZ: 0,
        scaleY: 1,
        rotateY: 0,
        x: 0,
        z: index * 5 * this.positionY,
        ease: 'none',
        onStart: function onStart() {
          _this3.sound(_audio_common_card_deal_wav__WEBPACK_IMPORTED_MODULE_2__["default"]);
        },
        onComplete: function onComplete() {
          return _this3.animations.shift();
        }
      }));
      this.animations.push(gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(el, {
        duration: 0.2,
        delay: delay += 0.2,
        left: 873,
        top: -689,
        rotateZ: -34,
        scaleY: 1,
        rotateY: 9,
        x: 0,
        z: index * 5 * this.positionY,
        ease: 'none',
        onComplete: function onComplete() {
          _this3.animations.shift();
          done();
        }
      }));
    },
    getCardPosition: function getCardPosition(index) {
      return {
        positionX: this.calcCardPosX(index),
        positionY: this.calcCardPosY(index)
      };
    },
    disableCardAnimation: function disableCardAnimation(index) {
      this.$set(this.animationsDisabled, index, 1);
    },
    setAnimationsSource: function setAnimationsSource(index, data) {
      this.$set(this.animationsSource, index, data);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameRoom.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameRoom.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");
/* harmony import */ var _components_FormParameter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/FormParameter */ "./resources/js/components/FormParameter.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _audio_common_user_joined_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/../audio/common/user-joined.wav */ "./resources/audio/common/user-joined.wav");
/* harmony import */ var _audio_common_user_left_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/../audio/common/user-left.wav */ "./resources/audio/common/user-left.wav");
/* harmony import */ var _components_BlockPreloader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/BlockPreloader */ "./resources/js/components/BlockPreloader.vue");
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
  components: {
    BlockPreloader: _components_BlockPreloader__WEBPACK_IMPORTED_MODULE_8__["default"],
    FormParameter: _components_FormParameter__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_Sound__WEBPACK_IMPORTED_MODULE_4__["default"]],
  props: {
    playing: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      room: null,
      rooms: null,
      players: null,
      game: null,
      forms: {
        joinOrLeave: new (vform__WEBPACK_IMPORTED_MODULE_2___default())({
          room_id: null
        }),
        create: new (vform__WEBPACK_IMPORTED_MODULE_2___default())({
          name: null,
          parameters: {}
        })
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapState)('broadcasting', ['echo'])), {}, {
    gamePackageId: function gamePackageId() {
      return this.$route.params.game;
    },
    parameters: function parameters() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.gamePackageId, ".parameters"));
    },
    playersCount: function playersCount() {
      return this.players ? this.players.length : 0;
    }
  }),
  watch: {
    room: function room(_room, roomBefore) {
      // join a room
      if (_room && !roomBefore) {
        this.subscribe(_room);
        // leave a room
      } else if (!_room && roomBefore) {
        this.unsubscribe(roomBefore);
        this.fetchRooms();
        this.$emit('exit');
      }
      this.$emit('room', {
        room: _room
      });
    },
    game: function game(_game, gameBefore) {
      if (_game && !gameBefore) {
        this.$emit('game', {
          game: _game
        });
      }
    },
    playersCount: function playersCount(_playersCount) {
      if (_playersCount === parseInt(this.room.parameters.players_count, 10)) {
        this.$emit('ready', {
          ready: true
        });
      } else {
        this.$emit('ready', {
          ready: false
        });
      }
    }
  },
  created: function created() {
    var _this = this;
    // it's important to wait for next tick,
    // because the game component can be initialized from beforeRouteUpdate() hook,
    // when the route parameters are not yet updated
    this.$nextTick(function () {
      _this.fetchRooms();
      if (_this.parameters) {
        _this.parameters.forEach(function (parameter) {
          _this.forms.create.parameters[parameter.id] = parameter["default"];
        });
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    // note that there is no access to this.$route (and hence gamePackageId computed property) in this hook
    this.unsubscribe(this.room);
    this.room = null;
    this.rooms = null;
    this.players = null;
  },
  methods: {
    fetchRooms: function fetchRooms() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/games/".concat(_this2.gamePackageId, "/rooms"));
            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              if (data.room) {
                _this2.room = data.room;
                _this2.forms.joinOrLeave.room_id = data.room.id;
                if (data.game) {
                  _this2.game = data.game;
                }
              } else {
                _this2.rooms = data.rooms;
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    joinRoom: function joinRoom() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$_this3$forms$j, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this3.forms.joinOrLeave.post("/api/games/".concat(_this3.gamePackageId, "/rooms/join"));
            case 2:
              _yield$_this3$forms$j = _context2.sent;
              data = _yield$_this3$forms$j.data;
              if (data.success) {
                _this3.room = data.room;
                _this3.rooms = null; // clear rooms list, so it needs to be fetched again when the player leaves the room
              }
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    leaveRoom: function leaveRoom() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$_this4$forms$j, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this4.forms.joinOrLeave.post("/api/games/".concat(_this4.gamePackageId, "/rooms/leave"));
            case 2:
              _yield$_this4$forms$j = _context3.sent;
              data = _yield$_this4$forms$j.data;
              if (data.success) {
                _this4.room = null;
              }
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    createRoom: function createRoom() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$_this5$forms$c, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this5.forms.create.post("/api/games/".concat(_this5.gamePackageId, "/rooms"));
            case 2:
              _yield$_this5$forms$c = _context4.sent;
              data = _yield$_this5$forms$c.data;
              _this5.room = data.room;
              _this5.forms.joinOrLeave.room_id = data.room.id;
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    subscribe: function subscribe(room) {
      var _this6 = this;
      if (!this.echo || !room) {
        return false;
      }
      this.echo.join("game.".concat(room.id))
      // currently joined players
      .here(function (players) {
        _this6.players = players;
        _this6.$emit('players', {
          players: players
        });
      })
      // new player joined
      .joining(function (player) {
        _this6.players.push(player);
        _this6.$emit('player-joined', {
          player: player
        });
        _this6.sound(_audio_common_user_joined_wav__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })
      // player left
      .leaving(function (player) {
        _this6.players.splice(_this6.players.findIndex(function (item) {
          return item.id === player.id;
        }), 1);
        _this6.$emit('player-left', {
          player: player
        });
        _this6.sound(_audio_common_user_left_wav__WEBPACK_IMPORTED_MODULE_7__["default"]);
      })
      // game event
      .listen('MultiroomMultiplayerGameAction', function (event) {
        _this6.$emit('event', {
          event: event
        });
      });
    },
    unsubscribe: function unsubscribe(room) {
      if (!this.echo || !room) {
        return false;
      }
      this.echo.leave("game.".concat(room.id));
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

/***/ "./packages/multiplayer-blackjack/resources/audio/deal.wav":
/*!*****************************************************************!*\
  !*** ./packages/multiplayer-blackjack/resources/audio/deal.wav ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/multiplayer-blackjack/deal.wav");

/***/ }),

/***/ "./packages/multiplayer-blackjack/resources/audio/flip.wav":
/*!*****************************************************************!*\
  !*** ./packages/multiplayer-blackjack/resources/audio/flip.wav ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/multiplayer-blackjack/flip.wav");

/***/ }),

/***/ "./packages/multiplayer-blackjack/resources/audio/lose.wav":
/*!*****************************************************************!*\
  !*** ./packages/multiplayer-blackjack/resources/audio/lose.wav ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/multiplayer-blackjack/lose.wav");

/***/ }),

/***/ "./packages/multiplayer-blackjack/resources/audio/push.wav":
/*!*****************************************************************!*\
  !*** ./packages/multiplayer-blackjack/resources/audio/push.wav ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/multiplayer-blackjack/push.wav");

/***/ }),

/***/ "./packages/multiplayer-blackjack/resources/audio/swoosh.wav":
/*!*******************************************************************!*\
  !*** ./packages/multiplayer-blackjack/resources/audio/swoosh.wav ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/multiplayer-blackjack/swoosh.wav");

/***/ }),

/***/ "./packages/multiplayer-blackjack/resources/audio/win.wav":
/*!****************************************************************!*\
  !*** ./packages/multiplayer-blackjack/resources/audio/win.wav ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/multiplayer-blackjack/win.wav");

/***/ }),

/***/ "./resources/audio/common/card-deal.wav":
/*!**********************************************!*\
  !*** ./resources/audio/common/card-deal.wav ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/common/card-deal.wav");

/***/ }),

/***/ "./resources/audio/common/card-flip.wav":
/*!**********************************************!*\
  !*** ./resources/audio/common/card-flip.wav ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/common/card-flip.wav");

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

/***/ "./resources/audio/common/user-joined.wav":
/*!************************************************!*\
  !*** ./resources/audio/common/user-joined.wav ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/common/user-joined.wav");

/***/ }),

/***/ "./resources/audio/common/user-left.wav":
/*!**********************************************!*\
  !*** ./resources/audio/common/user-left.wav ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/common/user-left.wav");

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=style&index=0&id=3d768301&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=style&index=0&id=3d768301&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#opponent-hands[data-v-3d768301] {\n  min-height: 160px;\n}\n.action-button[data-v-3d768301] {\n  width: 80px;\n}", ""]);
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes card-animation-49e76f53 {\n0% {\n    transition: 0;\n    transform-origin: left center;\n    transform: translateX(0) translateZ(0px) rotateY(0deg);\n}\n49.99999% {\n    transform-origin: left center;\n    transform: translateX(10%) translateZ(210px) rotateY(90deg);\n}\n50% {\n    transform-origin: right center;\n    transform: translateX(-90%) translateZ(40px) rotateY(90deg);\n}\n99% {\n    transition: 0;\n    transform-origin: right center;\n    transform: translateX(-100%) translateZ(0px) rotateY(180deg);\n}\n100% {\n    transform-origin: center;\n    transform: translateX(0px) translateZ(0px) rotateY(180deg);\n}\n}\n.hand[data-v-49e76f53], .hand-container[data-v-49e76f53] {\n  transform-style: preserve-3d;\n  transition: opacity 0.3s;\n}\n.playing-card-container[data-v-49e76f53] {\n  position: absolute;\n  transform-style: preserve-3d;\n  transition: 0.3s;\n  box-shadow: 0px 4px 11px -4px rgba(0, 0, 0, 0.5);\n}\n.playing-card-container.deck-symbols .playing-card .front[data-v-49e76f53] {\n  background-color: var(--v-secondary-lighten1);\n}\n.playing-card-container.deck-symbols .playing-card .back[data-v-49e76f53] {\n  background-color: var(--v-primary-darken4);\n}\n.playing-card-container.hint-view[data-v-49e76f53] {\n  transform: translateX(0px) translateY(-50px) translateZ(100px) rotateX(-30deg);\n  box-shadow: 0px 38px 27px -10px rgba(0, 0, 0, 0.5);\n}\n.playing-card-container.face-up[data-v-49e76f53] {\n  animation: card-animation-49e76f53 0.3s linear;\n  transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(180deg);\n}\n.playing-card-container.face-up[data-v-49e76f53]:after {\n  content: \" \";\n  position: absolute;\n  left: -8px;\n  right: -8px;\n  top: -8px;\n  bottom: -8px;\n  background: rgba(255, 255, 127, 0);\n  border-radius: 14px;\n  transition: 0.3s;\n  z-index: -1;\n}\n.playing-card-container.face-up.demo[data-v-49e76f53] {\n  transform: translateX(0px) translateY(-50px) translateZ(100px) rotateX(-15deg) rotateY(180deg);\n  box-shadow: 0px 38px 27px -10px rgba(0, 0, 0, 0.5);\n}\n.playing-card-container.face-up.demo[data-v-49e76f53]:after {\n  background: rgba(255, 255, 127, 0.75);\n}\n.playing-card-container.hand-card-animation-enter-active[data-v-49e76f53], .playing-card-container.hand-card-animation-leave-active[data-v-49e76f53] {\n  box-shadow: 20px 20px 27px -10px rgba(0, 0, 0, 0.5);\n  transition: 0.05s;\n}\n.playing-card-container.hand-card-animation-enter-active.face-up[data-v-49e76f53], .playing-card-container.hand-card-animation-leave-active.face-up[data-v-49e76f53] {\n  box-shadow: 30px 30px 30px -15px rgba(0, 0, 0, 0.5);\n}\n.playing-card-container .playing-card[data-v-49e76f53] {\n  position: relative;\n  width: 162.8px;\n  height: 231px;\n  transform-style: preserve-3d;\n}\n.playing-card-container .playing-card .front[data-v-49e76f53], .playing-card-container .playing-card .back[data-v-49e76f53] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  backface-visibility: hidden;\n}\n.playing-card-container .playing-card .front[data-v-49e76f53] {\n  transform: rotateY(180deg);\n}\n.playing-card-container .playing-card.clickable[data-v-49e76f53] {\n  cursor: pointer;\n}\n.result[data-v-49e76f53] {\n  position: absolute;\n  transform: translate(-100%, -50%);\n  font-size: 39px;\n  font-family: arial;\n  border-radius: 63px;\n  overflow: hidden;\n}\n.result.bottom[data-v-49e76f53] {\n  transform: translate(-50%, -50%);\n}\n.result div.bg[data-v-49e76f53] {\n  position: absolute;\n  width: 3184px;\n  height: 1440px;\n  right: calc(-1794.8px);\n  top: calc(-712px);\n}\n.result div.value[data-v-49e76f53] {\n  mix-blend-mode: color-dodge;\n  display: block;\n  background-color: rgba(100, 100, 100, 0.5);\n  opacity: 0.7;\n  border-radius: 63px;\n  padding: 10px 50px;\n  color: black;\n  font-weight: bold;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameRoom.vue?vue&type=style&index=0&id=d4798d74&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameRoom.vue?vue&type=style&index=0&id=d4798d74&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (min-width: 960px) {\n.border-left[data-v-d4798d74] {\n    border-left: 1px solid grey;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=style&index=0&id=3d768301&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=style&index=0&id=3d768301&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_3d768301_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=3d768301&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=style&index=0&id=3d768301&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_3d768301_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_3d768301_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_style_index_0_id_49e76f53_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_style_index_0_id_49e76f53_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_style_index_0_id_49e76f53_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameRoom.vue?vue&type=style&index=0&id=d4798d74&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameRoom.vue?vue&type=style&index=0&id=d4798d74&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameRoom_vue_vue_type_style_index_0_id_d4798d74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GameRoom.vue?vue&type=style&index=0&id=d4798d74&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameRoom.vue?vue&type=style&index=0&id=d4798d74&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameRoom_vue_vue_type_style_index_0_id_d4798d74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameRoom_vue_vue_type_style_index_0_id_d4798d74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./packages/multiplayer-blackjack/resources/js/pages/game.vue":
/*!********************************************************************!*\
  !*** ./packages/multiplayer-blackjack/resources/js/pages/game.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_vue_vue_type_template_id_3d768301_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.vue?vue&type=template&id=3d768301&scoped=true& */ "./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=template&id=3d768301&scoped=true&");
/* harmony import */ var _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.vue?vue&type=script&lang=js& */ "./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=script&lang=js&");
/* harmony import */ var _game_vue_vue_type_style_index_0_id_3d768301_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.vue?vue&type=style&index=0&id=3d768301&lang=scss&scoped=true& */ "./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=style&index=0&id=3d768301&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _game_vue_vue_type_template_id_3d768301_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _game_vue_vue_type_template_id_3d768301_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3d768301",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/multiplayer-blackjack/resources/js/pages/game.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FormParameter.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/FormParameter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormParameter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormParameter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormParameter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormParameter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/CardGame/Hand.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Hand.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Hand.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/GameRoom.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Games/GameRoom.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GameRoom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameRoom.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=style&index=0&id=3d768301&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=style&index=0&id=3d768301&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_3d768301_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=3d768301&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=style&index=0&id=3d768301&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_style_index_0_id_29e85514_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_style_index_0_id_49e76f53_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=style&index=0&id=49e76f53&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/components/Games/GameRoom.vue?vue&type=style&index=0&id=d4798d74&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Games/GameRoom.vue?vue&type=style&index=0&id=d4798d74&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameRoom_vue_vue_type_style_index_0_id_d4798d74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GameRoom.vue?vue&type=style&index=0&id=d4798d74&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameRoom.vue?vue&type=style&index=0&id=d4798d74&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=template&id=3d768301&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=template&id=3d768301&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js");



var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex flex-column fill-height"
  }, [_c("game-room", {
    attrs: {
      playing: _vm.playing
    },
    on: {
      room: function room($event) {
        return _vm.onRoomChange($event.room);
      },
      game: function game($event) {
        return _vm.onGame($event.game);
      },
      event: function event($event) {
        return _vm.onEvent($event.event);
      },
      players: function players($event) {
        return _vm.onPlayers($event.players);
      },
      "player-joined": function playerJoined($event) {
        return _vm.onPlayerJoined($event.player);
      },
      "player-left": function playerLeft($event) {
        return _vm.onPlayerLeft($event.player);
      },
      ready: function ready($event) {
        _vm.ready = $event.ready;
      },
      exit: _vm.onExit
    }
  }), _vm._v(" "), _vm.room ? [_c("div", {
    staticClass: "d-flex justify-space-around mt-2",
    attrs: {
      id: "opponent-hands"
    }
  }, _vm._l(_vm.opponents, function (opponent, i) {
    return _c("hand", {
      key: i,
      attrs: {
        cards: opponent.cards,
        score: opponent.score,
        result: opponent.score > 0 && !_vm.playing ? _vm.resultMessage(opponent) : opponent.result,
        "result-class": _vm.resultClass(opponent),
        bet: opponent.bet,
        win: opponent.win
      },
      scopedSlots: _vm._u([{
        key: "title",
        fn: function fn() {
          return [_c("div", {
            staticClass: "font-weight-thin text-center mb-2 ml-n10 ml-lg-0"
          }, [_vm._v("\n            " + _vm._s(opponent.name) + "\n            "), _c(vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_0__["default"], {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: _vm.isOpponentTurn(opponent),
              expression: "isOpponentTurn(opponent)"
            }],
            attrs: {
              rotate: 360,
              size: 25,
              width: 2,
              value: _vm.isOpponentTurn(opponent) ? Math.round(100 * (opponent.action_end - _vm.time) / _vm.actionDuration) : 0,
              color: "primary"
            }
          }, [_vm._v("\n              " + _vm._s(opponent.action_end - _vm.time) + "\n            ")])], 1)];
        },
        proxy: true
      }], null, true)
    });
  }), 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-center fill-height align-center"
  }, [_vm.player.cards ? _c("hand", {
    attrs: {
      cards: _vm.player.cards,
      score: _vm.player.score,
      result: _vm.player.score > 0 && !_vm.playing ? _vm.resultMessage(_vm.player) : _vm.player.result,
      "result-class": _vm.resultClass(_vm.player),
      bet: _vm.player.bet,
      win: _vm.player.win
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-center align-center flex-wrap"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    staticClass: "mx-1 my-2 my-lg-0 action-button",
    attrs: {
      disabled: _vm.isActionDisabled("stand"),
      loading: _vm.action === "stand",
      small: ""
    },
    on: {
      click: function click($event) {
        return _vm.doAction("stand");
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Stand")) + "\n      ")]), _vm._v(" "), _c(vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_0__["default"], {
    staticClass: "mx-2",
    attrs: {
      rotate: 360,
      size: 40,
      width: 3,
      value: _vm.isPlayerTurn ? Math.round(100 * (_vm.player.action_end - _vm.time) / _vm.actionDuration) : 0,
      color: _vm.isPlayerTurn ? _vm.time < _vm.player.action_end - _vm.finalHitThreshold ? "primary" : "error" : "secondary"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.isPlayerTurn ? _vm.player.action_end - _vm.time : 0) + "\n      ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    staticClass: "mx-1 my-2 my-lg-0 action-button",
    attrs: {
      disabled: _vm.isActionDisabled("hit"),
      loading: _vm.action === "hit",
      small: ""
    },
    on: {
      click: function click($event) {
        return _vm.doAction("hit");
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Hit")) + "\n      ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-center my-2"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      color: "primary",
      loading: _vm.action === "play",
      disabled: !_vm.ready || !_vm.balanceIsSufficient || _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.doAction("play");
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Play")) + "\n      ")]), _vm._v(" "), _vm.cancelAllowed ? _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    staticClass: "ml-3",
    attrs: {
      color: "red",
      loading: _vm.action === "cancel",
      disabled: !!_vm.action
    },
    on: {
      click: function click($event) {
        return _vm.doAction("cancel");
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Cancel")) + "\n      ")]) : _vm._e()], 1)] : _vm._e()], 2);
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

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormParameter.vue?vue&type=template&id=2abdd46a&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormParameter.vue?vue&type=template&id=2abdd46a& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/VTextarea.js");





var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.parameter.type === "input" ? _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_0__["default"], {
    "class": {
      "mb-5": !!_vm.parameter.description
    },
    attrs: {
      value: _vm.value,
      label: _vm.$t(_vm.parameter.name),
      error: _vm.form.errors.has(_vm.formKey + "." + _vm.parameter.id),
      "error-messages": _vm.form.errors.get(_vm.formKey + "." + _vm.parameter.id),
      hint: _vm.parameter.description,
      "persistent-hint": !!_vm.parameter.description,
      disabled: _vm.disabled,
      suffix: _vm.parameter.suffix || "",
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearErrors($event, _vm.formKey, _vm.parameter.id);
      },
      change: _vm.change
    }
  }) : _vm.parameter.type === "textarea" ? _c(vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "class": {
      "mb-5": !!_vm.parameter.description
    },
    attrs: {
      value: _vm.value,
      label: _vm.$t(_vm.parameter.name),
      error: _vm.form.errors.has(_vm.formKey + "." + _vm.parameter.id),
      "error-messages": _vm.form.errors.get(_vm.formKey + "." + _vm.parameter.id),
      hint: _vm.parameter.description,
      "persistent-hint": !!_vm.parameter.description,
      disabled: _vm.disabled,
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearErrors($event, _vm.formKey, _vm.parameter.id);
      },
      change: _vm.change
    }
  }) : _vm.parameter.type === "switch" ? _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "class": {
      "mb-5": !!_vm.parameter.description
    },
    attrs: {
      "input-value": _vm.value,
      label: _vm.$t(_vm.parameter.name),
      error: _vm.form.errors.has(_vm.formKey + "." + _vm.parameter.id),
      "error-messages": _vm.form.errors.get(_vm.formKey + "." + _vm.parameter.id),
      hint: _vm.parameter.description,
      "persistent-hint": !!_vm.parameter.description,
      disabled: _vm.disabled,
      outlined: "",
      "false-value": 0,
      "true-value": 1,
      color: "primary"
    },
    on: {
      change: function change($event) {
        _vm.clearErrors($event, _vm.formKey, _vm.parameter.id);
        _vm.change($event);
      }
    }
  }) : _vm.parameter.type === "select" ? _c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      value: _vm.value,
      items: _vm.parameter.options,
      label: _vm.$t(_vm.parameter.name),
      multiple: _vm.parameter.multiple === true,
      error: _vm.form.errors.has(_vm.formKey + "." + _vm.parameter.id),
      "error-messages": _vm.form.errors.get(_vm.formKey + "." + _vm.parameter.id),
      hint: _vm.parameter.description,
      "persistent-hint": !!_vm.parameter.description,
      disabled: _vm.disabled,
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearErrors($event, _vm.formKey, _vm.parameter.id);
      },
      change: _vm.change
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=template&id=49e76f53&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=template&id=49e76f53&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "hand-container",
    style: _vm.opacity < 1 ? "opacity: ".concat(_vm.opacity, ";") : ""
  }, [_c("transition-group", {
    staticClass: "hand",
    attrs: {
      tag: "div",
      name: "hand-card-animation"
    },
    on: {
      "before-enter": _vm.cardAnimationBeforeEnter,
      enter: _vm.cardAnimationEnter,
      leave: _vm.cardAnimationLeave
    }
  }, [_vm._l(_vm.handCards, function (card, i) {
    return [_c("div", {
      key: i,
      staticClass: "playing-card-container",
      "class": "deck-".concat(_vm.deck || "symbols").concat(card.faceUp ? " face-up" : "").concat(card.demo ? " demo" : "").concat(card.hintView ? " hint-view" : ""),
      style: "left: ".concat(card.positionX, "px; top: ").concat(card.positionY, "px;"),
      attrs: {
        "data-index": i,
        "data-face": card.faceUp ? 1 : 0,
        "data-position-x": card.positionX,
        "data-position-y": card.positionY
      }
    }, [_c("div", {
      staticClass: "playing-card"
    }, [_c("div", {
      staticClass: "front rounded",
      style: {
        backgroundImage: card.frontImageUrl
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "back rounded",
      style: {
        backgroundImage: card.backImageUrl
      }
    })])])];
  })], 2), _vm._v(" "), _vm.result.length ? [_c("div", {
    "class": "result".concat(_vm.resultBottom ? " bottom" : ""),
    style: "left: ".concat(_vm.calcResultPosX, "px; top: ").concat(_vm.calcResultPosY, "px;")
  }, [_c("div", {
    staticClass: "bg",
    style: "background-image: url(/images/games/card-game-ui/table-".concat(_vm.deck, ".jpg);right: calc(-1 * (3184px - ").concat(_vm.calcResultPosX, "px));")
  }), _vm._v(" "), _c("div", {
    staticClass: "value"
  }, [_vm._v("\n        " + _vm._s(_vm.result) + "\n      ")])])] : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameRoom.vue?vue&type=template&id=d4798d74&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameRoom.vue?vue&type=template&id=d4798d74&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VSpacer.js");
/* harmony import */ var vuetify_lib_components_VSystemBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VSystemBar */ "./node_modules/vuetify/lib/components/VSystemBar/VSystemBar.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/VToolbar.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");















var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    "class": {
      "d-flex justify-center fill-height align-center": !_vm.room
    }
  }, [_vm.room ? _c(vuetify_lib_components_VSystemBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      color: "primary",
      height: "35"
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], [_vm._v("mdi-map-marker")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.room.name))]), _vm._v(" "), _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    staticClass: "ml-2"
  }, [_vm._v("mdi-cash")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.room.parameters.bet))]), _vm._v(" "), _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    staticClass: "ml-2"
  }, [_vm._v("mdi-account-multiple")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("{0}/{1}", [_vm.playersCount, _vm.room.parameters.players_count])))]), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      icon: "",
      small: "",
      disabled: _vm.forms.joinOrLeave.busy || _vm.playing
    },
    on: {
      click: _vm.leaveRoom
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], [_vm._v("mdi-logout-variant")])], 1)], 1) : [_vm.rooms ? _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    staticClass: "align-self-start",
    attrs: {
      fluid: ""
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attrs: {
      align: "center",
      justify: "center"
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      cols: "12",
      md: "8"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["default"], [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_8__["default"], [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_9__.VToolbarTitle, [_vm._v("\n                " + _vm._s(_vm.$t("Game rooms")) + "\n              ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_10__.VCardText, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    staticClass: "pr-md-5",
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("h2", {
    staticClass: "headline mb-5"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Join an existing room")) + "\n                  ")]), _vm._v(" "), _vm.rooms.length ? [_c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.joinRoom.apply(null, arguments);
      }
    }
  }, [_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__["default"], {
    attrs: {
      items: _vm.rooms,
      "item-value": "id",
      "item-text": function itemText(room) {
        return room.name + " - " + _vm.$t("{0}/{1} players", [room.players_count, room.parameters.players_count]);
      },
      error: _vm.forms.joinOrLeave.errors.has("room_id"),
      "error-messages": _vm.forms.joinOrLeave.errors.get("room_id"),
      label: _vm.$t("Game room"),
      outlined: "",
      disabled: _vm.forms.joinOrLeave.busy
    },
    model: {
      value: _vm.forms.joinOrLeave.room_id,
      callback: function callback($$v) {
        _vm.$set(_vm.forms.joinOrLeave, "room_id", $$v);
      },
      expression: "forms.joinOrLeave.room_id"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      type: "submit",
      color: "primary",
      disabled: !_vm.forms.joinOrLeave.room_id || _vm.forms.joinOrLeave.busy,
      loading: _vm.forms.joinOrLeave.busy
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Join")) + "\n                      ")])], 1)] : _c("p", [_vm._v("\n                    " + _vm._s(_vm.$t("There are no rooms available to join")) + "\n                  ")])], 2), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    staticClass: "pl-md-5 border-left",
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("h2", {
    staticClass: "headline mb-5"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Create a new room")) + "\n                  ")]), _vm._v(" "), _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.createRoom.apply(null, arguments);
      }
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    attrs: {
      label: _vm.$t("Name"),
      rules: [_vm.validationRequired, function (v) {
        return _vm.validationMinLength(v, 3);
      }, function (v) {
        return _vm.validationMaxLength(v, 50);
      }],
      error: _vm.forms.create.errors.has("name"),
      "error-messages": _vm.forms.create.errors.get("name"),
      outlined: "",
      disabled: _vm.forms.create.busy
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "name", _vm.forms.create);
      }
    },
    model: {
      value: _vm.forms.create.name,
      callback: function callback($$v) {
        _vm.$set(_vm.forms.create, "name", $$v);
      },
      expression: "forms.create.name"
    }
  }), _vm._v(" "), _vm._l(_vm.parameters, function (parameter) {
    return _c("form-parameter", {
      key: parameter.id,
      attrs: {
        parameter: parameter,
        form: _vm.forms.create,
        "form-key": "parameters",
        disabled: _vm.forms.create.busy
      },
      model: {
        value: _vm.forms.create.parameters[parameter.id],
        callback: function callback($$v) {
          _vm.$set(_vm.forms.create.parameters, parameter.id, $$v);
        },
        expression: "forms.create.parameters[parameter.id]"
      }
    });
  }), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      type: "submit",
      color: "primary",
      disabled: !_vm.forms.create.name || _vm.forms.create.busy,
      loading: _vm.forms.create.busy
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Create")) + "\n                    ")])], 2)], 1)], 1)], 1)], 1)], 1)], 1)], 1) : _c("block-preloader")]], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=template&id=3d768301&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=template&id=3d768301&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_3d768301_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_3d768301_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_3d768301_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=template&id=3d768301&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-blackjack/resources/js/pages/game.vue?vue&type=template&id=3d768301&scoped=true&");


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

/***/ "./resources/js/components/FormParameter.vue?vue&type=template&id=2abdd46a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/FormParameter.vue?vue&type=template&id=2abdd46a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormParameter_vue_vue_type_template_id_2abdd46a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormParameter_vue_vue_type_template_id_2abdd46a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormParameter_vue_vue_type_template_id_2abdd46a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormParameter.vue?vue&type=template&id=2abdd46a& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormParameter.vue?vue&type=template&id=2abdd46a&");


/***/ }),

/***/ "./resources/js/components/Games/CardGame/Hand.vue?vue&type=template&id=49e76f53&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Games/CardGame/Hand.vue?vue&type=template&id=49e76f53&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_template_id_49e76f53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_template_id_49e76f53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Hand_vue_vue_type_template_id_49e76f53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Hand.vue?vue&type=template&id=49e76f53&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/CardGame/Hand.vue?vue&type=template&id=49e76f53&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/GameRoom.vue?vue&type=template&id=d4798d74&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Games/GameRoom.vue?vue&type=template&id=d4798d74&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameRoom_vue_vue_type_template_id_d4798d74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameRoom_vue_vue_type_template_id_d4798d74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameRoom_vue_vue_type_template_id_d4798d74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GameRoom.vue?vue&type=template&id=d4798d74&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameRoom.vue?vue&type=template&id=d4798d74&scoped=true&");


/***/ })

}]);