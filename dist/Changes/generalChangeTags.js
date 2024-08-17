"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeTags = void 0;
var _helpers = require("../helpers");
var generalChangeTags = exports.generalChangeTags = function generalChangeTags(_ref) {
  var value = _ref.value,
    validation = _ref.validation,
    tags = _ref.tags,
    setValue = _ref.setValue,
    setSelectedValue = _ref.setSelectedValue;
  var defaultValidation = function defaultValidation() {
    return true;
  };
  (0, _helpers.changeMultipleArrayStringInput)({
    newValue: value,
    selectedOptions: tags,
    validation: validation || defaultValidation,
    setValue: setValue,
    setSelectedValue: setSelectedValue
  });
};