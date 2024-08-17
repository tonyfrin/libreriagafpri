"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CashTransationsTable = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Title = require("../Title");
var _helpers = require("../../helpers");
var _List = require("../List");
var _templateObject, _templateObject2;
var expensesHeaderContainerStyle = function expensesHeaderContainerStyle() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
};
var expensesTdStyle = function expensesTdStyle(width, custom) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  border: 1px solid #ddd;\n  padding: 4px;\n  text-align: center;\n  ", "\n"])), width, custom || '');
};
var CashTransationsTable = exports.CashTransationsTable = function CashTransationsTable(_ref) {
  var _paginated$map;
  var use = _ref.use,
    siteOptions = _ref.siteOptions,
    cashTransactions = _ref.cashTransactions,
    title = _ref.title,
    currentPage = _ref.currentPage,
    setCurrentPage = _ref.setCurrentPage;
  var sort = use.paginations.actions.sortCashTransactionsById(cashTransactions, use.paginations.states.orderList) || [];
  var paginated = use.paginations.actions.getCashTransactionsgetPaginated(sort, currentPage, use.paginations.states.itemsPerPage);
  var items = (_paginated$map = paginated === null || paginated === void 0 ? void 0 : paginated.map(function (item) {
    return [/*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(expensesTdStyle('20%', "text-align: start;"))
    }, item.id), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(expensesTdStyle('60%'))
    }, (0, _helpers.truncarTexto)(item.note || '', 40)), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(expensesTdStyle('20%', "text-align: end;"))
    }, (0, _helpers.decimalFormatPriceConverter)(item.change || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION))];
  })) !== null && _paginated$map !== void 0 ? _paginated$map : [];
  var header = ['numero', 'concepto', 'monto'];
  var totalPages = Math.ceil(sort.length / use.paginations.states.itemsPerPage);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(expensesHeaderContainerStyle())
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