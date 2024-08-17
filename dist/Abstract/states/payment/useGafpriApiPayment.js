"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiPayment = void 0;
var _helpers = require("../../../helpers");
var _constants = require("../../../constants");
var useGafpriApiPayment = exports.useGafpriApiPayment = function useGafpriApiPayment(_ref) {
  var usePages = _ref.usePages,
    useOrder = _ref.useOrder,
    useCredit = _ref.useCredit,
    useAttributes = _ref.useAttributes,
    useOrderReturn = _ref.useOrderReturn,
    useError = _ref.useError,
    token = _ref.token;
  var returnOrderPayment = function returnOrderPayment() {
    usePages.actions.onDeposit();
    useOrder.pages.actions.onOrderPayment();
  };
  var returnCreditPayment = function returnCreditPayment() {
    usePages.actions.onDeposit();
    useCredit.pages.actions.onCreditPayment();
  };
  var returnOrderReturnPayment = function returnOrderReturnPayment() {
    usePages.actions.onOrderReturn();
    useOrderReturn.pages.actions.onOrderPayment();
  };
  var fetchingOrderPayment = function fetchingOrderPayment() {
    usePages.actions.onFetching();
    useOrder.pages.actions.onFetching();
  };
  var fetchingOrderReturnPayment = function fetchingOrderReturnPayment() {
    usePages.actions.onFetching();
    useOrderReturn.pages.actions.onFetching();
  };
  var fetchingCreditPayment = function fetchingCreditPayment() {
    usePages.actions.onFetching();
    useCredit.pages.actions.onFetching();
  };
  var successOrderPayment = function successOrderPayment() {
    useAttributes.actions.infoReset();
    useOrder.attributes.actions.infoReset();
    usePages.actions.onDeposit();
    useOrder.pages.actions.onOrderList();
  };
  var successOrderReturnPayment = function successOrderReturnPayment() {
    useAttributes.actions.infoReset();
    useOrderReturn.pages.actions.returnInit();
    usePages.actions.onOrderReturn();
  };
  var successCreditPayment = function successCreditPayment() {
    useAttributes.actions.infoReset();
    useCredit.attributes.actions.infoReset();
    usePages.actions.onDeposit();
    useCredit.pages.actions.onCreditList();
  };
  var newErrorOrderPayment = function newErrorOrderPayment(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: returnOrderPayment
    });
  };
  var newErrorOrderReturnPayment = function newErrorOrderReturnPayment(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: returnOrderReturnPayment
    });
  };
  var newErrorCreditPayment = function newErrorCreditPayment(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: returnCreditPayment
    });
  };
  var addOrderPayment = function addOrderPayment() {
    if (useOrder.attributes.states.currentId > 0 && token) {
      var payload = {
        orderPostsId: useOrder.attributes.states.currentId,
        total: useAttributes.states.total,
        note: useAttributes.states.note,
        paymentMethods: useAttributes.useGeneralPaymentMethods.states.arrayPaymentMethod,
        posts: {
          visibility: 'public'
        }
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.PAYMENT_ORDER_ROUTE,
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: fetchingOrderPayment,
        functionSuccess: successOrderPayment,
        functionError: newErrorOrderPayment
      });
    }
  };
  var addOrderReturnPayment = function addOrderReturnPayment() {
    if (useOrderReturn.attributes.states.orderPostsId > 0 && token) {
      var payload = {
        total: useAttributes.states.total,
        note: useAttributes.states.note,
        paymentMethods: useAttributes.useGeneralPaymentMethods.states.arrayPaymentMethod,
        posts: {
          visibility: 'public'
        },
        orderReturn: {
          orderPostsId: useOrderReturn.attributes.states.orderPostsId,
          note: useOrderReturn.attributes.states.note,
          orderReturnItems: useOrderReturn.useProductItems.states.shoppingCart
        }
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.PAYMENT_ORDER_RETURN_ROUTE,
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: fetchingOrderReturnPayment,
        functionSuccess: successOrderReturnPayment,
        functionError: newErrorOrderReturnPayment
      });
    }
  };
  var addCreditPayment = function addCreditPayment() {
    if (parseFloat(useAttributes.states.total) > 0 && token) {
      var payload = {
        total: useAttributes.states.total,
        note: useAttributes.states.note,
        paymentMethods: useAttributes.useGeneralPaymentMethods.states.arrayPaymentMethod,
        posts: {
          visibility: 'public'
        }
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.PAYMENT_CREDIT_ROUTE,
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: fetchingCreditPayment,
        functionSuccess: successCreditPayment,
        functionError: newErrorCreditPayment
      });
    }
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    addOrderPayment: addOrderPayment,
    addCreditPayment: addCreditPayment,
    addOrderReturnPayment: addOrderReturnPayment
  };
  return {
    actions: actions
  };
};