"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesPaymentTransferCashRegister = useGafpriAttributesPaymentTransferCashRegister;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Validations = require("../../../../Validations");
var _Changes = require("../../../../Changes");
var _payment = require("../../payment");
var _constants = require("../../../../constants");
function useGafpriAttributesPaymentTransferCashRegister(_ref) {
  var cashRegisterType = _ref.cashRegisterType,
    currencies = _ref.currencies,
    siteOptions = _ref.siteOptions;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    cashRegisterTypePostsId = _useState2[0],
    setCashRegisterTypePostsId = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    cashRegisterTypePostsIdValid = _useState4[0],
    setCashRegisterTypePostsIdValid = _useState4[1];
  var _useState5 = (0, _react.useState)({
      value: '',
      label: 'Selecciona caja'
    }),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    cashRegisterTypePostsIdDefault = _useState6[0],
    setCashRegisterTypePostsIdDefault = _useState6[1];
  var cashRegisterTypePostsIdOptions = cashRegisterType.data.actions.getOptionsItems(siteOptions.id);
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    cashRegisterPostsId = _useState8[0],
    setCashRegisterPostsId = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    currentCashRegisterTypePostsId = _useState10[0],
    setCurrentCashRegisterTypePostsId = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    currentCashRegisterPostsId = _useState12[0],
    setCurrentCashRegisterPostsId = _useState12[1];
  var usePayment = (0, _payment.useGafpriAttributesPayment)({
    currencies: currencies
  });
  var infoReset = function infoReset() {
    setCashRegisterTypePostsId('');
    setCashRegisterTypePostsIdValid(false);
    setCashRegisterTypePostsIdDefault({
      value: '',
      label: 'Selecciona caja'
    });
    setCashRegisterPostsId(0);
    setCurrentCashRegisterPostsId(0);
    setCurrentCashRegisterTypePostsId(0);
    usePayment.actions.infoReset();
  };

  // Funciones de Validacion

  var validationCashRegisterTypePostsId = function validationCashRegisterTypePostsId(value) {
    var newValue;
    if (value) {
      newValue = value === '' || value === '0' ? '' : value;
    } else {
      newValue = '';
    }
    return (0, _Validations.generalValidationCashRegisterType)({
      value: newValue,
      setValid: setCashRegisterTypePostsIdValid,
      currentValid: cashRegisterTypePostsIdValid
    });
  };
  var validationButtonNextPaymentCr = function validationButtonNextPaymentCr() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [cashRegisterTypePostsIdValid, usePayment.useGeneralPaymentMethods.states.currenciesIdValid, parseFloat(usePayment.states.total) > 0, usePayment.useGeneralPaymentMethods.usePaymentMethods.states.change > 0],
      inputId: _constants.PAYMENT_TRANSFER_CASH_REGISTER_ROUTE
    });
  };
  var validationButtonNextAdd = function validationButtonNextAdd() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [cashRegisterTypePostsIdValid, usePayment.useGeneralPaymentMethods.states.currenciesIdValid, parseFloat(usePayment.states.total) > 0, usePayment.useGeneralPaymentMethods.usePaymentMethods.states.change > 0],
      inputId: "".concat(_constants.PAYMENT_TRANSFER_CASH_REGISTER_ROUTE, "-Add")
    });
  };

  // Funciones de Change
  var changeCashRegisterTypeId = function changeCashRegisterTypeId(value) {
    if (value !== null && value !== void 0 && value.value && value.value !== '' && value.value !== '0') {
      var postsId = cashRegisterType.data.actions.getCurrentCashRegisterPostsId(parseInt(value.value, 10));
      setCashRegisterPostsId(postsId);
    }
    (0, _Changes.generalChangeCashRegisterType)({
      options: value,
      validation: validationCashRegisterTypePostsId,
      setDefault: setCashRegisterTypePostsIdDefault,
      setValue: setCashRegisterTypePostsId
    });
  };

  /**
   * Export
   *
   *
   */
  var states = {
    cashRegisterTypePostsId: cashRegisterTypePostsId,
    cashRegisterTypePostsIdValid: cashRegisterTypePostsIdValid,
    cashRegisterTypePostsIdDefault: cashRegisterTypePostsIdDefault,
    cashRegisterTypePostsIdOptions: cashRegisterTypePostsIdOptions,
    cashRegisterPostsId: cashRegisterPostsId,
    currentCashRegisterTypePostsId: currentCashRegisterTypePostsId,
    currentCashRegisterPostsId: currentCashRegisterPostsId
  };
  var actions = {
    infoReset: infoReset,
    validationButtonNextPaymentCr: validationButtonNextPaymentCr,
    validationButtonNextAdd: validationButtonNextAdd,
    changeCashRegisterTypeId: changeCashRegisterTypeId,
    validationCashRegisterTypePostsId: validationCashRegisterTypePostsId,
    setCurrentCashRegisterTypePostsId: setCurrentCashRegisterTypePostsId,
    setCurrentCashRegisterPostsId: setCurrentCashRegisterPostsId
  };
  return {
    states: states,
    actions: actions,
    usePayment: usePayment
  };
}