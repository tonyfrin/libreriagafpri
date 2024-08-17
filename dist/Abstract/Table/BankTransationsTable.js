"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BankTransationsTable = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _bi = require("react-icons/bi");
var _Title = require("../Title");
var _helpers = require("../../helpers");
var _List = require("../List");
var _Icon = require("../Icon");
var _templateObject, _templateObject2;
var btContainerStyle = function btContainerStyle() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
};
var btTdStyle = function btTdStyle(width, custom) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  border: 1px solid #ddd;\n  padding: 4px;\n  text-align: center;\n  ", "\n"])), width, custom || '');
};
var BankTransationsTable = exports.BankTransationsTable = function BankTransationsTable(_ref) {
  var _paginated$map;
  var use = _ref.use,
    siteOptions = _ref.siteOptions,
    transactions = _ref.transactions,
    title = _ref.title,
    currentPage = _ref.currentPage,
    setCurrentPage = _ref.setCurrentPage,
    bankCurrency = _ref.bankCurrency;
  var sort = use.paginations.actions.sortTransactionsById(transactions) || [];
  var paginated = use.paginations.actions.getTransactionsgetPaginated(sort, currentPage);
  var items = (_paginated$map = paginated === null || paginated === void 0 ? void 0 : paginated.map(function (item) {
    var icon = item.status === 'pending' ? _bi.BiTimeFive : _bi.BiTimeFive;
    return [/*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(btTdStyle('0.083333333%', "text-align: start;"))
    }, item.createdAt ? (0, _helpers.formatDate)(item.createdAt) : ''), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(btTdStyle('0.083333333%', "text-align: start;"))
    }, (0, _helpers.formatDate)(item.dateTransations)), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(btTdStyle('0.49%', "text-align: start;"))
    }, (0, _helpers.truncarTexto)(item.description || '', 110)), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(btTdStyle('0.01%', "text-align: start;"))
    }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      item: {
        id: "".concat(item.id),
        onClick: function onClick() {},
        icon: icon
      },
      containerStyles: {
        padding: '0px',
        custom: "\n                display: flex;\n                justify-content: center;\n                align-items: center;\n              "
      },
      contentStyle: {
        fontSize: '12px',
        width: '1rem',
        height: '1rem'
      }
    })), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(btTdStyle('0.16666667%', "text-align: end;"))
    }, (0, _helpers.decimalFormatPriceConverter)(item.amount || 0, siteOptions.DECIMAL_NUMBERS, bankCurrency.symbol, siteOptions.CURRENCY_LOCATION)), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(btTdStyle('0.16666667%', "text-align: end;"))
    }, (0, _helpers.decimalFormatPriceConverter)(item.balance || 0, siteOptions.DECIMAL_NUMBERS, bankCurrency.symbol, siteOptions.CURRENCY_LOCATION))];
  })) !== null && _paginated$map !== void 0 ? _paginated$map : [];
  var header = ['Fecha', 'Procesado', 'Descripción', 'Estado', 'Monto', 'Balance'];
  var totalPages = Math.ceil(sort.length / use.paginations.states.itemsPerPage);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(btContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement(_Title.Title2, {
    title: title,
    styles: {
      fontSize: '0.9rem',
      margin: '0px 0px 10px 0px',
      fontWeight: '700'
    }
  }), /*#__PURE__*/_react["default"].createElement(_List.SingleList, {
    headers: header,
    items: items,
    propsPagination: {
      currentPage: currentPage,
      setCurrentPage: setCurrentPage,
      totalPages: totalPages
    }
  })));
};