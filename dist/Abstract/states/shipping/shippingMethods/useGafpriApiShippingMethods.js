"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiShippingMethods = useGafpriApiShippingMethods;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _helpers = require("../../../../helpers");
var _constants = require("../../../../constants");
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-enable @typescript-eslint/no-explicit-any */

function useGafpriApiShippingMethods(_ref) {
  var token = _ref.token,
    attributes = _ref.attributes;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  var add = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!token) {
              _context.next = 6;
              break;
            }
            _context.next = 4;
            return (0, _helpers.gafpriFetch)({
              initMethod: 'POST',
              initRoute: _constants.SHIPPING_METHODS_ROUTE,
              initCredentials: {
                shippingAreasId: attributes.states.shippingAreasId,
                name: attributes.states.name,
                description: attributes.states.description,
                cost: attributes.states.cost,
                type: attributes.states.type,
                roles: attributes.states.roles,
                workDaysHours: attributes.states.workDaysHours,
                preparationTime: attributes.states.preparationTime,
                pickupTime: attributes.states.pickupTime,
                deliveryTime: attributes.states.deliveryTime,
                typeStart: attributes.states.typeStart,
                valueStart: attributes.states.valueStart,
                conditional: attributes.states.conditional,
                typeConditional: attributes.states.typeConditional,
                valueConditional: attributes.states.valueConditional,
                status: attributes.states.status
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

  /* eslint-disable @typescript-eslint/no-explicit-any */
  var update = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
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
              initMethod: 'PATCH',
              initRoute: "".concat(_constants.SHIPPING_METHODS_ROUTE, "/").concat(attributes.states.currentId),
              initCredentials: {
                shippingAreasId: attributes.states.shippingAreasId,
                name: attributes.states.name,
                description: attributes.states.description,
                cost: attributes.states.cost,
                type: attributes.states.type,
                roles: attributes.states.roles,
                workDaysHours: attributes.states.workDaysHours,
                preparationTime: attributes.states.preparationTime,
                pickupTime: attributes.states.pickupTime,
                deliveryTime: attributes.states.deliveryTime,
                typeStart: attributes.states.typeStart,
                valueStart: attributes.states.valueStart,
                conditional: attributes.states.conditional,
                typeConditional: attributes.states.typeConditional,
                valueConditional: attributes.states.valueConditional,
                status: attributes.states.status
              },
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
    return function update() {
      return _ref3.apply(this, arguments);
    };
  }();
  /* eslint-enable @typescript-eslint/no-explicit-any */

  /* eslint-disable @typescript-eslint/no-explicit-any */
  var erase = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
      var data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (!token) {
              _context3.next = 6;
              break;
            }
            _context3.next = 4;
            return (0, _helpers.gafpriFetch)({
              initMethod: 'DELETE',
              initRoute: "".concat(_constants.SHIPPING_METHODS_ROUTE, "/").concat(id),
              initToken: {
                token: token
              }
            });
          case 4:
            data = _context3.sent;
            return _context3.abrupt("return", data);
          case 6:
            return _context3.abrupt("return", null);
          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 9]]);
    }));
    return function erase(_x) {
      return _ref4.apply(this, arguments);
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