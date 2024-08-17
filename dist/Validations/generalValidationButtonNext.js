"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationButtonNext = void 0;
var _helpers = require("../helpers");
var _constants = require("../constants");
var generalValidationButtonNext = exports.generalValidationButtonNext = function generalValidationButtonNext(_ref) {
  var validations = _ref.validations,
    inputId = _ref.inputId;
  var isAllValid = validations.every(function (validation) {
    return validation;
  });
  if (isAllValid) {
    (0, _helpers.removeClass)("".concat(_constants.BUTTON_NEXT_INPUT).concat(inputId), _constants.DISABLED);
  } else {
    (0, _helpers.addClass)("".concat(_constants.BUTTON_NEXT_INPUT).concat(inputId), _constants.DISABLED);
  }
  return isAllValid;
};