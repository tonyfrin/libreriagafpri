"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3;
var mainStyle = function mainStyle(styles) {
  var _styles$media600Style, _styles$media300Style;
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  justify-content: ", ";\n  padding: ", ";\n  ", "\n\n  @media (max-width: 600px) {\n    padding: ", ";\n  }\n\n  @media (max-width: 300px) {\n    padding: ", ";\n  }\n"])), styles.display || 'flex', styles.justifyContent || 'center', styles.padding || '170px', styles.custom || '', ((_styles$media600Style = styles.media600Style) === null || _styles$media600Style === void 0 ? void 0 : _styles$media600Style.padding) || '130px', ((_styles$media300Style = styles.media300Style) === null || _styles$media300Style === void 0 ? void 0 : _styles$media300Style.padding) || '90px');
};
var spin = (0, _css.keyframes)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n"])));
var divStyles = function divStyles(styles) {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  animation: ", " ", ";\n  border: ", ";\n  border-top: ", ";\n  border-radius: ", ";\n  width: ", ";\n  height: ", ";\n"])), spin, styles.animation || '2s linear infinite', styles.border || '6px solid #eee', styles.borderTop || '6px solid #077bb4', styles.borderRadius || '50%', styles.width || '80px', styles.height || '80px');
};
var Loading = exports.Loading = function Loading(_ref) {
  var _ref$mainStyles = _ref.mainStyles,
    mainStyles = _ref$mainStyles === void 0 ? {} : _ref$mainStyles,
    _ref$classMain = _ref.classMain,
    classMain = _ref$classMain === void 0 ? '' : _ref$classMain,
    _ref$classDiv = _ref.classDiv,
    classDiv = _ref$classDiv === void 0 ? '' : _ref$classDiv,
    _ref$divStyle = _ref.divStyle,
    divStyle = _ref$divStyle === void 0 ? {} : _ref$divStyle;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("main", {
    className: (0, _css.cx)(mainStyle(mainStyles), classMain)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(divStyles(divStyle), classDiv)
  })));
};