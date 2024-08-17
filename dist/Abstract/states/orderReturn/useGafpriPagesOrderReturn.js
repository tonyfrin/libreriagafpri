"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesOrderReturn = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _helpers = require("../../../helpers");
var useGafpriPagesOrderReturn = exports.useGafpriPagesOrderReturn = function useGafpriPagesOrderReturn(_ref) {
  var useAttributes = _ref.useAttributes,
    useOrder = _ref.useOrder,
    useEntity = _ref.useEntity,
    useError = _ref.useError,
    useProductItems = _ref.useProductItems;
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
    isSales = _useState6[0],
    setIsSales = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isOrderPayment = _useState8[0],
    setIsOrderPayment = _useState8[1];

  // Funciones de paginas
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsSales(false);
    setIsOrderPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsSales(false);
    setIsOrderPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onSales = function onSales() {
    setIsFetching(false);
    setIsInit(false);
    setIsSales(true);
    setIsOrderPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onOrderPayment = function onOrderPayment() {
    setIsFetching(false);
    setIsInit(false);
    setIsSales(false);
    setIsOrderPayment(true);
    (0, _helpers.scrollToTop)();
  };
  var goSales = function goSales() {
    var orderPostsId = useAttributes.states.orderPostsId;
    var currentOrder = useOrder.data.actions.getById(orderPostsId);
    if (currentOrder && (currentOrder.posts.status === 'prepare' || currentOrder.posts.status === 'dispatching' || currentOrder.posts.status === 'completed')) {
      var currentEntity = useEntity.data.actions.getById(currentOrder.customerId);
      useAttributes.actions.setEntity(currentEntity);
      useProductItems.actions.uploadOrderItems(currentOrder.orderItems);
      onSales();
    } else {
      useError.actions.changeError(['No se encontro el pedido']);
    }
  };
  var returnInit = function returnInit() {
    useAttributes.actions.infoReset();
    onInit();
  };
  var states = {
    isFetching: isFetching,
    isInit: isInit,
    isSales: isSales,
    isOrderPayment: isOrderPayment
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onSales: onSales,
    returnInit: returnInit,
    goSales: goSales,
    onOrderPayment: onOrderPayment
  };
  return {
    states: states,
    actions: actions
  };
};