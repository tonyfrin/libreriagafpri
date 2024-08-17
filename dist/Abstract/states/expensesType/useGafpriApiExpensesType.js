"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiExpensesType = useGafpriApiExpensesType;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _helpers = require("../../../helpers");
var _constants = require("../../../constants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useGafpriApiExpensesType(_ref) {
  var token = _ref.token,
    useError = _ref.useError,
    pages = _ref.pages,
    attributes = _ref.attributes,
    data = _ref.data;
  var newError = function newError(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.onAdd
    });
  };
  var newErrorDelete = function newErrorDelete(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.onInit
    });
  };
  var add = function add() {
    if (attributes.states.nameValid && attributes.states.parentIdValid && attributes.states.descriptionValid && attributes.states.statusValid && token) {
      var payload = {
        name: attributes.states.name,
        parentId: attributes.states.parentId === '' ? null : parseInt(attributes.states.parentId, 10),
        status: attributes.states.status
      };
      var updatedPayload = _objectSpread(_objectSpread({}, payload), attributes.states.description ? {
        description: attributes.states.description
      } : {});
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.EXPENSES_TYPE_ROUTE,
        initCredentials: updatedPayload,
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newError
      });
    }
  };
  function deleteParentId(id) {
    if (token) {
      var current = data.actions.getById(id);
      var payload = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, current !== null && current !== void 0 && current.name ? {
        name: current.name
      } : {}), current !== null && current !== void 0 && current.status ? {
        status: current.status
      } : {}), current !== null && current !== void 0 && current.description ? {
        description: current.description
      } : {}), {}, {
        parentId: null
      });
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.EXPENSES_TYPE_ROUTE, "/").concat(id),
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onChildrenFetching,
        functionSuccess: pages.actions.outChildrenFetching,
        functionError: pages.actions.outChildrenFetching
      });
    }
  }
  var update = function update() {
    if (attributes.states.nameValid && attributes.states.parentIdValid && attributes.states.descriptionValid && attributes.states.statusValid && token) {
      var payload = {
        name: attributes.states.name,
        parentId: attributes.states.parentId === '' ? null : parseInt(attributes.states.parentId, 10),
        status: attributes.states.status
      };
      var updatedPayload = _objectSpread(_objectSpread({}, payload), attributes.states.description ? {
        description: attributes.states.description
      } : {});
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.EXPENSES_TYPE_ROUTE, "/").concat(attributes.states.currentId),
        initCredentials: updatedPayload,
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newError
      });
    }
  };
  var erase = function erase(id) {
    if (token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'DELETE',
        initRoute: "".concat(_constants.EXPENSES_TYPE_ROUTE, "/").concat(id),
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
    deleteParentId: deleteParentId,
    add: add,
    update: update,
    erase: erase
  };
  return {
    actions: actions
  };
}