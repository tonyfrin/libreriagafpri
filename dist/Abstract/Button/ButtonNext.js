"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonNext = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _constants = require("../../constants");
var _Button = require("./Button");
var ButtonNext = exports.ButtonNext = function ButtonNext(_ref) {
  var title = _ref.title,
    props = _ref.props,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
    title: title,
    buttonProps: {
      id: "".concat(_constants.BUTTON_NEXT_INPUT).concat(inputId),
      type: 'submit'
    }
  }, props)));
};