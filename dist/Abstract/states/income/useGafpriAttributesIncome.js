"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesIncome = useGafpriAttributesIncome;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Validations = require("../../../Validations");
var _Changes = require("../../../Changes");
var _payment = require("../payment");
var _constants = require("../../../constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function useGafpriAttributesIncome(_ref) {
  var projects = _ref.projects,
    currencies = _ref.currencies;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    customerId = _useState2[0],
    setCustomerId = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    customerIdValid = _useState4[0],
    setCustomerIdValid = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    projectsPostsId = _useState6[0],
    setProjectsPostsId = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    projectsPostsIdValid = _useState8[0],
    setProjectsPostsIdValid = _useState8[1];
  var _useState9 = (0, _react.useState)({
      value: '',
      label: 'Selecciona un proyecto'
    }),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    projectsPostsIdDefault = _useState10[0],
    setProjectsPostsIdDefault = _useState10[1];
  var projectsPostsIdOptions = projects.data.actions.getOptionsItems();
  var _useState11 = (0, _react.useState)(''),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    note = _useState12[0],
    setNote = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    subTotal = _useState14[0],
    setSubTotal = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    subTotalTax = _useState16[0],
    setSubTotalTax = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    total = _useState18[0],
    setTotal = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    entity = _useState20[0],
    setEntity = _useState20[1];
  var _useState21 = (0, _react.useState)(0),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    cashRegisterTypePostsId = _useState22[0],
    setCashRegisterTypePostsId = _useState22[1];
  var _useState23 = (0, _react.useState)(0),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    cashRegisterPostsId = _useState24[0],
    setCashRegisterPostsId = _useState24[1];
  var usePayment = (0, _payment.useGafpriAttributesPayment)({
    currencies: currencies
  });
  var infoReset = function infoReset() {
    setCustomerId(0);
    setCustomerIdValid(false);
    setProjectsPostsId('');
    setProjectsPostsIdValid(false);
    setProjectsPostsIdDefault({
      value: '',
      label: 'Selecciona un proyecto'
    });
    setNote('');
    setSubTotal('');
    setSubTotalTax('');
    setTotal('');
    setEntity(null);
    setCashRegisterPostsId(0);
    setCashRegisterTypePostsId(0);
    usePayment.actions.infoReset();
  };

  // Funciones de Validacion
  var validationCustomerId = function validationCustomerId(value) {
    return (0, _Validations.generalValidationCustomerId)({
      value: value,
      setValid: setCustomerIdValid,
      currentValid: customerIdValid
    });
  };
  var validationProjectsPostsId = function validationProjectsPostsId(value) {
    return (0, _Validations.generalValidationProjectsId)({
      value: value,
      setValid: setProjectsPostsIdValid,
      currentValid: projectsPostsIdValid
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [customerIdValid, projectsPostsIdValid, parseFloat(total) > 0],
      inputId: _constants.INCOME_ROUTE
    });
  };
  var validationButtonNextPaymentCr = function validationButtonNextPaymentCr() {
    return (0, _Validations.generalValidationButtonNext)({
      validations: [usePayment.useGeneralPaymentMethods.states.currenciesIdValid, parseFloat(usePayment.states.total) > 0, usePayment.useGeneralPaymentMethods.useCashTransactions.states.change > 0, usePayment.useGeneralPaymentMethods.usePaymentMethods.states.change > 0],
      inputId: "".concat(_constants.INCOME_ROUTE, "-2")
    });
  };
  var validationButtonNextAdd = function validationButtonNextAdd() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [customerIdValid, projectsPostsIdValid, usePayment.useGeneralPaymentMethods.states.currenciesIdValid, parseFloat(total) === parseFloat(usePayment.states.total)],
      inputId: "".concat(_constants.INCOME_ROUTE, "-Add")
    });
  };

  // Funciones de Change
  var changeCustomerId = function changeCustomerId(value) {
    (0, _Changes.generalChangeCustomerId)({
      value: value,
      validation: validationCustomerId,
      setValue: setCustomerId
    });
  };
  var changeProjectsPostsId = function changeProjectsPostsId(options) {
    (0, _Changes.generalChangeProjectsId)({
      options: options,
      validation: validationProjectsPostsId,
      setDefault: setProjectsPostsIdDefault,
      setValue: setProjectsPostsId
    });
  };
  var changeNote = function changeNote(value) {
    (0, _Changes.generalChangeNote)({
      value: value,
      setValue: setNote
    });
  };
  var changeSubTotal = function changeSubTotal(value) {
    setSubTotal(value);
  };
  var changeSubTotalTax = function changeSubTotalTax(value) {
    setSubTotalTax(value);
  };
  var changeTotal = function changeTotal() {
    var newSubTotal = parseFloat(subTotal) || 0;
    var newSubTotalTax = parseFloat(subTotalTax) || 0;
    var newTotal = newSubTotal + newSubTotalTax;
    setTotal("".concat(newTotal));
  };

  /**
   * Effects
   *
   *
   */

  _react["default"].useEffect(function () {
    changeTotal();
  }, [subTotal, subTotalTax]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  var states = {
    customerId: customerId,
    customerIdValid: customerIdValid,
    projectsPostsId: projectsPostsId,
    projectsPostsIdValid: projectsPostsIdValid,
    projectsPostsIdDefault: projectsPostsIdDefault,
    projectsPostsIdOptions: projectsPostsIdOptions,
    note: note,
    subTotal: subTotal,
    subTotalTax: subTotalTax,
    total: total,
    entity: entity,
    cashRegisterTypePostsId: cashRegisterTypePostsId,
    cashRegisterPostsId: cashRegisterPostsId
  };
  var actions = {
    infoReset: infoReset,
    validationCustomerId: validationCustomerId,
    validationProjectsPostsId: validationProjectsPostsId,
    changeCustomerId: changeCustomerId,
    changeProjectsPostsId: changeProjectsPostsId,
    changeNote: changeNote,
    changeSubTotal: changeSubTotal,
    changeSubTotalTax: changeSubTotalTax,
    changeTotal: changeTotal,
    setEntity: setEntity,
    validationButtonNext: validationButtonNext,
    setCashRegisterTypePostsId: setCashRegisterTypePostsId,
    setCashRegisterPostsId: setCashRegisterPostsId,
    validationButtonNextPaymentCr: validationButtonNextPaymentCr,
    validationButtonNextAdd: validationButtonNextAdd
  };
  return {
    states: states,
    actions: actions,
    usePayment: usePayment
  };
}