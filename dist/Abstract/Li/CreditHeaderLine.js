"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreditHeaderLine = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2;
var creditHeaderLineContainerStyles = function creditHeaderLineContainerStyles(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  margin: ", ";\n  border-radius: ", ";\n  padding: ", ";\n  ", "\n"])), styles.backgroundColor || '#eaeaea', styles.margin || '1%', styles.borderRadius || '5px', styles.padding || '1%', styles.custom);
};
var creditHeaderLineColStyles = function creditHeaderLineColStyles(width, custom) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  text-align: center;\n  width: ", ";\n  ", ";\n"])), width, custom || '');
};
var CreditHeaderLine = exports.CreditHeaderLine = function CreditHeaderLine(_ref) {
  var col1 = _ref.col1,
    col2 = _ref.col2,
    col3 = _ref.col3,
    col4 = _ref.col4,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(creditHeaderLineContainerStyles(containerStyles))
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.cx)(creditHeaderLineColStyles('0.1666666666%'))
  }, col1), /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.cx)(creditHeaderLineColStyles('50%'))
  }, col2), /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.cx)(creditHeaderLineColStyles('25%'))
  }, col3), /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.cx)(creditHeaderLineColStyles('0.0833333333%'))
  }, col4));
};