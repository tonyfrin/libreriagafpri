"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeRegion = void 0;
var _helpers = require("../helpers");
var generalChangeRegion = exports.generalChangeRegion = function generalChangeRegion(_ref) {
  var options = _ref.options,
    validation = _ref.validation,
    region = _ref.region,
    setValue = _ref.setValue,
    setSelectedValue = _ref.setSelectedValue;
  (0, _helpers.changeMultipleArrayStringSelect)({
    newValue: options,
    selectedOptions: region,
    validation: validation || function () {
      return true;
    },
    setValue: setValue,
    setSelectedValue: setSelectedValue
  });
};