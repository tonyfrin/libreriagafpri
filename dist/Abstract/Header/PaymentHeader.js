"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentHeader = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Box = require("../Box");
var _Title = require("../Title");
var _Error = require("../Error");
var _Containers = require("../Containers");
var _Button = require("../Button");
var _Circle = require("../Circle");
var _excluded = ["className"],
  _excluded2 = ["className"];
var _templateObject, _templateObject2;
var paymentHeaderContainerStyle = function paymentHeaderContainerStyle(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  justify-content: ", ";\n  ", "\n"])), styles.display || 'flex', styles.justifyContent || 'center', styles.custom);
};
var paymentHeaderContentStyle = function paymentHeaderContentStyle(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: ", ";\n  ", "\n"])), styles.marginTop || '10px', styles.custom);
};
var PaymentHeader = exports.PaymentHeader = function PaymentHeader(_ref) {
  var error = _ref.error,
    stepName = _ref.stepName,
    step = _ref.step,
    moduleName = _ref.moduleName,
    returnFunction = _ref.returnFunction,
    returnTitle = _ref.returnTitle,
    nextTitle = _ref.nextTitle,
    nextFunction = _ref.nextFunction,
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
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(paymentHeaderContainerStyle(containerStyle), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement(_Box.Box1, {
    styles: {
      width: '90%',
      margin: '0',
      padding: '10px 40px',
      borderRadius: '10px',
      height: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(paymentHeaderContentStyle(contentStyle), contentClassName)
  }, restContentProps), /*#__PURE__*/_react["default"].createElement(_Title.Title1, {
    title: moduleName,
    styles: {
      fontSize: '1.2rem',
      lineHeight: '1.2rem'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Title.Title2, {
    title: stepName,
    styles: {
      fontSize: '1rem',
      margin: '0'
    }
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Circle.CircleStep, {
    step: step
  }), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      custom: "\n                                margin: 20px 0px;\n                                padding-left: 5%;\n                                "
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      custom: "\n                                        margin: auto;\n                                    "
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, returnTitle && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: returnTitle,
    buttonProps: {
      onClick: returnFunction
    },
    styles: {
      backgroundColor: '#c12429'
    }
  }), nextTitle && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: nextTitle,
    buttonProps: {
      onClick: nextFunction
    }
  }))))))), /*#__PURE__*/_react["default"].createElement(_Error.Error, {
    error: error
  }))));
};