"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesCreditPayment = useGafpriAttributesCreditPayment;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriAttributesCreditPayment() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    creditOpeningPostsId = _useState2[0],
    setCreditOpeningPostsId = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    amount = _useState4[0],
    setAmount = _useState4[1];
  var infoReset = function infoReset() {
    setCreditOpeningPostsId(0);
    setAmount(0);
  };

  /**
   * Export
   *
   *
   */
  var states = {
    creditOpeningPostsId: creditOpeningPostsId,
    amount: amount
  };
  var actions = {
    infoReset: infoReset,
    setCreditOpeningPostsId: setCreditOpeningPostsId,
    setAmount: setAmount
  };
  return {
    states: states,
    actions: actions
  };
}