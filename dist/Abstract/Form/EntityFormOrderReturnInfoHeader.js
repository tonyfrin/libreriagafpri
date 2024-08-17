"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityFormOrderReturnInfoHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Button = require("../Button");
var _Li = require("../Li");
var EntityFormOrderReturnInfoHeader = exports.EntityFormOrderReturnInfoHeader = function EntityFormOrderReturnInfoHeader(_ref) {
  var _useOrderReturn$attri, _useOrderReturn$attri2, _useOrderReturn$attri3, _useOrderReturn$attri4;
  var useOrderReturn = _ref.useOrderReturn;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerHeaderInfo, null, /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Pedido #: ",
    info: "".concat(useOrderReturn.attributes.states.orderPostsId || '')
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Nombre: ",
    info: "".concat((_useOrderReturn$attri = useOrderReturn.attributes.states.entity) === null || _useOrderReturn$attri === void 0 ? void 0 : _useOrderReturn$attri.name, " ").concat(((_useOrderReturn$attri2 = useOrderReturn.attributes.states.entity) === null || _useOrderReturn$attri2 === void 0 ? void 0 : _useOrderReturn$attri2.lastName) || '')
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Direcci\xF3n: ",
    info: ((_useOrderReturn$attri3 = useOrderReturn.attributes.states.entity) === null || _useOrderReturn$attri3 === void 0 ? void 0 : _useOrderReturn$attri3.address[0].address1) || ''
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Tel\xE9fono: ",
    info: ((_useOrderReturn$attri4 = useOrderReturn.attributes.states.entity) === null || _useOrderReturn$attri4 === void 0 ? void 0 : _useOrderReturn$attri4.phone) || ''
  }), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      custom: 'margin-top: 30px;'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Cambiar pedido",
    buttonProps: {
      onClick: function onClick() {
        return useOrderReturn.pages.actions.returnInit();
      }
    },
    styles: {
      fontSize: '12px',
      backgroundColor: '#c12429'
    }
  }))));
};