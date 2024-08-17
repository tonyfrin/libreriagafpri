"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Containers = require("../Containers");
var _templateObject, _templateObject2;
var ParagraphStyles = function ParagraphStyles(styles) {
  var _styles$media750Style, _styles$media400Style, _styles$media300Style;
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  ", ";\n  border: ", ";\n  padding: ", ";\n  text-align: ", ";\n  outline: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", void 0, ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 300px) {\n    font-size: ", ";\n  }\n"], ["\n  width: ", ";\n  ", ";\n  border: ", ";\n  padding: ", ";\n  text-align: ", ";\n  outline: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  box-sizing: border-box;\n  display: inline-block; /* Alinea el p\xE1rrafo en l\xEDnea con el span */\n\n  ::before {\n    content: '\\00a0'; /* A\xF1ade un espacio no rompible antes del contenido */\n  }\n\n  ::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n\n  @media (max-width: 750px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 300px) {\n    font-size: ", ";\n  }\n"])), styles.width || '100%', styles.height ? "height: ".concat(styles.height, ";") : '', styles.border || '2px solid #eaeaea', styles.padding || '8px 19px', styles.textAlign || 'left', styles.outline || 0, styles.borderRadius || '6px', styles.backgroundColor || '#fff', styles.fontSize || '15px', styles.fontWeight || 300, styles.color || '#8D8D8D', ((_styles$media750Style = styles.media750Style) === null || _styles$media750Style === void 0 ? void 0 : _styles$media750Style.fontSize) || '12px', ((_styles$media400Style = styles.media400Style) === null || _styles$media400Style === void 0 ? void 0 : _styles$media400Style.fontSize) || '10px', ((_styles$media300Style = styles.media300Style) === null || _styles$media300Style === void 0 ? void 0 : _styles$media300Style.fontSize) || '8px');
};
var SpanStyles = function SpanStyles(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  color: ", ";\n  padding-left: ", ";\n  ", "\n"])), (styles === null || styles === void 0 ? void 0 : styles.fontSize) || 'x-small', (styles === null || styles === void 0 ? void 0 : styles.color) || '#8d8d8d', (styles === null || styles === void 0 ? void 0 : styles.paddingLeft) || '5px', styles.props || '');
};
var Paragraph = exports.Paragraph = function Paragraph(_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    _ref$stylesSpan = _ref.stylesSpan,
    stylesSpan = _ref$stylesSpan === void 0 ? {} : _ref$stylesSpan,
    _ref$paragraphClass = _ref.paragraphClass,
    paragraphClass = _ref$paragraphClass === void 0 ? '' : _ref$paragraphClass,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerClass = _ref.containerClass,
    containerClass = _ref$containerClass === void 0 ? '' : _ref$containerClass,
    _ref$inputProps = _ref.inputProps,
    inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps,
    onChange = _ref.onChange;
  var handleClick = function handleClick(event) {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Containers.ContainerInput, {
    styles: containerStyles,
    containerClass: containerClass
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.cx)(SpanStyles(stylesSpan))
  }, inputProps === null || inputProps === void 0 ? void 0 : inputProps.title), /*#__PURE__*/_react["default"].createElement("textarea", (0, _extends2["default"])({
    className: (0, _css.cx)(ParagraphStyles(styles), paragraphClass),
    onChange: handleClick,
    placeholder: "Escribe tu post aqu\xED...",
    rows: 10
  }, inputProps)))));
};