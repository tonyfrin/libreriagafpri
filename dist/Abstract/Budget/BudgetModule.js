"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetModule = void 0;
var _react = _interopRequireDefault(require("react"));
var _Form = require("../Form");
var _Header = require("../Header");
var _Sections = require("../Sections");
var BudgetModule = exports.BudgetModule = function BudgetModule(_ref) {
  var useBudget = _ref.useBudget,
    sitesOptions = _ref.sitesOptions,
    useProducts = _ref.useProducts,
    uploadBudget = _ref.uploadBudget;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, {
    titles: {
      title1: 'Modulo de presupuestos',
      title2: 'elegir productos'
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
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.ModuleHeader, null, /*#__PURE__*/_react["default"].createElement(_Form.EntityBudgetFormInfoHeader, {
    useBudget: useBudget
  }), /*#__PURE__*/_react["default"].createElement(_Form.BudgetFormInfoHeader, {
    useBudget: useBudget,
    siteOptions: sitesOptions
  })))), /*#__PURE__*/_react["default"].createElement(_Sections.CartBudgetSections, {
    useBudget: useBudget,
    sitesOptions: sitesOptions,
    useProducts: useProducts,
    uploadBudget: uploadBudget
  }));
};