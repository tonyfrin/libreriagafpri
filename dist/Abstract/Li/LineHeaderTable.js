"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineHeaderTable = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _excluded = ["className"],
  _excluded2 = ["className"];
var _templateObject, _templateObject2;
var lineHeaderTableStylesContainer = function lineHeaderTableStylesContainer(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  vertical-align: ", ";\n  border: ", ";\n  border-color: ", ";\n  ", "\n"])), styles.verticalAlign || 'bottom', styles.border || '0 solid', styles.borderColor || 'inherit', styles.custom || '');
};
var lineHeaderTableStylesContent = function lineHeaderTableStylesContent(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), styles.custom || '');
};
var LineHeaderTable = exports.LineHeaderTable = function LineHeaderTable(_ref) {
  var _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    children = _ref.children,
    _ref$contentProps = _ref.contentProps,
    contentProps = _ref$contentProps === void 0 ? {} : _ref$contentProps,
    _ref$contentStyles = _ref.contentStyles,
    contentStyles = _ref$contentStyles === void 0 ? {} : _ref$contentStyles;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var contentClassName = contentProps.className,
    restContentProps = (0, _objectWithoutProperties2["default"])(contentProps, _excluded2);
  return /*#__PURE__*/_react["default"].createElement("thead", (0, _extends2["default"])({
    className: (0, _css.cx)(lineHeaderTableStylesContainer(containerStyles))
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement("tr", (0, _extends2["default"])({
    className: (0, _css.cx)(lineHeaderTableStylesContent(contentStyles), contentClassName)
  }, restContentProps), children));
};