"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitBank = void 0;
var _react = _interopRequireDefault(require("react"));
var _Form = require("../Form");
var _Containers = require("../Containers");
var _Input = require("../Input");
var InitBank = exports.InitBank = function InitBank(_ref) {
  var use = _ref.use,
    siteOptions = _ref.siteOptions,
    returnModule = _ref.returnModule;
  var title1Text = 'Modulo de Banco';
  var title2Text = 'Elije una opción para comenzar';
  var options = use.data.actions.getOptionsItems(siteOptions.id);
  var next = function next(value) {
    if (!(value !== null && value !== void 0 && value.value)) return;
    use.pages.actions.goPortal(parseInt(value.value, 10));
  };
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        break;
      case 'return':
        returnModule();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, {
    titles: {
      title1: title1Text,
      title2: title2Text
    },
    buttonTitles: {
      mainButton: '',
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: use.error.states.error,
    boxProps: {
      styles: {
        width: '70%',
        height: 'auto'
      }
    },
    returnButtonConatinerStyle: "padding: 0px;"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      custom: "\n              margin: 20px 0px;\n              padding-left: 5%;\n            "
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, {
    options: options,
    onChange: function onChange(e) {
      return next(e);
    }
  })))));
};