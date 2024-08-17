"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleTable = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _excluded = ["className"],
  _excluded2 = ["className"];
var _templateObject, _templateObject2;
var simpleTableStylesContainer = function simpleTableStylesContainer(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding: ", ";\n  margin: ", ";\n  width: ", ";\n  ", "\n"])), styles.padding || '0px', styles.margin || '10px 0px', styles.width || '100%', styles.custom || '');
};
var simpleTableStylesContent = function simpleTableStylesContent(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  margin-bottom: ", ";\n  border-color: ", ";\n  text-align: ", ";\n  font-size: ", ";\n  border-top: ", ";\n  border-bottom: ", ";\n  ", "\n"])), styles.width || '100%', styles.marginBotton || '1rem', styles.borderColor || '#dee2e6', styles.textAlign || 'center', styles.fontSize || '12px', styles.borderTop || '1px solid #dee2e6', styles.borderBottom || '1px solid #dee2e6', styles.custom || '');
};
var SimpleTable = exports.SimpleTable = function SimpleTable(_ref) {
  var header = _ref.header,
    body = _ref.body,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$contentStyles = _ref.contentStyles,
    contentStyles = _ref$contentStyles === void 0 ? {} : _ref$contentStyles,
    _ref$contentProps = _ref.contentProps,
    contentProps = _ref$contentProps === void 0 ? {} : _ref$contentProps;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var contentClassName = contentProps.className,
    restContentProps = (0, _objectWithoutProperties2["default"])(contentProps, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(simpleTableStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement("table", (0, _extends2["default"])({
    className: (0, _css.cx)(simpleTableStylesContent(contentStyles), contentClassName)
  }, restContentProps), header, body)));
};