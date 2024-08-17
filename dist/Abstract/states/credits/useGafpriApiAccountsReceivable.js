"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiAccountsReceivable = useGafpriApiAccountsReceivable;
var _helpers = require("../../../helpers");
var _constants = require("../../../constants");
function useGafpriApiAccountsReceivable(_ref) {
  var token = _ref.token,
    useError = _ref.useError,
    pages = _ref.pages,
    attributes = _ref.attributes;
  var newErrorAdd = function newErrorAdd(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.onForm
    });
  };
  var add = function add() {
    if (attributes.states.entityIdValid && attributes.states.authorizedLoginValid && attributes.states.authorizedPasswordValid && attributes.states.limitValid && attributes.states.timeToPayValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.ACCOUNTS_RECEIVABLE_ROUTE,
        initCredentials: {
          entityId: attributes.states.entityId,
          authorizedLogin: attributes.states.authorizedLogin,
          authorizedPassword: attributes.states.authorizedPassword,
          limit: attributes.states.limit,
          timeToPay: attributes.states.timeToPay,
          posts: {
            visibility: 'public'
          }
        },
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorAdd
      });
    }
  };
  var newErrorUpdate = function newErrorUpdate(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.onFormUpdate
    });
  };
  var update = function update() {
    if (attributes.states.authorizedLoginValid && attributes.states.authorizedPasswordValid && attributes.states.limitValid && attributes.states.timeToPayValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.ACCOUNTS_RECEIVABLE_ROUTE, "/").concat(attributes.states.currentId),
        initCredentials: {
          authorizedLogin: attributes.states.authorizedLogin,
          authorizedPassword: attributes.states.authorizedPassword,
          limit: attributes.states.limit,
          timeToPay: attributes.states.timeToPay,
          posts: {
            visibility: 'public'
          }
        },
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorUpdate
      });
    }
  };
  var newErrorDelete = function newErrorDelete(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.returnInit
    });
  };
  var erase = function erase(id) {
    if (token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'DELETE',
        initRoute: "".concat(_constants.ACCOUNTS_RECEIVABLE_ROUTE, "/").concat(id),
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorDelete
      });
    }
  };

  /**
   * Export
   *
   *
   */

  var actions = {
    update: update,
    add: add,
    erase: erase
  };
  return {
    actions: actions
  };
}