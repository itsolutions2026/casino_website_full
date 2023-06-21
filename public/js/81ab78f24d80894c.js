(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/payments-resources-js-pages-user-account-deposits-complete"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/components/Deposits/Paytm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/components/Deposits/Paytm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: {
    deposit: {
      type: Object,
      required: false,
      "default": null
    }
  },
  data: function data() {
    return {
      //
    };
  },
  methods: {
    get: _plugins_utils__WEBPACK_IMPORTED_MODULE_0__.get
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/components/Deposits/Smartfastpay.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/components/Deposits/Smartfastpay.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var _components_CountdownTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/CountdownTimer */ "./resources/js/components/CountdownTimer.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CountdownTimer: _components_CountdownTimer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    deposit: {
      type: Object,
      required: false,
      "default": null
    }
  },
  data: function data() {
    return {
      modal: false
    };
  },
  created: function created() {
    var time = Math.floor(new Date().getTime() / 1000);
    if ((0,_plugins_utils__WEBPACK_IMPORTED_MODULE_0__.get)(this.deposit, 'parameters.qrcode') && time > (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_0__.get)(this.deposit, 'parameters.expires_in', time)) {
      this.$store.dispatch('message/error', {
        text: this.$t('This deposit has expired.')
      });
      this.$router.push({
        name: 'user.account.deposits.index'
      });
    }
  },
  methods: {
    get: _plugins_utils__WEBPACK_IMPORTED_MODULE_0__.get,
    copyToClipboard: _plugins_utils__WEBPACK_IMPORTED_MODULE_0__.copyToClipboard
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/complete.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/complete.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var _plugins_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/plugins/format */ "./resources/js/plugins/format.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/Preloader */ "./resources/js/components/Preloader.vue");
/* harmony import */ var _components_CountdownTimer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/CountdownTimer */ "./resources/js/components/CountdownTimer.vue");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.min.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var packages_payments_resources_js_static_contract_abi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! packages/payments/resources/js/static/contract-abi */ "./packages/payments/resources/js/static/contract-abi.json");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/web3.js */ "./node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var packages_payments_resources_js_static_chains_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! packages/payments/resources/js/static/chains.json */ "./packages/payments/resources/js/static/chains.json");
/* harmony import */ var packages_payments_resources_js_components_Deposits_Paytm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! packages/payments/resources/js/components/Deposits/Paytm */ "./packages/payments/resources/js/components/Deposits/Paytm.vue");
/* harmony import */ var packages_payments_resources_js_components_Deposits_Smartfastpay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! packages/payments/resources/js/components/Deposits/Smartfastpay */ "./packages/payments/resources/js/components/Deposits/Smartfastpay.vue");
/* harmony import */ var xumm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xumm */ "./node_modules/xumm/dist/index.js");
/* harmony import */ var xumm__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(xumm__WEBPACK_IMPORTED_MODULE_13__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








 // https://github.com/ethereum/wiki/wiki/Contract-ERC20-ABI





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CountdownTimer: _components_CountdownTimer__WEBPACK_IMPORTED_MODULE_6__["default"],
    Preloader: _components_Preloader__WEBPACK_IMPORTED_MODULE_5__["default"],
    Paytm: packages_payments_resources_js_components_Deposits_Paytm__WEBPACK_IMPORTED_MODULE_11__["default"],
    Smartfastpay: packages_payments_resources_js_components_Deposits_Smartfastpay__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_4__["default"]],
  middleware: ['auth', 'verified', '2fa_passed'],
  props: ['id'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Complete deposit')
    };
  },
  data: function data() {
    return {
      updateInterval: null,
      modal: false,
      deposit: null,
      transactionInProgress: false,
      connectedWallet: null
    };
  },
  computed: {
    component: function component() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.ucfirst)((0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(this.deposit, 'method.payment_method.gateway.code'));
    },
    evmChainName: function evmChainName() {
      return (web3__WEBPACK_IMPORTED_MODULE_7___default().givenProvider) ? packages_payments_resources_js_static_chains_json__WEBPACK_IMPORTED_MODULE_10__[(web3__WEBPACK_IMPORTED_MODULE_7___default().givenProvider.networkVersion)] || this.$t('Unknown chain') : null;
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _this.fetchDeposit();
          case 2:
            if (['coinpayments', 'cryptapi'].indexOf(_this.deposit.method.payment_method.gateway.code) > -1) {
              _this.updateInterval = setInterval(function () {
                _this.fetchDeposit();
              }, 30000);
            }
            if (!(_this.deposit.payment_currency === "XRP")) {
              _context2.next = 13;
              break;
            }
            _this.xummInstance = _this.$store.state.auth.xummInstance;
            if (!(_this.xummInstance && _this.xummInstance.instance === "1")) {
              _context2.next = 11;
              break;
            }
            _context2.next = 8;
            return _this.xummInstance.user.account;
          case 8:
            _this.connectedWallet = _context2.sent;
            _context2.next = 13;
            break;
          case 11:
            _this.xummInstance = new xumm__WEBPACK_IMPORTED_MODULE_13__.Xumm((0,_plugins_config__WEBPACK_IMPORTED_MODULE_1__.config)('payments.xrpl.api_key'));
            _this.xummInstance.on('success', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _this.xummInstance.user.account.then(function (account) {
                      if (account) {
                        _this.connectedWallet = account;
                        _this.$store.dispatch('auth/updateXummInstance', _this.xummInstance);
                      }
                    });
                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })));
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
    (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;
  },
  methods: {
    get: _plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get,
    "float": _plugins_format__WEBPACK_IMPORTED_MODULE_3__.float,
    fetchDeposit: function fetchDeposit() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios$get, data, time;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/deposits/".concat(_this2.id));
            case 2:
              _yield$axios$get = _context3.sent;
              data = _yield$axios$get.data;
              _this2.deposit = data;
              if (_this2.deposit.is_completed) {
                _this2.$store.dispatch('message/success', {
                  text: _this2.$t('Deposit is successfully completed.')
                });
                _this2.$router.replace({
                  name: 'user.account.deposits.index'
                });
              }

              // disable credentials for tron to avoid this error:
              // Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'
              (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = _this2.deposit.method.payment_method.gateway.code !== 'tron';
              if (_this2.deposit.method.payment_method.gateway.code === 'coinpayments') {
                time = Math.round(new Date().getTime() / 1000);
                if (time > (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(_this2.deposit, 'parameters.expiration_time', time - 1)) {
                  _this2.$store.dispatch('message/error', {
                    text: _this2.$t('This deposit has expired.')
                  });
                  _this2.$router.push({
                    name: 'user.account.deposits.index'
                  });
                }
              }
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    createEvmTransaction: function createEvmTransaction() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var web, transaction, contract, wei, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if ((web3__WEBPACK_IMPORTED_MODULE_7___default().givenProvider)) {
                _context4.next = 3;
                break;
              }
              _this3.$store.dispatch('message/error', {
                text: _this3.$t('Please check that a {0} compatible wallet (such as {1}) is installed and enabled in your browser.', ['Web3', 'Metamask'])
              });
              return _context4.abrupt("return", false);
            case 3:
              web = new (web3__WEBPACK_IMPORTED_MODULE_7___default())((web3__WEBPACK_IMPORTED_MODULE_7___default().givenProvider));
              _context4.prev = 4;
              _context4.next = 7;
              return web.eth.requestAccounts();
            case 7:
              _context4.next = 13;
              break;
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](4);
              _this3.$store.dispatch('message/error', {
                text: _context4.t0.code === 4001 ? _this3.$t('Access to your account is not authorized') : _context4.t0.message
              });
              return _context4.abrupt("return", false);
            case 13:
              _this3.transactionInProgress = true;
              _context4.prev = 14;
              if (!(['evm_token'].indexOf(_this3.deposit.method.payment_method.code) > -1)) {
                _context4.next = 24;
                break;
              }
              contract = new web.eth.Contract(packages_payments_resources_js_static_contract_abi__WEBPACK_IMPORTED_MODULE_8__, _this3.deposit.parameters.contractAddress, {
                from: _this3.deposit.parameters.addressFrom
              });
              wei = web.utils.toBN(_this3.deposit.payment_amount_in_units);
              data = contract.methods.transfer(_this3.deposit.parameters.addressTo, wei).encodeABI();
              _context4.next = 21;
              return web.eth.sendTransaction({
                from: _this3.deposit.parameters.addressFrom,
                to: _this3.deposit.parameters.contractAddress,
                value: 0,
                // don't transfer ETH / BNB, just tokens
                data: data
              });
            case 21:
              transaction = _context4.sent;
              _context4.next = 27;
              break;
            case 24:
              _context4.next = 26;
              return web.eth.sendTransaction({
                from: _this3.deposit.parameters.addressFrom,
                to: _this3.deposit.parameters.addressTo,
                value: _this3.deposit.payment_amount_in_units
              });
            case 26:
              transaction = _context4.sent;
            case 27:
              _context4.next = 32;
              break;
            case 29:
              _context4.prev = 29;
              _context4.t1 = _context4["catch"](14);
              _this3.$store.dispatch('message/error', {
                text: _context4.t1.code === 4001 ? _this3.$t('Transaction is not authorized') : _context4.t1.message
              });
            case 32:
              if (transaction) {
                _this3.updateTransactionId(transaction.transactionHash);
              }
              _this3.transactionInProgress = false;
            case 34:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[4, 9], [14, 29]]);
      }))();
    },
    createTronTransaction: function createTronTransaction() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var web, address, success, transactionId, _yield$web$trx$getCon, abi, contract, transaction, signedTransaction, _yield$web$trx$sendRa;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (window.tronWeb) {
                _context5.next = 3;
                break;
              }
              _this4.$store.dispatch('message/error', {
                text: _this4.$t('Please check that a {0} compatible wallet (such as {1}) is installed and enabled in your browser.', ['Web3', 'Metamask'])
              });
              return _context5.abrupt("return", false);
            case 3:
              _this4.transactionInProgress = true;
              web = window.tronWeb;
              address = web.defaultAddress.base58;
              if (!(address !== false)) {
                _context5.next = 39;
                break;
              }
              _context5.prev = 7;
              if (!(_this4.deposit.method.payment_method.code === 'trc20')) {
                _context5.next = 20;
                break;
              }
              _context5.next = 11;
              return web.trx.getContract(_this4.deposit.parameters.contractAddress);
            case 11:
              _yield$web$trx$getCon = _context5.sent;
              abi = _yield$web$trx$getCon.abi;
              contract = web.contract(abi.entrys, _this4.deposit.parameters.contractAddress);
              _context5.next = 16;
              return contract.methods.transfer(_this4.deposit.parameters.addressTo, _this4.deposit.payment_amount_in_units).send();
            case 16:
              transactionId = _context5.sent;
              if (transactionId) {
                success = true;
              }
              _context5.next = 31;
              break;
            case 20:
              _context5.next = 22;
              return web.transactionBuilder.sendTrx(_this4.deposit.parameters.addressTo, _this4.deposit.payment_amount_in_units, _this4.deposit.parameters.addressFrom);
            case 22:
              transaction = _context5.sent;
              _context5.next = 25;
              return web.trx.sign(transaction);
            case 25:
              signedTransaction = _context5.sent;
              _context5.next = 28;
              return web.trx.sendRawTransaction(signedTransaction);
            case 28:
              _yield$web$trx$sendRa = _context5.sent;
              success = _yield$web$trx$sendRa.result;
              transactionId = _yield$web$trx$sendRa.txid;
            case 31:
              if (success === true) {
                _this4.updateTransactionId(transactionId);
              }
              _context5.next = 37;
              break;
            case 34:
              _context5.prev = 34;
              _context5.t0 = _context5["catch"](7);
              _this4.$store.dispatch('message/error', {
                text: _context5.t0.message || _context5.t0
              });
            case 37:
              _context5.next = 40;
              break;
            case 39:
              _this4.$store.dispatch('message/error', {
                text: _this4.$t('Access to your account is not authorized')
              });
            case 40:
              _this4.transactionInProgress = false;
            case 41:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[7, 34]]);
      }))();
    },
    createSolanaTransaction: function createSolanaTransaction() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var url, connection, recentBlockhash, transaction, _yield$window$solana$, transactionId;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if ((0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(window, 'solana.isPhantom', false)) {
                _context6.next = 3;
                break;
              }
              _this5.$store.dispatch('message/error', {
                text: _this5.$t('Phantom wallet is not detected.')
              });
              return _context6.abrupt("return", false);
            case 3:
              _context6.prev = 3;
              _context6.next = 6;
              return window.solana.connect();
            case 6:
              _context6.next = 12;
              break;
            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](3);
              // { code: 4001, message: 'User rejected the request.' }
              _this5.$store.dispatch('message/error', {
                text: _context6.t0.message
              });
              return _context6.abrupt("return", false);
            case 12:
              _this5.transactionInProgress = true;
              _context6.prev = 13;
              url = _this5.deposit.method.payment_method_parameters.url;
              connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_9__.Connection(url, 'finalized');
              _context6.next = 18;
              return connection.getLatestBlockhash('finalized');
            case 18:
              recentBlockhash = _context6.sent;
              transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_9__.Transaction().add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_9__.SystemProgram.transfer({
                fromPubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_9__.PublicKey(_this5.deposit.parameters.addressFrom),
                toPubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_9__.PublicKey(_this5.deposit.parameters.addressTo),
                lamports: _this5.deposit.payment_amount_in_units
              }));
              transaction.feePayer = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_9__.PublicKey(_this5.deposit.parameters.addressFrom);
              transaction.recentBlockhash = recentBlockhash.blockhash;
              _context6.next = 24;
              return window.solana.signAndSendTransaction(transaction);
            case 24:
              _yield$window$solana$ = _context6.sent;
              transactionId = _yield$window$solana$.signature;
              // await connection.confirmTransaction(transactionId)
              _this5.updateTransactionId(transactionId);
              _context6.next = 32;
              break;
            case 29:
              _context6.prev = 29;
              _context6.t1 = _context6["catch"](13);
              _this5.$store.dispatch('message/error', {
                text: _context6.t1.message || _context6.t1
              });
            case 32:
              _this5.transactionInProgress = false;
            case 33:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[3, 8], [13, 29]]);
      }))();
    },
    createXrplTransaction: function createXrplTransaction() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var payload, self;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (_this6.connectedWallet) {
                _context7.next = 3;
                break;
              }
              _this6.$store.dispatch('message/error', {
                text: _this6.$t('Xumm Wallet is not connected. Please connect your xumm mobile wallet by scanning QR code')
              });
              return _context7.abrupt("return", false);
            case 3:
              if (!(_this6.connectedWallet !== _this6.deposit.parameters.addressFrom)) {
                _context7.next = 6;
                break;
              }
              _this6.$store.dispatch('message/error', {
                text: _this6.$t('Access to your account is not authorized')
              });
              return _context7.abrupt("return", false);
            case 6:
              _this6.transactionInProgress = true;
              payload = {
                txjson: {
                  TransactionType: 'Payment',
                  Destination: _this6.deposit.parameters.addressTo,
                  Amount: _this6.deposit.payment_amount_in_units // Drops, so: 0.001337 XRP
                }
              };
              self = _this6;
              _this6.xummInstance.payload.createAndSubscribe(payload, function (payloadEvent) {
                if (typeof payloadEvent.data.signed !== 'undefined') {
                  // What we return here will be the resolved value of the `resolved` property
                  return payloadEvent.data;
                }
              }).then(function (_ref2) {
                var created = _ref2.created,
                  resolved = _ref2.resolved;
                var msg = created.pushed ? 'Now check your Xumm wallet, there should be a push notification + sign request in your event list waiting for you ;)' : 'Now check your Xumm wallet, there should be a sign request in your event list waiting for you. This would have been pushed, but it seems you did not grant Xumm the push permission)';
                self.$store.dispatch('message/success', {
                  text: self.$t(msg)
                });
                return resolved.then(function (payloadOutcome) {
                  if (payloadOutcome.signed) {
                    self.updateTransactionId(payloadOutcome.txid);
                    self.transactionInProgress = false;
                  } else {
                    self.$store.dispatch('message/error', {
                      text: self.$t('You rejected the payment in your wallet')
                    });
                    self.transactionInProgress = false;
                  }
                });
              });
            case 10:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    updateTransactionId: function updateTransactionId(transactionId) {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().patch("/api/deposits/methods/".concat(_this7.deposit.method.id, "/").concat(_this7.id), {
                transaction_id: transactionId
              });
            case 2:
              _this7.$store.dispatch('message/success', {
                text: _this7.$t('Deposit is accepted and will be reflected on your account as soon as the transaction is confirmed.')
              });
              _this7.$router.push({
                name: 'user.account.deposits.index'
              });
            case 4:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    copyToClipboard: function copyToClipboard(ref) {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.copyToClipboard)(ref.$el.querySelector('input'));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CountdownTimer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CountdownTimer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    endDate: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      timer: null,
      interval: null
    };
  },
  watch: {
    endDate: function endDate(_endDate) {
      if (_endDate) {
        this.destroy();
        this.create();
      }
    }
  },
  created: function created() {
    this.create();
  },
  beforeDestroy: function beforeDestroy() {
    this.destroy();
  },
  methods: {
    create: function create() {
      this.tick();
      this.interval = setInterval(this.tick, 1000);
    },
    destroy: function destroy() {
      clearInterval(this.interval);
    },
    tick: function tick() {
      var diff = Math.max(0, Math.round(this.endDate - Date.now() / 1000));
      var seconds = Math.floor(diff % 60);
      var minutes = Math.floor(diff / 60 % 60);
      var hours = Math.floor(diff / (60 * 60) % 24);
      var days = Math.floor(diff / (60 * 60 * 24));
      seconds = seconds < 10 ? '0' + seconds : seconds;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      hours = hours < 10 ? '0' + hours : hours;
      this.timer = (days > 0 ? "".concat(days).concat(this.$t('d'), " : ") : '') + (hours > 0 || days > 0 ? "".concat(hours).concat(this.$t('h'), " : ") : '') + "".concat(minutes).concat(this.$t('m'), " : ").concat(seconds).concat(this.$t('s'));

      // clear interval if time elapsed
      if (diff === 0 && this.interval) {
        clearInterval(this.interval);
      }
    }
  }
});

/***/ }),

/***/ "./packages/payments/resources/js/pages/user/account/deposits/complete.vue":
/*!*********************************************************************************!*\
  !*** ./packages/payments/resources/js/pages/user/account/deposits/complete.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _complete_vue_vue_type_template_id_3c389a76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete.vue?vue&type=template&id=3c389a76& */ "./packages/payments/resources/js/pages/user/account/deposits/complete.vue?vue&type=template&id=3c389a76&");
/* harmony import */ var _complete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete.vue?vue&type=script&lang=js& */ "./packages/payments/resources/js/pages/user/account/deposits/complete.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _complete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _complete_vue_vue_type_template_id_3c389a76___WEBPACK_IMPORTED_MODULE_0__.render,
  _complete_vue_vue_type_template_id_3c389a76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/payments/resources/js/pages/user/account/deposits/complete.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/payments/resources/js/components/Deposits/Paytm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./packages/payments/resources/js/components/Deposits/Paytm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paytm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Paytm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/components/Deposits/Paytm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paytm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/payments/resources/js/components/Deposits/Smartfastpay.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./packages/payments/resources/js/components/Deposits/Smartfastpay.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Smartfastpay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Smartfastpay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/components/Deposits/Smartfastpay.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Smartfastpay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/payments/resources/js/pages/user/account/deposits/complete.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./packages/payments/resources/js/pages/user/account/deposits/complete.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_complete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./complete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/complete.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_complete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CountdownTimer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/CountdownTimer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountdownTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CountdownTimer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CountdownTimer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountdownTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/components/Deposits/Paytm.vue?vue&type=template&id=5ab3e39c&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/components/Deposits/Paytm.vue?vue&type=template&id=5ab3e39c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VSkeletonLoader */ "./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      type: "heading",
      loading: !_vm.deposit
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      label: _vm.$t("Amount"),
      value: _vm.get(_vm.deposit, "payment_amount"),
      suffix: _vm.get(_vm.deposit, "payment_currency"),
      outlined: "",
      readonly: ""
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      type: "button",
      loading: !_vm.deposit
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Pay")) + "\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/components/Deposits/Smartfastpay.vue?vue&type=template&id=2288fe3c&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/components/Deposits/Smartfastpay.vue?vue&type=template&id=2288fe3c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/VDialog.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.get(_vm.deposit, "parameters.account") ? _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_0__["default"], [_c("div", {
    staticClass: "mb-5"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("Please complete the bank transfer using the below credentials.")) + "\n  ")]), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: "amount",
    attrs: {
      label: _vm.$t("Amount"),
      value: _vm.get(_vm.deposit, "payment_amount"),
      suffix: _vm.get(_vm.deposit, "payment_currency"),
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.amount.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: "name",
    attrs: {
      label: _vm.$t("Bank name"),
      value: _vm.get(_vm.deposit, "parameters.name"),
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.name.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: "code",
    attrs: {
      label: _vm.$t("Bank code"),
      value: _vm.get(_vm.deposit, "parameters.code"),
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.code.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: "agency",
    attrs: {
      label: _vm.$t("Agency"),
      value: _vm.get(_vm.deposit, "parameters.agency"),
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.agency.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: "account",
    attrs: {
      label: _vm.$t("Account"),
      value: _vm.get(_vm.deposit, "parameters.account"),
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.account.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: "account_operation",
    attrs: {
      label: _vm.$t("Account operation"),
      value: _vm.get(_vm.deposit, "parameters.account_operation"),
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.account_operation.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: "document",
    attrs: {
      label: _vm.$t("Document"),
      value: _vm.get(_vm.deposit, "parameters.document"),
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.document.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: "beneficiary",
    attrs: {
      label: _vm.$t("Beneficiary"),
      value: _vm.get(_vm.deposit, "parameters.beneficiary"),
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.beneficiary.$el.querySelector("input"));
      }
    }
  })], 1) : _vm.get(_vm.deposit, "parameters.qrcode") ? _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_0__["default"], [_c("div", {
    staticClass: "mb-5"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("Please complete the payment using the below credentials.")) + "\n  ")]), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: "amount",
    attrs: {
      label: _vm.$t("Amount"),
      value: _vm.get(_vm.deposit, "payment_amount"),
      suffix: _vm.get(_vm.deposit, "payment_currency"),
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.amount.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: "reference",
    attrs: {
      label: _vm.$t("Reference"),
      value: _vm.get(_vm.deposit, "parameters.reference"),
      outlined: "",
      readonly: ""
    },
    scopedSlots: _vm._u([{
      key: "append",
      fn: function fn() {
        return [_c(vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            width: "300"
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(_ref) {
              var on = _ref.on;
              return [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                on: {
                  click: function click($event) {
                    _vm.modal = true;
                  }
                }
              }, [_vm._v("\n            mdi-qrcode\n          ")])];
            }
          }]),
          model: {
            value: _vm.modal,
            callback: function callback($$v) {
              _vm.modal = $$v;
            },
            expression: "modal"
          }
        }, [_vm._v(" "), _c("div", {
          staticClass: "text-center",
          domProps: {
            innerHTML: _vm._s(_vm.get(_vm.deposit, "parameters.qr"))
          }
        })]), _vm._v(" "), _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          staticClass: "ml-3",
          on: {
            click: function click($event) {
              _vm.copyToClipboard(_vm.$refs.reference.$el.querySelector("input"));
            }
          }
        }, [_vm._v("\n        mdi-content-copy\n      ")])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: "beneficiary",
    attrs: {
      label: _vm.$t("Beneficiary"),
      value: _vm.get(_vm.deposit, "parameters.beneficiary"),
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.copyToClipboard(_vm.$refs.beneficiary.$el.querySelector("input"));
      }
    }
  }), _vm._v(" "), _vm.get(_vm.deposit, "parameters.expires_in") ? [_c("span", [_vm._v(_vm._s(_vm.$t("Time left")))]), _vm._v(" "), _c("countdown-timer", {
    attrs: {
      "end-date": _vm.get(_vm.deposit, "parameters.expires_in")
    }
  })] : _vm._e()], 2) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/complete.vue?vue&type=template&id=3c389a76&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/complete.vue?vue&type=template&id=3c389a76& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/VDialog.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/VToolbar.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");















var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      align: "center",
      justify: "center"
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_4__["default"], [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_5__.VToolbarTitle, [_vm._v("\n            " + _vm._s(_vm.$t("Complete deposit")) + "\n          ")]), _vm._v(" "), _c("preloader", {
    attrs: {
      active: !_vm.deposit
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_vm.get(_vm.deposit, "method.payment_method.gateway.code") === "coinpayments" ? [_c("p", [_vm._v(_vm._s(_vm.$t("To complete the deposit please make the following transfer")))]), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "amount",
    attrs: {
      label: _vm.$t("Amount"),
      value: _vm["float"](_vm.get(_vm.deposit, "payment_amount")),
      suffix: _vm.get(_vm.deposit, "payment_currency"),
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        return _vm.copyToClipboard(_vm.$refs.amount);
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Address"),
      value: _vm.get(_vm.deposit, "parameters.address"),
      outlined: "",
      readonly: ""
    },
    scopedSlots: _vm._u([{
      key: "append",
      fn: function fn() {
        return [_c(vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
          attrs: {
            width: "300"
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(_ref) {
              var on = _ref.on;
              return [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
                on: {
                  click: function click($event) {
                    _vm.modal = true;
                  }
                }
              }, [_vm._v("\n                      mdi-qrcode\n                    ")])];
            }
          }], null, false, 1744895677),
          model: {
            value: _vm.modal,
            callback: function callback($$v) {
              _vm.modal = $$v;
            },
            expression: "modal"
          }
        }, [_vm._v(" "), _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__["default"], {
          attrs: {
            width: "300",
            height: "300",
            src: _vm.get(_vm.deposit, "parameters.qr_url")
          }
        })], 1), _vm._v(" "), _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
          staticClass: "ml-3",
          on: {
            click: function click($event) {
              return _vm.copyToClipboard(_vm.$refs.address);
            }
          }
        }, [_vm._v("\n                  mdi-content-copy\n                ")])];
      },
      proxy: true
    }], null, false, 2444063883)
  }), _vm._v(" "), _vm.get(_vm.deposit, "parameters.destination_tag") ? _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "destination_tag",
    attrs: {
      label: _vm.$t("Destination tag"),
      value: _vm.get(_vm.deposit, "parameters.destination_tag"),
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        return _vm.copyToClipboard(_vm.$refs.destination_tag);
      }
    }
  }) : _vm._e(), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Time left")))]), _vm._v(" "), _vm.get(_vm.deposit, "parameters.expiration_time") ? _c("countdown-timer", {
    attrs: {
      "end-date": _vm.get(_vm.deposit, "parameters.expiration_time")
    }
  }) : _vm._e()] : _vm.get(_vm.deposit, "method.payment_method.gateway.code") === "cryptapi" ? [_c("p", [_vm._v(_vm._s(_vm.$t("To complete the deposit please make the following transfer")))]), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "amount",
    attrs: {
      label: _vm.$t("Amount"),
      value: _vm["float"](_vm.get(_vm.deposit, "payment_amount")),
      suffix: _vm.get(_vm.deposit, "payment_currency"),
      outlined: "",
      readonly: "",
      "append-icon": "mdi-content-copy"
    },
    on: {
      "click:append": function clickAppend($event) {
        return _vm.copyToClipboard(_vm.$refs.amount);
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Address"),
      value: _vm.get(_vm.deposit, "parameters.address"),
      outlined: "",
      readonly: ""
    },
    scopedSlots: _vm._u([{
      key: "append",
      fn: function fn() {
        return [_c(vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
          attrs: {
            width: "300"
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(_ref2) {
              var on = _ref2.on;
              return [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
                on: {
                  click: function click($event) {
                    _vm.modal = true;
                  }
                }
              }, [_vm._v("\n                      mdi-qrcode\n                    ")])];
            }
          }]),
          model: {
            value: _vm.modal,
            callback: function callback($$v) {
              _vm.modal = $$v;
            },
            expression: "modal"
          }
        }, [_vm._v(" "), _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__["default"], {
          attrs: {
            width: "300",
            height: "300",
            src: "data:image/png;base64," + _vm.get(_vm.deposit, "parameters.qr_url")
          }
        })], 1), _vm._v(" "), _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
          staticClass: "ml-3",
          on: {
            click: function click($event) {
              return _vm.copyToClipboard(_vm.$refs.address);
            }
          }
        }, [_vm._v("\n                  mdi-content-copy\n                ")])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      color: "primary",
      disabled: true
    }
  }, [_c(vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_12__["default"], {
    staticClass: "mr-3",
    attrs: {
      indeterminate: "",
      color: "grey",
      size: 25,
      width: 3
    }
  }), _vm._v("\n              " + _vm._s(_vm.$t("Waiting funds...")) + "\n            ")], 1)] : ["evm"].indexOf(_vm.get(_vm.deposit, "method.payment_method.gateway.code")) > -1 ? [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Address from"),
      value: _vm.get(_vm.deposit, "parameters.addressFrom"),
      outlined: "",
      readonly: ""
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Address to"),
      value: _vm.get(_vm.deposit, "parameters.addressTo"),
      outlined: "",
      readonly: ""
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Amount"),
      value: _vm["float"](_vm.get(_vm.deposit, "payment_amount")),
      suffix: _vm.get(_vm.deposit, "payment_currency"),
      outlined: "",
      readonly: ""
    }
  }), _vm._v(" "), _vm.evmChainName ? _c("p", {
    staticClass: "success--text"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("You are connected to")) + " " + _vm._s(_vm.evmChainName) + "\n            ")]) : _vm._e(), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      color: "primary",
      disabled: _vm.transactionInProgress,
      loading: _vm.transactionInProgress
    },
    on: {
      click: _vm.createEvmTransaction
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Pay")) + "\n            ")]), _vm._v(" "), _vm.transactionInProgress ? _c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_13__["default"], {
    staticClass: "mt-5",
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      color: "warning"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Please do not leave this page until the transaction is completed.")) + "\n            ")]) : _vm._e()] : _vm.get(_vm.deposit, "method.payment_method.gateway.code") === "tron" ? [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Address from"),
      value: _vm.get(_vm.deposit, "parameters.addressFrom"),
      outlined: "",
      readonly: ""
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Address to"),
      value: _vm.get(_vm.deposit, "parameters.addressTo"),
      outlined: "",
      readonly: ""
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Amount"),
      value: _vm["float"](_vm.get(_vm.deposit, "payment_amount")),
      suffix: _vm.get(_vm.deposit, "payment_currency"),
      outlined: "",
      readonly: ""
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      color: "primary",
      disabled: _vm.transactionInProgress,
      loading: _vm.transactionInProgress
    },
    on: {
      click: _vm.createTronTransaction
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Pay")) + "\n            ")]), _vm._v(" "), _vm.transactionInProgress ? _c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_13__["default"], {
    staticClass: "mt-5",
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      color: "warning"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Please do not leave this page until the transaction is completed.")) + "\n            ")]) : _vm._e()] : _vm.get(_vm.deposit, "method.payment_method.gateway.code") === "solana" ? [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Address from"),
      value: _vm.get(_vm.deposit, "parameters.addressFrom"),
      outlined: "",
      readonly: ""
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Address to"),
      value: _vm.get(_vm.deposit, "parameters.addressTo"),
      outlined: "",
      readonly: ""
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Amount"),
      value: _vm["float"](_vm.get(_vm.deposit, "payment_amount")),
      suffix: _vm.get(_vm.deposit, "payment_currency"),
      outlined: "",
      readonly: ""
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      color: "primary",
      disabled: _vm.transactionInProgress,
      loading: _vm.transactionInProgress
    },
    on: {
      click: _vm.createSolanaTransaction
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Pay")) + "\n            ")])] : _vm.get(_vm.deposit, "method.payment_method.gateway.code") === "xrpl" ? [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Address from"),
      value: _vm.get(_vm.deposit, "parameters.addressFrom"),
      outlined: "",
      readonly: ""
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Address to"),
      value: _vm.get(_vm.deposit, "parameters.addressTo"),
      outlined: "",
      readonly: ""
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: "address",
    attrs: {
      label: _vm.$t("Amount"),
      value: _vm["float"](_vm.get(_vm.deposit, "payment_amount")),
      suffix: _vm.get(_vm.deposit, "payment_currency"),
      outlined: "",
      readonly: ""
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      color: "primary",
      disabled: _vm.transactionInProgress,
      loading: _vm.transactionInProgress
    },
    on: {
      click: _vm.createXrplTransaction
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Pay")) + "\n            ")])] : _vm.component ? _c(_vm.component, {
    tag: "component",
    attrs: {
      deposit: _vm.deposit
    }
  }) : _vm._e()], 2)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CountdownTimer.vue?vue&type=template&id=5ad578bf&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CountdownTimer.vue?vue&type=template&id=5ad578bf& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", [_vm._v(_vm._s(_vm.timer))]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/payments/resources/js/components/Deposits/Paytm.vue?vue&type=template&id=5ab3e39c&":
/*!*****************************************************************************************************!*\
  !*** ./packages/payments/resources/js/components/Deposits/Paytm.vue?vue&type=template&id=5ab3e39c& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paytm_vue_vue_type_template_id_5ab3e39c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paytm_vue_vue_type_template_id_5ab3e39c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paytm_vue_vue_type_template_id_5ab3e39c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Paytm.vue?vue&type=template&id=5ab3e39c& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/components/Deposits/Paytm.vue?vue&type=template&id=5ab3e39c&");


/***/ }),

/***/ "./packages/payments/resources/js/components/Deposits/Smartfastpay.vue?vue&type=template&id=2288fe3c&":
/*!************************************************************************************************************!*\
  !*** ./packages/payments/resources/js/components/Deposits/Smartfastpay.vue?vue&type=template&id=2288fe3c& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Smartfastpay_vue_vue_type_template_id_2288fe3c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Smartfastpay_vue_vue_type_template_id_2288fe3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Smartfastpay_vue_vue_type_template_id_2288fe3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Smartfastpay.vue?vue&type=template&id=2288fe3c& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/components/Deposits/Smartfastpay.vue?vue&type=template&id=2288fe3c&");


/***/ }),

/***/ "./packages/payments/resources/js/pages/user/account/deposits/complete.vue?vue&type=template&id=3c389a76&":
/*!****************************************************************************************************************!*\
  !*** ./packages/payments/resources/js/pages/user/account/deposits/complete.vue?vue&type=template&id=3c389a76& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_complete_vue_vue_type_template_id_3c389a76___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_complete_vue_vue_type_template_id_3c389a76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_complete_vue_vue_type_template_id_3c389a76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./complete.vue?vue&type=template&id=3c389a76& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/complete.vue?vue&type=template&id=3c389a76&");


/***/ }),

/***/ "./resources/js/components/CountdownTimer.vue?vue&type=template&id=5ad578bf&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/CountdownTimer.vue?vue&type=template&id=5ad578bf& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CountdownTimer_vue_vue_type_template_id_5ad578bf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CountdownTimer_vue_vue_type_template_id_5ad578bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CountdownTimer_vue_vue_type_template_id_5ad578bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CountdownTimer.vue?vue&type=template&id=5ad578bf& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CountdownTimer.vue?vue&type=template&id=5ad578bf&");


/***/ }),

/***/ "?2759":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d36c":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?f4e8":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?599d":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./packages/payments/resources/js/static/chains.json":
/*!***********************************************************!*\
  !*** ./packages/payments/resources/js/static/chains.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"1":"Ethereum Mainnet","2":"Expanse Network","3":"Ropsten","4":"Rinkeby","5":"Görli","6":"Ethereum Classic Testnet Kotti","7":"ThaiChain","8":"Ubiq","9":"Ubiq Network Testnet","10":"Optimism","11":"Metadium Mainnet","12":"Metadium Testnet","13":"Diode Testnet Staging","14":"Flare Mainnet","15":"Diode Prenet","16":"Flare Testnet Coston","17":"ThaiChain 2.0 ThaiFi","18":"ThunderCore Testnet","19":"Songbird Canary-Network","20":"Elastos Smart Chain","21":"ELA-ETH-Sidechain Testnet","22":"ELA-DID-Sidechain Mainnet","23":"ELA-DID-Sidechain Testnet","24":"Dithereum Mainnet","25":"Cronos Mainnet Beta","26":"Genesis L1 testnet","27":"ShibaChain","28":"Boba Network Rinkeby Testnet","29":"Genesis L1","30":"RSK Mainnet","31":"RSK Testnet","32":"GoodData Testnet","33":"GoodData Mainnet","34":"Dithereum Testnet","35":"TBWG Chain","38":"Valorbit","40":"Telos EVM Mainnet","41":"Telos EVM Testnet","42":"Kovan","43":"Darwinia Pangolin Testnet","44":"Darwinia Crab Network","45":"Darwinia Pangoro Testnet","50":"XinFin Network Mainnet","51":"XinFin Apothem Testnet","52":"CoinEx Smart Chain Mainnet","53":"CoinEx Smart Chain Testnet","54":"Openpiece Mainnet","55":"Zyx Mainnet","56":"Binance Smart Chain Mainnet","57":"Syscoin Mainnet","58":"Ontology Mainnet","59":"EOS Mainnet","60":"GoChain","61":"Ethereum Classic Mainnet","62":"Ethereum Classic Testnet Morden","63":"Ethereum Classic Testnet Mordor","64":"Ellaism","65":"OKExChain Testnet","66":"OKXChain Mainnet","67":"DBChain Testnet","68":"SoterOne Mainnet","69":"Optimism Kovan","70":"Hoo Smart Chain","71":"Conflux eSpace (Testnet)","74":"IDChain Mainnet","76":"Mix","77":"POA Network Sokol","78":"PrimusChain mainnet","79":"Zenith Mainnet","80":"GeneChain","81":"Zenith Testnet (Vilnius)","82":"Meter Mainnet","83":"Meter Testnet","85":"GateChain Testnet","86":"GateChain Mainnet","87":"Nova Network","88":"TomoChain","89":"TomoChain Testnet","90":"Garizon Stage0","91":"Garizon Stage1","92":"Garizon Stage2","93":"Garizon Stage3","95":"CryptoKylin Testnet","96":"NEXT Smart Chain","97":"Binance Smart Chain Testnet","99":"POA Network Core","100":"Gnosis Chain (formerly xDai)","101":"EtherInc","102":"Web3Games Testnet","105":"Web3Games Devnet","106":"Velas EVM Mainnet","107":"Nebula Testnet","108":"ThunderCore Mainnet","110":"Proton Testnet","111":"EtherLite Chain","122":"Fuse Mainnet","123":"Fuse Sparknet","124":"Decentralized Web Mainnet","125":"OYchain Testnet","126":"OYchain Mainnet","127":"Factory 127 Mainnet","128":"Huobi ECO Chain Mainnet","137":"Polygon Mainnet","141":"Openpiece Testnet","142":"DAX CHAIN","162":"Lightstreams Testnet","163":"Lightstreams Mainnet","168":"AIOZ Network","170":"HOO Smart Chain Testnet","172":"Latam-Blockchain Resil Testnet","186":"Seele Mainnet","188":"BMC Mainnet","189":"BMC Testnet","199":"BitTorrent Chain Mainnet","200":"Arbitrum on xDai","211":"Freight Trust Network","218":"SoterOne Mainnet old","222":"Permission","225":"LACHAIN Mainnet","226":"LACHAIN Testnet","239":"Aitd Testnet","246":"Energy Web Chain","250":"Fantom Opera","256":"Huobi ECO Chain Testnet","258":"Setheum","262":"SUR Blockchain Network","269":"High Performance Blockchain","288":"Boba Network","300":"Optimism on Gnosis Chain","321":"KCC Mainnet","322":"KCC Testnet","333":"Web3Q Mainnet","335":"DFK Chain Test","336":"Shiden","338":"Cronos Testnet","361":"Theta Mainnet","363":"Theta Sapphire Testnet","364":"Theta Amber Testnet","365":"Theta Testnet","369":"PulseChain Mainnet","385":"Lisinski","420":"Optimistic Ethereum Testnet Goerli","499":"Rupaya","512":"Double-A Chain Mainnet","513":"Double-A Chain Testnet","534":"Candle Mainnet","555":"Vela1 Chain Mainnet","558":"Tao Network","588":"Metis Stardust Testnet","592":"Astar","595":"Acala Mandala Testnet","596":"Karura Network Testnet","597":"Acala Network Testnet","600":"Meshnyan testnet","666":"Pixie Chain Testnet","686":"Karura Network","700":"Star Social Testnet","707":"BlockChain Station Mainnet","708":"BlockChain Station Testnet","721":"Factory 127 Testnet","776":"OpenChain Testnet","777":"cheapETH","787":"Acala Network","788":"Aerochain Testnet","803":"Haic","820":"Callisto Mainnet","821":"Callisto Testnet","880":"Ambros Chain Mainnet","888":"Wanchain","900":"Garizon Testnet Stage0","901":"Garizon Testnet Stage1","902":"Garizon Testnet Stage2","903":"Garizon Testnet Stage3","940":"PulseChain Testnet","941":"PulseChain Testnet v2b","942":"PulseChain Testnet v3","977":"Nepal Blockchain Network","998":"Lucky Network","999":"Wanchain Testnet","1001":"Klaytn Testnet Baobab","1007":"Newton Testnet","1008":"Eurus Mainnet","1010":"Evrice Network","1012":"Newton","1022":"Sakura","1023":"Clover Testnet","1024":"CLV Parachain","1028":"BitTorrent Chain Testnet","1030":"Conflux eSpace","1088":"Metis Andromeda Mainnet","1139":"MathChain","1140":"MathChain Testnet","1197":"Iora Chain","1201":"Evanesco Testnet","1202":"World Trade Technical Chain Mainnet","1213":"Popcateum Mainnet","1214":"EnterChain Mainnet","1280":"HALO Mainnet","1284":"Moonbeam","1285":"Moonriver","1286":"Moonrock old","1287":"Moonbase Alpha","1288":"Moonrock","1337":"CENNZnet old","1618":"Catecoin Chain Mainnet","1620":"Atheios","1657":"Btachain","1688":"LUDAN Mainnet","1819":"Cube Chain Testnet","1856":"Teslafunds","1898":"BON Network","1984":"Eurus Testnet","1987":"EtherGem","2001":"Milkomeda C1 Mainnet","2008":"CloudWalk Testnet","2009":"CloudWalk Mainnet","2020":"420coin","2021":"Edgeware Mainnet","2022":"Beresheet Testnet","2023":"Taycan Testnet","2025":"Rangers Protocol Mainnet","2100":"Ecoball Mainnet","2101":"Ecoball Testnet Espuma","2152":"Findora Mainnet","2153":"Findora Testnet","2213":"Evanesco Mainnet","2221":"Kava EVM Testnet","2223":"VChain Mainnet","2559":"Kortho Mainnet","2569":"TechPay Mainnet","2612":"EZChain C-Chain Mainnet","2613":"EZChain C-Chain Testnet","3000":"CENNZnet Rata","3001":"CENNZnet Nikau","3331":"ZCore Testnet","3333":"Web3Q Testnet","3334":"Web3Q Galileo","3400":"Paribu Net Mainnet","3500":"Paribu Net Testnet","3690":"Bittex Mainnet","3966":"DYNO Mainnet","3967":"DYNO Testnet","4002":"Fantom Testnet","4102":"AIOZ Network Testnet","4689":"IoTeX Network Mainnet","4690":"IoTeX Network Testnet","4918":"Venidium Testnet","5197":"EraSwap Mainnet","5315":"Uzmi Network Mainnet","5551":"Nahmii Mainnet","5553":"Nahmii Testnet","5700":"Syscoin Tanenbaum Testnet","5777":"Digest Swarm Chain","5851":"Ontology Testnet","5869":"Wegochain Rubidium Mainnet","6626":"Pixie Chain Mainnet","7341":"Shyft Mainnet","7878":"Hazlor Testnet","8000":"Teleport","8001":"Teleport Testnet","8029":"MDGL Testnet","8080":"GeneChain Adenine Testnet","8217":"Klaytn Mainnet Cypress","8285":"KorthoTest","8723":"TOOL Global Mainnet","8724":"TOOL Global Testnet","8888":"Ambros Chain Testnet","8898":"Mammoth Mainnet","8995":"bloxberg","9000":"Evmos Testnet","9001":"Evmos","9100":"Genesis Coin","9527":"Rangers Protocol Testnet Robin","9999":"myOwn Testnet","10000":"Smart Bitcoin Cash","10001":"Smart Bitcoin Cash Testnet","10101":"Blockchain Genesis Mainnet","10823":"CryptoCoinPay","11111":"WAGMI","11437":"Shyft Testnet","12051":"Singularity ZERO Testnet","12052":"Singularity ZERO Mainnet","13381":"Phoenix Mainnet","16000":"MetaDot Mainnet","16001":"MetaDot Testnet","19845":"BTCIX Network","21337":"CENNZnet Azalea","21816":"omChain Mainnet","22023":"Taycan","24484":"Webchain","24734":"MintMe.com Coin","30067":"Piece testnet","31102":"Ethersocial Network","31337":"GoChain Testnet","32520":"Bitgert Mainnet","32659":"Fusion Mainnet","39797":"Energi Mainnet","42069":"pegglecoin","42161":"Arbitrum One","42220":"Celo Mainnet","42261":"Emerald Paratime Testnet","42262":"Emerald Paratime Mainnet","43110":"Athereum","43113":"Avalanche Fuji Testnet","43114":"Avalanche C-Chain","44787":"Celo Alfajores Testnet","45000":"Autobahn Network","47805":"REI Network","49797":"Energi Testnet","53935":"DFK Chain","55555":"REI Chain Mainnet","55556":"REI Chain Testnet","60000":"Thinkium Testnet Chain 0","60001":"Thinkium Testnet Chain 1","60002":"Thinkium Testnet Chain 2","60103":"Thinkium Testnet Chain 103","62320":"Celo Baklava Testnet","62621":"MultiVAC Mainnet","63000":"eCredits Mainnet","63001":"eCredits Testnet","69420":"Condrieu","70000":"Thinkium Mainnet Chain 0","70001":"Thinkium Mainnet Chain 1","70002":"Thinkium Mainnet Chain 2","70103":"Thinkium Mainnet Chain 103","71393":"Polyjuice Testnet","73799":"Energy Web Volta Testnet","78110":"Firenze test network","80001":"Mumbai","99998":"UB Smart Chain(testnet)","99999":"UB Smart Chain","100000":"QuarkChain Mainnet Root","100001":"QuarkChain Mainnet Shard 0","100002":"QuarkChain Mainnet Shard 1","100003":"QuarkChain Mainnet Shard 2","100004":"QuarkChain Mainnet Shard 3","100005":"QuarkChain Mainnet Shard 4","100006":"QuarkChain Mainnet Shard 5","100007":"QuarkChain Mainnet Shard 6","100008":"QuarkChain Mainnet Shard 7","108801":"BROChain Mainnet","110000":"QuarkChain Devnet Root","110001":"QuarkChain Devnet Shard 0","110002":"QuarkChain Devnet Shard 1","110003":"QuarkChain Devnet Shard 2","110004":"QuarkChain Devnet Shard 3","110005":"QuarkChain Devnet Shard 4","110006":"QuarkChain Devnet Shard 5","110007":"QuarkChain Devnet Shard 6","110008":"QuarkChain Devnet Shard 7","200101":"Milkomeda C1 Testnet","200625":"Akroma","201018":"Alaya Mainnet","201030":"Alaya Dev Testnet","210425":"PlatON Mainnet","234666":"Haymo Testnet","246529":"ARTIS sigma1","246785":"ARTIS Testnet tau1","281121":"Social Smart Chain Mainnet","333888":"Polis Testnet","333999":"Polis Mainnet","421611":"Arbitrum Rinkeby","444900":"Weelink Testnet","512512":"CMP-Testnet","666666":"Vision - Vpioneer Test Chain","888888":"Vision - Mainnet","955305":"Eluvio Content Fabric","1313114":"Etho Protocol","1313500":"Xerom","1337702":"Kintsugi","2203181":"PlatON Dev Testnet","7762959":"Musicoin","11155111":"Sepolia","13371337":"PepChain Churchill","18289463":"IOLite","20180430":"SmartMesh Mainnet","20181205":"quarkblockchain","28945486":"Auxilium Network Mainnet","35855456":"Joys Digital Mainnet","61717561":"Aquachain","99415706":"Joys Digital TestNet","192837465":"Gather Mainnet Network","245022926":"Neon EVM DevNet","245022934":"Neon EVM MainNet","245022940":"Neon EVM TestNet","311752642":"OneLedger Mainnet","356256156":"Gather Testnet Network","486217935":"Gather Devnet Network","1122334455":"IPOS Network","1313161554":"Aurora Mainnet","1313161555":"Aurora Testnet","1313161556":"Aurora Betanet","1666600000":"Harmony Mainnet Shard 0","1666600001":"Harmony Mainnet Shard 1","1666600002":"Harmony Mainnet Shard 2","1666600003":"Harmony Mainnet Shard 3","1666700000":"Harmony Testnet Shard 0","1666700001":"Harmony Testnet Shard 1","1666700002":"Harmony Testnet Shard 2","1666700003":"Harmony Testnet Shard 3","2021121117":"DataHopper","3125659152":"Pirl","4216137055":"OneLedger Testnet Frankenstein","11297108099":"Palm Testnet","11297108109":"Palm","197710212030":"Ntity Mainnet","197710212031":"Haradev Testnet","6022140761023":"Molereum Network","868455272153094":"Godwoken Testnet (V1)"}');

/***/ }),

/***/ "./packages/payments/resources/js/static/contract-abi.json":
/*!*****************************************************************!*\
  !*** ./packages/payments/resources/js/static/contract-abi.json ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');

/***/ })

}]);