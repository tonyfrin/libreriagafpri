"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiSites = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _helpers = require("../../../helpers");
var _constants = require("../../../constants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useGafpriApiSites = exports.useGafpriApiSites = function useGafpriApiSites(_ref) {
  var attributes = _ref.attributes,
    token = _ref.token;
  var add = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var payload, updatedPayload, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!token) {
              _context.next = 7;
              break;
            }
            payload = {
              name: attributes.states.name,
              documentIndex: attributes.states.documentIndex,
              documentNumber: attributes.states.documentNumber,
              address1: attributes.states.address1,
              city: attributes.states.city,
              state: attributes.states.state,
              country: attributes.states.country,
              email: attributes.states.email,
              phone: attributes.states.phone,
              currenciesId: attributes.states.currenciesId,
              currencyLocation: attributes.states.currencyLocation,
              thousandsSeparator: attributes.states.thousandsSeparator,
              decimalSeparator: attributes.states.decimalSeparator,
              decimalNumbers: attributes.states.decimalNumbers,
              taxes: attributes.states.taxes,
              host: attributes.states.host,
              status: attributes.states.status
            };
            updatedPayload = _objectSpread(_objectSpread(_objectSpread({}, payload), attributes.states.postCode ? {
              postCode: attributes.states.postCode
            } : {}), attributes.states.address2 ? {
              address2: attributes.states.address2
            } : {});
            _context.next = 5;
            return (0, _helpers.gafpriFetch)({
              initMethod: 'POST',
              initRoute: _constants.SITES_ROUTE,
              initCredentials: updatedPayload,
              initToken: {
                token: token
              }
            });
          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);
          case 7:
            return _context.abrupt("return", null);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function add() {
      return _ref2.apply(this, arguments);
    };
  }();
  var update = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var payload, updatedPayload, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!token) {
              _context2.next = 7;
              break;
            }
            payload = {
              name: attributes.states.name,
              documentIndex: attributes.states.documentIndex,
              documentNumber: attributes.states.documentNumber,
              address1: attributes.states.address1,
              city: attributes.states.city,
              state: attributes.states.state,
              country: attributes.states.country,
              email: attributes.states.email,
              phone: attributes.states.phone,
              currenciesId: attributes.states.currenciesId,
              currencyLocation: attributes.states.currencyLocation,
              thousandsSeparator: attributes.states.thousandsSeparator,
              decimalSeparator: attributes.states.decimalSeparator,
              decimalNumbers: attributes.states.decimalNumbers,
              taxes: attributes.states.taxes,
              host: attributes.states.host,
              status: attributes.states.status
            };
            updatedPayload = _objectSpread(_objectSpread(_objectSpread({}, payload), attributes.states.postCode ? {
              postCode: attributes.states.postCode
            } : {}), attributes.states.address2 ? {
              address2: attributes.states.address2
            } : {});
            _context2.next = 5;
            return (0, _helpers.gafpriFetch)({
              initMethod: 'PATCH',
              initRoute: "".concat(_constants.SITES_ROUTE, "/").concat(attributes.states.siteId),
              initCredentials: updatedPayload,
              initToken: {
                token: token
              }
            });
          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", data);
          case 7:
            return _context2.abrupt("return", null);
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function update() {
      return _ref3.apply(this, arguments);
    };
  }();
  var erase = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
      var data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!token) {
              _context3.next = 5;
              break;
            }
            _context3.next = 3;
            return (0, _helpers.gafpriFetch)({
              initMethod: 'DELETE',
              initRoute: "".concat(_constants.SITES_ROUTE, "/").concat(id),
              initToken: {
                token: token
              }
            });
          case 3:
            data = _context3.sent;
            return _context3.abrupt("return", data);
          case 5:
            return _context3.abrupt("return", null);
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function erase(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  /* eslint-enable @typescript-eslint/no-explicit-any */

  var actions = {
    add: add,
    update: update,
    erase: erase
  };
  return {
    actions: actions
  };
};