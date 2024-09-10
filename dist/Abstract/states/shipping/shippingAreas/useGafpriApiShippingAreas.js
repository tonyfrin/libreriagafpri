"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiShippingAreas = useGafpriApiShippingAreas;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _helpers = require("../../../../helpers");
var _constants = require("../../../../constants");
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-enable @typescript-eslint/no-explicit-any */

function useGafpriApiShippingAreas(_ref) {
  var token = _ref.token,
    useError = _ref.useError,
    pages = _ref.pages,
    attributes = _ref.attributes;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  var add = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(attributes.states.nameValid && token)) {
              _context.next = 6;
              break;
            }
            _context.next = 4;
            return (0, _helpers.gafpriFetch)({
              initMethod: 'POST',
              initRoute: _constants.SHIPPING_AREAS_ROUTE,
              initCredentials: {
                name: attributes.states.name,
                postalCodes: attributes.states.postalCodes,
                cities: attributes.states.cities,
                states: attributes.states.statesCountries,
                countries: attributes.states.countries
              },
              initToken: {
                token: token
              }
            });
          case 4:
            data = _context.sent;
            return _context.abrupt("return", data);
          case 6:
            return _context.abrupt("return", null);
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }));
    return function add() {
      return _ref2.apply(this, arguments);
    };
  }();
  /* eslint-enable @typescript-eslint/no-explicit-any */

  var newErrorUpdate = function newErrorUpdate(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.onUpdate
    });
  };
  var update = function update() {
    if (attributes.states.nameValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.SHIPPING_AREAS_ROUTE, "/").concat(attributes.states.currentId),
        initCredentials: {
          name: attributes.states.name
        },
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorUpdate
      });
    }
  };

  /* eslint-disable @typescript-eslint/no-explicit-any */
  var erase = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
      var data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!token) {
              _context2.next = 6;
              break;
            }
            _context2.next = 4;
            return (0, _helpers.gafpriFetch)({
              initMethod: 'DELETE',
              initRoute: "".concat(_constants.SHIPPING_AREAS_ROUTE, "/").concat(id),
              initToken: {
                token: token
              }
            });
          case 4:
            data = _context2.sent;
            return _context2.abrupt("return", data);
          case 6:
            return _context2.abrupt("return", null);
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    return function erase(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  /* eslint-enable @typescript-eslint/no-explicit-any */

  /**
   * Export
   *
   *
   */

  var actions = {
    add: add,
    update: update,
    erase: erase
  };
  return {
    actions: actions
  };
}