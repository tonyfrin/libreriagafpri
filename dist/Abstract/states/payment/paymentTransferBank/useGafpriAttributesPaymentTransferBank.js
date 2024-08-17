"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesPaymentTransferBank = useGafpriAttributesPaymentTransferBank;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Validations = require("../../../../Validations");
var _Changes = require("../../../../Changes");
var _ = require("..");
var _constants = require("../../../../constants");
function useGafpriAttributesPaymentTransferBank(_ref) {
  var bankType = _ref.bankType,
    siteOptions = _ref.siteOptions;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    depositBankTypePostsId = _useState2[0],
    setDepositBankTypePostsId = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    depositBankTypePostsIdValid = _useState4[0],
    setDepositBankTypePostsIdValid = _useState4[1];
  var _useState5 = (0, _react.useState)({
      value: '',
      label: 'Seleccionar banco'
    }),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    depositBankTypePostsIdDefault = _useState6[0],
    setDepositBankTypePostsIdDefault = _useState6[1];
  var depositBankTypePostsIdOptions = bankType.data.actions.getOptionsItems(siteOptions.id);
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    debitBankTypePostsId = _useState8[0],
    setDebitBankTypePostsId = _useState8[1];
  var usePayment = (0, _.useGafpriAttributesPayment)({
    useBankType: bankType
  });
  var infoReset = function infoReset() {
    setDepositBankTypePostsId('');
    setDepositBankTypePostsIdValid(false);
    setDepositBankTypePostsIdDefault({
      value: '',
      label: 'Seleccionar banco'
    });
    setDebitBankTypePostsId(0);
    usePayment.actions.infoReset();
  };

  // Funciones de Validacion

  var validationDepositBankTypePostsId = function validationDepositBankTypePostsId(value) {
    return (0, _Validations.generalValidationBankType)({
      value: value,
      setValid: setDepositBankTypePostsIdValid,
      currentValid: depositBankTypePostsIdValid
    });
  };
  var validationButtonNextPayment = function validationButtonNextPayment() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [depositBankTypePostsIdValid, parseFloat(usePayment.states.total) > 0],
      inputId: _constants.PAYMENT_TRANSFER_BANK_ROUTE
    });
  };
  var validationButtonNextAdd = function validationButtonNextAdd() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [depositBankTypePostsIdValid, parseFloat(usePayment.states.total) > 0],
      inputId: "".concat(_constants.PAYMENT_TRANSFER_BANK_ROUTE, "-Add")
    });
  };

  // Funciones de Change
  var changeDepositBankTypeId = function changeDepositBankTypeId(value) {
    (0, _Changes.generalChangeBankType)({
      options: value,
      validation: validationDepositBankTypePostsId,
      setDefault: setDepositBankTypePostsIdDefault,
      setValue: setDepositBankTypePostsId
    });
  };

  /**
   * Export
   *
   *
   */
  var states = {
    depositBankTypePostsId: depositBankTypePostsId,
    depositBankTypePostsIdValid: depositBankTypePostsIdValid,
    depositBankTypePostsIdDefault: depositBankTypePostsIdDefault,
    depositBankTypePostsIdOptions: depositBankTypePostsIdOptions,
    debitBankTypePostsId: debitBankTypePostsId
  };
  var actions = {
    infoReset: infoReset,
    validationDepositBankTypePostsId: validationDepositBankTypePostsId,
    changeDepositBankTypeId: changeDepositBankTypeId,
    validationButtonNextPayment: validationButtonNextPayment,
    validationButtonNextAdd: validationButtonNextAdd,
    setDebitBankTypePostsId: setDebitBankTypePostsId
  };
  return {
    states: states,
    actions: actions,
    usePayment: usePayment
  };
}