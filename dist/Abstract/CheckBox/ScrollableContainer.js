"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollableContainer = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2;
var scrollableContainerStyle = function scrollableContainerStyle(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  max-height: ", ";\n  max-width: ", ";\n  overflow-y: ", ";\n  border: ", ";\n  border-radius: ", ";\n  padding: ", ";\n  margin: ", ";\n  ", "\n"])), styles.maxWidth || '100px', styles.maxWidth || '310px', styles.overflowY || 'auto', styles.border || '1px solid #ccc', styles.borderRadius || '4px', styles.padding || '20px', styles.margin || '0px 20px 20px 20px', styles.customStyle || '');
};
var SpanStyles1 = function SpanStyles1(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  color: ", ";\n  padding-left: ", ";\n  ", "\n"])), (styles === null || styles === void 0 ? void 0 : styles.fontSize) || 'x-small', (styles === null || styles === void 0 ? void 0 : styles.color) || '#8d8d8d', (styles === null || styles === void 0 ? void 0 : styles.paddingLeft) || '20px', styles.props || '');
};
var ScrollableContainer = exports.ScrollableContainer = function ScrollableContainer(_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    children = _ref.children,
    title = _ref.title,
    _ref$stylesSpan = _ref.stylesSpan,
    stylesSpan = _ref$stylesSpan === void 0 ? {} : _ref$stylesSpan;
  return /*#__PURE__*/_react["default"].createElement("div", null, title ? /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.cx)(SpanStyles1(stylesSpan))
  }, title) : '', /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(scrollableContainerStyle(styles))
  }, children));
};