"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityAddForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var _constants = require("../../constants");
var _templateObject, _templateObject2, _templateObject3;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultPhotoContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var defaultPhotoMainContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"])));
var defaultNameContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var EntityAddForm = exports.EntityAddForm = function EntityAddForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType,
    _ref$photoMainContain = _ref.photoMainContainerStyle,
    photoMainContainerStyle = _ref$photoMainContain === void 0 ? defaultPhotoMainContainerStyle : _ref$photoMainContain,
    _ref$photoContainerSt = _ref.photoContainerStyle,
    photoContainerStyle = _ref$photoContainerSt === void 0 ? defaultPhotoContainerStyle : _ref$photoContainerSt,
    _ref$nameContainerSty = _ref.nameContainerStyle,
    nameContainerStyle = _ref$nameContainerSty === void 0 ? defaultNameContainerStyle : _ref$nameContainerSty,
    modelFormProps = _ref.modelFormProps,
    modelFormContainerProps = _ref.modelFormContainerProps,
    nameProps = _ref.nameProps,
    lastNameProps = _ref.lastNameProps,
    typeDocumentIdIdProps = _ref.typeDocumentIdIdProps,
    containerDocumentProps = _ref.containerDocumentProps,
    indexProps = _ref.indexProps,
    digitProps = _ref.digitProps,
    containerAddressProps = _ref.containerAddressProps,
    address1Props = _ref.address1Props,
    address2Props = _ref.address2Props,
    containerCityStateProps = _ref.containerCityStateProps,
    cityInputProps = _ref.cityInputProps,
    stateInputProps = _ref.stateInputProps,
    citySelectProps = _ref.citySelectProps,
    stateSelectProps = _ref.stateSelectProps,
    containerCountryProps = _ref.containerCountryProps,
    countryProps = _ref.countryProps,
    codePostProps = _ref.codePostProps,
    containerEmailPhoneProps = _ref.containerEmailPhoneProps,
    emailProps = _ref.emailProps,
    phoneProps = _ref.phoneProps,
    propsPhoto = _ref.propsPhoto,
    customHandleActions = _ref.customHandleActions;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputTypeDocumentIdId = _React$useState2[0],
    setInputTypeDocumentIdId = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputIndex = _React$useState4[0],
    setInputIndex = _React$useState4[1];
  var _React$useState5 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    InputCity = _React$useState6[0],
    setInputCity = _React$useState6[1];
  var _React$useState7 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    InputState = _React$useState8[0],
    setInputState = _React$useState8[1];
  var _React$useState9 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    InputCountry = _React$useState10[0],
    setInputCountry = _React$useState10[1];
  var isPersonalForm = formType === 'personal';
  _react["default"].useEffect(function () {
    use.attributes.actions.validationPhoto(use.attributes.states.photo);
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationLastName(use.attributes.states.lastName);
    var typeDocumentIdId = use.attributes.states.typeDocumentIdId === null ? '' : "".concat(use.attributes.states.typeDocumentIdId);
    use.attributes.actions.validationTypeDocumentIdId(typeDocumentIdId);
    use.attributes.actions.validationIndex(use.attributes.states.index);
    use.attributes.actions.validationDigit(use.attributes.states.digit);
    use.attributes.actions.validationAddressType(use.attributes.states.addressType);
    use.attributes.actions.validationAddress1(use.attributes.states.address1);
    use.attributes.actions.validationAddress2(use.attributes.states.address2);
    use.attributes.actions.validationCity(use.attributes.states.city);
    use.attributes.actions.validationStateCountry(use.attributes.states.state);
    use.attributes.actions.validationCountry(use.attributes.states.country);
    use.attributes.actions.validationPostCode(use.attributes.states.postCode);
    use.attributes.actions.validationEmail(use.attributes.states.email);
    use.attributes.actions.validationPhone(use.attributes.states.phone);
    use.attributes.actions.validationStatus(use.attributes.states.status);
    use.attributes.actions.validationType(use.attributes.states.type);
  }, [use.attributes.states.photo, use.attributes.states.name, use.attributes.states.lastName, use.attributes.states.typeDocumentIdId, InputTypeDocumentIdId, use.attributes.states.index, InputIndex, use.attributes.states.digit, use.attributes.states.address1, use.attributes.states.address2, use.attributes.states.city, InputCity, use.attributes.states.state, InputState, use.attributes.states.country, InputCountry, use.attributes.states.postCode, use.attributes.states.email, use.attributes.states.phone, use.attributes.states.status, use.attributes.states.type, use.attributes.states.addressType]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.photoValid, use.attributes.states.nameValid, use.attributes.states.lastNameValid, use.attributes.states.typeDocumentIdIdValid, use.attributes.states.indexValid, use.attributes.states.digitValid, use.attributes.states.address1Valid, use.attributes.states.address2Valid, use.attributes.states.cityValid, use.attributes.states.stateCountryValid, use.attributes.states.countryValid, use.attributes.states.postCodeValid, use.attributes.states.emailValid, use.attributes.states.phoneValid, use.attributes.states.statusValid, use.attributes.states.addressTypeValid]);
  _react["default"].useEffect(function () {
    use.attributes.actions.changeStatus({
      value: 'active',
      label: 'Activo'
    });
    use.attributes.actions.changeAddressType({
      value: 'bill',
      label: 'Facturación'
    });
  }, []);
  var title1Text = isPersonalForm ? 'Nueva personal natural' : 'Nueva persona jurídica';
  var title2Text = isPersonalForm ? 'Agrega una nueva persona natural' : "Agrega una nueva persona jur\xEDdica";
  var buttonTitle = 'Agregar';
  var returnInit = function returnInit() {
    setInputState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
    setInputCountry( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
    use.pages.actions.returnInit();
  };
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        use.api.actions.add();
        break;
      case 'return':
        returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  _react["default"].useEffect(function () {
    setInputTypeDocumentIdId(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectTypeDocumentIdId, {
        changeTypeDocumentIdId: function changeTypeDocumentIdId(e) {
          return use.attributes.actions.changeTypeDocumentIdId(e);
        },
        props: _objectSpread({
          options: use.attributes.states.typeDocumentIdIdOptions,
          defaultValue: use.attributes.states.typeDocumentIdIdDefault,
          styles: {
            width: '100%'
          },
          title: 'Tipo de documento'
        }, typeDocumentIdIdProps)
      });
    });
    setInputIndex(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectDocumentIdIndex, {
        changeIndex: function changeIndex(e) {
          return use.attributes.actions.changeIndex(e);
        },
        props: _objectSpread({
          options: use.attributes.states.indexOptions,
          defaultValue: use.attributes.states.indexDefault,
          title: 'Índice de documento',
          styles: {
            width: '92%'
          }
        }, indexProps)
      });
    });
    setInputCountry(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectCountry, {
        changeCountry: function changeCountry(e) {
          return use.attributes.actions.changeCountry(e);
        },
        props: _objectSpread({
          options: use.attributes.states.countryOptions,
          defaultValue: use.attributes.states.countryDefault,
          title: 'País',
          styles: {
            width: '92%'
          }
        }, countryProps)
      });
    });
  }, []);
  _react["default"].useEffect(function () {
    if (use.attributes.states.stateCountryOptions.length > 0) {
      setInputState(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectStateCountry, {
          changeStateCountry: function changeStateCountry(e) {
            return use.attributes.actions.changeStateCountry(e);
          },
          props: _objectSpread({
            title: 'Estado',
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
          changeStateCountry: function changeStateCountry(e) {
            return use.attributes.actions.changeStateCountry(e);
          },
          props: _objectSpread({
            inputProps: {
              defaultValue: use.attributes.states.state,
              title: 'Estado'
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
          changeCity: function changeCity(e) {
            return use.attributes.actions.changeCity(e);
          },
          props: _objectSpread({
            options: use.attributes.states.cityOptions,
            defaultValue: use.attributes.states.cityDefault,
            title: 'Ciudad',
            styles: {
              width: '90%'
            }
          }, citySelectProps)
        });
      });
    } else {
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputCity, {
          changeCity: use.attributes.actions.changeCity,
          props: _objectSpread({
            inputProps: {
              defaultValue: use.attributes.states.city,
              title: 'Ciudad'
            },
            styles: {
              padding: '10px 19px',
              width: '90%'
            }
          }, cityInputProps)
        }));
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
      title1: title1Text,
      title2: title2Text
    },
    buttonTitles: {
      mainButton: buttonTitle,
      returnButton: 'Volver'
    },
    handleActions: customHandleActions || handleActions,
    error: use.error.states.error,
    boxProps: modelFormContainerProps,
    buttonNextId: _constants.ENTITY_ROUTE,
    returnButtonConatinerStyle: "padding-button: 0px;"
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(photoMainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(photoContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Form.PhotoEntity, {
    photo: use.attributes.states.photo,
    changePhoto: use.attributes.actions.changePhoto,
    submitting: use.attributes.states.submitting,
    changeError: use.error.actions.changeError,
    setSubmitting: use.attributes.actions.setSubmitting,
    props: propsPhoto
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(nameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.attributes.actions.changeName,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.name,
        title: 'Nombre'
      },
      styles: {
        width: '100%'
      }
    }, nameProps)
  }), isPersonalForm && /*#__PURE__*/_react["default"].createElement(_Input.InputLastName, {
    changeLastName: use.attributes.actions.changeLastName,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.lastName,
        title: 'Apellido'
      },
      styles: {
        width: '100%'
      }
    }, lastNameProps)
  }), InputTypeDocumentIdId))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerDocumentProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputIndex, /*#__PURE__*/_react["default"].createElement(_Input.InputDocumentiIdDigit, {
    changeDocumentiIdDigit: use.attributes.actions.changeDigit,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.digit,
        title: 'Numero de documento'
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, digitProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerAddressProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputAddress1, {
    changeAddress1: use.attributes.actions.changeAddress1,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.address1,
        title: 'Dirección 1'
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, address1Props)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputAddress2, {
    changeAddress2: use.attributes.actions.changeAddress2,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.address2,
        title: 'Dirección 2'
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, address2Props)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerCityStateProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCity, InputState)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerCountryProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCountry, /*#__PURE__*/_react["default"].createElement(_Input.InputZipCode, {
    changeZipCode: use.attributes.actions.changePostCode,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.postCode,
        title: 'Código postal'
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, codePostProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerEmailPhoneProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputEmail, {
    changeEmail: use.attributes.actions.changeEmail,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.email,
        title: 'Correo electrónico'
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, emailProps)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputPhone, {
    changePhone: use.attributes.actions.changePhone,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.phone,
        title: 'Teléfono'
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, phoneProps)
  })))));
};