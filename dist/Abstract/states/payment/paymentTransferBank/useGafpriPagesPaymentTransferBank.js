"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesPaymentTransferBank = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _helpers = require("../../../../helpers");
var useGafpriPagesPaymentTransferBank = exports.useGafpriPagesPaymentTransferBank = function useGafpriPagesPaymentTransferBank(_ref) {
  var useAttributes = _ref.useAttributes;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isFetching = _useState2[0],
    setIsFetching = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isPaymentForm = _useState4[0],
    setIsPaymentForm = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    isFinalPaymentForm = _useState6[0],
    setIsFinalPaymentForm = _useState6[1];

  // Funciones de paginas
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsPaymentForm(false);
    setIsFinalPaymentForm(false);
    (0, _helpers.scrollToTop)();
  };
  var onPaymentForm = function onPaymentForm() {
    setIsFetching(false);
    setIsPaymentForm(true);
    setIsFinalPaymentForm(false);
    (0, _helpers.scrollToTop)();
  };
  var onFinalPaymentForm = function onFinalPaymentForm() {
    setIsFetching(false);
    setIsPaymentForm(false);
    setIsFinalPaymentForm(true);
    (0, _helpers.scrollToTop)();
  };
  var returnInit = function returnInit() {
    useAttributes.actions.infoReset();
    onPaymentForm();
  };
  var states = {
    isFetching: isFetching,
    isPaymentForm: isPaymentForm,
    isFinalPaymentForm: isFinalPaymentForm
  };
  var actions = {
    onFetching: onFetching,
    onPaymentForm: onPaymentForm,
    onFinalPaymentForm: onFinalPaymentForm,
    returnInit: returnInit
  };
  return {
    states: states,
    actions: actions
  };
};