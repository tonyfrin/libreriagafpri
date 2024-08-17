"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputCart = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _excluded = ["className", "type", "min", "step"];
var _templateObject;
var inputCartStylesContent = function inputCartStylesContent(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  padding: ", ";\n  width: ", ";\n  border: ", ";\n  text-align: ", ";\n  outline: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  font-weight: ", ";\n  color: ", ";\n  ", "\n"])), styles.fontSize || '12px', styles.padding || '5px 5px 5px 10px', styles.width || '50px', styles.border || '2px solid #eaeaea', styles.textAlign || 'left', styles.outline || '0', styles.borderRadius || '6px', styles.backgroundColor || '#fff', styles.fontWeight || '300', styles.color || '#8D8D8D', styles.custom || '');
};
var InputCart = exports.InputCart = function InputCart(_ref) {
  var _ref$contentStyles = _ref.contentStyles,
    contentStyles = _ref$contentStyles === void 0 ? {} : _ref$contentStyles,
    _ref$contentProps = _ref.contentProps,
    contentProps = _ref$contentProps === void 0 ? {} : _ref$contentProps;
  var contentClassName = contentProps.className,
    contentType = contentProps.type,
    contentMin = contentProps.min,
    contentStep = contentProps.step,
    restContentProps = (0, _objectWithoutProperties2["default"])(contentProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    className: (0, _css.cx)(inputCartStylesContent(contentStyles), contentClassName),
    type: contentType || 'number',
    min: contentMin || '0',
    step: contentStep || '1'
  }, restContentProps)));
};