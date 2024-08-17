"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FadeIn = void 0;
var _react = _interopRequireDefault(require("react"));
var FadeIn = exports.FadeIn = function FadeIn(_ref) {
  var keyName = _ref.keyName,
    children = _ref.children,
    isVisible = _ref.isVisible;
  var getOpacity = function getOpacity() {
    if (isVisible) {
      return 1;
    }
    return 0;
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
    key: keyName
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fade-in",
    style: {
      opacity: getOpacity(),
      transition: 'opacity 0.5s'
    }
  }, children));
};