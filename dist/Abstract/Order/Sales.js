"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sales = void 0;
var _react = _interopRequireDefault(require("react"));
var _Form = require("../Form");
var _Header = require("../Header");
var _Sections = require("../Sections");
var Sales = exports.Sales = function Sales(_ref) {
  var useOrder = _ref.useOrder,
    sitesOptions = _ref.sitesOptions,
    useProducts = _ref.useProducts,
    uploadOrder = _ref.uploadOrder;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, {
    titles: {
      title1: 'Modulo de ventas',
      title2: 'elegir productos'
    },
    handleActions: function handleActions() {
      return console.log('handleActions');
    },
    buttonTitles: {
      mainButton: '',
      returnButton: ''
    },
    error: useOrder.error.states.error,
    boxProps: {
      styles: {
        height: '100%',
        padding: '10px'
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.ModuleHeader, null, /*#__PURE__*/_react["default"].createElement(_Form.EntityFormInfoHeader, {
    useOrder: useOrder
  }), /*#__PURE__*/_react["default"].createElement(_Form.OrderFormInfoHeader, {
    useOrder: useOrder,
    siteOptions: sitesOptions
  })))), /*#__PURE__*/_react["default"].createElement(_Sections.CartSections, {
    useOrder: useOrder,
    sitesOptions: sitesOptions,
    useProducts: useProducts,
    uploadOrder: uploadOrder
  }));
};