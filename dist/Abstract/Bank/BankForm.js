"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BankForm = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Components = require("../../Components");
var _Header = require("../Header");
var _Table = require("../Table");
var _helpers = require("../../helpers");
var _templateObject, _templateObject2;
var bodyMainContainerStyle = function bodyMainContainerStyle() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 10px;\n"])));
};
var bodyContainerStyle = function bodyContainerStyle() {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  padding: 10px 40px;\n  width: 90%;\n  border-radius: 10px;\n  height: auto;\n  margin: 0;\n"])));
};
var BankForm = exports.BankForm = function BankForm(_ref) {
  var use = _ref.use,
    siteOptions = _ref.siteOptions,
    useCurrencies = _ref.useCurrencies;
  var current = use.data.actions.getById(use.attributes.states.currentId);
  if (!current) return /*#__PURE__*/_react["default"].createElement(_Components.Loading, null);
  var transactions = current.bankTransactions;
  var currency = useCurrencies.actions.getById(current.currenciesId);
  if (!currency) return /*#__PURE__*/_react["default"].createElement(_Components.Loading, null);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.BankHeader, {
    error: use.error.states.error,
    name: current.name,
    bankName: current.bankName,
    account: current.account,
    balance: (0, _helpers.decimalFormatPriceConverter)(current.balanceChange || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(bodyMainContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(bodyContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement(_Table.BankTransationsTable, {
    use: use,
    siteOptions: siteOptions,
    transactions: transactions,
    title: "Transacciones",
    currentPage: use.paginations.states.currentPage,
    setCurrentPage: use.paginations.actions.setCurrentPage,
    bankCurrency: currency
  }))));
};