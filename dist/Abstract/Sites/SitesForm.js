"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SitesForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var _constants = require("../../constants");
var _Slider = require("../Slider");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SitesForm = exports.SitesForm = function SitesForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType,
    useCurrencies = _ref.useCurrencies,
    modelFormProps = _ref.modelFormProps,
    nameContainerProps = _ref.nameContainerProps,
    nameInputProps = _ref.nameInputProps,
    documentContainerProps = _ref.documentContainerProps,
    documentTypeSelectProps = _ref.documentTypeSelectProps,
    documentNumberInputProps = _ref.documentNumberInputProps,
    addressContainerProps = _ref.addressContainerProps,
    address1InputProps = _ref.address1InputProps,
    address2InputProps = _ref.address2InputProps,
    cityStateContainerProps = _ref.cityStateContainerProps,
    cityInputProps = _ref.cityInputProps,
    stateInputProps = _ref.stateInputProps,
    citySelectProps = _ref.citySelectProps,
    stateSelectProps = _ref.stateSelectProps,
    countryContainerProps = _ref.countryContainerProps,
    countryInputProps = _ref.countryInputProps,
    countrySelectProps = _ref.countrySelectProps,
    postCodeInputProps = _ref.postCodeInputProps,
    phoneEmailContainerProps = _ref.phoneEmailContainerProps,
    phoneInputProps = _ref.phoneInputProps,
    emailInputProps = _ref.emailInputProps,
    currenciesContainerProps = _ref.currenciesContainerProps,
    currencySelectProps = _ref.currencySelectProps,
    currencyLocationSelectProps = _ref.currencyLocationSelectProps,
    separatorDecimalContainerProps = _ref.separatorDecimalContainerProps,
    separatorSelectProps = _ref.separatorSelectProps,
    decimalSelectProps = _ref.decimalSelectProps,
    taxesHostContainerProps = _ref.taxesHostContainerProps,
    taxesSelectProps = _ref.taxesSelectProps,
    hostInputProps = _ref.hostInputProps;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputTypeDocument = _React$useState2[0],
    setInputTypeDocument = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputCity = _React$useState4[0],
    setInputCity = _React$useState4[1];
  var _React$useState5 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    InputState = _React$useState6[0],
    setInputState = _React$useState6[1];
  var _React$useState7 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    InputCountry = _React$useState8[0],
    setInputCountry = _React$useState8[1];
  var _React$useState9 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    InputCurrency = _React$useState10[0],
    setInputCurrency = _React$useState10[1];
  var _React$useState11 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    InputCurrencyLocation = _React$useState12[0],
    setInputCurrencyLocation = _React$useState12[1];
  var _React$useState13 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    InputSeparator = _React$useState14[0],
    setInputSeparator = _React$useState14[1];
  var _React$useState15 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    InputDecimalNumbers = _React$useState16[0],
    setInputDecimalNumbers = _React$useState16[1];
  var _React$useState17 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
    InputTaxes = _React$useState18[0],
    setInputTaxes = _React$useState18[1];
  var _React$useState19 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState20 = (0, _slicedToArray2["default"])(_React$useState19, 2),
    InputType = _React$useState20[0],
    setInputType = _React$useState20[1];
  var currentSite = isUpdateForm ? use.data.actions.getById(use.attributes.states.siteId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationDocumentIndex(use.attributes.states.documentIndex);
    use.attributes.actions.validationDocumentNumber(use.attributes.states.documentNumber);
    use.attributes.actions.validationAddress1(use.attributes.states.address1);
    use.attributes.actions.validationAddress2(use.attributes.states.address2);
    use.attributes.actions.validationCity(use.attributes.states.city);
    use.attributes.actions.validationStateCountry(use.attributes.states.state);
    use.attributes.actions.validationCountry(use.attributes.states.country);
    use.attributes.actions.validationPostCode(use.attributes.states.postCode);
    use.attributes.actions.validationEmail(use.attributes.states.email);
    use.attributes.actions.validationPhone(use.attributes.states.phone);
    var currenciesId = use.attributes.states.currenciesId === 0 ? '' : use.attributes.states.currenciesId;
    use.attributes.actions.validationCurrenciesId("".concat(currenciesId));
    use.attributes.actions.validationCurrencyLocation(use.attributes.states.currencyLocation);
    use.attributes.actions.validationSeparator(use.attributes.states.thousandsSeparator);
    use.attributes.actions.validationSeparator(use.attributes.states.decimalSeparator);
    use.attributes.actions.validationDecimalNumbers("".concat(use.attributes.states.decimalNumbers));
    use.attributes.actions.validationTaxes("".concat(use.attributes.states.taxes));
    use.attributes.actions.validationHost(use.attributes.states.host);
    use.attributes.actions.validationType(use.attributes.states.type);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name, use.attributes.states.documentIndex, use.attributes.states.documentNumber, use.attributes.states.address1, use.attributes.states.address2, use.attributes.states.city, use.attributes.states.state, use.attributes.states.postCode, use.attributes.states.country, use.attributes.states.email, use.attributes.states.phone, use.attributes.states.currenciesId, use.attributes.states.currencyLocation, use.attributes.states.thousandsSeparator, use.attributes.states.decimalSeparator, use.attributes.states.decimalNumbers, use.attributes.states.taxes, use.attributes.states.host, InputTypeDocument, InputCity, InputState, InputCountry, InputCurrency, InputCurrencyLocation, InputSeparator, InputDecimalNumbers, InputTaxes, InputType]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.documentIndexValid, use.attributes.states.documentNumberValid, use.attributes.states.address1Valid, use.attributes.states.address2Valid, use.attributes.states.cityValid, use.attributes.states.stateCountryValid, use.attributes.states.countryValid, use.attributes.states.postCodeValid, use.attributes.states.emailValid, use.attributes.states.phoneValid, use.attributes.states.currenciesIdValid, use.attributes.states.currencyLocationValid, use.attributes.states.separatorValid, use.attributes.states.decimalNumbersValid, use.attributes.states.taxesValid, use.attributes.states.hostValid]);
  _react["default"].useEffect(function () {
    if (currentSite) {
      if (currentSite.name) use.attributes.actions.changeName(currentSite.name);
      if (currentSite.documentIndex) {
        var labelDocumentIndex = currentSite.documentIndex === 'null' ? 'No Aplica' : currentSite.documentIndex;
        use.attributes.actions.changeDocumentIndex({
          label: labelDocumentIndex,
          value: currentSite.documentIndex
        });
      }
      if (currentSite.documentNumber) use.attributes.actions.changeDocumentNumber(currentSite.documentNumber);
      if (currentSite.address1) use.attributes.actions.changeAddress1(currentSite.address1);
      if (currentSite.address2) use.attributes.actions.changeAddress2(currentSite.address2);
      if (currentSite.country) use.attributes.actions.setCountry(currentSite.country);
      if (currentSite.state) use.attributes.actions.setStateCountry(currentSite.state);
      if (currentSite.city) use.attributes.actions.changeCity({
        label: currentSite.city,
        value: currentSite.city
      });
      if (currentSite.postCode) use.attributes.actions.changePostCode(currentSite.postCode);
      if (currentSite.email) use.attributes.actions.changeEmail(currentSite.email);
      if (currentSite.phone) use.attributes.actions.changePhone(currentSite.phone);
      if (currentSite.currenciesId) {
        var _useCurrencies$action;
        var labelCurrenciesId = (_useCurrencies$action = useCurrencies.actions.getById(currentSite.currenciesId)) === null || _useCurrencies$action === void 0 ? void 0 : _useCurrencies$action.name;
        use.attributes.actions.changeCurrenciesId({
          label: "".concat(labelCurrenciesId),
          value: "".concat(currentSite.currenciesId)
        });
      }
      if (currentSite.currencyLocation) {
        var labelCurrencyLocation = currentSite.currencyLocation === 'left' ? 'Izquierda' : currentSite.currencyLocation === 'right' ? 'Derecha' : '';
        use.attributes.actions.changeCurrencyLocation({
          label: labelCurrencyLocation,
          value: currentSite.currencyLocation
        });
      }
      if (currentSite.thousandsSeparator) {
        var labelSeparator = currentSite.thousandsSeparator === '.' ? 'Miles: " . "    Decimal: " , "' : currentSite.thousandsSeparator === ',' ? 'Miles: " , "    Decimal: " . "' : '';
        use.attributes.actions.changeSeparator({
          label: labelSeparator,
          value: currentSite.thousandsSeparator
        });
      }
      if (typeof currentSite.decimalNumbers !== 'undefined') {
        use.attributes.actions.changeDecimalNumbers({
          label: "".concat(currentSite.decimalNumbers),
          value: "".concat(currentSite.decimalNumbers)
        });
      }
      if (typeof currentSite.taxes !== 'undefined') {
        var labelTaxes = currentSite.taxes ? 'Si trabaja con impuestos' : 'No trabaja con impuestos';
        use.attributes.actions.changeTaxes({
          label: labelTaxes,
          value: "".concat(currentSite.taxes)
        });
      }
      if (currentSite.host) use.attributes.actions.changeHost(currentSite.host);
    }
    if (isAddForm) {
      setInputTypeDocument(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectDocumentIdIndex, {
          changeIndex: function changeIndex(event) {
            return use.attributes.actions.changeDocumentIndex(event);
          },
          props: _objectSpread({
            options: use.attributes.states.documentIndexOptions,
            defaultValue: use.attributes.states.documentIndexDefault,
            styles: {
              width: '90%'
            }
          }, documentTypeSelectProps)
        });
      });
      setInputCountry(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCountry, {
          changeCountry: function changeCountry(event) {
            return use.attributes.actions.changeCountry(event);
          },
          props: _objectSpread({
            options: use.attributes.states.countryOptions,
            defaultValue: use.attributes.states.countryDefault,
            styles: {
              width: '90%'
            }
          }, countrySelectProps)
        });
      });
      setInputCurrency(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrencies, {
          changeCurrencies: function changeCurrencies(event) {
            return use.attributes.actions.changeCurrenciesId(event);
          },
          props: _objectSpread({
            options: use.attributes.states.currenciesIdOptions,
            defaultValue: use.attributes.states.currenciesIdDefault,
            styles: {
              width: '90%'
            }
          }, currencySelectProps)
        });
      });
      setInputCurrencyLocation(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrenciesLocations, {
          changeCurrenciesLocations: function changeCurrenciesLocations(event) {
            return use.attributes.actions.changeCurrencyLocation(event);
          },
          props: _objectSpread({
            options: use.attributes.states.currencyLocationOptions,
            defaultValue: use.attributes.states.currencyLocationDefault,
            styles: {
              width: '90%'
            }
          }, currencyLocationSelectProps)
        });
      });
      setInputSeparator(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrenciesSeparator, {
          changeCurrenciesSeparator: function changeCurrenciesSeparator(event) {
            return use.attributes.actions.changeSeparator(event);
          },
          props: _objectSpread({
            options: use.attributes.states.separatorOptions,
            defaultValue: use.attributes.states.separatorDefault,
            styles: {
              width: '90%'
            }
          }, separatorSelectProps)
        });
      });
      setInputDecimalNumbers(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrenciesDecimalNumbers, {
          changeCurrenciesDecimalNumbers: function changeCurrenciesDecimalNumbers(event) {
            return use.attributes.actions.changeDecimalNumbers(event);
          },
          props: _objectSpread({
            options: use.attributes.states.decimalNumbersOptions,
            defaultValue: use.attributes.states.decimalNumbersDefault,
            styles: {
              width: '90%'
            }
          }, decimalSelectProps)
        });
      });
      setInputTaxes(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectTaxes, {
          changeTaxes: function changeTaxes(event) {
            return use.attributes.actions.changeTaxes(event);
          },
          props: _objectSpread({
            options: use.attributes.states.taxesOptions,
            defaultValue: use.attributes.states.taxesDefault,
            styles: {
              width: '90%'
            }
          }, taxesSelectProps)
        });
      });
      setInputType(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectType, {
          changeType: function changeType(event) {
            return use.attributes.actions.changeType(event);
          },
          props: {
            options: use.attributes.states.typeOptions,
            defaultValue: use.attributes.states.typeDefault,
            styles: {
              width: '90%'
            }
          }
        });
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    if (isAddForm) {
      if (use.attributes.states.stateCountryOptions.length > 0) {
        setInputState(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectStateCountry, {
            changeStateCountry: function changeStateCountry(event) {
              return use.attributes.actions.changeStateCountry(event);
            },
            props: _objectSpread({
              options: use.attributes.states.stateCountryOptions,
              defaultValue: use.attributes.states.stateCountryDefault,
              styles: {
                width: '90%'
              }
            }, stateSelectProps)
          });
        });
      } else {
        setInputState(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.InputStateCountry, {
            changeStateCountry: function changeStateCountry(event) {
              return use.attributes.actions.changeStateCountry(event);
            },
            props: _objectSpread({
              inputProps: {
                defaultValue: use.attributes.states.state
              },
              styles: {
                padding: '10px 19px',
                width: '90%'
              }
            }, stateInputProps)
          });
        });
      }
      if (use.attributes.states.cityOptions.length > 0) {
        setInputCity(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectCity, {
            changeCity: function changeCity(event) {
              return use.attributes.actions.changeCity(event);
            },
            props: _objectSpread({
              options: use.attributes.states.cityOptions,
              defaultValue: use.attributes.states.cityDefault,
              styles: {
                width: '90%'
              }
            }, citySelectProps)
          });
        });
      } else {
        setInputCity(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.InputCity, {
            changeCity: function changeCity(event) {
              return use.attributes.actions.changeCity(event);
            },
            props: _objectSpread({
              inputProps: {
                defaultValue: use.attributes.states.city
              },
              styles: {
                padding: '10px 19px',
                width: '90%'
              }
            }, cityInputProps)
          });
        });
      }
    }
  }, [use.attributes.states.country, use.attributes.states.stateCountryOptions, use.attributes.states.cityOptions]);
  _react["default"].useEffect(function () {
    if (isUpdateForm) {
      var _use$attributes$state, _use$attributes$state2, _use$attributes$state3, _use$attributes$state4, _use$attributes$state5, _use$attributes$state6, _use$attributes$state7;
      if (((_use$attributes$state = use.attributes.states.documentIndexDefault) === null || _use$attributes$state === void 0 ? void 0 : _use$attributes$state.label) !== 'Elija el tipo de Documento') {
        setInputTypeDocument(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectDocumentIdIndex, {
            changeIndex: function changeIndex(event) {
              return use.attributes.actions.changeDocumentIndex(event);
            },
            props: _objectSpread({
              options: use.attributes.states.documentIndexOptions,
              defaultValue: use.attributes.states.documentIndexDefault,
              styles: {
                width: '90%'
              }
            }, documentTypeSelectProps)
          });
        });
      }
      if (((_use$attributes$state2 = use.attributes.states.currenciesIdDefault) === null || _use$attributes$state2 === void 0 ? void 0 : _use$attributes$state2.label) !== 'Elija la moneda del Sitio') {
        setInputCurrency(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrencies, {
            changeCurrencies: function changeCurrencies(event) {
              return use.attributes.actions.changeCurrenciesId(event);
            },
            props: _objectSpread({
              options: use.attributes.states.currenciesIdOptions,
              defaultValue: use.attributes.states.currenciesIdDefault,
              styles: {
                width: '90%'
              }
            }, currencySelectProps)
          });
        });
      }
      if (((_use$attributes$state3 = use.attributes.states.currencyLocationDefault) === null || _use$attributes$state3 === void 0 ? void 0 : _use$attributes$state3.label) !== 'Elija la ubicación del símbolo de la moneda') {
        setInputCurrencyLocation(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrenciesLocations, {
            changeCurrenciesLocations: function changeCurrenciesLocations(event) {
              return use.attributes.actions.changeCurrencyLocation(event);
            },
            props: _objectSpread({
              options: use.attributes.states.currencyLocationOptions,
              defaultValue: use.attributes.states.currencyLocationDefault,
              styles: {
                width: '90%'
              }
            }, currencyLocationSelectProps)
          });
        });
      }
      if (((_use$attributes$state4 = use.attributes.states.separatorDefault) === null || _use$attributes$state4 === void 0 ? void 0 : _use$attributes$state4.label) !== 'Selecciona los separadores de la moneda') {
        setInputSeparator(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrenciesSeparator, {
            changeCurrenciesSeparator: function changeCurrenciesSeparator(event) {
              return use.attributes.actions.changeSeparator(event);
            },
            props: _objectSpread({
              options: use.attributes.states.separatorOptions,
              defaultValue: use.attributes.states.separatorDefault,
              styles: {
                width: '90%'
              }
            }, separatorSelectProps)
          });
        });
      }
      if (((_use$attributes$state5 = use.attributes.states.decimalNumbersDefault) === null || _use$attributes$state5 === void 0 ? void 0 : _use$attributes$state5.label) !== 'Selecciona el número de decimales') {
        setInputDecimalNumbers(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrenciesDecimalNumbers, {
            changeCurrenciesDecimalNumbers: function changeCurrenciesDecimalNumbers(event) {
              return use.attributes.actions.changeDecimalNumbers(event);
            },
            props: _objectSpread({
              options: use.attributes.states.decimalNumbersOptions,
              defaultValue: use.attributes.states.decimalNumbersDefault,
              styles: {
                width: '90%'
              }
            }, decimalSelectProps)
          });
        });
      }
      if (((_use$attributes$state6 = use.attributes.states.taxesDefault) === null || _use$attributes$state6 === void 0 ? void 0 : _use$attributes$state6.label) !== 'Selecciona la opción para los impuestos') {
        setInputTaxes(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectTaxes, {
            changeTaxes: function changeTaxes(event) {
              return use.attributes.actions.changeTaxes(event);
            },
            props: _objectSpread({
              options: use.attributes.states.taxesOptions,
              defaultValue: use.attributes.states.taxesDefault,
              styles: {
                width: '90%'
              }
            }, taxesSelectProps)
          });
        });
      }
      if (((_use$attributes$state7 = use.attributes.states.typeDefault) === null || _use$attributes$state7 === void 0 ? void 0 : _use$attributes$state7.value) !== '') {
        setInputType(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectType, {
            changeType: function changeType(event) {
              return use.attributes.actions.changeType(event);
            },
            props: {
              options: use.attributes.states.typeOptions,
              defaultValue: use.attributes.states.typeDefault,
              styles: {
                width: '90%'
              }
            }
          });
        });
      }
    }
  }, [use.attributes.states.documentIndexDefault]); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    if (isUpdateForm && currentSite) {
      var labelCountry = _constants.Countries[0][currentSite.country];
      var labelStateCountry = _constants.StatesCountries[0][currentSite.country][0][currentSite.state];
      setInputCountry(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
          inputProps: {
            placeholder: 'Pais',
            type: 'text',
            id: 'countrySite',
            defaultValue: labelCountry,
            readOnly: true
          },
          styles: {
            padding: '10px 19px',
            width: '90%'
          }
        }, countryInputProps));
      });
      setInputState(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.InputStateCountry, {
          changeStateCountry: function changeStateCountry(event) {
            return use.attributes.actions.changeStateCountry(event);
          },
          props: _objectSpread({
            inputProps: {
              defaultValue: labelStateCountry,
              readOnly: true
            },
            styles: {
              padding: '10px 19px',
              width: '90%'
            }
          }, stateInputProps)
        });
      });
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.InputCity, {
          changeCity: function changeCity(event) {
            return use.attributes.actions.changeCity(event);
          },
          props: _objectSpread({
            inputProps: {
              defaultValue: use.attributes.states.city,
              readOnly: true
            },
            styles: {
              padding: '10px 19px',
              width: '90%'
            }
          }, cityInputProps)
        });
      });
    }
  }, [currentSite, use.attributes.states.city]);
  _react["default"].useEffect(function () {
    if (isAddForm) {
      use.attributes.actions.changeCityOptions();
    }
  }, [use.attributes.actions.changeCityOptions]);
  _react["default"].useEffect(function () {
    if (isAddForm) {
      use.attributes.actions.changeStateCountryOptions();
    }
  }, [use.attributes.actions.changeStateCountryOptions]);
  var title1Text = isAddForm ? 'Nuevo Sitio' : 'Actualizar Sitio';
  var title2Text = isAddForm ? 'Agrega un nuevo Sitio' : "Actualiza la informaci\xF3n del sitio #".concat(currentSite === null || currentSite === void 0 ? void 0 : currentSite.id);
  var buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  var buttonAction = isAddForm ? use.api.actions.add : use.api.actions.update;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, (0, _extends2["default"])({
    titles: {
      title1: title1Text,
      title2: title2Text
    },
    buttonTitles: {
      mainButton: buttonTitle,
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: use.attributes.states.error
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, nameContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: function changeName(event) {
      return use.attributes.actions.changeName(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.name
      },
      styles: {
        width: '100%',
        padding: '10px 19px'
      }
    }, nameInputProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, documentContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputTypeDocument, /*#__PURE__*/_react["default"].createElement(_Input.InputDocumentiIdDigit, {
    changeDocumentiIdDigit: function changeDocumentiIdDigit(event) {
      return use.attributes.actions.changeDocumentNumber(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.documentNumber
      },
      styles: {
        padding: '10px 19px',
        width: '90%'
      }
    }, documentNumberInputProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, addressContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputAddress1, {
    changeAddress1: function changeAddress1(event) {
      return use.attributes.actions.changeAddress1(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.address1
      },
      styles: {
        width: '90%',
        padding: '10px 19px'
      }
    }, address1InputProps)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputAddress2, {
    changeAddress2: function changeAddress2(event) {
      return use.attributes.actions.changeAddress2(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.address2
      },
      styles: {
        width: '90%',
        padding: '10px 19px'
      }
    }, address2InputProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, cityStateContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCity, InputState)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, countryContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCountry, /*#__PURE__*/_react["default"].createElement(_Input.InputZipCode, {
    changeZipCode: function changeZipCode(event) {
      return use.attributes.actions.changePostCode(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.postCode
      },
      styles: {
        padding: '10px 19px',
        width: '90%'
      }
    }, postCodeInputProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, taxesHostContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    styles: {
      padding: '10px 19px',
      width: '90%'
    },
    inputProps: {
      placeholder: 'Latitud',
      type: 'text',
      onKeyUp: function onKeyUp(event) {
        return use.attributes.actions.setLatitude(event.target.value);
      },
      defaultValue: use.attributes.states.latitude
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    styles: {
      padding: '10px 19px',
      width: '90%'
    },
    inputProps: {
      placeholder: 'Longitud',
      type: 'text',
      onKeyUp: function onKeyUp(event) {
        return use.attributes.actions.setLongitude(event.target.value);
      },
      defaultValue: use.attributes.states.longitude
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, phoneEmailContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputPhone, {
    changePhone: function changePhone(event) {
      return use.attributes.actions.changePhone(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.phone
      },
      styles: {
        padding: '10px 19px',
        width: '90%'
      }
    }, phoneInputProps)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputEmail, {
    changeEmail: function changeEmail(event) {
      return use.attributes.actions.changeEmail(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.email
      },
      styles: {
        padding: '10px 19px',
        width: '90%'
      }
    }, emailInputProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, currenciesContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCurrency, InputCurrencyLocation)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, separatorDecimalContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputSeparator, InputDecimalNumbers)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, taxesHostContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputTaxes, /*#__PURE__*/_react["default"].createElement(_Input.InputWebSite, {
    changeWebSite: function changeWebSite(event) {
      return use.attributes.actions.changeHost(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.host
      },
      styles: {
        padding: '10px 19px',
        width: '90%'
      }
    }, hostInputProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, taxesHostContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputType)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, taxesHostContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Form.PhotoProduct, {
    photo: use.attributes.states.image,
    changePhoto: use.attributes.actions.changeImage,
    changeError: use.error.actions.changeError,
    submitting: use.attributes.states.submitting,
    setSubmitting: use.attributes.actions.setSubmitting
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'block'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Slider.SliderHorizontal, {
    title: "Galer\xEDa de Im\xE1genes",
    images: use.attributes.states.galleryImage,
    remove: use.attributes.actions.removeGalleryImage
  }), /*#__PURE__*/_react["default"].createElement(_Form.PhotoGalleryForm, {
    changePhoto: use.attributes.actions.changeGalleryImage,
    formId: "photo-form"
  })))));
};