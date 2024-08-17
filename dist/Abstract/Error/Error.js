"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Error = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2;
var defaultMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 70%;\n  margin: auto;\n"])));
var defaultTextStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #c12429;\n  border-radius: 20px;\n  text-align: center;\n  padding: 5px;\n  color: white;\n  font-weight: 400;\n  margin: 1px;\n"])));
var Error = exports.Error = function Error(_ref) {
  var error = _ref.error,
    _ref$mainContainerSty = _ref.mainContainerStyle,
    mainContainerStyle = _ref$mainContainerSty === void 0 ? defaultMainContainerStyle : _ref$mainContainerSty,
    _ref$textStyle = _ref.textStyle,
    textStyle = _ref$textStyle === void 0 ? defaultTextStyle : _ref$textStyle;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, error && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(mainContainerStyle)
  }, error.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      className: (0, _css.css)(textStyle),
      key: "error-".concat(index)
    }, item);
  })));
};