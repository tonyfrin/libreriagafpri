"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesIncome = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _helpers = require("../../../helpers");
var useGafpriPagesIncome = exports.useGafpriPagesIncome = function useGafpriPagesIncome(_ref) {
  var useAttributes = _ref.useAttributes,
    useEntity = _ref.useEntity;
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
    isEntitySearch = _useState6[0],
    setIsEntitySearch = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isAddEntity = _useState8[0],
    setIsAddEntity = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isIncomeForm = _useState10[0],
    setIsIncomeForm = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    isPaymentCrForm = _useState12[0],
    setIsPaymentCrForm = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    isFinalPaymentCrForm = _useState14[0],
    setIsFinalPaymentCrForm = _useState14[1];

  // Funciones de paginas
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsIncomeForm(false);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(false);
    (0, _helpers.scrollToTop)();
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsIncomeForm(false);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(false);
    (0, _helpers.scrollToTop)();
  };
  var onEntitySearch = function onEntitySearch() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(true);
    setIsAddEntity(false);
    setIsIncomeForm(false);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(false);
    (0, _helpers.scrollToTop)();
  };
  var onAddEntity = function onAddEntity() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(true);
    setIsIncomeForm(false);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(false);
    (0, _helpers.scrollToTop)();
  };
  var onIncomeForm = function onIncomeForm() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsIncomeForm(true);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(false);
    (0, _helpers.scrollToTop)();
  };
  var onPaymentCrForm = function onPaymentCrForm() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsIncomeForm(false);
    setIsPaymentCrForm(true);
    setIsFinalPaymentCrForm(false);
    (0, _helpers.scrollToTop)();
  };
  var onFinalPaymentCrForm = function onFinalPaymentCrForm() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsIncomeForm(false);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(true);
    (0, _helpers.scrollToTop)();
  };
  var goIncomeEntity = function goIncomeEntity(entity) {
    useAttributes.actions.setEntity(entity);
    useAttributes.actions.changeCustomerId(entity.id);
    onIncomeForm();
  };
  var returnInit = function returnInit() {
    useAttributes.actions.infoReset();
    onInit();
  };
  var processEntityBydocumentId = function processEntityBydocumentId(event) {
    if (event.key === 'Enter') {
      var currentEntity = useEntity.data.actions.findByDocumentIdDigit(useEntity.attributes.states.digit);
      if (currentEntity) {
        goIncomeEntity(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };
  var processEntityByName = function processEntityByName(event) {
    if (event.key === 'Enter') {
      useEntity.paginations.actions.changeSearchBy({
        value: 'name',
        label: 'Nombre'
      });
      useEntity.paginations.actions.setSearchTerm(useEntity.attributes.states.name);
      onEntitySearch();
    }
  };
  var selectEntity = function selectEntity(id) {
    var currentEntity = useEntity.data.actions.getById(id);
    if (currentEntity) {
      goIncomeEntity(currentEntity);
    }
  };
  var processEntityByPhone = function processEntityByPhone(event) {
    if (event.key === 'Enter') {
      var currentEntity = useEntity.data.actions.findByPhone(useEntity.attributes.states.phone);
      if (currentEntity) {
        goIncomeEntity(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };
  var processEntityByEmail = function processEntityByEmail(event) {
    if (event.key === 'Enter') {
      var currentEntity = useEntity.data.actions.findByEmail(useEntity.attributes.states.email);
      if (currentEntity) {
        goIncomeEntity(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };
  var states = {
    isFetching: isFetching,
    isInit: isInit,
    isEntitySearch: isEntitySearch,
    isAddEntity: isAddEntity,
    isIncomeForm: isIncomeForm,
    isPaymentCrForm: isPaymentCrForm,
    isFinalPaymentCrForm: isFinalPaymentCrForm
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onEntitySearch: onEntitySearch,
    onAddEntity: onAddEntity,
    onIncomeForm: onIncomeForm,
    onPaymentCrForm: onPaymentCrForm,
    onFinalPaymentCrForm: onFinalPaymentCrForm,
    returnInit: returnInit,
    processEntityBydocumentId: processEntityBydocumentId,
    processEntityByName: processEntityByName,
    selectEntity: selectEntity,
    processEntityByPhone: processEntityByPhone,
    processEntityByEmail: processEntityByEmail,
    goIncomeEntity: goIncomeEntity
  };
  return {
    states: states,
    actions: actions
  };
};