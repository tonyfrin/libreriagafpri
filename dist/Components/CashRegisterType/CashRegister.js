"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CashRegister = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var _excluded = ["className"];
var _templateObject;
var orderStylesContainer = function orderStylesContainer(stayles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n  min-height: ", ";\n  ", "\n  background-repeat: ", ";\n  background-size: ", ";\n  ", "\n"])), stayles.paddingTop || '60px', stayles.paddingBottom || '50px', stayles.minHeight || '100vh', stayles.backgroundImage && "background-image: url(".concat(stayles.backgroundImage, ");"), stayles.backgroundRepeat || 'no-repeat', stayles.backgroundSize || '345vh', stayles.custom || '');
};
var CashRegister = exports.CashRegister = function CashRegister(_ref) {
  var use = _ref.use,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    itemsMenu = _ref.itemsMenu,
    siteOptions = _ref.siteOptions,
    useExpenses = _ref.useExpenses,
    useCurrencies = _ref.useCurrencies,
    useEntity = _ref.useEntity,
    entityMenu = _ref.entityMenu,
    usePaymentTransferCashRegister = _ref.usePaymentTransferCashRegister,
    useIncome = _ref.useIncome,
    useLogin = _ref.useLogin,
    returnModule = _ref.returnModule;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(orderStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement(_Abstract.HeaderMenu, {
    items: itemsMenu
  }), use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, {
    mainStyles: {
      custom: 'height: 100vh;'
    }
  }), use.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.InitCashRegister, {
    use: use,
    uselogin: useLogin,
    returnModule: returnModule
  }), use.pages.states.isCashPortal && /*#__PURE__*/_react["default"].createElement(_Abstract.CashRegisterForm, {
    use: use,
    siteOptions: siteOptions,
    useExpenses: useExpenses,
    useCurrencies: useCurrencies,
    useEntity: useEntity,
    entityMenu: entityMenu,
    usePaymentTransferCashRegister: usePaymentTransferCashRegister,
    useIncome: useIncome,
    useLogin: useLogin
  })));
};