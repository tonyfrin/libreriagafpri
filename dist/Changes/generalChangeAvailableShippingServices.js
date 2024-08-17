"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeAvailableShippingServices = void 0;
var _helpers = require("../helpers");
var generalChangeAvailableShippingServices = exports.generalChangeAvailableShippingServices = function generalChangeAvailableShippingServices(_ref) {
  var newValue = _ref.newValue,
    validation = _ref.validation,
    setDefault = _ref.setDefault,
    setValue = _ref.setValue;
  (0, _helpers.changeSelect)({
    newValue: newValue,
    validation: validation || function () {
      return true;
    },
    setDefault: setDefault,
    setValue: setValue
  });
};