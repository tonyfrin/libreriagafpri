"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriDataShippingAreas = useGafpriDataShippingAreas;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _helpers = require("../../../../helpers");
var _constants = require("../../../../constants");
function useGafpriDataShippingAreas(_ref) {
  var token = _ref.token;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isReady = _useState2[0],
    setIsReady = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    items = _useState4[0],
    setItems = _useState4[1];
  var notReady = function notReady() {
    setIsReady(false);
  };

  // Manejo de la dat

  var offItems = function offItems() {
    setItems(null);
    notReady();
  };

  /* eslint-disable @typescript-eslint/no-explicit-any */
  var getItems = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!token) {
              _context.next = 7;
              break;
            }
            console.log('entré a get items');
            _context.next = 4;
            return (0, _helpers.gafpriFetch)({
              initMethod: 'GET',
              initRoute: _constants.SHIPPING_AREAS_ROUTE,
              initToken: {
                token: token
              }
            });
          case 4:
            data = _context.sent;
            console.log('data shiping', data);
            return _context.abrupt("return", data);
          case 7:
            return _context.abrupt("return", null);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getItems() {
      return _ref2.apply(this, arguments);
    };
  }();
  /* eslint-enable @typescript-eslint/no-explicit-any */

  var handleNewItem = function handleNewItem(newItem) {
    setItems(function (prevState) {
      var newData = [].concat((0, _toConsumableArray2["default"])(prevState || []), [newItem]);
      return newData;
    });
  };
  var handleUpdated = function handleUpdated(updatedItem) {
    setItems(function (prevState) {
      var updatedItems = (prevState === null || prevState === void 0 ? void 0 : prevState.map(function (item) {
        return item.id === updatedItem.id ? updatedItem : item;
      })) || [];
      var newData = updatedItems;
      return newData;
    });
  };
  var handleDeleted = function handleDeleted(_ref3) {
    var itemId = _ref3.itemId;
    setItems(function (prevState) {
      var filteredItems = (prevState === null || prevState === void 0 ? void 0 : prevState.filter(function (item) {
        return "".concat(item.id) !== "".concat(itemId);
      })) || [];
      var newData = filteredItems;
      return newData;
    });
  };
  function getById(id) {
    return (items === null || items === void 0 ? void 0 : items.find(function (item) {
      return item.id === id;
    })) || null;
  }
  function getOptions() {
    var options = [];
    items === null || items === void 0 || items.forEach(function (item) {
      options.push({
        label: item.name,
        value: "".concat(item.id)
      });
    });
    return options;
  }

  /**
   * Export
   *
   *
   */
  var states = {
    items: items,
    isReady: isReady
  };
  var actions = {
    offItems: offItems,
    handleNewItem: handleNewItem,
    handleUpdated: handleUpdated,
    handleDeleted: handleDeleted,
    getById: getById,
    getOptions: getOptions,
    getItems: getItems,
    setItems: setItems,
    setIsReady: setIsReady
  };
  return {
    states: states,
    actions: actions
  };
}