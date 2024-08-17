"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainFooter = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var footerStyles = function footerStyles(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  color: ", ";\n  position: ", ";\n  bottom: ", ";\n  left: ", ";\n  right: ", ";\n  z-index: ", ";\n"])), styles.backgroundColor || '#30679e', styles.color || '#ffffff', styles.position || 'fixed', styles.bottom || 0, styles.left || 0, styles.right || 0, styles.right || 996);
};
var footerDivStyles = function footerDivStyles() {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  padding: 10px 0;\n"])));
};
var footerPStyles = function footerPStyles() {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 300;\n  font-size: 12px;\n  margin: 0px;\n\n  @media (max-width: 750px) {\n    font-size: 10px;\n  }\n\n  @media (max-width: 750px) {\n    font-size: 10px;\n  }\n\n  @media (max-width: 500px) {\n    font-size: 6px;\n  }\n"])));
};
var footerSeparatorStyles = function footerSeparatorStyles() {
  return (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0 0.5em;\n  font-size: 12px;\n\n  @media (max-width: 600px) {\n    font-size: 10px;\n  }\n\n  @media (max-width: 500px) {\n    font-size: 6px;\n  }\n"])));
};
var footerOutStyles = function footerOutStyles() {
  return (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: pointer;\n  font-weight: 400;\n  font-size: 12px;\n  color: #fff;\n\n  @media (max-width: 600px) {\n    font-size: 10px;\n  }\n\n  @media (max-width: 500px) {\n    font-size: 6px;\n  }\n"])));
};
var MainFooter = exports.MainFooter = function MainFooter(_ref) {
  var _ref$footerClass = _ref.footerClass,
    footerClass = _ref$footerClass === void 0 ? '' : _ref$footerClass,
    _ref$footerDivClass = _ref.footerDivClass,
    footerDivClass = _ref$footerDivClass === void 0 ? '' : _ref$footerDivClass,
    _ref$footerPClass = _ref.footerPClass,
    footerPClass = _ref$footerPClass === void 0 ? '' : _ref$footerPClass,
    _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    isLogin = _ref.isLogin,
    _ref$year = _ref.year,
    year = _ref$year === void 0 ? '2023' : _ref$year,
    siteName = _ref.siteName,
    onLogOut = _ref.onLogOut;
  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: (0, _css.cx)(footerStyles(styles), footerClass)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(footerDivStyles(), footerDivClass)
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: (0, _css.cx)(footerPStyles(), footerPClass)
  }, "\xA9 Copyright ".concat(year, " ").concat(siteName, " - Todos los derechos reservados")), isLogin ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: footerSeparatorStyles()
  }, " / "), /*#__PURE__*/_react["default"].createElement("span", {
    onClick: onLogOut,
    className: footerOutStyles()
  }, "Salir")) : ''));
};