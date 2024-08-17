"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressAddForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var AddressAddForm = exports.AddressAddForm = function AddressAddForm(_ref) {
  var use = _ref.use,
    inputCityProps = _ref.inputCityProps,
    selectCityProps = _ref.selectCityProps,
    inputStateProps = _ref.inputStateProps,
    selectStateProps = _ref.selectStateProps,
    selectCountryProps = _ref.selectCountryProps,
    selectTypeProps = _ref.selectTypeProps,
    _ref$mainTitle = _ref.mainTitle,
    mainTitle = _ref$mainTitle === void 0 ? 'Nueva dirección' : _ref$mainTitle,
    _ref$subTitle = _ref.subTitle,
    subTitle = _ref$subTitle === void 0 ? 'Agregar nueva dirección' : _ref$subTitle,
    modelFormProps = _ref.modelFormProps,
    containerAddressProps = _ref.containerAddressProps,
    inputAddress1Props = _ref.inputAddress1Props,
    inputAddress2Props = _ref.inputAddress2Props,
    containerCountryProps = _ref.containerCountryProps,
    containerPostCodeProps = _ref.containerPostCodeProps,
    inputPostCodeProps = _ref.inputPostCodeProps;
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
    InputType = _React$useState8[0],
    setInputType = _React$useState8[1];
  _react["default"].useEffect(function () {
    use.attributes.actions.validationAddressType(use.attributes.states.addressType);
    use.attributes.actions.validationAddress1(use.attributes.states.address1);
    use.attributes.actions.validationAddress2(use.attributes.states.address2);
    use.attributes.actions.validationCity(use.attributes.states.city);
    use.attributes.actions.validationStateCountry(use.attributes.states.state);
    use.attributes.actions.validationCountry(use.attributes.states.country);
    use.attributes.actions.validationPostCode(use.attributes.states.postCode);
  }, [use.attributes.states.address1, use.attributes.states.address2, use.attributes.states.city, InputCity, use.attributes.states.state, InputState, use.attributes.states.country, InputCountry, use.attributes.states.postCode, use.attributes.states.addressType]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNextAddress();
  }, [use.attributes.states.address1Valid, use.attributes.states.address2Valid, use.attributes.states.cityValid, use.attributes.states.stateCountryValid, use.attributes.states.countryValid, use.attributes.states.postCodeValid, use.attributes.states.addressTypeValid]);
  var buttonTitle = 'Agregar';
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        use.api.actions.addAddress();
        break;
      case 'return':
        use.pages.actions.goUpdate(use.attributes.states.currentId);
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  _react["default"].useEffect(function () {
    setInputCountry(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectCountry, {
        changeCountry: function changeCountry(event) {
          return use.attributes.actions.changeCountry(event);
        },
        props: _objectSpread({
          options: use.attributes.states.countryOptions,
          defaultValue: use.attributes.states.countryDefault,
          styles: {
            width: '89%'
          }
        }, selectCountryProps)
      });
    });
    setInputType(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectAddressType, {
        changeAddressType: function changeAddressType(event) {
          return use.attributes.actions.changeAddressType(event);
        },
        props: _objectSpread({
          options: use.attributes.states.addressTypeOptions,
          defaultValue: use.attributes.states.addressTypeDefault,
          styles: {
            width: '92%'
          }
        }, selectTypeProps)
      });
    });
  }, []);
  _react["default"].useEffect(function () {
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
              width: '89%'
            }
          }, selectStateProps)
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
              width: '89%'
            }
          }, inputStateProps)
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
              width: '89%'
            }
          }, selectCityProps)
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
              width: '89%'
            }
          }, inputCityProps)
        });
      });
    }
  }, [use.attributes.states.country, use.attributes.states.stateCountryOptions, use.attributes.states.cityOptions]);
  _react["default"].useEffect(function () {
    use.attributes.actions.changeCityOptions();
  }, [use.attributes.actions.changeCityOptions]);
  _react["default"].useEffect(function () {
    use.attributes.actions.changeStateCountryOptions();
  }, [use.attributes.actions.changeStateCountryOptions]);
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, (0, _extends2["default"])({
    titles: {
      title1: mainTitle,
      title2: subTitle
    },
    buttonTitles: {
      mainButton: buttonTitle,
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: use.error.states.error
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerAddressProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputAddress1, {
    changeAddress1: function changeAddress1(event) {
      return use.attributes.actions.changeAddress1(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.address1
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, inputAddress1Props)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputAddress2, {
    changeAddress2: function changeAddress2(event) {
      return use.attributes.actions.changeAddress2(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.address2
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, inputAddress2Props)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerCountryProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCity, InputState, InputCountry)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerPostCodeProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputZipCode, {
    changeZipCode: function changeZipCode(event) {
      return use.attributes.actions.changePostCode(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.postCode
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, inputPostCodeProps)
  }), InputType))));
};