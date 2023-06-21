"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/heads-or-tails-resources-js-pages-game"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cannon */ "./node_modules/cannon/build/cannon.js");
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cannon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _plugins_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/plugins/format */ "./resources/js/plugins/format.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _mixins_Game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/mixins/Game */ "./resources/js/mixins/Game.vue");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var _audio_common_click_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/../audio/common/click.wav */ "./resources/audio/common/click.wav");
/* harmony import */ var packages_heads_or_tails_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! packages/heads-or-tails/resources/audio/win.wav */ "./packages/heads-or-tails/resources/audio/win.wav");
/* harmony import */ var packages_heads_or_tails_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! packages/heads-or-tails/resources/audio/lose.wav */ "./packages/heads-or-tails/resources/audio/lose.wav");
/* harmony import */ var packages_heads_or_tails_resources_audio_hit1_wav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! packages/heads-or-tails/resources/audio/hit1.wav */ "./packages/heads-or-tails/resources/audio/hit1.wav");
/* harmony import */ var packages_heads_or_tails_resources_audio_hit2_wav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! packages/heads-or-tails/resources/audio/hit2.wav */ "./packages/heads-or-tails/resources/audio/hit2.wav");
/* harmony import */ var _components_Games_PlayControls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/components/Games/PlayControls */ "./resources/js/components/Games/PlayControls.vue");
/* harmony import */ var _components_Games_GameMessage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/components/Games/GameMessage */ "./resources/js/components/Games/GameMessage.vue");
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
  name: 'HeadsOrTails',
  components: {
    GameMessage: _components_Games_GameMessage__WEBPACK_IMPORTED_MODULE_15__["default"],
    PlayControls: _components_Games_PlayControls__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_Game__WEBPACK_IMPORTED_MODULE_6__["default"], _mixins_Sound__WEBPACK_IMPORTED_MODULE_7__["default"]],
  data: function data() {
    return {
      clickSound: _audio_common_click_wav__WEBPACK_IMPORTED_MODULE_9__["default"],
      winSound: packages_heads_or_tails_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_10__["default"],
      loseSound: packages_heads_or_tails_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_11__["default"],
      hit1Sound: packages_heads_or_tails_resources_audio_hit1_wav__WEBPACK_IMPORTED_MODULE_12__["default"],
      hit2Sound: packages_heads_or_tails_resources_audio_hit2_wav__WEBPACK_IMPORTED_MODULE_13__["default"],
      formIsValid: true,
      loading: false,
      playing: false,
      is_ready: false,
      tossBet: 0,
      tossResult: null,
      result: null,
      message: null,
      animation: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_16__.mapState)('auth', ['account'])), {}, {
    houseEdge: function houseEdge() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_3__.config)('heads-or-tails.house_edge');
    },
    headsImageUrl: function headsImageUrl() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_3__.config)('heads-or-tails.images.heads');
    },
    tailsImageUrl: function tailsImageUrl() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_3__.config)('heads-or-tails.images.tails');
    },
    edgeImageUrl: function edgeImageUrl() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_3__.config)('heads-or-tails.images.edge');
    },
    cameraAngle: function cameraAngle() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_3__.config)('heads-or-tails.animation.camera_angle');
    },
    cameraPosition: function cameraPosition() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_3__.config)('heads-or-tails.animation.camera_position');
    },
    throwHeight: function throwHeight() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_3__.config)('heads-or-tails.animation.throw_height');
    }
  }),
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var ambient, directionalLight, light, barrier, barrierCorner, resizeImage, coinSides, sideTexture, sidesMat, sidesMesh, quat, translation;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            window.hot = _this;
            _this.animation = {
              pos: null,
              velocity: null,
              container: null,
              scene: null,
              camera: null,
              renderer: null,
              world: null,
              floorWidth: 0,
              floorHeight: 0,
              width: _this.$refs.animation.offsetWidth,
              height: _this.$refs.animation.offsetHeight,
              aspect: _this.$refs.animation.offsetWidth / _this.$refs.animation.offsetHeight,
              camera_angle: _this.cameraAngle,
              camera_position: 100,
              near: 0.01,
              far: 10000,
              animationStep: 0,
              lastSound: 0,
              isAnimation: false,
              coin: null,
              coin_body: null,
              coin_radius: 5,
              coin_height: 0.3,
              coin_top: null,
              coin_bottom: null,
              coin_top_texture: null,
              coin_bottom_texture: null,
              coin_side_texture: null,
              result: null,
              frames: [],
              animate: function animate() {
                if (_this.animation.isThrought) {
                  if (_this.animation.frames.length > _this.animation.animationStep) {
                    _this.animation.coin.position.copy(_this.animation.frames[_this.animation.animationStep].position);
                    _this.animation.coin.quaternion.copy(_this.animation.frames[_this.animation.animationStep].quaternion);
                    if (_this.animation.frames[_this.animation.animationStep].is_contact && _this.animation.lastSound < _this.animation.animationStep) {
                      if (_this.animation.lastSound === 0) _this.sound(_this.hit1Sound);else _this.sound(_this.hit2Sound);
                      _this.animation.lastSound = _this.animation.animationStep + 5;
                    }
                    _this.animation.animationStep++;
                  } else {
                    _this.updateUserAccountBalance(_this.result.balance);
                    _this.sound(_this.result.sound);
                    _this.message = _this.result.message;
                    _this.animation.animationStep = 0;
                    _this.animation.frames = [];
                    _this.animation.lastSound = 0;
                    _this.animation.isThrought = false;
                    _this.result = null;
                    _this.playing = false;
                  }
                }
                _this.animation.renderer.render(_this.animation.scene, _this.animation.camera);
                _this.animation.coin.position.copy(_this.animation.coin_body.position);
                _this.animation.coin.quaternion.copy(_this.animation.coin_body.quaternion);
                requestAnimationFrame(_this.animation.animate);
              }
            };
            _this.animation.scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
            _this.animation.camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(_this.animation.camera_angle, _this.animation.aspect, _this.animation.near, _this.animation.far);
            _this.animation.scene.add(_this.animation.camera);
            _this.animation.camera.position.set(0, _this.animation.camera_position, 100);
            _this.animation.camera.lookAt(0, 0, _this.cameraPosition);
            _this.animation.renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({
              antialias: true,
              alpha: true
            });
            _this.animation.renderer.setClearColor(0x000000, 0);
            _this.animation.renderer.setSize(_this.animation.width * 2, _this.animation.height * 2);
            _this.animation.renderer.shadowMap.enabled = true;
            _this.animation.renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_1__.PCFSoftShadowMap;
            _this.animation.container = _this.$refs.animation;
            _this.animation.container.appendChild(_this.animation.renderer.domElement);
            ambient = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight('#ffffff', 0.5);
            _this.animation.scene.add(ambient);
            directionalLight = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight('#ffffff', 0.5);
            directionalLight.position.x = -1000;
            directionalLight.position.y = 1000;
            directionalLight.position.z = 1000;
            _this.animation.scene.add(directionalLight);
            light = new three__WEBPACK_IMPORTED_MODULE_1__.SpotLight(0xefdfd5, 0.75);
            light.position.y = 60;
            light.target.position.set(0, 0, 0);
            light.castShadow = true;
            light.shadow.camera.near = 50;
            light.shadow.camera.far = 210;
            light.shadow.mapSize.width = 1024;
            light.shadow.mapSize.height = 1024;
            _this.animation.scene.add(light);
            _this.animation.floorHeight = 2 * Math.tan(_this.animation.camera.fov * Math.PI / 180 / 2) * Math.abs(_this.animation.camera.position.y);
            _this.animation.floorWidth = _this.animation.floorHeight * _this.animation.camera.aspect;
            _this.animation.world = new cannon__WEBPACK_IMPORTED_MODULE_0__.World();
            _this.animation.world.gravity.set(0, -9.82 * 10, 0);
            _this.animation.world.broadphase = new cannon__WEBPACK_IMPORTED_MODULE_0__.NaiveBroadphase();
            _this.animation.world.solver.iterations = 16;
            _this.animation.coinBodyMaterial = new cannon__WEBPACK_IMPORTED_MODULE_0__.Material();
            _this.animation.floorBodyMaterial = new cannon__WEBPACK_IMPORTED_MODULE_0__.Material();
            _this.animation.barrierBodyMaterial = new cannon__WEBPACK_IMPORTED_MODULE_0__.Material();
            _this.animation.world.addContactMaterial(new cannon__WEBPACK_IMPORTED_MODULE_0__.ContactMaterial(_this.animation.floorBodyMaterial, _this.animation.coinBodyMaterial, {
              friction: 0.001,
              restitution: 0.5
            }));
            _this.animation.world.addContactMaterial(new cannon__WEBPACK_IMPORTED_MODULE_0__.ContactMaterial(_this.animation.barrierBodyMaterial, _this.animation.coinBodyMaterial, {
              friction: 0.001,
              restitution: 0.5
            }));
            // Floor
            _this.animation.floorBody = new cannon__WEBPACK_IMPORTED_MODULE_0__.Body({
              mass: 0,
              shape: new cannon__WEBPACK_IMPORTED_MODULE_0__.Plane(),
              material: _this.animation.floorBodyMaterial
            });
            _this.animation.floorBody.quaternion.setFromAxisAngle(new cannon__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 0, 0), -Math.PI / 2);
            _this.animation.world.add(_this.animation.floorBody);
            // Barrier
            barrierCorner = 0.85;
            barrier = new cannon__WEBPACK_IMPORTED_MODULE_0__.Body({
              mass: 0,
              shape: new cannon__WEBPACK_IMPORTED_MODULE_0__.Plane(),
              material: _this.animation.barrierBodyMaterial
            });
            barrier.quaternion.setFromAxisAngle(new cannon__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0), -Math.PI);
            barrier.position.set(0, 0, _this.animation.floorHeight * barrierCorner / 2 - 5);
            _this.animation.world.add(barrier);
            barrier = new cannon__WEBPACK_IMPORTED_MODULE_0__.Body({
              mass: 0,
              shape: new cannon__WEBPACK_IMPORTED_MODULE_0__.Plane(),
              material: _this.animation.barrierBodyMaterial
            });
            barrier.quaternion.setFromAxisAngle(new cannon__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0), 0);
            barrier.position.set(0, 0, -(_this.animation.floorHeight * barrierCorner / 2) - 5);
            _this.animation.world.add(barrier);
            window.barrier = barrier;
            window.CANNON = cannon__WEBPACK_IMPORTED_MODULE_0__;
            barrier = new cannon__WEBPACK_IMPORTED_MODULE_0__.Body({
              mass: 0,
              shape: new cannon__WEBPACK_IMPORTED_MODULE_0__.Plane(),
              material: _this.animation.barrierBodyMaterial
            });
            barrier.quaternion.setFromAxisAngle(new cannon__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0), -Math.PI / 2);
            barrier.position.set(_this.animation.floorWidth * barrierCorner / 2, 0, -5);
            _this.animation.world.add(barrier);
            barrier = new cannon__WEBPACK_IMPORTED_MODULE_0__.Body({
              mass: 0,
              shape: new cannon__WEBPACK_IMPORTED_MODULE_0__.Plane(),
              material: _this.animation.barrierBodyMaterial
            });
            barrier.quaternion.setFromAxisAngle(new cannon__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0), Math.PI / 2);
            barrier.position.set(-(_this.animation.floorWidth * barrierCorner / 2), 0, -5);
            _this.animation.world.add(barrier);
            // Coin
            resizeImage = function resizeImage(image) {
              var width = three__WEBPACK_IMPORTED_MODULE_1__.Math.floorPowerOfTwo(image.width * 2);
              var height = three__WEBPACK_IMPORTED_MODULE_1__.Math.floorPowerOfTwo(image.height * 2);
              var canvas = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
              canvas.width = width;
              canvas.height = height;
              var context = canvas.getContext('2d');
              context.drawImage(image, 0, 0, width, height);
              return canvas;
            };
            _context.next = 66;
            return new Promise(function (resolve, reject) {
              var img = new Image();
              img.onload = function () {
                return resolve(resizeImage(img));
              };
              img.onerror = reject;
              img.src = _this.headsImageUrl;
            });
          case 66:
            _this.animation.coin_top_texture = _context.sent;
            _context.next = 69;
            return new Promise(function (resolve, reject) {
              var img = new Image();
              img.onload = function () {
                return resolve(resizeImage(img));
              };
              img.onerror = reject;
              img.src = _this.tailsImageUrl;
            });
          case 69:
            _this.animation.coin_bottom_texture = _context.sent;
            _context.next = 72;
            return new Promise(function (resolve, reject) {
              var img = new Image();
              img.onload = function () {
                return resolve(resizeImage(img));
              };
              img.onerror = reject;
              img.src = _this.edgeImageUrl;
            });
          case 72:
            _this.animation.coin_side_texture = _context.sent;
            _this.animation.coin = new three__WEBPACK_IMPORTED_MODULE_1__.Object3D();
            coinSides = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(_this.animation.coin_radius, _this.animation.coin_radius, _this.animation.coin_height, 100, 1, true);
            sideTexture = new three__WEBPACK_IMPORTED_MODULE_1__.Texture(_this.animation.coin_side_texture);
            sideTexture.needsUpdate = true;
            sidesMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
              map: sideTexture
            });
            sidesMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(coinSides, sidesMat);
            _this.animation.coin.add(sidesMesh);
            _this.animation.coin_swap = function (swap) {
              if (swap === undefined) swap = false;
              if (_this.animation.coin_top !== null) _this.animation.coin.add(_this.animation.coin_top);
              var capTopGeo = new three__WEBPACK_IMPORTED_MODULE_1__.CircleGeometry(_this.animation.coin_radius, 100);
              var capTopTexture = new three__WEBPACK_IMPORTED_MODULE_1__.Texture(swap ? _this.animation.coin_bottom_texture : _this.animation.coin_top_texture);
              capTopTexture.needsUpdate = true;
              var capTopMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
                map: capTopTexture
              });
              _this.animation.coin_top = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(capTopGeo, capTopMat);
              _this.animation.coin_top.position.y = _this.animation.coin_height / 2;
              _this.animation.coin_top.rotation.x = -Math.PI / 2;
              _this.animation.coin.add(_this.animation.coin_top);
              if (_this.animation.coin_bottom !== null) _this.animation.coin.add(_this.animation.coin_bottom);
              var capBottomGeo = new three__WEBPACK_IMPORTED_MODULE_1__.CircleGeometry(_this.animation.coin_radius, 100);
              var capBottomTexture = new three__WEBPACK_IMPORTED_MODULE_1__.Texture(swap ? _this.animation.coin_top_texture : _this.animation.coin_bottom_texture);
              capBottomTexture.needsUpdate = true;
              var capBottomMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
                map: capBottomTexture
              });
              _this.animation.coin_bottom = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(capBottomGeo, capBottomMat);
              _this.animation.coin_bottom.position.y = -_this.animation.coin_height / 2;
              _this.animation.coin_bottom.rotation.x = Math.PI / 2;
              _this.animation.coin.add(_this.animation.coin_bottom);
            };
            _this.animation.coin_swap();
            _this.animation.scene.add(_this.animation.coin);
            _this.animation.coin_body = new cannon__WEBPACK_IMPORTED_MODULE_0__.Body({
              mass: 600,
              shape: new cannon__WEBPACK_IMPORTED_MODULE_0__.Cylinder(_this.animation.coin_radius, _this.animation.coin_radius, _this.animation.coin_height, 100),
              material: _this.animation.coinBodyMaterial
            });
            _this.animation.coin_body.linearDamping = 0.1;
            _this.animation.coin_body.angularDamping = 0.1;
            quat = new cannon__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
            quat.setFromAxisAngle(new cannon__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 0, 0), -Math.PI / 2);
            translation = new cannon__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 0, 0);
            _this.animation.coin_body.shapes[0].transformAllPoints(translation, quat);
            _this.animation["throw"] = function (result) {
              // 0 - heads, 1 - tails
              _this.animation.coin_body.velocity.set(0, _this.throwHeight, 0);
              _this.animation.coin_body.angularVelocity.set(25 * Math.random() - 25, Math.random(), 25 * Math.random() - 25);
              _this.animation.coin_body.position.set(0, 10, 0);
              _this.animation.frames = [];
              var isContacts = false;
              var collide = function collide() {
                isContacts = true;
              };
              _this.animation.floorBody.addEventListener('collide', collide);
              var stableCount = 0;
              while (stableCount < 10) {
                _this.animation.frames.push({
                  position: _this.animation.coin_body.position.clone(),
                  quaternion: _this.animation.coin_body.quaternion.clone(),
                  is_contact: isContacts
                });
                isContacts = false;
                _this.animation.world.step(1.00 / 30.00);
                if (_this.animation.isFinished()) stableCount++;else stableCount = 0;
              }
              _this.animation.floorBody.removeEventListener('collide', collide);
              var side = _this.animation.getSide();
              if (side > Math.PI / 2 * 0.7 && side < Math.PI / 2 * 1.3) return _this.animation["throw"](result);
              _this.animation.coin_swap((side < Math.PI / 2 ? 1 : 0) === result);
              _this.animation.isThrought = true;
            };
            _this.animation.getSide = function () {
              var vectorTop = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0);
              var vector = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0);
              vector.applyQuaternion(_this.animation.coin_body.quaternion);
              return vectorTop.angleTo(vector);
            };
            _this.animation.isFinished = function () {
              var threshold = 0.5;
              var angularVelocity = _this.animation.coin_body.angularVelocity;
              var velocity = _this.animation.coin_body.velocity;
              return Math.abs(angularVelocity.x) < threshold && Math.abs(angularVelocity.y) < threshold && Math.abs(angularVelocity.z) < threshold && Math.abs(velocity.x) < threshold && Math.abs(velocity.y) < threshold && Math.abs(velocity.z) < threshold;
            };
            _this.animation.world.add(_this.animation.coin_body);
            _this.animation.animate();
            _this.is_ready = true;
          case 96:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    this.animation.animate = function () {};
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_16__.mapActions)({
    updateUserAccountBalance: 'auth/updateUserAccountBalance',
    setProvablyFairGame: 'provably-fair/set'
  })), {}, {
    play: function play(bet) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var endpoint, requestParams, _yield$axios$post, game, VLabel;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              _this2.playing = true;
              _this2.message = null;

              // update user balance
              _this2.updateUserAccountBalance(_this2.account.balance - bet);
              _context2.next = 6;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_8__.sleep)(10);
            case 6:
              // API request params
              endpoint = _this2.getRoute('play');
              requestParams = {
                hash: _this2.provablyFairGame.hash,
                bet: bet,
                toss_bet: _this2.tossBet
              }; // execute the action
              _context2.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().post(endpoint, requestParams);
            case 10:
              _yield$axios$post = _context2.sent;
              game = _yield$axios$post.data;
              _this2.loading = false;
              _this2.result = {
                balance: game.account.balance,
                win: game.win,
                message: null,
                sound: null
              };
              VLabel = {
                'Heads': 'LOOter',
                'Tails': 'HOOter'
              };
              if (game.win > 0) {
                _this2.result.sound = packages_heads_or_tails_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_10__["default"];
                _this2.result.message = VLabel[game.gameable.result] + ', ' + _this2.$t('you won') + ' ' + game.win;
              } else {
                _this2.result.sound = packages_heads_or_tails_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_11__["default"];
                _this2.result.message = VLabel[game.gameable.result] + ', ' + _this2.$t('you lost');
              }
              // 0 - heads, 1 - tails
              _this2.tossResult = game.gameable.toss_result;
              _this2.animation["throw"](_this2.tossResult);
              _this2.setProvablyFairGame({
                key: _this2.gamePackageId,
                game: game.pf_game
              });
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
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

/***/ "./packages/heads-or-tails/resources/audio/hit1.wav":
/*!**********************************************************!*\
  !*** ./packages/heads-or-tails/resources/audio/hit1.wav ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/heads-or-tails/hit1.wav");

/***/ }),

/***/ "./packages/heads-or-tails/resources/audio/hit2.wav":
/*!**********************************************************!*\
  !*** ./packages/heads-or-tails/resources/audio/hit2.wav ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/heads-or-tails/hit2.wav");

/***/ }),

/***/ "./packages/heads-or-tails/resources/audio/lose.wav":
/*!**********************************************************!*\
  !*** ./packages/heads-or-tails/resources/audio/lose.wav ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/heads-or-tails/lose.wav");

/***/ }),

/***/ "./packages/heads-or-tails/resources/audio/win.wav":
/*!*********************************************************!*\
  !*** ./packages/heads-or-tails/resources/audio/win.wav ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/heads-or-tails/win.wav");

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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=style&index=0&id=9e84743e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=style&index=0&id=9e84743e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".animation[data-v-9e84743e] {\n  width: 100%;\n  max-width: 1200px;\n  height: 350px;\n}\n.animation[data-v-9e84743e] canvas {\n  width: 100% !important;\n  height: auto !important;\n}\n.message-container[data-v-9e84743e] {\n  position: relative;\n  height: 0;\n  z-index: 2;\n}\n.message-container .message[data-v-9e84743e] {\n  position: absolute;\n  top: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=style&index=0&id=9e84743e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=style&index=0&id=9e84743e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_9e84743e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=9e84743e&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=style&index=0&id=9e84743e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_9e84743e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_9e84743e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./packages/heads-or-tails/resources/js/pages/game.vue":
/*!*************************************************************!*\
  !*** ./packages/heads-or-tails/resources/js/pages/game.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_vue_vue_type_template_id_9e84743e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.vue?vue&type=template&id=9e84743e&scoped=true& */ "./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=template&id=9e84743e&scoped=true&");
/* harmony import */ var _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.vue?vue&type=script&lang=js& */ "./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=script&lang=js&");
/* harmony import */ var _game_vue_vue_type_style_index_0_id_9e84743e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.vue?vue&type=style&index=0&id=9e84743e&lang=scss&scoped=true& */ "./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=style&index=0&id=9e84743e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _game_vue_vue_type_template_id_9e84743e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _game_vue_vue_type_template_id_9e84743e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9e84743e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/heads-or-tails/resources/js/pages/game.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=script&lang=js&");
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

/***/ "./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=style&index=0&id=9e84743e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=style&index=0&id=9e84743e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_9e84743e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=9e84743e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=style&index=0&id=9e84743e&lang=scss&scoped=true&");


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

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=template&id=9e84743e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=template&id=9e84743e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VBtnToggle */ "./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js");



var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex flex-column fill-height py-3"
  }, [_c("div", {
    staticClass: "message-container d-flex justify-center align-center"
  }, [_c("div", {
    staticClass: "message"
  }, [_c("game-message", {
    attrs: {
      message: _vm.message
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-center fill-height align-center"
  }, [_c("div", {
    ref: "animation",
    staticClass: "animation"
  })]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-center flex-column"
  }, [_c(vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_0__["default"], {
    staticClass: "align-self-center mb-3",
    attrs: {
      "active-class": "primary--text",
      mandatory: "",
      rounded: "",
      group: ""
    },
    model: {
      value: _vm.tossBet,
      callback: function callback($$v) {
        _vm.tossBet = $$v;
      },
      expression: "tossBet"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    staticClass: "mx-1",
    attrs: {
      disabled: _vm.playing || !_vm.is_ready,
      small: "",
      value: 0
    },
    on: {
      click: function click($event) {
        return _vm.sound(_vm.clickSound);
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("LOOter")) + "\n\n      ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    staticClass: "mx-1",
    attrs: {
      disabled: _vm.playing || !_vm.is_ready,
      small: "",
      value: 1
    },
    on: {
      click: function click($event) {
        return _vm.sound(_vm.clickSound);
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("HOOter")) + "\n      ")])], 1)], 1), _vm._v(" "), _c("play-controls", {
    attrs: {
      loading: _vm.loading,
      playing: _vm.playing,
      disabled: !_vm.formIsValid || !_vm.is_ready
    },
    on: {
      play: _vm.play
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

/***/ "./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=template&id=9e84743e&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=template&id=9e84743e&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_9e84743e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_9e84743e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_9e84743e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=template&id=9e84743e&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/heads-or-tails/resources/js/pages/game.vue?vue&type=template&id=9e84743e&scoped=true&");


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