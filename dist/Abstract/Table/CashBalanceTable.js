"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CashBalanceTable = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Title = require("../Title");
var _helpers = require("../../helpers");
var _SingleTable = require("./SingleTable");
var _templateObject, _templateObject2;
var expensesHeaderContainerStyle = function expensesHeaderContainerStyle() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
};
var expensesTdStyle = function expensesTdStyle(width, custom) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  border: 1px solid #ddd;\n  padding: 4px;\n  text-align: center;\n  ", "\n"])), width, custom || '');
};
var CashBalanceTable = exports.CashBalanceTable = function CashBalanceTable(_ref) {
  var siteOptions = _ref.siteOptions,
    currentBalance = _ref.currentBalance,
    useCurrencies = _ref.useCurrencies;
  var totalBalance = currentBalance.reduce(function (acc, curr) {
    return parseFloat("".concat(acc)) + parseFloat("".concat(curr.balanceChange));
  }, 0);
  var items = currentBalance.map(function (item) {
    var currency = useCurrencies.actions.getById(item.currenciesId);
    return [/*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(expensesTdStyle('50%', "text-align: start;"))
    }, (currency === null || currency === void 0 ? void 0 : currency.name) || ''), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(expensesTdStyle('25%', "text-align: end;"))
    }, (0, _helpers.decimalFormatPriceConverter)(item.balance || 0, siteOptions.DECIMAL_NUMBERS, (currency === null || currency === void 0 ? void 0 : currency.symbol) || '', siteOptions.CURRENCY_LOCATION)), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(expensesTdStyle('25%', "text-align: end;"))
    }, (0, _helpers.decimalFormatPriceConverter)(item.balanceChange || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION))];
  });
  items.push([/*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('50%', "\n      text-align: end;\n      font-weight: 700;\n    "))
  }, "Total"), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('25%', "text-align: end;"))
  }), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('25%', "\n      text-align: end;\n      font-weight: 700;\n    "))
  }, (0, _helpers.decimalFormatPriceConverter)(totalBalance || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL || '', siteOptions.CURRENCY_LOCATION))]);
  var header = ['Moneda', 'Saldo', 'Cambio'];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(expensesHeaderContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement(_Title.Title2, {
    title: 'Efectivo',
    styles: {
      fontSize: '0.9rem',
      margin: '0px',
      fontWeight: '700'
    }
  }), /*#__PURE__*/_react["default"].createElement(_SingleTable.SingleTable, {
    headers: header,
    data: items,
    containerStyles: {
      minHeight: 'none',
      custom: "\n                    padding: 10px;\n                  "
    }
  })));
};