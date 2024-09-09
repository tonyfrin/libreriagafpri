"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeNote = void 0;
var _dompurify = _interopRequireDefault(require("dompurify"));
var _helpers = require("../helpers");
var generalChangeNote = exports.generalChangeNote = function generalChangeNote(_ref) {
  var value = _ref.value,
    setValue = _ref.setValue,
    validation = _ref.validation;
  var valueClean = _dompurify["default"].sanitize(value);
  var defaultValidation = function defaultValidation() {
    return true;
  };
  (0, _helpers.changeInputText)({
    value: valueClean,
    validation: validation || defaultValidation,
    setValue: setValue
  });
};