"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MethodsPaymentTable = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Title = require("../Title");
var _helpers = require("../../helpers");
var _Button = require("../Button");
var _SingleTable = require("./SingleTable");
var _excluded = ["className"];
var _templateObject, _templateObject2;
var methodsPaymentTableContainerStyle = function methodsPaymentTableContainerStyle(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  background-color: ", ";\n  padding: ", ";\n  margin: ", ";\n  border-radius: ", ";\n  height: ", ";\n  ", "\n"])), styles.width || '45%', styles.backgroundColor || '#fff', styles.padding || '10px 20px', styles.margin || '0px 20px', styles.borderRadius || '10px', styles.height || 'auto', styles.custom || '');
};
var methodsPaymentTableTdStyle = function methodsPaymentTableTdStyle(width, custom) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  border: 1px solid #ddd;\n  padding: 4px;\n  text-align: center;\n  ", "\n"])), width, custom || '');
};
var MethodsPaymentTable = exports.MethodsPaymentTable = function MethodsPaymentTable(_ref) {
  var siteOptions = _ref.siteOptions,
    methods = _ref.methods,
    title = _ref.title,
    total = _ref.total,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var items = methods.map(function (item) {
    return [/*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(methodsPaymentTableTdStyle('50%', "text-align: start;"))
    }, item.title || ''), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(methodsPaymentTableTdStyle('25%', "text-align: end;"))
    }, (0, _helpers.decimalFormatPriceConverter)(item.amount || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL || '', siteOptions.CURRENCY_LOCATION)), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(methodsPaymentTableTdStyle('25%', "text-align: center;"))
    }, item.remove && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      title: "X",
      styles: {
        fontSize: '8px',
        backgroundColor: '#c12429',
        padding: '3px 6px'
      },
      buttonProps: {
        onClick: item.remove
      }
    }))];
  });
  items.push([/*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(methodsPaymentTableTdStyle('50%', "\n      text-align: end;\n      font-weight: 700;\n    "))
  }, "Total"), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(methodsPaymentTableTdStyle('25%', "\n    text-align: end;\n    font-weight: 700;\n  "))
  }, (0, _helpers.decimalFormatPriceConverter)(total || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL || '', siteOptions.CURRENCY_LOCATION)), /*#__PURE__*/_react["default"].createElement("td", {
    className: (0, _css.cx)(methodsPaymentTableTdStyle('25%', "\n      text-align: end;\n      font-weight: 700;\n    "))
  })]);
  var header = ['Metodo de Pago', 'Monto', 'Acción'];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(methodsPaymentTableContainerStyle(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement(_Title.Title2, {
    title: title,
    styles: {
      fontSize: '0.9rem',
      margin: '0px',
      fontWeight: '700'
    }
  }), /*#__PURE__*/_react["default"].createElement(_SingleTable.SingleTable, {
    headers: header,
    data: items,
    containerStyles: {
      minHeight: 'none',
      custom: "\n                    padding: 10px;\n                  "
    }
  })));
};