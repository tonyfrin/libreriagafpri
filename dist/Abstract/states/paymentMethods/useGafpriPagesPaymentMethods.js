"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesPaymentMethods = useGafpriPagesPaymentMethods;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriPagesPaymentMethods() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isFetching = _useState2[0],
    setIsFetching = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isCash = _useState4[0],
    setIsCash = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    isTransfer = _useState6[0],
    setIsTransfer = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isCredit = _useState8[0],
    setIsCredit = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isAuthorization = _useState10[0],
    setIsAuthorization = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    isSingle = _useState12[0],
    setIsSingle = _useState12[1];
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsCash(false);
    setIsTransfer(false);
    setIsCredit(false);
    setIsAuthorization(false);
    setIsSingle(false);
  };
  var onCash = function onCash() {
    setIsFetching(false);
    setIsCash(true);
    setIsTransfer(false);
    setIsCredit(false);
    setIsAuthorization(false);
    setIsSingle(false);
  };
  var onTransfer = function onTransfer() {
    setIsFetching(false);
    setIsCash(false);
    setIsTransfer(true);
    setIsCredit(false);
    setIsAuthorization(false);
    setIsSingle(false);
  };
  var onCredit = function onCredit() {
    setIsFetching(false);
    setIsCash(false);
    setIsTransfer(false);
    setIsCredit(true);
    setIsAuthorization(false);
    setIsSingle(false);
  };
  var onAuthorization = function onAuthorization() {
    setIsFetching(false);
    setIsCash(false);
    setIsTransfer(false);
    setIsCredit(false);
    setIsAuthorization(true);
    setIsSingle(false);
  };
  var onSingle = function onSingle() {
    setIsFetching(false);
    setIsCash(false);
    setIsTransfer(false);
    setIsCredit(false);
    setIsAuthorization(false);
    setIsSingle(true);
  };

  /**
   * Export
   *
   *
   */
  var states = {
    isFetching: isFetching,
    isCash: isCash,
    isTransfer: isTransfer,
    isCredit: isCredit,
    isAuthorization: isAuthorization,
    isSingle: isSingle
  };
  var actions = {
    onFetching: onFetching,
    onCash: onCash,
    onTransfer: onTransfer,
    onCredit: onCredit,
    onAuthorization: onAuthorization,
    onSingle: onSingle
  };
  return {
    states: states,
    actions: actions
  };
}