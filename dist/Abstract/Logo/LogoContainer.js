"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoContainer = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("react"));
var _css = require("@emotion/css");
var _excluded = ["image", "sectionClass", "divClass", "imgClass", "styleSection", "styleContainer", "styleImage"];
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var sectionStyles = function sectionStyles(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  margin: ", ";\n  padding: ", ";\n"])), styles.display || 'flex', styles.margin || '0', styles.padding || '1em');
};
var containerStyles = function containerStyles(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  margin: ", ";\n  text-align: ", ";\n"])), styles.width || '100%', styles.margin || '0 auto', styles.textAlign || 'center');
};
var imgStayle = function imgStayle(styles) {
  var _styles$media600Style, _styles$media600Style2, _styles$media300Style;
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: ", ";\n  margin-bottom: ", ";\n  max-width: ", ";\n\n  @media (max-width: 600px) {\n    margin-top: ", ";\n    max-width: ", ";\n  }\n\n  @media (max-width: 300px) {\n    max-width: ", ";\n  }\n"])), styles.marginTop || '10px', styles.marginBottom || '10px', styles.maxWidth || '150px', ((_styles$media600Style = styles.media600Style) === null || _styles$media600Style === void 0 ? void 0 : _styles$media600Style.marginTop) || '5px', ((_styles$media600Style2 = styles.media600Style) === null || _styles$media600Style2 === void 0 ? void 0 : _styles$media600Style2.maxWidth) || '130px', ((_styles$media300Style = styles.media300Style) === null || _styles$media300Style === void 0 ? void 0 : _styles$media300Style.maxWidth) || '120px');
};
var LogoContainer = exports.LogoContainer = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var image = props.image,
    _props$sectionClass = props.sectionClass,
    sectionClass = _props$sectionClass === void 0 ? '' : _props$sectionClass,
    _props$divClass = props.divClass,
    divClass = _props$divClass === void 0 ? '' : _props$divClass,
    _props$imgClass = props.imgClass,
    imgClass = _props$imgClass === void 0 ? '' : _props$imgClass,
    _props$styleSection = props.styleSection,
    styleSection = _props$styleSection === void 0 ? {} : _props$styleSection,
    _props$styleContainer = props.styleContainer,
    styleContainer = _props$styleContainer === void 0 ? {} : _props$styleContainer,
    _props$styleImage = props.styleImage,
    styleImage = _props$styleImage === void 0 ? {} : _props$styleImage,
    imgProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: (0, _css.cx)(sectionStyles(styleSection), sectionClass)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(containerStyles(styleContainer), divClass)
  }, /*#__PURE__*/_react["default"].createElement("img", (0, _extends2["default"])({
    src: image
  }, imgProps, {
    className: (0, _css.cx)(imgStayle(styleImage), imgClass),
    ref: ref,
    alt: "logo",
    role: "logo"
  }))));
});