"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiWalletAccount = useGafpriApiWalletAccount;
var _helpers = require("../../../../helpers");
var _constants = require("../../../../constants");
function useGafpriApiWalletAccount(_ref) {
  var token = _ref.token,
    useError = _ref.useError,
    pages = _ref.pages,
    attributes = _ref.attributes;
  var newErrorAdd = function newErrorAdd(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.onAdd
    });
  };
  var add = function add() {
    if (attributes.states.nameValid && attributes.states.userIdValid && attributes.states.statusValid && attributes.states.currencyValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.WALLET_ACCOUNT_ROUTE,
        initCredentials: {
          userId: attributes.states.userId,
          name: attributes.states.name,
          currenciesId: attributes.states.currency,
          status: attributes.states.status
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
      functionAction: pages.actions.onUpdate
    });
  };
  var update = function update() {
    if (attributes.states.nameValid && attributes.states.statusValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.WALLET_ACCOUNT_ROUTE, "/").concat(attributes.states.currentId),
        initCredentials: {
          name: attributes.states.name,
          status: attributes.states.status
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
        initRoute: "".concat(_constants.WALLET_ACCOUNT_ROUTE, "/").concat(id),
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