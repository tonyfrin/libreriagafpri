"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3;
var paginaOpcionesStyles = function paginaOpcionesStyles(open) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: ", ";\n  visibility: ", ";\n  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out,\n    transform 0.5s ease-in-out;\n  transform: translateX(", ");\n"])), open ? 1 : 0, open ? 'visible' : 'hidden', open ? 0 : '-100%');
};
var contentStyles = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 20px;\n  width: 60%;\n  max-height: 80vh;\n  overflow-y: auto;\n"])));
var buttonStyles = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: 87px;\n  transform: translateY(-50%);\n  right: -49%;\n  cursor: pointer;\n  color: #fff;\n  background-color: #c12429;\n  border-radius: 100%;\n  padding: 6px 7px 6px 8px;\n  font-size: 13px;\n"])));
var Modal = exports.Modal = function Modal(_ref) {
  var children = _ref.children,
    open = _ref.open,
    onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(paginaOpcionesStyles(open))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(contentStyles)
  }, children, onClose ? /*#__PURE__*/_react["default"].createElement("button", {
    className: (0, _css.cx)(buttonStyles),
    onClick: onClose
  }, "X") : '')));
};