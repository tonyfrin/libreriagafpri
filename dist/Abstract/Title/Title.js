"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title2 = exports.Title1 = exports.GloboTitle = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _helpers = require("../../helpers");
var _templateObject, _templateObject2, _templateObject3;
var Title1Styles = function Title1Styles(styles) {
  var _styles$media750Style, _styles$media400Style, _styles$media300Style;
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: ", ";\n  text-align: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin-bottom: ", ";\n  margin-top: ", ";\n  color: ", ";\n  line-height: ", ";\n\n  @media (max-width: 750px) {\n    font-size: ", ";\n    line-height: 1.5rem;\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 300px) {\n    font-size: ", ";\n  }\n"])), styles.fontFamily || '"Poppins", sans-serif', styles.textAlign || 'left', styles.fontSize || '28px', styles.fontWeight || '700', styles.marginBottom || '5px', styles.marginTop || '0px', styles.color || 'rgb(38, 35, 33)', styles.lineHeight || '2.5rem', ((_styles$media750Style = styles.media750Style) === null || _styles$media750Style === void 0 ? void 0 : _styles$media750Style.fontSize) || '20px', ((_styles$media400Style = styles.media400Style) === null || _styles$media400Style === void 0 ? void 0 : _styles$media400Style.fontSize) || '18px', ((_styles$media300Style = styles.media300Style) === null || _styles$media300Style === void 0 ? void 0 : _styles$media300Style.fontSize) || '16px');
};
var Title1 = exports.Title1 = function Title1(_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement("h1", {
    className: Title1Styles(styles)
  }, (0, _helpers.toTitleCase)(title));
};
var Title2Styles = function Title2Styles(styles) {
  var _styles$media750Style2, _styles$media400Style2, _styles$media300Style2;
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: ", ";\n  font-size: ", ";\n  ", "\n  font-weight: ", ";\n  margin: ", ";\n  color: ", ";\n  line-height: ", ";\n\n  @media (max-width: 750px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 300px) {\n    font-size: ", ";\n  }\n"])), styles.fontFamily || '"Poppins", sans-serif', styles.fontSize || '18px', styles.textTransform ? "text-transform: ".concat(styles.textTransform, ";") : '', styles.fontWeight || '400', styles.margin || '0px 0px 10px 0px', styles.color || 'rgb(38, 35, 33)', styles.lineHeight || '1.5rem', ((_styles$media750Style2 = styles.media750Style) === null || _styles$media750Style2 === void 0 ? void 0 : _styles$media750Style2.fontSize) || '14px', ((_styles$media400Style2 = styles.media400Style) === null || _styles$media400Style2 === void 0 ? void 0 : _styles$media400Style2.fontSize) || '12px', ((_styles$media300Style2 = styles.media300Style) === null || _styles$media300Style2 === void 0 ? void 0 : _styles$media300Style2.fontSize) || '10px');
};
var Title2 = exports.Title2 = function Title2(_ref2) {
  var _ref2$styles = _ref2.styles,
    styles = _ref2$styles === void 0 ? {} : _ref2$styles,
    title = _ref2.title;
  return /*#__PURE__*/_react["default"].createElement("h1", {
    className: Title2Styles(styles)
  }, (0, _helpers.toTitleCase)(title));
};
var GloboTitleStyles = function GloboTitleStyles(styles) {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"])), styles.margin || 'auto 0px', styles.fontSize || '20px', styles.fontWeight || '800');
};
var GloboTitle = exports.GloboTitle = function GloboTitle(_ref3) {
  var _ref3$styles = _ref3.styles,
    styles = _ref3$styles === void 0 ? {} : _ref3$styles,
    title = _ref3.title,
    _ref3$globoTitleClass = _ref3.globoTitleClass,
    globoTitleClass = _ref3$globoTitleClass === void 0 ? '' : _ref3$globoTitleClass;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.cx)(GloboTitleStyles(styles), globoTitleClass)
  }, title));
};