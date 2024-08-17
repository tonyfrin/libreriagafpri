"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesAccountsReceivable = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _helpers = require("../../../helpers");
var useGafpriPagesAccountsReceivable = exports.useGafpriPagesAccountsReceivable = function useGafpriPagesAccountsReceivable(_ref) {
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
    isInitAdd = _useState6[0],
    setIsInitAdd = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isEntitySearch = _useState8[0],
    setIsEntitySearch = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isAddEntity = _useState10[0],
    setIsAddEntity = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    isForm = _useState12[0],
    setIsForm = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    isFormUpdate = _useState14[0],
    setIsFormUpdate = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    isLoginForm = _useState16[0],
    setIsLoginForm = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    isLoginUpdateForm = _useState18[0],
    setIsLoginUpdateForm = _useState18[1];
  var _useState19 = (0, _react.useState)(true),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    isCreditList = _useState20[0],
    setIsCreditList = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    isCreditView = _useState22[0],
    setIsCreditView = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    isOrderView = _useState24[0],
    setIsOrderView = _useState24[1];
  var _useState25 = (0, _react.useState)(false),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    isCreditPayment = _useState26[0],
    setIsCreditPayment = _useState26[1];

  // Funciones de paginas
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onInitAdd = function onInitAdd() {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(true);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onEntitySearch = function onEntitySearch() {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(true);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onAddEntity = function onAddEntity() {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(true);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onForm = function onForm() {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(true);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onLoginForm = function onLoginForm() {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(true);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onFormUpdate = function onFormUpdate() {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(true);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onLoginUpdateForm = function onLoginUpdateForm() {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(true);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onCreditList = function onCreditList() {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(true);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onCreditView = function onCreditView() {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(true);
    setIsOrderView(false);
    setIsCreditPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onOrderView = function onOrderView() {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(true);
    setIsCreditPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onCreditPayment = function onCreditPayment() {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(true);
    (0, _helpers.scrollToTop)();
  };
  var goForm = function goForm(entity) {
    useAttributes.actions.setEntity(entity);
    useAttributes.actions.changeEntityId(entity.id);
    onForm();
  };
  var goFormUpdate = function goFormUpdate(id) {
    useAttributes.actions.setCurrentId(id);
    onFormUpdate();
  };
  var returnInit = function returnInit() {
    useAttributes.actions.infoReset();
    onInit();
  };
  var processEntityBydocumentId = function processEntityBydocumentId(event) {
    if (event.key === 'Enter') {
      var currentEntity = useEntity.data.actions.findByDocumentIdDigit(useEntity.attributes.states.digit);
      if (currentEntity) {
        goForm(currentEntity);
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
      goForm(currentEntity);
    }
  };
  var processEntityByPhone = function processEntityByPhone(event) {
    if (event.key === 'Enter') {
      var currentEntity = useEntity.data.actions.findByPhone(useEntity.attributes.states.phone);
      if (currentEntity) {
        goForm(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };
  var processEntityByEmail = function processEntityByEmail(event) {
    if (event.key === 'Enter') {
      var currentEntity = useEntity.data.actions.findByEmail(useEntity.attributes.states.email);
      if (currentEntity) {
        goForm(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };
  var states = {
    isFetching: isFetching,
    isInit: isInit,
    isInitAdd: isInitAdd,
    isEntitySearch: isEntitySearch,
    isAddEntity: isAddEntity,
    isForm: isForm,
    isFormUpdate: isFormUpdate,
    isLoginUpdateForm: isLoginUpdateForm,
    isLoginForm: isLoginForm,
    isCreditList: isCreditList,
    isCreditView: isCreditView,
    isOrderView: isOrderView,
    isCreditPayment: isCreditPayment
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onInitAdd: onInitAdd,
    onEntitySearch: onEntitySearch,
    onAddEntity: onAddEntity,
    onForm: onForm,
    onFormUpdate: onFormUpdate,
    onLoginForm: onLoginForm,
    returnInit: returnInit,
    processEntityBydocumentId: processEntityBydocumentId,
    processEntityByName: processEntityByName,
    selectEntity: selectEntity,
    processEntityByPhone: processEntityByPhone,
    processEntityByEmail: processEntityByEmail,
    goForm: goForm,
    goFormUpdate: goFormUpdate,
    onLoginUpdateForm: onLoginUpdateForm,
    onCreditList: onCreditList,
    onCreditView: onCreditView,
    onCreditPayment: onCreditPayment,
    onOrderView: onOrderView
  };
  return {
    states: states,
    actions: actions
  };
};