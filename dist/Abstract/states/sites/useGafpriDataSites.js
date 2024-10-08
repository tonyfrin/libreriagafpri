"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriDataSites = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _helpers = require("../../../helpers");
var _constants = require("../../../constants");
var useGafpriDataSites = exports.useGafpriDataSites = function useGafpriDataSites(_ref) {
  var token = _ref.token;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isReady = _useState2[0],
    setIsReady = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    sites = _useState4[0],
    setSites = _useState4[1];
  var getSites = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!token) {
              _context.next = 5;
              break;
            }
            _context.next = 3;
            return (0, _helpers.gafpriFetch)({
              initMethod: 'GET',
              initRoute: _constants.SITES_ROUTE,
              initToken: {
                token: token
              }
            });
          case 3:
            data = _context.sent;
            return _context.abrupt("return", data);
          case 5:
            return _context.abrupt("return", null);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getSites() {
      return _ref2.apply(this, arguments);
    };
  }();
  /* eslint-enable @typescript-eslint/no-explicit-any */

  var handleNewSite = function handleNewSite(newItem) {
    setSites(function (prevState) {
      var newData = [].concat((0, _toConsumableArray2["default"])(prevState || []), [newItem]);
      return newData;
    });
  };
  var handleUpdatedSite = function handleUpdatedSite(itemUpdate) {
    setSites(function (prevState) {
      var updatedItems = (prevState === null || prevState === void 0 ? void 0 : prevState.map(function (item) {
        return "".concat(item.id) === "".concat(itemUpdate.id) ? itemUpdate : item;
      })) || [];
      return updatedItems;
    });
  };
  var handleDeletedSite = function handleDeletedSite(_ref3) {
    var itemId = _ref3.itemId;
    setSites(function (prevState) {
      var filteredItems = (prevState === null || prevState === void 0 ? void 0 : prevState.filter(function (item) {
        return "".concat(item.id) !== "".concat(itemId);
      })) || [];
      return filteredItems;
    });
  };
  function getById(id) {
    return (sites === null || sites === void 0 ? void 0 : sites.find(function (item) {
      return "".concat(item.id) === "".concat(id);
    })) || null;
  }
  function getMainSite() {
    if (sites.length > 0) {
      return sites[0];
    }
    return null;
  }
  var states = {
    isReady: isReady,
    sites: sites
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    setIsReady: setIsReady,
    getById: getById,
    getMainSite: getMainSite,
    handleNewSite: handleNewSite,
    handleDeletedSite: handleDeletedSite,
    handleUpdatedSite: handleUpdatedSite,
    getSites: getSites,
    setSites: setSites
  };
  return {
    states: states,
    actions: actions
  };
};