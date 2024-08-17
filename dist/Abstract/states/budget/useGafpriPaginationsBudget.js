"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPaginationsBudget = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var useGafpriPaginationsBudget = exports.useGafpriPaginationsBudget = function useGafpriPaginationsBudget(_ref) {
  var useData = _ref.useData;
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
    documentCurrentPage = _useState8[0],
    setDocumentCurrentPage = _useState8[1];
  var _useState9 = (0, _react.useState)('name'),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    searchBy = _useState10[0],
    setSearchBy = _useState10[1];
  var _useState11 = (0, _react.useState)({
      value: 'name',
      label: 'Nombre'
    }),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    searchByDefault = _useState12[0],
    setSearchByDefault = _useState12[1];
  var searchByOptions = [{
    value: 'name',
    label: 'Nombre'
  }, {
    value: 'postsId',
    label: 'Pedido'
  }, {
    value: 'status',
    label: 'Estado'
  }, {
    value: 'total',
    label: 'Monto'
  }];
  var itemsPerPage = 6;
  function sortByName(items, order) {
    if (items) {
      return items.slice().sort(function (a, b) {
        var comparison = a.budgetCustomer[0].name.localeCompare(b.budgetCustomer[0].name, undefined, {
          sensitivity: 'base'
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }
  var filterByName = function filterByName(search) {
    if (useData.states.items && useData.states.items.data.items) {
      return useData.states.items.data.items.filter(function (item) {
        return item.budgetCustomer[0].name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return null;
  };
  var getPaginated = function getPaginated(items, page, itemPerPage) {
    var startIndex = (page - 1) * itemPerPage;
    var endIndex = startIndex + itemPerPage;
    if (items) {
      return items.slice(startIndex, endIndex);
    }
    return null;
  };
  function sortByProperty(items, search, order) {
    if (items) {
      return items.slice().sort(function (a, b) {
        var aValue;
        var bValue;
        switch (search) {
          case 'postsId':
            aValue = a.postsId;
            bValue = b.postsId;
            break;
          case 'status':
            aValue = a.posts.status;
            bValue = a.posts.status;
            break;
          case 'total':
            aValue = a.total;
            bValue = b.total;
            break;
          case 'name':
            aValue = a.budgetCustomer[0].name;
            bValue = b.budgetCustomer[0].name;
            break;
          default:
            // Esto no debería ocurrir si se usa un enum o unión exhaustiva
            aValue = '';
            bValue = '';
            break;
        }
        var comparison = typeof aValue === 'string' ? aValue.localeCompare(bValue, undefined, {
          sensitivity: 'base'
        }) : aValue - bValue;
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }
  var filterBySearch = function filterBySearch(search, searchType) {
    if (useData.states.items.data.items) {
      return useData.states.items.data.items.filter(function (item) {
        var valueToCheck;
        switch (searchType) {
          case 'postsId':
          case 'total':
          case 'name':
            valueToCheck = item.budgetCustomer[0].name;
            break;
          case 'status':
            valueToCheck = item.posts.status;
            break;
          default:
            return false;
        }
        return valueToCheck ? valueToCheck.toLowerCase().includes(search.toLowerCase()) : false;
      });
    }
    return null;
  };
  var changeSearchBy = function changeSearchBy(options) {
    var label = options !== null && options !== void 0 && options.label ? options.label : 'Nombre';
    var value = options !== null && options !== void 0 && options.value && (options.value === 'name' || options.value === 'postsId' || options.value === 'status' || options.value === 'total') ? options.value : 'name';
    var newDefaulValue = {
      label: label,
      value: value
    };
    setSearchByDefault(newDefaulValue);
    setSearchBy(value);
  };
  _react["default"].useEffect(function () {
    setCurrentPage(1);
    setDocumentCurrentPage(1);
  }, [searchTerm]);
  var states = {
    orderList: orderList,
    searchTerm: searchTerm,
    currentPage: currentPage,
    documentCurrentPage: documentCurrentPage,
    searchBy: searchBy,
    searchByDefault: searchByDefault,
    searchByOptions: searchByOptions,
    itemsPerPage: itemsPerPage
  };
  var actions = {
    sortByName: sortByName,
    filterByName: filterByName,
    getPaginated: getPaginated,
    sortByProperty: sortByProperty,
    filterBySearch: filterBySearch,
    changeSearchBy: changeSearchBy,
    setOrderList: setOrderList,
    setSearchTerm: setSearchTerm,
    setCurrentPage: setCurrentPage,
    setDocumentCurrentPage: setDocumentCurrentPage
  };
  return {
    states: states,
    actions: actions
  };
};