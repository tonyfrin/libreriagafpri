"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesPaymentMethods = useGafpriAttributesPaymentMethods;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriAttributesPaymentMethods() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    methodType = _useState2[0],
    setMethodType = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    type = _useState4[0],
    setType = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    paymentType = _useState6[0],
    setPaymentType = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    currenciesId = _useState8[0],
    setCurrenciesId = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    bank = _useState10[0],
    setBank = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    number = _useState12[0],
    setNumber = _useState12[1];
  var _useState13 = (0, _react.useState)(0),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    amount = _useState14[0],
    setAmount = _useState14[1];
  var _useState15 = (0, _react.useState)(0),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    change = _useState16[0],
    setChange = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    note = _useState18[0],
    setNote = _useState18[1];
  var infoReset = function infoReset() {
    setMethodType('');
    setType('');
    setPaymentType('');
    setBank('');
    setNumber('');
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
    methodType: methodType,
    type: type,
    paymentType: paymentType,
    currenciesId: currenciesId,
    bank: bank,
    number: number,
    amount: amount,
    change: change,
    note: note
  };
  var actions = {
    infoReset: infoReset,
    setMethodType: setMethodType,
    setPaymentType: setPaymentType,
    setBank: setBank,
    setNumber: setNumber,
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