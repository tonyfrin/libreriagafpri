"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Abstract = require("../../Abstract");
var _templateObject, _templateObject2, _templateObject3;
var defaultTitleContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 22px;\n  margin-bottom: 30px;\n"])));
var defaultNameContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 95%;\n  margin: 0 auto;\n"])));
var defaultActionButtonContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  width: 95%;\n  margin-bottom: 0px;\n  justify-content: flex-end;\n  margin-top: 22px;\n  width: 85%;\n"])));
var LoginForm = exports.LoginForm = function LoginForm(_ref) {
  var use = _ref.use,
    _ref$titleContainerSt = _ref.titleContainerStyle,
    titleContainerStyle = _ref$titleContainerSt === void 0 ? defaultTitleContainerStyle : _ref$titleContainerSt,
    _ref$nameContainerSty = _ref.nameContainerStyle,
    nameContainerStyle = _ref$nameContainerSty === void 0 ? defaultNameContainerStyle : _ref$nameContainerSty,
    _ref$actionButtonCont = _ref.actionButtonContainerStyle,
    actionButtonContainerStyle = _ref$actionButtonCont === void 0 ? defaultActionButtonContainerStyle : _ref$actionButtonCont,
    imageLogin = _ref.imageLogin;
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault(); // Evitar que el formulario se ejecute
    use.actions.login();
  };
  _react["default"].useEffect(function () {
    use.actions.validationButtonNext();
    use.actions.validationUserName(use.states.userName);
    use.actions.validationPassword(use.states.password);
  }, [use.states.userName, use.states.password, use.states.passwordValid, use.states.userNameValid]);
  return /*#__PURE__*/_react["default"].createElement(_Abstract.Background1, {
    image: imageLogin,
    customStyles: " display: flex; justify-content: center; align-items: center; "
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.Box1, {
    styles: {
      width: 'auto',
      height: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(titleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.Title1, {
    title: "Login"
  }), /*#__PURE__*/_react["default"].createElement(_Abstract.Title2, {
    title: "Use sus credenciales para acceder a su cuenta.",
    styles: {
      textTransform: 'none'
    }
  })), /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(nameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.InputUserName, {
    changeUserName: use.actions.changeUserName,
    props: {
      styles: {
        width: '100%'
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(nameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.InputPassword, {
    changePassword: use.actions.changePassword,
    props: {
      styles: {
        width: '100%'
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(actionButtonContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.ButtonNext, {
    title: "Ingresar"
  }))))));
};