"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box1 = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject;
var Box1Styles = function Box1Styles(styles) {
  var _styles$media500Style, _styles$media500Style2, _styles$media400Style, _styles$media400Style2, _styles$media300Style, _styles$media300Style2;
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  transition: ", ";\n  background-color: ", ";\n  padding: ", ";\n  width: ", ";\n  border-radius: ", ";\n  height: ", ";\n  margin: ", ";\n\n  @media (max-width: 500px) {\n    padding: ", ";\n    width: ", ";\n  }\n\n  @media (max-width: 400px) {\n    padding: ", ";\n    width: ", ";\n  }\n\n  @media (max-width: 300px) {\n    padding: ", ";\n    width: ", ";\n  }\n"])), styles.transition || 'all 1s ease 0s', styles.backgroundColor || '#fff', styles.padding || '40px', styles.width || '70%', styles.borderRadius || '10px', styles.height || '63vh', styles.margin || '30px auto', ((_styles$media500Style = styles.media500Style) === null || _styles$media500Style === void 0 ? void 0 : _styles$media500Style.padding) || '15px 35px', ((_styles$media500Style2 = styles.media500Style) === null || _styles$media500Style2 === void 0 ? void 0 : _styles$media500Style2.width) || '75%', ((_styles$media400Style = styles.media400Style) === null || _styles$media400Style === void 0 ? void 0 : _styles$media400Style.padding) || '15px 35px', ((_styles$media400Style2 = styles.media400Style) === null || _styles$media400Style2 === void 0 ? void 0 : _styles$media400Style2.width) || '78%', ((_styles$media300Style = styles.media300Style) === null || _styles$media300Style === void 0 ? void 0 : _styles$media300Style.padding) || '15px 40px 15px 8px', ((_styles$media300Style2 = styles.media300Style) === null || _styles$media300Style2 === void 0 ? void 0 : _styles$media300Style2.width) || '80%');
};
var Box1 = exports.Box1 = function Box1(_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    children = _ref.children,
    _ref$Class = _ref.Class,
    Class = _ref$Class === void 0 ? '' : _ref$Class;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(Box1Styles(styles), Class)
  }, children);
};