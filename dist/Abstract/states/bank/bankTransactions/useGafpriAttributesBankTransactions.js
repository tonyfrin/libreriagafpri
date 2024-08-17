"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesBankTransactions = useGafpriAttributesBankTransactions;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriAttributesBankTransactions() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    bankTypePostsId = _useState2[0],
    setBankTypePostsId = _useState2[1];
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
    amount = _useState8[0],
    setAmount = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    change = _useState10[0],
    setChange = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    description = _useState12[0],
    setDescription = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    dateTransations = _useState14[0],
    setDateTransations = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    nameSend = _useState16[0],
    setNameSend = _useState16[1];
  var infoReset = function infoReset() {
    setBankTypePostsId(0);
    setType('');
    setPaymentType('');
    setAmount(0);
    setChange(0);
    setDescription('');
    setDateTransations('');
    setNameSend('');
  };

  /**
   * Export
   *
   *
   */
  var states = {
    bankTypePostsId: bankTypePostsId,
    type: type,
    paymentType: paymentType,
    amount: amount,
    change: change,
    description: description,
    dateTransations: dateTransations,
    nameSend: nameSend
  };
  var actions = {
    infoReset: infoReset,
    setBankTypePostsId: setBankTypePostsId,
    setType: setType,
    setPaymentType: setPaymentType,
    setAmount: setAmount,
    setChange: setChange,
    setDescription: setDescription,
    setDateTransations: setDateTransations,
    setNameSend: setNameSend
  };
  return {
    states: states,
    actions: actions
  };
}