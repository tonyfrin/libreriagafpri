"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject;
var ButtonStyles = function ButtonStyles(styles) {
  var _styles$media800Style, _styles$media750Style, _styles$media400Style, _styles$media300Style;
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  font-size: ", ";\n  border-radius: ", ";\n  padding: ", ";\n  user-select: ", ";\n  text-align: ", ";\n  text-decoration: ", ";\n  vertical-align: ", ";\n  display: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  color: ", ";\n  cursor: ", ";\n  box-shadow: ", ";\n  ", "\n  ", "\n\n  @media (max-width: 800px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 750px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n"])), styles.backgroundColor || 'rgb(7, 178, 231)', styles.fontSize || '16px', styles.borderRadius || '0.25rem', styles.padding || '0.375rem 0.75rem', styles.userSelect || 'none', styles.textAlign || 'center', styles.textDecoration || 'none', styles.verticalAlign || 'middle', styles.display || 'inline-block', styles.fontWeight || '400', styles.lineHeight || '1.5', styles.color || '#ffffff', styles.cursor || 'pointer', styles.boxShadow || '0 1px 6px 0 #20212447', styles.height ? "height: ".concat(styles.height, ";") : '', styles.margin ? "margin: ".concat(styles.margin, ";") : '', ((_styles$media800Style = styles.media800Style) === null || _styles$media800Style === void 0 ? void 0 : _styles$media800Style.fontSize) || '14px', ((_styles$media750Style = styles.media750Style) === null || _styles$media750Style === void 0 ? void 0 : _styles$media750Style.fontSize) || '12px', ((_styles$media400Style = styles.media400Style) === null || _styles$media400Style === void 0 ? void 0 : _styles$media400Style.fontSize) || '10px', ((_styles$media300Style = styles.media300Style) === null || _styles$media300Style === void 0 ? void 0 : _styles$media300Style.fontSize) || '8px');
};
var Button = exports.Button = function Button(_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    _ref$buttonProps = _ref.buttonProps,
    buttonProps = _ref$buttonProps === void 0 ? {} : _ref$buttonProps,
    _ref$Class = _ref.Class,
    Class = _ref$Class === void 0 ? '' : _ref$Class,
    title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
    className: (0, _css.cx)(ButtonStyles(styles), Class)
  }, buttonProps), title));
};