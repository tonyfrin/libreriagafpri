"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesCheckBox = void 0;
var _react = _interopRequireDefault(require("react"));
var _CheckBox = require("./CheckBox");
var CategoriesCheckBox = exports.CategoriesCheckBox = function CategoriesCheckBox(_ref) {
  var categoriesData = _ref.categoriesData,
    selectedCategoryId = _ref.selectedCategoryId,
    change = _ref.change;
  return /*#__PURE__*/_react["default"].createElement("div", null, categoriesData.map(function (category) {
    return /*#__PURE__*/_react["default"].createElement(_CheckBox.CheckBox, {
      key: category.id,
      category: category,
      selectedCategoryId: selectedCategoryId,
      onCategoryChange: change
    });
  }));
};