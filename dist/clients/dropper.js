function hasJsonStructure(str) {
    if (typeof str !== 'string') return false;
    try {
        const result = JSON.parse(str);
        const type = Object.prototype.toString.call(result);
        return type === '[object Object]' || type === '[object Array]';
    } catch (err) {
        return false;
    }
}
function connectWebSocket(endpoint) {
    return new Promise(function(resolve, reject) {
        const url = new URL(endpoint);
        const { hostname , protocol , port , pathname  } = url;
        let p;
        if (protocol === 'http:') p = 'ws://';
        else if (protocol === 'https:') p = 'wss://';
        else if (protocol === 'ws:' || protocol === 'wss:') p = protocol + '//';
        else throw new Error("ws: unsupported protocol: " + url.protocol);
        const uri = `${p + hostname}:${port + pathname}`;
        let socket = new WebSocket(uri);
        socket.onopen = ()=>{
            resolve(socket);
        };
        socket.onerror = (err)=>{
            reject(err);
        };
    });
}

// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
/** A default TextEncoder instance */ const encoder = new TextEncoder();
/** A default TextDecoder instance */ const decoder = new TextDecoder();

class PartialReadError extends Deno.errors.UnexpectedEof {
    name = "PartialReadError";
    constructor(){
        super("Encountered UnexpectedEof, data only partially read");
    }
}

var Status;
(function(Status) {
    Status[Status[/** RFC 7231, 6.2.1 */ "Continue"] = 100] = "Continue";
    Status[Status[/** RFC 7231, 6.2.2 */ "SwitchingProtocols"] = 101] = "SwitchingProtocols";
    Status[Status[/** RFC 2518, 10.1 */ "Processing"] = 102] = "Processing";
    Status[Status[/** RFC 8297 **/ "EarlyHints"] = 103] = "EarlyHints";
    Status[Status[/** RFC 7231, 6.3.1 */ "OK"] = 200] = "OK";
    Status[Status[/** RFC 7231, 6.3.2 */ "Created"] = 201] = "Created";
    Status[Status[/** RFC 7231, 6.3.3 */ "Accepted"] = 202] = "Accepted";
    Status[Status[/** RFC 7231, 6.3.4 */ "NonAuthoritativeInfo"] = 203] = "NonAuthoritativeInfo";
    Status[Status[/** RFC 7231, 6.3.5 */ "NoContent"] = 204] = "NoContent";
    Status[Status[/** RFC 7231, 6.3.6 */ "ResetContent"] = 205] = "ResetContent";
    Status[Status[/** RFC 7233, 4.1 */ "PartialContent"] = 206] = "PartialContent";
    Status[Status[/** RFC 4918, 11.1 */ "MultiStatus"] = 207] = "MultiStatus";
    Status[Status[/** RFC 5842, 7.1 */ "AlreadyReported"] = 208] = "AlreadyReported";
    Status[Status[/** RFC 3229, 10.4.1 */ "IMUsed"] = 226] = "IMUsed";
    Status[Status[/** RFC 7231, 6.4.1 */ "MultipleChoices"] = 300] = "MultipleChoices";
    Status[Status[/** RFC 7231, 6.4.2 */ "MovedPermanently"] = 301] = "MovedPermanently";
    Status[Status[/** RFC 7231, 6.4.3 */ "Found"] = 302] = "Found";
    Status[Status[/** RFC 7231, 6.4.4 */ "SeeOther"] = 303] = "SeeOther";
    Status[Status[/** RFC 7232, 4.1 */ "NotModified"] = 304] = "NotModified";
    Status[Status[/** RFC 7231, 6.4.5 */ "UseProxy"] = 305] = "UseProxy";
    Status[Status[/** RFC 7231, 6.4.7 */ "TemporaryRedirect"] = 307] = "TemporaryRedirect";
    Status[Status[/** RFC 7538, 3 */ "PermanentRedirect"] = 308] = "PermanentRedirect";
    Status[Status[/** RFC 7231, 6.5.1 */ "BadRequest"] = 400] = "BadRequest";
    Status[Status[/** RFC 7235, 3.1 */ "Unauthorized"] = 401] = "Unauthorized";
    Status[Status[/** RFC 7231, 6.5.2 */ "PaymentRequired"] = 402] = "PaymentRequired";
    Status[Status[/** RFC 7231, 6.5.3 */ "Forbidden"] = 403] = "Forbidden";
    Status[Status[/** RFC 7231, 6.5.4 */ "NotFound"] = 404] = "NotFound";
    Status[Status[/** RFC 7231, 6.5.5 */ "MethodNotAllowed"] = 405] = "MethodNotAllowed";
    Status[Status[/** RFC 7231, 6.5.6 */ "NotAcceptable"] = 406] = "NotAcceptable";
    Status[Status[/** RFC 7235, 3.2 */ "ProxyAuthRequired"] = 407] = "ProxyAuthRequired";
    Status[Status[/** RFC 7231, 6.5.7 */ "RequestTimeout"] = 408] = "RequestTimeout";
    Status[Status[/** RFC 7231, 6.5.8 */ "Conflict"] = 409] = "Conflict";
    Status[Status[/** RFC 7231, 6.5.9 */ "Gone"] = 410] = "Gone";
    Status[Status[/** RFC 7231, 6.5.10 */ "LengthRequired"] = 411] = "LengthRequired";
    Status[Status[/** RFC 7232, 4.2 */ "PreconditionFailed"] = 412] = "PreconditionFailed";
    Status[Status[/** RFC 7231, 6.5.11 */ "RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
    Status[Status[/** RFC 7231, 6.5.12 */ "RequestURITooLong"] = 414] = "RequestURITooLong";
    Status[Status[/** RFC 7231, 6.5.13 */ "UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    Status[Status[/** RFC 7233, 4.4 */ "RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    Status[Status[/** RFC 7231, 6.5.14 */ "ExpectationFailed"] = 417] = "ExpectationFailed";
    Status[Status[/** RFC 7168, 2.3.3 */ "Teapot"] = 418] = "Teapot";
    Status[Status[/** RFC 7540, 9.1.2 */ "MisdirectedRequest"] = 421] = "MisdirectedRequest";
    Status[Status[/** RFC 4918, 11.2 */ "UnprocessableEntity"] = 422] = "UnprocessableEntity";
    Status[Status[/** RFC 4918, 11.3 */ "Locked"] = 423] = "Locked";
    Status[Status[/** RFC 4918, 11.4 */ "FailedDependency"] = 424] = "FailedDependency";
    Status[Status[/** RFC 8470, 5.2 */ "TooEarly"] = 425] = "TooEarly";
    Status[Status[/** RFC 7231, 6.5.15 */ "UpgradeRequired"] = 426] = "UpgradeRequired";
    Status[Status[/** RFC 6585, 3 */ "PreconditionRequired"] = 428] = "PreconditionRequired";
    Status[Status[/** RFC 6585, 4 */ "TooManyRequests"] = 429] = "TooManyRequests";
    Status[Status[/** RFC 6585, 5 */ "RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
    Status[Status[/** RFC 7725, 3 */ "UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
    Status[Status[/** RFC 7231, 6.6.1 */ "InternalServerError"] = 500] = "InternalServerError";
    Status[Status[/** RFC 7231, 6.6.2 */ "NotImplemented"] = 501] = "NotImplemented";
    Status[Status[/** RFC 7231, 6.6.3 */ "BadGateway"] = 502] = "BadGateway";
    Status[Status[/** RFC 7231, 6.6.4 */ "ServiceUnavailable"] = 503] = "ServiceUnavailable";
    Status[Status[/** RFC 7231, 6.6.5 */ "GatewayTimeout"] = 504] = "GatewayTimeout";
    Status[Status[/** RFC 7231, 6.6.6 */ "HTTPVersionNotSupported"] = 505] = "HTTPVersionNotSupported";
    Status[Status[/** RFC 2295, 8.1 */ "VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
    Status[Status[/** RFC 4918, 11.5 */ "InsufficientStorage"] = 507] = "InsufficientStorage";
    Status[Status[/** RFC 5842, 7.2 */ "LoopDetected"] = 508] = "LoopDetected";
    Status[Status[/** RFC 2774, 7 */ "NotExtended"] = 510] = "NotExtended";
    Status[Status[/** RFC 6585, 6 */ "NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(Status || (Status = {
}));
const STATUS_TEXT = new Map([
    [
        Status.Continue,
        "Continue"
    ],
    [
        Status.SwitchingProtocols,
        "Switching Protocols"
    ],
    [
        Status.Processing,
        "Processing"
    ],
    [
        Status.EarlyHints,
        "Early Hints"
    ],
    [
        Status.OK,
        "OK"
    ],
    [
        Status.Created,
        "Created"
    ],
    [
        Status.Accepted,
        "Accepted"
    ],
    [
        Status.NonAuthoritativeInfo,
        "Non-Authoritative Information"
    ],
    [
        Status.NoContent,
        "No Content"
    ],
    [
        Status.ResetContent,
        "Reset Content"
    ],
    [
        Status.PartialContent,
        "Partial Content"
    ],
    [
        Status.MultiStatus,
        "Multi-Status"
    ],
    [
        Status.AlreadyReported,
        "Already Reported"
    ],
    [
        Status.IMUsed,
        "IM Used"
    ],
    [
        Status.MultipleChoices,
        "Multiple Choices"
    ],
    [
        Status.MovedPermanently,
        "Moved Permanently"
    ],
    [
        Status.Found,
        "Found"
    ],
    [
        Status.SeeOther,
        "See Other"
    ],
    [
        Status.NotModified,
        "Not Modified"
    ],
    [
        Status.UseProxy,
        "Use Proxy"
    ],
    [
        Status.TemporaryRedirect,
        "Temporary Redirect"
    ],
    [
        Status.PermanentRedirect,
        "Permanent Redirect"
    ],
    [
        Status.BadRequest,
        "Bad Request"
    ],
    [
        Status.Unauthorized,
        "Unauthorized"
    ],
    [
        Status.PaymentRequired,
        "Payment Required"
    ],
    [
        Status.Forbidden,
        "Forbidden"
    ],
    [
        Status.NotFound,
        "Not Found"
    ],
    [
        Status.MethodNotAllowed,
        "Method Not Allowed"
    ],
    [
        Status.NotAcceptable,
        "Not Acceptable"
    ],
    [
        Status.ProxyAuthRequired,
        "Proxy Authentication Required"
    ],
    [
        Status.RequestTimeout,
        "Request Timeout"
    ],
    [
        Status.Conflict,
        "Conflict"
    ],
    [
        Status.Gone,
        "Gone"
    ],
    [
        Status.LengthRequired,
        "Length Required"
    ],
    [
        Status.PreconditionFailed,
        "Precondition Failed"
    ],
    [
        Status.RequestEntityTooLarge,
        "Request Entity Too Large"
    ],
    [
        Status.RequestURITooLong,
        "Request URI Too Long"
    ],
    [
        Status.UnsupportedMediaType,
        "Unsupported Media Type"
    ],
    [
        Status.RequestedRangeNotSatisfiable,
        "Requested Range Not Satisfiable"
    ],
    [
        Status.ExpectationFailed,
        "Expectation Failed"
    ],
    [
        Status.Teapot,
        "I'm a teapot"
    ],
    [
        Status.MisdirectedRequest,
        "Misdirected Request"
    ],
    [
        Status.UnprocessableEntity,
        "Unprocessable Entity"
    ],
    [
        Status.Locked,
        "Locked"
    ],
    [
        Status.FailedDependency,
        "Failed Dependency"
    ],
    [
        Status.TooEarly,
        "Too Early"
    ],
    [
        Status.UpgradeRequired,
        "Upgrade Required"
    ],
    [
        Status.PreconditionRequired,
        "Precondition Required"
    ],
    [
        Status.TooManyRequests,
        "Too Many Requests"
    ],
    [
        Status.RequestHeaderFieldsTooLarge,
        "Request Header Fields Too Large"
    ],
    [
        Status.UnavailableForLegalReasons,
        "Unavailable For Legal Reasons"
    ],
    [
        Status.InternalServerError,
        "Internal Server Error"
    ],
    [
        Status.NotImplemented,
        "Not Implemented"
    ],
    [
        Status.BadGateway,
        "Bad Gateway"
    ],
    [
        Status.ServiceUnavailable,
        "Service Unavailable"
    ],
    [
        Status.GatewayTimeout,
        "Gateway Timeout"
    ],
    [
        Status.HTTPVersionNotSupported,
        "HTTP Version Not Supported"
    ],
    [
        Status.VariantAlsoNegotiates,
        "Variant Also Negotiates"
    ],
    [
        Status.InsufficientStorage,
        "Insufficient Storage"
    ],
    [
        Status.LoopDetected,
        "Loop Detected"
    ],
    [
        Status.NotExtended,
        "Not Extended"
    ],
    [
        Status.NetworkAuthenticationRequired,
        "Network Authentication Required"
    ], 
]);

function thenableReject(error) {
    return {
        then: (resolve, reject)=>reject(error)
    };
}

function websocketEvents(websocket, { emitOpen =false  } = {
}) {
    let done = false;
    const values = [];
    const resolvers = [];
    const close = ()=>{
        done = true;
        while(resolvers.length > 0)resolvers.shift()({
            value: undefined,
            done: true
        });
    };
    const push = (data)=>{
        if (done) return;
        if (resolvers.length > 0) {
            resolvers.shift()(data);
        } else {
            values.push(data);
        }
    };
    const pushError = (error)=>{
        push(thenableReject(error));
        close();
    };
    const pushEvent = (event)=>push({
            value: event,
            done: false
        })
    ;
    const next = ()=>{
        if (values.length > 0) return Promise.resolve(values.shift());
        if (done) return Promise.resolve({
            value: undefined,
            done: true
        });
        return new Promise((resolve)=>resolvers.push(resolve)
        );
    };
    const initSocket = ()=>{
        websocket.onclose = close;
        websocket.onerror = pushError;
        websocket.onmessage = pushEvent;
    };
    if (websocket.readyState === WebSocket.CONNECTING) {
        websocket.onopen = (event)=>{
            if (emitOpen) pushEvent(event);
            initSocket();
        };
    } else {
        initSocket();
    }
    const iterator = {
        [Symbol.asyncIterator]: ()=>iterator
        ,
        next,
        throw: async (value)=>{
            pushError(value);
            if (websocket.readyState === WebSocket.OPEN) websocket.close();
            return next();
        },
        return: async ()=>{
            close();
            if (websocket.readyState === WebSocket.OPEN) websocket.close();
            return next();
        }
    };
    return iterator;
}

const MAX_SAFE_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);

// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
var OpCode;
(function(OpCode) {
    OpCode[OpCode["Continue"] = 0] = "Continue";
    OpCode[OpCode["TextFrame"] = 1] = "TextFrame";
    OpCode[OpCode["BinaryFrame"] = 2] = "BinaryFrame";
    OpCode[OpCode["Close"] = 8] = "Close";
    OpCode[OpCode["Ping"] = 9] = "Ping";
    OpCode[OpCode["Pong"] = 10] = "Pong";
})(OpCode || (OpCode = {
}));

// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
/**
 * Converts the byte array to a UUID string
 * @param bytes Used to convert Byte to Hex
 */ function bytesToUuid(bytes) {
    const bits = [
        ...bytes
    ].map((bit)=>{
        const s = bit.toString(16);
        return bit < 16 ? "0" + s : s;
    });
    return [
        ...bits.slice(0, 4),
        "-",
        ...bits.slice(4, 6),
        "-",
        ...bits.slice(6, 8),
        "-",
        ...bits.slice(8, 10),
        "-",
        ...bits.slice(10, 16), 
    ].join("");
}

// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
/** Generates a RFC4122 v4 UUID (pseudo-randomly-based) */ function generate() {
    const rnds = crypto.getRandomValues(new Uint8Array(16));
    rnds[6] = rnds[6] & 15 | 64; // Version 4
    rnds[8] = rnds[8] & 63 | 128; // Variant 10
    return bytesToUuid(rnds);
}

// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
/** A module to print ANSI terminal colors. Inspired by chalk, kleur, and colors
 * on npm.
 *
 * ```
 * import { bgBlue, red, bold } from "https://deno.land/std/fmt/colors.ts";
 * console.log(bgBlue(red(bold("Hello world!"))));
 * ```
 *
 * This module supports `NO_COLOR` environmental variable disabling any coloring
 * if `NO_COLOR` is set.
 *
 * This module is browser compatible. */ const noColor = globalThis.Deno?.noColor ?? true;

var DiffType;
(function(DiffType) {
    DiffType["removed"] = "removed";
    DiffType["common"] = "common";
    DiffType["added"] = "added";
})(DiffType || (DiffType = {
}));

// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
function validateIntegerRange(value, name, min = -2147483648, max = 2147483647) {
    // The defaults for min and max correspond to the limits of 32-bit integers.
    if (!Number.isInteger(value)) {
        throw new Error(`${name} must be 'an integer' but was ${value}`);
    }
    if (value < min || value > max) {
        throw new Error(`${name} must be >= ${min} && <= ${max}. Value was ${value}`);
    }
}

// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
class DenoStdInternalError extends Error {
    constructor(message){
        super(message);
        this.name = "DenoStdInternalError";
    }
}
/** Make an assertion, if not `true`, then throw. */ function assert(expr, msg = "") {
    if (!expr) {
        throw new DenoStdInternalError(msg);
    }
}

// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
// deno-lint-ignore no-explicit-any
function createIterResult(value, done) {
    return {
        value,
        done
    };
}
let defaultMaxListeners = 10;
/**
 * See also https://nodejs.org/api/events.html
 */ class EventEmitter {
    static captureRejectionSymbol = Symbol.for("nodejs.rejection");
    static errorMonitor = Symbol("events.errorMonitor");
    static get defaultMaxListeners() {
        return defaultMaxListeners;
    }
    static set defaultMaxListeners(value) {
        defaultMaxListeners = value;
    }
    constructor(){
        this._events = new Map();
    }
    _addListener(eventName, listener, prepend) {
        this.emit("newListener", eventName, listener);
        if (this._events.has(eventName)) {
            const listeners = this._events.get(eventName);
            if (prepend) {
                listeners.unshift(listener);
            } else {
                listeners.push(listener);
            }
        } else {
            this._events.set(eventName, [
                listener
            ]);
        }
        const max = this.getMaxListeners();
        if (max > 0 && this.listenerCount(eventName) > max) {
            const warning = new Error(`Possible EventEmitter memory leak detected.\n         ${this.listenerCount(eventName)} ${eventName.toString()} listeners.\n         Use emitter.setMaxListeners() to increase limit`);
            warning.name = "MaxListenersExceededWarning";
            console.warn(warning);
        }
        return this;
    }
    /** Alias for emitter.on(eventName, listener). */ addListener(eventName, listener) {
        return this._addListener(eventName, listener, false);
    }
    /**
   * Synchronously calls each of the listeners registered for the event named
   * eventName, in the order they were registered, passing the supplied
   * arguments to each.
   * @return true if the event had listeners, false otherwise
   */ // deno-lint-ignore no-explicit-any
    emit(eventName, ...args) {
        if (this._events.has(eventName)) {
            if (eventName === "error" && this._events.get(EventEmitter.errorMonitor)) {
                this.emit(EventEmitter.errorMonitor, ...args);
            }
            const listeners = this._events.get(eventName).slice(); // We copy with slice() so array is not mutated during emit
            for (const listener of listeners){
                try {
                    listener.apply(this, args);
                } catch (err) {
                    this.emit("error", err);
                }
            }
            return true;
        } else if (eventName === "error") {
            if (this._events.get(EventEmitter.errorMonitor)) {
                this.emit(EventEmitter.errorMonitor, ...args);
            }
            const errMsg = args.length > 0 ? args[0] : Error("Unhandled error.");
            throw errMsg;
        }
        return false;
    }
    /**
   * Returns an array listing the events for which the emitter has
   * registered listeners.
   */ eventNames() {
        return Array.from(this._events.keys());
    }
    /**
   * Returns the current max listener value for the EventEmitter which is
   * either set by emitter.setMaxListeners(n) or defaults to
   * EventEmitter.defaultMaxListeners.
   */ getMaxListeners() {
        return this.maxListeners || EventEmitter.defaultMaxListeners;
    }
    /**
   * Returns the number of listeners listening to the event named
   * eventName.
   */ listenerCount(eventName) {
        if (this._events.has(eventName)) {
            return this._events.get(eventName).length;
        } else {
            return 0;
        }
    }
    _listeners(target, eventName, unwrap) {
        if (!target._events.has(eventName)) {
            return [];
        }
        const eventListeners = target._events.get(eventName);
        return unwrap ? this.unwrapListeners(eventListeners) : eventListeners.slice(0);
    }
    unwrapListeners(arr) {
        const unwrappedListeners = new Array(arr.length);
        for(let i = 0; i < arr.length; i++){
            // deno-lint-ignore no-explicit-any
            unwrappedListeners[i] = arr[i]["listener"] || arr[i];
        }
        return unwrappedListeners;
    }
    /** Returns a copy of the array of listeners for the event named eventName.*/ listeners(eventName) {
        return this._listeners(this, eventName, true);
    }
    /**
   * Returns a copy of the array of listeners for the event named eventName,
   * including any wrappers (such as those created by .once()).
   */ rawListeners(eventName) {
        return this._listeners(this, eventName, false);
    }
    /** Alias for emitter.removeListener(). */ off(eventName, listener) {
        return this.removeListener(eventName, listener);
    }
    /**
   * Adds the listener function to the end of the listeners array for the event
   *  named eventName. No checks are made to see if the listener has already
   * been added. Multiple calls passing the same combination of eventName and
   * listener will result in the listener being added, and called, multiple
   * times.
   */ on(eventName, listener) {
        return this._addListener(eventName, listener, false);
    }
    /**
   * Adds a one-time listener function for the event named eventName. The next
   * time eventName is triggered, this listener is removed and then invoked.
   */ once(eventName, listener) {
        const wrapped = this.onceWrap(eventName, listener);
        this.on(eventName, wrapped);
        return this;
    }
    // Wrapped function that calls EventEmitter.removeListener(eventName, self) on execution.
    onceWrap(eventName, listener) {
        const wrapper = function(// deno-lint-ignore no-explicit-any
        ...args) {
            this.context.removeListener(this.eventName, this.rawListener);
            this.listener.apply(this.context, args);
        };
        const wrapperContext = {
            eventName: eventName,
            listener: listener,
            rawListener: wrapper,
            context: this
        };
        const wrapped = wrapper.bind(wrapperContext);
        wrapperContext.rawListener = wrapped;
        wrapped.listener = listener;
        return wrapped;
    }
    /**
   * Adds the listener function to the beginning of the listeners array for the
   *  event named eventName. No checks are made to see if the listener has
   * already been added. Multiple calls passing the same combination of
   * eventName and listener will result in the listener being added, and
   * called, multiple times.
   */ prependListener(eventName, listener) {
        return this._addListener(eventName, listener, true);
    }
    /**
   * Adds a one-time listener function for the event named eventName to the
   * beginning of the listeners array. The next time eventName is triggered,
   * this listener is removed, and then invoked.
   */ prependOnceListener(eventName, listener) {
        const wrapped = this.onceWrap(eventName, listener);
        this.prependListener(eventName, wrapped);
        return this;
    }
    /** Removes all listeners, or those of the specified eventName. */ removeAllListeners(eventName) {
        if (this._events === undefined) {
            return this;
        }
        if (eventName) {
            if (this._events.has(eventName)) {
                const listeners = this._events.get(eventName).slice(); // Create a copy; We use it AFTER it's deleted.
                this._events.delete(eventName);
                for (const listener of listeners){
                    this.emit("removeListener", eventName, listener);
                }
            }
        } else {
            const eventList = this.eventNames();
            eventList.map((value)=>{
                this.removeAllListeners(value);
            });
        }
        return this;
    }
    /**
   * Removes the specified listener from the listener array for the event
   * named eventName.
   */ removeListener(eventName, listener) {
        if (this._events.has(eventName)) {
            const arr = this._events.get(eventName);
            assert(arr);
            let listenerIndex = -1;
            for(let i = arr.length - 1; i >= 0; i--){
                // arr[i]["listener"] is the reference to the listener inside a bound 'once' wrapper
                if (arr[i] == listener || arr[i] && arr[i]["listener"] == listener) {
                    listenerIndex = i;
                    break;
                }
            }
            if (listenerIndex >= 0) {
                arr.splice(listenerIndex, 1);
                this.emit("removeListener", eventName, listener);
                if (arr.length === 0) {
                    this._events.delete(eventName);
                }
            }
        }
        return this;
    }
    /**
   * By default EventEmitters will print a warning if more than 10 listeners
   * are added for a particular event. This is a useful default that helps
   * finding memory leaks. Obviously, not all events should be limited to just
   * 10 listeners. The emitter.setMaxListeners() method allows the limit to be
   * modified for this specific EventEmitter instance. The value can be set to
   * Infinity (or 0) to indicate an unlimited number of listeners.
   */ setMaxListeners(n) {
        if (n !== Infinity) {
            if (n === 0) {
                n = Infinity;
            } else {
                validateIntegerRange(n, "maxListeners", 0);
            }
        }
        this.maxListeners = n;
        return this;
    }
    /**
   * Creates a Promise that is fulfilled when the EventEmitter emits the given
   * event or that is rejected when the EventEmitter emits 'error'. The Promise
   * will resolve with an array of all the arguments emitted to the given event.
   */ static once(emitter, name) {
        return new Promise((resolve, reject)=>{
            if (emitter instanceof EventTarget) {
                // EventTarget does not have `error` event semantics like Node
                // EventEmitters, we do not listen to `error` events here.
                emitter.addEventListener(name, (...args)=>{
                    resolve(args);
                }, {
                    once: true,
                    passive: false,
                    capture: false
                });
                return;
            } else if (emitter instanceof EventEmitter) {
                // deno-lint-ignore no-explicit-any
                const eventListener = (...args)=>{
                    if (errorListener !== undefined) {
                        emitter.removeListener("error", errorListener);
                    }
                    resolve(args);
                };
                let errorListener;
                // Adding an error listener is not optional because
                // if an error is thrown on an event emitter we cannot
                // guarantee that the actual event we are waiting will
                // be fired. The result could be a silent way to create
                // memory or file descriptor leaks, which is something
                // we should avoid.
                if (name !== "error") {
                    // deno-lint-ignore no-explicit-any
                    errorListener = (err)=>{
                        emitter.removeListener(name, eventListener);
                        reject(err);
                    };
                    emitter.once("error", errorListener);
                }
                emitter.once(name, eventListener);
                return;
            }
        });
    }
    /**
   * Returns an AsyncIterator that iterates eventName events. It will throw if
   * the EventEmitter emits 'error'. It removes all listeners when exiting the
   * loop. The value returned by each iteration is an array composed of the
   * emitted event arguments.
   */ static on(emitter, event) {
        // deno-lint-ignore no-explicit-any
        const unconsumedEventValues = [];
        // deno-lint-ignore no-explicit-any
        const unconsumedPromises = [];
        let error = null;
        let finished = false;
        const iterator = {
            // deno-lint-ignore no-explicit-any
            next () {
                // First, we consume all unread events
                // deno-lint-ignore no-explicit-any
                const value = unconsumedEventValues.shift();
                if (value) {
                    return Promise.resolve(createIterResult(value, false));
                }
                // Then we error, if an error happened
                // This happens one time if at all, because after 'error'
                // we stop listening
                if (error) {
                    const p = Promise.reject(error);
                    // Only the first element errors
                    error = null;
                    return p;
                }
                // If the iterator is finished, resolve to done
                if (finished) {
                    return Promise.resolve(createIterResult(undefined, true));
                }
                // Wait until an event happens
                return new Promise(function(resolve, reject) {
                    unconsumedPromises.push({
                        resolve,
                        reject
                    });
                });
            },
            // deno-lint-ignore no-explicit-any
            return () {
                emitter.removeListener(event, eventHandler);
                emitter.removeListener("error", errorHandler);
                finished = true;
                for (const promise of unconsumedPromises){
                    promise.resolve(createIterResult(undefined, true));
                }
                return Promise.resolve(createIterResult(undefined, true));
            },
            throw (err) {
                error = err;
                emitter.removeListener(event, eventHandler);
                emitter.removeListener("error", errorHandler);
            },
            // deno-lint-ignore no-explicit-any
            [Symbol.asyncIterator] () {
                return this;
            }
        };
        emitter.on(event, eventHandler);
        emitter.on("error", errorHandler);
        return iterator;
        // deno-lint-ignore no-explicit-any
        function eventHandler(...args) {
            const promise = unconsumedPromises.shift();
            if (promise) {
                promise.resolve(createIterResult(args, false));
            } else {
                unconsumedEventValues.push(args);
            }
        }
        // deno-lint-ignore no-explicit-any
        function errorHandler(err) {
            finished = true;
            const toError = unconsumedPromises.shift();
            if (toError) {
                toError.reject(err);
            } else {
                // The next time we call next()
                error = err;
            }
            iterator.return();
        }
    }
}

class Dropper extends EventEmitter {
    uuid = generate();
    _socket = null;
    uri = null;
    constructor(arg, options){
        super();
        this.options = options;
        this.options = Object.assign({
            endpoint: '/dropper'
        }, this.options);
        this.uri = this.uri = arg ? arg + this.options.endpoint : 'ws://localhost:8080' + this.options.endpoint;
        connectWebSocket(this.uri).then((socket)=>{
            this._socket = socket;
            this.init(this._socket);
        }).catch((err)=>{
            console.log(err);
            this.emit("error", err);
        });
    }
    // Client API
    async send(evt, data) {
        let data_push = data ? JSON.stringify({
            evt,
            data
        }) : JSON.stringify(evt);
        if (this._socket !== null) this._socket.send(data_push);
    }
    async broadcast(evt, data) {
        if (this._socket !== null) {
            let data_push = data ? {
                evt,
                data,
                client: this.uuid
            } : {
                evt: 'message',
                data: evt,
                client: this.uuid
            };
            let broadcast = JSON.stringify({
                evt: '_broadcast_',
                data: data_push
            });
            if (this._socket !== null) await this._socket.send(broadcast);
        }
    }
    async close(code = 1005, reason = "") {
        if (this._socket !== null) {
            return await this._socket.close(code, reason);
        }
    }
    async ping(data) {
        this?._socket?.send(JSON.stringify({
            evt: '_ping_',
            data
        }));
    }
    // Client side handler
    async init(socket) {
        this.emit("open");
        socket.onclose = (ev)=>{
            const { code , reason  } = ev;
            this.emit("close", code, reason);
        };
        for await (const { data: ev  } of websocketEvents(socket)){
            try {
                if (hasJsonStructure(ev)) {
                    let { evt , data , client  } = JSON.parse(ev);
                    if (evt == '_ping_') this._socket?.send(JSON.stringify({
                        evt: '_pong_',
                        data
                    }));
                    if (evt !== '_ping_' && evt !== '_pong_') this.emit("_all_", ev);
                    if (client !== this.uuid) this.emit(evt, data);
                } else {
                    this.emit("_all_", ev);
                    this.emit('message', ev);
                }
            } catch (e) {
                this.emit("error", e);
                await this.close(1000);
            }
        }
    }
}

export default Dropper;
