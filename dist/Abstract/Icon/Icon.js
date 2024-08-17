"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var iconContainerStyle = function iconContainerStyle(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  box-sizing: ", ";\n  position: ", ";\n  transition: ", ";\n  cursor: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  border-width: ", ";\n  border-color: ", ";\n  border-style: ", ";\n  padding: ", ";\n  margin: ", ";\n  flex: ", ";\n  background: ", ";\n  font-size: ", ";\n  vertical-align: ", ";\n  border-spacing: ", ";\n  border-collapse: ", ";\n  &:hover {\n    background-color: #06b0e433;\n    color: #ffff;\n  }\n  ", "\n"])), styles.boxSizing || 'border-box', styles.position || 'relative', styles.transition || 'all 200ms ease 0s', styles.cursor || 'pointer', styles.backgroundColor || 'rgb(255, 255, 255)', styles.borderRadius || '0.5rem', styles.borderWidth || '1px', styles.borderColor || 'rgb(227, 223, 218)', styles.borderStyle || 'solid', styles.padding || '1rem', styles.margin || '0px', styles.flex || '1 1 0%', styles.background || 'transparent', styles.fontSize || '100%', styles.verticalAlign || 'top', styles.borderSpacing || '0', styles.borderCollapse || 'collapse', styles.custom || '');
};
var iconContentStyle = function iconContentStyle(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-transform: ", ";\n  background-color: ", ";\n  overflow: ", ";\n  text-align: ", ";\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  font-size: ", ";\n  display: ", ";\n  vertical-align: ", ";\n  margin: ", ";\n  padding: ", ";\n  border: ", ";\n  border-spacing: ", ";\n  border-collapse: ", ";\n  ", "\n"])), styles.fontFamily || '"Poppins", sans-serif', styles.fontWeight || '100', styles.color || 'rgb(50, 79, 165)', styles.textTransform || 'uppercase', styles.backgroundColor || 'rgb(232, 239, 250)', styles.overflow || 'hidden', styles.textAlign || 'center', styles.width || '3rem', styles.height || '3rem', styles.borderRadius || '70% 52% 72%', styles.fontSize || '1.5rem', styles.display || 'inline-block', styles.verticalAlign || 'middle', styles.margin || '0.5rem', styles.padding || '0', styles.border || '0', styles.borderSpacing || '0', styles.borderCollapse || 'collapse', styles.custom || '');
};
var iconContentContainerStyle = function iconContentContainerStyle(styles) {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  height: ", ";\n  width: ", ";\n  background: ", ";\n  font-size: ", ";\n  margin: ", ";\n  padding: ", ";\n  border: ", ";\n  vertical-align: ", ";\n  border-spacing: ", ";\n  border-collapse: ", ";\n  ", "\n"])), styles.display || 'flex', styles.justifyContent || 'center', styles.alignItems || 'center', styles.height || '100%', styles.width || '100%', styles.background || 'transparent', styles.fontSize || '100%', styles.margin || '0', styles.padding || '0', styles.border || '0', styles.verticalAlign || 'top', styles.borderSpacing || '0', styles.borderCollapse || 'collapse', styles.custom || '');
};
var iconContentIconStyle = function iconContentIconStyle(styles) {
  return (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  vertical-align: ", ";\n  display: ", ";\n  font-style: ", ";\n  font-variant: ", ";\n  font-weight: ", ";\n  ", "\n"])), styles.verticalAlign || 'middle', styles.display || 'inline-block', styles.fontStyle || 'normal', styles.fontVariant || 'normal', styles.fontWeight || 'normal', styles.custom || '');
};
var iconContentTitleContainer = function iconContentTitleContainer(styles) {
  return (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  vertical-align: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n  display: ", ";\n  background: ", ";\n  font-size: ", ";\n  margin: ", ";\n  padding: ", ";\n  border: ", ";\n  border-spacing: ", ";\n  border-collapse: ", ";\n  ", "\n"])), styles.verticalAlign || 'middle', styles.marginLeft || '0.5rem', styles.marginRight || '0.5rem', styles.display || 'block', styles.background || 'transparent', styles.fontSize || '100%', styles.margin || '0', styles.padding || '0', styles.border || '0', styles.borderSpacing || '0', styles.borderCollapse || 'collapse', styles.custom || '');
};
var iconContentTitleStyle = function iconContentTitleStyle(styles) {
  return (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n  margin: ", ";\n  padding: ", ";\n  border: ", ";\n  vertical-align: ", ";\n  border-spacing: ", ";\n  border-collapse: ", ";\n  background: ", ";\n  ", "\n"])), styles.fontFamily || "\"Poppins\", sans-serif", styles.fontWeight || '800', styles.fontSize || '1em', styles.color || 'rgb(38, 35, 33)', styles.margin || '0', styles.padding || '0', styles.border || '0', styles.verticalAlign || 'top', styles.borderSpacing || '0', styles.borderCollapse || 'collapse', styles.background || 'transparent', styles.custom || '');
};
var Icon = exports.Icon = function Icon(_ref) {
  var item = _ref.item,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$contentStyle = _ref.contentStyle,
    contentStyle = _ref$contentStyle === void 0 ? {} : _ref$contentStyle,
    _ref$contentContainer = _ref.contentContainerStyle,
    contentContainerStyle = _ref$contentContainer === void 0 ? {} : _ref$contentContainer,
    _ref$contentIconStyle = _ref.contentIconStyle,
    contentIconStyle = _ref$contentIconStyle === void 0 ? {} : _ref$contentIconStyle,
    _ref$contentTitleCont = _ref.contentTitleContainerStyle,
    contentTitleContainerStyle = _ref$contentTitleCont === void 0 ? {} : _ref$contentTitleCont,
    _ref$contentTitleStyl = _ref.contentTitleStyle,
    contentTitleStyle = _ref$contentTitleStyl === void 0 ? {} : _ref$contentTitleStyl;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    key: item.id,
    className: (0, _css.cx)(iconContainerStyle(containerStyles)),
    onClick: item.onClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(iconContentStyle(contentStyle))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(iconContentContainerStyle(contentContainerStyle))
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.cx)(iconContentIconStyle(contentIconStyle))
  }, /*#__PURE__*/_react["default"].createElement(item.icon, null)))), item.label && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(iconContentTitleContainer(contentTitleContainerStyle))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(iconContentTitleStyle(contentTitleStyle))
  }, item.label))));
};