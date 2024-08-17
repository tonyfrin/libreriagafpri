"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputTags = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _constants = require("../../constants");
var _Input = require("./Input");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var InputTags = exports.InputTags = function InputTags(_ref) {
  var change = _ref.change,
    props = _ref.props,
    setSelected = _ref.setSelected;
  var handleKeyDown = function handleKeyDown(event) {
    setSelected(event.currentTarget.value);
    if (event.key === 'Enter') {
      // Realiza la acción que desees al presionar Enter
      change(event.currentTarget.value);
      setSelected('');
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    styles: props === null || props === void 0 ? void 0 : props.styles,
    inputProps: _objectSpread({
      placeholder: 'Etiquetas',
      type: 'text',
      id: _constants.TAGS_INPUT,
      title: 'Etiquetas',
      onKeyUp: function onKeyUp(event) {
        return handleKeyDown(event);
      },
      onChange: function onChange(event) {
        return setSelected(event.currentTarget.value);
      }
    }, props === null || props === void 0 ? void 0 : props.inputProps),
    inputClass: props === null || props === void 0 ? void 0 : props.inputClass,
    containerStyles: props === null || props === void 0 ? void 0 : props.containerStyles,
    containerClass: props === null || props === void 0 ? void 0 : props.containerClass
  }));
};