"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderStep = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Header = require("../Header");
var _Table = require("../Table");
var _excluded = ["className"],
  _excluded2 = ["className"];
var _templateObject, _templateObject2;
var orderStepContainerStyle = function orderStepContainerStyle(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  justify-content: ", ";\n  margin-top: ", ";\n  ", "\n"])), styles.display || 'flex', styles.justifyContent || 'center', styles.marginTop || '20px', styles.custom || '');
};
var orderStepContentStyle = function orderStepContentStyle(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: ", ";\n  width: ", ";\n  border-radius: ", ";\n  height: ", ";\n  margin: ", ";\n  ", "\n"])), styles.backgroundColor || '#fff', styles.padding || '10px 40px', styles.width || '90%', styles.borderRadius || '10px', styles.height || 'auto', styles.margin || '0', styles.custom || '');
};
var OrderStep = exports.OrderStep = function OrderStep(_ref) {
  var use = _ref.use,
    useOrder = _ref.useOrder,
    siteOptions = _ref.siteOptions,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    _ref$contentStyles = _ref.contentStyles,
    contentStyles = _ref$contentStyles === void 0 ? {} : _ref$contentStyles,
    _ref$contentProps = _ref.contentProps,
    contentProps = _ref$contentProps === void 0 ? {} : _ref$contentProps;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var contentClassName = contentProps.className,
    restContentProps = (0, _objectWithoutProperties2["default"])(contentProps, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.PaymentHeader, {
    error: use.error.states.error,
    moduleName: "Modulo de entradas",
    stepName: "Pedidos en espera",
    step: "1",
    returnFunction: use.pages.actions.returnInit,
    returnTitle: "Inicio",
    nextTitle: "Creditos",
    nextFunction: use.subPagesDeposit.actions.onCredits
  }), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(orderStepContainerStyle(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(orderStepContentStyle(contentStyles), contentClassName)
  }, restContentProps), /*#__PURE__*/_react["default"].createElement(_Table.OrderPendingTable, {
    use: useOrder,
    siteOptions: siteOptions
  }))));
};