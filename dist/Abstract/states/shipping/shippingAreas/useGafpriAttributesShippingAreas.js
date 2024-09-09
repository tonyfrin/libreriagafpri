"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesShippingAreas = useGafpriAttributesShippingAreas;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Validations = require("../../../../Validations");
var _Changes = require("../../../../Changes");
function useGafpriAttributesShippingAreas() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    nameValid = _useState4[0],
    setNameValid = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    postalCodes = _useState6[0],
    setPostalCodes = _useState6[1];
  var pushPostalCodes = function pushPostalCodes(value) {
    setPostalCodes(function (prevValue) {
      if (!prevValue.includes(value)) {
        return [].concat((0, _toConsumableArray2["default"])(prevValue), [value]);
      }
      return prevValue;
    });
  };
  var removePostalCode = function removePostalCode(value) {
    setPostalCodes(postalCodes.filter(function (item) {
      return item !== value;
    }));
  };
  var _useState7 = (0, _react.useState)([]),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    cities = _useState8[0],
    setCities = _useState8[1];
  var pushCities = function pushCities(value) {
    setCities(function (prevValue) {
      if (!prevValue.includes(value)) {
        return [].concat((0, _toConsumableArray2["default"])(prevValue), [value]);
      }
      return prevValue;
    });
  };
  var removeCities = function removeCities(value) {
    setCities(cities.filter(function (item) {
      return item !== value;
    }));
  };
  var _useState9 = (0, _react.useState)([]),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    statesCountries = _useState10[0],
    setStatesCountries = _useState10[1];
  var pushStatesCountries = function pushStatesCountries(value) {
    setStatesCountries(function (prevValue) {
      if (!prevValue.includes(value)) {
        return [].concat((0, _toConsumableArray2["default"])(prevValue), [value]);
      }
      return prevValue;
    });
  };
  var removeStatesCountries = function removeStatesCountries(value) {
    setStatesCountries(statesCountries.filter(function (item) {
      return item !== value;
    }));
  };
  var _useState11 = (0, _react.useState)([]),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    countries = _useState12[0],
    setCountries = _useState12[1];
  var pushCountries = function pushCountries(value) {
    setCountries(function (prevValue) {
      if (!prevValue.includes(value)) {
        return [].concat((0, _toConsumableArray2["default"])(prevValue), [value]);
      }
      return prevValue;
    });
  };
  var removeCountries = function removeCountries(value) {
    setCountries(countries.filter(function (item) {
      return item !== value;
    }));
  };
  var _useState13 = (0, _react.useState)(0),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    currentId = _useState14[0],
    setCurrentId = _useState14[1];
  var infoReset = function infoReset() {
    setName('');
    setNameValid(false);
    setPostalCodes([]);
    setCities([]);
    setStatesCountries([]);
    setCountries([]);
    setCurrentId(0);
  };

  // Funciones de Validacion
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)({
      value: value,
      setValid: setNameValid,
      currentValid: nameValid
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [nameValid && postalCodes.length > 0 && cities.length > 0 && statesCountries.length > 0 && countries.length > 0]
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
  var changePostalCode = function changePostalCode(postalCode, city, stateCountry, country) {
    pushPostalCodes(postalCode);
    pushCities(city);
    pushStatesCountries(stateCountry);
    pushCountries(country);
  };
  var changeCities = function changeCities(city, stateCountry, country) {
    pushPostalCodes('*');
    pushCities(city);
    pushStatesCountries(stateCountry);
    pushCountries(country);
  };
  var changeStateCountry = function changeStateCountry(stateCountry, country) {
    pushPostalCodes('*');
    pushCities('*');
    pushStatesCountries(stateCountry);
    pushCountries(country);
  };
  var changeCountry = function changeCountry(country) {
    pushPostalCodes('*');
    pushCities('*');
    pushStatesCountries('*');
    pushCountries(country);
  };

  /**
   * Export
   *
   *
   */
  var states = {
    name: name,
    nameValid: nameValid,
    postalCodes: postalCodes,
    cities: cities,
    statesCountries: statesCountries,
    countries: countries,
    currentId: currentId
  };
  var actions = {
    infoReset: infoReset,
    validationName: validationName,
    validationButtonNext: validationButtonNext,
    changeName: changeName,
    setPostalCodes: setPostalCodes,
    pushPostalCodes: pushPostalCodes,
    removePostalCode: removePostalCode,
    changePostalCode: changePostalCode,
    setCities: setCities,
    pushCities: pushCities,
    removeCities: removeCities,
    changeCities: changeCities,
    setStatesCountries: setStatesCountries,
    pushStatesCountries: pushStatesCountries,
    removeStatesCountries: removeStatesCountries,
    changeStateCountry: changeStateCountry,
    setCountries: setCountries,
    pushCountries: pushCountries,
    removeCountries: removeCountries,
    changeCountry: changeCountry,
    setCurrentId: setCurrentId
  };
  return {
    states: states,
    actions: actions
  };
}