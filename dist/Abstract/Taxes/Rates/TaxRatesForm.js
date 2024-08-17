"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Countries", {
  enumerable: true,
  get: function get() {
    return _constants.Countries;
  }
});
Object.defineProperty(exports, "StatesCountries", {
  enumerable: true,
  get: function get() {
    return _constants.StatesCountries;
  }
});
exports.TaxRatesForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../../Containers");
var _Form = require("../../Form");
var _Input = require("../../Input");
var _constants = require("../../../constants");
var TaxRatesForm = exports.TaxRatesForm = function TaxRatesForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType,
    modelFormProps = _ref.modelFormProps,
    infoContainerProps = _ref.infoContainerProps;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    inputCity = _React$useState2[0],
    setInputCity = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    inputState = _React$useState4[0],
    setInputState = _React$useState4[1];
  var _React$useState5 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    inputCountry = _React$useState6[0],
    setInputCountry = _React$useState6[1];
  var currentItem = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationTaxClassesId(parseInt(use.attributes.states.taxClassesId, 10));
    use.attributes.actions.validationRate(parseFloat(use.attributes.states.rate));
    use.attributes.actions.validationCity(use.attributes.states.city);
    use.attributes.actions.validationStateCountry(use.attributes.states.state);
    use.attributes.actions.validationCountry(use.attributes.states.country);
    use.attributes.actions.validationPostCode(use.attributes.states.postCode);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.taxClassesId, use.attributes.states.rate, use.attributes.states.city, use.attributes.states.state, use.attributes.states.country, use.attributes.states.postCode]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.taxClassesIdValid, use.attributes.states.rateValid, use.attributes.states.cityValid, use.attributes.states.stateCountryValid, use.attributes.states.countryValid, use.attributes.states.postCodeValid]);
  _react["default"].useEffect(function () {
    if (isUpdateForm && currentItem) {
      use.attributes.actions.changeTaxClasses("".concat(currentItem.taxClassesId));
      use.attributes.actions.changeRate("".concat(currentItem.rate));
      use.attributes.actions.setCountry(currentItem.country);
      use.attributes.actions.setStateCountry(currentItem.state);
      use.attributes.actions.changeCity({
        label: currentItem.city,
        value: currentItem.city
      });
      if (currentItem !== null && currentItem !== void 0 && currentItem.postCode) use.attributes.actions.changePostCode(currentItem === null || currentItem === void 0 ? void 0 : currentItem.postCode);
    }
  }, []);
  _react["default"].useEffect(function () {
    if (isAddForm) {
      setInputCountry(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCountry, {
          changeCountry: function changeCountry(event) {
            return use.attributes.actions.changeCountry(event);
          },
          props: {
            defaultValue: use.attributes.states.countryDefault,
            styles: {
              width: '90%'
            },
            options: use.attributes.states.countryOptions,
            title: 'País'
          }
        });
      });
    }
  }, []);
  _react["default"].useEffect(function () {
    if (isAddForm) {
      if (use.attributes.states.stateCountryOptions.length > 0) {
        setInputState(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectStateCountry, {
            changeStateCountry: function changeStateCountry(event) {
              return use.attributes.actions.changeStateCountry(event);
            },
            props: {
              defaultValue: use.attributes.states.stateCountryDefault,
              styles: {
                width: '90%'
              },
              options: use.attributes.states.stateCountryOptions,
              title: 'Estado'
            }
          });
        });
      } else {
        setInputState(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.InputStateCountry, {
            changeStateCountry: function changeStateCountry(event) {
              return use.attributes.actions.changeStateCountry(event);
            },
            props: {
              inputProps: {
                defaultValue: use.attributes.states.state,
                title: 'Estado'
              },
              styles: {
                padding: '10px 19px',
                width: '90%'
              }
            }
          });
        });
      }
      if (use.attributes.states.cityOptions.length > 0) {
        setInputCity(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectCity, {
            changeCity: function changeCity(event) {
              return use.attributes.actions.changeCity(event);
            },
            props: {
              defaultValue: use.attributes.states.cityDefault,
              styles: {
                width: '90%'
              },
              options: use.attributes.states.cityOptions,
              title: 'Ciudad'
            }
          });
        });
      } else {
        setInputCity(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.InputCity, {
            changeCity: function changeCity(event) {
              return use.attributes.actions.changeCity(event);
            },
            props: {
              inputProps: {
                defaultValue: use.attributes.states.city,
                title: 'Ciudad'
              },
              styles: {
                padding: '10px 19px',
                width: '90%'
              }
            }
          });
        });
      }
    }
  }, [use.attributes.states.country, use.attributes.states.stateCountryOptions, use.attributes.states.cityOptions]);
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
  _react["default"].useEffect(function () {
    if (isUpdateForm && currentItem) {
      var labelCountry = _constants.Countries[0][currentItem.country];
      var labelStateCountry = _constants.StatesCountries[0][currentItem.country][0][currentItem.state];
      setInputCountry(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.Input, {
          inputProps: {
            title: 'Pais',
            type: 'text',
            id: 'countrySite',
            defaultValue: labelCountry,
            readOnly: true
          },
          styles: {
            width: '90%'
          },
          containerStyles: {
            custom: 'display: grid;'
          }
        });
      });
      setInputState(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.Input, {
          inputProps: {
            title: 'Estado',
            type: 'text',
            id: 'stateCountrySite',
            defaultValue: labelStateCountry,
            readOnly: true
          },
          styles: {
            width: '90%'
          }
        });
      });
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.Input, {
          inputProps: {
            title: 'Ciudad',
            type: 'text',
            id: 'citySite',
            defaultValue: use.attributes.states.city,
            readOnly: true
          },
          styles: {
            width: '90%'
          }
        });
      });
    }
  }, [currentItem, use.attributes.states.city]);
  var title1Text = isAddForm ? 'Nueva tasa' : 'Actualizar tasa';
  var title2Text = isAddForm ? 'Agrega una nueva tasa de impuestos' : "Actualiza la informaci\xF3n de la tasa de impuestos #".concat(currentItem === null || currentItem === void 0 ? void 0 : currentItem.id);
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
    boxProps: {
      styles: {
        width: '100%',
        height: '75vh',
        margin: '30px auto 0px'
      }
    },
    mainButtonProps: {
      styles: {
        fontSize: '10px'
      },
      title: buttonTitle
    },
    returnButtonProps: {
      styles: {
        fontSize: '10px',
        backgroundColor: '#c12429'
      },
      title: 'volver',
      buttonProps: {
        onClick: use.pages.actions.returnInit
      }
    },
    titles: {
      title1: title1Text,
      title2: title2Text
    },
    buttonTitles: {
      mainButton: buttonTitle,
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: use.error.states.error,
    buttonNextId: _constants.TAX_RATES_ROUTE
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'space-between'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputRate, {
    change: use.attributes.actions.changeRate,
    props: {
      inputProps: {
        defaultValue: use.attributes.states.rate
      },
      styles: {
        width: '100%'
      }
    },
    inputId: _constants.TAX_RATES_ROUTE
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, inputCity, inputState)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, inputCountry, /*#__PURE__*/_react["default"].createElement(_Input.InputZipCode, {
    changeZipCode: use.attributes.actions.changePostCode,
    props: {
      inputProps: {
        defaultValue: use.attributes.states.postCode,
        title: 'Código Postal'
      },
      styles: {
        width: '90%'
      }
    },
    inputId: _constants.TAX_RATES_ROUTE
  })))));
};