"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeEmail = void 0;
var _dompurify = _interopRequireDefault(require("dompurify"));
var _helpers = require("../helpers");
var generalChangeEmail = exports.generalChangeEmail = function generalChangeEmail(_ref) {
  var value = _ref.value,
    validation = _ref.validation,
    setValue = _ref.setValue;
  var valueClean = _dompurify["default"].sanitize(value);
  var email = valueClean.toLowerCase();
  var defaultValidation = function defaultValidation() {
    return true;
  };
  (0, _helpers.changeInputText)({
    value: email,
    validation: validation || defaultValidation,
    setValue: setValue
  });
};