"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesWalletAccount = useGafpriAttributesWalletAccount;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Validations = require("../../../../Validations");
var _Changes = require("../../../../Changes");
function useGafpriAttributesWalletAccount(_ref) {
  var _useCurrencies$states;
  var useCurrencies = _ref.useCurrencies;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    userId = _useState2[0],
    setUserId = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    userIdValid = _useState4[0],
    setUserIdValid = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    user = _useState6[0],
    setUser = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    currency = _useState8[0],
    setCurrency = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    currencyValid = _useState10[0],
    setCurrencyValid = _useState10[1];
  var _useState11 = (0, _react.useState)({
      value: '',
      label: 'Elija moneda'
    }),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    currencyDefault = _useState12[0],
    setCurrencyDefault = _useState12[1];
  var currencyOptions = ((_useCurrencies$states = useCurrencies.states.currencies.data) === null || _useCurrencies$states === void 0 || (_useCurrencies$states = _useCurrencies$states.items) === null || _useCurrencies$states === void 0 ? void 0 : _useCurrencies$states.map(function (item) {
    return {
      value: "".concat(item.id),
      label: item.name
    };
  })) || [];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    name = _useState14[0],
    setName = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    nameValid = _useState16[0],
    setNameValid = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    status = _useState18[0],
    setStatus = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    statusValid = _useState20[0],
    setStatusValid = _useState20[1];
  var _useState21 = (0, _react.useState)({
      value: '',
      label: 'Elija el status'
    }),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    statusDefault = _useState22[0],
    setStatusDefault = _useState22[1];
  var statusOptions = [{
    value: 'active',
    label: 'Activa'
  }, {
    value: 'inactive',
    label: 'Inactiva'
  }];
  var _useState23 = (0, _react.useState)(0),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    currentId = _useState24[0],
    setCurrentId = _useState24[1];
  var infoReset = function infoReset() {
    setUserId(0);
    setUserIdValid(false);
    setUser(null);
    setName('');
    setNameValid(false);
    setCurrency('');
    setCurrencyValid(false);
    setCurrencyDefault({
      value: '',
      label: 'Elija moneda'
    });
    setStatus('');
    setStatusValid(false);
    setStatusDefault({
      value: '',
      label: 'Elija el status'
    });
    setCurrentId(0);
  };

  // Funciones de Validacion
  var validationUserId = function validationUserId(value) {
    var valid = value > 0;
    if (valid !== userIdValid) {
      setUserIdValid(valid);
    }
    return valid;
  };
  var validationCurrency = function validationCurrency(value) {
    return (0, _Validations.generalValidationSelectCurrencies)({
      value: value,
      setValid: setCurrencyValid,
      currentValid: currencyValid
    });
  };
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)({
      value: value,
      setValid: setNameValid,
      currentValid: nameValid
    });
  };
  var validationStatus = function validationStatus(value) {
    return (0, _Validations.generalValidationStatus)({
      value: value,
      setValid: setStatusValid,
      currentValid: statusValid
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [userIdValid, nameValid, currencyValid, statusValid]
    });
  };

  // Funciones de cambios
  var changeUserId = function changeUserId(value) {
    var valid = validationUserId(value);
    if (valid) {
      setUserId(value);
    }
  };
  var changeCurrency = function changeCurrency(options) {
    (0, _Changes.generalChangeCurrency)({
      options: options,
      validation: validationCurrency,
      setDefault: setCurrencyDefault,
      setValue: setCurrency
    });
  };
  var changeName = function changeName(value) {
    (0, _Changes.generalChangeName)({
      value: value,
      validation: validationName,
      setValue: setName
    });
  };
  var changeStatus = function changeStatus(options) {
    (0, _Changes.generalChangeStatus)({
      options: options,
      validation: validationStatus,
      setDefault: setStatusDefault,
      setValue: setStatus
    });
  };

  /**
   * Export
   *
   *
   */
  var states = {
    userId: userId,
    userIdValid: userIdValid,
    user: user,
    name: name,
    nameValid: nameValid,
    currency: currency,
    currencyValid: currencyValid,
    currencyDefault: currencyDefault,
    currencyOptions: currencyOptions,
    status: status,
    statusValid: statusValid,
    statusDefault: statusDefault,
    statusOptions: statusOptions,
    currentId: currentId
  };
  var actions = {
    infoReset: infoReset,
    validationName: validationName,
    validationUserId: validationUserId,
    validationCurrency: validationCurrency,
    validationStatus: validationStatus,
    validationButtonNext: validationButtonNext,
    changeUserId: changeUserId,
    setUser: setUser,
    changeCurrency: changeCurrency,
    changeName: changeName,
    changeStatus: changeStatus,
    setCurrentId: setCurrentId
  };
  return {
    states: states,
    actions: actions
  };
}