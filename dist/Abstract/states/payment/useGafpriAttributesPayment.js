"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesPayment = useGafpriAttributesPayment;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _paymentMethods = require("../paymentMethods");
var _Validations = require("../../../Validations");
function useGafpriAttributesPayment(_ref) {
  var currencies = _ref.currencies,
    useBankType = _ref.useBankType,
    useOrder = _ref.useOrder;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    total = _useState4[0],
    setTotal = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    note = _useState6[0],
    setNote = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    difference = _useState8[0],
    setDifference = _useState8[1];
  var useGeneralPaymentMethods = (0, _paymentMethods.useGafpriAttributesGeneralPaymentMethods)({
    currencies: currencies,
    useBankType: useBankType
  });
  var infoReset = function infoReset() {
    setType('');
    setTotal('');
    setNote('');
    setDifference(0);
    useGeneralPaymentMethods.actions.infoReset();
  };
  var validationButtonNextPaymentCash = function validationButtonNextPaymentCash() {
    return (0, _Validations.generalValidationButtonNext)({
      validations: [useGeneralPaymentMethods.states.currenciesIdValid, useGeneralPaymentMethods.useCashTransactions.states.change > 0, useGeneralPaymentMethods.useCashTransactions.states.amount > 0, useGeneralPaymentMethods.usePaymentMethods.states.change > 0, useGeneralPaymentMethods.usePaymentMethods.states.amount > 0],
      inputId: 'cash'
    });
  };
  var validationButtonNextPaymentCredit = function validationButtonNextPaymentCredit() {
    return (0, _Validations.generalValidationButtonNext)({
      validations: [useGeneralPaymentMethods.useCreditOpening.states.amount > 0, useGeneralPaymentMethods.usePaymentMethods.states.change > 0, useGeneralPaymentMethods.usePaymentMethods.states.amount > 0],
      inputId: 'credit-next'
    });
  };
  var validationButtonNextPaymentCreditAdd = function validationButtonNextPaymentCreditAdd() {
    return (0, _Validations.generalValidationButtonNext)({
      validations: [useGeneralPaymentMethods.useCreditOpening.states.amount > 0, useGeneralPaymentMethods.usePaymentMethods.states.change > 0, useGeneralPaymentMethods.usePaymentMethods.states.amount > 0, useGeneralPaymentMethods.useCreditOpening.states.authorizedLoginValid, useGeneralPaymentMethods.useCreditOpening.states.authorizedPasswordValid],
      inputId: 'credit-add'
    });
  };
  var validationButtonNextPaymentSingle = function validationButtonNextPaymentSingle() {
    return (0, _Validations.generalValidationButtonNext)({
      validations: [useGeneralPaymentMethods.usePaymentMethods.states.change > 0, useGeneralPaymentMethods.usePaymentMethods.states.amount > 0],
      inputId: 'single-add'
    });
  };
  var checkCreditOpeningOrderReturn = function checkCreditOpeningOrderReturn(orderPostId, totalOrderReturn, currenciesId) {
    if (useOrder) {
      var currentOrder = useOrder.data.actions.getById(orderPostId);
      if (currentOrder) {
        var _currentOrder$payment;
        (_currentOrder$payment = currentOrder.payment) === null || _currentOrder$payment === void 0 || _currentOrder$payment.paymentMethods.forEach(function (paymentMethod) {
          if (paymentMethod.creditOpening) {
            var creditOpening = paymentMethod.creditOpening[0];
            if (creditOpening && creditOpening.balance && creditOpening.postsId) {
              var amount = 0;
              if (parseFloat("".concat(creditOpening.balance)) > totalOrderReturn) {
                amount = totalOrderReturn;
              } else {
                amount = parseFloat("".concat(creditOpening.balance));
              }
              useGeneralPaymentMethods.actions.addCreditPaymentPaymentMethod(creditOpening.postsId, currenciesId, amount);
            }
          }
          return null;
        });
      }
    }
  };

  /**
   * Export
   *
   *
   */
  var states = {
    type: type,
    total: total,
    note: note,
    difference: difference
  };
  var actions = {
    infoReset: infoReset,
    setType: setType,
    setTotal: setTotal,
    setNote: setNote,
    validationButtonNextPaymentCash: validationButtonNextPaymentCash,
    setDifference: setDifference,
    validationButtonNextPaymentCredit: validationButtonNextPaymentCredit,
    validationButtonNextPaymentCreditAdd: validationButtonNextPaymentCreditAdd,
    validationButtonNextPaymentSingle: validationButtonNextPaymentSingle,
    checkCreditOpeningOrderReturn: checkCreditOpeningOrderReturn
  };
  return {
    states: states,
    actions: actions,
    useGeneralPaymentMethods: useGeneralPaymentMethods
  };
}