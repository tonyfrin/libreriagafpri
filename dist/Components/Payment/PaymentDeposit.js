"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentDeposit = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Order = require("../Order");
var _Credits = require("../Credits");
var _Loading = require("../Loading");
var _excluded = ["className"];
var _templateObject;
var orderStylesContainer = function orderStylesContainer(stayles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n  min-height: ", ";\n  ", "\n  background-repeat: ", ";\n  background-size: ", ";\n  ", "\n"])), stayles.paddingTop || '60px', stayles.paddingBottom || '50px', stayles.minHeight || '100vh', stayles.backgroundImage && "background-image: url(".concat(stayles.backgroundImage, ");"), stayles.backgroundRepeat || 'no-repeat', stayles.backgroundSize || '345vh', stayles.custom || '');
};
var PaymentDeposit = exports.PaymentDeposit = function PaymentDeposit(_ref) {
  var use = _ref.use,
    siteOptions = _ref.siteOptions,
    useOrder = _ref.useOrder,
    useCredits = _ref.useCredits,
    useCurrencies = _ref.useCurrencies,
    useBankType = _ref.useBankType,
    logoPdf = _ref.logoPdf,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    images = _ref.images;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(orderStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), use.subPagesDeposit.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, {
    mainStyles: {
      custom: 'height: 100vh;'
    }
  }), use.subPagesDeposit.states.isOrder && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Order.OrderPayment, {
    use: use,
    useOrder: useOrder,
    siteOptions: siteOptions,
    logoPdf: logoPdf
  })), use.subPagesDeposit.states.isCredits && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Credits.CreditPayment, {
    use: use,
    useCredits: useCredits,
    siteOptions: siteOptions,
    logoPdf: logoPdf,
    useOrder: useOrder,
    images: images
  }))));
};