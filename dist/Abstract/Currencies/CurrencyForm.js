"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrencyForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Form = require("../Form");
var _Input = require("../Input");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CurrencyForm = exports.CurrencyForm = function CurrencyForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType,
    modelFormProps = _ref.modelFormProps,
    infoContainerProps = _ref.infoContainerProps,
    nameInputProps = _ref.nameInputProps,
    symbolInputProps = _ref.symbolInputProps;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var currentCurrency = isUpdateForm ? use.actions.getById(use.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.actions.validationName(use.states.name);
    use.actions.validationSymbol(use.states.symbol);
    use.actions.validationButtonNext();
  }, [use.states.name, use.states.symbol]);
  _react["default"].useEffect(function () {
    use.actions.validationButtonNext();
  }, [use.states.nameValid, use.states.symbolValid]);
  _react["default"].useEffect(function () {
    if (currentCurrency) {
      use.actions.changeName(currentCurrency.name);
      use.actions.changeSymbol(currentCurrency.symbol);
    }
  }, []);
  var title1Text = isAddForm ? 'Nueva Moneda' : 'Actualizar Moneda';
  var title2Text = isAddForm ? 'Agrega un nuevo tipo de Moneda' : "Actualiza la informaci\xF3n de la moneda #".concat(currentCurrency === null || currentCurrency === void 0 ? void 0 : currentCurrency.id);
  var buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  var buttonAction = isAddForm ? use.actions.addCurrencies : use.actions.updateCurrency;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.actions.returnInit();
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
    error: use.states.error
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.actions.changeName,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.name
      },
      styles: {
        width: '85%'
      }
    }, nameInputProps)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputCurrenciesSymbol, {
    changeSymbol: use.actions.changeSymbol,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.symbol
      },
      styles: {
        width: '85%'
      }
    }, symbolInputProps)
  })))));
};