"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesPayment = useGafpriPagesPayment;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriPagesPayment(_ref) {
  var attributes = _ref.attributes,
    subPagesDeposit = _ref.subPagesDeposit;
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
    isDeposit = _useState6[0],
    setIsDeposit = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isOrderReturn = _useState8[0],
    setIsOrderReturn = _useState8[1];
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsDeposit(false);
    setIsOrderReturn(false);
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsDeposit(false);
    setIsOrderReturn(false);
  };
  var onDeposit = function onDeposit() {
    setIsFetching(false);
    setIsInit(false);
    setIsDeposit(true);
    setIsOrderReturn(false);
  };
  var onOrderReturn = function onOrderReturn() {
    setIsFetching(false);
    setIsInit(false);
    setIsDeposit(false);
    setIsOrderReturn(true);
  };
  var returnInit = function returnInit() {
    attributes.actions.infoReset();
    subPagesDeposit.actions.onOrder();
    onInit();
  };

  /**
   * Export
   *
   *
   */
  var states = {
    isFetching: isFetching,
    isInit: isInit,
    isDeposit: isDeposit,
    isOrderReturn: isOrderReturn
  };
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onDeposit: onDeposit,
    onOrderReturn: onOrderReturn,
    returnInit: returnInit
  };
  return {
    states: states,
    actions: actions
  };
}