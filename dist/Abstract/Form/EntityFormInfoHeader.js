"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityFormInfoHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Button = require("../Button");
var _Li = require("../Li");
var EntityFormInfoHeader = exports.EntityFormInfoHeader = function EntityFormInfoHeader(_ref) {
  var _useOrder$attributes$, _useOrder$attributes$2, _useOrder$attributes$3, _useOrder$attributes$4;
  var useOrder = _ref.useOrder;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerHeaderInfo, null, /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Nombre: ",
    info: "".concat((_useOrder$attributes$ = useOrder.attributes.states.entity) === null || _useOrder$attributes$ === void 0 ? void 0 : _useOrder$attributes$.name, " ").concat(((_useOrder$attributes$2 = useOrder.attributes.states.entity) === null || _useOrder$attributes$2 === void 0 ? void 0 : _useOrder$attributes$2.lastName) || '')
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Direcci\xF3n: ",
    info: ((_useOrder$attributes$3 = useOrder.attributes.states.entity) === null || _useOrder$attributes$3 === void 0 ? void 0 : _useOrder$attributes$3.address[0].address1) || ''
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Tel\xE9fono: ",
    info: ((_useOrder$attributes$4 = useOrder.attributes.states.entity) === null || _useOrder$attributes$4 === void 0 ? void 0 : _useOrder$attributes$4.phone) || ''
  }), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      custom: 'margin-top: 30px;'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Cambiar cliente",
    buttonProps: {
      onClick: function onClick() {
        return useOrder.pages.actions.returnInit();
      }
    },
    styles: {
      fontSize: '12px',
      backgroundColor: '#c12429'
    }
  }))));
};