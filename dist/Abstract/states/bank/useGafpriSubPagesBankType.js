"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriSubPagesBankType = useGafpriSubPagesBankType;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriSubPagesBankType() {
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
    isTransfer = _useState6[0],
    setIsTransfer = _useState6[1];
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsTransfer(false);
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsTransfer(false);
  };
  var onTransfer = function onTransfer() {
    setIsFetching(false);
    setIsInit(false);
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
    isTransfer: isTransfer
  };
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onTransfer: onTransfer
  };
  return {
    states: states,
    actions: actions
  };
}