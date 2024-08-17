"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonsPaymentMethodsForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Button = require("../Button");
var _Containers = require("../Containers");
var _Title = require("../Title");
var _Input = require("../Input");
var _excluded = ["className"],
  _excluded2 = ["className"];
var _templateObject, _templateObject2;
var buttonsPaymentMethodsContainerStyle = function buttonsPaymentMethodsContainerStyle(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  justify-content: ", ";\n  ", "\n"])), styles.display || 'flex', styles.justifyContent || 'center', styles.custom);
};
var buttonsPaymentMethodsContentStyle = function buttonsPaymentMethodsContentStyle(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  flex-flow: ", ";\n  justify-content: ", ";\n  ", "\n"])), styles.display || 'flex', styles.flexFlow || 'wrap', styles.justifyContent || 'space-around', styles.custom);
};
var ButtonsPaymentMethodsForm = exports.ButtonsPaymentMethodsForm = function ButtonsPaymentMethodsForm(_ref) {
  var buttonsDeposit = _ref.buttonsDeposit,
    buttonsDebit = _ref.buttonsDebit,
    total = _ref.total,
    depositTotal = _ref.depositTotal,
    debitTotal = _ref.debitTotal,
    setNote = _ref.setNote,
    add = _ref.add,
    _ref$containerStyle = _ref.containerStyle,
    containerStyle = _ref$containerStyle === void 0 ? {} : _ref$containerStyle,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    _ref$contentStyle = _ref.contentStyle,
    contentStyle = _ref$contentStyle === void 0 ? {} : _ref$contentStyle,
    _ref$contentProps = _ref.contentProps,
    contentProps = _ref$contentProps === void 0 ? {} : _ref$contentProps;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var contentClassName = contentProps.className,
    restContentProps = (0, _objectWithoutProperties2["default"])(contentProps, _excluded2);
  var title;
  if (total > depositTotal - debitTotal) {
    title = 'Agregar pagos';
  } else if (total === depositTotal - debitTotal) {
    title = 'Emitir pago';
  } else {
    title = 'Agregar vuelto';
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerHeaderInfo, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(buttonsPaymentMethodsContainerStyle(containerStyle), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement(_Title.Title2, {
    title: title
  })), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(buttonsPaymentMethodsContentStyle(contentStyle), contentClassName)
  }, restContentProps), total > depositTotal - debitTotal && buttonsDeposit && buttonsDeposit.map(function (button, index) {
    return /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      key: "".concat(button.title).concat(index),
      title: button.title,
      styles: {
        backgroundColor: 'rgb(50, 67, 117)',
        fontSize: '8px',
        margin: '10px'
      },
      buttonProps: {
        onClick: button.action
      }
    });
  }), total < depositTotal - debitTotal && buttonsDebit && buttonsDebit.map(function (button, index) {
    return /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      key: "".concat(button.title).concat(index),
      title: button.title,
      styles: {
        backgroundColor: 'rgb(50, 67, 117)',
        fontSize: '8px',
        margin: '10px'
      },
      buttonProps: {
        onClick: button.action
      }
    });
  }), total === depositTotal - debitTotal && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      display: 'block',
      width: '90%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      title: 'Nota interna del pago',
      type: 'text',
      onChange: function onChange(e) {
        return setNote(e.target.value);
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Procesar",
    buttonProps: {
      onClick: function onClick() {
        return add();
      }
    }
  })))))));
};