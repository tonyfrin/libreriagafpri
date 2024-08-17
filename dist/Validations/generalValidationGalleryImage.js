"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationGalleryImage = void 0;
var _index = require("./index");
var _constants = require("../constants");
var generalValidationGalleryImage = exports.generalValidationGalleryImage = function generalValidationGalleryImage(_ref) {
  var value = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var valid = (0, _index.validationInputArray)(value, /^(?:(?:[a-z][a-z0-9+-.]*):\/\/)?(?:[a-z0-9_-]+(?::[a-z0-9_-]+)*@)?(?:[a-z0-9.-]+|(?:\[[a-f0-9:.]+\]))(?::\d+)?(?:\/[^\s#?]*(?:\?[^\s#?]*)?(?:#[^\s#?]*)?)?$/i, "".concat(_constants.GALLERY_IMAGE_INPUT).concat(inputId), required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};