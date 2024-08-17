"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPaginationsBankType = useGafpriPaginationsBankType;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function useGafpriPaginationsBankType(_ref) {
  var data = _ref.data;
  var _useState = (0, _react.useState)('asc'),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    orderList = _useState2[0],
    setOrderList = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    searchTerm = _useState4[0],
    setSearchTerm = _useState4[1];
  var _useState5 = (0, _react.useState)(1),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var _useState7 = (0, _react.useState)(1),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    transCurrentPage = _useState8[0],
    setTransCurrentPage = _useState8[1];
  var itemsPerPage = 6;
  var itemsPerPageTransactions = 30;
  function sortByName(itemStorages, order) {
    if (itemStorages) {
      return itemStorages.slice().sort(function (a, b) {
        var comparison = a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base'
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }
  var filterByName = function filterByName(search) {
    if (data.states.items.data.items) {
      return data.states.items.data.items.filter(function (storage) {
        return storage.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return null;
  };
  function sortTransactionsById(items) {
    if (items) {
      return items.slice().sort(function (a, b) {
        var idA = a.id || 0;
        var idB = b.id || 0;
        var comparison = idA - idB;
        return -comparison;
      });
    }
    return null;
  }
  var getPaginated = function getPaginated(items, page, itemPerPage) {
    var startIndex = (page - 1) * itemPerPage;
    var endIndex = startIndex + itemPerPage;
    if (items) {
      return items.slice(startIndex, endIndex);
    }
    return null;
  };
  var getTransactionsgetPaginated = function getTransactionsgetPaginated(items, page) {
    var startIndex = (page - 1) * itemsPerPageTransactions;
    var endIndex = startIndex + itemsPerPageTransactions;
    if (items) {
      return items.slice(startIndex, endIndex);
    }
    return null;
  };

  /**
   * Effects
   *
   *
   */

  _react["default"].useEffect(function () {
    setCurrentPage(1);
  }, [searchTerm]);

  /**
   * Export
   *
   *
   */
  var states = {
    orderList: orderList,
    searchTerm: searchTerm,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    transCurrentPage: transCurrentPage
  };
  var actions = {
    sortByName: sortByName,
    setOrderList: setOrderList,
    setSearchTerm: setSearchTerm,
    filterByName: filterByName,
    setCurrentPage: setCurrentPage,
    setTransCurrentPage: setTransCurrentPage,
    getPaginated: getPaginated,
    getTransactionsgetPaginated: getTransactionsgetPaginated,
    sortTransactionsById: sortTransactionsById
  };
  return {
    states: states,
    actions: actions
  };
}