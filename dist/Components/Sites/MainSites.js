"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainSites = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var MainSites = exports.MainSites = function MainSites(_ref) {
  var useSites = _ref.useSites,
    useCurrencies = _ref.useCurrencies,
    loadingProps = _ref.loadingProps,
    initProps = _ref.initProps,
    addFormProps = _ref.addFormProps,
    updateFormProps = _ref.updateFormProps,
    token = _ref.token;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, useSites.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, loadingProps), useSites.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, (0, _extends2["default"])({
    keyName: "init",
    isVisible: useSites.pages.states.isInit
  }, initProps), /*#__PURE__*/_react["default"].createElement(_Abstract.InitSites, {
    use: useSites,
    token: token
  })), useSites.pages.states.isAdd && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "add",
    isVisible: useSites.pages.states.isAdd
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.SitesForm, (0, _extends2["default"])({
    use: useSites,
    formType: "add",
    useCurrencies: useCurrencies
  }, addFormProps))), useSites.pages.states.isUpdate && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "update",
    isVisible: useSites.pages.states.isUpdate
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.SitesForm, (0, _extends2["default"])({
    formType: "update",
    use: useSites,
    useCurrencies: useCurrencies
  }, updateFormProps))));
};