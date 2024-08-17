"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderReturnInitForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Box = require("../Box");
var _Button = require("../Button");
var _Containers = require("../Containers");
var _Input = require("../Input");
var _Error = require("../Error");
var _excluded = ["className"];
var _templateObject;
var orderReturnInitFormStaylesContainer = function orderReturnInitFormStaylesContainer(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  padding-bottom: ", ";\n  ", "\n"])), styles.color || '#616e7d', styles.fontSize || '12px', styles.paddingBottom || '40px', styles.custom || '');
};
var OrderReturnInitForm = exports.OrderReturnInitForm = function OrderReturnInitForm(_ref) {
  var _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    use = _ref.use,
    returnModule = _ref.returnModule;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === 'Enter') {
      use.pages.actions.goSales();
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(orderReturnInitFormStaylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement(_Error.Error, {
    error: use.error.states.error
  }), /*#__PURE__*/_react["default"].createElement(_Box.SearchBox, {
    title1Props: {
      title: 'Modulo de devolución de pedidos'
    },
    title2Props: {
      title: ''
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    styles: {
      width: '100%'
    },
    inputProps: {
      title: 'Cargar Pedido',
      placeholder: 'Ingrese el numero de pedido',
      onKeyPress: handleKeyPress,
      type: 'text',
      onChange: function onChange(e) {
        return use.attributes.actions.setOrderPostsId(parseInt(e.target.value, 10));
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      justifyContent: 'flex-start',
      custom: "\n                  margin-top: 30px;"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "regresar",
    buttonProps: {
      onClick: function onClick() {
        return returnModule();
      }
    },
    styles: {
      backgroundColor: '#c12429'
    }
  }))))));
};