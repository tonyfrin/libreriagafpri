"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesExpensesType = useGafpriPagesExpensesType;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _helpers = require("../../../helpers");
function useGafpriPagesExpensesType(_ref) {
  var attributes = _ref.attributes;
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
    childrenFetching = _useState10[0],
    setChildrenFetching = _useState10[1];
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    (0, _helpers.scrollToTop)();
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    (0, _helpers.scrollToTop)();
  };
  var onAdd = function onAdd() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    (0, _helpers.scrollToTop)();
  };
  var onUpdate = function onUpdate() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    (0, _helpers.scrollToTop)();
  };
  var onChildrenFetching = function onChildrenFetching() {
    setChildrenFetching(true);
  };
  var outChildrenFetching = function outChildrenFetching() {
    setChildrenFetching(false);
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
    onInit();
  };

  /**
   * Export
   *
   *
   */
  var states = {
    isFetching: isFetching,
    isAdd: isAdd,
    isInit: isInit,
    isUpdate: isUpdate,
    childrenFetching: childrenFetching
  };
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    returnInit: returnInit,
    onAdd: onAdd,
    goAdd: goAdd,
    onUpdate: onUpdate,
    goUpdate: goUpdate,
    onChildrenFetching: onChildrenFetching,
    outChildrenFetching: outChildrenFetching
  };
  return {
    states: states,
    actions: actions
  };
}