"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesEntity = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _helpers = require("../../../helpers");
var useGafpriPagesEntity = exports.useGafpriPagesEntity = function useGafpriPagesEntity(_ref) {
  var useAttributes = _ref.useAttributes;
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
    isView = _useState10[0],
    setIsView = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    isAddAddress = _useState12[0],
    setIsAddAddress = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    isAddDocument = _useState14[0],
    setIsAddDocument = _useState14[1];

  // Funciones de paginas
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
    (0, _helpers.scrollToTop)();
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
    (0, _helpers.scrollToTop)();
  };
  var onAdd = function onAdd() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
    (0, _helpers.scrollToTop)();
  };
  var onUpdate = function onUpdate() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
    (0, _helpers.scrollToTop)();
  };
  var onView = function onView() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(true);
    setIsAddAddress(false);
    setIsAddDocument(false);
    (0, _helpers.scrollToTop)();
  };
  var onAddAddress = function onAddAddress() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(true);
    setIsAddDocument(false);
    (0, _helpers.scrollToTop)();
  };
  var onAddDocument = function onAddDocument() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(true);
    (0, _helpers.scrollToTop)();
  };
  var goUpdate = function goUpdate(id) {
    useAttributes.actions.infoReset();
    useAttributes.actions.setCurrentId(id);
    onUpdate();
  };
  var goAddPersonal = function goAddPersonal() {
    useAttributes.actions.infoReset();
    useAttributes.actions.setType('personal');
    useAttributes.actions.setFormType('personal');
    onAdd();
  };
  var goAddLegal = function goAddLegal() {
    useAttributes.actions.infoReset();
    useAttributes.actions.setType('legal');
    useAttributes.actions.setFormType('legal');
    onAdd();
  };
  var goView = function goView(id) {
    useAttributes.actions.infoReset();
    useAttributes.actions.setCurrentId(id);
    onView();
  };
  var returnInit = function returnInit() {
    useAttributes.actions.infoReset();
    onInit();
  };
  var states = {
    isFetching: isFetching,
    isInit: isInit,
    isAdd: isAdd,
    isUpdate: isUpdate,
    isView: isView,
    isAddAddress: isAddAddress,
    isAddDocument: isAddDocument
  };
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onAdd: onAdd,
    onUpdate: onUpdate,
    goUpdate: goUpdate,
    goAddPersonal: goAddPersonal,
    goAddLegal: goAddLegal,
    goView: goView,
    returnInit: returnInit,
    onAddAddress: onAddAddress,
    onAddDocument: onAddDocument
  };
  return {
    states: states,
    actions: actions
  };
};