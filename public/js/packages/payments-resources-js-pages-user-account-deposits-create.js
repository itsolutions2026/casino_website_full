(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/payments-resources-js-pages-user-account-deposits-create"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.min.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_FormParameter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/FormParameter */ "./resources/js/components/FormParameter.vue");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var packages_payments_resources_js_static_chains__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! packages/payments/resources/js/static/chains */ "./packages/payments/resources/js/static/chains.json");
/* harmony import */ var xumm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xumm */ "./node_modules/xumm/dist/index.js");
/* harmony import */ var xumm__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xumm__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FormParameter: _components_FormParameter__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_5__["default"]],
  middleware: ['auth', 'verified', '2fa_passed'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Make a deposit')
    };
  },
  data: function data() {
    return {
      method: null,
      // currently selected deposit method object
      methods: null,
      formIsProcessing: false,
      submitButtonText: this.$t('Proceed'),
      form: new (vform__WEBPACK_IMPORTED_MODULE_4___default())({
        amount: null,
        payment_currency: null,
        parameters: {}
      }),
      evm: {
        addresses: [],
        confirmedAddresses: null,
        addressConfirmationInProgress: false,
        web: null,
        wallet: {
          isInstalled: false,
          isConnected: false
        }
      },
      tron: {
        addresses: [],
        confirmedAddresses: null,
        addressConfirmationInProgress: false,
        web: null,
        wallet: {
          isInstalled: false,
          isConnected: false
        }
      },
      solana: {
        confirmedAddresses: null,
        addressConfirmationInProgress: false,
        phantom: {
          isInstalled: false,
          isConnected: false
        }
      },
      xrpl: {
        confirmedAddresses: null,
        addressConfirmationInProgress: false,
        xumm: {
          signature: null,
          isInstalled: false,
          isConnected: false
        }
      },
      xummInstance: null,
      stripe: {
        instance: null,
        elements: null,
        card: null
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_11__.mapState)('auth', ['user'])), {}, {
    currency: function currency() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(this.method, 'currency');
    },
    rate: function rate() {
      return this.form.payment_currency && this.paymentCurrenciesCount > 0 ? this.paymentCurrencies[this.form.payment_currency].rate_credits : (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(this.method, 'rate', 0);
    },
    paymentAmount: function paymentAmount() {
      var decimalPlaces = (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(this.method, 'decimal_places');
      return this.rate > 0 && this.form.amount > 0 ? (0,_plugins_format__WEBPACK_IMPORTED_MODULE_3__.decimal)(this.form.amount / this.rate, decimalPlaces || 8) : 0;
    },
    paymentCurrencies: function paymentCurrencies() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(this.method, 'payment_currencies');
    },
    paymentCurrenciesCount: function paymentCurrenciesCount() {
      return this.paymentCurrencies ? Object.keys(this.paymentCurrencies).length : 0;
    },
    depositMin: function depositMin() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(this.method, 'min_amount');
    },
    depositMax: function depositMax() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(this.method, 'max_amount');
    },
    evmAddressIsConfirmed: function evmAddressIsConfirmed() {
      var _this = this;
      return this.evm.confirmedAddresses && !!this.evm.confirmedAddresses.find(function (item) {
        return item.address === _this.form.parameters.address;
      });
    },
    tronAddressIsConfirmed: function tronAddressIsConfirmed() {
      var _this2 = this;
      return this.tron.confirmedAddresses && !!this.tron.confirmedAddresses.find(function (item) {
        return item.address === _this2.form.parameters.address;
      });
    },
    solanaAddressIsConfirmed: function solanaAddressIsConfirmed() {
      var _this3 = this;
      return this.solana.confirmedAddresses && !!this.solana.confirmedAddresses.find(function (item) {
        return item.address === _this3.form.parameters.address;
      });
    },
    xrplAddressIsConfirmed: function xrplAddressIsConfirmed() {
      var _this4 = this;
      return this.xrpl.confirmedAddresses && !!this.xrpl.confirmedAddresses.find(function (item) {
        return item.address === _this4.form.parameters.address;
      });
    },
    evmChainName: function evmChainName() {
      return (web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider) ? packages_payments_resources_js_static_chains__WEBPACK_IMPORTED_MODULE_9__[(web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider.networkVersion)] || this.$t('Unknown chain') : null;
    }
  }),
  watch: {
    method: function method(_method) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var code;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this5.formIsValid = true;
                _this5.form.errors.clear();
                _this5.$nextTick(function () {
                  _this5.form.amount = _this5.depositMin;
                });
                code = (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(_method, 'payment_method.gateway.code'); // disable credentials for tron to avoid this error:
                // Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'
                (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = code !== 'tron';
                _this5.form.parameters = {};
                // Assign default values to custom parameters
                if (_method && _method.parameters) {
                  _method.parameters.forEach(function (parameter) {
                    _this5.$set(_this5.form.parameters, parameter.id, parameter["default"]);
                  });
                }

                // Assign default values to built-in method parameters
                if (_method && _method.payment_method) {
                  _method.payment_method.input_parameters.forEach(function (parameter) {
                    _this5.$set(_this5.form.parameters, parameter.id, parameter["default"]);
                  });
                }
                if (code === 'stripe') {
                  if (_this5.stripe.instance) {
                    _this5.$nextTick(function () {
                      _this5.initStripe();
                    });
                  } else {
                    (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.loadScript)('https://js.stripe.com/v3/', _this5.initStripe);
                  }
                } else if (code === 'evm') {
                  if ((web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider)) {
                    _this5.evm.wallet.isInstalled = true;
                    if ((web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider.selectedAddress)) {
                      _this5.connectWeb3Wallet();
                    }
                  }
                } else if (code === 'tron') {
                  if (window.tronWeb) {
                    _this5.tron.wallet.isInstalled = true;
                  }
                } else if (code === 'solana') {
                  if (window.solana) {
                    _this5.solana.phantom.isInstalled = window.solana && window.solana.isPhantom;
                    _this5.connectPhantom(true);
                  }
                } else if (code === 'xrpl') {
                  _this5.xummInstance = new xumm__WEBPACK_IMPORTED_MODULE_10__.Xumm((0,_plugins_config__WEBPACK_IMPORTED_MODULE_1__.config)('payments.xrpl.api_key'));
                  _this5.xummInstance.on('success', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    var _yield$_this5$xummIns, payload_uuidv4;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _this5.xummInstance.environment.jwt;
                          case 2:
                            _yield$_this5$xummIns = _context.sent;
                            payload_uuidv4 = _yield$_this5$xummIns.payload_uuidv4;
                            _this5.xrpl.xumm.signature = payload_uuidv4;
                            _this5.xummInstance.user.account.then(function (account) {
                              if (account) {
                                _this5.$set(_this5.form.parameters, 'address', account);
                                _this5.xrpl.xumm.isConnected = true;
                                _this5.fetchConfirmedBlockchainAddresses('xrpl');
                              }
                            });
                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  })));
                  if (_this5.xummInstance) {
                    _this5.xrpl.xumm.isInstalled = true;
                  }
                }
                _this5.form.payment_currency = _this5.paymentCurrencies ? Object.keys(_this5.paymentCurrencies)[0] : null;
              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    evmAddressIsConfirmed: function evmAddressIsConfirmed(confirmed) {
      this.checkAddress(confirmed);
    },
    tronAddressIsConfirmed: function tronAddressIsConfirmed(confirmed) {
      this.checkAddress(confirmed);
    },
    solanaAddressIsConfirmed: function solanaAddressIsConfirmed(confirmed) {
      this.checkAddress(confirmed);
    }
  },
  created: function created() {
    var _this6 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _yield$axios$get, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this6.$store.dispatch('auth/fetchUser');
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/deposit-methods');
            case 3:
              _yield$axios$get = _context3.sent;
              data = _yield$axios$get.data;
              _this6.methods = data;
            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;
  },
  methods: {
    get: _plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get,
    chooseMethod: function chooseMethod(method) {
      this.method = method;
      window.scrollTo(0, 0);
    },
    checkAddress: function checkAddress(confirmed) {
      if (confirmed) {
        this.form.errors.clear('parameters.address');
      } else if (!confirmed && this.form.parameters.address) {
        this.form.errors.set('parameters.address', this.$t('Please confirm this address belongs to you by signing a random text string.'));
      }
    },
    initWeb3: function initWeb3(blockchain) {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var web, addresses;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if ((web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider)) {
                  _context4.next = 4;
                  break;
                }
                _this7.$store.dispatch('message/error', {
                  text: _this7.$t('Please check that a {0} compatible wallet (such as {1}) is installed and enabled in your browser.', ['Web3', 'Metamask'])
                });
                _this7.formIsValid = false;
                return _context4.abrupt("return", false);
              case 4:
                web = new (web3__WEBPACK_IMPORTED_MODULE_6___default())((web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider));
                _this7[blockchain].web = web;
                _context4.prev = 6;
                _context4.next = 9;
                return web.eth.requestAccounts();
              case 9:
                addresses = _context4.sent;
                _this7[blockchain].addresses = addresses;
                _this7.$set(_this7.form.parameters, 'address', addresses[0]);
                _this7.fetchConfirmedBlockchainAddresses(blockchain);
                _context4.next = 19;
                break;
              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](6);
                _this7.$store.dispatch('message/error', {
                  text: _context4.t0.code === 4001 ? _this7.$t('Access to your account is not authorized') : _context4.t0.message
                });
                _this7.formIsValid = false;
              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[6, 15]]);
      }))();
    },
    connectTronlink: function connectTronlink() {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var web, address;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                web = window.tronWeb;
                _this8.tron.web = web;
                address = web.defaultAddress.base58;
                if (address !== false) {
                  _this8.tron.wallet.isConnected = true;
                  _this8.$set(_this8.form.parameters, 'address', address);
                  _this8.fetchConfirmedBlockchainAddresses('tron');
                } else {
                  _this8.$store.dispatch('message/error', {
                    text: _this8.$t('Access to your account is not authorized')
                  });
                  _this8.formIsValid = false;
                }
              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    connectWeb3Wallet: function connectWeb3Wallet() {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var web, addresses;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                web = new (web3__WEBPACK_IMPORTED_MODULE_6___default())((web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider));
                _this9.evm.web = web;
                _context6.prev = 2;
                _context6.next = 5;
                return web.eth.requestAccounts();
              case 5:
                addresses = _context6.sent;
                _context6.next = 13;
                break;
              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](2);
                _this9.$store.dispatch('message/error', {
                  text: _context6.t0.message
                });
                _this9.formIsValid = false;
                return _context6.abrupt("return", false);
              case 13:
                _this9.evm.wallet.isConnected = !!addresses[0];
                _this9.$set(_this9.form.parameters, 'address', addresses[0]);
                _this9.fetchConfirmedBlockchainAddresses('evm');
              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[2, 8]]);
      }))();
    },
    connectPhantom: function connectPhantom(silent) {
      var _this10 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return window.solana.connect({
                  onlyIfTrusted: silent
                });
              case 3:
                _context7.next = 9;
                break;
              case 5:
                _context7.prev = 5;
                _context7.t0 = _context7["catch"](0);
                // { code: 4001, message: 'User rejected the request.' }
                if (!silent) {
                  _this10.$store.dispatch('message/error', {
                    text: _context7.t0.message
                  });
                  _this10.formIsValid = false;
                }
                return _context7.abrupt("return", false);
              case 9:
                _this10.solana.phantom.isConnected = window.solana.isConnected;
                _this10.$set(_this10.form.parameters, 'address', window.solana.publicKey.toString());
                _this10.fetchConfirmedBlockchainAddresses('solana');
              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 5]]);
      }))();
    },
    connectXumm: function connectXumm() {
      var _this11 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _this11.xummInstance.authorize();
                _context8.next = 9;
                break;
              case 4:
                _context8.prev = 4;
                _context8.t0 = _context8["catch"](0);
                _this11.$store.dispatch('message/error', {
                  text: _context8.t0.message
                });
                _this11.formIsValid = false;
                return _context8.abrupt("return", false);
              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 4]]);
      }))();
    },
    disconnectXumm: function disconnectXumm() {
      var _this12 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this12.xummInstance.logout();
              case 2:
                _this12.xrpl.xumm.isConnected = false;
                _this12.xrpl.xumm.signature = null;
                _this12.$set(_this12.form.parameters, 'address', '');
              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    fetchConfirmedBlockchainAddresses: function fetchConfirmedBlockchainAddresses(blockchain) {
      var _this13 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (_this13[blockchain].confirmedAddresses) {
                  _context10.next = 6;
                  break;
                }
                _context10.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/blockchains/".concat(blockchain, "/addresses"));
              case 3:
                _yield$axios$get2 = _context10.sent;
                data = _yield$axios$get2.data;
                _this13[blockchain].confirmedAddresses = data;
              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    confirmBlockchainAddress: function confirmBlockchainAddress() {
      var _this14 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var blockchain, _yield$axios$post, data, signature, address, web, response, request;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                blockchain = (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(_this14.method, 'payment_method.gateway.code');
                _this14[blockchain].addressConfirmationInProgress = true;
                _context11.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/blockchains/".concat(blockchain, "/addresses"), {
                  address: _this14.form.parameters.address
                });
              case 4:
                _yield$axios$post = _context11.sent;
                data = _yield$axios$post.data;
                address = data;
                web = _this14[blockchain].web;
                _context11.prev = 8;
                if (!(blockchain === 'tron')) {
                  _context11.next = 15;
                  break;
                }
                _context11.next = 12;
                return web.trx.sign(web.toHex(address.message).replace(/^0x/, ''));
              case 12:
                signature = _context11.sent;
                _context11.next = 29;
                break;
              case 15:
                if (!(blockchain === 'solana')) {
                  _context11.next = 22;
                  break;
                }
                _context11.next = 18;
                return window.solana.signMessage(new TextEncoder().encode(address.message), 'utf8');
              case 18:
                response = _context11.sent;
                signature = bs58__WEBPACK_IMPORTED_MODULE_8___default().encode(response.signature);
                _context11.next = 29;
                break;
              case 22:
                if (!(blockchain === 'xrpl')) {
                  _context11.next = 26;
                  break;
                }
                signature = _this14.xrpl.xumm.signature;
                _context11.next = 29;
                break;
              case 26:
                _context11.next = 28;
                return web.eth.personal.sign(address.message, _this14.form.parameters.address);
              case 28:
                signature = _context11.sent;
              case 29:
                _context11.next = 34;
                break;
              case 31:
                _context11.prev = 31;
                _context11.t0 = _context11["catch"](8);
                _this14.form.errors.set('parameters.address', _context11.t0.message);
              case 34:
                if (!signature) {
                  _context11.next = 39;
                  break;
                }
                _context11.next = 37;
                return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/blockchains/".concat(blockchain, "/addresses/").concat(address.id, "/verify"), {
                  signature: signature
                });
              case 37:
                request = _context11.sent;
                _this14[blockchain].confirmedAddresses.push(request.data);
              case 39:
                _this14[blockchain].addressConfirmationInProgress = false;
              case 40:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[8, 31]]);
      }))();
    },
    initStripe: function initStripe() {
      var _this15 = this;
      this.stripe.instance = window.Stripe((0,_plugins_config__WEBPACK_IMPORTED_MODULE_1__.config)('payments.stripe.public_key'));
      var style = {
        base: {
          color: this.$vuetify.theme.isDark ? '#fff' : '#000',
          lineHeight: '20px',
          fontFamily: 'inherit',
          fontSize: '16px',
          '::placeholder': {
            color: this.$vuetify.theme.isDark ? 'rgba(255, 255, 255, 0.7)' : '#000'
          },
          fontSmoothing: 'antialiased'
        },
        invalid: {
          color: '#ff5252',
          iconColor: '#ff5252'
        }
      };
      this.stripe.elements = this.stripe.instance.elements();
      this.stripe.card = this.stripe.elements.create('card', {
        style: style
      });
      this.stripe.card.mount(this.$refs.card);

      // Handle real-time validation errors from the card Element.
      this.stripe.card.addEventListener('change', function (event) {
        _this15.$refs.error.textContent = event.error ? event.error.message : '';
      });
    },
    submit: function submit() {
      var _this16 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var _yield$_this16$stripe, paymentMethod, _yield$_this16$form$p, data;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _this16.formIsProcessing = true;
                if (!((0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(_this16.method, 'payment_method.gateway.code') === 'stripe')) {
                  _context12.next = 7;
                  break;
                }
                _context12.next = 4;
                return _this16.stripe.instance.createPaymentMethod('card', _this16.stripe.card, {
                  billing_details: {
                    name: _this16.user.name,
                    email: _this16.user.email
                  }
                });
              case 4:
                _yield$_this16$stripe = _context12.sent;
                paymentMethod = _yield$_this16$stripe.paymentMethod;
                _this16.form.parameters.payment_method_id = paymentMethod.id;
              case 7:
                _context12.next = 9;
                return _this16.form.post("/api/deposits/methods/".concat(_this16.method.id))["catch"](function () {
                  return false;
                });
              case 9:
                _yield$_this16$form$p = _context12.sent;
                data = _yield$_this16$form$p.data;
                // data will be undefined in case of any form errors (422 HTTP code)

                if (data) {
                  if (data.success) {
                    if (data.redirect) {
                      if (data.redirect.external) {
                        _this16.submitButtonText = _this16.$t('Redirecting') + '...';
                        window.location.href = data.redirect.url;
                      } else {
                        _this16.$router.push({
                          name: data.redirect.url,
                          params: data.redirect.params
                        });
                      }
                    } else {
                      _this16.$router.push({
                        name: 'user.account.deposits.index',
                        query: {
                          status: 'complete'
                        }
                      });
                    }
                    // error
                  } else {
                    _this16.$store.dispatch('message/error', {
                      text: data.message
                    });
                    _this16.formIsProcessing = false;
                  }
                } else {
                  _this16.formIsProcessing = false;
                }
              case 12:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormParameter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormParameter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=7a63f5f9&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=7a63f5f9&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".method-description[data-v-7a63f5f9] {\n  white-space: pre-line;\n}\n.StripeElement[data-v-7a63f5f9] {\n  padding: 16px 0 16px 12px;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.24);\n}\n.StripeElement .ElementsApp .InputElement[data-v-7a63f5f9] {\n  font-size: 16px;\n  line-height: 20px;\n  padding: 8px 0 8px;\n}\n.StripeElement--focus[data-v-7a63f5f9] {\n  border-width: 2px;\n  border-color: var(--v-primary-base);\n}\n.StripeElement--invalid[data-v-7a63f5f9] {\n  border-color: #ff5252;\n}\n.theme-light .StripeElement[data-v-7a63f5f9] {\n  border-color: rgba(0, 0, 0, 0.42);\n}\n.theme-light .StripeElement--focus[data-v-7a63f5f9] {\n  border-color: var(--v-primary-base);\n}\n\n/*.v-alert::v-deep {\n  .v-alert__wrapper {\n    .v-icon {\n      align-self: center;\n    }\n  }\n}*/", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=7a63f5f9&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=7a63f5f9&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_7a63f5f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&id=7a63f5f9&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=7a63f5f9&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_7a63f5f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_7a63f5f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./packages/payments/resources/js/pages/user/account/deposits/create.vue":
/*!*******************************************************************************!*\
  !*** ./packages/payments/resources/js/pages/user/account/deposits/create.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_7a63f5f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=7a63f5f9&scoped=true& */ "./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=template&id=7a63f5f9&scoped=true&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _create_vue_vue_type_style_index_0_id_7a63f5f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&id=7a63f5f9&lang=scss&scoped=true& */ "./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=7a63f5f9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_7a63f5f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_7a63f5f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7a63f5f9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/payments/resources/js/pages/user/account/deposits/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FormParameter.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/FormParameter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormParameter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormParameter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormParameter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormParameter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=7a63f5f9&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=7a63f5f9&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_7a63f5f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&id=7a63f5f9&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=7a63f5f9&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=template&id=7a63f5f9&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=template&id=7a63f5f9&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VList.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/VMenu.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VSkeletonLoader */ "./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/VToolbar.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");




















var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__["default"], [!_vm.methods ? _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      align: "center",
      justify: "center"
    }
  }, _vm._l([0, 1, 2], function (i) {
    return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: i,
      attrs: {
        cols: "12",
        md: "4",
        lg: "3"
      }
    }, [_c(vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attrs: {
        type: "card"
      }
    })], 1);
  }), 1) : _vm.methods.length > 0 ? _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      align: "center",
      justify: "center"
    }
  }, [!_vm.method ? _vm._l(_vm.methods, function (mtd) {
    return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: mtd.id,
      attrs: {
        cols: "12",
        md: "4",
        lg: "3"
      },
      on: {
        click: function click($event) {
          return _vm.chooseMethod(mtd);
        }
      }
    }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["default"], [mtd.banner ? _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      staticClass: "cursor-pointer",
      attrs: {
        src: mtd.banner,
        height: "200"
      }
    }) : _vm._e(), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
      staticClass: "cursor-pointer justify-center"
    }, [_vm._v("\n            " + _vm._s(mtd.name) + "\n          ")])], 1)], 1);
  }) : _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["default"], [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_7__["default"], [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      icon: ""
    },
    on: {
      click: function click($event) {
        _vm.method = null;
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], [_vm._v("mdi-arrow-left")])], 1), _vm._v(" "), _c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_10__.VToolbarTitle, [_vm._v("\n            " + _vm._s(_vm.method.name) + "\n          ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_vm.method.description ? _c("div", {
    staticClass: "method-description mb-5",
    domProps: {
      innerHTML: _vm._s(_vm.method.description)
    }
  }) : _vm._e(), _vm._v(" "), _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    },
    model: {
      value: _vm.formIsValid,
      callback: function callback($$v) {
        _vm.formIsValid = $$v;
      },
      expression: "formIsValid"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    attrs: {
      label: _vm.$t("Deposit amount"),
      suffix: _vm.$t("credits"),
      rules: [function (v) {
        return _vm.validationMin(v, _vm.depositMin);
      }, function (v) {
        return _vm.validationMax(v, _vm.depositMax);
      }],
      error: _vm.form.errors.has("amount"),
      "error-messages": _vm.form.errors.get("amount"),
      disabled: _vm.formIsProcessing,
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "amount");
      }
    },
    model: {
      value: _vm.form.amount,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "amount", _vm._n($$v));
      },
      expression: "form.amount"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    staticClass: "input-with-button",
    attrs: {
      value: _vm.paymentAmount,
      label: _vm.$t("Payment amount"),
      suffix: _vm.paymentCurrenciesCount > 0 ? "" : _vm.currency,
      error: _vm.form.errors.has("payment_currency"),
      "error-messages": _vm.form.errors.get("payment_currency"),
      disabled: _vm.formIsProcessing,
      outlined: "",
      readonly: ""
    },
    scopedSlots: _vm._u([_vm.paymentCurrenciesCount > 0 ? {
      key: "append",
      fn: function fn() {
        return [_c(vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {
          attrs: {
            top: "",
            right: "",
            "max-height": "300",
            disabled: _vm.formIsProcessing || _vm.paymentCurrenciesCount === 1
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(_ref) {
              var on = _ref.on;
              return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], _vm._g({
                attrs: {
                  text: ""
                }
              }, on), [_vm._v("\n                      " + _vm._s(_vm.form.payment_currency) + "\n                      "), _vm.paymentCurrenciesCount > 1 ? _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], [_vm._v("\n                        mdi-menu-down\n                      ")]) : _vm._e()], 1)];
            }
          }], null, false, 3656334950)
        }, [_vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["default"], _vm._l(_vm.paymentCurrencies, function (ccy, symbol) {
          return _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__["default"], {
            key: symbol,
            on: {
              click: function click($event) {
                _vm.form.payment_currency = symbol;
              }
            }
          }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_16__.VListItemTitle, [ccy.name ? [_vm._v("\n                          " + _vm._s(symbol) + " - " + _vm._s(ccy.name) + "\n                        ")] : [_vm._v("\n                          " + _vm._s(symbol) + "\n                        ")]], 2)], 1);
        }), 1)], 1)];
      },
      proxy: true
    } : null], null, true)
  }), _vm._v(" "), _vm.get(_vm.method, "payment_method.gateway.code") === "stripe" ? [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.parameters.payment_method_id,
      expression: "form.parameters.payment_method_id"
    }],
    attrs: {
      type: "hidden"
    },
    domProps: {
      value: _vm.form.parameters.payment_method_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.parameters, "payment_method_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    ref: "card"
  }), _vm._v(" "), _c("div", {
    ref: "error",
    staticClass: "mb-5"
  })] : _vm.get(_vm.method, "payment_method.gateway.code") === "evm" ? [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.evm.wallet.isConnected,
      expression: "evm.wallet.isConnected"
    }],
    attrs: {
      label: _vm.$t("Your address"),
      rules: [_vm.validationRequired],
      error: _vm.form.errors.has("parameters.address"),
      "error-messages": _vm.form.errors.get("parameters.address"),
      readonly: true,
      outlined: ""
    },
    on: {
      change: function change($event) {
        return _vm.clearFormErrors($event, "parameters.address");
      }
    },
    scopedSlots: _vm._u([{
      key: "append-outer",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          staticClass: "mt-n2",
          attrs: {
            disabled: _vm.evmAddressIsConfirmed || !_vm.form.parameters.address || _vm.evm.confirmedAddresses === null || _vm.evm.addressConfirmationInProgress,
            loading: _vm.evm.addressConfirmationInProgress
          },
          on: {
            click: _vm.confirmBlockchainAddress
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Confirm")) + "\n                  ")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.form.parameters.address,
      callback: function callback($$v) {
        _vm.$set(_vm.form.parameters, "address", $$v);
      },
      expression: "form.parameters.address"
    }
  }), _vm._v(" "), _vm.evmChainName ? _c("p", {
    staticClass: "success--text"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("You are connected to")) + " " + _vm._s(_vm.evmChainName) + "\n              ")]) : _vm._e(), _vm._v(" "), _vm.evm.wallet.isInstalled ? [!_vm.evm.wallet.isConnected ? _c("div", {
    staticClass: "mb-5"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      color: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.connectWeb3Wallet();
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Connect wallet")) + "\n                  ")])], 1) : _vm._e()] : _c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_17__["default"], {
    staticClass: "justify-center align-center align-content-center",
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      type: "warning"
    }
  }, [_c("p", [_vm._v("\n                  " + _vm._s(_vm.$t("Web3 wallet is not detected.")) + "\n                  " + _vm._s(_vm.$t("If you are using a desktop computer, install the Metamask wallet browser extension.")) + "\n                  " + _vm._s(_vm.$t("If you are using a mobile phone, use the in-app browser.")) + "\n                ")])])] : _vm.get(_vm.method, "payment_method.gateway.code") === "tron" ? [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tron.wallet.isConnected,
      expression: "tron.wallet.isConnected"
    }],
    attrs: {
      label: _vm.$t("Your address"),
      rules: [_vm.validationRequired],
      error: _vm.form.errors.has("parameters.address"),
      "error-messages": _vm.form.errors.get("parameters.address"),
      readonly: true,
      outlined: ""
    },
    on: {
      change: function change($event) {
        return _vm.clearFormErrors($event, "parameters.address");
      }
    },
    scopedSlots: _vm._u([{
      key: "append-outer",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          staticClass: "mt-n2",
          attrs: {
            disabled: _vm.tronAddressIsConfirmed || !_vm.form.parameters.address || _vm.tron.confirmedAddresses === null || _vm.tron.addressConfirmationInProgress,
            loading: _vm.tron.addressConfirmationInProgress
          },
          on: {
            click: _vm.confirmBlockchainAddress
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Confirm")) + "\n                  ")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.form.parameters.address,
      callback: function callback($$v) {
        _vm.$set(_vm.form.parameters, "address", $$v);
      },
      expression: "form.parameters.address"
    }
  }), _vm._v(" "), _vm.tron.wallet.isInstalled ? [!_vm.tron.wallet.isConnected ? _c("div", {
    staticClass: "mb-5"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      color: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.connectTronlink();
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Connect Tronlink")) + "\n                  ")])], 1) : _vm._e()] : _c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_17__["default"], {
    staticClass: "justify-center align-center align-content-center",
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      type: "warning"
    }
  }, [_c("p", [_vm._v("\n                  " + _vm._s(_vm.$t("Tronlink wallet is not detected.")) + "\n                  " + _vm._s(_vm.$t("If you are using a desktop computer, install the Tronlink wallet browser extension.")) + "\n                  " + _vm._s(_vm.$t("If you are using a mobile phone, use the in-app browser.")) + "\n                ")])])] : _vm.get(_vm.method, "payment_method.gateway.code") === "solana" ? [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.solana.phantom.isConnected,
      expression: "solana.phantom.isConnected"
    }],
    attrs: {
      label: _vm.$t("Your address"),
      rules: [_vm.validationRequired],
      error: _vm.form.errors.has("parameters.address"),
      "error-messages": _vm.form.errors.get("parameters.address"),
      readonly: true,
      outlined: ""
    },
    on: {
      change: function change($event) {
        return _vm.clearFormErrors($event, "parameters.address");
      }
    },
    scopedSlots: _vm._u([{
      key: "append-outer",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          staticClass: "mt-n2",
          attrs: {
            disabled: _vm.solanaAddressIsConfirmed || !_vm.form.parameters.address || _vm.solana.confirmedAddresses === null || _vm.solana.addressConfirmationInProgress,
            loading: _vm.solana.addressConfirmationInProgress
          },
          on: {
            click: _vm.confirmBlockchainAddress
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Confirm")) + "\n                  ")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.form.parameters.address,
      callback: function callback($$v) {
        _vm.$set(_vm.form.parameters, "address", $$v);
      },
      expression: "form.parameters.address"
    }
  }), _vm._v(" "), _vm.solana.phantom.isInstalled ? [!_vm.solana.phantom.isConnected ? _c("div", {
    staticClass: "mb-5"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      color: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.connectPhantom(false);
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Connect Phantom wallet")) + "\n                  ")])], 1) : _vm._e()] : _c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_17__["default"], {
    staticClass: "justify-center align-center align-content-center",
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      type: "warning"
    }
  }, [_c("p", [_vm._v("\n                  " + _vm._s(_vm.$t("Phantom wallet is not detected.")) + "\n                  " + _vm._s(_vm.$t("If you are using a desktop computer, install the Phantom wallet browser extension.")) + "\n                  " + _vm._s(_vm.$t("If you are using a mobile phone, use the in-app browser.")) + "\n                ")])])] : _vm.get(_vm.method, "payment_method.gateway.code") === "xrpl" ? [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.xrpl.xumm.isConnected,
      expression: "xrpl.xumm.isConnected"
    }],
    attrs: {
      label: _vm.$t("Your address"),
      rules: [_vm.validationRequired],
      error: _vm.form.errors.has("parameters.address"),
      "error-messages": _vm.form.errors.get("parameters.address"),
      readonly: true,
      outlined: ""
    },
    on: {
      change: function change($event) {
        return _vm.clearFormErrors($event, "parameters.address");
      }
    },
    scopedSlots: _vm._u([{
      key: "append-outer",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          staticClass: "mt-n2",
          attrs: {
            disabled: _vm.xrplAddressIsConfirmed || !_vm.form.parameters.address || _vm.xrpl.confirmedAddresses === null || _vm.xrpl.addressConfirmationInProgress,
            loading: _vm.xrpl.addressConfirmationInProgress
          },
          on: {
            click: _vm.confirmBlockchainAddress
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Confirm")) + "\n                  ")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.form.parameters.address,
      callback: function callback($$v) {
        _vm.$set(_vm.form.parameters, "address", $$v);
      },
      expression: "form.parameters.address"
    }
  }), _vm._v(" "), _vm.xrpl.xumm.isInstalled ? [!_vm.xrpl.xumm.isConnected ? _c("div", {
    staticClass: "mb-5"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      color: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.connectXumm();
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Connect Xumm wallet")) + "\n                  ")])], 1) : _c("div", {
    staticClass: "mb-5"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      color: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.disconnectXumm();
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Disconnect wallet")) + "\n                  ")])], 1)] : _c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_17__["default"], {
    staticClass: "justify-center align-center align-content-center",
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      type: "warning"
    }
  }, [_c("p", [_vm._v("\n                  " + _vm._s(_vm.$t("Xumm wallet is not detected.")) + "\n                ")])])] : _vm._e(), _vm._v(" "), _vm.method.payment_method ? _vm._l(_vm.method.payment_method.input_parameters, function (parameter) {
    return _c("form-parameter", {
      key: parameter.id,
      attrs: {
        parameter: parameter,
        form: _vm.form,
        "form-key": "parameters",
        disabled: _vm.formIsProcessing
      },
      model: {
        value: _vm.form.parameters[parameter.id],
        callback: function callback($$v) {
          _vm.$set(_vm.form.parameters, parameter.id, $$v);
        },
        expression: "form.parameters[parameter.id]"
      }
    });
  }) : _vm._e(), _vm._v(" "), _vm.method.parameters ? _vm._l(_vm.method.parameters, function (parameter) {
    return _c("form-parameter", {
      key: parameter.id,
      attrs: {
        parameter: parameter,
        form: _vm.form,
        "form-key": "parameters",
        disabled: _vm.formIsProcessing
      },
      model: {
        value: _vm.form.parameters[parameter.id],
        callback: function callback($$v) {
          _vm.$set(_vm.form.parameters, parameter.id, $$v);
        },
        expression: "form.parameters[parameter.id]"
      }
    });
  }) : _vm._e(), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      type: "submit",
      color: "primary",
      disabled: !_vm.formIsValid || _vm.form.busy || _vm.formIsProcessing,
      loading: _vm.form.busy
    }
  }, [_vm._v("\n              " + _vm._s(_vm.submitButtonText) + "\n            ")])], 2)], 1)], 1)], 1)], 2) : _vm.methods.length === 0 ? _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      align: "center",
      justify: "center"
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c("p", {
    staticClass: "text-center"
  }, [_vm._v("\n        " + _vm._s(_vm.$t("No deposit methods enabled.")) + "\n      ")])])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormParameter.vue?vue&type=template&id=2abdd46a&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormParameter.vue?vue&type=template&id=2abdd46a& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=template&id=7a63f5f9&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=template&id=7a63f5f9&scoped=true& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_7a63f5f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_7a63f5f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_7a63f5f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=7a63f5f9&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/create.vue?vue&type=template&id=7a63f5f9&scoped=true&");


/***/ }),

/***/ "./resources/js/components/FormParameter.vue?vue&type=template&id=2abdd46a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/FormParameter.vue?vue&type=template&id=2abdd46a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormParameter_vue_vue_type_template_id_2abdd46a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormParameter_vue_vue_type_template_id_2abdd46a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormParameter_vue_vue_type_template_id_2abdd46a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormParameter.vue?vue&type=template&id=2abdd46a& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormParameter.vue?vue&type=template&id=2abdd46a&");


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

/***/ })

}]);