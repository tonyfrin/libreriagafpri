"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RolePermissions = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var defaultMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 1rem;\n"])));
var defaultTitleContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  font-size: 1rem;\n  color: rgb(38, 35, 33);\n  display: table-cell;\n  width: auto;\n  padding-bottom: 20px;\n  vertical-align: middle;\n  line-height: 1.25rem;\n"])));
var defaultCheckBoxContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-flex;\n  align-items: center;\n  margin-right: 1rem;\n"])));
var defaultNameStyle = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 0.25rem;\n"])));
var defaultInfoContainerStyle = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 45px;\n"])));
var defaultCheckBoxStyle = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])([""])));
var RolePermissions = exports.RolePermissions = function RolePermissions(_ref) {
  var role = _ref.role,
    onPermissionChange = _ref.onPermissionChange,
    selectedPermissions = _ref.selectedPermissions,
    _ref$mainContainerSty = _ref.mainContainerStyle,
    mainContainerStyle = _ref$mainContainerSty === void 0 ? defaultMainContainerStyle : _ref$mainContainerSty,
    _ref$titleContainerSt = _ref.titleContainerStyle,
    titleContainerStyle = _ref$titleContainerSt === void 0 ? defaultTitleContainerStyle : _ref$titleContainerSt,
    _ref$infoContainerSty = _ref.infoContainerStyle,
    infoContainerStyle = _ref$infoContainerSty === void 0 ? defaultInfoContainerStyle : _ref$infoContainerSty,
    _ref$checkBoxContaine = _ref.checkBoxContainerStyle,
    checkBoxContainerStyle = _ref$checkBoxContaine === void 0 ? defaultCheckBoxContainerStyle : _ref$checkBoxContaine,
    _ref$checkBoxStyle = _ref.checkBoxStyle,
    checkBoxStyle = _ref$checkBoxStyle === void 0 ? defaultCheckBoxStyle : _ref$checkBoxStyle,
    _ref$nameStyle = _ref.nameStyle,
    nameStyle = _ref$nameStyle === void 0 ? defaultNameStyle : _ref$nameStyle;
  var handlePermissionChange = function handlePermissionChange(event) {
    onPermissionChange(event.target.value, event.target.checked);
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(mainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(titleContainerStyle)
  }, role.name), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(infoContainerStyle)
  }, role.permissions.map(function (permission) {
    return /*#__PURE__*/_react["default"].createElement("label", {
      key: permission.value,
      className: (0, _css.css)(checkBoxContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "checkbox",
      value: permission.value,
      onChange: handlePermissionChange,
      checked: selectedPermissions.includes(permission.value),
      className: (0, _css.css)(checkBoxStyle)
    }), /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _css.css)(nameStyle)
    }, permission.name));
  }))));
};