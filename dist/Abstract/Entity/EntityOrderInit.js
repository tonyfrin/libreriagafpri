"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityOrderInit = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Menu = require("../Menu");
var _Form = require("../Form");
var _excluded = ["className"];
var _templateObject;
var entityOrderInitStylesContainer = function entityOrderInitStylesContainer(stayles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: ", ";\n  margin: ", ";\n  ", "\n"])), stayles.maxWidht || '900px', stayles.margin || 'auto', stayles.custom || '');
};
var EntityOrderInit = exports.EntityOrderInit = function EntityOrderInit(_ref) {
  var _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    useEntity = _ref.useEntity,
    useOrder = _ref.useOrder,
    menu = _ref.menu;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        break;
      case 'return':
        useOrder.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(entityOrderInitStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, {
    titles: {
      title1: 'Modulo de ventas',
      title2: 'agregar cliente'
    },
    buttonTitles: {
      mainButton: '',
      returnButton: 'regresar'
    },
    handleActions: handleActions,
    error: useEntity.error.states.error,
    boxProps: {
      styles: {
        height: '100%',
        padding: '40px 40px 0 40px'
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_Menu.MainMenu, {
    items: menu
  }))));
};