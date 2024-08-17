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
  var currentSite = isUpdateForm ? use.actions.getById(use.states.siteId) : null;
  _react["default"].useEffect(function () {
    use.actions.validationName(use.states.name);
    use.actions.validationDocumentIndex(use.states.documentIndex);
    use.actions.validationDocumentNumber(use.states.documentNumber);
    use.actions.validationAddress1(use.states.address1);
    use.actions.validationAddress2(use.states.address2);
    use.actions.validationCity(use.states.city);
    use.actions.validationStateCountry(use.states.state);
    use.actions.validationCountry(use.states.country);
    use.actions.validationPostCode(use.states.postCode);
    use.actions.validationEmail(use.states.email);
    use.actions.validationPhone(use.states.phone);
    var currenciesId = use.states.currenciesId === 0 ? '' : use.states.currenciesId;
    use.actions.validationCurrenciesId("".concat(currenciesId));
    use.actions.validationCurrencyLocation(use.states.currencyLocation);
    use.actions.validationSeparator(use.states.thousandsSeparator);
    use.actions.validationSeparator(use.states.decimalSeparator);
    use.actions.validationDecimalNumbers("".concat(use.states.decimalNumbers));
    use.actions.validationTaxes("".concat(use.states.taxes));
    use.actions.validationHost(use.states.host);
    use.actions.validationButtonNext();
  }, [use.states.name, use.states.documentIndex, use.states.documentNumber, use.states.address1, use.states.address2, use.states.city, use.states.state, use.states.postCode, use.states.country, use.states.email, use.states.phone, use.states.currenciesId, use.states.currencyLocation, use.states.thousandsSeparator, use.states.decimalSeparator, use.states.decimalNumbers, use.states.taxes, use.states.host, InputTypeDocument, InputCity, InputState, InputCountry, InputCurrency, InputCurrencyLocation, InputSeparator, InputDecimalNumbers, InputTaxes]);
  _react["default"].useEffect(function () {
    use.actions.validationButtonNext();
  }, [use.states.nameValid, use.states.documentIndexValid, use.states.documentNumberValid, use.states.address1Valid, use.states.address2Valid, use.states.cityValid, use.states.stateCountryValid, use.states.countryValid, use.states.postCodeValid, use.states.emailValid, use.states.phoneValid, use.states.currenciesIdValid, use.states.currencyLocationValid, use.states.separatorValid, use.states.decimalNumbersValid, use.states.taxesValid, use.states.hostValid]);
  _react["default"].useEffect(function () {
    if (currentSite) {
      if (currentSite.name) use.actions.changeName(currentSite.name);
      if (currentSite.documentIndex) {
        var labelDocumentIndex = currentSite.documentIndex === 'null' ? 'No Aplica' : currentSite.documentIndex;
        use.actions.changeDocumentIndex({
          label: labelDocumentIndex,
          value: currentSite.documentIndex
        });
      }
      if (currentSite.documentNumber) use.actions.changeDocumentNumber(currentSite.documentNumber);
      if (currentSite.address1) use.actions.changeAddress1(currentSite.address1);
      if (currentSite.address2) use.actions.changeAddress2(currentSite.address2);
      if (currentSite.country) use.actions.setCountry(currentSite.country);
      if (currentSite.state) use.actions.setStateCountry(currentSite.state);
      if (currentSite.city) use.actions.changeCity({
        label: currentSite.city,
        value: currentSite.city
      });
      if (currentSite.postCode) use.actions.changePostCode(currentSite.postCode);
      if (currentSite.email) use.actions.changeEmail(currentSite.email);
      if (currentSite.phone) use.actions.changePhone(currentSite.phone);
      if (currentSite.currenciesId) {
        var _useCurrencies$action;
        var labelCurrenciesId = (_useCurrencies$action = useCurrencies.actions.getById(currentSite.currenciesId)) === null || _useCurrencies$action === void 0 ? void 0 : _useCurrencies$action.name;
        use.actions.changeCurrenciesId({
          label: "".concat(labelCurrenciesId),
          value: "".concat(currentSite.currenciesId)
        });
      }
      if (currentSite.currencyLocation) {
        var labelCurrencyLocation = currentSite.currencyLocation === 'left' ? 'Izquierda' : currentSite.currencyLocation === 'right' ? 'Derecha' : '';
        use.actions.changeCurrencyLocation({
          label: labelCurrencyLocation,
          value: currentSite.currencyLocation
        });
      }
      if (currentSite.thousandsSeparator) {
        var labelSeparator = currentSite.thousandsSeparator === '.' ? 'Miles: " . "    Decimal: " , "' : currentSite.thousandsSeparator === ',' ? 'Miles: " , "    Decimal: " . "' : '';
        use.actions.changeSeparator({
          label: labelSeparator,
          value: currentSite.thousandsSeparator
        });
      }
      if (typeof currentSite.decimalNumbers !== 'undefined') {
        use.actions.changeDecimalNumbers({
          label: "".concat(currentSite.decimalNumbers),
          value: "".concat(currentSite.decimalNumbers)
        });
      }
      if (typeof currentSite.taxes !== 'undefined') {
        var labelTaxes = currentSite.taxes ? 'Si trabaja con impuestos' : 'No trabaja con impuestos';
        use.actions.changeTaxes({
          label: labelTaxes,
          value: "".concat(currentSite.taxes)
        });
      }
      if (currentSite.host) use.actions.changeHost(currentSite.host);
    }
    if (isAddForm) {
      setInputTypeDocument(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectDocumentIdIndex, {
          changeIndex: function changeIndex(event) {
            return use.actions.changeDocumentIndex(event);
          },
          props: _objectSpread({
            options: use.states.documentIndexOptions,
            defaultValue: use.states.documentIndexDefault,
            styles: {
              width: '90%'
            }
          }, documentTypeSelectProps)
        });
      });
      setInputCountry(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCountry, {
          changeCountry: function changeCountry(event) {
            return use.actions.changeCountry(event);
          },
          props: _objectSpread({
            options: use.states.countryOptions,
            defaultValue: use.states.countryDefault,
            styles: {
              width: '90%'
            }
          }, countrySelectProps)
        });
      });
      setInputCurrency(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrencies, {
          changeCurrencies: function changeCurrencies(event) {
            return use.actions.changeCurrenciesId(event);
          },
          props: _objectSpread({
            options: use.states.currenciesIdOptions,
            defaultValue: use.states.currenciesIdDefault,
            styles: {
              width: '90%'
            }
          }, currencySelectProps)
        });
      });
      setInputCurrencyLocation(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrenciesLocations, {
          changeCurrenciesLocations: function changeCurrenciesLocations(event) {
            return use.actions.changeCurrencyLocation(event);
          },
          props: _objectSpread({
            options: use.states.currencyLocationOptions,
            defaultValue: use.states.currencyLocationDefault,
            styles: {
              width: '90%'
            }
          }, currencyLocationSelectProps)
        });
      });
      setInputSeparator(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrenciesSeparator, {
          changeCurrenciesSeparator: function changeCurrenciesSeparator(event) {
            return use.actions.changeSeparator(event);
          },
          props: _objectSpread({
            options: use.states.separatorOptions,
            defaultValue: use.states.separatorDefault,
            styles: {
              width: '90%'
            }
          }, separatorSelectProps)
        });
      });
      setInputDecimalNumbers(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrenciesDecimalNumbers, {
          changeCurrenciesDecimalNumbers: function changeCurrenciesDecimalNumbers(event) {
            return use.actions.changeDecimalNumbers(event);
          },
          props: _objectSpread({
            options: use.states.decimalNumbersOptions,
            defaultValue: use.states.decimalNumbersDefault,
            styles: {
              width: '90%'
            }
          }, decimalSelectProps)
        });
      });
      setInputTaxes(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectTaxes, {
          changeTaxes: function changeTaxes(event) {
            return use.actions.changeTaxes(event);
          },
          props: _objectSpread({
            options: use.states.taxesOptions,
            defaultValue: use.states.taxesDefault,
            styles: {
              width: '90%'
            }
          }, taxesSelectProps)
        });
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    if (isAddForm) {
      if (use.states.stateCountryOptions.length > 0) {
        setInputState(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectStateCountry, {
            changeStateCountry: function changeStateCountry(event) {
              return use.actions.changeStateCountry(event);
            },
            props: _objectSpread({
              options: use.states.stateCountryOptions,
              defaultValue: use.states.stateCountryDefault,
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
              return use.actions.changeStateCountry(event);
            },
            props: _objectSpread({
              inputProps: {
                defaultValue: use.states.state
              },
              styles: {
                padding: '10px 19px',
                width: '90%'
              }
            }, stateInputProps)
          });
        });
      }
      if (use.states.cityOptions.length > 0) {
        setInputCity(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectCity, {
            changeCity: function changeCity(event) {
              return use.actions.changeCity(event);
            },
            props: _objectSpread({
              options: use.states.cityOptions,
              defaultValue: use.states.cityDefault,
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
              return use.actions.changeCity(event);
            },
            props: _objectSpread({
              inputProps: {
                defaultValue: use.states.city
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
  }, [use.states.country, use.states.stateCountryOptions, use.states.cityOptions]);
  _react["default"].useEffect(function () {
    if (isUpdateForm) {
      var _use$states$documentI, _use$states$currencie, _use$states$currencyL, _use$states$separator, _use$states$decimalNu, _use$states$taxesDefa;
      if (((_use$states$documentI = use.states.documentIndexDefault) === null || _use$states$documentI === void 0 ? void 0 : _use$states$documentI.label) !== 'Elija el tipo de Documento') {
        setInputTypeDocument(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectDocumentIdIndex, {
            changeIndex: function changeIndex(event) {
              return use.actions.changeDocumentIndex(event);
            },
            props: _objectSpread({
              options: use.states.documentIndexOptions,
              defaultValue: use.states.documentIndexDefault,
              styles: {
                width: '90%'
              }
            }, documentTypeSelectProps)
          });
        });
      }
      if (((_use$states$currencie = use.states.currenciesIdDefault) === null || _use$states$currencie === void 0 ? void 0 : _use$states$currencie.label) !== 'Elija la moneda del Sitio') {
        setInputCurrency(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrencies, {
            changeCurrencies: function changeCurrencies(event) {
              return use.actions.changeCurrenciesId(event);
            },
            props: _objectSpread({
              options: use.states.currenciesIdOptions,
              defaultValue: use.states.currenciesIdDefault,
              styles: {
                width: '90%'
              }
            }, currencySelectProps)
          });
        });
      }
      if (((_use$states$currencyL = use.states.currencyLocationDefault) === null || _use$states$currencyL === void 0 ? void 0 : _use$states$currencyL.label) !== 'Elija la ubicación del símbolo de la moneda') {
        setInputCurrencyLocation(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrenciesLocations, {
            changeCurrenciesLocations: function changeCurrenciesLocations(event) {
              return use.actions.changeCurrencyLocation(event);
            },
            props: _objectSpread({
              options: use.states.currencyLocationOptions,
              defaultValue: use.states.currencyLocationDefault,
              styles: {
                width: '90%'
              }
            }, currencyLocationSelectProps)
          });
        });
      }
      if (((_use$states$separator = use.states.separatorDefault) === null || _use$states$separator === void 0 ? void 0 : _use$states$separator.label) !== 'Selecciona los separadores de la moneda') {
        setInputSeparator(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrenciesSeparator, {
            changeCurrenciesSeparator: function changeCurrenciesSeparator(event) {
              return use.actions.changeSeparator(event);
            },
            props: _objectSpread({
              options: use.states.separatorOptions,
              defaultValue: use.states.separatorDefault,
              styles: {
                width: '90%'
              }
            }, separatorSelectProps)
          });
        });
      }
      if (((_use$states$decimalNu = use.states.decimalNumbersDefault) === null || _use$states$decimalNu === void 0 ? void 0 : _use$states$decimalNu.label) !== 'Selecciona el número de decimales') {
        setInputDecimalNumbers(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrenciesDecimalNumbers, {
            changeCurrenciesDecimalNumbers: function changeCurrenciesDecimalNumbers(event) {
              return use.actions.changeDecimalNumbers(event);
            },
            props: _objectSpread({
              options: use.states.decimalNumbersOptions,
              defaultValue: use.states.decimalNumbersDefault,
              styles: {
                width: '90%'
              }
            }, decimalSelectProps)
          });
        });
      }
      if (((_use$states$taxesDefa = use.states.taxesDefault) === null || _use$states$taxesDefa === void 0 ? void 0 : _use$states$taxesDefa.label) !== 'Selecciona la opción para los impuestos') {
        setInputTaxes(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectTaxes, {
            changeTaxes: function changeTaxes(event) {
              return use.actions.changeTaxes(event);
            },
            props: _objectSpread({
              options: use.states.taxesOptions,
              defaultValue: use.states.taxesDefault,
              styles: {
                width: '90%'
              }
            }, taxesSelectProps)
          });
        });
      }
    }
  }, [use.states.documentIndexDefault]); // eslint-disable-line react-hooks/exhaustive-deps

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
            return use.actions.changeStateCountry(event);
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
            return use.actions.changeCity(event);
          },
          props: _objectSpread({
            inputProps: {
              defaultValue: use.states.city,
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
  }, [currentSite, use.states.city]);
  _react["default"].useEffect(function () {
    if (isAddForm) {
      use.actions.changeCityOptions();
    }
  }, [use.actions.changeCityOptions]);
  _react["default"].useEffect(function () {
    if (isAddForm) {
      use.actions.changeStateCountryOptions();
    }
  }, [use.actions.changeStateCountryOptions]);
  var title1Text = isAddForm ? 'Nuevo Sitio' : 'Actualizar Sitio';
  var title2Text = isAddForm ? 'Agrega un nuevo Sitio' : "Actualiza la informaci\xF3n del sitio #".concat(currentSite === null || currentSite === void 0 ? void 0 : currentSite.id);
  var buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  var buttonAction = isAddForm ? use.actions.add : use.actions.update;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.actions.returnInit();
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
    error: use.states.error
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, nameContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: function changeName(event) {
      return use.actions.changeName(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.name
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
      return use.actions.changeDocumentNumber(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.documentNumber
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
      return use.actions.changeAddress1(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.address1
      },
      styles: {
        width: '90%',
        padding: '10px 19px'
      }
    }, address1InputProps)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputAddress2, {
    changeAddress2: function changeAddress2(event) {
      return use.actions.changeAddress2(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.address2
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
      return use.actions.changePostCode(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.postCode
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
  }, phoneEmailContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputPhone, {
    changePhone: function changePhone(event) {
      return use.actions.changePhone(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.phone
      },
      styles: {
        padding: '10px 19px',
        width: '90%'
      }
    }, phoneInputProps)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputEmail, {
    changeEmail: function changeEmail(event) {
      return use.actions.changeEmail(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.email
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
      return use.actions.changeHost(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.host
      },
      styles: {
        padding: '10px 19px',
        width: '90%'
      }
    }, hostInputProps)
  })))));
};