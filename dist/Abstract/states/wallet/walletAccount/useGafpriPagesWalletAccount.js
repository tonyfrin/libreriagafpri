"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesWalletAccount = useGafpriPagesWalletAccount;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriPagesWalletAccount(_ref) {
  var attributes = _ref.attributes,
    useUser = _ref.useUser,
    useError = _ref.useError;
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
    isAdd = _useState6[0],
    setIsAdd = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isUpdate = _useState8[0],
    setIsUpdate = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isInitUser = _useState10[0],
    setIsInitUser = _useState10[1];
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsInitUser(false);
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    setIsInitUser(false);
  };
  var onAdd = function onAdd() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    setIsInitUser(false);
  };
  var onUpdate = function onUpdate() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    setIsInitUser(false);
  };
  var onInitUser = function onInitUser() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsInitUser(true);
  };
  var goUpdate = function goUpdate(id) {
    attributes.actions.infoReset();
    attributes.actions.setCurrentId(id);
    onUpdate();
  };
  var returnInit = function returnInit() {
    attributes.actions.infoReset();
    onInit();
  };
  var goAdd = function goAdd(user) {
    attributes.actions.infoReset();
    attributes.actions.setUser(user);
    attributes.actions.changeUserId(user.id);
    onAdd();
  };
  var processUserByUserName = function processUserByUserName(event) {
    if (event.key === 'Enter') {
      var currentUser = useUser.actions.findByUserName(useUser.states.name);
      if (currentUser) {
        goAdd(currentUser);
      } else {
        useError.actions.changeError(['No se encontró un usuario con el nombre ingresado.']);
      }
    }
  };
  var processUserByPhone = function processUserByPhone(event) {
    if (event.key === 'Enter') {
      var currentUser = useUser.actions.findByPhone(useUser.states.phoneNumber);
      if (currentUser) {
        goAdd(currentUser);
      } else {
        useError.actions.changeError(['No se encontró un usuario con el nombre ingresado.']);
      }
    }
  };
  var processUserByEmail = function processUserByEmail(event) {
    if (event.key === 'Enter') {
      var currentUser = useUser.actions.findByEmail(useUser.states.email);
      if (currentUser) {
        goAdd(currentUser);
      } else {
        useError.actions.changeError(['No se encontró un usuario con el nombre ingresado.']);
      }
    }
  };

  /**
   * Export
   *
   *
   */
  var states = {
    isFetching: isFetching,
    isInit: isInit,
    isAdd: isAdd,
    isUpdate: isUpdate,
    isInitUser: isInitUser
  };
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onAdd: onAdd,
    goAdd: goAdd,
    onUpdate: onUpdate,
    goUpdate: goUpdate,
    returnInit: returnInit,
    onInitUser: onInitUser,
    processUserByUserName: processUserByUserName,
    processUserByPhone: processUserByPhone,
    processUserByEmail: processUserByEmail
  };
  return {
    states: states,
    actions: actions
  };
}