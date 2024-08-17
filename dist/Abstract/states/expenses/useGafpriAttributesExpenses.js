"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesExpenses = useGafpriAttributesExpenses;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Validations = require("../../../Validations");
var _Changes = require("../../../Changes");
var _payment = require("../payment");
var _constants = require("../../../constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function useGafpriAttributesExpenses(_ref) {
  var projects = _ref.projects,
    expensesType = _ref.expensesType,
    currencies = _ref.currencies;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    supplierId = _useState2[0],
    setSupplierId = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    supplierIdValid = _useState4[0],
    setSupplierIdValid = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    expensesTypeId = _useState6[0],
    setExpensesTypeId = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    expensesTypeIdValid = _useState8[0],
    setExpensesTypeIdValid = _useState8[1];
  var _useState9 = (0, _react.useState)({
      value: '',
      label: 'Selecciona tipo de egreso'
    }),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    expensesTypeIdDefault = _useState10[0],
    setExpensesTypeIdDefault = _useState10[1];
  var expensesTypeIdOptions = expensesType.data.actions.getOptionsItems();
  var _useState11 = (0, _react.useState)(''),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    invoice = _useState12[0],
    setInvoice = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    projectsPostsId = _useState14[0],
    setProjectsPostsId = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    projectsPostsIdValid = _useState16[0],
    setProjectsPostsIdValid = _useState16[1];
  var _useState17 = (0, _react.useState)({
      value: '',
      label: 'Selecciona un proyecto'
    }),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    projectsPostsIdDefault = _useState18[0],
    setProjectsPostsIdDefault = _useState18[1];
  var projectsPostsIdOptions = projects.data.actions.getOptionsItems();
  var _useState19 = (0, _react.useState)(''),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    note = _useState20[0],
    setNote = _useState20[1];
  var _useState21 = (0, _react.useState)(''),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    subTotal = _useState22[0],
    setSubTotal = _useState22[1];
  var _useState23 = (0, _react.useState)(''),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    subTotalTax = _useState24[0],
    setSubTotalTax = _useState24[1];
  var _useState25 = (0, _react.useState)(''),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    total = _useState26[0],
    setTotal = _useState26[1];
  var _useState27 = (0, _react.useState)(null),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    entity = _useState28[0],
    setEntity = _useState28[1];
  var _useState29 = (0, _react.useState)(0),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    cashRegisterTypePostsId = _useState30[0],
    setCashRegisterTypePostsId = _useState30[1];
  var _useState31 = (0, _react.useState)(0),
    _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
    cashRegisterPostsId = _useState32[0],
    setCashRegisterPostsId = _useState32[1];
  var usePayment = (0, _payment.useGafpriAttributesPayment)({
    currencies: currencies
  });
  var infoReset = function infoReset() {
    setSupplierId(0);
    setSupplierIdValid(false);
    setExpensesTypeId('');
    setExpensesTypeIdValid(false);
    setInvoice('');
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
  var validationSupplierId = function validationSupplierId(value) {
    return (0, _Validations.generalValidationSupplierId)({
      value: value,
      setValid: setSupplierIdValid,
      currentValid: supplierIdValid
    });
  };
  var validationExpensesTypeId = function validationExpensesTypeId(value) {
    return (0, _Validations.generalValidationExpensesTypeId)({
      value: value,
      setValid: setExpensesTypeIdValid,
      currentValid: expensesTypeIdValid
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
      validations: [supplierIdValid, expensesTypeIdValid, projectsPostsIdValid, parseFloat(total) > 0],
      inputId: _constants.EXPENSES_ROUTE
    });
  };
  var validationButtonNextPaymentCr = function validationButtonNextPaymentCr() {
    return (0, _Validations.generalValidationButtonNext)({
      validations: [usePayment.useGeneralPaymentMethods.states.currenciesIdValid, parseFloat(usePayment.states.total) > 0, usePayment.useGeneralPaymentMethods.useCashTransactions.states.change > 0, usePayment.useGeneralPaymentMethods.usePaymentMethods.states.change > 0],
      inputId: "".concat(_constants.EXPENSES_ROUTE, "-2")
    });
  };
  var validationButtonNextAdd = function validationButtonNextAdd() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [supplierIdValid, expensesTypeIdValid, projectsPostsIdValid, usePayment.useGeneralPaymentMethods.states.currenciesIdValid, parseFloat(total) === parseFloat(usePayment.states.total)],
      inputId: "".concat(_constants.EXPENSES_ROUTE, "-Add")
    });
  };

  // Funciones de Change
  var changeSupplierId = function changeSupplierId(value) {
    (0, _Changes.generalChangeSupplierId)({
      value: value,
      validation: validationSupplierId,
      setValue: setSupplierId
    });
  };
  var changeExpensesTypeId = function changeExpensesTypeId(options) {
    (0, _Changes.generalChangeExpensesTypeId)({
      options: options,
      validation: validationExpensesTypeId,
      setDefault: setExpensesTypeIdDefault,
      setValue: setExpensesTypeId
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
  var changeInvoice = function changeInvoice(value) {
    setInvoice(value);
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
    supplierId: supplierId,
    supplierIdValid: supplierIdValid,
    expensesTypeId: expensesTypeId,
    expensesTypeIdValid: expensesTypeIdValid,
    expensesTypeIdDefault: expensesTypeIdDefault,
    expensesTypeIdOptions: expensesTypeIdOptions,
    invoice: invoice,
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
    validationSupplierId: validationSupplierId,
    validationExpensesTypeId: validationExpensesTypeId,
    validationProjectsPostsId: validationProjectsPostsId,
    changeSupplierId: changeSupplierId,
    changeExpensesTypeId: changeExpensesTypeId,
    changeProjectsPostsId: changeProjectsPostsId,
    changeNote: changeNote,
    changeInvoice: changeInvoice,
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