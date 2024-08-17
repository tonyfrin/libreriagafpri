"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StorageForm = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Form = require("../Form");
var _constants = require("../../constants");
var _Input = require("../Input");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var StorageForm = exports.StorageForm = function StorageForm(_ref) {
  var use = _ref.use,
    useSites = _ref.useSites,
    formType = _ref.formType,
    modelFormProps = _ref.modelFormProps,
    nameContainerProps = _ref.nameContainerProps,
    nameInputProps = _ref.nameInputProps,
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
    siteSelectProps = _ref.siteSelectProps;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputCity = _React$useState2[0],
    setInputCity = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputState = _React$useState4[0],
    setInputState = _React$useState4[1];
  var _React$useState5 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    InputCountry = _React$useState6[0],
    setInputCountry = _React$useState6[1];
  var _React$useState7 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    InputSite = _React$useState8[0],
    setInputSite = _React$useState8[1];
  var currentStorage = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationAddress1(use.attributes.states.address1);
    use.attributes.actions.validationAddress2(use.attributes.states.address2);
    use.attributes.actions.validationCity(use.attributes.states.city);
    use.attributes.actions.validationStateCountry(use.attributes.states.state);
    use.attributes.actions.validationCountry(use.attributes.states.country);
    use.attributes.actions.validationPostCode(use.attributes.states.postCode);
    use.attributes.actions.validationSite(use.attributes.states.site);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name, use.attributes.states.address1, use.attributes.states.address2, use.attributes.states.city, use.attributes.states.state, use.attributes.states.postCode, use.attributes.states.country, use.attributes.states.site, InputCity, InputState, InputCountry, InputSite]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.address1Valid, use.attributes.states.address2Valid, use.attributes.states.cityValid, use.attributes.states.stateCountryValid, use.attributes.states.countryValid, use.attributes.states.postCodeValid, use.attributes.states.siteValid]);
  _react["default"].useEffect(function () {
    if (currentStorage) {
      if (currentStorage.name) use.attributes.actions.changeName(currentStorage.name);
      if (currentStorage.address1) use.attributes.actions.changeAddress1(currentStorage.address1);
      if (currentStorage.address2) use.attributes.actions.changeAddress2(currentStorage.address2);
      if (currentStorage.country) use.attributes.actions.setCountry(currentStorage.country);
      if (currentStorage.state) use.attributes.actions.setStateCountry(currentStorage.state);
      if (currentStorage.city) use.attributes.actions.changeCity({
        label: currentStorage.city,
        value: currentStorage.city
      });
      if (currentStorage.postCode) use.attributes.actions.changePostCode(currentStorage.postCode);
      if (currentStorage.sitesId) {
        var currentSite = useSites.actions.getById(currentStorage.sitesId);
        if (currentSite) {
          var sitesValue = {
            label: currentSite.name,
            value: "".concat(currentStorage.sitesId)
          };
          use.attributes.actions.changeSite(sitesValue);
          setInputSite(function () {
            return /*#__PURE__*/_react["default"].createElement(_Input.SelectSite, (0, _extends2["default"])({
              changeSite: function changeSite(event) {
                return use.attributes.actions.changeSite(event);
              },
              props: {
                defaultValue: sitesValue,
                styles: {
                  width: '90%'
                },
                options: use.attributes.states.siteOptions
              }
            }, siteSelectProps));
          });
        }
      }
    }
    if (isAddForm) {
      setInputCountry(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCountry, (0, _extends2["default"])({
          changeCountry: function changeCountry(event) {
            return use.attributes.actions.changeCountry(event);
          },
          props: {
            defaultValue: use.attributes.states.countryDefault,
            styles: {
              width: '90%'
            },
            options: use.attributes.states.countryOptions
          }
        }, countrySelectProps));
      });
      setInputSite(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectSite, (0, _extends2["default"])({
          changeSite: function changeSite(event) {
            return use.attributes.actions.changeSite(event);
          },
          props: {
            defaultValue: use.attributes.states.siteDefault,
            styles: {
              width: '90%'
            },
            options: use.attributes.states.siteOptions
          }
        }, siteSelectProps));
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
              defaultValue: use.attributes.states.stateCountryDefault,
              styles: {
                width: '90%'
              },
              options: use.attributes.states.stateCountryOptions
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
              defaultValue: use.attributes.states.cityDefault,
              styles: {
                width: '90%'
              },
              options: use.attributes.states.cityOptions
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
    if (isUpdateForm && currentStorage) {
      var labelCountry = _constants.Countries[0][currentStorage.country];
      var labelStateCountry = _constants.StatesCountries[0][currentStorage.country][0][currentStorage.state];
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
        return /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
          inputProps: {
            placeholder: 'Estado',
            type: 'text',
            id: 'stateCountrySite',
            defaultValue: labelStateCountry,
            readOnly: true
          },
          styles: {
            padding: '10px 19px',
            width: '90%'
          }
        }, stateInputProps));
      });
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
          inputProps: {
            placeholder: 'Ciudad',
            type: 'text',
            id: 'citySite',
            defaultValue: use.attributes.states.city,
            readOnly: true
          },
          styles: {
            padding: '10px 19px',
            width: '90%'
          }
        }, cityInputProps));
      });
    }
  }, [currentStorage, use.attributes.states.city]);
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
  var title1Text = isAddForm ? 'Nuevo Deposito' : 'Actualizar Deposito';
  var title2Text = isAddForm ? 'Agrega un nuevo Deposito' : "Actualiza la informaci\xF3n del deposito #".concat(currentStorage === null || currentStorage === void 0 ? void 0 : currentStorage.postsId);
  var buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  var buttonAction = isAddForm ? use.api.actions.add : use.api.actions.update;
  var returnInit = function returnInit() {
    setInputState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
    setInputCountry( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
    use.pages.actions.returnInit();
  };
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        returnInit();
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
    error: use.error.states.error
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, nameContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.attributes.actions.changeName,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.name
      },
      styles: {
        width: '90%',
        padding: '10px 19px'
      }
    }, nameInputProps)
  }), InputSite)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, addressContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputAddress1, {
    changeAddress1: use.attributes.actions.changeAddress1,
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
    changeAddress2: use.attributes.actions.changeAddress2,
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
    changeZipCode: use.attributes.actions.changePostCode,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.postCode
      },
      styles: {
        padding: '10px 19px',
        width: '90%'
      }
    }, postCodeInputProps)
  })))));
};