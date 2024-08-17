"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrintButtonBudget = void 0;
var _react = _interopRequireDefault(require("react"));
var _renderer = require("@react-pdf/renderer");
var _Button = require("../Button");
var _BudgetPdf = require("../Pdf/BudgetPdf");
var _Components = require("../../Components");
var PrintButtonBudget = exports.PrintButtonBudget = function PrintButtonBudget(_ref) {
  var budget = _ref.budget,
    siteOptions = _ref.siteOptions,
    logoPdf = _ref.logoPdf;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, budget && /*#__PURE__*/_react["default"].createElement(_renderer.PDFDownloadLink, {
    document: /*#__PURE__*/_react["default"].createElement(_BudgetPdf.BudgetPdf, {
      budget: budget,
      logo: logoPdf,
      siteOptions: siteOptions
    }),
    fileName: "presupuesto".concat(budget.postsId, ".pdf")
  }, function (_ref2) {
    var blob = _ref2.blob,
      url = _ref2.url,
      loading = _ref2.loading,
      error = _ref2.error;
    return loading ? /*#__PURE__*/_react["default"].createElement(_Components.Loading, {
      mainStyles: {
        padding: '0px'
      },
      divStyle: {
        border: '3px solid #eee',
        borderTop: '3px solid #077bb4',
        width: '20px',
        height: '20px'
      }
    }) : /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      title: "Imprimir",
      styles: {
        fontSize: '10px'
      }
    });
  }));
};