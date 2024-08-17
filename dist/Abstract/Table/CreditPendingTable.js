"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreditPendingTable = void 0;
var _react = _interopRequireDefault(require("react"));
var _Li = require("../Li");
var CreditPendingTable = exports.CreditPendingTable = function CreditPendingTable(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/_react["default"].createElement("div", null, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_Li.CreditHeaderLine, {
      col1: item.col1,
      col2: item.col2,
      col3: item.col3,
      col4: item.col4
    }));
  }));
};