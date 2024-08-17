"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesPaymentTransferCashRegister = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _helpers = require("../../../../helpers");
var useGafpriPagesPaymentTransferCashRegister = exports.useGafpriPagesPaymentTransferCashRegister = function useGafpriPagesPaymentTransferCashRegister(_ref) {
  var useAttributes = _ref.useAttributes;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isFetching = _useState2[0],
    setIsFetching = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isPaymentCrForm = _useState4[0],
    setIsPaymentCrForm = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    isFinalPaymentCrForm = _useState6[0],
    setIsFinalPaymentCrForm = _useState6[1];

  // Funciones de paginas
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(false);
    (0, _helpers.scrollToTop)();
  };
  var onPaymentCrForm = function onPaymentCrForm() {
    setIsFetching(false);
    setIsPaymentCrForm(true);
    setIsFinalPaymentCrForm(false);
    (0, _helpers.scrollToTop)();
  };
  var onFinalPaymentCrForm = function onFinalPaymentCrForm() {
    setIsFetching(false);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(true);
    (0, _helpers.scrollToTop)();
  };
  var returnInit = function returnInit() {
    useAttributes.actions.infoReset();
    onPaymentCrForm();
  };
  var states = {
    isFetching: isFetching,
    isPaymentCrForm: isPaymentCrForm,
    isFinalPaymentCrForm: isFinalPaymentCrForm
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    onFetching: onFetching,
    onPaymentCrForm: onPaymentCrForm,
    onFinalPaymentCrForm: onFinalPaymentCrForm,
    returnInit: returnInit
  };
  return {
    states: states,
    actions: actions
  };
};