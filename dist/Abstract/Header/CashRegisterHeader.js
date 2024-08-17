"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CashRegisterHeader = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Box = require("../Box");
var _Title = require("../Title");
var _Error = require("../Error");
var _Containers = require("../Containers");
var _Span = require("../Span");
var _helpers = require("../../helpers");
var _templateObject, _templateObject2;
var cashRegisterContainerStyle = function cashRegisterContainerStyle() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n"])));
};
var defaultTitleContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 10px;\n"])));
var CashRegisterHeader = exports.CashRegisterHeader = function CashRegisterHeader(_ref) {
  var error = _ref.error,
    crName = _ref.crName,
    cashRegisterPostId = _ref.cashRegisterPostId,
    dateOpen = _ref.dateOpen,
    author = _ref.author;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(cashRegisterContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box1, {
    styles: {
      width: '90%',
      margin: '0',
      padding: '10px 40px',
      borderRadius: '10px',
      height: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultTitleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Title.Title1, {
    title: "Control de caja #: ".concat(cashRegisterPostId),
    styles: {
      fontSize: '1.2rem',
      lineHeight: '1.2rem'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Title.Title2, {
    title: crName,
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
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      custom: "\n                            margin: 20px 0px;\n                            padding-left: 5%;\n                            "
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    value: "fecha de apertura:",
    containerStyles: {
      margin: '0px 15px 0px 0px',
      custom: "\n                                    font-weight: 700;\n                                    font-size: 0.8em;\n                                    "
    }
  }), /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    containerStyles: {
      margin: '0',
      custom: "\n                                    font-weight: 300;\n                                    font-size: 0.8em;\n                                    "
    },
    value: (0, _helpers.formatDate)(dateOpen)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      custom: "\n                            margin: 20px 0px;\n                            padding-left: 5%;\n                            "
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    value: "Autorizado: ",
    containerStyles: {
      margin: '0px 15px 0px 0px',
      custom: "\n                                    font-weight: 700;\n                                    font-size: 0.8em;\n                                    "
    }
  }), /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    containerStyles: {
      margin: '0',
      custom: "\n                                    font-weight: 300;\n                                    font-size: 0.8em;\n                                    "
    },
    value: author
  }))))), /*#__PURE__*/_react["default"].createElement(_Error.Error, {
    error: error
  }))));
};