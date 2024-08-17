"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetSearchPrint = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Button = require("../Button");
var _List = require("../List");
var _Error = require("../Error");
var _Header = require("../Header");
var _helpers = require("../../helpers");
var _Containers = require("../Containers");
var _templateObject, _templateObject2;
var budgetSearchPrintStylesContainer = function budgetSearchPrintStylesContainer() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: 1150px;\n  margin: auto;\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n"])));
};
var defaultOptionButtonContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n"])));
var BudgetSearchPrint = exports.BudgetSearchPrint = function BudgetSearchPrint(_ref) {
  var _paginated$map;
  var useBudget = _ref.useBudget,
    siteOptions = _ref.siteOptions,
    _ref$optionButtonCont = _ref.optionButtonContainerStyle,
    optionButtonContainerStyle = _ref$optionButtonCont === void 0 ? defaultOptionButtonContainerStyle : _ref$optionButtonCont,
    _ref$errorProps = _ref.errorProps,
    errorProps = _ref$errorProps === void 0 ? {
      error: useBudget.error.states.error
    } : _ref$errorProps,
    listProps = _ref.listProps;
  var returnInit = function returnInit() {
    useBudget.pages.actions.returnInit();
  };
  var ButtonUpdate = function ButtonUpdate(_ref2) {
    var id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionButtonContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      title: "ver",
      buttonProps: {
        onClick: function onClick() {
          return useBudget.pages.actions.goPrint(id);
        }
      },
      styles: {
        fontSize: '10px'
      }
    }));
  };
  var allowedValues = ['postsId', 'status', 'total', 'name'];
  var searchBy = allowedValues.includes(useBudget.paginations.states.searchBy) ? useBudget.paginations.states.searchBy : 'name';
  var filtered = useBudget.paginations.actions.filterBySearch(useBudget.paginations.states.searchTerm, searchBy);
  var entities = useBudget.paginations.actions.sortByProperty(filtered, searchBy, useBudget.paginations.states.orderList) || [];
  var paginated = useBudget.paginations.actions.getPaginated(entities, useBudget.paginations.states.currentPage, useBudget.paginations.states.itemsPerPage);
  var items = (_paginated$map = paginated === null || paginated === void 0 ? void 0 : paginated.map(function (item) {
    var _item$budgetCustomer$;
    var date = (0, _helpers.formatDate)("".concat(item.posts.createdAt));
    var total = (0, _helpers.decimalFormatPriceConverter)(item.total || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION);
    var customer = "".concat(item.budgetCustomer[0].name, " ").concat((_item$budgetCustomer$ = item.budgetCustomer[0]) === null || _item$budgetCustomer$ === void 0 ? void 0 : _item$budgetCustomer$.lastName);
    return [item.postsId, date, customer, total, /*#__PURE__*/_react["default"].createElement(ButtonUpdate, {
      id: item.postsId
    })];
  })) !== null && _paginated$map !== void 0 ? _paginated$map : [];
  var headers = ['Número', 'Fecha', 'Cliente', 'Total', 'Opciones'];
  var options = [{
    value: 'asc',
    label: 'Ascendente'
  }, {
    value: 'desc',
    label: 'Descendente'
  }];
  var valueDefaul = useBudget.paginations.states.orderList === 'asc' ? {
    value: 'asc',
    label: 'Ascendente'
  } : {
    value: 'desc',
    label: 'Descendente'
  };
  var totalPages = Math.ceil(entities.length / useBudget.paginations.states.itemsPerPage);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(budgetSearchPrintStylesContainer())
  }, /*#__PURE__*/_react["default"].createElement(_Header.Header, {
    title: "Presupuestos"
  }), /*#__PURE__*/_react["default"].createElement(_Error.Error, errorProps), /*#__PURE__*/_react["default"].createElement(_List.List, (0, _extends2["default"])({
    title: "Presupuestos",
    items: items,
    headers: headers,
    columns: 5,
    selectProps: {
      options: options,
      onChange: function onChange(event) {
        if (event !== null && event !== void 0 && event.value) {
          useBudget.paginations.actions.setOrderList(event.value);
        }
      },
      defaultValue: valueDefaul,
      styles: {
        width: '50%'
      }
    },
    selectByProps: {
      options: useBudget.paginations.states.searchByOptions,
      onChange: function onChange(event) {
        useBudget.paginations.actions.changeSearchBy(event);
      },
      defaultValue: useBudget.paginations.states.searchByDefault,
      styles: {
        width: '100%'
      }
    },
    inputProps: {
      value: useBudget.paginations.states.searchTerm,
      onChange: function onChange(e) {
        return useBudget.paginations.actions.setSearchTerm(e.target.value);
      },
      placeholder: 'Buscar...'
    },
    propsPagination: {
      currentPage: useBudget.paginations.states.currentPage,
      setCurrentPage: useBudget.paginations.actions.setCurrentPage,
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
        return returnInit();
      }
    },
    styles: {
      backgroundColor: '#c12429',
      margin: '0 20px 0 0'
    }
  })))));
};