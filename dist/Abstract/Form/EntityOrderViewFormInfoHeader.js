"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityOrderViewFormInfoHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Button = require("../Button");
var _Li = require("../Li");
var EntityOrderViewFormInfoHeader = exports.EntityOrderViewFormInfoHeader = function EntityOrderViewFormInfoHeader(_ref) {
  var _order$orderCustomer$;
  var order = _ref.order,
    returnFunction = _ref.returnFunction;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerHeaderInfo, null, /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Nombre: ",
    info: "".concat(order.orderCustomer[0].name, " ").concat(((_order$orderCustomer$ = order.orderCustomer[0]) === null || _order$orderCustomer$ === void 0 ? void 0 : _order$orderCustomer$.lastName) || '')
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Direcci\xF3n: ",
    info: order.orderCustomer[0].address[0].address1 || ''
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Tel\xE9fono: ",
    info: order.orderCustomer[0].phone || ''
  }), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      custom: 'margin-top: 30px;'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "regresar",
    buttonProps: {
      onClick: function onClick() {
        return returnFunction();
      }
    },
    styles: {
      fontSize: '12px',
      backgroundColor: '#c12429'
    }
  }))));
};