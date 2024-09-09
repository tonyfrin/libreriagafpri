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
  var _useState3 = (0, _react.useState)({
      data: {
        items: null
      }
    }),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    items = _useState4[0],
    setItems = _useState4[1];
  var onIsReady = function onIsReady() {
    setIsReady(true);
  };
  var notReady = function notReady() {
    setIsReady(false);
  };

  // Manejo de la data

  var setData = function setData(newData) {
    setItems(newData);
  };
  var onItems = function onItems(newData) {
    setData(newData);
    onIsReady();
  };
  var offItems = function offItems() {
    setData({
      data: {
        items: null
      }
    });
    notReady();
  };
  var getItems = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (token) {
              (0, _helpers.gafpriFetch)({
                initMethod: 'GET',
                initRoute: _constants.SHIPPING_AREAS_ROUTE,
                initToken: {
                  token: token
                },
                functionFetching: notReady,
                functionSuccess: onItems
              });
            } else {
              notReady();
            }
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getItems() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleNewItem = function handleNewItem(newItem) {
    setItems(function (prevState) {
      var newData = {
        data: {
          items: [].concat((0, _toConsumableArray2["default"])(prevState.data.items || []), [newItem])
        }
      };
      return newData;
    });
  };
  var handleUpdated = function handleUpdated(updatedItem) {
    setItems(function (prevState) {
      var _prevState$data$items;
      var updatedItems = ((_prevState$data$items = prevState.data.items) === null || _prevState$data$items === void 0 ? void 0 : _prevState$data$items.map(function (item) {
        return item.id === updatedItem.id ? updatedItem : item;
      })) || [];
      var newData = {
        data: {
          items: updatedItems
        }
      };
      return newData;
    });
  };
  var handleDeleted = function handleDeleted(_ref3) {
    var itemId = _ref3.itemId;
    setItems(function (prevState) {
      var _prevState$data$items2;
      var filteredItems = ((_prevState$data$items2 = prevState.data.items) === null || _prevState$data$items2 === void 0 ? void 0 : _prevState$data$items2.filter(function (item) {
        return "".concat(item.id) !== "".concat(itemId);
      })) || [];
      var newData = {
        data: {
          items: filteredItems
        }
      };
      return newData;
    });
  };
  function getById(id) {
    var _items$data$items;
    return ((_items$data$items = items.data.items) === null || _items$data$items === void 0 ? void 0 : _items$data$items.find(function (item) {
      return item.id === id;
    })) || null;
  }
  function getOptions() {
    var _items$data$items2;
    var options = [];
    (_items$data$items2 = items.data.items) === null || _items$data$items2 === void 0 || _items$data$items2.forEach(function (item) {
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
    getItems: getItems
  };
  return {
    states: states,
    actions: actions
  };
}