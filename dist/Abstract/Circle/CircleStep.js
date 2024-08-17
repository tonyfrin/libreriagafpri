"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircleStep = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Title = require("../Title");
var _Containers = require("../Containers");
var _excluded = ["className"];
var _templateObject;
var circleContentStyle = function circleContentStyle(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n  display: ", ";\n  justify-content: ", ";\n  align-content: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  padding: ", ";\n  flex-wrap: ", ";\n  margin-right: ", ";\n  ", "\n"])), styles.width || '40px', styles.height || '40px', styles.fontSize || '30px', styles.display || 'flex', styles.justifyContent || 'center', styles.alignContent || 'center', styles.backgroundColor || '#324375', styles.borderRadius || '100%', styles.color || '#ffffff', styles.padding || '5px', styles.flexWrap || 'wrap', styles.marginRight || '10px', styles.custom);
};
var CircleStep = exports.CircleStep = function CircleStep(_ref) {
  var step = _ref.step,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'Paso' : _ref$title,
    _ref$circleStyle = _ref.circleStyle,
    circleStyle = _ref$circleStyle === void 0 ? {} : _ref$circleStyle,
    _ref$circleProps = _ref.circleProps,
    circleProps = _ref$circleProps === void 0 ? {} : _ref$circleProps,
    _ref$titleStyle = _ref.titleStyle,
    titleStyle = _ref$titleStyle === void 0 ? {
      marginTop: 'auto',
      marginBottom: 'auto',
      fontSize: '30px'
    } : _ref$titleStyle;
  var circleClassName = circleProps.className,
    restCircleProps = (0, _objectWithoutProperties2["default"])(circleProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      custom: "\n                    margin: 20px 0px;\n                    padding-left: 5%;\n                    "
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
    className: (0, _css.cx)(circleContentStyle(circleStyle), circleClassName)
  }, restCircleProps), step), /*#__PURE__*/_react["default"].createElement(_Title.Title1, {
    title: title,
    styles: titleStyle
  }))));
};