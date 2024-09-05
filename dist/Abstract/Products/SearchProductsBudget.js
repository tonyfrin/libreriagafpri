"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchProductsBudget = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Button = require("../Button");
var _Header = require("../Header");
var _Error = require("../Error");
var _List = require("../List");
var _Containers = require("../Containers");
var _helpers = require("../../helpers");
var _templateObject, _templateObject2;
var defaultOptionsButtonMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n"])));
var searchProductsBudgetStylesContainer = function searchProductsBudgetStylesContainer() {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: 1150px;\n  margin: auto;\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n"])));
};
var SearchProductsBudget = exports.SearchProductsBudget = function SearchProductsBudget(_ref) {
  var _paginated$map;
  var use = _ref.use,
    useBudget = _ref.useBudget,
    sitesOptions = _ref.sitesOptions,
    _ref$optionsButtonMai = _ref.optionsButtonMainContainerStyle,
    optionsButtonMainContainerStyle = _ref$optionsButtonMai === void 0 ? defaultOptionsButtonMainContainerStyle : _ref$optionsButtonMai,
    _ref$headerProps = _ref.headerProps,
    headerProps = _ref$headerProps === void 0 ? {
      title: 'Productos'
    } : _ref$headerProps,
    _ref$errorProps = _ref.errorProps,
    errorProps = _ref$errorProps === void 0 ? {
      error: use.error.states.error
    } : _ref$errorProps,
    listProps = _ref.listProps;
  var ButtonUpdate = function ButtonUpdate(_ref2) {
    var id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionsButtonMainContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      title: "Seleccionar",
      buttonProps: {
        onClick: function onClick() {
          return useBudget.pages.actions.selectproduct(id);
        }
      },
      styles: {
        fontSize: '10px'
      }
    }));
  };
  var allowedValues = ['name', 'sku', 'tags', 'category'];
  var searchBy = allowedValues.includes(use.paginations.states.searchBy) ? use.paginations.states.searchBy : 'name';
  var filtered = use.paginations.actions.filterBySearch(use.paginations.states.searchTerm, searchBy);
  var projects = use.paginations.actions.sortByProperty(filtered, searchBy, use.paginations.states.orderList) || [];
  var paginated = use.paginations.actions.getPaginated(projects, use.paginations.states.currentPage, use.paginations.states.itemsPerPage);
  var items = (_paginated$map = paginated === null || paginated === void 0 ? void 0 : paginated.map(function (item) {
    var price = (0, _helpers.decimalFormatPriceConverter)(item.salesPrice || 0, sitesOptions.DECIMAL_NUMBERS, sitesOptions.CURRENCY_SYMBOL, sitesOptions.CURRENCY_LOCATION, sitesOptions.CURRENCY_FORMAT);
    return [item.sku, item.name, price, /*#__PURE__*/_react["default"].createElement(ButtonUpdate, {
      id: item.postsId
    })];
  })) !== null && _paginated$map !== void 0 ? _paginated$map : [];
  var headers = ['Código', 'Nombre', 'Precio', 'Opciones'];
  var options = [{
    value: 'asc',
    label: 'Ascendente'
  }, {
    value: 'desc',
    label: 'Descendente'
  }];
  var valueDefaul = use.paginations.states.orderList === 'asc' ? {
    value: 'asc',
    label: 'Ascendente'
  } : {
    value: 'desc',
    label: 'Descendente'
  };
  var totalPages = Math.ceil(projects.length / use.paginations.states.itemsPerPage);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(searchProductsBudgetStylesContainer())
  }, /*#__PURE__*/_react["default"].createElement(_Header.Header, headerProps), /*#__PURE__*/_react["default"].createElement(_Error.Error, errorProps), /*#__PURE__*/_react["default"].createElement(_List.List, (0, _extends2["default"])({
    title: "Productos",
    items: items,
    headers: headers,
    columns: 4,
    selectProps: {
      options: options,
      onChange: function onChange(event) {
        if (event !== null && event !== void 0 && event.value) {
          use.paginations.actions.setOrderList(event.value);
        }
      },
      defaultValue: valueDefaul,
      styles: {
        width: '50%'
      }
    },
    selectByProps: {
      options: use.paginations.states.searchByOptions,
      onChange: function onChange(event) {
        use.paginations.actions.changeSearchBy(event);
      },
      defaultValue: use.paginations.states.searchByDefault,
      styles: {
        width: '100%'
      }
    },
    inputProps: {
      value: use.paginations.states.searchTerm,
      onChange: function onChange(e) {
        return use.paginations.actions.setSearchTerm(e.target.value);
      },
      placeholder: 'Buscar...'
    },
    propsPagination: {
      currentPage: use.paginations.states.currentPage,
      setCurrentPage: use.paginations.actions.setCurrentPage,
      totalPages: totalPages
    }
  }, listProps)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      justifyContent: 'flex-start',
      custom: "\n                    margin-top: 30px;"
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "regresar",
    buttonProps: {
      onClick: function onClick() {
        return useBudget.pages.actions.onSales();
      }
    },
    styles: {
      backgroundColor: '#c12429',
      margin: '0 20px 0 0'
    }
  })))));
};