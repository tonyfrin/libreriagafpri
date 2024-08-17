"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductOrder = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Abstract = require("../../Abstract");
var _Loading = require("../Loading");
var _excluded = ["className"];
var _templateObject;
var productOrderStylesContainer = function productOrderStylesContainer(stayles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), stayles.custom || '');
};
var ProductOrder = exports.ProductOrder = function ProductOrder(_ref) {
  var useProduct = _ref.useProduct,
    useOrder = _ref.useOrder,
    sitesOptions = _ref.sitesOptions,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(productOrderStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), useProduct.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null), useProduct.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: useProduct.pages.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.SearchProducts, {
    use: useProduct,
    sitesOptions: sitesOptions,
    useOrder: useOrder
  }))));
};