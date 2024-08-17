"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainContent = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject;
var defaultMainContainerStyle = function defaultMainContainerStyle(isOpen) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: ", ";\n  transition: margin-left 0.3s ease;\n  margin-top: 59px;\n"])), isOpen ? '250px' : '50px');
};
var MainContent = exports.MainContent = function MainContent(_ref) {
  var isOpen = _ref.isOpen,
    children = _ref.children,
    _ref$mainContainerSty = _ref.mainContainerStyle,
    mainContainerStyle = _ref$mainContainerSty === void 0 ? defaultMainContainerStyle(isOpen) : _ref$mainContainerSty;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(mainContainerStyle)
  }, children);
};