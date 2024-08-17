"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesTaxRates = useGafpriAttributesTaxRates;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Changes = require("../../../../Changes");
var _Validations = require("../../../../Validations");
var _constants = require("../../../../constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function useGafpriAttributesTaxRates() {
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isReset = _useState2[0],
    setIsReset = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    taxClassesId = _useState4[0],
    setTaxClassId = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    taxClassesIdValid = _useState6[0],
    setTaxClassIdValid = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    rate = _useState8[0],
    setRate = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    rateValid = _useState10[0],
    setRateValid = _useState10[1];
  var _useState11 = (0, _react.useState)(_constants.CITY_DEFAULT.value),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    city = _useState12[0],
    setCity = _useState12[1];
  var _useState13 = (0, _react.useState)(true),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    cityValid = _useState14[0],
    setCityValid = _useState14[1];
  var _useState15 = (0, _react.useState)(_constants.CITY_DEFAULT),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    cityDefault = _useState16[0],
    setCityDefault = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    cityOptions = _useState18[0],
    setCityOptions = _useState18[1];
  var _useState19 = (0, _react.useState)(_constants.STATE_COUNTRY_DEFAULT.value),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    state = _useState20[0],
    setStateCountry = _useState20[1];
  var _useState21 = (0, _react.useState)(true),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    stateCountryValid = _useState22[0],
    setStateCountryValid = _useState22[1];
  var _useState23 = (0, _react.useState)(_constants.STATE_COUNTRY_DEFAULT),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    stateCountryDefault = _useState24[0],
    setStateCountryDefault = _useState24[1];
  var _useState25 = (0, _react.useState)([]),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    stateCountryOptions = _useState26[0],
    setStateCountryOptions = _useState26[1];
  var _useState27 = (0, _react.useState)(_constants.COUNTRY_DEFAULT.value),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    country = _useState28[0],
    setCountry = _useState28[1];
  var _useState29 = (0, _react.useState)(true),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    countryValid = _useState30[0],
    setCountryValid = _useState30[1];
  var _useState31 = (0, _react.useState)(_constants.COUNTRY_DEFAULT),
    _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
    countryDefault = _useState32[0],
    setCountryDefault = _useState32[1];
  var countryOptions = [];
  _constants.Countries.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
      countryOptions.push({
        value: key,
        label: item[key]
      });
    });
  });
  var _useState33 = (0, _react.useState)(''),
    _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
    postCode = _useState34[0],
    setPostCode = _useState34[1];
  var _useState35 = (0, _react.useState)(true),
    _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
    postCodeValid = _useState36[0],
    setPostCodeValid = _useState36[1];
  var _useState37 = (0, _react.useState)(0),
    _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
    currentId = _useState38[0],
    setCurrentId = _useState38[1];
  var infoReset = function infoReset() {
    setIsReset(true);
    setTaxClassId('');
    setTaxClassIdValid(false);
    setRate('');
    setRateValid(false);
    setCity(_constants.CITY_DEFAULT.value);
    setCityValid(true);
    setCityDefault(_constants.CITY_DEFAULT);
    setStateCountry(_constants.STATE_COUNTRY_DEFAULT.value);
    setStateCountryValid(true);
    setStateCountryDefault(_constants.STATE_COUNTRY_DEFAULT);
    setCountry(_constants.COUNTRY_DEFAULT.value);
    setCountryValid(true);
    setCountryDefault(_constants.COUNTRY_DEFAULT);
    setPostCode('');
    setPostCodeValid(false);
  };

  // Funciones de Validacion
  var validationTaxClassesId = function validationTaxClassesId(value) {
    return (0, _Validations.generalValidationTaxClassesId)({
      value: value,
      setValid: setTaxClassIdValid,
      currentValid: taxClassesIdValid,
      required: true,
      inputId: _constants.TAX_RATES_ROUTE
    });
  };
  var validationRate = function validationRate(value) {
    return (0, _Validations.generalValidationRate)({
      value: value,
      setValid: setRateValid,
      currentValid: rateValid,
      required: true,
      inputId: _constants.TAX_RATES_ROUTE
    });
  };
  var validationCity = function validationCity(value) {
    return (0, _Validations.generalValidationSelectCity)({
      value: value,
      setValid: setCityValid,
      currentValid: cityValid,
      inputId: _constants.TAX_RATES_ROUTE
    });
  };
  var validationStateCountry = function validationStateCountry(value) {
    return (0, _Validations.generalValidationSelectStateCountry)({
      value: value,
      setValid: setStateCountryValid,
      currentValid: stateCountryValid,
      inputId: _constants.TAX_RATES_ROUTE
    });
  };
  var validationCountry = function validationCountry(value) {
    return (0, _Validations.generalValidationSelectCountry)({
      value: value,
      setValid: setCountryValid,
      currentValid: countryValid,
      inputId: _constants.TAX_RATES_ROUTE
    });
  };
  var validationPostCode = function validationPostCode(value) {
    return (0, _Validations.generalValidationPostCode)({
      value: value,
      setValid: setPostCodeValid,
      currentValid: postCodeValid,
      required: false,
      inputId: _constants.TAX_RATES_ROUTE
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [taxClassesIdValid, rateValid, cityValid, stateCountryValid, countryValid, postCodeValid],
      inputId: _constants.TAX_RATES_ROUTE
    });
  };

  // Funciones de cambios

  var changeTaxClasses = function changeTaxClasses(value) {
    (0, _Changes.generalChangeTaxClasses)({
      value: value,
      validation: validationTaxClassesId,
      setValue: setTaxClassId
    });
  };
  var changeRate = function changeRate(value) {
    (0, _Changes.generalChangeRate)({
      value: value,
      validation: validationRate,
      setValue: setRate
    });
  };
  var changeCity = function changeCity(options) {
    (0, _Changes.generalChangeCityStateCountry)({
      options: options,
      validation: validationCity,
      setDefault: setCityDefault,
      setValue: setCity,
      setIsReset: setIsReset
    });
  };
  var changeCityOptions = _react["default"].useCallback(function () {
    (0, _Changes.generalChangeCityOptions)({
      country: country,
      state: state,
      setCityDefault: setCityDefault,
      setCity: setCity,
      setCityOptions: setCityOptions,
      isReset: isReset
    });
  }, [country, state]); // eslint-disable-line react-hooks/exhaustive-deps

  var changeStateCountry = function changeStateCountry(options) {
    (0, _Changes.generalChangeCityStateCountry)({
      options: options,
      validation: validationStateCountry,
      setDefault: setStateCountryDefault,
      setValue: setStateCountry,
      setIsReset: setIsReset
    });
  };
  var changeStateCountryOptions = _react["default"].useCallback(function () {
    (0, _Changes.generalChangeStateCountryOptions)({
      country: country,
      setStateCountryDefault: setStateCountryDefault,
      setStateCountry: setStateCountry,
      setStateCountryOptions: setStateCountryOptions,
      isReset: isReset
    });
  }, [country]); // eslint-disable-line react-hooks/exhaustive-deps

  var changeCountry = function changeCountry(options) {
    (0, _Changes.generalChangeCityStateCountry)({
      options: options,
      validation: validationCountry,
      setDefault: setCountryDefault,
      setValue: setCountry,
      setIsReset: setIsReset
    });
  };
  var changePostCode = function changePostCode(newPostCode) {
    (0, _Changes.generalChangePostCode)({
      value: newPostCode,
      validation: validationPostCode,
      setValue: setPostCode
    });
  };

  /**
   * Export
   *
   *
   */
  var states = {
    taxClassesId: taxClassesId,
    taxClassesIdValid: taxClassesIdValid,
    rate: rate,
    rateValid: rateValid,
    city: city,
    cityValid: cityValid,
    cityDefault: cityDefault,
    cityOptions: cityOptions,
    state: state,
    stateCountryValid: stateCountryValid,
    stateCountryDefault: stateCountryDefault,
    stateCountryOptions: stateCountryOptions,
    country: country,
    countryValid: countryValid,
    countryDefault: countryDefault,
    countryOptions: countryOptions,
    postCode: postCode,
    postCodeValid: postCodeValid,
    currentId: currentId
  };
  var actions = {
    infoReset: infoReset,
    validationTaxClassesId: validationTaxClassesId,
    validationRate: validationRate,
    validationCity: validationCity,
    validationStateCountry: validationStateCountry,
    validationCountry: validationCountry,
    validationPostCode: validationPostCode,
    validationButtonNext: validationButtonNext,
    changeTaxClasses: changeTaxClasses,
    changeRate: changeRate,
    changeCity: changeCity,
    changeCityOptions: changeCityOptions,
    changeStateCountry: changeStateCountry,
    changeStateCountryOptions: changeStateCountryOptions,
    changeCountry: changeCountry,
    changePostCode: changePostCode,
    setStateCountry: setStateCountry,
    setCountry: setCountry,
    setCurrentId: setCurrentId
  };
  return {
    states: states,
    actions: actions
  };
}