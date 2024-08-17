"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2;
var divStyle = function divStyle(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: ", ";\n  margin-left: ", ";\n  margin-bottom: ", ";\n  color: ", ";\n  ", "\n"])), styles.marginTop || '10px', styles.marginLeft || '20px', styles.marginBottom || '10px', styles.color || '#8D8D8D', styles.customStyle || '');
};
var labelStyle = function labelStyle(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: ", ";\n  margin-bottom: ", ";\n  ", "\n"])), styles.marginTop || '5px', styles.marginBottom || '5px', styles.customStyle || '');
};
var _CheckBox = exports.CheckBox = function CheckBox(_ref) {
  var category = _ref.category,
    selectedCategoryId = _ref.selectedCategoryId,
    onCategoryChange = _ref.onCategoryChange,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$itemStayles = _ref.itemStayles,
    itemStayles = _ref$itemStayles === void 0 ? {} : _ref$itemStayles;
  var isChecked = "".concat(selectedCategoryId) === "".concat(category.id);
  var handleCheckboxChange = function handleCheckboxChange() {
    onCategoryChange(category.id);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(divStyle(containerStyles))
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _css.cx)(labelStyle(itemStayles))
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    checked: isChecked,
    onChange: handleCheckboxChange
  }), category.name), category.children && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(divStyle(containerStyles))
  }, category.children.map(function (child) {
    return /*#__PURE__*/_react["default"].createElement(_CheckBox, {
      key: child.id,
      category: child,
      selectedCategoryId: selectedCategoryId,
      onCategoryChange: onCategoryChange
    });
  })));
};