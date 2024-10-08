"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesBankType = useGafpriAttributesBankType;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Validations = require("../../../Validations");
var _Changes = require("../../../Changes");
function useGafpriAttributesBankType(_ref) {
  var _useSites$data$states, _useCurrencies$states;
  var useCurrencies = _ref.useCurrencies,
    useSites = _ref.useSites;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    sitesId = _useState2[0],
    setSitesId = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    sitesIdValid = _useState4[0],
    setSitesIdValid = _useState4[1];
  var _useState5 = (0, _react.useState)({
      value: '',
      label: 'Elija sucursal'
    }),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    sitesIdDefault = _useState6[0],
    setSitesIdDefault = _useState6[1];
  var sitesIdOptions = ((_useSites$data$states = useSites.data.states.sites) === null || _useSites$data$states === void 0 ? void 0 : _useSites$data$states.map(function (item) {
    return {
      value: "".concat(item.id),
      label: item.name
    };
  })) || [];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    name = _useState8[0],
    setName = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    nameValid = _useState10[0],
    setNameValid = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    bankName = _useState12[0],
    setBankName = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    bankNameValid = _useState14[0],
    setBankNameValid = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    account = _useState16[0],
    setAccount = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    accountValid = _useState18[0],
    setAccountValid = _useState18[1];
  var _useState19 = (0, _react.useState)(''),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    accountType = _useState20[0],
    setAccountType = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    accountTypeValid = _useState22[0],
    setAccountTypeValid = _useState22[1];
  var _useState23 = (0, _react.useState)({
      value: '',
      label: 'Elija tipo de cuenta'
    }),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    accountTypeDefault = _useState24[0],
    setAccountTypeDefault = _useState24[1];
  var accountTypeOptions = [{
    value: 'savings',
    label: 'Ahorro'
  }, {
    value: 'chekings',
    label: 'Corriente'
  }];
  var _useState25 = (0, _react.useState)(''),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    currency = _useState26[0],
    setCurrency = _useState26[1];
  var _useState27 = (0, _react.useState)(false),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    currencyValid = _useState28[0],
    setCurrencyValid = _useState28[1];
  var _useState29 = (0, _react.useState)({
      value: '',
      label: 'Elija moneda'
    }),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    currencyDefault = _useState30[0],
    setCurrencyDefault = _useState30[1];
  var currencyOptions = ((_useCurrencies$states = useCurrencies.states.currencies.data) === null || _useCurrencies$states === void 0 || (_useCurrencies$states = _useCurrencies$states.items) === null || _useCurrencies$states === void 0 ? void 0 : _useCurrencies$states.map(function (item) {
    return {
      value: "".concat(item.id),
      label: item.name
    };
  })) || [];
  var _useState31 = (0, _react.useState)([]),
    _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
    settings = _useState32[0],
    setSettings = _useState32[1];
  var _useState33 = (0, _react.useState)(true),
    _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
    settingsValid = _useState34[0],
    setSettingsValid = _useState34[1];
  var _useState35 = (0, _react.useState)(''),
    _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
    valueSettings = _useState36[0],
    setValueSettings = _useState36[1];
  var _useState37 = (0, _react.useState)(''),
    _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
    descriptionSettings = _useState38[0],
    setDescriptionSettings = _useState38[1];
  var _useState39 = (0, _react.useState)(0),
    _useState40 = (0, _slicedToArray2["default"])(_useState39, 2),
    currentId = _useState40[0],
    setCurrentId = _useState40[1];
  var infoReset = function infoReset() {
    setSitesId('');
    setSitesIdValid(false);
    setSitesIdDefault({
      value: '',
      label: 'Elija sucursal'
    });
    setName('');
    setNameValid(false);
    setBankName('');
    setBankNameValid(false);
    setAccount('');
    setAccountValid(false);
    setAccountType('');
    setAccountTypeValid(false);
    setAccountTypeDefault({
      value: '',
      label: 'Elija tipo de cuenta'
    });
    setCurrency('');
    setCurrencyValid(false);
    setCurrencyDefault({
      value: '',
      label: 'Elija moneda'
    });
    setSettings([]);
    setSettingsValid(true);
    setValueSettings('');
    setDescriptionSettings('');
    setCurrentId(0);
  };

  // Funciones de Validacion
  var validationSite = function validationSite(value) {
    return (0, _Validations.generalValidationSelectSite)({
      value: value,
      setValid: setSitesIdValid,
      currentValid: sitesIdValid
    });
  };
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)({
      value: value,
      setValid: setNameValid,
      currentValid: nameValid
    });
  };
  var validationBankName = function validationBankName(value) {
    return (0, _Validations.generalValidationBankName)({
      value: value,
      setValid: setBankNameValid,
      currentValid: bankNameValid
    });
  };
  var validationAccount = function validationAccount(value) {
    return (0, _Validations.generalValidationAccountNumber)({
      value: value,
      setValid: setAccountValid,
      currentValid: accountValid
    });
  };
  var validationAccountType = function validationAccountType(value) {
    return (0, _Validations.generalValidationSelectAccountType)({
      value: value,
      setValid: setAccountTypeValid,
      currentValid: accountTypeValid
    });
  };
  var validationCurrency = function validationCurrency(value) {
    return (0, _Validations.generalValidationSelectCurrencies)({
      value: value,
      setValid: setCurrencyValid,
      currentValid: currencyValid
    });
  };
  var validationSettings = function validationSettings(value) {
    return (0, _Validations.generalValidationBankSettings)({
      value: value,
      setValid: setSettingsValid,
      currentValid: settingsValid
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [sitesIdValid, nameValid, bankNameValid, accountValid, accountTypeValid, currencyValid, settingsValid]
    });
  };

  // Funciones de cambios
  var changeSitesId = function changeSitesId(options) {
    (0, _Changes.generalChangeSite)({
      options: options,
      validation: validationSite,
      setValue: setSitesId,
      setDefault: setSitesIdDefault
    });
  };
  var changeName = function changeName(value) {
    (0, _Changes.generalChangeName)({
      value: value,
      validation: validationName,
      setValue: setName
    });
  };
  var changeBankName = function changeBankName(value) {
    (0, _Changes.generalChangeBankName)({
      value: value,
      validation: validationBankName,
      setValue: setBankName
    });
  };
  var changeAccount = function changeAccount(value) {
    (0, _Changes.generalChangeAccountNumber)({
      value: value,
      validation: validationAccount,
      setValue: setAccount
    });
  };
  var changeAccountType = function changeAccountType(options) {
    (0, _Changes.generalChangeAccountType)({
      options: options,
      validation: validationAccountType,
      setValue: setAccountType,
      setDefault: setAccountTypeDefault
    });
  };
  var changeCurrency = function changeCurrency(options) {
    (0, _Changes.generalChangeCurrency)({
      options: options,
      validation: validationCurrency,
      setDefault: setCurrencyDefault,
      setValue: setCurrency
    });
  };
  var changeSettings = function changeSettings(value) {
    (0, _Changes.generalChangeSettings)({
      newValue: value,
      selectedOptions: settings,
      validation: validationSettings,
      setValue: setSettings
    });
  };
  var addSettings = function addSettings() {
    if (valueSettings && descriptionSettings) {
      var newAttributes = {
        name: valueSettings,
        value: descriptionSettings
      };
      setValueSettings('');
      setDescriptionSettings('');
      changeSettings(newAttributes);
    }
  };
  var onRemoveSettings = function onRemoveSettings(value) {
    var updatedAttributes = settings.filter(function (attribute) {
      return attribute.name !== value;
    });
    setSettings(updatedAttributes);
  };

  /**
   * Export
   *
   *
   */
  var states = {
    sitesId: sitesId,
    sitesIdValid: sitesIdValid,
    sitesIdDefault: sitesIdDefault,
    sitesIdOptions: sitesIdOptions,
    name: name,
    nameValid: nameValid,
    bankName: bankName,
    bankNameValid: bankNameValid,
    account: account,
    accountValid: accountValid,
    accountType: accountType,
    accountTypeValid: accountTypeValid,
    accountTypeDefault: accountTypeDefault,
    accountTypeOptions: accountTypeOptions,
    currency: currency,
    currencyValid: currencyValid,
    currencyDefault: currencyDefault,
    currencyOptions: currencyOptions,
    settings: settings,
    settingsValid: settingsValid,
    valueSettings: valueSettings,
    descriptionSettings: descriptionSettings,
    currentId: currentId
  };
  var actions = {
    infoReset: infoReset,
    validationName: validationName,
    validationSite: validationSite,
    validationBankName: validationBankName,
    validationAccount: validationAccount,
    validationAccountType: validationAccountType,
    validationCurrency: validationCurrency,
    validationSettings: validationSettings,
    validationButtonNext: validationButtonNext,
    changeSitesId: changeSitesId,
    changeName: changeName,
    changeBankName: changeBankName,
    changeAccount: changeAccount,
    changeAccountType: changeAccountType,
    changeCurrency: changeCurrency,
    changeSettings: changeSettings,
    setCurrentId: setCurrentId,
    setSettings: setSettings,
    setValueSettings: setValueSettings,
    setDescriptionSettings: setDescriptionSettings,
    addSettings: addSettings,
    onRemoveSettings: onRemoveSettings
  };
  return {
    states: states,
    actions: actions
  };
}