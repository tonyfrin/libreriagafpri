"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoGalleryForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Button = require("../Button");
var _templateObject;
var defaultImageFormConatinerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n"])));
var PhotoGalleryForm = exports.PhotoGalleryForm = function PhotoGalleryForm(_ref) {
  var formId = _ref.formId,
    _ref$imageFormConatin = _ref.imageFormConatinerStyle,
    imageFormConatinerStyle = _ref$imageFormConatin === void 0 ? defaultImageFormConatinerStyle : _ref$imageFormConatin,
    changePhoto = _ref.changePhoto,
    _ref$changePhotoButto = _ref.changePhotoButtonProps,
    changePhotoButtonProps = _ref$changePhotoButto === void 0 ? {
      title: 'Agregar Foto',
      styles: {
        fontSize: '10px',
        margin: '20px auto 40px auto',
        backgroundColor: '#439b57'
      }
    } : _ref$changePhotoButto;
  var fileInputRef = _react["default"].useRef(null);
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
  };
  var handleButtonClick = function handleButtonClick() {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("form", {
    className: (0, _css.css)(imageFormConatinerStyle),
    onSubmit: handleSubmit,
    id: formId
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    id: "file-input",
    ref: fileInputRef,
    hidden: true,
    onChange: changePhoto
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
    buttonProps: {
      onClick: handleButtonClick
    }
  }, changePhotoButtonProps)))));
};