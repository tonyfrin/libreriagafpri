"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiCashRegisterType = useGafpriApiCashRegisterType;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _helpers = require("../../../helpers");
var _constants = require("../../../constants");
function useGafpriApiCashRegisterType(_ref) {
  var token = _ref.token,
    useError = _ref.useError,
    pages = _ref.pages,
    attributes = _ref.attributes,
    crtu = _ref.crtu;
  var newErrorAdd = function newErrorAdd(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.onAdd
    });
  };
  var newErrorConciliate = function newErrorConciliate(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.onCashPortal
    });
  };
  var add = function add() {
    if (attributes.states.nameValid && attributes.states.siteValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.CASH_REGISTER_TYPE_ROUTE,
        initCredentials: {
          name: attributes.states.name,
          sitesId: attributes.states.site,
          cashRegisterTypeUser: [].concat((0, _toConsumableArray2["default"])(crtu.states.authorized), (0, _toConsumableArray2["default"])(crtu.states.supervisor)),
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
      functionAction: pages.actions.onUpdate
    });
  };
  var update = function update() {
    if (attributes.states.nameValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.CASH_REGISTER_TYPE_ROUTE, "/").concat(attributes.states.currentId),
        initCredentials: {
          name: attributes.states.name,
          cashRegisterTypeUser: [].concat((0, _toConsumableArray2["default"])(crtu.states.authorized), (0, _toConsumableArray2["default"])(crtu.states.supervisor))
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
        initRoute: "".concat(_constants.CASH_REGISTER_TYPE_ROUTE, "/").concat(id),
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorDelete
      });
    }
  };
  var conciliate = function conciliate(cashRegisterPostsId) {
    if (token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.CASH_REGISTER_TYPE_ROUTE, "/conciliate/").concat(attributes.states.currentId),
        initCredentials: {
          cashRegisterPostsId: cashRegisterPostsId
        },
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorConciliate
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
    erase: erase,
    conciliate: conciliate
  };
  return {
    actions: actions
  };
}