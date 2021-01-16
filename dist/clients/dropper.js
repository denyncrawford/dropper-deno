"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _globalThis$Deno$noCo, _globalThis$Deno;

var _Symbol$asyncIterator, _Symbol$asyncIterator2, _Symbol$asyncIterator3;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncGeneratorDelegate(inner, awaitWrap) { var iter = {}, waiting = false; function pump(key, value) { waiting = true; value = new Promise(function (resolve) { resolve(inner[key](value)); }); return { done: false, value: awaitWrap(value) }; } ; if (typeof Symbol === "function" && Symbol.iterator) { iter[Symbol.iterator] = function () { return this; }; } iter.next = function (value) { if (waiting) { waiting = false; return value; } return pump("next", value); }; if (typeof inner["throw"] === "function") { iter["throw"] = function (value) { if (waiting) { waiting = false; throw value; } return pump("throw", value); }; } if (typeof inner["return"] === "function") { iter["return"] = function (value) { if (waiting) { waiting = false; return value; } return pump("return", value); }; } return iter; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

function hasJsonStructure(str) {
  if (typeof str !== 'string') return false;

  try {
    var result = JSON.parse(str);
    var type = Object.prototype.toString.call(result);
    return type === '[object Object]' || type === '[object Array]';
  } catch (err) {
    return false;
  }
}

function hasOwnProperty(obj, v) {
  if (obj == null) {
    return false;
  }

  return Object.prototype.hasOwnProperty.call(obj, v);
}

var Status;

function deferred() {
  var methods;
  var promise = new Promise(function (resolve, reject) {
    methods = {
      resolve: resolve,
      reject: reject
    };
  });
  return Object.assign(promise, methods);
}

_Symbol$asyncIterator = Symbol.asyncIterator;

var MuxAsyncIterator = /*#__PURE__*/function () {
  function MuxAsyncIterator() {
    _classCallCheck(this, MuxAsyncIterator);

    _defineProperty(this, "iteratorCount", 0);

    _defineProperty(this, "yields", []);

    _defineProperty(this, "__throws", []);

    _defineProperty(this, "signal", deferred());
  }

  _createClass(MuxAsyncIterator, [{
    key: "add",
    value: function add(iterator) {
      ++this.iteratorCount;
      this.callIteratorNext(iterator);
    }
  }, {
    key: "callIteratorNext",
    value: function () {
      var _callIteratorNext = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(iterator) {
        var _yield$iterator$next, value, done;

        return regeneratorRuntime.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return iterator.next();

              case 3:
                _yield$iterator$next = _context2.sent;
                value = _yield$iterator$next.value;
                done = _yield$iterator$next.done;

                if (done) {
                  --this.iteratorCount;
                } else {
                  this.yields.push({
                    iterator: iterator,
                    value: value
                  });
                }

                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                this["throws"].push(_context2.t0);

              case 12:
                this.signal.resolve();

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function callIteratorNext(_x5) {
        return _callIteratorNext.apply(this, arguments);
      }

      return callIteratorNext;
    }()
  }, {
    key: "iterate",
    value: function iterate() {
      var _this = this;

      return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var i, _this$yields$i, iterator, value, _iterator4, _step4, e;

        return regeneratorRuntime.wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this.iteratorCount > 0)) {
                  _context3.next = 34;
                  break;
                }

                _context3.next = 3;
                return _awaitAsyncGenerator(_this.signal);

              case 3:
                i = 0;

              case 4:
                if (!(i < _this.yields.length)) {
                  _context3.next = 12;
                  break;
                }

                _this$yields$i = _this.yields[i], iterator = _this$yields$i.iterator, value = _this$yields$i.value;
                _context3.next = 8;
                return value;

              case 8:
                _this.callIteratorNext(iterator);

              case 9:
                i++;
                _context3.next = 4;
                break;

              case 12:
                if (!_this["throws"].length) {
                  _context3.next = 30;
                  break;
                }

                _iterator4 = _createForOfIteratorHelper(_this["throws"]);
                _context3.prev = 14;

                _iterator4.s();

              case 16:
                if ((_step4 = _iterator4.n()).done) {
                  _context3.next = 21;
                  break;
                }

                e = _step4.value;
                throw e;

              case 19:
                _context3.next = 16;
                break;

              case 21:
                _context3.next = 26;
                break;

              case 23:
                _context3.prev = 23;
                _context3.t0 = _context3["catch"](14);

                _iterator4.e(_context3.t0);

              case 26:
                _context3.prev = 26;

                _iterator4.f();

                return _context3.finish(26);

              case 29:
                _this["throws"].length = 0;

              case 30:
                _this.yields.length = 0;
                _this.signal = deferred();
                _context3.next = 0;
                break;

              case 34:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, null, [[14, 23, 26, 29]]);
      }))();
    }
  }, {
    key: _Symbol$asyncIterator,
    value: function value() {
      return this.iterate();
    }
  }]);

  return MuxAsyncIterator;
}();

function isArray(str) {
  if (typeof str !== 'string') return false;

  try {
    var result = JSON.parse(str);
    var type = Object.prototype.toString.call(result);
    return type === '[object Array]';
  } catch (err) {
    return false;
  }
}

function connectWebSocket(endpoint) {
  return new Promise(function (resolve, reject) {
    var url = new URL(endpoint);
    var hostname = url.hostname,
        protocol = url.protocol,
        port = url.port,
        pathname = url.pathname;
    var p;
    if (protocol === 'http:') p = 'ws://';else if (protocol === 'https:') p = 'wss://';else if (protocol === 'ws:' || protocol === 'wss:') p = protocol + '//';else throw new Error("ws: unsupported protocol: " + url.protocol);
    var uri = "".concat(p + hostname, ":").concat(port + pathname);
    var socket = new WebSocket(uri);

    socket.onopen = function () {
      resolve(socket);
    };

    socket.onerror = function (err) {
      reject(err);
    };
  });
}

function thenableReject(error) {
  return {
    then: function then(resolve, reject) {
      return reject(error);
    }
  };
}

function websocketEvents(websocket) {
  var _iterator5;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$emitOpen = _ref.emitOpen,
      emitOpen = _ref$emitOpen === void 0 ? false : _ref$emitOpen;

  var done = false;
  var values = [];
  var resolvers = [];

  var close = function close() {
    done = true;

    while (resolvers.length > 0) {
      resolvers.shift()({
        value: undefined,
        done: true
      });
    }
  };

  var push = function push(data) {
    if (done) return;

    if (resolvers.length > 0) {
      resolvers.shift()(data);
    } else {
      values.push(data);
    }
  };

  var pushError = function pushError(error) {
    push(thenableReject(error));
    close();
  };

  var pushEvent = function pushEvent(event) {
    return push({
      value: event,
      done: false
    });
  };

  var next = function next() {
    if (values.length > 0) return Promise.resolve(values.shift());
    if (done) return Promise.resolve({
      value: undefined,
      done: true
    });
    return new Promise(function (resolve) {
      return resolvers.push(resolve);
    });
  };

  var initSocket = function initSocket() {
    websocket.onclose = close;
    websocket.onerror = pushError;
    websocket.onmessage = pushEvent;
  };

  if (websocket.readyState === WebSocket.CONNECTING) {
    websocket.onopen = function (event) {
      if (emitOpen) pushEvent(event);
      initSocket();
    };
  } else {
    initSocket();
  }

  var iterator = (_iterator5 = {}, _defineProperty(_iterator5, Symbol.asyncIterator, function () {
    return iterator;
  }), _defineProperty(_iterator5, "next", next), _defineProperty(_iterator5, "throw", function () {
    var _throw2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(value) {
      return regeneratorRuntime.wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              pushError(value);
              if (websocket.readyState === WebSocket.OPEN) websocket.close();
              return _context4.abrupt("return", next());

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3);
    }));

    function _throw(_x6) {
      return _throw2.apply(this, arguments);
    }

    return _throw;
  }()), _defineProperty(_iterator5, "return", function () {
    var _return2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              close();
              if (websocket.readyState === WebSocket.OPEN) websocket.close();
              return _context5.abrupt("return", next());

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee4);
    }));

    function _return() {
      return _return2.apply(this, arguments);
    }

    return _return;
  }()), _iterator5);
  return iterator;
}

var DEFAULT_BUFFER_SIZE = 32 * 1024;

function assert(expr) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  if (!expr) {
    throw new DenoStdInternalError(msg);
  }
}

function readShort(_x7) {
  return _readShort.apply(this, arguments);
}

function _readShort() {
  _readShort = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(buf) {
    var high, low;
    return regeneratorRuntime.wrap(function _callee33$(_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            _context34.next = 2;
            return buf.readByte();

          case 2:
            high = _context34.sent;

            if (!(high === null)) {
              _context34.next = 5;
              break;
            }

            return _context34.abrupt("return", null);

          case 5:
            _context34.next = 7;
            return buf.readByte();

          case 7:
            low = _context34.sent;

            if (!(low === null)) {
              _context34.next = 10;
              break;
            }

            throw new Deno.errors.UnexpectedEof();

          case 10:
            return _context34.abrupt("return", high << 8 | low);

          case 11:
          case "end":
            return _context34.stop();
        }
      }
    }, _callee33);
  }));
  return _readShort.apply(this, arguments);
}

function readInt(_x8) {
  return _readInt.apply(this, arguments);
}

function _readInt() {
  _readInt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(buf) {
    var high, low;
    return regeneratorRuntime.wrap(function _callee34$(_context35) {
      while (1) {
        switch (_context35.prev = _context35.next) {
          case 0:
            _context35.next = 2;
            return readShort(buf);

          case 2:
            high = _context35.sent;

            if (!(high === null)) {
              _context35.next = 5;
              break;
            }

            return _context35.abrupt("return", null);

          case 5:
            _context35.next = 7;
            return readShort(buf);

          case 7:
            low = _context35.sent;

            if (!(low === null)) {
              _context35.next = 10;
              break;
            }

            throw new Deno.errors.UnexpectedEof();

          case 10:
            return _context35.abrupt("return", high << 16 | low);

          case 11:
          case "end":
            return _context35.stop();
        }
      }
    }, _callee34);
  }));
  return _readInt.apply(this, arguments);
}

var MAX_SAFE_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);

function readLong(_x9) {
  return _readLong.apply(this, arguments);
}

function _readLong() {
  _readLong = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(buf) {
    var high, low, big;
    return regeneratorRuntime.wrap(function _callee35$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            _context36.next = 2;
            return readInt(buf);

          case 2:
            high = _context36.sent;

            if (!(high === null)) {
              _context36.next = 5;
              break;
            }

            return _context36.abrupt("return", null);

          case 5:
            _context36.next = 7;
            return readInt(buf);

          case 7:
            low = _context36.sent;

            if (!(low === null)) {
              _context36.next = 10;
              break;
            }

            throw new Deno.errors.UnexpectedEof();

          case 10:
            big = BigInt(high) << 32n | BigInt(low);

            if (!(big > MAX_SAFE_INTEGER)) {
              _context36.next = 13;
              break;
            }

            throw new RangeError("Long value too big to be represented as a JavaScript number.");

          case 13:
            return _context36.abrupt("return", Number(big));

          case 14:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee35);
  }));
  return _readLong.apply(this, arguments);
}

function sliceLongToBytes(d) {
  var dest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Array(8);
  var big = BigInt(d);

  for (var i = 0; i < 8; i++) {
    dest[7 - i] = Number(big & 255n);
    big >>= 8n;
  }

  return dest;
}

var invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/g;
var encoder = new TextEncoder();

function encode(input) {
  return encoder.encode(input);
}

var decoder = new TextDecoder();

function decode(input) {
  return decoder.decode(input);
}

function str(buf) {
  if (buf == null) {
    return "";
  } else {
    return decode(buf);
  }
}

function charCode(s) {
  return s.charCodeAt(0);
}

function indexOf(source, pat) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (start >= source.length) {
    return -1;
  }

  if (start < 0) {
    start = 0;
  }

  var s = pat[0];

  for (var i = start; i < source.length; i++) {
    if (source[i] !== s) continue;
    var pin = i;
    var matched = 1;
    var j = i;

    while (matched < pat.length) {
      j++;

      if (source[j] !== pat[j - i]) {
        break;
      }

      matched++;
    }

    if (matched === pat.length) {
      return i;
    }
  }

  return -1;
}

function concat() {
  var length = 0;

  for (var _len = arguments.length, buf = new Array(_len), _key = 0; _key < _len; _key++) {
    buf[_key] = arguments[_key];
  }

  for (var _i = 0, _buf = buf; _i < _buf.length; _i++) {
    var b = _buf[_i];
    length += b.length;
  }

  var output = new Uint8Array(length);
  var index = 0;

  for (var _i2 = 0, _buf2 = buf; _i2 < _buf2.length; _i2++) {
    var b1 = _buf2[_i2];
    output.set(b1, index);
    index += b1.length;
  }

  return output;
}

var TextProtoReader = /*#__PURE__*/function () {
  function TextProtoReader(r1) {
    _classCallCheck(this, TextProtoReader);

    this.r = r1;
  }

  _createClass(TextProtoReader, [{
    key: "readLine",
    value: function () {
      var _readLine = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var s;
        return regeneratorRuntime.wrap(function _callee5$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.readLineSlice();

              case 2:
                s = _context6.sent;

                if (!(s === null)) {
                  _context6.next = 5;
                  break;
                }

                return _context6.abrupt("return", null);

              case 5:
                return _context6.abrupt("return", str(s));

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee5, this);
      }));

      function readLine() {
        return _readLine.apply(this, arguments);
      }

      return readLine;
    }()
  }, {
    key: "readMIMEHeader",
    value: function () {
      var _readMIMEHeader = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var m, line, buf, kv, i, key, value;
        return regeneratorRuntime.wrap(function _callee6$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                m = new Headers();
                _context7.next = 3;
                return this.r.peek(1);

              case 3:
                buf = _context7.sent;

                if (!(buf === null)) {
                  _context7.next = 8;
                  break;
                }

                return _context7.abrupt("return", null);

              case 8:
                if (!(buf[0] == charCode(" ") || buf[0] == charCode("\t"))) {
                  _context7.next = 12;
                  break;
                }

                _context7.next = 11;
                return this.readLineSlice();

              case 11:
                line = _context7.sent;

              case 12:
                _context7.next = 14;
                return this.r.peek(1);

              case 14:
                buf = _context7.sent;

                if (!(buf === null)) {
                  _context7.next = 19;
                  break;
                }

                throw new Deno.errors.UnexpectedEof();

              case 19:
                if (!(buf[0] == charCode(" ") || buf[0] == charCode("\t"))) {
                  _context7.next = 21;
                  break;
                }

                throw new Deno.errors.InvalidData("malformed MIME header initial line: ".concat(str(line)));

              case 21:
                if (!true) {
                  _context7.next = 41;
                  break;
                }

                _context7.next = 24;
                return this.readLineSlice();

              case 24:
                kv = _context7.sent;

                if (!(kv === null)) {
                  _context7.next = 27;
                  break;
                }

                throw new Deno.errors.UnexpectedEof();

              case 27:
                if (!(kv.byteLength === 0)) {
                  _context7.next = 29;
                  break;
                }

                return _context7.abrupt("return", m);

              case 29:
                i = kv.indexOf(charCode(":"));

                if (!(i < 0)) {
                  _context7.next = 32;
                  break;
                }

                throw new Deno.errors.InvalidData("malformed MIME header line: ".concat(str(kv)));

              case 32:
                key = str(kv.subarray(0, i));

                if (!(key == "")) {
                  _context7.next = 35;
                  break;
                }

                return _context7.abrupt("continue", 21);

              case 35:
                i++;

                while (i < kv.byteLength && (kv[i] == charCode(" ") || kv[i] == charCode("\t"))) {
                  i++;
                }

                value = str(kv.subarray(i)).replace(invalidHeaderCharRegex, encodeURI);

                try {
                  m.append(key, value);
                } catch (_unused) {}

                _context7.next = 21;
                break;

              case 41:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee6, this);
      }));

      function readMIMEHeader() {
        return _readMIMEHeader.apply(this, arguments);
      }

      return readMIMEHeader;
    }()
  }, {
    key: "readLineSlice",
    value: function () {
      var _readLineSlice = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var line, r1, l, more;
        return regeneratorRuntime.wrap(function _callee7$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!true) {
                  _context8.next = 16;
                  break;
                }

                _context8.next = 3;
                return this.r.readLine();

              case 3:
                r1 = _context8.sent;

                if (!(r1 === null)) {
                  _context8.next = 6;
                  break;
                }

                return _context8.abrupt("return", null);

              case 6:
                l = r1.line, more = r1.more;

                if (!(!line && !more)) {
                  _context8.next = 11;
                  break;
                }

                if (!(this.skipSpace(l) === 0)) {
                  _context8.next = 10;
                  break;
                }

                return _context8.abrupt("return", new Uint8Array(0));

              case 10:
                return _context8.abrupt("return", l);

              case 11:
                line = line ? concat(line, l) : l;

                if (more) {
                  _context8.next = 14;
                  break;
                }

                return _context8.abrupt("break", 16);

              case 14:
                _context8.next = 0;
                break;

              case 16:
                return _context8.abrupt("return", line);

              case 17:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee7, this);
      }));

      function readLineSlice() {
        return _readLineSlice.apply(this, arguments);
      }

      return readLineSlice;
    }()
  }, {
    key: "skipSpace",
    value: function skipSpace(l) {
      var n = 0;

      for (var i = 0; i < l.length; i++) {
        if (l[i] === charCode(" ") || l[i] === charCode("\t")) {
          continue;
        }

        n++;
      }

      return n;
    }
  }]);

  return TextProtoReader;
}();

var OpCode;

(function (OpCode1) {
  OpCode1[OpCode1["Continue"] = 0] = "Continue";
  OpCode1[OpCode1["TextFrame"] = 1] = "TextFrame";
  OpCode1[OpCode1["BinaryFrame"] = 2] = "BinaryFrame";
  OpCode1[OpCode1["Close"] = 8] = "Close";
  OpCode1[OpCode1["Ping"] = 9] = "Ping";
  OpCode1[OpCode1["Pong"] = 10] = "Pong";
})(OpCode || (OpCode = {}));

function unmask(payload, mask) {
  if (mask) {
    for (var i = 0, len = payload.length; i < len; i++) {
      payload[i] ^= mask[i & 3];
    }
  }
}

function copy(src, dst) {
  var off = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  off = Math.max(0, Math.min(off, dst.byteLength));
  var dstBytesAvailable = dst.byteLength - off;

  if (src.byteLength > dstBytesAvailable) {
    src = src.subarray(0, dstBytesAvailable);
  }

  dst.set(src, off);
  return src.byteLength;
}

var AbstractBufBase = /*#__PURE__*/function () {
  function AbstractBufBase() {
    _classCallCheck(this, AbstractBufBase);

    _defineProperty(this, "usedBufferBytes", 0);

    _defineProperty(this, "err", null);
  }

  _createClass(AbstractBufBase, [{
    key: "size",
    value: function size() {
      return this.buf.byteLength;
    }
  }, {
    key: "available",
    value: function available() {
      return this.buf.byteLength - this.usedBufferBytes;
    }
  }, {
    key: "buffered",
    value: function buffered() {
      return this.usedBufferBytes;
    }
  }]);

  return AbstractBufBase;
}();

var BufWriter = /*#__PURE__*/function (_AbstractBufBase) {
  _inherits(BufWriter, _AbstractBufBase);

  var _super = _createSuper(BufWriter);

  _createClass(BufWriter, null, [{
    key: "create",
    value: function create(writer) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4096;
      return writer instanceof BufWriter ? writer : new BufWriter(writer, size);
    }
  }]);

  function BufWriter(writer1) {
    var _this5;

    var size1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4096;

    _classCallCheck(this, BufWriter);

    _this5 = _super.call(this);
    _this5.writer = writer1;

    if (size1 <= 0) {
      size1 = 4096;
    }

    _this5.buf = new Uint8Array(size1);
    return _this5;
  }

  _createClass(BufWriter, [{
    key: "reset",
    value: function reset(w) {
      this.err = null;
      this.usedBufferBytes = 0;
      this.writer = w;
    }
  }, {
    key: "flush",
    value: function () {
      var _flush = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(this.err !== null)) {
                  _context9.next = 2;
                  break;
                }

                throw this.err;

              case 2:
                if (!(this.usedBufferBytes === 0)) {
                  _context9.next = 4;
                  break;
                }

                return _context9.abrupt("return");

              case 4:
                _context9.prev = 4;
                _context9.next = 7;
                return Deno.writeAll(this.writer, this.buf.subarray(0, this.usedBufferBytes));

              case 7:
                _context9.next = 13;
                break;

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](4);
                this.err = _context9.t0;
                throw _context9.t0;

              case 13:
                this.buf = new Uint8Array(this.buf.length);
                this.usedBufferBytes = 0;

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee8, this, [[4, 9]]);
      }));

      function flush() {
        return _flush.apply(this, arguments);
      }

      return flush;
    }()
  }, {
    key: "write",
    value: function () {
      var _write = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(data) {
        var totalBytesWritten, numBytesWritten;
        return regeneratorRuntime.wrap(function _callee9$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!(this.err !== null)) {
                  _context10.next = 2;
                  break;
                }

                throw this.err;

              case 2:
                if (!(data.length === 0)) {
                  _context10.next = 4;
                  break;
                }

                return _context10.abrupt("return", 0);

              case 4:
                totalBytesWritten = 0;
                numBytesWritten = 0;

              case 6:
                if (!(data.byteLength > this.available())) {
                  _context10.next = 28;
                  break;
                }

                if (!(this.buffered() === 0)) {
                  _context10.next = 20;
                  break;
                }

                _context10.prev = 8;
                _context10.next = 11;
                return this.writer.write(data);

              case 11:
                numBytesWritten = _context10.sent;
                _context10.next = 18;
                break;

              case 14:
                _context10.prev = 14;
                _context10.t0 = _context10["catch"](8);
                this.err = _context10.t0;
                throw _context10.t0;

              case 18:
                _context10.next = 24;
                break;

              case 20:
                numBytesWritten = copy(data, this.buf, this.usedBufferBytes);
                this.usedBufferBytes += numBytesWritten;
                _context10.next = 24;
                return this.flush();

              case 24:
                totalBytesWritten += numBytesWritten;
                data = data.subarray(numBytesWritten);
                _context10.next = 6;
                break;

              case 28:
                numBytesWritten = copy(data, this.buf, this.usedBufferBytes);
                this.usedBufferBytes += numBytesWritten;
                totalBytesWritten += numBytesWritten;
                return _context10.abrupt("return", totalBytesWritten);

              case 32:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee9, this, [[8, 14]]);
      }));

      function write(_x10) {
        return _write.apply(this, arguments);
      }

      return write;
    }()
  }]);

  return BufWriter;
}(AbstractBufBase);

function writeFrame(_x11, _x12) {
  return _writeFrame.apply(this, arguments);
}

function _writeFrame() {
  _writeFrame = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(frame, writer1) {
    var payloadLength, header, hasMask, w;
    return regeneratorRuntime.wrap(function _callee36$(_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            payloadLength = frame.payload.byteLength;
            hasMask = frame.mask ? 128 : 0;

            if (!(frame.mask && frame.mask.byteLength !== 4)) {
              _context37.next = 4;
              break;
            }

            throw new Error("invalid mask. mask must be 4 bytes: length=" + frame.mask.byteLength);

          case 4:
            if (payloadLength < 126) {
              header = new Uint8Array([128 | frame.opcode, hasMask | payloadLength]);
            } else if (payloadLength < 65535) {
              header = new Uint8Array([128 | frame.opcode, hasMask | 126, payloadLength >>> 8, payloadLength & 255]);
            } else {
              header = new Uint8Array([128 | frame.opcode, hasMask | 127].concat(_toConsumableArray(sliceLongToBytes(payloadLength))));
            }

            if (frame.mask) {
              header = concat(header, frame.mask);
            }

            unmask(frame.payload, frame.mask);
            header = concat(header, frame.payload);
            w = BufWriter.create(writer1);
            _context37.next = 11;
            return w.write(header);

          case 11:
            _context37.next = 13;
            return w.flush();

          case 13:
          case "end":
            return _context37.stop();
        }
      }
    }, _callee36);
  }));
  return _writeFrame.apply(this, arguments);
}

function readFrame(_x13) {
  return _readFrame.apply(this, arguments);
}

function _readFrame() {
  _readFrame = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(buf) {
    var b, isLastFrame, opcode, hasMask, payloadLength, l, _l, mask, payload;

    return regeneratorRuntime.wrap(function _callee37$(_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            _context38.next = 2;
            return buf.readByte();

          case 2:
            b = _context38.sent;
            assert(b !== null);
            isLastFrame = false;
            _context38.t0 = b >>> 4;
            _context38.next = _context38.t0 === 8 ? 8 : _context38.t0 === 0 ? 10 : 12;
            break;

          case 8:
            isLastFrame = true;
            return _context38.abrupt("break", 13);

          case 10:
            isLastFrame = false;
            return _context38.abrupt("break", 13);

          case 12:
            throw new Error("invalid signature");

          case 13:
            opcode = b & 15;
            _context38.next = 16;
            return buf.readByte();

          case 16:
            b = _context38.sent;
            assert(b !== null);
            hasMask = b >>> 7;
            payloadLength = b & 127;

            if (!(payloadLength === 126)) {
              _context38.next = 28;
              break;
            }

            _context38.next = 23;
            return readShort(buf);

          case 23:
            l = _context38.sent;
            assert(l !== null);
            payloadLength = l;
            _context38.next = 34;
            break;

          case 28:
            if (!(payloadLength === 127)) {
              _context38.next = 34;
              break;
            }

            _context38.next = 31;
            return readLong(buf);

          case 31:
            _l = _context38.sent;
            assert(_l !== null);
            payloadLength = Number(_l);

          case 34:
            if (!hasMask) {
              _context38.next = 42;
              break;
            }

            mask = new Uint8Array(4);
            _context38.t1 = assert;
            _context38.next = 39;
            return buf.readFull(mask);

          case 39:
            _context38.t2 = _context38.sent;
            _context38.t3 = _context38.t2 !== null;
            (0, _context38.t1)(_context38.t3);

          case 42:
            payload = new Uint8Array(payloadLength);
            _context38.t4 = assert;
            _context38.next = 46;
            return buf.readFull(payload);

          case 46:
            _context38.t5 = _context38.sent;
            _context38.t6 = _context38.t5 !== null;
            (0, _context38.t4)(_context38.t6);
            return _context38.abrupt("return", {
              isLastFrame: isLastFrame,
              opcode: opcode,
              mask: mask,
              payload: payload
            });

          case 50:
          case "end":
            return _context38.stop();
        }
      }
    }, _callee37);
  }));
  return _readFrame.apply(this, arguments);
}

var LF = "\n".charCodeAt(0);

var BufferFullError = /*#__PURE__*/function (_Error) {
  _inherits(BufferFullError, _Error);

  var _super2 = _createSuper(BufferFullError);

  function BufferFullError(partial) {
    var _this6;

    _classCallCheck(this, BufferFullError);

    _this6 = _super2.call(this, "Buffer full");

    _defineProperty(_assertThisInitialized(_this6), "name", "BufferFullError");

    _this6.partial = partial;
    return _this6;
  }

  return BufferFullError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var CR = "\r".charCodeAt(0);

var BufReader = /*#__PURE__*/function () {
  _createClass(BufReader, null, [{
    key: "create",
    value: function create(r) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4096;
      return r instanceof BufReader ? r : new BufReader(r, size);
    }
  }]);

  function BufReader(rd1) {
    var size2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4096;

    _classCallCheck(this, BufReader);

    _defineProperty(this, "r", 0);

    _defineProperty(this, "w", 0);

    _defineProperty(this, "eof", false);

    if (size2 < 16) {
      size2 = 16;
    }

    this._reset(new Uint8Array(size2), rd1);
  }

  _createClass(BufReader, [{
    key: "size",
    value: function size() {
      return this.buf.byteLength;
    }
  }, {
    key: "buffered",
    value: function buffered() {
      return this.w - this.r;
    }
  }, {
    key: "_fill",
    value: function () {
      var _fill2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var i, rr;
        return regeneratorRuntime.wrap(function _callee10$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (this.r > 0) {
                  this.buf.copyWithin(0, this.r, this.w);
                  this.w -= this.r;
                  this.r = 0;
                }

                if (!(this.w >= this.buf.byteLength)) {
                  _context11.next = 3;
                  break;
                }

                throw Error("bufio: tried to fill full buffer");

              case 3:
                i = 100;

              case 4:
                if (!(i > 0)) {
                  _context11.next = 18;
                  break;
                }

                _context11.next = 7;
                return this.rd.read(this.buf.subarray(this.w));

              case 7:
                rr = _context11.sent;

                if (!(rr === null)) {
                  _context11.next = 11;
                  break;
                }

                this.eof = true;
                return _context11.abrupt("return");

              case 11:
                assert(rr >= 0, "negative read");
                this.w += rr;

                if (!(rr > 0)) {
                  _context11.next = 15;
                  break;
                }

                return _context11.abrupt("return");

              case 15:
                i--;
                _context11.next = 4;
                break;

              case 18:
                throw new Error("No progress after ".concat(100, " read() calls"));

              case 19:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee10, this);
      }));

      function _fill() {
        return _fill2.apply(this, arguments);
      }

      return _fill;
    }()
  }, {
    key: "reset",
    value: function reset(r) {
      this._reset(this.buf, r);
    }
  }, {
    key: "_reset",
    value: function _reset(buf, rd) {
      this.buf = buf;
      this.rd = rd;
      this.eof = false;
    }
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(p) {
        var rr, rr1, nread, copied;
        return regeneratorRuntime.wrap(function _callee11$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                rr = p.byteLength;

                if (!(p.byteLength === 0)) {
                  _context12.next = 3;
                  break;
                }

                return _context12.abrupt("return", rr);

              case 3:
                if (!(this.r === this.w)) {
                  _context12.next = 20;
                  break;
                }

                if (!(p.byteLength >= this.buf.byteLength)) {
                  _context12.next = 11;
                  break;
                }

                _context12.next = 7;
                return this.rd.read(p);

              case 7:
                rr1 = _context12.sent;
                nread = rr1 !== null && rr1 !== void 0 ? rr1 : 0;
                assert(nread >= 0, "negative read");
                return _context12.abrupt("return", rr1);

              case 11:
                this.r = 0;
                this.w = 0;
                _context12.next = 15;
                return this.rd.read(this.buf);

              case 15:
                rr = _context12.sent;

                if (!(rr === 0 || rr === null)) {
                  _context12.next = 18;
                  break;
                }

                return _context12.abrupt("return", rr);

              case 18:
                assert(rr >= 0, "negative read");
                this.w += rr;

              case 20:
                copied = copy(this.buf.subarray(this.r, this.w), p, 0);
                this.r += copied;
                return _context12.abrupt("return", copied);

              case 23:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee11, this);
      }));

      function read(_x14) {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "readFull",
    value: function () {
      var _readFull = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(p) {
        var bytesRead, rr;
        return regeneratorRuntime.wrap(function _callee12$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                bytesRead = 0;

              case 1:
                if (!(bytesRead < p.length)) {
                  _context13.next = 21;
                  break;
                }

                _context13.prev = 2;
                _context13.next = 5;
                return this.read(p.subarray(bytesRead));

              case 5:
                rr = _context13.sent;

                if (!(rr === null)) {
                  _context13.next = 12;
                  break;
                }

                if (!(bytesRead === 0)) {
                  _context13.next = 11;
                  break;
                }

                return _context13.abrupt("return", null);

              case 11:
                throw new PartialReadError();

              case 12:
                bytesRead += rr;
                _context13.next = 19;
                break;

              case 15:
                _context13.prev = 15;
                _context13.t0 = _context13["catch"](2);
                _context13.t0.partial = p.subarray(0, bytesRead);
                throw _context13.t0;

              case 19:
                _context13.next = 1;
                break;

              case 21:
                return _context13.abrupt("return", p);

              case 22:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee12, this, [[2, 15]]);
      }));

      function readFull(_x15) {
        return _readFull.apply(this, arguments);
      }

      return readFull;
    }()
  }, {
    key: "readByte",
    value: function () {
      var _readByte = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var c;
        return regeneratorRuntime.wrap(function _callee13$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (!(this.r === this.w)) {
                  _context14.next = 7;
                  break;
                }

                if (!this.eof) {
                  _context14.next = 3;
                  break;
                }

                return _context14.abrupt("return", null);

              case 3:
                _context14.next = 5;
                return this._fill();

              case 5:
                _context14.next = 0;
                break;

              case 7:
                c = this.buf[this.r];
                this.r++;
                return _context14.abrupt("return", c);

              case 10:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee13, this);
      }));

      function readByte() {
        return _readByte.apply(this, arguments);
      }

      return readByte;
    }()
  }, {
    key: "readString",
    value: function () {
      var _readString = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(delim) {
        var buffer;
        return regeneratorRuntime.wrap(function _callee14$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!(delim.length !== 1)) {
                  _context15.next = 2;
                  break;
                }

                throw new Error("Delimiter should be a single character");

              case 2:
                _context15.next = 4;
                return this.readSlice(delim.charCodeAt(0));

              case 4:
                buffer = _context15.sent;

                if (!(buffer === null)) {
                  _context15.next = 7;
                  break;
                }

                return _context15.abrupt("return", null);

              case 7:
                return _context15.abrupt("return", new TextDecoder().decode(buffer));

              case 8:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee14, this);
      }));

      function readString(_x16) {
        return _readString.apply(this, arguments);
      }

      return readString;
    }()
  }, {
    key: "readLine",
    value: function () {
      var _readLine2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
        var line, partial1, drop;
        return regeneratorRuntime.wrap(function _callee15$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                _context16.next = 3;
                return this.readSlice(LF);

              case 3:
                line = _context16.sent;
                _context16.next = 14;
                break;

              case 6:
                _context16.prev = 6;
                _context16.t0 = _context16["catch"](0);
                partial1 = _context16.t0.partial;
                assert(partial1 instanceof Uint8Array, "bufio: caught error from `readSlice()` without `partial` property");

                if (_context16.t0 instanceof BufferFullError) {
                  _context16.next = 12;
                  break;
                }

                throw _context16.t0;

              case 12:
                if (!this.eof && partial1.byteLength > 0 && partial1[partial1.byteLength - 1] === CR) {
                  assert(this.r > 0, "bufio: tried to rewind past start of buffer");
                  this.r--;
                  partial1 = partial1.subarray(0, partial1.byteLength - 1);
                }

                return _context16.abrupt("return", {
                  line: partial1,
                  more: !this.eof
                });

              case 14:
                if (!(line === null)) {
                  _context16.next = 16;
                  break;
                }

                return _context16.abrupt("return", null);

              case 16:
                if (!(line.byteLength === 0)) {
                  _context16.next = 18;
                  break;
                }

                return _context16.abrupt("return", {
                  line: line,
                  more: false
                });

              case 18:
                if (line[line.byteLength - 1] == LF) {
                  drop = 1;

                  if (line.byteLength > 1 && line[line.byteLength - 2] === CR) {
                    drop = 2;
                  }

                  line = line.subarray(0, line.byteLength - drop);
                }

                return _context16.abrupt("return", {
                  line: line,
                  more: false
                });

              case 20:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee15, this, [[0, 6]]);
      }));

      function readLine() {
        return _readLine2.apply(this, arguments);
      }

      return readLine;
    }()
  }, {
    key: "readSlice",
    value: function () {
      var _readSlice = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(delim) {
        var s, slice, i, oldbuf, newbuf;
        return regeneratorRuntime.wrap(function _callee16$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                s = 0;

              case 1:
                if (!true) {
                  _context17.next = 32;
                  break;
                }

                i = this.buf.subarray(this.r + s, this.w).indexOf(delim);

                if (!(i >= 0)) {
                  _context17.next = 8;
                  break;
                }

                i += s;
                slice = this.buf.subarray(this.r, this.r + i + 1);
                this.r += i + 1;
                return _context17.abrupt("break", 32);

              case 8:
                if (!this.eof) {
                  _context17.next = 14;
                  break;
                }

                if (!(this.r === this.w)) {
                  _context17.next = 11;
                  break;
                }

                return _context17.abrupt("return", null);

              case 11:
                slice = this.buf.subarray(this.r, this.w);
                this.r = this.w;
                return _context17.abrupt("break", 32);

              case 14:
                if (!(this.buffered() >= this.buf.byteLength)) {
                  _context17.next = 20;
                  break;
                }

                this.r = this.w;
                oldbuf = this.buf;
                newbuf = this.buf.slice(0);
                this.buf = newbuf;
                throw new BufferFullError(oldbuf);

              case 20:
                s = this.w - this.r;
                _context17.prev = 21;
                _context17.next = 24;
                return this._fill();

              case 24:
                _context17.next = 30;
                break;

              case 26:
                _context17.prev = 26;
                _context17.t0 = _context17["catch"](21);
                _context17.t0.partial = slice;
                throw _context17.t0;

              case 30:
                _context17.next = 1;
                break;

              case 32:
                return _context17.abrupt("return", slice);

              case 33:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee16, this, [[21, 26]]);
      }));

      function readSlice(_x17) {
        return _readSlice.apply(this, arguments);
      }

      return readSlice;
    }()
  }, {
    key: "peek",
    value: function () {
      var _peek = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(n) {
        var avail;
        return regeneratorRuntime.wrap(function _callee17$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!(n < 0)) {
                  _context18.next = 2;
                  break;
                }

                throw Error("negative count");

              case 2:
                avail = this.w - this.r;

              case 3:
                if (!(avail < n && avail < this.buf.byteLength && !this.eof)) {
                  _context18.next = 16;
                  break;
                }

                _context18.prev = 4;
                _context18.next = 7;
                return this._fill();

              case 7:
                _context18.next = 13;
                break;

              case 9:
                _context18.prev = 9;
                _context18.t0 = _context18["catch"](4);
                _context18.t0.partial = this.buf.subarray(this.r, this.w);
                throw _context18.t0;

              case 13:
                avail = this.w - this.r;
                _context18.next = 3;
                break;

              case 16:
                if (!(avail === 0 && this.eof)) {
                  _context18.next = 20;
                  break;
                }

                return _context18.abrupt("return", null);

              case 20:
                if (!(avail < n && this.eof)) {
                  _context18.next = 24;
                  break;
                }

                return _context18.abrupt("return", this.buf.subarray(this.r, this.r + avail));

              case 24:
                if (!(avail < n)) {
                  _context18.next = 26;
                  break;
                }

                throw new BufferFullError(this.buf.subarray(this.r, this.w));

              case 26:
                return _context18.abrupt("return", this.buf.subarray(this.r, this.r + n));

              case 27:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee17, this, [[4, 9]]);
      }));

      function peek(_x18) {
        return _peek.apply(this, arguments);
      }

      return peek;
    }()
  }]);

  return BufReader;
}();

var kSecChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-.~_";
_Symbol$asyncIterator2 = Symbol.asyncIterator;

var WebSocketImpl = /*#__PURE__*/function () {
  function WebSocketImpl(_ref2) {
    var conn1 = _ref2.conn,
        bufReader = _ref2.bufReader,
        bufWriter = _ref2.bufWriter,
        mask = _ref2.mask;

    _classCallCheck(this, WebSocketImpl);

    _defineProperty(this, "sendQueue", []);

    _defineProperty(this, "_isClosed", false);

    this.conn = conn1;
    this.mask = mask;
    this.bufReader = bufReader || new BufReader(conn1);
    this.bufWriter = bufWriter || new BufWriter(conn1);
  }

  _createClass(WebSocketImpl, [{
    key: _Symbol$asyncIterator2,
    value: function value() {
      var _this2 = this;

      return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
        var frames, payloadsLength, frame, concat1, offs, _iterator6, _step5, frame1, code, reason;

        return regeneratorRuntime.wrap(function _callee18$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                frames = [];
                payloadsLength = 0;

              case 2:
                if (_this2._isClosed) {
                  _context19.next = 52;
                  break;
                }

                frame = void 0;
                _context19.prev = 4;
                _context19.next = 7;
                return _awaitAsyncGenerator(readFrame(_this2.bufReader));

              case 7:
                frame = _context19.sent;
                _context19.next = 14;
                break;

              case 10:
                _context19.prev = 10;
                _context19.t0 = _context19["catch"](4);

                _this2.ensureSocketClosed();

                return _context19.abrupt("break", 52);

              case 14:
                unmask(frame.payload, frame.mask);
                _context19.t1 = frame.opcode;
                _context19.next = _context19.t1 === OpCode.TextFrame ? 18 : _context19.t1 === OpCode.BinaryFrame ? 18 : _context19.t1 === OpCode.Continue ? 18 : _context19.t1 === OpCode.Close ? 35 : _context19.t1 === OpCode.Ping ? 42 : _context19.t1 === OpCode.Pong ? 47 : 50;
                break;

              case 18:
                frames.push(frame);
                payloadsLength += frame.payload.length;

                if (!frame.isLastFrame) {
                  _context19.next = 34;
                  break;
                }

                concat1 = new Uint8Array(payloadsLength);
                offs = 0;
                _iterator6 = _createForOfIteratorHelper(frames);

                try {
                  for (_iterator6.s(); !(_step5 = _iterator6.n()).done;) {
                    frame1 = _step5.value;
                    concat1.set(frame1.payload, offs);
                    offs += frame1.payload.length;
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }

                if (!(frames[0].opcode === OpCode.TextFrame)) {
                  _context19.next = 30;
                  break;
                }

                _context19.next = 28;
                return decode(concat1);

              case 28:
                _context19.next = 32;
                break;

              case 30:
                _context19.next = 32;
                return concat1;

              case 32:
                frames = [];
                payloadsLength = 0;

              case 34:
                return _context19.abrupt("break", 50);

              case 35:
                code = frame.payload[0] << 8 | frame.payload[1];
                reason = decode(frame.payload.subarray(2, frame.payload.length));
                _context19.next = 39;
                return _awaitAsyncGenerator(_this2.close(code, reason));

              case 39:
                _context19.next = 41;
                return {
                  code: code,
                  reason: reason
                };

              case 41:
                return _context19.abrupt("return");

              case 42:
                _context19.next = 44;
                return _awaitAsyncGenerator(_this2.enqueue({
                  opcode: OpCode.Pong,
                  payload: frame.payload,
                  isLastFrame: true
                }));

              case 44:
                _context19.next = 46;
                return ["ping", frame.payload];

              case 46:
                return _context19.abrupt("break", 50);

              case 47:
                _context19.next = 49;
                return ["pong", frame.payload];

              case 49:
                return _context19.abrupt("break", 50);

              case 50:
                _context19.next = 2;
                break;

              case 52:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee18, null, [[4, 10]]);
      }))();
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      var _this7 = this;

      var _this$sendQueue = _slicedToArray(this.sendQueue, 1),
          entry = _this$sendQueue[0];

      if (!entry) return;
      if (this._isClosed) return;
      var d = entry.d,
          frame = entry.frame;
      writeFrame(frame, this.bufWriter).then(function () {
        return d.resolve();
      })["catch"](function (e) {
        return d.reject(e);
      })["finally"](function () {
        _this7.sendQueue.shift();

        _this7.dequeue();
      });
    }
  }, {
    key: "enqueue",
    value: function enqueue(frame) {
      if (this._isClosed) {
        throw new Deno.errors.ConnectionReset("Socket has already been closed");
      }

      var d = deferred();
      this.sendQueue.push({
        d: d,
        frame: frame
      });

      if (this.sendQueue.length === 1) {
        this.dequeue();
      }

      return d;
    }
  }, {
    key: "send",
    value: function send(data) {
      var opcode = typeof data === "string" ? OpCode.TextFrame : OpCode.BinaryFrame;
      var payload = typeof data === "string" ? encode(data) : data;
      var isLastFrame = true;
      var frame = {
        isLastFrame: true,
        opcode: opcode,
        payload: payload,
        mask: this.mask
      };
      return this.enqueue(frame);
    }
  }, {
    key: "ping",
    value: function ping() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var payload = typeof data === "string" ? encode(data) : data;
      var frame = {
        isLastFrame: true,
        opcode: OpCode.Ping,
        mask: this.mask,
        payload: payload
      };
      return this.enqueue(frame);
    }
  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
        var code,
            reason,
            header,
            payload,
            reasonBytes,
            _args20 = arguments;
        return regeneratorRuntime.wrap(function _callee19$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                code = _args20.length > 0 && _args20[0] !== undefined ? _args20[0] : 1000;
                reason = _args20.length > 1 ? _args20[1] : undefined;
                _context20.prev = 2;
                header = [code >>> 8, code & 255];

                if (reason) {
                  reasonBytes = encode(reason);
                  payload = new Uint8Array(2 + reasonBytes.byteLength);
                  payload.set(header);
                  payload.set(reasonBytes, 2);
                } else {
                  payload = new Uint8Array(header);
                }

                _context20.next = 7;
                return this.enqueue({
                  isLastFrame: true,
                  opcode: OpCode.Close,
                  mask: this.mask,
                  payload: payload
                });

              case 7:
                _context20.next = 12;
                break;

              case 9:
                _context20.prev = 9;
                _context20.t0 = _context20["catch"](2);
                throw _context20.t0;

              case 12:
                _context20.prev = 12;
                this.ensureSocketClosed();
                return _context20.finish(12);

              case 15:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee19, this, [[2, 9, 12, 15]]);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }()
  }, {
    key: "closeForce",
    value: function closeForce() {
      this.ensureSocketClosed();
    }
  }, {
    key: "ensureSocketClosed",
    value: function ensureSocketClosed() {
      if (this.isClosed) return;

      try {
        this.conn.close();
      } catch (e) {
        console.error(e);
      } finally {
        this._isClosed = true;
        var rest = this.sendQueue;
        this.sendQueue = [];
        rest.forEach(function (e) {
          return e.d.reject(new Deno.errors.ConnectionReset("Socket has already been closed"));
        });
      }
    }
  }, {
    key: "isClosed",
    get: function get() {
      return this._isClosed;
    }
  }]);

  return WebSocketImpl;
}();

function acceptable(req) {
  var upgrade = req.headers.get("upgrade");

  if (!upgrade || upgrade.toLowerCase() !== "websocket") {
    return false;
  }

  var secKey = req.headers.get("sec-websocket-key");
  return req.headers.has("sec-websocket-key") && typeof secKey === "string" && secKey.length > 0;
}

var kGUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
var HEX_CHARS = "0123456789abcdef".split("");
var EXTRA = [-2147483648, 8388608, 32768, 128];
var SHIFT = [24, 16, 8, 0];
var blocks = [];

var _blocks = new WeakMap();

var _block = new WeakMap();

var _start = new WeakMap();

var _bytes = new WeakMap();

var _hBytes = new WeakMap();

var _finalized = new WeakMap();

var _hashed = new WeakMap();

var _h = new WeakMap();

var _h2 = new WeakMap();

var _h3 = new WeakMap();

var _h4 = new WeakMap();

var _h5 = new WeakMap();

var _lastByteIndex = new WeakMap();

var Sha1 = /*#__PURE__*/function () {
  function Sha1() {
    var sharedMemory1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, Sha1);

    _blocks.set(this, {
      writable: true,
      value: void 0
    });

    _block.set(this, {
      writable: true,
      value: void 0
    });

    _start.set(this, {
      writable: true,
      value: void 0
    });

    _bytes.set(this, {
      writable: true,
      value: void 0
    });

    _hBytes.set(this, {
      writable: true,
      value: void 0
    });

    _finalized.set(this, {
      writable: true,
      value: void 0
    });

    _hashed.set(this, {
      writable: true,
      value: void 0
    });

    _h.set(this, {
      writable: true,
      value: 1732584193
    });

    _h2.set(this, {
      writable: true,
      value: 4023233417
    });

    _h3.set(this, {
      writable: true,
      value: 2562383102
    });

    _h4.set(this, {
      writable: true,
      value: 271733878
    });

    _h5.set(this, {
      writable: true,
      value: 3285377520
    });

    _lastByteIndex.set(this, {
      writable: true,
      value: 0
    });

    this.init(sharedMemory1);
  }

  _createClass(Sha1, [{
    key: "init",
    value: function init(sharedMemory) {
      if (sharedMemory) {
        blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;

        _classPrivateFieldSet(this, _blocks, blocks);
      } else {
        _classPrivateFieldSet(this, _blocks, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      }

      _classPrivateFieldSet(this, _h, 1732584193);

      _classPrivateFieldSet(this, _h2, 4023233417);

      _classPrivateFieldSet(this, _h3, 2562383102);

      _classPrivateFieldSet(this, _h4, 271733878);

      _classPrivateFieldSet(this, _h5, 3285377520);

      _classPrivateFieldSet(this, _block, _classPrivateFieldSet(this, _start, _classPrivateFieldSet(this, _bytes, _classPrivateFieldSet(this, _hBytes, 0))));

      _classPrivateFieldSet(this, _finalized, _classPrivateFieldSet(this, _hashed, false));
    }
  }, {
    key: "update",
    value: function update(message) {
      if (_classPrivateFieldGet(this, _finalized)) {
        return this;
      }

      var msg;

      if (message instanceof ArrayBuffer) {
        msg = new Uint8Array(message);
      } else {
        msg = message;
      }

      var index = 0;
      var length = msg.length;

      var blocks1 = _classPrivateFieldGet(this, _blocks);

      while (index < length) {
        var i = void 0;

        if (_classPrivateFieldGet(this, _hashed)) {
          _classPrivateFieldSet(this, _hashed, false);

          blocks1[0] = _classPrivateFieldGet(this, _block);
          blocks1[16] = blocks1[1] = blocks1[2] = blocks1[3] = blocks1[4] = blocks1[5] = blocks1[6] = blocks1[7] = blocks1[8] = blocks1[9] = blocks1[10] = blocks1[11] = blocks1[12] = blocks1[13] = blocks1[14] = blocks1[15] = 0;
        }

        if (typeof msg !== "string") {
          for (i = _classPrivateFieldGet(this, _start); index < length && i < 64; ++index) {
            blocks1[i >> 2] |= msg[index] << SHIFT[i++ & 3];
          }
        } else {
          for (i = _classPrivateFieldGet(this, _start); index < length && i < 64; ++index) {
            var code = msg.charCodeAt(index);

            if (code < 128) {
              blocks1[i >> 2] |= code << SHIFT[i++ & 3];
            } else if (code < 2048) {
              blocks1[i >> 2] |= (192 | code >> 6) << SHIFT[i++ & 3];
              blocks1[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
            } else if (code < 55296 || code >= 57344) {
              blocks1[i >> 2] |= (224 | code >> 12) << SHIFT[i++ & 3];
              blocks1[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
              blocks1[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
            } else {
              code = 65536 + ((code & 1023) << 10 | msg.charCodeAt(++index) & 1023);
              blocks1[i >> 2] |= (240 | code >> 18) << SHIFT[i++ & 3];
              blocks1[i >> 2] |= (128 | code >> 12 & 63) << SHIFT[i++ & 3];
              blocks1[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
              blocks1[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
            }
          }
        }

        _classPrivateFieldSet(this, _lastByteIndex, i);

        _classPrivateFieldSet(this, _bytes, _classPrivateFieldGet(this, _bytes) + (i - _classPrivateFieldGet(this, _start)));

        if (i >= 64) {
          _classPrivateFieldSet(this, _block, blocks1[16]);

          _classPrivateFieldSet(this, _start, i - 64);

          this.hash();

          _classPrivateFieldSet(this, _hashed, true);
        } else {
          _classPrivateFieldSet(this, _start, i);
        }
      }

      if (_classPrivateFieldGet(this, _bytes) > 4294967295) {
        _classPrivateFieldSet(this, _hBytes, _classPrivateFieldGet(this, _hBytes) + (_classPrivateFieldGet(this, _bytes) / 4294967296 >>> 0));

        _classPrivateFieldSet(this, _bytes, _classPrivateFieldGet(this, _bytes) >>> 0);
      }

      return this;
    }
  }, {
    key: "finalize",
    value: function finalize() {
      if (_classPrivateFieldGet(this, _finalized)) {
        return;
      }

      _classPrivateFieldSet(this, _finalized, true);

      var blocks1 = _classPrivateFieldGet(this, _blocks);

      var i = _classPrivateFieldGet(this, _lastByteIndex);

      blocks1[16] = _classPrivateFieldGet(this, _block);
      blocks1[i >> 2] |= EXTRA[i & 3];

      _classPrivateFieldSet(this, _block, blocks1[16]);

      if (i >= 56) {
        if (!_classPrivateFieldGet(this, _hashed)) {
          this.hash();
        }

        blocks1[0] = _classPrivateFieldGet(this, _block);
        blocks1[16] = blocks1[1] = blocks1[2] = blocks1[3] = blocks1[4] = blocks1[5] = blocks1[6] = blocks1[7] = blocks1[8] = blocks1[9] = blocks1[10] = blocks1[11] = blocks1[12] = blocks1[13] = blocks1[14] = blocks1[15] = 0;
      }

      blocks1[14] = _classPrivateFieldGet(this, _hBytes) << 3 | _classPrivateFieldGet(this, _bytes) >>> 29;
      blocks1[15] = _classPrivateFieldGet(this, _bytes) << 3;
      this.hash();
    }
  }, {
    key: "hash",
    value: function hash() {
      var a = _classPrivateFieldGet(this, _h);

      var b = _classPrivateFieldGet(this, _h2);

      var c = _classPrivateFieldGet(this, _h3);

      var d = _classPrivateFieldGet(this, _h4);

      var e = _classPrivateFieldGet(this, _h5);

      var f;
      var j;
      var t;

      var blocks1 = _classPrivateFieldGet(this, _blocks);

      for (j = 16; j < 80; ++j) {
        t = blocks1[j - 3] ^ blocks1[j - 8] ^ blocks1[j - 14] ^ blocks1[j - 16];
        blocks1[j] = t << 1 | t >>> 31;
      }

      for (j = 0; j < 20; j += 5) {
        f = b & c | ~b & d;
        t = a << 5 | a >>> 27;
        e = t + f + e + 1518500249 + blocks1[j] >>> 0;
        b = b << 30 | b >>> 2;
        f = a & b | ~a & c;
        t = e << 5 | e >>> 27;
        d = t + f + d + 1518500249 + blocks1[j + 1] >>> 0;
        a = a << 30 | a >>> 2;
        f = e & a | ~e & b;
        t = d << 5 | d >>> 27;
        c = t + f + c + 1518500249 + blocks1[j + 2] >>> 0;
        e = e << 30 | e >>> 2;
        f = d & e | ~d & a;
        t = c << 5 | c >>> 27;
        b = t + f + b + 1518500249 + blocks1[j + 3] >>> 0;
        d = d << 30 | d >>> 2;
        f = c & d | ~c & e;
        t = b << 5 | b >>> 27;
        a = t + f + a + 1518500249 + blocks1[j + 4] >>> 0;
        c = c << 30 | c >>> 2;
      }

      for (; j < 40; j += 5) {
        f = b ^ c ^ d;
        t = a << 5 | a >>> 27;
        e = t + f + e + 1859775393 + blocks1[j] >>> 0;
        b = b << 30 | b >>> 2;
        f = a ^ b ^ c;
        t = e << 5 | e >>> 27;
        d = t + f + d + 1859775393 + blocks1[j + 1] >>> 0;
        a = a << 30 | a >>> 2;
        f = e ^ a ^ b;
        t = d << 5 | d >>> 27;
        c = t + f + c + 1859775393 + blocks1[j + 2] >>> 0;
        e = e << 30 | e >>> 2;
        f = d ^ e ^ a;
        t = c << 5 | c >>> 27;
        b = t + f + b + 1859775393 + blocks1[j + 3] >>> 0;
        d = d << 30 | d >>> 2;
        f = c ^ d ^ e;
        t = b << 5 | b >>> 27;
        a = t + f + a + 1859775393 + blocks1[j + 4] >>> 0;
        c = c << 30 | c >>> 2;
      }

      for (; j < 60; j += 5) {
        f = b & c | b & d | c & d;
        t = a << 5 | a >>> 27;
        e = t + f + e - 1894007588 + blocks1[j] >>> 0;
        b = b << 30 | b >>> 2;
        f = a & b | a & c | b & c;
        t = e << 5 | e >>> 27;
        d = t + f + d - 1894007588 + blocks1[j + 1] >>> 0;
        a = a << 30 | a >>> 2;
        f = e & a | e & b | a & b;
        t = d << 5 | d >>> 27;
        c = t + f + c - 1894007588 + blocks1[j + 2] >>> 0;
        e = e << 30 | e >>> 2;
        f = d & e | d & a | e & a;
        t = c << 5 | c >>> 27;
        b = t + f + b - 1894007588 + blocks1[j + 3] >>> 0;
        d = d << 30 | d >>> 2;
        f = c & d | c & e | d & e;
        t = b << 5 | b >>> 27;
        a = t + f + a - 1894007588 + blocks1[j + 4] >>> 0;
        c = c << 30 | c >>> 2;
      }

      for (; j < 80; j += 5) {
        f = b ^ c ^ d;
        t = a << 5 | a >>> 27;
        e = t + f + e - 899497514 + blocks1[j] >>> 0;
        b = b << 30 | b >>> 2;
        f = a ^ b ^ c;
        t = e << 5 | e >>> 27;
        d = t + f + d - 899497514 + blocks1[j + 1] >>> 0;
        a = a << 30 | a >>> 2;
        f = e ^ a ^ b;
        t = d << 5 | d >>> 27;
        c = t + f + c - 899497514 + blocks1[j + 2] >>> 0;
        e = e << 30 | e >>> 2;
        f = d ^ e ^ a;
        t = c << 5 | c >>> 27;
        b = t + f + b - 899497514 + blocks1[j + 3] >>> 0;
        d = d << 30 | d >>> 2;
        f = c ^ d ^ e;
        t = b << 5 | b >>> 27;
        a = t + f + a - 899497514 + blocks1[j + 4] >>> 0;
        c = c << 30 | c >>> 2;
      }

      _classPrivateFieldSet(this, _h, _classPrivateFieldGet(this, _h) + a >>> 0);

      _classPrivateFieldSet(this, _h2, _classPrivateFieldGet(this, _h2) + b >>> 0);

      _classPrivateFieldSet(this, _h3, _classPrivateFieldGet(this, _h3) + c >>> 0);

      _classPrivateFieldSet(this, _h4, _classPrivateFieldGet(this, _h4) + d >>> 0);

      _classPrivateFieldSet(this, _h5, _classPrivateFieldGet(this, _h5) + e >>> 0);
    }
  }, {
    key: "hex",
    value: function hex() {
      this.finalize();

      var h0 = _classPrivateFieldGet(this, _h);

      var h1 = _classPrivateFieldGet(this, _h2);

      var h2 = _classPrivateFieldGet(this, _h3);

      var h3 = _classPrivateFieldGet(this, _h4);

      var h4 = _classPrivateFieldGet(this, _h5);

      return HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >> 28 & 15] + HEX_CHARS[h4 >> 24 & 15] + HEX_CHARS[h4 >> 20 & 15] + HEX_CHARS[h4 >> 16 & 15] + HEX_CHARS[h4 >> 12 & 15] + HEX_CHARS[h4 >> 8 & 15] + HEX_CHARS[h4 >> 4 & 15] + HEX_CHARS[h4 & 15];
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.hex();
    }
  }, {
    key: "digest",
    value: function digest() {
      this.finalize();

      var h0 = _classPrivateFieldGet(this, _h);

      var h1 = _classPrivateFieldGet(this, _h2);

      var h2 = _classPrivateFieldGet(this, _h3);

      var h3 = _classPrivateFieldGet(this, _h4);

      var h4 = _classPrivateFieldGet(this, _h5);

      return [h0 >> 24 & 255, h0 >> 16 & 255, h0 >> 8 & 255, h0 & 255, h1 >> 24 & 255, h1 >> 16 & 255, h1 >> 8 & 255, h1 & 255, h2 >> 24 & 255, h2 >> 16 & 255, h2 >> 8 & 255, h2 & 255, h3 >> 24 & 255, h3 >> 16 & 255, h3 >> 8 & 255, h3 & 255, h4 >> 24 & 255, h4 >> 16 & 255, h4 >> 8 & 255, h4 & 255];
    }
  }, {
    key: "array",
    value: function array() {
      return this.digest();
    }
  }, {
    key: "arrayBuffer",
    value: function arrayBuffer() {
      this.finalize();
      var buffer = new ArrayBuffer(20);
      var dataView = new DataView(buffer);
      dataView.setUint32(0, _classPrivateFieldGet(this, _h));
      dataView.setUint32(4, _classPrivateFieldGet(this, _h2));
      dataView.setUint32(8, _classPrivateFieldGet(this, _h3));
      dataView.setUint32(12, _classPrivateFieldGet(this, _h4));
      dataView.setUint32(16, _classPrivateFieldGet(this, _h5));
      return buffer;
    }
  }]);

  return Sha1;
}();

function bytesToUuid(bytes) {
  var bits = _toConsumableArray(bytes).map(function (bit) {
    var s = bit.toString(16);
    return bit < 16 ? "0" + s : s;
  });

  return [].concat(_toConsumableArray(bits.slice(0, 4)), ["-"], _toConsumableArray(bits.slice(4, 6)), ["-"], _toConsumableArray(bits.slice(6, 8)), ["-"], _toConsumableArray(bits.slice(8, 10)), ["-"], _toConsumableArray(bits.slice(10, 16))).join("");
}

function uuidToBytes(uuid) {
  var bytes = [];
  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
    bytes.push(parseInt(hex, 16));
    return "";
  });
  return bytes;
}

function stringToBytes(str1) {
  str1 = unescape(encodeURIComponent(str1));
  var bytes = new Array(str1.length);

  for (var i = 0; i < str1.length; i++) {
    bytes[i] = str1.charCodeAt(i);
  }

  return bytes;
}

function createBuffer(content) {
  var arrayBuffer = new ArrayBuffer(content.length);
  var uint8Array = new Uint8Array(arrayBuffer);

  for (var i = 0; i < content.length; i++) {
    uint8Array[i] = content[i];
  }

  return arrayBuffer;
}

var mod = function () {
  var UUID_RE = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$", "i");

  function validate(id) {
    return UUID_RE.test(id);
  }

  function generate() {
    var rnds = crypto.getRandomValues(new Uint8Array(16));
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    return bytesToUuid(rnds);
  }

  return {
    validate: validate,
    generate: generate
  };
}();

function createSecAccept(nonce) {
  var sha1 = new Sha1();
  sha1.update(nonce + kGUID);
  var bytes = sha1.digest();
  return btoa(String.fromCharCode.apply(String, _toConsumableArray(bytes)));
}

(function (Status1) {
  Status1[Status1["Continue"] = 100] = "Continue";
  Status1[Status1["SwitchingProtocols"] = 101] = "SwitchingProtocols";
  Status1[Status1["Processing"] = 102] = "Processing";
  Status1[Status1["EarlyHints"] = 103] = "EarlyHints";
  Status1[Status1["OK"] = 200] = "OK";
  Status1[Status1["Created"] = 201] = "Created";
  Status1[Status1["Accepted"] = 202] = "Accepted";
  Status1[Status1["NonAuthoritativeInfo"] = 203] = "NonAuthoritativeInfo";
  Status1[Status1["NoContent"] = 204] = "NoContent";
  Status1[Status1["ResetContent"] = 205] = "ResetContent";
  Status1[Status1["PartialContent"] = 206] = "PartialContent";
  Status1[Status1["MultiStatus"] = 207] = "MultiStatus";
  Status1[Status1["AlreadyReported"] = 208] = "AlreadyReported";
  Status1[Status1["IMUsed"] = 226] = "IMUsed";
  Status1[Status1["MultipleChoices"] = 300] = "MultipleChoices";
  Status1[Status1["MovedPermanently"] = 301] = "MovedPermanently";
  Status1[Status1["Found"] = 302] = "Found";
  Status1[Status1["SeeOther"] = 303] = "SeeOther";
  Status1[Status1["NotModified"] = 304] = "NotModified";
  Status1[Status1["UseProxy"] = 305] = "UseProxy";
  Status1[Status1["TemporaryRedirect"] = 307] = "TemporaryRedirect";
  Status1[Status1["PermanentRedirect"] = 308] = "PermanentRedirect";
  Status1[Status1["BadRequest"] = 400] = "BadRequest";
  Status1[Status1["Unauthorized"] = 401] = "Unauthorized";
  Status1[Status1["PaymentRequired"] = 402] = "PaymentRequired";
  Status1[Status1["Forbidden"] = 403] = "Forbidden";
  Status1[Status1["NotFound"] = 404] = "NotFound";
  Status1[Status1["MethodNotAllowed"] = 405] = "MethodNotAllowed";
  Status1[Status1["NotAcceptable"] = 406] = "NotAcceptable";
  Status1[Status1["ProxyAuthRequired"] = 407] = "ProxyAuthRequired";
  Status1[Status1["RequestTimeout"] = 408] = "RequestTimeout";
  Status1[Status1["Conflict"] = 409] = "Conflict";
  Status1[Status1["Gone"] = 410] = "Gone";
  Status1[Status1["LengthRequired"] = 411] = "LengthRequired";
  Status1[Status1["PreconditionFailed"] = 412] = "PreconditionFailed";
  Status1[Status1["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
  Status1[Status1["RequestURITooLong"] = 414] = "RequestURITooLong";
  Status1[Status1["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
  Status1[Status1["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
  Status1[Status1["ExpectationFailed"] = 417] = "ExpectationFailed";
  Status1[Status1["Teapot"] = 418] = "Teapot";
  Status1[Status1["MisdirectedRequest"] = 421] = "MisdirectedRequest";
  Status1[Status1["UnprocessableEntity"] = 422] = "UnprocessableEntity";
  Status1[Status1["Locked"] = 423] = "Locked";
  Status1[Status1["FailedDependency"] = 424] = "FailedDependency";
  Status1[Status1["TooEarly"] = 425] = "TooEarly";
  Status1[Status1["UpgradeRequired"] = 426] = "UpgradeRequired";
  Status1[Status1["PreconditionRequired"] = 428] = "PreconditionRequired";
  Status1[Status1["TooManyRequests"] = 429] = "TooManyRequests";
  Status1[Status1["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
  Status1[Status1["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
  Status1[Status1["InternalServerError"] = 500] = "InternalServerError";
  Status1[Status1["NotImplemented"] = 501] = "NotImplemented";
  Status1[Status1["BadGateway"] = 502] = "BadGateway";
  Status1[Status1["ServiceUnavailable"] = 503] = "ServiceUnavailable";
  Status1[Status1["GatewayTimeout"] = 504] = "GatewayTimeout";
  Status1[Status1["HTTPVersionNotSupported"] = 505] = "HTTPVersionNotSupported";
  Status1[Status1["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
  Status1[Status1["InsufficientStorage"] = 507] = "InsufficientStorage";
  Status1[Status1["LoopDetected"] = 508] = "LoopDetected";
  Status1[Status1["NotExtended"] = 510] = "NotExtended";
  Status1[Status1["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(Status || (Status = {}));

var STATUS_TEXT = new Map([[Status.Continue, "Continue"], [Status.SwitchingProtocols, "Switching Protocols"], [Status.Processing, "Processing"], [Status.EarlyHints, "Early Hints"], [Status.OK, "OK"], [Status.Created, "Created"], [Status.Accepted, "Accepted"], [Status.NonAuthoritativeInfo, "Non-Authoritative Information"], [Status.NoContent, "No Content"], [Status.ResetContent, "Reset Content"], [Status.PartialContent, "Partial Content"], [Status.MultiStatus, "Multi-Status"], [Status.AlreadyReported, "Already Reported"], [Status.IMUsed, "IM Used"], [Status.MultipleChoices, "Multiple Choices"], [Status.MovedPermanently, "Moved Permanently"], [Status.Found, "Found"], [Status.SeeOther, "See Other"], [Status.NotModified, "Not Modified"], [Status.UseProxy, "Use Proxy"], [Status.TemporaryRedirect, "Temporary Redirect"], [Status.PermanentRedirect, "Permanent Redirect"], [Status.BadRequest, "Bad Request"], [Status.Unauthorized, "Unauthorized"], [Status.PaymentRequired, "Payment Required"], [Status.Forbidden, "Forbidden"], [Status.NotFound, "Not Found"], [Status.MethodNotAllowed, "Method Not Allowed"], [Status.NotAcceptable, "Not Acceptable"], [Status.ProxyAuthRequired, "Proxy Authentication Required"], [Status.RequestTimeout, "Request Timeout"], [Status.Conflict, "Conflict"], [Status.Gone, "Gone"], [Status.LengthRequired, "Length Required"], [Status.PreconditionFailed, "Precondition Failed"], [Status.RequestEntityTooLarge, "Request Entity Too Large"], [Status.RequestURITooLong, "Request URI Too Long"], [Status.UnsupportedMediaType, "Unsupported Media Type"], [Status.RequestedRangeNotSatisfiable, "Requested Range Not Satisfiable"], [Status.ExpectationFailed, "Expectation Failed"], [Status.Teapot, "I'm a teapot"], [Status.MisdirectedRequest, "Misdirected Request"], [Status.UnprocessableEntity, "Unprocessable Entity"], [Status.Locked, "Locked"], [Status.FailedDependency, "Failed Dependency"], [Status.TooEarly, "Too Early"], [Status.UpgradeRequired, "Upgrade Required"], [Status.PreconditionRequired, "Precondition Required"], [Status.TooManyRequests, "Too Many Requests"], [Status.RequestHeaderFieldsTooLarge, "Request Header Fields Too Large"], [Status.UnavailableForLegalReasons, "Unavailable For Legal Reasons"], [Status.InternalServerError, "Internal Server Error"], [Status.NotImplemented, "Not Implemented"], [Status.BadGateway, "Bad Gateway"], [Status.ServiceUnavailable, "Service Unavailable"], [Status.GatewayTimeout, "Gateway Timeout"], [Status.HTTPVersionNotSupported, "HTTP Version Not Supported"], [Status.VariantAlsoNegotiates, "Variant Also Negotiates"], [Status.InsufficientStorage, "Insufficient Storage"], [Status.LoopDetected, "Loop Detected"], [Status.NotExtended, "Not Extended"], [Status.NetworkAuthenticationRequired, "Network Authentication Required"]]);

function emptyReader() {
  return {
    read: function read(_) {
      return Promise.resolve(null);
    }
  };
}

function bodyReader(contentLength, r2) {
  var totalRead = 0;
  var finished = false;

  function read(_x19) {
    return _read2.apply(this, arguments);
  }

  function _read2() {
    _read2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(buf) {
      var result, remaining, readBuf;
      return regeneratorRuntime.wrap(function _callee20$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              if (!finished) {
                _context21.next = 2;
                break;
              }

              return _context21.abrupt("return", null);

            case 2:
              remaining = contentLength - totalRead;

              if (!(remaining >= buf.byteLength)) {
                _context21.next = 9;
                break;
              }

              _context21.next = 6;
              return r2.read(buf);

            case 6:
              result = _context21.sent;
              _context21.next = 13;
              break;

            case 9:
              readBuf = buf.subarray(0, remaining);
              _context21.next = 12;
              return r2.read(readBuf);

            case 12:
              result = _context21.sent;

            case 13:
              if (result !== null) {
                totalRead += result;
              }

              finished = totalRead === contentLength;
              return _context21.abrupt("return", result);

            case 16:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee20);
    }));
    return _read2.apply(this, arguments);
  }

  return {
    read: read
  };
}

function writeChunkedBody(w, r2) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, chunk, start, end, endChunk;

  return regeneratorRuntime.async(function writeChunkedBody$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _context.prev = 2;
          _iterator = _asyncIterator(Deno.iter(r2));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(_iterator.next());

        case 6:
          _step = _context.sent;
          _iteratorNormalCompletion = _step.done;
          _context.next = 10;
          return regeneratorRuntime.awrap(_step.value);

        case 10:
          _value = _context.sent;

          if (_iteratorNormalCompletion) {
            _context.next = 28;
            break;
          }

          chunk = _value;

          if (!(chunk.byteLength <= 0)) {
            _context.next = 15;
            break;
          }

          return _context.abrupt("continue", 25);

        case 15:
          start = encoder.encode("".concat(chunk.byteLength.toString(16), "\r\n"));
          end = encoder.encode("\r\n");
          _context.next = 19;
          return regeneratorRuntime.awrap(w.write(start));

        case 19:
          _context.next = 21;
          return regeneratorRuntime.awrap(w.write(chunk));

        case 21:
          _context.next = 23;
          return regeneratorRuntime.awrap(w.write(end));

        case 23:
          _context.next = 25;
          return regeneratorRuntime.awrap(w.flush());

        case 25:
          _iteratorNormalCompletion = true;
          _context.next = 4;
          break;

        case 28:
          _context.next = 34;
          break;

        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](2);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 34:
          _context.prev = 34;
          _context.prev = 35;

          if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
            _context.next = 39;
            break;
          }

          _context.next = 39;
          return regeneratorRuntime.awrap(_iterator["return"]());

        case 39:
          _context.prev = 39;

          if (!_didIteratorError) {
            _context.next = 42;
            break;
          }

          throw _iteratorError;

        case 42:
          return _context.finish(39);

        case 43:
          return _context.finish(34);

        case 44:
          endChunk = encoder.encode("0\r\n\r\n");
          _context.next = 47;
          return regeneratorRuntime.awrap(w.write(endChunk));

        case 47:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 30, 34, 44], [35,, 39, 43]], Promise);
}

function isProhibidedForTrailer(key) {
  var s = new Set(["transfer-encoding", "content-length", "trailer"]);
  return s.has(key.toLowerCase());
}

function chunkedBodyReader(h, r2) {
  var tp = new TextProtoReader(r2);
  var finished = false;
  var chunks = [];

  function read(_x20) {
    return _read3.apply(this, arguments);
  }

  function _read3() {
    _read3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(buf) {
      var chunk, chunkRemaining, readLength, i, line, _line$split, _line$split2, chunkSizeString, chunkSize, eof, restChunk, bufToFill, _eof;

      return regeneratorRuntime.wrap(function _callee21$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              if (!finished) {
                _context22.next = 2;
                break;
              }

              return _context22.abrupt("return", null);

            case 2:
              chunk = chunks[0];

              if (!chunk) {
                _context22.next = 16;
                break;
              }

              chunkRemaining = chunk.data.byteLength - chunk.offset;
              readLength = Math.min(chunkRemaining, buf.byteLength);

              for (i = 0; i < readLength; i++) {
                buf[i] = chunk.data[chunk.offset + i];
              }

              chunk.offset += readLength;

              if (!(chunk.offset === chunk.data.byteLength)) {
                _context22.next = 15;
                break;
              }

              chunks.shift();
              _context22.next = 12;
              return tp.readLine();

            case 12:
              _context22.t0 = _context22.sent;

              if (!(_context22.t0 === null)) {
                _context22.next = 15;
                break;
              }

              throw new Deno.errors.UnexpectedEof();

            case 15:
              return _context22.abrupt("return", readLength);

            case 16:
              _context22.next = 18;
              return tp.readLine();

            case 18:
              line = _context22.sent;

              if (!(line === null)) {
                _context22.next = 21;
                break;
              }

              throw new Deno.errors.UnexpectedEof();

            case 21:
              _line$split = line.split(";"), _line$split2 = _slicedToArray(_line$split, 1), chunkSizeString = _line$split2[0];
              chunkSize = parseInt(chunkSizeString, 16);

              if (!(Number.isNaN(chunkSize) || chunkSize < 0)) {
                _context22.next = 25;
                break;
              }

              throw new Deno.errors.InvalidData("Invalid chunk size");

            case 25:
              if (!(chunkSize > 0)) {
                _context22.next = 58;
                break;
              }

              if (!(chunkSize > buf.byteLength)) {
                _context22.next = 44;
                break;
              }

              _context22.next = 29;
              return r2.readFull(buf);

            case 29:
              eof = _context22.sent;

              if (!(eof === null)) {
                _context22.next = 32;
                break;
              }

              throw new Deno.errors.UnexpectedEof();

            case 32:
              restChunk = new Uint8Array(chunkSize - buf.byteLength);
              _context22.next = 35;
              return r2.readFull(restChunk);

            case 35:
              eof = _context22.sent;

              if (!(eof === null)) {
                _context22.next = 40;
                break;
              }

              throw new Deno.errors.UnexpectedEof();

            case 40:
              chunks.push({
                offset: 0,
                data: restChunk
              });

            case 41:
              return _context22.abrupt("return", buf.byteLength);

            case 44:
              bufToFill = buf.subarray(0, chunkSize);
              _context22.next = 47;
              return r2.readFull(bufToFill);

            case 47:
              _eof = _context22.sent;

              if (!(_eof === null)) {
                _context22.next = 50;
                break;
              }

              throw new Deno.errors.UnexpectedEof();

            case 50:
              _context22.next = 52;
              return tp.readLine();

            case 52:
              _context22.t1 = _context22.sent;

              if (!(_context22.t1 === null)) {
                _context22.next = 55;
                break;
              }

              throw new Deno.errors.UnexpectedEof();

            case 55:
              return _context22.abrupt("return", chunkSize);

            case 56:
              _context22.next = 68;
              break;

            case 58:
              assert(chunkSize === 0);
              _context22.next = 61;
              return r2.readLine();

            case 61:
              _context22.t2 = _context22.sent;

              if (!(_context22.t2 === null)) {
                _context22.next = 64;
                break;
              }

              throw new Deno.errors.UnexpectedEof();

            case 64:
              _context22.next = 66;
              return readTrailers(h, r2);

            case 66:
              finished = true;
              return _context22.abrupt("return", null);

            case 68:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee21);
    }));
    return _read3.apply(this, arguments);
  }

  return {
    read: read
  };
}

function readTrailers(_x21, _x22) {
  return _readTrailers.apply(this, arguments);
}

function _readTrailers() {
  _readTrailers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38(headers, r2) {
    var trailers, trailerNames, tp, result, undeclared, _iterator14, _step12, _step12$value, k, v, missingTrailers;

    return regeneratorRuntime.wrap(function _callee38$(_context39) {
      while (1) {
        switch (_context39.prev = _context39.next) {
          case 0:
            trailers = parseTrailer(headers.get("trailer"));

            if (!(trailers == null)) {
              _context39.next = 3;
              break;
            }

            return _context39.abrupt("return");

          case 3:
            trailerNames = _toConsumableArray(trailers.keys());
            tp = new TextProtoReader(r2);
            _context39.next = 7;
            return tp.readMIMEHeader();

          case 7:
            result = _context39.sent;

            if (!(result == null)) {
              _context39.next = 10;
              break;
            }

            throw new Deno.errors.InvalidData("Missing trailer header.");

          case 10:
            undeclared = _toConsumableArray(result.keys()).filter(function (k) {
              return !trailerNames.includes(k);
            });

            if (!(undeclared.length > 0)) {
              _context39.next = 13;
              break;
            }

            throw new Deno.errors.InvalidData("Undeclared trailers: ".concat(Deno.inspect(undeclared), "."));

          case 13:
            _iterator14 = _createForOfIteratorHelper(result);

            try {
              for (_iterator14.s(); !(_step12 = _iterator14.n()).done;) {
                _step12$value = _slicedToArray(_step12.value, 2), k = _step12$value[0], v = _step12$value[1];
                headers.append(k, v);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }

            missingTrailers = trailerNames.filter(function (k1) {
              return !result.has(k1);
            });

            if (!(missingTrailers.length > 0)) {
              _context39.next = 18;
              break;
            }

            throw new Deno.errors.InvalidData("Missing trailers: ".concat(Deno.inspect(missingTrailers), "."));

          case 18:
            headers["delete"]("trailer");

          case 19:
          case "end":
            return _context39.stop();
        }
      }
    }, _callee38);
  }));
  return _readTrailers.apply(this, arguments);
}

function parseTrailer(field) {
  if (field == null) {
    return undefined;
  }

  var trailerNames = field.split(",").map(function (v) {
    return v.trim().toLowerCase();
  });

  if (trailerNames.length === 0) {
    throw new Deno.errors.InvalidData("Empty trailer header.");
  }

  var prohibited = trailerNames.filter(function (k) {
    return isProhibidedForTrailer(k);
  });

  if (prohibited.length > 0) {
    throw new Deno.errors.InvalidData("Prohibited trailer names: ".concat(Deno.inspect(prohibited), "."));
  }

  return new Headers(trailerNames.map(function (key) {
    return [key, ""];
  }));
}

function writeTrailers(_x23, _x24, _x25) {
  return _writeTrailers.apply(this, arguments);
}

function _writeTrailers() {
  _writeTrailers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39(w, headers, trailers) {
    var trailer, transferEncoding, writer1, trailerNames, prohibitedTrailers, undeclared, _iterator15, _step13, _step13$value, key, value;

    return regeneratorRuntime.wrap(function _callee39$(_context40) {
      while (1) {
        switch (_context40.prev = _context40.next) {
          case 0:
            trailer = headers.get("trailer");

            if (!(trailer === null)) {
              _context40.next = 3;
              break;
            }

            throw new TypeError("Missing trailer header.");

          case 3:
            transferEncoding = headers.get("transfer-encoding");

            if (!(transferEncoding === null || !transferEncoding.match(/^chunked/))) {
              _context40.next = 6;
              break;
            }

            throw new TypeError("Trailers are only allowed for \"transfer-encoding: chunked\", got \"transfer-encoding: ".concat(transferEncoding, "\"."));

          case 6:
            writer1 = BufWriter.create(w);
            trailerNames = trailer.split(",").map(function (s) {
              return s.trim().toLowerCase();
            });
            prohibitedTrailers = trailerNames.filter(function (k) {
              return isProhibidedForTrailer(k);
            });

            if (!(prohibitedTrailers.length > 0)) {
              _context40.next = 11;
              break;
            }

            throw new TypeError("Prohibited trailer names: ".concat(Deno.inspect(prohibitedTrailers), "."));

          case 11:
            undeclared = _toConsumableArray(trailers.keys()).filter(function (k) {
              return !trailerNames.includes(k);
            });

            if (!(undeclared.length > 0)) {
              _context40.next = 14;
              break;
            }

            throw new TypeError("Undeclared trailers: ".concat(Deno.inspect(undeclared), "."));

          case 14:
            _iterator15 = _createForOfIteratorHelper(trailers);
            _context40.prev = 15;

            _iterator15.s();

          case 17:
            if ((_step13 = _iterator15.n()).done) {
              _context40.next = 23;
              break;
            }

            _step13$value = _slicedToArray(_step13.value, 2), key = _step13$value[0], value = _step13$value[1];
            _context40.next = 21;
            return writer1.write(encoder.encode("".concat(key, ": ").concat(value, "\r\n")));

          case 21:
            _context40.next = 17;
            break;

          case 23:
            _context40.next = 28;
            break;

          case 25:
            _context40.prev = 25;
            _context40.t0 = _context40["catch"](15);

            _iterator15.e(_context40.t0);

          case 28:
            _context40.prev = 28;

            _iterator15.f();

            return _context40.finish(28);

          case 31:
            _context40.next = 33;
            return writer1.write(encoder.encode("\r\n"));

          case 33:
            _context40.next = 35;
            return writer1.flush();

          case 35:
          case "end":
            return _context40.stop();
        }
      }
    }, _callee39, null, [[15, 25, 28, 31]]);
  }));
  return _writeTrailers.apply(this, arguments);
}

function writeResponse(_x26, _x27) {
  return _writeResponse.apply(this, arguments);
}

function _writeResponse() {
  _writeResponse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee40(w, r2) {
    var _r2$headers;

    var protoMajor, protoMinor, statusCode, statusText, writer1, out, headers, _iterator16, _step14, _step14$value, key, value, header, n, n1, contentLength, bodyLength, _n2, t;

    return regeneratorRuntime.wrap(function _callee40$(_context41) {
      while (1) {
        switch (_context41.prev = _context41.next) {
          case 0:
            protoMajor = 1;
            protoMinor = 1;
            statusCode = r2.status || 200;
            statusText = STATUS_TEXT.get(statusCode);
            writer1 = BufWriter.create(w);

            if (statusText) {
              _context41.next = 7;
              break;
            }

            throw new Deno.errors.InvalidData("Bad status code");

          case 7:
            if (!r2.body) {
              r2.body = new Uint8Array();
            }

            if (typeof r2.body === "string") {
              r2.body = encoder.encode(r2.body);
            }

            out = "HTTP/".concat(1, ".", 1, " ", statusCode, " ").concat(statusText, "\r\n");
            headers = (_r2$headers = r2.headers) !== null && _r2$headers !== void 0 ? _r2$headers : new Headers();

            if (r2.body && !headers.get("content-length")) {
              if (r2.body instanceof Uint8Array) {
                out += "content-length: ".concat(r2.body.byteLength, "\r\n");
              } else if (!headers.get("transfer-encoding")) {
                out += "transfer-encoding: chunked\r\n";
              }
            }

            _iterator16 = _createForOfIteratorHelper(headers);

            try {
              for (_iterator16.s(); !(_step14 = _iterator16.n()).done;) {
                _step14$value = _slicedToArray(_step14.value, 2), key = _step14$value[0], value = _step14$value[1];
                out += "".concat(key, ": ").concat(value, "\r\n");
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }

            out += "\r\n";
            header = encoder.encode(out);
            _context41.next = 18;
            return writer1.write(header);

          case 18:
            n = _context41.sent;
            assert(n === header.byteLength);

            if (!(r2.body instanceof Uint8Array)) {
              _context41.next = 27;
              break;
            }

            _context41.next = 23;
            return writer1.write(r2.body);

          case 23:
            n1 = _context41.sent;
            assert(n1 === r2.body.byteLength);
            _context41.next = 39;
            break;

          case 27:
            if (!headers.has("content-length")) {
              _context41.next = 37;
              break;
            }

            contentLength = headers.get("content-length");
            assert(contentLength != null);
            bodyLength = parseInt(contentLength);
            _context41.next = 33;
            return Deno.copy(r2.body, writer1);

          case 33:
            _n2 = _context41.sent;
            assert(_n2 === bodyLength);
            _context41.next = 39;
            break;

          case 37:
            _context41.next = 39;
            return writeChunkedBody(writer1, r2.body);

          case 39:
            if (!r2.trailers) {
              _context41.next = 45;
              break;
            }

            _context41.next = 42;
            return r2.trailers();

          case 42:
            t = _context41.sent;
            _context41.next = 45;
            return writeTrailers(writer1, headers, t);

          case 45:
            _context41.next = 47;
            return writer1.flush();

          case 47:
          case "end":
            return _context41.stop();
        }
      }
    }, _callee40);
  }));
  return _writeResponse.apply(this, arguments);
}

var _done = new WeakMap();

var ServerRequest = /*#__PURE__*/function () {
  function ServerRequest() {
    _classCallCheck(this, ServerRequest);

    _done.set(this, {
      writable: true,
      value: deferred()
    });

    _defineProperty(this, "_contentLength", undefined);

    _defineProperty(this, "_body", null);

    _defineProperty(this, "finalized", false);
  }

  _createClass(ServerRequest, [{
    key: "respond",
    value: function () {
      var _respond = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(r) {
        var err;
        return regeneratorRuntime.wrap(function _callee22$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.prev = 0;
                _context23.next = 3;
                return writeResponse(this.w, r);

              case 3:
                _context23.next = 9;
                break;

              case 5:
                _context23.prev = 5;
                _context23.t0 = _context23["catch"](0);

                try {
                  this.conn.close();
                } catch (_unused2) {}

                err = _context23.t0;

              case 9:
                _classPrivateFieldGet(this, _done).resolve(err);

                if (!err) {
                  _context23.next = 12;
                  break;
                }

                throw err;

              case 12:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee22, this, [[0, 5]]);
      }));

      function respond(_x28) {
        return _respond.apply(this, arguments);
      }

      return respond;
    }()
  }, {
    key: "finalize",
    value: function () {
      var _finalize = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
        var body, buf;
        return regeneratorRuntime.wrap(function _callee23$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (!this.finalized) {
                  _context24.next = 2;
                  break;
                }

                return _context24.abrupt("return");

              case 2:
                body = this.body;
                buf = new Uint8Array(1024);

              case 4:
                _context24.next = 6;
                return body.read(buf);

              case 6:
                _context24.t0 = _context24.sent;

                if (!(_context24.t0 !== null)) {
                  _context24.next = 10;
                  break;
                }

                _context24.next = 4;
                break;

              case 10:
                this.finalized = true;

              case 11:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee23, this);
      }));

      function finalize() {
        return _finalize.apply(this, arguments);
      }

      return finalize;
    }()
  }, {
    key: "done",
    get: function get() {
      return _classPrivateFieldGet(this, _done).then(function (e) {
        return e;
      });
    }
  }, {
    key: "contentLength",
    get: function get() {
      if (this._contentLength === undefined) {
        var cl = this.headers.get("content-length");

        if (cl) {
          this._contentLength = parseInt(cl);

          if (Number.isNaN(this._contentLength)) {
            this._contentLength = null;
          }
        } else {
          this._contentLength = null;
        }
      }

      return this._contentLength;
    }
  }, {
    key: "body",
    get: function get() {
      if (!this._body) {
        if (this.contentLength != null) {
          this._body = bodyReader(this.contentLength, this.r);
        } else {
          var transferEncoding = this.headers.get("transfer-encoding");

          if (transferEncoding != null) {
            var parts = transferEncoding.split(",").map(function (e) {
              return e.trim().toLowerCase();
            });
            assert(parts.includes("chunked"), 'transfer-encoding must include "chunked" if content-length is not set');
            this._body = chunkedBodyReader(this.headers, this.r);
          } else {
            this._body = emptyReader();
          }
        }
      }

      return this._body;
    }
  }]);

  return ServerRequest;
}();

function parseHTTPVersion(vers) {
  switch (vers) {
    case "HTTP/1.1":
      return [1, 1];

    case "HTTP/1.0":
      return [1, 0];

    default:
      {
        var Big = 1000000;

        if (!vers.startsWith("HTTP/")) {
          break;
        }

        var dot = vers.indexOf(".");

        if (dot < 0) {
          break;
        }

        var majorStr = vers.substring(vers.indexOf("/") + 1, dot);
        var major = Number(majorStr);

        if (!Number.isInteger(major) || major < 0 || major > 1000000) {
          break;
        }

        var minorStr = vers.substring(dot + 1);
        var minor = Number(minorStr);

        if (!Number.isInteger(minor) || minor < 0 || minor > 1000000) {
          break;
        }

        return [major, minor];
      }
  }

  throw new Error("malformed HTTP version ".concat(vers));
}

function readRequest(_x29, _x30) {
  return _readRequest.apply(this, arguments);
}

function _readRequest() {
  _readRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee41(conn1, bufr) {
    var tp, firstLine, headers, req, _firstLine$split, _firstLine$split2, _parseHTTPVersion, _parseHTTPVersion2;

    return regeneratorRuntime.wrap(function _callee41$(_context42) {
      while (1) {
        switch (_context42.prev = _context42.next) {
          case 0:
            tp = new TextProtoReader(bufr);
            _context42.next = 3;
            return tp.readLine();

          case 3:
            firstLine = _context42.sent;

            if (!(firstLine === null)) {
              _context42.next = 6;
              break;
            }

            return _context42.abrupt("return", null);

          case 6:
            _context42.next = 8;
            return tp.readMIMEHeader();

          case 8:
            headers = _context42.sent;

            if (!(headers === null)) {
              _context42.next = 11;
              break;
            }

            throw new Deno.errors.UnexpectedEof();

          case 11:
            req = new ServerRequest();
            req.conn = conn1;
            req.r = bufr;
            _firstLine$split = firstLine.split(" ", 3);
            _firstLine$split2 = _slicedToArray(_firstLine$split, 3);
            req.method = _firstLine$split2[0];
            req.url = _firstLine$split2[1];
            req.proto = _firstLine$split2[2];
            _parseHTTPVersion = parseHTTPVersion(req.proto);
            _parseHTTPVersion2 = _slicedToArray(_parseHTTPVersion, 2);
            req.protoMinor = _parseHTTPVersion2[0];
            req.protoMajor = _parseHTTPVersion2[1];
            req.headers = headers;
            fixLength(req);
            return _context42.abrupt("return", req);

          case 26:
          case "end":
            return _context42.stop();
        }
      }
    }, _callee41);
  }));
  return _readRequest.apply(this, arguments);
}

_Symbol$asyncIterator3 = Symbol.asyncIterator;

var Server = /*#__PURE__*/function () {
  function Server(listener1) {
    _classCallCheck(this, Server);

    _defineProperty(this, "closing", false);

    _defineProperty(this, "connections", []);

    this.listener = listener1;
  }

  _createClass(Server, [{
    key: "close",
    value: function close() {
      this.closing = true;
      this.listener.close();

      var _iterator7 = _createForOfIteratorHelper(this.connections),
          _step6;

      try {
        for (_iterator7.s(); !(_step6 = _iterator7.n()).done;) {
          var conn1 = _step6.value;

          try {
            conn1.close();
          } catch (e) {
            if (!(e instanceof Deno.errors.BadResource)) {
              throw e;
            }
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "iterateHttpRequests",
    value: function iterateHttpRequests(conn) {
      var _this3 = this;

      return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
        var reader, writer1, request, responseError;
        return regeneratorRuntime.wrap(function _callee24$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                reader = new BufReader(conn);
                writer1 = new BufWriter(conn);

              case 2:
                if (_this3.closing) {
                  _context25.next = 42;
                  break;
                }

                request = void 0;
                _context25.prev = 4;
                _context25.next = 7;
                return _awaitAsyncGenerator(readRequest(conn, reader));

              case 7:
                request = _context25.sent;
                _context25.next = 21;
                break;

              case 10:
                _context25.prev = 10;
                _context25.t0 = _context25["catch"](4);

                if (!(_context25.t0 instanceof Deno.errors.InvalidData || _context25.t0 instanceof Deno.errors.UnexpectedEof)) {
                  _context25.next = 20;
                  break;
                }

                _context25.prev = 13;
                _context25.next = 16;
                return _awaitAsyncGenerator(writeResponse(writer1, {
                  status: 400,
                  body: encode("".concat(_context25.t0.message, "\r\n\r\n"))
                }));

              case 16:
                _context25.next = 20;
                break;

              case 18:
                _context25.prev = 18;
                _context25.t1 = _context25["catch"](13);

              case 20:
                return _context25.abrupt("break", 42);

              case 21:
                if (!(request === null)) {
                  _context25.next = 23;
                  break;
                }

                return _context25.abrupt("break", 42);

              case 23:
                request.w = writer1;
                _context25.next = 26;
                return request;

              case 26:
                _context25.next = 28;
                return _awaitAsyncGenerator(request.done);

              case 28:
                responseError = _context25.sent;

                if (!responseError) {
                  _context25.next = 32;
                  break;
                }

                _this3.untrackConnection(request.conn);

                return _context25.abrupt("return");

              case 32:
                _context25.prev = 32;
                _context25.next = 35;
                return _awaitAsyncGenerator(request.finalize());

              case 35:
                _context25.next = 40;
                break;

              case 37:
                _context25.prev = 37;
                _context25.t2 = _context25["catch"](32);
                return _context25.abrupt("break", 42);

              case 40:
                _context25.next = 2;
                break;

              case 42:
                _this3.untrackConnection(conn);

                try {
                  conn.close();
                } catch (e) {}

              case 44:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee24, null, [[4, 10], [13, 18], [32, 37]]);
      }))();
    }
  }, {
    key: "trackConnection",
    value: function trackConnection(conn) {
      this.connections.push(conn);
    }
  }, {
    key: "untrackConnection",
    value: function untrackConnection(conn) {
      var index = this.connections.indexOf(conn);

      if (index !== -1) {
        this.connections.splice(index, 1);
      }
    }
  }, {
    key: "acceptConnAndIterateHttpRequests",
    value: function acceptConnAndIterateHttpRequests(mux) {
      var _this4 = this;

      return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
        var conn2;
        return regeneratorRuntime.wrap(function _callee25$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!_this4.closing) {
                  _context26.next = 2;
                  break;
                }

                return _context26.abrupt("return");

              case 2:
                _context26.prev = 2;
                _context26.next = 5;
                return _awaitAsyncGenerator(_this4.listener.accept());

              case 5:
                conn2 = _context26.sent;
                _context26.next = 13;
                break;

              case 8:
                _context26.prev = 8;
                _context26.t0 = _context26["catch"](2);

                if (!(_context26.t0 instanceof Deno.errors.BadResource || _context26.t0 instanceof Deno.errors.InvalidData || _context26.t0 instanceof Deno.errors.UnexpectedEof || _context26.t0 instanceof Deno.errors.ConnectionReset)) {
                  _context26.next = 12;
                  break;
                }

                return _context26.abrupt("return", mux.add(_this4.acceptConnAndIterateHttpRequests(mux)));

              case 12:
                throw _context26.t0;

              case 13:
                _this4.trackConnection(conn2);

                mux.add(_this4.acceptConnAndIterateHttpRequests(mux));
                return _context26.delegateYield(_asyncGeneratorDelegate(_asyncIterator(_this4.iterateHttpRequests(conn2)), _awaitAsyncGenerator), "t1", 16);

              case 16:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee25, null, [[2, 8]]);
      }))();
    }
  }, {
    key: _Symbol$asyncIterator3,
    value: function value() {
      var mux = new MuxAsyncIterator();
      mux.add(this.acceptConnAndIterateHttpRequests(mux));
      return mux.iterate();
    }
  }]);

  return Server;
}();

function createSecKey() {
  var key = "";

  for (var i = 0; i < 16; i++) {
    var j = Math.floor(Math.random() * kSecChars.length);
    key += kSecChars[j];
  }

  return btoa(key);
}

var BufWriterSync = /*#__PURE__*/function (_AbstractBufBase2) {
  _inherits(BufWriterSync, _AbstractBufBase2);

  var _super3 = _createSuper(BufWriterSync);

  _createClass(BufWriterSync, null, [{
    key: "create",
    value: function create(writer) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4096;
      return writer instanceof BufWriterSync ? writer : new BufWriterSync(writer, size);
    }
  }]);

  function BufWriterSync(writer2) {
    var _this8;

    var size3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4096;

    _classCallCheck(this, BufWriterSync);

    _this8 = _super3.call(this);
    _this8.writer = writer2;

    if (size3 <= 0) {
      size3 = 4096;
    }

    _this8.buf = new Uint8Array(size3);
    return _this8;
  }

  _createClass(BufWriterSync, [{
    key: "reset",
    value: function reset(w) {
      this.err = null;
      this.usedBufferBytes = 0;
      this.writer = w;
    }
  }, {
    key: "flush",
    value: function flush() {
      if (this.err !== null) throw this.err;
      if (this.usedBufferBytes === 0) return;

      try {
        Deno.writeAllSync(this.writer, this.buf.subarray(0, this.usedBufferBytes));
      } catch (e) {
        this.err = e;
        throw e;
      }

      this.buf = new Uint8Array(this.buf.length);
      this.usedBufferBytes = 0;
    }
  }, {
    key: "writeSync",
    value: function writeSync(data) {
      if (this.err !== null) throw this.err;
      if (data.length === 0) return 0;
      var totalBytesWritten = 0;
      var numBytesWritten = 0;

      while (data.byteLength > this.available()) {
        if (this.buffered() === 0) {
          try {
            numBytesWritten = this.writer.writeSync(data);
          } catch (e) {
            this.err = e;
            throw e;
          }
        } else {
          numBytesWritten = copy(data, this.buf, this.usedBufferBytes);
          this.usedBufferBytes += numBytesWritten;
          this.flush();
        }

        totalBytesWritten += numBytesWritten;
        data = data.subarray(numBytesWritten);
      }

      numBytesWritten = copy(data, this.buf, this.usedBufferBytes);
      this.usedBufferBytes += numBytesWritten;
      totalBytesWritten += numBytesWritten;
      return totalBytesWritten;
    }
  }]);

  return BufWriterSync;
}(AbstractBufBase);

function createLPS(pat) {
  var lps = new Uint8Array(pat.length);
  lps[0] = 0;
  var prefixEnd = 0;
  var i = 1;

  while (i < lps.length) {
    if (pat[i] == pat[prefixEnd]) {
      prefixEnd++;
      lps[i] = prefixEnd;
      i++;
    } else if (prefixEnd === 0) {
      lps[i] = 0;
      i++;
    } else {
      prefixEnd = pat[prefixEnd - 1];
    }
  }

  return lps;
}

function readDelim(_x, _x2) {
  return _readDelim.apply(this, arguments);
}

function _readDelim() {
  _readDelim = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(reader, delim) {
    var delimLen, delimLPS, inputBuffer, inspectArr, inspectIndex, matchIndex, result, sliceRead, sliceToProcess, matchEnd, readyBytes, pendingBytes;
    return regeneratorRuntime.wrap(function _callee26$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            delimLen = delim.length;
            delimLPS = createLPS(delim);
            inputBuffer = new Deno.Buffer();
            inspectArr = new Uint8Array(Math.max(1024, delimLen + 1));
            inspectIndex = 0;
            matchIndex = 0;

          case 6:
            if (!true) {
              _context27.next = 41;
              break;
            }

            _context27.next = 9;
            return _awaitAsyncGenerator(reader.read(inspectArr));

          case 9:
            result = _context27.sent;

            if (!(result === null)) {
              _context27.next = 14;
              break;
            }

            _context27.next = 13;
            return inputBuffer.bytes();

          case 13:
            return _context27.abrupt("return");

          case 14:
            if (!(result < 0)) {
              _context27.next = 16;
              break;
            }

            return _context27.abrupt("return");

          case 16:
            sliceRead = inspectArr.subarray(0, result);
            _context27.next = 19;
            return _awaitAsyncGenerator(Deno.writeAll(inputBuffer, sliceRead));

          case 19:
            sliceToProcess = inputBuffer.bytes();

          case 20:
            if (!(inspectIndex < sliceToProcess.length)) {
              _context27.next = 38;
              break;
            }

            if (!(sliceToProcess[inspectIndex] === delim[matchIndex])) {
              _context27.next = 35;
              break;
            }

            inspectIndex++;
            matchIndex++;

            if (!(matchIndex === delimLen)) {
              _context27.next = 33;
              break;
            }

            matchEnd = inspectIndex - delimLen;
            readyBytes = sliceToProcess.subarray(0, matchEnd);
            pendingBytes = sliceToProcess.slice(inspectIndex);
            _context27.next = 30;
            return readyBytes;

          case 30:
            sliceToProcess = pendingBytes;
            inspectIndex = 0;
            matchIndex = 0;

          case 33:
            _context27.next = 36;
            break;

          case 35:
            if (matchIndex === 0) {
              inspectIndex++;
            } else {
              matchIndex = delimLPS[matchIndex - 1];
            }

          case 36:
            _context27.next = 20;
            break;

          case 38:
            inputBuffer = new Deno.Buffer(sliceToProcess);
            _context27.next = 6;
            break;

          case 41:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee26);
  }));
  return _readDelim.apply(this, arguments);
}

function readStringDelim(_x3, _x4) {
  return _readStringDelim.apply(this, arguments);
}

function _readStringDelim() {
  _readStringDelim = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(reader, delim) {
    var encoder1, decoder1, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2, chunk;

    return regeneratorRuntime.wrap(function _callee27$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            encoder1 = new TextEncoder();
            decoder1 = new TextDecoder();
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _context28.prev = 4;
            _iterator2 = _asyncIterator(readDelim(reader, encoder1.encode(delim)));

          case 6:
            _context28.next = 8;
            return _awaitAsyncGenerator(_iterator2.next());

          case 8:
            _step2 = _context28.sent;
            _iteratorNormalCompletion2 = _step2.done;
            _context28.next = 12;
            return _awaitAsyncGenerator(_step2.value);

          case 12:
            _value2 = _context28.sent;

            if (_iteratorNormalCompletion2) {
              _context28.next = 20;
              break;
            }

            chunk = _value2;
            _context28.next = 17;
            return decoder1.decode(chunk);

          case 17:
            _iteratorNormalCompletion2 = true;
            _context28.next = 6;
            break;

          case 20:
            _context28.next = 26;
            break;

          case 22:
            _context28.prev = 22;
            _context28.t0 = _context28["catch"](4);
            _didIteratorError2 = true;
            _iteratorError2 = _context28.t0;

          case 26:
            _context28.prev = 26;
            _context28.prev = 27;

            if (!(!_iteratorNormalCompletion2 && _iterator2["return"] != null)) {
              _context28.next = 31;
              break;
            }

            _context28.next = 31;
            return _awaitAsyncGenerator(_iterator2["return"]());

          case 31:
            _context28.prev = 31;

            if (!_didIteratorError2) {
              _context28.next = 34;
              break;
            }

            throw _iteratorError2;

          case 34:
            return _context28.finish(31);

          case 35:
            return _context28.finish(26);

          case 36:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee27, null, [[4, 22, 26, 36], [27,, 31, 35]]);
  }));
  return _readStringDelim.apply(this, arguments);
}

var NIL_UUID = "00000000-0000-0000-0000-000000000000";
var noColor = (_globalThis$Deno$noCo = (_globalThis$Deno = globalThis.Deno) === null || _globalThis$Deno === void 0 ? void 0 : _globalThis$Deno.noColor) !== null && _globalThis$Deno$noCo !== void 0 ? _globalThis$Deno$noCo : true;
var enabled = !noColor;

function code1(open, close) {
  return {
    open: "\x1B[".concat(open.join(";"), "m"),
    close: "\x1B[".concat(close, "m"),
    regexp: new RegExp("\\x1b\\[".concat(close, "m"), "g")
  };
}

function run(str1, code1) {
  return enabled ? "".concat(code1.open).concat(str1.replace(code1.regexp, code1.open)).concat(code1.close) : str1;
}

function bold(str1) {
  return run(str1, code1([1], 22));
}

function red(str1) {
  return run(str1, code1([31], 39));
}

function green(str1) {
  return run(str1, code1([32], 39));
}

function white(str1) {
  return run(str1, code1([37], 39));
}

function gray(str1) {
  return brightBlack(str1);
}

function brightBlack(str1) {
  return run(str1, code1([90], 39));
}

function clampAndTruncate(n) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 255;
  var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return Math.trunc(Math.max(Math.min(n, max), min));
}

var ANSI_PATTERN = new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|"), "g");

function stripColor(string) {
  return string.replace(ANSI_PATTERN, "");
}

var DiffType;

(function (DiffType1) {
  DiffType1["removed"] = "removed";
  DiffType1["common"] = "common";
  DiffType1["added"] = "added";
})(DiffType || (DiffType = {}));

function createCommon(A, B, reverse) {
  var common = [];
  if (A.length === 0 || B.length === 0) return [];

  for (var i = 0; i < Math.min(A.length, B.length); i += 1) {
    if (A[reverse ? A.length - i - 1 : i] === B[reverse ? B.length - i - 1 : i]) {
      common.push(A[reverse ? A.length - i - 1 : i]);
    } else {
      return common;
    }
  }

  return common;
}

function diff(A, B) {
  var prefixCommon = createCommon(A, B);
  var suffixCommon = createCommon(A.slice(prefixCommon.length), B.slice(prefixCommon.length), true).reverse();
  A = suffixCommon.length ? A.slice(prefixCommon.length, -suffixCommon.length) : A.slice(prefixCommon.length);
  B = suffixCommon.length ? B.slice(prefixCommon.length, -suffixCommon.length) : B.slice(prefixCommon.length);
  var swapped = B.length > A.length;

  var _ref3 = swapped ? [B, A] : [A, B];

  var _ref4 = _slicedToArray(_ref3, 2);

  A = _ref4[0];
  B = _ref4[1];
  var M = A.length;
  var N = B.length;
  if (!M && !N && !suffixCommon.length && !prefixCommon.length) return [];

  if (!N) {
    return [].concat(_toConsumableArray(prefixCommon.map(function (c) {
      return {
        type: DiffType.common,
        value: c
      };
    })), _toConsumableArray(A.map(function (a) {
      return {
        type: swapped ? DiffType.added : DiffType.removed,
        value: a
      };
    })), _toConsumableArray(suffixCommon.map(function (c) {
      return {
        type: DiffType.common,
        value: c
      };
    })));
  }

  var offset = N;
  var delta = M - N;
  var size4 = M + N + 1;
  var fp = new Array(size4).fill({
    y: -1
  });
  var routes = new Uint32Array((M * N + size4 + 1) * 2);
  var diffTypesPtrOffset = routes.length / 2;
  var ptr = 0;
  var p = -1;

  function backTrace(A1, B1, current, swapped1) {
    var M1 = A1.length;
    var N1 = B1.length;
    var result = [];
    var a = M1 - 1;
    var b = N1 - 1;
    var j = routes[current.id];
    var type = routes[current.id + diffTypesPtrOffset];

    while (true) {
      if (!j && !type) break;
      var prev = j;

      if (type === 1) {
        result.unshift({
          type: swapped1 ? DiffType.removed : DiffType.added,
          value: B1[b]
        });
        b -= 1;
      } else if (type === 3) {
        result.unshift({
          type: swapped1 ? DiffType.added : DiffType.removed,
          value: A1[a]
        });
        a -= 1;
      } else {
        result.unshift({
          type: DiffType.common,
          value: A1[a]
        });
        a -= 1;
        b -= 1;
      }

      j = routes[j];
      type = routes[j + diffTypesPtrOffset];
    }

    return result;
  }

  function createFP(slide, down, k, M1) {
    if (slide && slide.y === -1 && down && down.y === -1) {
      return {
        y: 0,
        id: 0
      };
    }

    if (down && down.y === -1 || k === M1 || (slide && slide.y) > (down && down.y) + 1) {
      var prev = slide.id;
      ptr++;
      routes[ptr] = prev;
      routes[ptr + diffTypesPtrOffset] = 3;
      return {
        y: slide.y,
        id: ptr
      };
    } else {
      var _prev = down.id;
      ptr++;
      routes[ptr] = _prev;
      routes[ptr + diffTypesPtrOffset] = 1;
      return {
        y: down.y + 1,
        id: ptr
      };
    }
  }

  function snake(k, slide, down, _offset, A1, B1) {
    var M1 = A1.length;
    var N1 = B1.length;
    if (k < -N1 || M1 < k) return {
      y: -1,
      id: -1
    };
    var fp1 = createFP(slide, down, k, M1);

    while (fp1.y + k < M1 && fp1.y < N1 && A1[fp1.y + k] === B1[fp1.y]) {
      var prev = fp1.id;
      ptr++;
      fp1.id = ptr;
      fp1.y += 1;
      routes[ptr] = prev;
      routes[ptr + diffTypesPtrOffset] = 2;
    }

    return fp1;
  }

  while (fp[delta + N].y < N) {
    p = p + 1;

    for (var k = -p; k < delta; ++k) {
      fp[k + N] = snake(k, fp[k - 1 + N], fp[k + 1 + N], N, A, B);
    }

    for (var k1 = delta + p; k1 > delta; --k1) {
      fp[k1 + N] = snake(k1, fp[k1 - 1 + N], fp[k1 + 1 + N], N, A, B);
    }

    fp[delta + N] = snake(delta, fp[delta - 1 + N], fp[delta + 1 + N], N, A, B);
  }

  return [].concat(_toConsumableArray(prefixCommon.map(function (c) {
    return {
      type: DiffType.common,
      value: c
    };
  })), _toConsumableArray(backTrace(A, B, fp[delta + N], swapped)), _toConsumableArray(suffixCommon.map(function (c) {
    return {
      type: DiffType.common,
      value: c
    };
  })));
}

var CAN_NOT_DISPLAY = "[Cannot display]";

function _format(v) {
  return globalThis.Deno ? Deno.inspect(v, {
    depth: Infinity,
    sorted: true,
    trailingComma: true,
    compact: false,
    iterableLimit: Infinity
  }) : "\"".concat(String(v).replace(/(?=["\\])/g, "\\"), "\"");
}

function createColor(diffType) {
  switch (diffType) {
    case DiffType.added:
      return function (s) {
        return green(bold(s));
      };

    case DiffType.removed:
      return function (s) {
        return red(bold(s));
      };

    default:
      return white;
  }
}

function createSign(diffType) {
  switch (diffType) {
    case DiffType.added:
      return "+   ";

    case DiffType.removed:
      return "-   ";

    default:
      return "    ";
  }
}

function buildMessage(diffResult) {
  var messages = [];
  messages.push("");
  messages.push("");
  messages.push("    ".concat(gray(bold("[Diff]")), " ").concat(red(bold("Actual")), " / ").concat(green(bold("Expected"))));
  messages.push("");
  messages.push("");
  diffResult.forEach(function (result) {
    var c = createColor(result.type);
    messages.push(c("".concat(createSign(result.type)).concat(result.value)));
  });
  messages.push("");
  return messages;
}

function isKeyedCollection(x) {
  return [Symbol.iterator, "size"].every(function (k) {
    return k in x;
  });
}

function equal(c, d) {
  var seen = new Map();
  return function compare(a, b) {
    if (a && b && (a instanceof RegExp && b instanceof RegExp || a instanceof URL && b instanceof URL)) {
      return String(a) === String(b);
    }

    if (a instanceof Date && b instanceof Date) {
      var aTime = a.getTime();
      var bTime = b.getTime();

      if (Number.isNaN(aTime) && Number.isNaN(bTime)) {
        return true;
      }

      return a.getTime() === b.getTime();
    }

    if (Object.is(a, b)) {
      return true;
    }

    if (a && _typeof(a) === "object" && b && _typeof(b) === "object") {
      if (seen.get(a) === b) {
        return true;
      }

      if (Object.keys(a || {}).length !== Object.keys(b || {}).length) {
        return false;
      }

      if (isKeyedCollection(a) && isKeyedCollection(b)) {
        if (a.size !== b.size) {
          return false;
        }

        var unmatchedEntries = a.size;

        var _iterator8 = _createForOfIteratorHelper(a.entries()),
            _step7;

        try {
          for (_iterator8.s(); !(_step7 = _iterator8.n()).done;) {
            var _step7$value = _slicedToArray(_step7.value, 2),
                aKey = _step7$value[0],
                aValue = _step7$value[1];

            var _iterator9 = _createForOfIteratorHelper(b.entries()),
                _step8;

            try {
              for (_iterator9.s(); !(_step8 = _iterator9.n()).done;) {
                var _step8$value = _slicedToArray(_step8.value, 2),
                    bKey = _step8$value[0],
                    bValue = _step8$value[1];

                if (aKey === aValue && bKey === bValue && compare(aKey, bKey) || compare(aKey, bKey) && compare(aValue, bValue)) {
                  unmatchedEntries--;
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        return unmatchedEntries === 0;
      }

      var merged = _objectSpread(_objectSpread({}, a), b);

      for (var key in merged) {
        if (!compare(a && a[key], b && b[key])) {
          return false;
        }
      }

      seen.set(a, b);
      return true;
    }

    return false;
  }(c, d);
}

function assert1(expr) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  if (!expr) {
    throw new AssertionError(msg);
  }
}

function assertEquals(actual, expected, msg) {
  if (equal(actual, expected)) {
    return;
  }

  var message = "";

  var actualString = _format(actual);

  var expectedString = _format(expected);

  try {
    var diffResult = diff(actualString.split("\n"), expectedString.split("\n"));
    var diffMsg = buildMessage(diffResult).join("\n");
    message = "Values are not equal:\n".concat(diffMsg);
  } catch (e) {
    message = "\n".concat(red(CAN_NOT_DISPLAY), " + \n\n");
  }

  if (msg) {
    message = msg;
  }

  throw new AssertionError(message);
}

function fail(msg) {
  assert1(false, "Failed assertion".concat(msg ? ": ".concat(msg) : "."));
}

function slowCases(enc) {
  switch (enc.length) {
    case 4:
      if (enc === "UTF8") return "utf8";
      if (enc === "ucs2" || enc === "UCS2") return "utf16le";
      enc = "".concat(enc).toLowerCase();
      if (enc === "utf8") return "utf8";
      if (enc === "ucs2") return "utf16le";
      break;

    case 3:
      if (enc === "hex" || enc === "HEX" || "".concat(enc).toLowerCase() === "hex") {
        return "hex";
      }

      break;

    case 5:
      if (enc === "ascii") return "ascii";
      if (enc === "ucs-2") return "utf16le";
      if (enc === "UTF-8") return "utf8";
      if (enc === "ASCII") return "ascii";
      if (enc === "UCS-2") return "utf16le";
      enc = "".concat(enc).toLowerCase();
      if (enc === "utf-8") return "utf8";
      if (enc === "ascii") return "ascii";
      if (enc === "ucs-2") return "utf16le";
      break;

    case 6:
      if (enc === "base64") return "base64";
      if (enc === "latin1" || enc === "binary") return "latin1";
      if (enc === "BASE64") return "base64";
      if (enc === "LATIN1" || enc === "BINARY") return "latin1";
      enc = "".concat(enc).toLowerCase();
      if (enc === "base64") return "base64";
      if (enc === "latin1" || enc === "binary") return "latin1";
      break;

    case 7:
      if (enc === "utf16le" || enc === "UTF16LE" || "".concat(enc).toLowerCase() === "utf16le") {
        return "utf16le";
      }

      break;

    case 8:
      if (enc === "utf-16le" || enc === "UTF-16LE" || "".concat(enc).toLowerCase() === "utf-16le") {
        return "utf16le";
      }

      break;

    default:
      if (enc === "") return "utf8";
  }
}

function validateIntegerRange(value, name) {
  var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -2147483648;
  var max = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2147483647;

  if (!Number.isInteger(value)) {
    throw new Error("".concat(name, " must be 'an integer' but was ").concat(value));
  }

  if (value < min || value > max) {
    throw new Error("".concat(name, " must be >= ").concat(min, " && <= ").concat(max, ". Value was ").concat(value));
  }
}

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

var defaultMaxListeners = 10;

var EventEmitter = /*#__PURE__*/function () {
  _createClass(EventEmitter, null, [{
    key: "defaultMaxListeners",
    get: function get() {
      return defaultMaxListeners;
    },
    set: function set(value) {
      defaultMaxListeners = value;
    }
  }]);

  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this._events = new Map();
  }

  _createClass(EventEmitter, [{
    key: "_addListener",
    value: function _addListener(eventName, listener, prepend) {
      this.emit("newListener", eventName, listener);

      if (this._events.has(eventName)) {
        var listeners = this._events.get(eventName);

        if (prepend) {
          listeners.unshift(listener);
        } else {
          listeners.push(listener);
        }
      } else {
        this._events.set(eventName, [listener]);
      }

      var max = this.getMaxListeners();

      if (max > 0 && this.listenerCount(eventName) > max) {
        var warning = new Error("Possible EventEmitter memory leak detected.\n         ".concat(this.listenerCount(eventName), " ").concat(eventName.toString(), " listeners.\n         Use emitter.setMaxListeners() to increase limit"));
        warning.name = "MaxListenersExceededWarning";
        console.warn(warning);
      }

      return this;
    }
  }, {
    key: "addListener",
    value: function addListener(eventName, listener) {
      return this._addListener(eventName, listener, false);
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      if (this._events.has(eventName)) {
        if (eventName === "error" && this._events.get(EventEmitter.errorMonitor)) {
          this.emit.apply(this, [EventEmitter.errorMonitor].concat(args));
        }

        var listeners = this._events.get(eventName).slice();

        var _iterator10 = _createForOfIteratorHelper(listeners),
            _step9;

        try {
          for (_iterator10.s(); !(_step9 = _iterator10.n()).done;) {
            var listener2 = _step9.value;

            try {
              listener2.apply(this, args);
            } catch (err) {
              this.emit("error", err);
            }
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }

        return true;
      } else if (eventName === "error") {
        if (this._events.get(EventEmitter.errorMonitor)) {
          this.emit.apply(this, [EventEmitter.errorMonitor].concat(args));
        }

        var errMsg = args.length > 0 ? args[0] : Error("Unhandled error.");
        throw errMsg;
      }

      return false;
    }
  }, {
    key: "eventNames",
    value: function eventNames() {
      return Array.from(this._events.keys());
    }
  }, {
    key: "getMaxListeners",
    value: function getMaxListeners() {
      return this.maxListeners || EventEmitter.defaultMaxListeners;
    }
  }, {
    key: "listenerCount",
    value: function listenerCount(eventName) {
      if (this._events.has(eventName)) {
        return this._events.get(eventName).length;
      } else {
        return 0;
      }
    }
  }, {
    key: "_listeners",
    value: function _listeners(target, eventName, unwrap) {
      if (!target._events.has(eventName)) {
        return [];
      }

      var eventListeners = target._events.get(eventName);

      return unwrap ? this.unwrapListeners(eventListeners) : eventListeners.slice(0);
    }
  }, {
    key: "unwrapListeners",
    value: function unwrapListeners(arr) {
      var unwrappedListeners = new Array(arr.length);

      for (var i = 0; i < arr.length; i++) {
        unwrappedListeners[i] = arr[i]["listener"] || arr[i];
      }

      return unwrappedListeners;
    }
  }, {
    key: "listeners",
    value: function listeners(eventName) {
      return this._listeners(this, eventName, true);
    }
  }, {
    key: "rawListeners",
    value: function rawListeners(eventName) {
      return this._listeners(this, eventName, false);
    }
  }, {
    key: "off",
    value: function off(eventName, listener) {
      return this.removeListener(eventName, listener);
    }
  }, {
    key: "on",
    value: function on(eventName, listener) {
      return this._addListener(eventName, listener, false);
    }
  }, {
    key: "once",
    value: function once(eventName, listener) {
      var wrapped = this.onceWrap(eventName, listener);
      this.on(eventName, wrapped);
      return this;
    }
  }, {
    key: "onceWrap",
    value: function onceWrap(eventName, listener) {
      var wrapper = function wrapper() {
        this.context.removeListener(this.eventName, this.rawListener);

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        this.listener.apply(this.context, args);
      };

      var wrapperContext = {
        eventName: eventName,
        listener: listener,
        rawListener: wrapper,
        context: this
      };
      var wrapped = wrapper.bind(wrapperContext);
      wrapperContext.rawListener = wrapped;
      wrapped.listener = listener;
      return wrapped;
    }
  }, {
    key: "prependListener",
    value: function prependListener(eventName, listener) {
      return this._addListener(eventName, listener, true);
    }
  }, {
    key: "prependOnceListener",
    value: function prependOnceListener(eventName, listener) {
      var wrapped = this.onceWrap(eventName, listener);
      this.prependListener(eventName, wrapped);
      return this;
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(eventName) {
      var _this9 = this;

      if (this._events === undefined) {
        return this;
      }

      if (eventName) {
        if (this._events.has(eventName)) {
          var listeners = this._events.get(eventName).slice();

          this._events["delete"](eventName);

          var _iterator11 = _createForOfIteratorHelper(listeners),
              _step10;

          try {
            for (_iterator11.s(); !(_step10 = _iterator11.n()).done;) {
              var listener2 = _step10.value;
              this.emit("removeListener", eventName, listener2);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        }
      } else {
        var eventList = this.eventNames();
        eventList.map(function (value) {
          _this9.removeAllListeners(value);
        });
      }

      return this;
    }
  }, {
    key: "removeListener",
    value: function removeListener(eventName, listener) {
      if (this._events.has(eventName)) {
        var arr = this._events.get(eventName);

        assert(arr);
        var listenerIndex = -1;

        for (var i = arr.length - 1; i >= 0; i--) {
          if (arr[i] == listener || arr[i] && arr[i]["listener"] == listener) {
            listenerIndex = i;
            break;
          }
        }

        if (listenerIndex >= 0) {
          arr.splice(listenerIndex, 1);
          this.emit("removeListener", eventName, listener);

          if (arr.length === 0) {
            this._events["delete"](eventName);
          }
        }
      }

      return this;
    }
  }, {
    key: "setMaxListeners",
    value: function setMaxListeners(n) {
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
  }], [{
    key: "once",
    value: function once(emitter, name) {
      return new Promise(function (resolve, reject) {
        if (emitter instanceof EventTarget) {
          emitter.addEventListener(name, function () {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            resolve(args);
          }, {
            once: true,
            passive: false,
            capture: false
          });
          return;
        } else if (emitter instanceof EventEmitter) {
          var eventListener = function eventListener() {
            if (errorListener !== undefined) {
              emitter.removeListener("error", errorListener);
            }

            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            resolve(args);
          };

          var errorListener;

          if (name !== "error") {
            errorListener = function errorListener(err) {
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
  }, {
    key: "on",
    value: function on(emitter, event) {
      var unconsumedEventValues = [];
      var unconsumedPromises = [];
      var error = null;
      var finished = false;

      var iterator = _defineProperty({
        next: function next() {
          var value = unconsumedEventValues.shift();

          if (value) {
            return Promise.resolve(createIterResult(value, false));
          }

          if (error) {
            var p = Promise.reject(error);
            error = null;
            return p;
          }

          if (finished) {
            return Promise.resolve(createIterResult(undefined, true));
          }

          return new Promise(function (resolve, reject) {
            unconsumedPromises.push({
              resolve: resolve,
              reject: reject
            });
          });
        },
        "return": function _return() {
          emitter.removeListener(event, eventHandler);
          emitter.removeListener("error", errorHandler);
          finished = true;

          var _iterator12 = _createForOfIteratorHelper(unconsumedPromises),
              _step11;

          try {
            for (_iterator12.s(); !(_step11 = _iterator12.n()).done;) {
              var promise = _step11.value;
              promise.resolve(createIterResult(undefined, true));
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }

          return Promise.resolve(createIterResult(undefined, true));
        },
        "throw": function _throw(err) {
          error = err;
          emitter.removeListener(event, eventHandler);
          emitter.removeListener("error", errorHandler);
        }
      }, Symbol.asyncIterator, function () {
        return this;
      });

      emitter.on(event, eventHandler);
      emitter.on("error", errorHandler);
      return iterator;

      function eventHandler() {
        var promise = unconsumedPromises.shift();

        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }

        if (promise) {
          promise.resolve(createIterResult(args, false));
        } else {
          unconsumedEventValues.push(args);
        }
      }

      function errorHandler(err) {
        finished = true;
        var toError = unconsumedPromises.shift();

        if (toError) {
          toError.reject(err);
        } else {
          error = err;
        }

        iterator["return"]();
      }
    }
  }]);

  return EventEmitter;
}();

_defineProperty(EventEmitter, "captureRejectionSymbol", Symbol["for"]("nodejs.rejection"));

_defineProperty(EventEmitter, "errorMonitor", Symbol("events.errorMonitor"));

var Dropper = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Dropper, _EventEmitter);

  var _super4 = _createSuper(Dropper);

  function Dropper(arg, options) {
    var _this10;

    _classCallCheck(this, Dropper);

    _this10 = _super4.call(this);

    _defineProperty(_assertThisInitialized(_this10), "uuid", mod.generate());

    _defineProperty(_assertThisInitialized(_this10), "_socket", null);

    _defineProperty(_assertThisInitialized(_this10), "uri", null);

    _this10.options = options;
    _this10.options = Object.assign({
      endpoint: '/dropper'
    }, _this10.options);
    _this10.uri = _this10.uri = arg ? arg + _this10.options.endpoint : 'ws://localhost:8080' + _this10.options.endpoint;
    connectWebSocket(_this10.uri).then(function (socket) {
      _this10._socket = socket;

      _this10.init(_this10._socket);
    })["catch"](function (err) {
      console.log(err);

      _this10.emit("error", err);
    });
    return _this10;
  }

  _createClass(Dropper, [{
    key: "send",
    value: function () {
      var _send = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(evt, data) {
        var data_push;
        return regeneratorRuntime.wrap(function _callee28$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                data_push = data ? JSON.stringify({
                  evt: evt,
                  data: data
                }) : JSON.stringify(evt);
                if (this._socket !== null) this._socket.send(data_push);

              case 2:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee28, this);
      }));

      function send(_x31, _x32) {
        return _send.apply(this, arguments);
      }

      return send;
    }()
  }, {
    key: "broadcast",
    value: function () {
      var _broadcast = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(evt, data) {
        var data_push, _broadcast2;

        return regeneratorRuntime.wrap(function _callee29$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (!(this._socket !== null)) {
                  _context30.next = 6;
                  break;
                }

                data_push = data ? {
                  evt: evt,
                  data: data,
                  client: this.uuid
                } : {
                  evt: 'message',
                  data: evt,
                  client: this.uuid
                };
                _broadcast2 = JSON.stringify({
                  evt: '_broadcast_',
                  data: data_push
                });

                if (!(this._socket !== null)) {
                  _context30.next = 6;
                  break;
                }

                _context30.next = 6;
                return this._socket.send(_broadcast2);

              case 6:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee29, this);
      }));

      function broadcast(_x33, _x34) {
        return _broadcast.apply(this, arguments);
      }

      return broadcast;
    }()
  }, {
    key: "close",
    value: function () {
      var _close2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
        var code,
            reason,
            _args31 = arguments;
        return regeneratorRuntime.wrap(function _callee30$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                code = _args31.length > 0 && _args31[0] !== undefined ? _args31[0] : 1005;
                reason = _args31.length > 1 && _args31[1] !== undefined ? _args31[1] : "";

                if (!(this._socket !== null)) {
                  _context31.next = 6;
                  break;
                }

                _context31.next = 5;
                return this._socket.close(code, reason);

              case 5:
                return _context31.abrupt("return", _context31.sent);

              case 6:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee30, this);
      }));

      function close() {
        return _close2.apply(this, arguments);
      }

      return close;
    }()
  }, {
    key: "ping",
    value: function () {
      var _ping = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(data) {
        var _this$_socket;

        return regeneratorRuntime.wrap(function _callee31$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                this === null || this === void 0 ? void 0 : (_this$_socket = this._socket) === null || _this$_socket === void 0 ? void 0 : _this$_socket.send(JSON.stringify({
                  evt: '_ping_',
                  data: data
                }));

              case 1:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee31, this);
      }));

      function ping(_x35) {
        return _ping.apply(this, arguments);
      }

      return ping;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(socket) {
        var _this11 = this;

        var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _value3, _value4, ev, _this$_socket2, _JSON$parse, evt, data, client;

        return regeneratorRuntime.wrap(function _callee32$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                this.emit("open");

                socket.onclose = function (ev) {
                  var code2 = ev.code,
                      reason = ev.reason;

                  _this11.emit("close", code2, reason);
                };

                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _context33.prev = 4;
                _iterator3 = _asyncIterator(websocketEvents(socket));

              case 6:
                _context33.next = 8;
                return _iterator3.next();

              case 8:
                _step3 = _context33.sent;
                _iteratorNormalCompletion3 = _step3.done;
                _context33.next = 12;
                return _step3.value;

              case 12:
                _value3 = _context33.sent;

                if (_iteratorNormalCompletion3) {
                  _context33.next = 27;
                  break;
                }

                _value4 = _value3, ev = _value4.data;
                _context33.prev = 15;

                if (hasJsonStructure(ev)) {
                  _JSON$parse = JSON.parse(ev), evt = _JSON$parse.evt, data = _JSON$parse.data, client = _JSON$parse.client;
                  if (evt == '_ping_') (_this$_socket2 = this._socket) === null || _this$_socket2 === void 0 ? void 0 : _this$_socket2.send(JSON.stringify({
                    evt: '_pong_',
                    data: data
                  }));
                  if (evt !== '_ping_' && evt !== '_pong_') this.emit("_all_", ev);
                  if (client !== this.uuid) this.emit(evt, data);
                } else {
                  this.emit("_all_", ev);
                  this.emit('message', ev);
                }

                _context33.next = 24;
                break;

              case 19:
                _context33.prev = 19;
                _context33.t0 = _context33["catch"](15);
                this.emit("error", _context33.t0);
                _context33.next = 24;
                return this.close(1000);

              case 24:
                _iteratorNormalCompletion3 = true;
                _context33.next = 6;
                break;

              case 27:
                _context33.next = 33;
                break;

              case 29:
                _context33.prev = 29;
                _context33.t1 = _context33["catch"](4);
                _didIteratorError3 = true;
                _iteratorError3 = _context33.t1;

              case 33:
                _context33.prev = 33;
                _context33.prev = 34;

                if (!(!_iteratorNormalCompletion3 && _iterator3["return"] != null)) {
                  _context33.next = 38;
                  break;
                }

                _context33.next = 38;
                return _iterator3["return"]();

              case 38:
                _context33.prev = 38;

                if (!_didIteratorError3) {
                  _context33.next = 41;
                  break;
                }

                throw _iteratorError3;

              case 41:
                return _context33.finish(38);

              case 42:
                return _context33.finish(33);

              case 43:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee32, this, [[4, 29, 33, 43], [15, 19], [34,, 38, 42]]);
      }));

      function init(_x36) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }]);

  return Dropper;
}(EventEmitter);

exports["default"] = Dropper;
;

function fixLength(req) {
  var contentLength = req.headers.get("Content-Length");

  if (contentLength) {
    var arrClen = contentLength.split(",");

    if (arrClen.length > 1) {
      var distinct = _toConsumableArray(new Set(arrClen.map(function (e) {
        return e.trim();
      })));

      if (distinct.length > 1) {
        throw Error("cannot contain multiple Content-Length headers");
      } else {
        req.headers.set("Content-Length", distinct[0]);
      }
    }

    var c = req.headers.get("Content-Length");

    if (req.method === "HEAD" && c && c !== "0") {
      throw Error("http: method cannot contain a Content-Length");
    }

    if (c && req.headers.has("transfer-encoding")) {
      throw new Error("http: Transfer-Encoding and Content-Length cannot be send together");
    }
  }
}

function _parseAddrFromStr(addr) {
  var url;

  try {
    var host = addr.startsWith(":") ? "0.0.0.0".concat(addr) : addr;
    url = new URL("http://".concat(host));
  } catch (_unused3) {
    throw new TypeError("Invalid address.");
  }

  if (url.username || url.password || url.pathname != "/" || url.search || url.hash) {
    throw new TypeError("Invalid address.");
  }

  return {
    hostname: url.hostname,
    port: url.port === "" ? 80 : Number(url.port)
  };
}

function serve(addr) {
  if (typeof addr === "string") {
    addr = _parseAddrFromStr(addr);
  }

  var listener2 = Deno.listen(addr);
  return new Server(listener2);
}

function serveTLS(options1) {
  var tlsOptions = _objectSpread(_objectSpread({}, options1), {}, {
    transport: "tcp"
  });

  var listener2 = Deno.listenTls(tlsOptions);
  return new Server(listener2);
}