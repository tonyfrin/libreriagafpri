"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesBudget = useGafpriAttributesBudget;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Validations = require("../../../Validations");
var _Changes = require("../../../Changes");
function useGafpriAttributesBudget(_ref) {
  var useProductItems = _ref.useProductItems;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    customerId = _useState2[0],
    setCustomerId = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    customerIdValid = _useState4[0],
    setCustomerIdValid = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    referredId = _useState6[0],
    setReferredId = _useState6[1];
  var _useState7 = (0, _react.useState)(true),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    referredIdValid = _useState8[0],
    setReferredIdValid = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    note = _useState10[0],
    setNote = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    currentId = _useState12[0],
    setCurrentId = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    entity = _useState14[0],
    setEntity = _useState14[1];
  var infoReset = function infoReset() {
    setCustomerId(0);
    setCustomerIdValid(false);
    setReferredId(0);
    setReferredIdValid(true);
    setNote('');
    setCurrentId(0);
    setEntity(null);
    useProductItems.actions.infoReset();
  };

  // Funciones de Validacion
  var validationCustomerId = function validationCustomerId(value) {
    (0, _Validations.generalValidationCustomerId)({
      value: value,
      setValid: setCustomerIdValid,
      currentValid: customerIdValid
    });
    return true;
  };
  var validationReferredId = function validationReferredId(value) {
    return (0, _Validations.generalValidationReferredId)({
      value: value,
      setValid: setReferredIdValid,
      currentValid: referredIdValid
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
  var changeReferredId = function changeReferredId(value) {
    (0, _Changes.generalChangeReferredId)({
      value: value,
      validation: validationReferredId,
      setValue: setReferredId
    });
  };
  var changeNote = function changeNote(value) {
    (0, _Changes.generalChangeNote)({
      value: value,
      setValue: setNote
    });
  };

  /**
   * Export
   *
   *
   */
  var states = {
    customerId: customerId,
    customerIdValid: customerIdValid,
    referredId: referredId,
    referredIdValid: referredIdValid,
    note: note,
    currentId: currentId,
    entity: entity
  };
  var actions = {
    infoReset: infoReset,
    validationCustomerId: validationCustomerId,
    validationReferredId: validationReferredId,
    changeCustomerId: changeCustomerId,
    changeReferredId: changeReferredId,
    changeNote: changeNote,
    setCurrentId: setCurrentId,
    setEntity: setEntity
  };
  return {
    states: states,
    actions: actions
  };
}