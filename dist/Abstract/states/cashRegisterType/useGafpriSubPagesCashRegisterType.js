"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriSubPagesCashRegisterType = useGafpriSubPagesCashRegisterType;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriSubPagesCashRegisterType() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isFetching = _useState2[0],
    setIsFetching = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isInit = _useState4[0],
    setIsInit = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    isExpenses = _useState6[0],
    setIsExpenses = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isIncome = _useState8[0],
    setIsIncome = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isTransfer = _useState10[0],
    setIsTransfer = _useState10[1];
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsExpenses(false);
    setIsIncome(false);
    setIsTransfer(false);
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsExpenses(false);
    setIsIncome(false);
    setIsTransfer(false);
  };
  var onExpenses = function onExpenses() {
    setIsFetching(false);
    setIsInit(false);
    setIsExpenses(true);
    setIsIncome(false);
    setIsTransfer(false);
  };
  var onIncome = function onIncome() {
    setIsFetching(false);
    setIsInit(false);
    setIsExpenses(false);
    setIsIncome(true);
    setIsTransfer(false);
  };
  var onTransfer = function onTransfer() {
    setIsFetching(false);
    setIsInit(false);
    setIsExpenses(false);
    setIsIncome(false);
    setIsTransfer(true);
  };

  /**
   * Export
   *
   *
   */
  var states = {
    isFetching: isFetching,
    isInit: isInit,
    isExpenses: isExpenses,
    isIncome: isIncome,
    isTransfer: isTransfer
  };
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onExpenses: onExpenses,
    onIncome: onIncome,
    onTransfer: onTransfer
  };
  return {
    states: states,
    actions: actions
  };
}