"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Globo = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject;
var GloboStyles = function GloboStyles(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  height: ", ";\n  padding: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-weight: ", ";\n  margin: ", ";\n  font-size: ", ";\n"])), styles.width || '30px', styles.height || '30px', styles.padding || '5px 15px', styles.backgroundColor || '#324375', styles.borderRadius || '100%', styles.color || '#ffffff', styles.fontWeight || '800', styles.margin || '2% 2% 2% 6%', styles.fontSize || '20px');
};
var Globo = exports.Globo = function Globo(_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    step = _ref.step,
    _ref$globoClass = _ref.globoClass,
    globoClass = _ref$globoClass === void 0 ? '' : _ref$globoClass;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.cx)(GloboStyles(styles), globoClass)
  }, step));
};