"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentInfoForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Li = require("../Li");
var PaymentInfoForm = exports.PaymentInfoForm = function PaymentInfoForm(_ref) {
  var type = _ref.type,
    postsId = _ref.postsId,
    total = _ref.total,
    totalMethodsPayment = _ref.totalMethodsPayment,
    difference = _ref.difference;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerHeaderInfo, null, /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "tipo: ",
    info: type
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Numero(s): ",
    info: postsId
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Pago Total: ",
    info: total
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Pagos agregados: ",
    info: totalMethodsPayment
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Diferencia: ",
    info: difference
  })));
};