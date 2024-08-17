"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleCheckBox = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3;
var divSigleCheckStyle = function divSigleCheckStyle(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border-color: ", ";\n  border-radius: ", ";\n  border-style: ", ";\n  border-width: ", ";\n  box-sizing: ", ";\n  padding: ", ";\n  ", "\n"])), styles.borderColor || 'hsl(0, 0%, 80%)', styles.borderRadius || '4px', styles.borderStyle || 'solid', styles.borderWidth || '1px', styles.boxSizing || 'border-box', styles.padding || '10px', styles.customStyle || '');
};
var labelSingleChackStyle = function labelSingleChackStyle(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), styles.customStyle || '');
};
var spanSingleChackStyle = function spanSingleChackStyle(styles) {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), styles.customStyle || '');
};
var SingleCheckBox = exports.SingleCheckBox = function SingleCheckBox(_ref) {
  var selected = _ref.selected,
    title = _ref.title,
    onChange = _ref.onChange,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$itemStayles = _ref.itemStayles,
    itemStayles = _ref$itemStayles === void 0 ? {} : _ref$itemStayles,
    _ref$titleStyles = _ref.titleStyles,
    titleStyles = _ref$titleStyles === void 0 ? {} : _ref$titleStyles;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(divSigleCheckStyle(containerStyles))
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _css.cx)(labelSingleChackStyle(itemStayles))
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.cx)(spanSingleChackStyle(titleStyles))
  }, title), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    checked: selected,
    onChange: onChange
  })));
};