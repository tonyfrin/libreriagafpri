"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
var _css = require("@emotion/css");
var _Button = require("../Button");
var _templateObject, _templateObject2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: 2em 0px;\n"])));
var defaultTextStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 300;\n  font-size: 0.875rem;\n  color: rgb(38, 35, 33);\n  line-height: 1.25rem;\n  flex-shrink: 0;\n  margin: auto 0px;\n"])));
var defaultInactiveButtonStyle = {
  backgroundColor: '#CCCCCC',
  cursor: 'not-allowed'
};
var defaultButtonStyle = {
  padding: '0.4em 0.6em 0.2em 0.6em',
  borderRadius: '100%'
};
var Pagination = exports.Pagination = function Pagination(_ref) {
  var currentPage = _ref.currentPage,
    setCurrentPage = _ref.setCurrentPage,
    totalPages = _ref.totalPages,
    _ref$mainContainerSty = _ref.mainContainerStyle,
    mainContainerStyle = _ref$mainContainerSty === void 0 ? defaultMainContainerStyle : _ref$mainContainerSty,
    _ref$buttonStyle = _ref.buttonStyle,
    buttonStyle = _ref$buttonStyle === void 0 ? defaultButtonStyle : _ref$buttonStyle,
    _ref$inactiveButtonSt = _ref.inactiveButtonStyle,
    inactiveButtonStyle = _ref$inactiveButtonSt === void 0 ? defaultInactiveButtonStyle : _ref$inactiveButtonSt,
    _ref$textStyle = _ref.textStyle,
    textStyle = _ref$textStyle === void 0 ? defaultTextStyle : _ref$textStyle;
  var hasPreviousPage = currentPage > 1;
  var hasNextPage = currentPage < totalPages;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(mainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: /*#__PURE__*/_react["default"].createElement(_fa.FaArrowLeft, null),
    styles: _objectSpread(_objectSpread({}, buttonStyle), hasPreviousPage ? {} : inactiveButtonStyle),
    buttonProps: {
      onClick: function onClick() {
        if (hasPreviousPage) {
          setCurrentPage(currentPage - 1);
        }
      },
      disabled: !hasPreviousPage
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.css)(textStyle)
  }, "P\xE1gina ", currentPage, " de ", totalPages), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: /*#__PURE__*/_react["default"].createElement(_fa.FaArrowRight, null),
    styles: _objectSpread(_objectSpread({}, buttonStyle), hasNextPage ? {} : inactiveButtonStyle),
    buttonProps: {
      onClick: function onClick() {
        if (hasNextPage) {
          setCurrentPage(currentPage + 1);
        }
      },
      disabled: !hasNextPage
    }
  }));
};