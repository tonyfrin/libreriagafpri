"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFormUpdate = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var _templateObject, _templateObject2, _templateObject3;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultPhotoContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var defaultPhotoMainContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"])));
var defaultNameContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var UserFormUpdate = exports.UserFormUpdate = function UserFormUpdate(_ref) {
  var use = _ref.use,
    _ref$photoMainContain = _ref.photoMainContainerStyle,
    photoMainContainerStyle = _ref$photoMainContain === void 0 ? defaultPhotoMainContainerStyle : _ref$photoMainContain,
    _ref$photoContainerSt = _ref.photoContainerStyle,
    photoContainerStyle = _ref$photoContainerSt === void 0 ? defaultPhotoContainerStyle : _ref$photoContainerSt,
    _ref$nameContainerSty = _ref.nameContainerStyle,
    nameContainerStyle = _ref$nameContainerSty === void 0 ? defaultNameContainerStyle : _ref$nameContainerSty,
    modelFormProps = _ref.modelFormProps,
    nameInputProps = _ref.nameInputProps,
    lastNameInputProps = _ref.lastNameInputProps,
    emailInputProps = _ref.emailInputProps,
    phoneContainerProps = _ref.phoneContainerProps,
    areaCodeSelectProps = _ref.areaCodeSelectProps,
    phoneInputProps = _ref.phoneInputProps,
    roleSelectProps = _ref.roleSelectProps,
    propsPhoto = _ref.propsPhoto;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputAreaCode = _React$useState2[0],
    setInputAreaCode = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputRole = _React$useState4[0],
    setInputRole = _React$useState4[1];
  var currentUser = use.actions.getById(use.states.userId);
  _react["default"].useEffect(function () {
    use.actions.validationName(use.states.name);
    use.actions.validationLastName(use.states.lastName);
    use.actions.validationEmail(use.states.email);
    use.actions.validationAreaCode(use.states.areaCode);
    use.actions.validationPhoneNumber(use.states.phoneNumber);
    use.actions.validationRole(use.states.rolesId);
    use.actions.validationPhoto(use.states.photo);
    use.actions.validationIsActive("".concat(use.states.isActive));
    use.actions.validationButtonNext();
  }, [use.states.name, use.states.lastName, use.states.email, use.states.phoneNumber, use.states.areaCode, use.states.rolesId, use.states.photo, use.states.isActive, InputRole, InputAreaCode]);
  _react["default"].useEffect(function () {
    use.actions.validationButtonNext();
  }, [use.states.nameValid, use.states.lastNameValid, use.states.emailValid, use.states.phoneNumberValid, use.states.areaCodeValid, use.states.roleValid, use.states.photoValid, use.states.isActiveValid]);
  _react["default"].useEffect(function () {
    if (use.states.roleDefault.value !== '') {
      setInputRole(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectRoles, {
          changeRoles: function changeRoles(e) {
            return use.actions.changeRole(e);
          },
          props: _objectSpread({
            options: use.states.roleOptions,
            defaultValue: use.states.roleDefault,
            styles: {
              width: '96%'
            }
          }, roleSelectProps)
        });
      });
    }
  }, [use.states.roleDefault]);
  _react["default"].useEffect(function () {
    if (use.states.name !== '') {
      setInputAreaCode(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectAreaCode, {
          changeAreaCode: function changeAreaCode(e) {
            return use.actions.changeAreaCode(e);
          },
          props: _objectSpread({
            options: use.states.areaCodeOptions,
            defaultValue: use.states.areaCodeDefault,
            styles: {
              width: '96%'
            }
          }, areaCodeSelectProps)
        });
      });
    }
  }, [use.states.name]);
  _react["default"].useEffect(function () {
    if (currentUser) {
      use.actions.changeName(currentUser.name);
      if (currentUser !== null && currentUser !== void 0 && currentUser.lastName) use.actions.changeLastName(currentUser.lastName);
      use.actions.changeEmail(currentUser.email);
      if (currentUser !== null && currentUser !== void 0 && currentUser.photo) use.actions.setPhoto(currentUser.photo);
      if (currentUser !== null && currentUser !== void 0 && currentUser.roles) {
        var currentRole = {
          label: currentUser.roles.name,
          value: "".concat(currentUser.roles.id)
        };
        use.actions.changeRole(currentRole);
      }
      var countryCode = currentUser.phone.slice(0, -10);
      var countryCodeLabel = countryCode === '0058' ? '(+58) Venezuela' : countryCode === '001' ? '(+1) Estados Unidos' : '';
      var countryCodeDefault = {
        label: countryCodeLabel,
        value: countryCode
      };
      use.actions.changeAreaCode(countryCodeDefault);
      var phoneNumber = currentUser.phone.slice(-10);
      use.actions.changePhoneNumber(phoneNumber);
    }
  }, []);
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        use.actions.update();
        break;
      case 'return':
        use.actions.returnInit();
        break;
      default:
        console.log('Acciónes desconocidas:', action);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, (0, _extends2["default"])({
    titles: {
      title1: 'Actualizar Usuario',
      title2: "Actualiza la informaci\xF3n del usuario #".concat(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)
    },
    buttonTitles: {
      mainButton: 'Actualizar',
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: use.states.error
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(photoMainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(photoContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Form.PhotoUser, {
    photo: use.states.photo,
    changePhoto: use.actions.changePhoto,
    submitting: use.states.submitting,
    changeError: use.actions.changeError,
    setSubmitting: use.actions.setSubmitting,
    props: propsPhoto
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(nameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: function changeName(e) {
      return use.actions.changeName(e);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.name
      },
      styles: {
        width: '100%'
      }
    }, nameInputProps)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputLastName, {
    changeLastName: function changeLastName(e) {
      return use.actions.changeLastName(e);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.lastName
      },
      styles: {
        width: '100%'
      }
    }, lastNameInputProps)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputEmail, {
    changeEmail: function changeEmail(e) {
      return use.actions.changeEmail(e);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.email
      },
      styles: {
        width: '100%'
      }
    }, emailInputProps)
  }), InputRole))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%'
    }
  }, phoneContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputAreaCode, /*#__PURE__*/_react["default"].createElement(_Input.InputPhone, {
    changePhone: function changePhone(e) {
      return use.actions.changePhoneNumber(e);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.phoneNumber
      },
      styles: {
        width: '96%'
      }
    }, phoneInputProps)
  })))));
};