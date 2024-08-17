"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpanValue = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _excluded = ["className"];
var _templateObject;
var spanValueStylesContent = function spanValueStylesContent(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin: ", ";\n  ", "\n"])), styles.margin || 'auto', styles.custom || '');
};
var SpanValue = exports.SpanValue = function SpanValue(_ref) {
  var value = _ref.value,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
    className: (0, _css.cx)(spanValueStylesContent(containerStyles), containerClassName)
  }, restContainerProps), value);
};