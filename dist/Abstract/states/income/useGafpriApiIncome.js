"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiIncome = void 0;
var _constants = require("../../../constants");
var _helpers = require("../../../helpers");
var useGafpriApiIncome = exports.useGafpriApiIncome = function useGafpriApiIncome(_ref) {
  var usePages = _ref.usePages,
    useAttributes = _ref.useAttributes,
    useError = _ref.useError,
    token = _ref.token;
  var returnErrorAdd = function returnErrorAdd() {
    useAttributes.usePayment.actions.infoReset();
    usePages.actions.onIncomeForm();
  };
  var newError = function newError(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: returnErrorAdd
    });
  };
  var add = function add() {
    if (useAttributes.states.customerIdValid && useAttributes.states.projectsPostsIdValid && useAttributes.usePayment.useGeneralPaymentMethods.states.currenciesIdValid && parseFloat(useAttributes.states.total) === parseFloat(useAttributes.usePayment.states.total) && parseFloat(useAttributes.states.total) === useAttributes.usePayment.useGeneralPaymentMethods.states.totalPaymentMethod && parseFloat(useAttributes.states.total) === useAttributes.usePayment.useGeneralPaymentMethods.states.totalMethods && parseFloat(useAttributes.states.total) > 0 && token) {
      var payload = {
        customerId: useAttributes.states.customerId,
        projectsPostsId: useAttributes.states.projectsPostsId,
        note: useAttributes.states.note,
        subTotal: parseFloat(useAttributes.states.subTotal),
        subTotalTax: parseFloat(useAttributes.states.subTotalTax) || 0,
        total: parseFloat(useAttributes.states.total),
        posts: {
          visibility: 'public'
        },
        payment: {
          total: parseFloat(useAttributes.usePayment.states.total),
          note: useAttributes.usePayment.states.note,
          posts: {
            visibility: 'public'
          },
          paymentMethods: useAttributes.usePayment.useGeneralPaymentMethods.states.arrayPaymentMethod
        }
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.INCOME_ROUTE,
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.returnInit,
        functionError: newError
      });
    }
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    newError: newError,
    add: add
  };
  return {
    actions: actions
  };
};