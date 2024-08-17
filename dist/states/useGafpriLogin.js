"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriLogin = useGafpriLogin;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("../helpers");
var _Context = require("../Context");
var _constants = require("../constants");
var _Validations = require("../Validations");
var _Changes = require("../Changes");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function useGafpriLogin(_ref) {
  var onFetching = _ref.onFetching,
    onInit = _ref.onInit,
    globalResetInfo = _ref.globalResetInfo;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isLogin = _useState2[0],
    setIsLogin = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    userName = _useState4[0],
    setUserName = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    userNameValid = _useState6[0],
    setUserNameValid = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    password = _useState8[0],
    setPassword = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    passwordValid = _useState10[0],
    setPasswordValid = _useState10[1];
  var _useState11 = (0, _react.useState)((0, _Context.getItem)(_constants.TOKEN_STORAGE, null)),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    token = _useState12[0],
    setToken = _useState12[1];
  var _useState13 = (0, _react.useState)((0, _Context.getItem)(_constants.CURRENT_USER_STORAGE, null)),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    currentUser = _useState14[0],
    setCurrentUser = _useState14[1];

  // Funciones de Validacion
  var validationUserName = function validationUserName(value) {
    return (0, _Validations.generalValidationUserName)({
      value: value,
      setValid: setUserNameValid,
      currentValid: userNameValid
    });
  };
  var validationPassword = function validationPassword(value) {
    return (0, _Validations.generalValidationSinglePassword)({
      value: value,
      setValid: setPasswordValid,
      currentValid: passwordValid
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [userNameValid, passwordValid]
    });
  };

  // Funciones de cambios
  var changeUserName = function changeUserName(value) {
    (0, _Changes.generalChangeUserName)({
      value: value,
      validation: validationUserName,
      setValue: setUserName
    });
  };
  var changePassword = function changePassword(value) {
    (0, _Changes.generalChangePassword)({
      value: value,
      validation: validationPassword,
      setValue: setPassword
    });
  };
  var changeToken = function changeToken(value) {
    setToken(value);
    (0, _Context.saveItem)(_constants.TOKEN_STORAGE, value);
  };
  var changeCurrentUser = function changeCurrentUser(value) {
    setCurrentUser(value);
    (0, _Context.saveItem)(_constants.CURRENT_USER_STORAGE, value);
  };
  var resetInfo = function resetInfo() {
    changeUserName('');
    changePassword('');
  };

  /**
   * Actions
   *
   *
   */

  var onLoginSuccess = function onLoginSuccess(data) {
    if (data && data.user && data.token) {
      changeToken(data.token);
      changeCurrentUser(data.user);
      setIsLogin(true);
      onInit();
      resetInfo();
    }
  };
  var logout = function logout() {
    setIsLogin(false);
    changeToken(null);
    changeCurrentUser(null);
    globalResetInfo();
    onInit();
  };
  var login = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (userNameValid && passwordValid) {
              (0, _helpers.gafpriFetch)({
                initMethod: 'POST',
                initRoute: _constants.LOGIN_ROUTE,
                initCredentials: {
                  userName: userName,
                  password: password
                },
                functionFetching: onFetching,
                functionSuccess: onLoginSuccess,
                functionError: logout
              });
            }
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function login() {
      return _ref2.apply(this, arguments);
    };
  }();
  var checkLoginToken = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (token) {
              (0, _helpers.gafpriFetch)({
                initMethod: 'GET',
                initRoute: _constants.LOGIN_TOKEN_ROUTE,
                initToken: {
                  token: token
                },
                functionFetching: onFetching,
                functionSuccess: onLoginSuccess,
                functionError: logout
              });
            }
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function checkLoginToken() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Effects
   *
   *
   */

  _react["default"].useEffect(function () {
    if (token && currentUser) {
      checkLoginToken();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  var states = {
    isLogin: isLogin,
    userName: userName,
    userNameValid: userNameValid,
    password: password,
    passwordValid: passwordValid,
    token: token,
    currentUser: currentUser
  };
  var actions = {
    validationUserName: validationUserName,
    validationPassword: validationPassword,
    validationButtonNext: validationButtonNext,
    changeUserName: changeUserName,
    changePassword: changePassword,
    login: login,
    logout: logout
  };
  return {
    states: states,
    actions: actions
  };
}