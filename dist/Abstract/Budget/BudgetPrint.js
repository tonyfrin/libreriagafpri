"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetPrint = void 0;
var _react = _interopRequireDefault(require("react"));
var _Form = require("../Form");
var _BudgetPrintTable = require("../Table/BudgetPrintTable");
var BudgetPrint = exports.BudgetPrint = function BudgetPrint(_ref) {
  var useBudget = _ref.useBudget,
    sitesOptions = _ref.sitesOptions;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, {
    titles: {
      title1: 'Modulo de presupuestos',
      title2: 'imprimir presupuesto'
    },
    handleActions: function handleActions() {
      return console.log('handleActions');
    },
    buttonTitles: {
      mainButton: '',
      returnButton: ''
    },
    error: useBudget.error.states.error,
    boxProps: {
      styles: {
        height: '100%',
        padding: '10px'
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_BudgetPrintTable.BudgetPrintTable, {
    siteOptions: sitesOptions,
    useBudget: useBudget
  }))));
};