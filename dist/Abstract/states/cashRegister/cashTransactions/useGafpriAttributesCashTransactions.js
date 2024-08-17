"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesCashTransactions = useGafpriAttributesCashTransactions;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriAttributesCashTransactions() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    cashRegisterTypePostsId = _useState2[0],
    setCashRegisterTypePostsId = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    cashRegisterPostsId = _useState4[0],
    setCashRegisterPostsId = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    type = _useState6[0],
    setType = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    amount = _useState8[0],
    setAmount = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    change = _useState10[0],
    setChange = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    currenciesId = _useState12[0],
    setCurrenciesId = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    note = _useState14[0],
    setNote = _useState14[1];
  var infoReset = function infoReset() {
    setCashRegisterTypePostsId(0);
    setCashRegisterPostsId(0);
    setType('');
    setAmount(0);
    setChange(0);
    setCurrenciesId(0);
    setNote('');
  };

  /**
   * Export
   *
   *
   */
  var states = {
    cashRegisterTypePostsId: cashRegisterTypePostsId,
    cashRegisterPostsId: cashRegisterPostsId,
    type: type,
    amount: amount,
    change: change,
    currenciesId: currenciesId,
    note: note
  };
  var actions = {
    infoReset: infoReset,
    setCashRegisterTypePostsId: setCashRegisterTypePostsId,
    setCashRegisterPostsId: setCashRegisterPostsId,
    setType: setType,
    setAmount: setAmount,
    setChange: setChange,
    setCurrenciesId: setCurrenciesId,
    setNote: setNote
  };
  return {
    states: states,
    actions: actions
  };
}