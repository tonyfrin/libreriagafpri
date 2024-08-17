"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConciliateTable = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Title = require("../Title");
var _helpers = require("../../helpers");
var _Containers = require("../Containers");
var _Button = require("../Button");
var _SingleHiddenTablet = require("./SingleHiddenTablet");
var _templateObject, _templateObject2;
var expensesHeaderContainerStyle = function expensesHeaderContainerStyle() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
};
var expensesTdStyle = function expensesTdStyle(width, custom) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  border: 1px solid #ddd;\n  padding: 10px;\n  text-align: center;\n  ", "\n"])), width, custom || '');
};
var ConciliateTable = exports.ConciliateTable = function ConciliateTable(_ref) {
  var expenses = _ref.expenses,
    income = _ref.income,
    siteOptions = _ref.siteOptions,
    currentBalance = _ref.currentBalance,
    initBalance = _ref.initBalance,
    conciliate = _ref.conciliate;
  var totalIncome = income.reduce(function (acc, curr) {
    return parseFloat("".concat(acc)) + parseFloat("".concat(curr.change));
  }, 0);
  var totalExpenses = expenses.reduce(function (acc, curr) {
    return parseFloat("".concat(acc)) + parseFloat("".concat(curr.change));
  }, 0);
  var totalBalance = currentBalance.reduce(function (acc, curr) {
    return parseFloat("".concat(acc)) + parseFloat("".concat(curr.balanceChange));
  }, 0);
  var initBalanceTotal = initBalance.reduce(function (acc, curr) {
    return parseFloat("".concat(acc)) + parseFloat("".concat(curr.initCashChange));
  }, 0);
  var totalDebe = totalExpenses + totalBalance;
  var totalHaber = totalIncome + initBalanceTotal;
  var verification = totalDebe - totalHaber;
  var items = [[/*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('50%', "text-align: start;"))
  }, "Saldo Salida"), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('25%', "text-align: center;"))
  }, (0, _helpers.decimalFormatPriceConverter)(totalExpenses || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('25%', "text-align: center;"))
  })], [/*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('50%', "text-align: start;"))
  }, "Saldo Efectivo"), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('25%', "text-align: center;"))
  }, (0, _helpers.decimalFormatPriceConverter)(totalBalance || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('25%', "text-align: center;"))
  })], [/*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('50%', "text-align: end;"))
  }, "Saldo Entradas"), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('25%', "text-align: center;"))
  }), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('25%', "text-align: center;"))
  }, (0, _helpers.decimalFormatPriceConverter)(totalIncome || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION))], [/*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('50%', "text-align: end;"))
  }, "Saldo efectivo inicial"), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('25%', "text-align: center;"))
  }), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('25%', "text-align: center;"))
  }, (0, _helpers.decimalFormatPriceConverter)(initBalanceTotal || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION))], [/*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('50%', "\n      text-align: center;\n      font-weight: 700;\n      font-size: 14px;\n    "))
  }, "Totales"), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('25%', "\n      text-align: center;\n      font-weight: 700;\n      font-size: 14px;\n    "))
  }, (0, _helpers.decimalFormatPriceConverter)(totalDebe || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('25%', "\n      text-align: center;\n      font-weight: 700;\n      font-size: 14px;\n    "))
  }, (0, _helpers.decimalFormatPriceConverter)(totalHaber || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION))], [/*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('50%', "\n        text-align: center;\n        font-weight: 700;\n        font-size: 16px;\n      "))
  }, "Comprobaci\xF3n del Ejercicio"), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(expensesTdStyle('25%', "\n      text-align: center;\n      font-weight: 700;\n      font-size: 16px;\n    "))
  }, (0, _helpers.decimalFormatPriceConverter)(verification || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION))]];
  var header = ['Totales', 'debe', 'haber'];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(expensesHeaderContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement(_Title.Title2, {
    title: 'Conciliación',
    styles: {
      fontSize: '0.9rem',
      margin: '0px 0px 10px 0px',
      fontWeight: '700',
      color: '#FFF'
    }
  }), /*#__PURE__*/_react["default"].createElement(_SingleHiddenTablet.SingleHiddenTablet, {
    headers: header,
    data: items
  })), verification === 0 && /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      custom: 'margin: 30px 0px 10px 0px;'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Conciliar",
    styles: {
      fontSize: '16px',
      padding: '0.3rem'
    },
    buttonProps: {
      onClick: function onClick() {
        return conciliate();
      }
    }
  }))));
};