"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainCurrencies = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var MainCurrencies = exports.MainCurrencies = function MainCurrencies(_ref) {
  var useCurrencies = _ref.useCurrencies,
    initCurrenciesProps = _ref.initCurrenciesProps,
    addFormProps = _ref.addFormProps,
    updateFormProps = _ref.updateFormProps;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, useCurrencies.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null), useCurrencies.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: useCurrencies.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.InitCurrencies, (0, _extends2["default"])({
    use: useCurrencies
  }, initCurrenciesProps))), useCurrencies.states.isAdd && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "add",
    isVisible: useCurrencies.states.isAdd
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.CurrencyForm, (0, _extends2["default"])({
    use: useCurrencies,
    formType: "add"
  }, addFormProps))), useCurrencies.states.isUpdate && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "update",
    isVisible: useCurrencies.states.isUpdate
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.CurrencyForm, (0, _extends2["default"])({
    formType: "update",
    use: useCurrencies
  }, updateFormProps))));
};