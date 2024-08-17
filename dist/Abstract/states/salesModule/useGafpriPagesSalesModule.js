"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesSalesModule = useGafpriPagesSalesModule;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriPagesSalesModule() {
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
    isSales = _useState6[0],
    setIsSales = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isDispatch = _useState8[0],
    setIsDispatch = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isBudget = _useState10[0],
    setIsBudget = _useState10[1];
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsSales(false);
    setIsDispatch(false);
    setIsBudget(false);
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsSales(false);
    setIsDispatch(false);
    setIsBudget(false);
  };
  var onSales = function onSales() {
    setIsFetching(false);
    setIsInit(false);
    setIsSales(true);
    setIsDispatch(false);
    setIsBudget(false);
  };
  var onDispatch = function onDispatch() {
    setIsFetching(false);
    setIsInit(false);
    setIsSales(false);
    setIsDispatch(true);
    setIsBudget(false);
  };
  var onBudget = function onBudget() {
    setIsFetching(false);
    setIsInit(false);
    setIsSales(false);
    setIsDispatch(false);
    setIsBudget(true);
  };

  /**
   * Export
   *
   *
   */
  var states = {
    isFetching: isFetching,
    isInit: isInit,
    isSales: isSales,
    isDispatch: isDispatch,
    isBudget: isBudget
  };
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onSales: onSales,
    onDispatch: onDispatch,
    onBudget: onBudget
  };
  return {
    states: states,
    actions: actions
  };
}