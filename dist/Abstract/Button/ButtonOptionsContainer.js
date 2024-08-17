"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonOptionsContainer = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _Button = require("./Button");
var _css = require("@emotion/css");
var _templateObject;
var containerStaylesDefault = function containerStaylesDefault(stayles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  justify-content: ", ";\n  width: ", ";\n  ", "\n"])), (stayles === null || stayles === void 0 ? void 0 : stayles.display) || 'flex', (stayles === null || stayles === void 0 ? void 0 : stayles.justifyContent) || 'space-evenly', (stayles === null || stayles === void 0 ? void 0 : stayles.justifyContent) || '100%', (stayles === null || stayles === void 0 ? void 0 : stayles.customStyles) || '');
};
var ButtonOptionsContainer = exports.ButtonOptionsContainer = function ButtonOptionsContainer(_ref) {
  var props = _ref.props,
    _ref$containerStayles = _ref.containerStayles,
    containerStayles = _ref$containerStayles === void 0 ? {} : _ref$containerStayles;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(containerStaylesDefault(containerStayles))
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, props)));
};