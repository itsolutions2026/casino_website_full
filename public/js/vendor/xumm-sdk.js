"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vendor/xumm-sdk"],{

/***/ "./node_modules/xumm-sdk/dist/src/JwtUserdata.js":
/*!*******************************************************!*\
  !*** ./node_modules/xumm-sdk/dist/src/JwtUserdata.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtUserdata = void 0;
const debug_1 = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/xumm-sdk/dist/src/utils.js");
const log = debug_1.debug('xumm-sdk:xapp:userdata');
class JwtUserdata {
    constructor(MetaObject) {
        log('Constructed');
        this.Meta = MetaObject;
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const call = yield this.Meta.call('userdata', 'GET');
            utils_1.throwIfError(call);
            return call.keys;
        });
    }
    get(key) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const keys = Array.isArray(key) ? key.join(',') : key;
            const call = yield this.Meta.call('userdata/' + keys, 'GET');
            utils_1.throwIfError(call);
            return keys.split(',').length > 1 ? call.data : (((_a = call.data) === null || _a === void 0 ? void 0 : _a[keys]) || {});
        });
    }
    delete(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = yield this.Meta.call('userdata/' + key, 'DELETE');
            utils_1.throwIfError(call);
            return call.persisted;
        });
    }
    set(key, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = yield this.Meta.call('userdata/' + key, 'POST', data);
            utils_1.throwIfError(call);
            return call.persisted;
        });
    }
}
exports.JwtUserdata = JwtUserdata;


/***/ }),

/***/ "./node_modules/xumm-sdk/dist/src/Meta.js":
/*!************************************************!*\
  !*** ./node_modules/xumm-sdk/dist/src/Meta.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Meta = void 0;
const debug_1 = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
const fetch_ponyfill_1 = __importDefault(__webpack_require__(/*! fetch-ponyfill */ "./node_modules/fetch-ponyfill/build/fetch-browser.js"));
const { fetch, Request, Response, Headers } = fetch_ponyfill_1.default();
const os_browserify_1 = __webpack_require__(/*! os-browserify */ "./node_modules/os-browserify/browser.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/xumm-sdk/dist/src/utils.js");
const index_1 = __webpack_require__(/*! ./index */ "./node_modules/xumm-sdk/dist/src/index.js");
const log = debug_1.debug('xumm-sdk:meta');
class Meta {
    constructor(apiKey, apiSecret) {
        this.isBrowser = false;
        this.jwtFlow = false;
        // Dependency injection: parent
        this.injected = false;
        this.endpoint = 'https://xumm.app';
        log('Constructed');
        const uuidRe = new RegExp('^[a-f0-9]{8}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{12}$');
        const secret = {
            split: apiSecret.split(':'),
            uuidv4: ''
        };
        if (secret.split.length === 3 && secret.split.slice(0, 2).join(':') === 'xApp:OneTimeToken') {
            // xApp JWT flow
            secret.uuidv4 = secret.split[2];
            this.jwtFlow = true;
        }
        else if (secret.split.length > 1 && secret.split[0] === 'RAWJWT') {
            this.jwtFlow = true;
            this.jwt = secret.split.slice(1).join(':');
        }
        else {
            // Regular SDK/API calls
            secret.uuidv4 = apiSecret;
        }
        if (!uuidRe.test(apiKey) || !uuidRe.test(secret.uuidv4)) {
            if (!this.jwtFlow) {
                throw new Error('Invalid API Key and/or API Secret. Use dotenv or constructor params.');
            }
            else {
                if (!this.jwt) {
                    throw new Error('Invalid API Key and/or OTT (One Time Token). ' +
                        'Provide OTT param (2nd param) or make sure `xAppToken` query param is present (Browser)');
                }
            }
        }
        if (typeof globalThis !== 'undefined' && Object.keys(globalThis).indexOf('window') < 0) {
            log('Running in node');
        }
        else {
            console.log('XUMM SDK: Running in browser');
            this.isBrowser = true;
        }
        this.apiKey = apiKey;
        this.apiSecret = secret.uuidv4;
        if (this.jwtFlow && !this.jwt) {
            // Allow calls to wait for JWT
            this.authPromise = new Promise(resolve => {
                this.authPromiseResolve = resolve;
            });
            // Eventloop: wait for _inject @ index.ts (XummSdk Constructor) to have happened
            Promise.resolve()
                .then(() => this.authorize())
                .catch(e => {
                log('Authorize error:', e.message);
                if (this === null || this === void 0 ? void 0 : this.invoker) {
                    this.invoker.caught(e);
                }
                if (this.authPromiseResolve) {
                    this.authPromiseResolve();
                }
            });
        }
        return this;
    }
    setEndpoint(endpoint) {
        if (endpoint.match(/^http/)) {
            this.endpoint = endpoint.trim();
            return true;
        }
        return false;
    }
    authorize() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            log('JWT Authorize', this.apiSecret);
            let store;
            if ((this === null || this === void 0 ? void 0 : this.invoker) && this.invoker.constructor === index_1.XummSdkJwt) {
                store = this.invoker._jwtStore(this, (jwt) => this.jwt = jwt);
            }
            const authorizeData = (store === null || store === void 0 ? void 0 : store.get(this.apiSecret)) || (yield this.call('authorize'));
            if ((_b = (_a = authorizeData) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.code) {
                log(`Could not resolve API Key & OTT to JWT (already fetched? Unauthorized?)`);
                if ((this === null || this === void 0 ? void 0 : this.invoker) && this.invoker.constructor === index_1.XummSdkJwt && ((_c = this === null || this === void 0 ? void 0 : this.invoker) === null || _c === void 0 ? void 0 : _c.fatalHandler)) {
                    this.invoker.fatalHandler(new Error(authorizeData.error.reference));
                }
                else {
                    utils_1.throwIfError(authorizeData);
                }
            }
            else if ((_d = authorizeData) === null || _d === void 0 ? void 0 : _d.jwt) {
                const JwtOttResponse = authorizeData;
                store === null || store === void 0 ? void 0 : store.set(this.apiSecret, JwtOttResponse);
            }
            else {
                throw new Error(`Unexpected response for xApp JWT authorize request`);
            }
            if (this.authPromiseResolve) {
                this.authPromiseResolve();
            }
        });
    }
    call(endpoint, httpMethod = 'GET', data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const method = httpMethod.toUpperCase();
            const trEndpoint = endpoint.split('/')[0];
            if (this.jwtFlow && !(this === null || this === void 0 ? void 0 : this.jwt) && this.authPromise && endpoint !== 'authorize') {
                yield this.authPromise;
            }
            try {
                let body;
                if (typeof data !== 'undefined') {
                    if (typeof data === 'object' && data !== null) {
                        body = JSON.stringify(data);
                    }
                    if (typeof data === 'string') {
                        body = data;
                    }
                }
                const headers = {
                    'Content-Type': 'application/json'
                };
                if (!this.isBrowser) {
                    // TODO: Deno
                    Object.assign(headers, {
                        'User-Agent': `xumm-sdk/node (${os_browserify_1.hostname()}) node-fetch`
                    });
                }
                if (!this.jwtFlow) {
                    Object.assign(headers, {
                        'x-api-key': this.apiKey,
                        'x-api-secret': this.apiSecret
                    });
                }
                else {
                    if (endpoint === 'authorize') {
                        Object.assign(headers, {
                            'x-api-key': this.apiKey,
                            'x-api-ott': this.apiSecret
                        });
                    }
                    else {
                        Object.assign(headers, {
                            'Authorization': 'Bearer ' + this.jwt
                        });
                    }
                }
                const jwtEndpoints = [
                    'authorize',
                    'ping',
                    'curated-assets',
                    'rates',
                    'payload',
                    'userdata',
                    'xrpl-tx',
                    'nftoken-detail'
                ];
                const endpointType = this.jwtFlow && jwtEndpoints.indexOf(trEndpoint) > -1
                    ? 'jwt'
                    : 'platform';
                const request = yield fetch(this.endpoint + '/api/v1/' + endpointType + '/' + endpoint, {
                    method,
                    body,
                    headers
                });
                const json = yield request.json();
                // log({json})
                return json;
            }
            catch (e) {
                const err = new Error(`Unexpected response from XUMM API [${method}:${trEndpoint}]`);
                err.stack = ((_a = e) === null || _a === void 0 ? void 0 : _a.stack) || undefined;
                throw err;
            }
        });
    }
    ping() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const pong = yield this.call('ping');
            utils_1.throwIfError(pong);
            if (typeof pong.auth !== 'undefined') {
                return pong.auth;
            }
            if (typeof ((_a = pong) === null || _a === void 0 ? void 0 : _a.ott_uuidv4) !== 'undefined') {
                // return pong as xAppJwtPong
                return {
                    application: {
                        uuidv4: pong.app_uuidv4,
                        name: pong.app_name
                    },
                    jwtData: pong
                };
            }
            if (typeof ((_b = pong) === null || _b === void 0 ? void 0 : _b.usertoken_uuidv4) !== 'undefined') {
                // return pong as JwtPong
                return {
                    application: {
                        uuidv4: pong.client_id,
                        name: pong.app_name
                    },
                    jwtData: pong
                };
            }
            throw new Error(`Unexpected response for ping request`);
        });
    }
    getCuratedAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('curated-assets');
        });
    }
    getRates(currencyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('rates/' + currencyCode.trim().toUpperCase());
        });
    }
    getKycStatus(userTokenOrAccount) {
        return __awaiter(this, void 0, void 0, function* () {
            if (userTokenOrAccount.trim().match(/^r/)) {
                const call = yield this.call('kyc-status/' + userTokenOrAccount.trim());
                return (call === null || call === void 0 ? void 0 : call.kycApproved) ? 'SUCCESSFUL' : 'NONE';
            }
            else {
                const call = yield this.call('kyc-status', 'POST', {
                    user_token: userTokenOrAccount
                });
                return (call === null || call === void 0 ? void 0 : call.kycStatus) || 'NONE';
            }
        });
    }
    getTransaction(txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('xrpl-tx/' + txHash.trim());
        });
    }
    getNftokenDetail(tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.jwtFlow) {
                throw new Error('getNftokenDetail: only available in JWT (XummSdkJwt) mode');
            }
            return yield this.call('nftoken-detail/' + tokenId.trim());
        });
    }
    verifyUserTokens(userTokens) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.call('user-tokens', 'POST', {
                tokens: Array.isArray(userTokens) ? userTokens : [userTokens]
            })).tokens;
        });
    }
    // Internal
    _inject(Invoker) {
        if (!this.injected) {
            this.invoker = Invoker;
        }
        else {
            throw new Error('Cannot `_inject` twice');
        }
    }
}
exports.Meta = Meta;


/***/ }),

/***/ "./node_modules/xumm-sdk/dist/src/Payload.js":
/*!***************************************************!*\
  !*** ./node_modules/xumm-sdk/dist/src/Payload.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Payload = void 0;
const debug_1 = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
const websocket_1 = __webpack_require__(/*! websocket */ "./node_modules/websocket/lib/browser.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/xumm-sdk/dist/src/utils.js");
const log = debug_1.debug('xumm-sdk:payload');
const logWs = debug_1.debug('xumm-sdk:payload:websocket');
class Payload {
    constructor(MetaObject) {
        log('Constructed');
        this.Meta = MetaObject;
    }
    resolvePayload(payload) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof payload === 'string') {
                return yield this.get(payload, true);
            }
            else if (typeof ((_a = payload) === null || _a === void 0 ? void 0 : _a.uuid) !== 'undefined') {
                return yield this.get(payload.uuid, true);
            }
            else if (typeof ((_c = (_b = payload) === null || _b === void 0 ? void 0 : _b.meta) === null || _c === void 0 ? void 0 : _c.uuid) !== 'undefined') {
                return payload;
            }
            throw new Error('Could not resolve payload (not found)');
        });
    }
    create(payload, returnErrors = false) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const directTx = typeof payload.TransactionType !== 'undefined'
                && typeof payload.txjson === 'undefined';
            const call = yield this.Meta.call('payload', 'POST', directTx ? { txjson: payload } : payload);
            if (returnErrors) {
                utils_1.throwIfError(call);
            }
            const isCreatedPayload = ((_a = call) === null || _a === void 0 ? void 0 : _a.next) !== undefined;
            if (!isCreatedPayload) {
                return null;
            }
            return call;
        });
    }
    get(payload, returnErrors = false) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const payloadUuid = typeof payload === 'string'
                ? payload
                : payload === null || payload === void 0 ? void 0 : payload.uuid;
            const call = yield this.Meta.call('payload/' + payloadUuid, 'GET');
            if (returnErrors) {
                utils_1.throwIfError(call);
            }
            const isPayload = ((_b = (_a = call) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.uuid) !== undefined;
            if (!isPayload) {
                return null;
            }
            return call;
        });
    }
    subscribe(payload, callback) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const callbackPromise = new utils_1.DeferredPromise();
            const payloadDetails = yield this.resolvePayload(payload);
            if (payloadDetails) {
                const _u = 'undefined'; // For globalThis.mockedWebSocket (leave note for Deno gen!)
                const socket = typeof ((_a = globalThis) === null || _a === void 0 ? void 0 : _a.MockedWebSocket) !== _u && typeof jest !== _u
                    ? new ((_b = globalThis) === null || _b === void 0 ? void 0 : _b.MockedWebSocket)('ws://xumm.local')
                    : new websocket_1.w3cwebsocket(this.Meta.endpoint.replace(/^http/, 'ws') + '/sign/' + payloadDetails.meta.uuid);
                callbackPromise.promise.then(() => {
                    socket.close();
                });
                socket.onopen = () => {
                    logWs(`Payload ${payloadDetails.meta.uuid}: Subscription active (WebSocket opened)`);
                };
                socket.onmessage = (MessageEvent) => __awaiter(this, void 0, void 0, function* () {
                    const m = MessageEvent.data;
                    let json = undefined;
                    try {
                        json = JSON.parse(m.toString());
                    }
                    catch (e) {
                        // Do nothing
                        logWs(`Payload ${payloadDetails.meta.uuid}: Received message, unable to parse as JSON`, e);
                    }
                    if (json && callback && typeof json.devapp_fetched === 'undefined') {
                        try {
                            // log(`Payload ${payload}`, json)
                            const callbackResult = yield callback({
                                uuid: payloadDetails.meta.uuid,
                                data: json,
                                resolve(resolveData) {
                                    return __awaiter(this, void 0, void 0, function* () {
                                        yield callbackPromise.resolve(resolveData || undefined);
                                    });
                                },
                                payload: payloadDetails
                            });
                            if (callbackResult !== undefined) {
                                callbackPromise.resolve(callbackResult);
                            }
                        }
                        catch (e) {
                            // Do nothing
                            logWs(`Payload ${payloadDetails.meta.uuid}: Callback exception`, e);
                        }
                    }
                });
                socket.onclose = (_e) => {
                    logWs(`Payload ${payloadDetails.meta.uuid}: Subscription ended (WebSocket closed)`);
                };
                return {
                    payload: payloadDetails,
                    resolve(resolveData) {
                        callbackPromise.resolve(resolveData || undefined);
                    },
                    resolved: callbackPromise.promise,
                    websocket: socket
                };
            }
            utils_1.throwIfError(payloadDetails);
            throw Error(`Couldn't subscribe: couldn't fetch payload`);
        });
    }
    cancel(payload, returnErrors = false) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const fullPayload = yield this.resolvePayload(payload);
            const call = yield this.Meta.call('payload/' + ((_a = fullPayload === null || fullPayload === void 0 ? void 0 : fullPayload.meta) === null || _a === void 0 ? void 0 : _a.uuid), 'DELETE');
            if (returnErrors) {
                utils_1.throwIfError(call);
            }
            const isValidResponse = ((_c = (_b = call) === null || _b === void 0 ? void 0 : _b.meta) === null || _c === void 0 ? void 0 : _c.uuid) !== undefined;
            if (!isValidResponse) {
                return null;
            }
            return call;
        });
    }
    createAndSubscribe(payload, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdPayload = yield this.create(payload, true);
            if (createdPayload) {
                const subscription = yield this.subscribe(createdPayload, callback);
                return Object.assign({ created: createdPayload }, subscription);
            }
            throw new Error(`Error creating payload or subscribing to created payload`);
        });
    }
}
exports.Payload = Payload;


/***/ }),

/***/ "./node_modules/xumm-sdk/dist/src/Push.js":
/*!************************************************!*\
  !*** ./node_modules/xumm-sdk/dist/src/Push.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Push = void 0;
const debug_1 = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
const JwtUserdata_1 = __webpack_require__(/*! ./JwtUserdata */ "./node_modules/xumm-sdk/dist/src/JwtUserdata.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/xumm-sdk/dist/src/utils.js");
const log = debug_1.debug('xumm-sdk:xapp');
class Push {
    constructor(MetaObject) {
        log('Constructed');
        this.Meta = MetaObject;
        // Backwards compatibility for old Sdk.xApp.userdata users
        // - as xApps used to be the only JWT issuing env. - PKCE now is as well
        this.userdata = new JwtUserdata_1.JwtUserdata(MetaObject);
    }
    event(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = yield this.Meta.call('xapp/event', 'POST', data);
            utils_1.throwIfError(call);
            return call;
        });
    }
    notification(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = yield this.Meta.call('xapp/push', 'POST', data);
            utils_1.throwIfError(call);
            return call;
        });
    }
}
exports.Push = Push;


/***/ }),

/***/ "./node_modules/xumm-sdk/dist/src/Storage.js":
/*!***************************************************!*\
  !*** ./node_modules/xumm-sdk/dist/src/Storage.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Storage = void 0;
const debug_1 = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/xumm-sdk/dist/src/utils.js");
const log = debug_1.debug('xumm-sdk:storage');
class Storage {
    constructor(MetaObject) {
        log('Constructed');
        this.Meta = MetaObject;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const call = yield this.Meta.call('app-storage', 'GET');
            utils_1.throwIfError(call);
            return call.data;
        });
    }
    set(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = yield this.Meta.call('app-storage', 'POST', data);
            utils_1.throwIfError(call);
            return call.stored;
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            const call = yield this.Meta.call('app-storage', 'DELETE');
            utils_1.throwIfError(call);
            return call.stored;
        });
    }
}
exports.Storage = Storage;


/***/ }),

/***/ "./node_modules/xumm-sdk/dist/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/xumm-sdk/dist/src/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.XummSdkJwt = exports.XummSdk = void 0;
const debug_1 = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
const Meta_1 = __webpack_require__(/*! ./Meta */ "./node_modules/xumm-sdk/dist/src/Meta.js");
const Storage_1 = __webpack_require__(/*! ./Storage */ "./node_modules/xumm-sdk/dist/src/Storage.js");
const Payload_1 = __webpack_require__(/*! ./Payload */ "./node_modules/xumm-sdk/dist/src/Payload.js");
const xApp_1 = __webpack_require__(/*! ./xApp */ "./node_modules/xumm-sdk/dist/src/xApp.js");
const Push_1 = __webpack_require__(/*! ./Push */ "./node_modules/xumm-sdk/dist/src/Push.js");
const JwtUserdata_1 = __webpack_require__(/*! ./JwtUserdata */ "./node_modules/xumm-sdk/dist/src/JwtUserdata.js");
const log = debug_1.debug('xumm-sdk');
class XummSdk {
    constructor(apiKey, apiSecret) {
        log('Constructed');
        this.Meta = new Meta_1.Meta(apiKey || this.getEnv('XUMM_APIKEY'), apiSecret || this.getEnv('XUMM_APISECRET'));
        this.storage = new Storage_1.Storage(this.Meta);
        this.payload = new Payload_1.Payload(this.Meta);
        this.jwtUserdata = new JwtUserdata_1.JwtUserdata(this.Meta);
        this.Push = new Push_1.Push(this.Meta);
        this.xApp = new xApp_1.xApp(this.Meta);
        this.Meta._inject(this);
        return this;
    }
    getEnv(arg) {
        let value = '';
        try {
            /* Deno */ // @ts-ignore
            /* Deno */ value = typeof Deno !== 'undefined' ? (Deno.env.get(arg) || '') : '';
            /* Node */ value = (process === null || process === void 0 ? void 0 : process.env[arg]) || '';
        }
        catch (_e) {
            // Couldn't load .env
        }
        return value;
    }
    /**
     * Proxy methods to Meta class below
     */
    ping() {
        return this.Meta.ping();
    }
    getCuratedAssets() {
        return this.Meta.getCuratedAssets();
    }
    getRates(currencyCode) {
        return this.Meta.getRates(currencyCode);
    }
    getKycStatus(userTokenOrAccount) {
        return this.Meta.getKycStatus(userTokenOrAccount);
    }
    getTransaction(txHash) {
        return this.Meta.getTransaction(txHash);
    }
    getNftokenDetail(tokenId) {
        return this.Meta.getNftokenDetail(tokenId);
    }
    verifyUserTokens(userTokens) {
        return this.Meta.verifyUserTokens(userTokens);
    }
    verifyUserToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenResults = yield this.Meta.verifyUserTokens([token]);
            return Array.isArray(tokenResults) && tokenResults.length === 1
                ? tokenResults[0]
                : null;
        });
    }
    setEndpoint(endpoint) {
        return this.Meta.setEndpoint(endpoint);
    }
    caught(error) {
        throw error;
    }
}
exports.XummSdk = XummSdk;
class XummSdkJwt extends XummSdk {
    constructor(apiKeyOrJwt, ott, options) {
        var _a, _b, _c, _d, _f, _g, _h, _j;
        let _ott = String(ott || '').trim().toLowerCase();
        const isRawJwt = apiKeyOrJwt.length !== 36;
        /**
         * xAppToken from URL to param if not explicitly provided
         */
        if (!isRawJwt) {
            if (typeof ott === 'undefined'
                && typeof window !== 'undefined'
                && typeof window.URLSearchParams !== 'undefined') {
                const urlSearchParams = new window.URLSearchParams(((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.search) || '');
                for (const pair of urlSearchParams.entries()) {
                    if (pair[0] === 'xAppToken') {
                        _ott = pair[1].toLowerCase().trim();
                    }
                }
                if (_ott === '' && !(options === null || options === void 0 ? void 0 : options.store) && !(options === null || options === void 0 ? void 0 : options.noAutoRetrieve)) {
                    // Check if we have something in history
                    if (typeof ((_b = window === null || window === void 0 ? void 0 : window.localStorage) === null || _b === void 0 ? void 0 : _b['XummSdkJwt']) === 'string') {
                        try {
                            const localStorageJwtData = (_d = (_c = window === null || window === void 0 ? void 0 : window.localStorage) === null || _c === void 0 ? void 0 : _c['XummSdkJwt']) === null || _d === void 0 ? void 0 : _d.split(':');
                            const localStorageJwt = JSON.parse((_f = localStorageJwtData === null || localStorageJwtData === void 0 ? void 0 : localStorageJwtData.slice(1)) === null || _f === void 0 ? void 0 : _f.join(':'));
                            if (localStorageJwt === null || localStorageJwt === void 0 ? void 0 : localStorageJwt.jwt) {
                                const jwtContents = JSON.parse(atob((_g = localStorageJwt.jwt.split('.')) === null || _g === void 0 ? void 0 : _g[1]));
                                if (jwtContents === null || jwtContents === void 0 ? void 0 : jwtContents.exp) {
                                    const validForSec = (jwtContents === null || jwtContents === void 0 ? void 0 : jwtContents.exp) - Math.floor((new Date()).getTime() / 1000);
                                    console.log('Restoring OTT ' + (localStorageJwtData === null || localStorageJwtData === void 0 ? void 0 : localStorageJwtData[0]));
                                    if (validForSec > 60 * 60) {
                                        _ott = localStorageJwtData === null || localStorageJwtData === void 0 ? void 0 : localStorageJwtData[0];
                                    }
                                    else {
                                        console.log('Skip restore: not valid for one more hour');
                                    }
                                }
                            }
                        }
                        catch (e) {
                            console.log('JWT Restore Error', e);
                        }
                    }
                }
            }
        }
        super(apiKeyOrJwt, !isRawJwt && _ott !== ''
            ? 'xApp:OneTimeToken:' + _ott
            : 'RAWJWT:' + apiKeyOrJwt);
        this.resolve = (ottData) => {
            log('OTT data resolved', ottData);
        };
        this.reject = (error) => {
            log('OTT data rejected', error.message);
        };
        this.ottResolved = isRawJwt
            ? Promise.resolve()
            : new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
        if (options === null || options === void 0 ? void 0 : options.fatalHandler) {
            this.fatalHandler = options.fatalHandler;
        }
        this.store = {
            get(uuid) {
                var _a;
                log('[JwtStore] » Builtin JWT store GET');
                // Default store: localStorage
                if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
                    if (typeof window.localStorage['XummSdkJwt'] === 'string') {
                        const lsOttData = window.localStorage['XummSdkJwt'].split(':');
                        if (lsOttData[0] === uuid) {
                            // Restore from memory
                            log('Restoring OTT from localStorage:', uuid);
                            try {
                                return JSON.parse(lsOttData.slice(1).join(':'));
                            }
                            catch (e) {
                                log('Error restoring OTT Data (JWT) from localStorage', (_a = e) === null || _a === void 0 ? void 0 : _a.message);
                            }
                        }
                    }
                }
            },
            set(uuid, ottData) {
                log('[JwtStore] » Builtin JWT store SET', uuid);
                // Default store: localStorage
                if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
                    window.localStorage['XummSdkJwt'] = uuid + ':' + JSON.stringify(ottData);
                }
            }
        };
        if ((_h = options === null || options === void 0 ? void 0 : options.store) === null || _h === void 0 ? void 0 : _h.get) {
            this.store.get = options.store.get;
        }
        if ((_j = options === null || options === void 0 ? void 0 : options.store) === null || _j === void 0 ? void 0 : _j.set) {
            this.store.set = options.store.set;
        }
        if (isRawJwt) {
            this.reject(new Error('Not in OTT flow: in raw JWT (OAuth2-like) flow'));
            log('Using JWT (Raw, OAuth2) flow');
        }
        else {
            log('Using JWT (xApp) flow');
        }
    }
    _jwtStore(invoker, persistJwt) {
        if (invoker && (invoker === null || invoker === void 0 ? void 0 : invoker.constructor) === Meta_1.Meta) {
            return {
                get: uuid => {
                    var _a;
                    log('[JwtStore] Proxy GET');
                    return (_a = this.store) === null || _a === void 0 ? void 0 : _a.get(uuid);
                },
                set: (uuid, ottData) => {
                    var _a;
                    log('[JwtStore] Proxy SET');
                    this.resolve(ottData.ott);
                    persistJwt(ottData.jwt);
                    this.jwt = ottData.jwt;
                    return (_a = this.store) === null || _a === void 0 ? void 0 : _a.set(uuid, ottData);
                }
            };
        }
        throw new Error('Invalid _jwtStore invoker');
    }
    getOttData() {
        return __awaiter(this, void 0, void 0, function* () {
            const resolved = yield this.ottResolved;
            if (resolved) {
                return resolved;
            }
            throw new Error('Called getOttData on a non OTT-JWT flow');
        });
    }
    getJwt() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ottResolved;
            return this.jwt;
        });
    }
    caught(error) {
        this.reject(error);
    }
}
exports.XummSdkJwt = XummSdkJwt;


/***/ }),

/***/ "./node_modules/xumm-sdk/dist/src/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/xumm-sdk/dist/src/utils.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeferredPromise = exports.throwIfError = void 0;
function throwIfError(call) {
    var _a, _b, _c, _d, _e, _f;
    const isFatalError = call.message !== undefined;
    if (isFatalError) {
        throw new Error(call.message);
    }
    const isError = call.next === undefined
        && ((_b = (_a = call) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.uuid) === undefined
        && ((_d = (_c = call) === null || _c === void 0 ? void 0 : _c.application) === null || _d === void 0 ? void 0 : _d.uuidv4) === undefined
        && ((_f = (_e = call) === null || _e === void 0 ? void 0 : _e.error) === null || _f === void 0 ? void 0 : _f.code) !== undefined;
    if (isError) {
        const e = call.error;
        /**
         * TODO:
         *   add local error code list + descriptions?
         *   (note: can be endpoint specific,)
         */
        throw new Error(`Error code ${e.code}, see XUMM Dev Console, reference: ${e.reference}`);
    }
}
exports.throwIfError = throwIfError;
class DeferredPromise {
    constructor() {
        this.resolveFn = (_arg) => {
            // Will be replaced by Promise fn
        };
        this.rejectFn = (_arg) => {
            // Will be replaced by Promise fn
        };
        this.promise = new Promise((resolve, reject) => {
            this.resolveFn = resolve;
            this.rejectFn = reject;
        });
    }
    resolve(arg) {
        this.resolveFn(arg);
        return this.promise;
    }
    reject(arg) {
        this.rejectFn(arg);
        return this.promise;
    }
}
exports.DeferredPromise = DeferredPromise;


/***/ }),

/***/ "./node_modules/xumm-sdk/dist/src/xApp.js":
/*!************************************************!*\
  !*** ./node_modules/xumm-sdk/dist/src/xApp.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.xApp = void 0;
const debug_1 = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
const JwtUserdata_1 = __webpack_require__(/*! ./JwtUserdata */ "./node_modules/xumm-sdk/dist/src/JwtUserdata.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/xumm-sdk/dist/src/utils.js");
const log = debug_1.debug('xumm-sdk:xapp');
class xApp {
    constructor(MetaObject) {
        log('Constructed');
        this.Meta = MetaObject;
        // Backwards compatibility for old Sdk.xApp.userdata users
        // - as xApps used to be the only JWT issuing env. - PKCE now is as well
        this.userdata = new JwtUserdata_1.JwtUserdata(MetaObject);
    }
    get(ott) {
        return __awaiter(this, void 0, void 0, function* () {
            const call = yield this.Meta.call('xapp/ott/' + ott, 'GET');
            utils_1.throwIfError(call);
            return call;
        });
    }
}
exports.xApp = xApp;


/***/ })

}]);