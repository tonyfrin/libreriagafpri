"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserView = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Input = require("../Input");
var _helpers = require("../../helpers");
var _Button = require("../Button");
var _Form = require("../Form");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var defaultPhotoContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var defaultPhotoFormStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n"])));
var defaultPhotoStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  width: 100%;\n  max-width: 180px;\n  max-height: 180px;\n  object-fit: cover;\n  border: 1px solid #ebebeb;\n  margin: auto;\n  border-radius: 100%;\n"])));
var defaultPhotoMainContainerStyle = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"])));
var defaultNameContainerStyle = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var defaultOptionButtonContainerStyle = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n  width: 91.66667%;\n  margin: 10px 0px;\n"])));
var UserView = exports.UserView = function UserView(_ref) {
  var use = _ref.use,
    _ref$photoMainContain = _ref.photoMainContainerStyle,
    photoMainContainerStyle = _ref$photoMainContain === void 0 ? defaultPhotoMainContainerStyle : _ref$photoMainContain,
    _ref$photoContainerSt = _ref.photoContainerStyle,
    photoContainerStyle = _ref$photoContainerSt === void 0 ? defaultPhotoContainerStyle : _ref$photoContainerSt,
    _ref$photoFormStyle = _ref.photoFormStyle,
    photoFormStyle = _ref$photoFormStyle === void 0 ? defaultPhotoFormStyle : _ref$photoFormStyle,
    _ref$photoStyle = _ref.photoStyle,
    photoStyle = _ref$photoStyle === void 0 ? defaultPhotoStyle : _ref$photoStyle,
    _ref$nameContainerSty = _ref.nameContainerStyle,
    nameContainerStyle = _ref$nameContainerSty === void 0 ? defaultNameContainerStyle : _ref$nameContainerSty,
    _ref$optionButtonCont = _ref.optionButtonContainerStyle,
    optionButtonContainerStyle = _ref$optionButtonCont === void 0 ? defaultOptionButtonContainerStyle : _ref$optionButtonCont,
    emailPhoneButtonProps = _ref.emailPhoneButtonProps,
    modelFormProps = _ref.modelFormProps,
    nameInputProps = _ref.nameInputProps,
    lastNameInputProps = _ref.lastNameInputProps,
    roleListProps = _ref.roleListProps;
  var currentUser = use.actions.getById(use.states.userId);
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'return':
        use.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  var ButtonEmailPhone = function ButtonEmailPhone(_ref2) {
    var email = _ref2.email,
      isActive = _ref2.isActive;
    var color = isActive ? '#439b57' : '#c12429';
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionButtonContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      title: email,
      styles: {
        fontSize: '15px',
        backgroundColor: color,
        cursor: 'off',
        padding: '8px 19px'
      },
      Class: "email-button",
      buttonProps: {
        title: "".concat(email)
      }
    }, emailPhoneButtonProps)));
  };
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, (0, _extends2["default"])({
    titles: {
      title1: 'Ver',
      title2: "Informaci\xF3n del usuario #".concat(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)
    },
    buttonTitles: {
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: use.states.error
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(photoMainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(photoContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(photoFormStyle)
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: (0, _css.css)(photoStyle),
    src: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.photo) || 'https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png',
    alt: "Category"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(nameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(ButtonEmailPhone, {
    email: currentUser !== null && currentUser !== void 0 && currentUser.isActive ? 'Activo' : 'Inactivo',
    isActive: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.isActive) || false
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Nombre',
      type: 'text',
      id: "userName",
      readOnly: true,
      defaultValue: currentUser === null || currentUser === void 0 ? void 0 : currentUser.name
    },
    styles: {
      width: '100%'
    }
  }, nameInputProps)), /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Apellido',
      type: 'text',
      id: "userLastName",
      readOnly: true,
      defaultValue: currentUser === null || currentUser === void 0 ? void 0 : currentUser.lastName
    },
    styles: {
      width: '100%'
    }
  }, lastNameInputProps)), /*#__PURE__*/_react["default"].createElement(ButtonEmailPhone, {
    email: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email) || '',
    isActive: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.emailConfirmation) || false
  }), /*#__PURE__*/_react["default"].createElement(ButtonEmailPhone, {
    email: currentUser !== null && currentUser !== void 0 && currentUser.phone ? (0, _helpers.formatPhoneNumber)(currentUser.phone) : '',
    isActive: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.phoneConfirmation) || false
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Rol',
      type: 'text',
      readOnly: true,
      defaultValue: currentUser === null || currentUser === void 0 ? void 0 : currentUser.roles.name
    },
    styles: {
      width: '100%'
    }
  }, nameInputProps)))))));
};