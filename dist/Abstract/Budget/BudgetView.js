"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetView = void 0;
var _react = _interopRequireDefault(require("react"));
var _Form = require("../Form");
var _Header = require("../Header");
var _Sections = require("../Sections");
var BudgetView = exports.BudgetView = function BudgetView(_ref) {
  var useBudget = _ref.useBudget,
    sitesOptions = _ref.sitesOptions,
    logoPdf = _ref.logoPdf;
  var budget = useBudget.data.actions.getById(useBudget.attributes.states.currentId);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, budget && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, {
    titles: {
      title1: 'Modulo de presupuestos',
      title2: 'Vista de presupuesto'
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
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.ModuleHeader, null, /*#__PURE__*/_react["default"].createElement(_Form.EntityBudgetViewFormInfoHeader, {
    budget: budget,
    useBudget: useBudget
  }), /*#__PURE__*/_react["default"].createElement(_Form.BudgetViewFormInfoHeader, {
    budget: budget,
    siteOptions: sitesOptions,
    logoPdf: logoPdf
  })))), /*#__PURE__*/_react["default"].createElement(_Sections.CartBudgetViewSections, {
    budget: budget,
    sitesOptions: sitesOptions
  })));
};