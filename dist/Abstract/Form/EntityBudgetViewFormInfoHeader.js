"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityBudgetViewFormInfoHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Li = require("../Li");
var _Button = require("../Button");
var EntityBudgetViewFormInfoHeader = exports.EntityBudgetViewFormInfoHeader = function EntityBudgetViewFormInfoHeader(_ref) {
  var _budget$budgetCustome;
  var budget = _ref.budget,
    useBudget = _ref.useBudget;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerHeaderInfo, null, /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: budget.budgetCustomer[0].documentType || '',
    info: "".concat(budget.budgetCustomer[0].documentIndex ? "".concat(budget.budgetCustomer[0].documentIndex, "-") : '').concat(budget.budgetCustomer[0].documentDigit)
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Nombre: ",
    info: "".concat(budget.budgetCustomer[0].name, " ").concat(((_budget$budgetCustome = budget.budgetCustomer[0]) === null || _budget$budgetCustome === void 0 ? void 0 : _budget$budgetCustome.lastName) || '')
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Direcci\xF3n: ",
    info: budget.budgetCustomer[0].address[0].address1 || ''
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Tel\xE9fono: ",
    info: budget.budgetCustomer[0].phone || ''
  }), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      custom: 'margin-top: 30px;'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Regresar",
    buttonProps: {
      onClick: function onClick() {
        return useBudget.pages.actions.onPrintTable();
      }
    },
    styles: {
      fontSize: '12px',
      backgroundColor: '#c12429'
    }
  })))));
};