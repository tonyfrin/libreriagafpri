"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPaginationsProducts = useGafpriPaginationsProducts;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function useGafpriPaginationsProducts(_ref) {
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
  var _useState7 = (0, _react.useState)(6),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    itemsPerPage = _useState8[0],
    setItemsPerPage = _useState8[1];
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
    value: 'sku',
    label: 'Código'
  }, {
    value: 'tags',
    label: 'Etiqueta'
  }, {
    value: 'category',
    label: 'Categoría'
  }];
  function sortByName(items, order) {
    if (items) {
      return items.slice().sort(function (a, b) {
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
      return data.states.items.data.items.filter(function (item) {
        return item.name.toLowerCase().includes(search.toLowerCase());
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
        if (search === 'category') {
          var _a$category$name, _a$category, _b$category$name, _b$category;
          aValue = (_a$category$name = (_a$category = a.category) === null || _a$category === void 0 ? void 0 : _a$category.name) !== null && _a$category$name !== void 0 ? _a$category$name : '';
          bValue = (_b$category$name = (_b$category = b.category) === null || _b$category === void 0 ? void 0 : _b$category.name) !== null && _b$category$name !== void 0 ? _b$category$name : '';
        } else if (search === 'tags') {
          var _a$tags$join, _a$tags, _b$tags$join, _b$tags;
          aValue = (_a$tags$join = (_a$tags = a.tags) === null || _a$tags === void 0 ? void 0 : _a$tags.join('')) !== null && _a$tags$join !== void 0 ? _a$tags$join : '';
          bValue = (_b$tags$join = (_b$tags = b.tags) === null || _b$tags === void 0 ? void 0 : _b$tags.join('')) !== null && _b$tags$join !== void 0 ? _b$tags$join : '';
        } else {
          var _a$search, _b$search;
          aValue = (_a$search = a[search]) !== null && _a$search !== void 0 ? _a$search : '';
          bValue = (_b$search = b[search]) !== null && _b$search !== void 0 ? _b$search : '';
        }
        var comparison = aValue.localeCompare(bValue, undefined, {
          sensitivity: 'base'
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }
  var filterBySearch = function filterBySearch(search, searchType) {
    if (data.states.items.data.items) {
      return data.states.items.data.items.filter(function (item) {
        if (searchType === 'category') {
          var _item$category$name, _item$category;
          var _value = (_item$category$name = (_item$category = item.category) === null || _item$category === void 0 ? void 0 : _item$category.name) !== null && _item$category$name !== void 0 ? _item$category$name : '';
          return _value.toLowerCase().includes(search.toLowerCase());
        }
        var value = item[searchType];
        return value ? value.toLowerCase().includes(search.toLowerCase()) : false;
      });
    }
    return null;
  };
  var changeSearchBy = function changeSearchBy(options) {
    var label = options !== null && options !== void 0 && options.label ? options.label : 'Nombre';
    var value = options !== null && options !== void 0 && options.value && (options.value === 'name' || options.value === 'sku' || options.value === 'tags' || options.value === 'category') ? options.value : 'name';
    var newDefaulValue = {
      label: label,
      value: value
    };
    setSearchByDefault(newDefaulValue);
    setSearchBy(value);
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
    searchBy: searchBy,
    searchByDefault: searchByDefault,
    searchByOptions: searchByOptions
  };
  var actions = {
    setOrderList: setOrderList,
    setSearchTerm: setSearchTerm,
    setCurrentPage: setCurrentPage,
    setItemsPerPage: setItemsPerPage,
    sortByName: sortByName,
    filterByName: filterByName,
    getPaginated: getPaginated,
    sortByProperty: sortByProperty,
    filterBySearch: filterBySearch,
    changeSearchBy: changeSearchBy
  };
  return {
    states: states,
    actions: actions
  };
}