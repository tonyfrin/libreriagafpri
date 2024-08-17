"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityBudgetFormInfoHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Button = require("../Button");
var _Li = require("../Li");
var EntityBudgetFormInfoHeader = exports.EntityBudgetFormInfoHeader = function EntityBudgetFormInfoHeader(_ref) {
  var _useBudget$attributes, _useBudget$attributes2, _useBudget$attributes3, _useBudget$attributes4;
  var useBudget = _ref.useBudget;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerHeaderInfo, null, /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Nombre: ",
    info: "".concat((_useBudget$attributes = useBudget.attributes.states.entity) === null || _useBudget$attributes === void 0 ? void 0 : _useBudget$attributes.name, " ").concat(((_useBudget$attributes2 = useBudget.attributes.states.entity) === null || _useBudget$attributes2 === void 0 ? void 0 : _useBudget$attributes2.lastName) || '')
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Direcci\xF3n: ",
    info: ((_useBudget$attributes3 = useBudget.attributes.states.entity) === null || _useBudget$attributes3 === void 0 ? void 0 : _useBudget$attributes3.address[0].address1) || ''
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Tel\xE9fono: ",
    info: ((_useBudget$attributes4 = useBudget.attributes.states.entity) === null || _useBudget$attributes4 === void 0 ? void 0 : _useBudget$attributes4.phone) || ''
  }), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      custom: 'margin-top: 30px;'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Cambiar cliente",
    buttonProps: {
      onClick: function onClick() {
        return useBudget.pages.actions.returnInit();
      }
    },
    styles: {
      fontSize: '12px',
      backgroundColor: '#c12429'
    }
  }))));
};