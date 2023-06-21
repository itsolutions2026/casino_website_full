(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/horse-racing-resources-js-pages-admin-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Admin/FileUpload */ "./resources/js/components/Admin/FileUpload.vue");
/* harmony import */ var _components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/ColorPicker */ "./resources/js/components/ColorPicker.vue");
/* harmony import */ var _helpers_runner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/runner */ "./packages/horse-racing/resources/js/pages/helpers/runner.js");
/* harmony import */ var clone_deep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clone-deep */ "./node_modules/clone-deep/index.js");
/* harmony import */ var clone_deep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clone_deep__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ColorPicker: _components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"],
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
      betTypes: [this.$t('Win'), this.$t('Place'), this.$t('Show')],
      runnerImages: [],
      runnerImagesT: {},
      variables: {
        GAME_HORSE_RACING_CATEGORIES: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".categories")),
        GAME_HORSE_RACING_BANNER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".banner")),
        GAME_HORSE_RACING_BACKGROUND: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".background")),
        GAME_HORSE_RACING_MIN_BET: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".min_bet")), 10),
        GAME_HORSE_RACING_MAX_BET: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".max_bet")), 10),
        GAME_HORSE_RACING_BET_CHANGE_AMOUNT: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bet_change_amount")), 10),
        GAME_HORSE_RACING_RUNNERS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".runners")),
        GAME_HORSE_RACING_PAYTABLE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".paytable")),
        GAME_HORSE_RACING_ANIMATION_LENGTH: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".animation.length")), 10),
        GAME_HORSE_RACING_SOUNDS_WIN: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.win")),
        GAME_HORSE_RACING_SOUNDS_LOSE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.lose"))
      }
    };
  },
  computed: {
    cols: function cols() {
      var _this$$vuetify$breakp = this.$vuetify.breakpoint,
        xs = _this$$vuetify$breakp.xs,
        sm = _this$$vuetify$breakp.sm,
        md = _this$$vuetify$breakp.md;
      return xs || sm ? 12 : md ? 6 : null;
    },
    runnersCount: function runnersCount() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".runners")).length;
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var runners, index, image;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.$emit('input', _this.variables);
            runners = _this.variables.GAME_HORSE_RACING_RUNNERS;
            _context.t0 = _regeneratorRuntime().keys(runners);
          case 3:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 11;
              break;
            }
            index = _context.t1.value;
            _context.next = 7;
            return _this.getRunnerImage(runners[index].colors, runners[index].name, index + 1);
          case 7:
            image = _context.sent;
            _this.runnerImages.push(image);
            _context.next = 3;
            break;
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    updateRunnerImage: function updateRunnerImage(index) {
      var _this2 = this;
      if (this.runnerImagesT[index]) clearTimeout(this.runnerImagesT[index]);
      this.runnerImagesT[index] = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var runners;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.runnerImagesT[index] = 0;
              runners = _this2.variables.GAME_HORSE_RACING_RUNNERS;
              _context2.t0 = _this2;
              _context2.t1 = _this2.runnerImages;
              _context2.t2 = index;
              _context2.next = 7;
              return _this2.getRunnerImage(runners[index].colors, runners[index].name, index + 1);
            case 7:
              _context2.t3 = _context2.sent;
              _context2.t0.$set.call(_context2.t0, _context2.t1, _context2.t2, _context2.t3);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      })), 500);
    },
    getRunnerImage: function getRunnerImage(colors, name, number) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var runner;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              runner = new _helpers_runner__WEBPACK_IMPORTED_MODULE_4__["default"](colors, name, number);
              _context3.next = 3;
              return runner.init();
            case 3:
              return _context3.abrupt("return", runner.preview);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    addRunner: function addRunner() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var runner, n, image, betType;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              runner = clone_deep__WEBPACK_IMPORTED_MODULE_5___default()(_this3.form.GAME_HORSE_RACING_RUNNERS[_this3.runnersCount - 1]);
              n = _this3.runnersCount + 1;
              runner.name = _this3.$t('Runner') + ' ' + n;
              _this3.form.GAME_HORSE_RACING_RUNNERS.push(runner);
              _context4.next = 6;
              return _this3.getRunnerImage(runner.colors, runner.name, n);
            case 6:
              image = _context4.sent;
              _this3.runnerImages.push(image);
              for (betType in _this3.betTypes) {
                _this3.form.GAME_HORSE_RACING_PAYTABLE[betType].push(1);
              }
            case 9:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    removeRunner: function removeRunner(index) {
      this.form.GAME_HORSE_RACING_RUNNERS.splice(index, 1);
      this.runnerImages.splice(index, 1);
      for (var betType in this.betTypes) {
        this.form.GAME_HORSE_RACING_PAYTABLE[betType].splice(index, 1);
      }
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

/***/ "./packages/horse-racing/resources/js/pages/admin/settings.vue":
/*!*********************************************************************!*\
  !*** ./packages/horse-racing/resources/js/pages/admin/settings.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_f963a446___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=f963a446& */ "./packages/horse-racing/resources/js/pages/admin/settings.vue?vue&type=template&id=f963a446&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./packages/horse-racing/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_f963a446___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_f963a446___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/horse-racing/resources/js/pages/admin/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/horse-racing/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./packages/horse-racing/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/admin/settings.vue?vue&type=template&id=f963a446&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/admin/settings.vue?vue&type=template&id=f963a446& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCombobox */ "./node_modules/vuetify/lib/components/VCombobox/VCombobox.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
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
      value: _vm.form.GAME_HORSE_RACING_CATEGORIES,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_HORSE_RACING_CATEGORIES", $$v);
      },
      expression: "form.GAME_HORSE_RACING_CATEGORIES"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Banner"),
      name: "banner",
      folder: "games/".concat(_vm.packageId)
    },
    model: {
      value: _vm.form.GAME_HORSE_RACING_BANNER,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_HORSE_RACING_BANNER", $$v);
      },
      expression: "form.GAME_HORSE_RACING_BANNER"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Background image"),
      name: "background",
      folder: "games/".concat(_vm.packageId),
      clearable: true
    },
    model: {
      value: _vm.form.GAME_HORSE_RACING_BACKGROUND,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_HORSE_RACING_BACKGROUND", $$v);
      },
      expression: "form.GAME_HORSE_RACING_BACKGROUND"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Min bet"),
      rules: [_vm.validationInteger, _vm.validationNonNegativeNumber],
      error: _vm.form.errors.has("GAME_HORSE_RACING_MIN_BET"),
      "error-messages": _vm.form.errors.get("GAME_HORSE_RACING_MIN_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_HORSE_RACING_MIN_BET");
      }
    },
    model: {
      value: _vm.form.GAME_HORSE_RACING_MIN_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_HORSE_RACING_MIN_BET", _vm._n($$v));
      },
      expression: "form.GAME_HORSE_RACING_MIN_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Max bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_HORSE_RACING_MAX_BET"),
      "error-messages": _vm.form.errors.get("GAME_HORSE_RACING_MAX_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_HORSE_RACING_MAX_BET");
      }
    },
    model: {
      value: _vm.form.GAME_HORSE_RACING_MAX_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_HORSE_RACING_MAX_BET", _vm._n($$v));
      },
      expression: "form.GAME_HORSE_RACING_MAX_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Bet increment / decrement amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_HORSE_RACING_BET_CHANGE_AMOUNT"),
      "error-messages": _vm.form.errors.get("GAME_HORSE_RACING_BET_CHANGE_AMOUNT"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_HORSE_RACING_BET_CHANGE_AMOUNT");
      }
    },
    model: {
      value: _vm.form.GAME_HORSE_RACING_BET_CHANGE_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_HORSE_RACING_BET_CHANGE_AMOUNT", _vm._n($$v));
      },
      expression: "form.GAME_HORSE_RACING_BET_CHANGE_AMOUNT"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Runners")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_vm._l(_vm.form.GAME_HORSE_RACING_RUNNERS, function (runner, i) {
    return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: i,
      staticClass: "mb-5",
      attrs: {
        outlined: ""
      }
    }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardTitle, {
      staticClass: "font-weight-thin mb-3"
    }, [_vm._v("\n              " + _vm._s(_vm.$t("Runner {0}", [i + 1])) + " — " + _vm._s(runner.name) + "\n            ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_8__["default"], {
      attrs: {
        src: _vm.runnerImages[i],
        width: "250",
        height: "200"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
      attrs: {
        label: _vm.$t("Name"),
        rules: [_vm.validationRequired],
        outlined: ""
      },
      model: {
        value: _vm.form.GAME_HORSE_RACING_RUNNERS[i].name,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_HORSE_RACING_RUNNERS[i], "name", $$v);
        },
        expression: "form.GAME_HORSE_RACING_RUNNERS[i].name"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      attrs: {
        cols: "12",
        md: "6",
        lg: "3"
      }
    }, [_c("color-picker", {
      attrs: {
        label: _vm.$t("Horse body")
      },
      on: {
        input: function input($event) {
          return _vm.updateRunnerImage(i);
        }
      },
      model: {
        value: _vm.form.GAME_HORSE_RACING_RUNNERS[i].colors.horse.body,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_HORSE_RACING_RUNNERS[i].colors.horse, "body", $$v);
        },
        expression: "form.GAME_HORSE_RACING_RUNNERS[i].colors.horse.body"
      }
    })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      attrs: {
        cols: "12",
        md: "6",
        lg: "3"
      }
    }, [_c("color-picker", {
      attrs: {
        label: _vm.$t("Horse tail")
      },
      on: {
        input: function input($event) {
          return _vm.updateRunnerImage(i);
        }
      },
      model: {
        value: _vm.form.GAME_HORSE_RACING_RUNNERS[i].colors.horse.tail,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_HORSE_RACING_RUNNERS[i].colors.horse, "tail", $$v);
        },
        expression: "form.GAME_HORSE_RACING_RUNNERS[i].colors.horse.tail"
      }
    })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      attrs: {
        cols: "12",
        md: "6",
        lg: "3"
      }
    }, [_c("color-picker", {
      attrs: {
        label: _vm.$t("Pad text")
      },
      on: {
        input: function input($event) {
          return _vm.updateRunnerImage(i);
        }
      },
      model: {
        value: _vm.form.GAME_HORSE_RACING_RUNNERS[i].colors.horse.pad.text,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_HORSE_RACING_RUNNERS[i].colors.horse.pad, "text", $$v);
        },
        expression: "form.GAME_HORSE_RACING_RUNNERS[i].colors.horse.pad.text"
      }
    })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      attrs: {
        cols: "12",
        md: "6",
        lg: "3"
      }
    }, [_c("color-picker", {
      attrs: {
        label: _vm.$t("Pad background")
      },
      on: {
        input: function input($event) {
          return _vm.updateRunnerImage(i);
        }
      },
      model: {
        value: _vm.form.GAME_HORSE_RACING_RUNNERS[i].colors.horse.pad.background,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_HORSE_RACING_RUNNERS[i].colors.horse.pad, "background", $$v);
        },
        expression: "form.GAME_HORSE_RACING_RUNNERS[i].colors.horse.pad.background"
      }
    })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      attrs: {
        cols: "12",
        md: "6"
      }
    }, [_c("color-picker", {
      attrs: {
        label: _vm.$t("Jockey hat")
      },
      on: {
        input: function input($event) {
          return _vm.updateRunnerImage(i);
        }
      },
      model: {
        value: _vm.form.GAME_HORSE_RACING_RUNNERS[i].colors.jockey.hat,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_HORSE_RACING_RUNNERS[i].colors.jockey, "hat", $$v);
        },
        expression: "form.GAME_HORSE_RACING_RUNNERS[i].colors.jockey.hat"
      }
    })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      attrs: {
        cols: "12",
        md: "6"
      }
    }, [_c("color-picker", {
      attrs: {
        label: _vm.$t("Jockey shirt")
      },
      on: {
        input: function input($event) {
          return _vm.updateRunnerImage(i);
        }
      },
      model: {
        value: _vm.form.GAME_HORSE_RACING_RUNNERS[i].colors.jockey.shirt,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_HORSE_RACING_RUNNERS[i].colors.jockey, "shirt", $$v);
        },
        expression: "form.GAME_HORSE_RACING_RUNNERS[i].colors.jockey.shirt"
      }
    })], 1)], 1), _vm._v(" "), _vm.runnersCount >= 4 && _vm.runnersCount <= 8 ? _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
      attrs: {
        color: "error"
      },
      on: {
        click: function click($event) {
          return _vm.removeRunner(i);
        }
      }
    }, [_vm._v("\n                " + _vm._s(_vm.$t("Remove")) + "\n              ")]) : _vm._e()], 1)], 1);
  }), _vm._v(" "), _vm.runnersCount <= 7 ? _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.addRunner();
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Add")) + "\n              ")])], 1)], 1) : _vm._e()], 2)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Paytable")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_vm._l(_vm.betTypes, function (title, i) {
    return [_c("h6", {
      key: "h-".concat(i),
      staticClass: "text-h6 font-weight-thin"
    }, [_vm._v("\n              " + _vm._s(title) + "\n            ")]), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: "row-".concat(i)
    }, _vm._l(_vm.form.GAME_HORSE_RACING_PAYTABLE[i], function (payout, k) {
      return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: k,
        attrs: {
          cols: _vm.cols
        }
      }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
        attrs: {
          label: _vm.$t("Runner {0}", [k + 1]),
          rules: [_vm.validationPositiveNumber],
          outlined: "",
          prefix: _vm.$t("Bet") + " x "
        },
        on: {
          keydown: function keydown($event) {
            return _vm.clearFormErrors($event, "GAME_HORSE_RACING_PAYTABLE");
          }
        },
        model: {
          value: _vm.form.GAME_HORSE_RACING_PAYTABLE[i][k],
          callback: function callback($$v) {
            _vm.$set(_vm.form.GAME_HORSE_RACING_PAYTABLE[i], k, _vm._n($$v));
          },
          expression: "form.GAME_HORSE_RACING_PAYTABLE[i][k]"
        }
      })], 1);
    }), 1)];
  })], 2)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Animation")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Animation duration"),
      rules: [_vm.validationInteger, function (v) {
        return _vm.validationMin(v, 5);
      }, function (v) {
        return _vm.validationMax(v, 60);
      }],
      error: _vm.form.errors.has("GAME_HORSE_RACING_ANIMATION_LENGTH"),
      "error-messages": _vm.form.errors.get("GAME_HORSE_RACING_ANIMATION_LENGTH"),
      outlined: "",
      suffix: _vm.$t("seconds")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_HORSE_RACING_ANIMATION_LENGTH");
      }
    },
    model: {
      value: _vm.form.GAME_HORSE_RACING_ANIMATION_LENGTH,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_HORSE_RACING_ANIMATION_LENGTH", _vm._n($$v));
      },
      expression: "form.GAME_HORSE_RACING_ANIMATION_LENGTH"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Sounds")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c("file-upload", {
    attrs: {
      label: _vm.$t("Win"),
      name: "win",
      folder: "games/".concat(_vm.packageId),
      accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
      clearable: true
    },
    model: {
      value: _vm.form.GAME_HORSE_RACING_SOUNDS_WIN,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_HORSE_RACING_SOUNDS_WIN", $$v);
      },
      expression: "form.GAME_HORSE_RACING_SOUNDS_WIN"
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
      value: _vm.form.GAME_HORSE_RACING_SOUNDS_LOSE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_HORSE_RACING_SOUNDS_LOSE", $$v);
      },
      expression: "form.GAME_HORSE_RACING_SOUNDS_LOSE"
    }
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/horse-racing/resources/js/pages/admin/settings.vue?vue&type=template&id=f963a446&":
/*!****************************************************************************************************!*\
  !*** ./packages/horse-racing/resources/js/pages/admin/settings.vue?vue&type=template&id=f963a446& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_f963a446___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_f963a446___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_f963a446___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=f963a446& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/horse-racing/resources/js/pages/admin/settings.vue?vue&type=template&id=f963a446&");


/***/ })

}]);