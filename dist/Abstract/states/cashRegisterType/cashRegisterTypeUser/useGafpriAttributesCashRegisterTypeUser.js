"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesCashRegisterTypeUser = useGafpriAttributesCashRegisterTypeUser;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriAttributesCashRegisterTypeUser(_ref) {
  var useUser = _ref.useUser;
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    authorized = _useState2[0],
    setAuthorized = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    selectedAuthorizedValue = _useState4[0],
    setSelectedAuthorizedValue = _useState4[1];
  var authorizedDefault = {
    value: '',
    label: 'Selecciona un usuario'
  };
  var authorizedOptions = useUser.actions.getOptionsUsers();
  var _useState5 = (0, _react.useState)([]),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    supervisor = _useState6[0],
    setSupervisor = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    selectedSupervisorValue = _useState8[0],
    setSelectedSupervisorValue = _useState8[1];
  var supervisorDefault = {
    value: '',
    label: 'Selecciona un usuario'
  };
  var supervisorOptions = useUser.actions.getOptionsUsers();
  var infoReset = function infoReset() {
    setAuthorized([]);
    setSelectedAuthorizedValue('');
    setSupervisor([]);
    setSelectedSupervisorValue('');
  };

  // Funciones de Change

  var removeAuthorized = function removeAuthorized(index) {
    setAuthorized(function (prevUsers) {
      var updatedUsers = (0, _toConsumableArray2["default"])(prevUsers);
      if (index >= 0 && index < updatedUsers.length) {
        updatedUsers.splice(index, 1);
      }
      return updatedUsers;
    });
  };
  var addAuthorized = function addAuthorized(id) {
    var userId = parseInt(id, 10);
    var userExists = authorized.some(function (user) {
      return user.userId === userId;
    });
    if (!userExists) {
      var user = {
        userId: userId,
        isAuthorized: true,
        isSupervisor: false
      };
      setAuthorized(function (prevUsers) {
        return [].concat((0, _toConsumableArray2["default"])(prevUsers), [user]);
      });
    }
  };
  var removeSupervisor = function removeSupervisor(index) {
    setSupervisor(function (prevUsers) {
      var updatedUsers = (0, _toConsumableArray2["default"])(prevUsers);
      if (index >= 0 && index < updatedUsers.length) {
        updatedUsers.splice(index, 1);
      }
      return updatedUsers;
    });
  };
  var addSupervisor = function addSupervisor(id) {
    var userId = parseInt(id, 10);
    var userExists = supervisor.some(function (user) {
      return user.userId === userId;
    });
    if (!userExists) {
      var user = {
        userId: userId,
        isAuthorized: false,
        isSupervisor: true
      };
      setSupervisor(function (prevUsers) {
        return [].concat((0, _toConsumableArray2["default"])(prevUsers), [user]);
      });
    }
  };

  /**
   * Export
   *
   *
   */
  var states = {
    authorized: authorized,
    supervisor: supervisor,
    selectedAuthorizedValue: selectedAuthorizedValue,
    selectedSupervisorValue: selectedSupervisorValue,
    authorizedDefault: authorizedDefault,
    authorizedOptions: authorizedOptions,
    supervisorDefault: supervisorDefault,
    supervisorOptions: supervisorOptions
  };
  var actions = {
    infoReset: infoReset,
    removeAuthorized: removeAuthorized,
    addAuthorized: addAuthorized,
    removeSupervisor: removeSupervisor,
    addSupervisor: addSupervisor,
    setAuthorized: setAuthorized,
    setSupervisor: setSupervisor
  };
  return {
    states: states,
    actions: actions
  };
}