"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentLoginForm = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Abstract = require("../../Abstract");
var _constants = require("../../constants");
var _templateObject, _templateObject2, _templateObject3;
var defaultTitleContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 22px;\n  margin-bottom: 30px;\n"])));
var defaultNameContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 95%;\n  margin: 0 auto;\n"])));
var defaultActionButtonContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  width: 95%;\n  margin-bottom: 0px;\n  justify-content: flex-end;\n  margin-top: 22px;\n  width: 85%;\n"])));
var PaymentLoginForm = exports.PaymentLoginForm = function PaymentLoginForm(_ref) {
  var validationButtonNext = _ref.validationButtonNext,
    validationAuthorizedLogin = _ref.validationAuthorizedLogin,
    validationAuthorizedPassword = _ref.validationAuthorizedPassword,
    authorizedLogin = _ref.authorizedLogin,
    authorizedPassword = _ref.authorizedPassword,
    changeAuthorizedLogin = _ref.changeAuthorizedLogin,
    changeAuthorizedPassword = _ref.changeAuthorizedPassword,
    inputId = _ref.inputId,
    add = _ref.add;
  _react["default"].useEffect(function () {
    validationButtonNext();
    validationAuthorizedLogin(authorizedLogin);
    validationAuthorizedPassword(authorizedPassword);
  }, [authorizedLogin, authorizedPassword]);
  var next = function next() {
    if (validationButtonNext()) {
      add();
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Abstract.Box1, {
    styles: {
      width: 'auto',
      height: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultTitleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.Title1, {
    title: "Autorizaci\xF3n"
  }), /*#__PURE__*/_react["default"].createElement(_Abstract.Title2, {
    title: "Use sus credenciales para autorizar esta operaci\xF3n.",
    styles: {
      textTransform: 'none'
    }
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultNameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.InputUserName, {
    changeUserName: changeAuthorizedLogin,
    props: {
      styles: {
        width: '100%'
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultNameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.InputPassword, {
    changePassword: changeAuthorizedPassword,
    props: {
      styles: {
        width: '100%'
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultActionButtonContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.Button, {
    title: "Autorizar",
    buttonProps: {
      onClick: function onClick() {
        return next();
      },
      id: "".concat(_constants.BUTTON_NEXT_INPUT).concat(inputId)
    }
  })))));
};