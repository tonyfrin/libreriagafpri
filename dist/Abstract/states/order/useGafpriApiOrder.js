"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiOrder = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _constants = require("../../../constants");
var _helpers = require("../../../helpers");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useGafpriApiOrder = exports.useGafpriApiOrder = function useGafpriApiOrder(_ref) {
  var usePages = _ref.usePages,
    useAttributes = _ref.useAttributes,
    useProductItems = _ref.useProductItems,
    useError = _ref.useError,
    token = _ref.token;
  var newError = function newError(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: usePages.actions.onSales
    });
  };
  var newErrorUpdate = function newErrorUpdate(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: usePages.actions.returnInit
    });
  };
  var newErrorDelete = function newErrorDelete(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: usePages.actions.onOrderList
    });
  };
  var add = function add() {
    if (useAttributes.states.customerIdValid && useAttributes.states.referredIdValid && useProductItems.actions.calculateTotal() > 0 && token) {
      var payload = {
        customerId: useAttributes.states.customerId,
        note: useAttributes.states.note,
        salesChannel: useAttributes.states.salesChannel,
        orderItems: useProductItems.states.shoppingCart,
        posts: {
          visibility: 'public'
        }
      };
      var updatedPayload = _objectSpread(_objectSpread({}, payload), useAttributes.states.referredId !== 0 ? {
        referredId: useAttributes.states.referredId
      } : {
        referredId: null
      });
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.ORDER_ROUTE,
        initCredentials: updatedPayload,
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.returnInit,
        functionError: newError
      });
    }
  };
  var update = function update() {
    if (useAttributes.states.customerIdValid && useAttributes.states.referredIdValid && useProductItems.actions.calculateTotal() > 0 && token) {
      var payload = {
        customerId: useAttributes.states.customerId,
        referredId: useAttributes.states.referredId,
        note: useAttributes.states.note,
        salesChannel: useAttributes.states.salesChannel,
        orderItems: useProductItems.states.shoppingCart
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.ORDER_ROUTE, "/").concat(useAttributes.states.currentId),
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.returnInit,
        functionError: newErrorUpdate
      });
    }
  };
  var erase = function erase(id) {
    if (token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'DELETE',
        initRoute: "".concat(_constants.ORDER_ROUTE, "/").concat(id),
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.onOrderList,
        functionError: newErrorDelete
      });
    }
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    newError: newError,
    newErrorUpdate: newErrorUpdate,
    add: add,
    update: update,
    erase: erase
  };
  return {
    actions: actions
  };
};