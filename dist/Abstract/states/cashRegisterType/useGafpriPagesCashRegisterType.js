"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesCashRegisterType = useGafpriPagesCashRegisterType;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriPagesCashRegisterType(_ref) {
  var attributes = _ref.attributes,
    subPages = _ref.subPages;
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
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    modalPage = _useState10[0],
    setModalPage = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    isCashPortal = _useState12[0],
    setIsCashPortal = _useState12[1];
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setModalPage(false);
    setIsCashPortal(false);
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    setModalPage(false);
    setIsCashPortal(false);
  };
  var onAdd = function onAdd() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    setModalPage(false);
    setIsCashPortal(false);
  };
  var onUpdate = function onUpdate() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    setModalPage(false);
    setIsCashPortal(false);
  };
  var onCashPortal = function onCashPortal() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setModalPage(false);
    setIsCashPortal(true);
  };
  var goUpdate = function goUpdate(id) {
    attributes.actions.infoReset();
    attributes.actions.setCurrentId(id);
    onUpdate();
  };
  var goAdd = function goAdd() {
    attributes.actions.infoReset();
    onAdd();
  };
  var returnInit = function returnInit() {
    attributes.actions.infoReset();
    subPages.actions.onInit();
    onInit();
  };
  var openModalPage = function openModalPage() {
    setModalPage(true);
  };
  var closeModalPage = function closeModalPage() {
    setModalPage(false);
  };
  var goCashPortal = function goCashPortal(postsId) {
    attributes.actions.setCurrentId(postsId);
    onCashPortal();
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
    modalPage: modalPage,
    isCashPortal: isCashPortal
  };
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onAdd: onAdd,
    goAdd: goAdd,
    onUpdate: onUpdate,
    goUpdate: goUpdate,
    returnInit: returnInit,
    openModalPage: openModalPage,
    closeModalPage: closeModalPage,
    onCashPortal: onCashPortal,
    goCashPortal: goCashPortal
  };
  return {
    states: states,
    actions: actions
  };
}