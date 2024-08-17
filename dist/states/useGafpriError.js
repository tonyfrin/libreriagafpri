"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriError = useGafpriError;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _helpers = require("../helpers");
function useGafpriError() {
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var changeError = function changeError(value) {
    setError(value);
    setTimeout(function () {
      setError([]);
    }, 5000);
  };
  var newError = function newError(_ref) {
    var newErrorValue = _ref.newErrorValue,
      functionAction = _ref.functionAction;
    if ((0, _helpers.isErrorResponse)(newErrorValue)) {
      changeError([newErrorValue.message]);
      functionAction();
    } else if ((0, _helpers.isCustomErrorResponse)(newErrorValue)) {
      var errorMessage = newErrorValue.errors.map(function (item) {
        return item.message;
      });
      changeError(errorMessage);
      functionAction();
    } else {
      changeError(["".concat(newErrorValue)]);
      functionAction();
    }
  };
  var resetError = function resetError() {
    setError([]);
  };

  /**
   * Export
   *
   *
   */
  var states = {
    error: error
  };
  var actions = {
    newError: newError,
    resetError: resetError,
    changeError: changeError
  };
  return {
    states: states,
    actions: actions
  };
}