"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesStorage = useGafpriAttributesStorage;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Validations = require("../../../Validations");
var _Changes = require("../../../Changes");
var _constants = require("../../../constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function useGafpriAttributesStorage(_ref) {
  var _useSites$data$states;
  var useError = _ref.useError,
    useSites = _ref.useSites;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    nameValid = _useState4[0],
    setNameValid = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    address1 = _useState6[0],
    setAddress1 = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    address1Valid = _useState8[0],
    setAddress1Valid = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    address2 = _useState10[0],
    setAddress2 = _useState10[1];
  var _useState11 = (0, _react.useState)(true),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    address2Valid = _useState12[0],
    setAddress2Valid = _useState12[1];
  var _useState13 = (0, _react.useState)(_constants.CITY_DEFAULT.value),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    city = _useState14[0],
    setCity = _useState14[1];
  var _useState15 = (0, _react.useState)(true),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    cityValid = _useState16[0],
    setCityValid = _useState16[1];
  var _useState17 = (0, _react.useState)(_constants.CITY_DEFAULT),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    cityDefault = _useState18[0],
    setCityDefault = _useState18[1];
  var _useState19 = (0, _react.useState)([]),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    cityOptions = _useState20[0],
    setCityOptions = _useState20[1];
  var _useState21 = (0, _react.useState)(_constants.STATE_COUNTRY_DEFAULT.value),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    state = _useState22[0],
    setStateCountry = _useState22[1];
  var _useState23 = (0, _react.useState)(true),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    stateCountryValid = _useState24[0],
    setStateCountryValid = _useState24[1];
  var _useState25 = (0, _react.useState)(_constants.STATE_COUNTRY_DEFAULT),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    stateCountryDefault = _useState26[0],
    setStateCountryDefault = _useState26[1];
  var _useState27 = (0, _react.useState)([]),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    stateCountryOptions = _useState28[0],
    setStateCountryOptions = _useState28[1];
  var _useState29 = (0, _react.useState)(_constants.COUNTRY_DEFAULT.value),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    country = _useState30[0],
    setCountry = _useState30[1];
  var _useState31 = (0, _react.useState)(true),
    _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
    countryValid = _useState32[0],
    setCountryValid = _useState32[1];
  var _useState33 = (0, _react.useState)(_constants.COUNTRY_DEFAULT),
    _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
    countryDefault = _useState34[0],
    setCountryDefault = _useState34[1];
  var countryOptions = [];
  _constants.Countries.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
      countryOptions.push({
        value: key,
        label: item[key]
      });
    });
  });
  var _useState35 = (0, _react.useState)(''),
    _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
    postCode = _useState36[0],
    setPostCode = _useState36[1];
  var _useState37 = (0, _react.useState)(true),
    _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
    postCodeValid = _useState38[0],
    setPostCodeValid = _useState38[1];
  var _useState39 = (0, _react.useState)(''),
    _useState40 = (0, _slicedToArray2["default"])(_useState39, 2),
    site = _useState40[0],
    setSite = _useState40[1];
  var _useState41 = (0, _react.useState)(false),
    _useState42 = (0, _slicedToArray2["default"])(_useState41, 2),
    siteValid = _useState42[0],
    setSiteValid = _useState42[1];
  var _useState43 = (0, _react.useState)({
      value: '',
      label: 'Elija sucursal'
    }),
    _useState44 = (0, _slicedToArray2["default"])(_useState43, 2),
    siteDefault = _useState44[0],
    setSiteDefault = _useState44[1];
  var siteOptions = ((_useSites$data$states = useSites.data.states.sites) === null || _useSites$data$states === void 0 ? void 0 : _useSites$data$states.map(function (item) {
    return {
      value: "".concat(item.id),
      label: item.name
    };
  })) || [];
  var _useState45 = (0, _react.useState)(true),
    _useState46 = (0, _slicedToArray2["default"])(_useState45, 2),
    isReset = _useState46[0],
    setIsReset = _useState46[1];
  var _useState47 = (0, _react.useState)(0),
    _useState48 = (0, _slicedToArray2["default"])(_useState47, 2),
    currentId = _useState48[0],
    setCurrentId = _useState48[1];
  var infoReset = function infoReset() {
    setIsReset(true);
    setName('');
    setAddress1('');
    setAddress2('');
    setCity(_constants.CITY_DEFAULT.value);
    setCityDefault(_constants.CITY_DEFAULT);
    setStateCountry(_constants.STATE_COUNTRY_DEFAULT.value);
    setCountryDefault(_constants.STATE_COUNTRY_DEFAULT);
    setCountry(_constants.COUNTRY_DEFAULT.value);
    setCountryDefault(_constants.COUNTRY_DEFAULT);
    setPostCode('');
    setSite('');
    setSiteDefault({
      value: '',
      label: 'Elija sucursal'
    });
    setNameValid(false);
    setAddress1Valid(false);
    setAddress2Valid(true);
    setCityValid(true);
    setStateCountryValid(true);
    setCountryValid(true);
    setPostCodeValid(true);
    setSiteValid(false);
    setCurrentId(0);
    useError.actions.resetError();
  };

  // Funciones de Validacion
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)({
      value: value,
      setValid: setNameValid,
      currentValid: nameValid
    });
  };
  var validationAddress1 = function validationAddress1(value) {
    return (0, _Validations.generalValidationAddress1)({
      value: value,
      setValid: setAddress1Valid,
      currentValid: address1Valid
    });
  };
  var validationAddress2 = function validationAddress2(value) {
    return (0, _Validations.generalValidationAddress2)({
      value: value,
      setValid: setAddress2Valid,
      currentValid: address2Valid
    });
  };
  var validationCity = function validationCity(value) {
    return (0, _Validations.generalValidationSelectCity)({
      value: value,
      setValid: setCityValid,
      currentValid: cityValid
    });
  };
  var validationStateCountry = function validationStateCountry(value) {
    return (0, _Validations.generalValidationSelectStateCountry)({
      value: value,
      setValid: setStateCountryValid,
      currentValid: stateCountryValid
    });
  };
  var validationCountry = function validationCountry(value) {
    return (0, _Validations.generalValidationSelectCountry)({
      value: value,
      setValid: setCountryValid,
      currentValid: countryValid
    });
  };
  var validationPostCode = function validationPostCode(value) {
    return (0, _Validations.generalValidationPostCode)({
      value: value,
      setValid: setPostCodeValid,
      currentValid: postCodeValid
    });
  };
  var validationSite = function validationSite(value) {
    return (0, _Validations.generalValidationSelectSite)({
      value: value,
      setValid: setSiteValid,
      currentValid: siteValid
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [nameValid, address1Valid, address2Valid, cityValid, stateCountryValid, countryValid, postCodeValid, siteValid]
    });
  };

  // Funciones de cambios
  var changeName = function changeName(value) {
    (0, _Changes.generalChangeName)({
      value: value,
      validation: validationName,
      setValue: setName
    });
  };
  var changeAddress1 = function changeAddress1(value) {
    (0, _Changes.generalChangeAddress)({
      value: value,
      validation: validationAddress1,
      setValue: setAddress1
    });
  };
  var changeAddress2 = function changeAddress2(value) {
    (0, _Changes.generalChangeAddress)({
      value: value,
      validation: validationAddress2,
      setValue: setAddress2
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
  }, [country, state]); // eslint-disable-line

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
  }, [country]); // eslint-disable-line

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
  var changeSite = function changeSite(options) {
    (0, _Changes.generalChangeSite)({
      options: options,
      validation: validationSite,
      setDefault: setSiteDefault,
      setValue: setSite
    });
  };

  /**
   * Export
   *
   *
   */
  var states = {
    name: name,
    nameValid: nameValid,
    address1: address1,
    address1Valid: address1Valid,
    address2: address2,
    address2Valid: address2Valid,
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
    site: site,
    siteValid: siteValid,
    siteDefault: siteDefault,
    siteOptions: siteOptions,
    currentId: currentId
  };
  var actions = {
    setStateCountry: setStateCountry,
    setCountry: setCountry,
    validationName: validationName,
    validationAddress1: validationAddress1,
    validationAddress2: validationAddress2,
    validationCity: validationCity,
    validationStateCountry: validationStateCountry,
    validationCountry: validationCountry,
    validationPostCode: validationPostCode,
    validationSite: validationSite,
    validationButtonNext: validationButtonNext,
    changeName: changeName,
    changeAddress1: changeAddress1,
    changeAddress2: changeAddress2,
    changeCity: changeCity,
    changeCityOptions: changeCityOptions,
    changeStateCountry: changeStateCountry,
    changeStateCountryOptions: changeStateCountryOptions,
    changeCountry: changeCountry,
    changePostCode: changePostCode,
    changeSite: changeSite,
    infoReset: infoReset,
    setCurrentId: setCurrentId
  };
  return {
    states: states,
    actions: actions
  };
}