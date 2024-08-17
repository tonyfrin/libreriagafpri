"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginHeader = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Logo = require("../../Abstract/Logo");
var _excluded = ["image", "headerClass"];
var _templateObject;
var headerStyles = function headerStyles(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  width: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styles.background || 'linear-gradient(to left, #324375, #07b2e7)', styles.width || '100%', styles.position && "position: ".concat(styles.position, ";"), styles.zIndex && "z-index: ".concat(styles.zIndex, ";"), styles.height && "height: ".concat(styles.height, ";"), styles.top && "top: ".concat(styles.top, ";"));
};
var LoginHeader = exports.LoginHeader = function LoginHeader(_ref) {
  var props = _ref.props,
    _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles;
  var image = props.image,
    _props$headerClass = props.headerClass,
    headerClass = _props$headerClass === void 0 ? '' : _props$headerClass,
    imgProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: (0, _css.cx)(headerStyles(styles), headerClass)
  }, /*#__PURE__*/_react["default"].createElement(_Logo.LogoContainer, (0, _extends2["default"])({
    image: image
  }, imgProps)));
};