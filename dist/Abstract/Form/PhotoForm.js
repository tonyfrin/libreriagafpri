"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Button = require("../Button");
var _Components = require("../../Components");
var _templateObject, _templateObject2, _templateObject3;
var defaultImageFormConatinerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n"])));
var defaultLoadingContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  width: 300px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  margin: auto;\n"])));
var defaultImageStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  width: 100%;\n  max-width: 300px;\n  max-height: 300px;\n  object-fit: cover;\n  border: 1px solid #ebebeb;\n  margin: auto;\n  border-radius: 10px;\n"])));
var PhotoForm = exports.PhotoForm = function PhotoForm(_ref) {
  var formId = _ref.formId,
    photo = _ref.photo,
    _ref$imageFormConatin = _ref.imageFormConatinerStyle,
    imageFormConatinerStyle = _ref$imageFormConatin === void 0 ? defaultImageFormConatinerStyle : _ref$imageFormConatin,
    changePhoto = _ref.changePhoto,
    _ref$changePhotoButto = _ref.changePhotoButtonProps,
    changePhotoButtonProps = _ref$changePhotoButto === void 0 ? {
      title: 'Cambiar Foto',
      styles: {
        fontSize: '10px',
        margin: '20px auto 40px auto',
        backgroundColor: '#439b57'
      }
    } : _ref$changePhotoButto,
    submitting = _ref.submitting,
    _ref$loadingContainer = _ref.loadingContainerStyle,
    loadingContainerStyle = _ref$loadingContainer === void 0 ? defaultLoadingContainerStyle : _ref$loadingContainer,
    loadingProps = _ref.loadingProps,
    _ref$imageStyle = _ref.imageStyle,
    imageStyle = _ref$imageStyle === void 0 ? defaultImageStyle : _ref$imageStyle,
    changeError = _ref.changeError,
    setSubmitting = _ref.setSubmitting;
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
  _react["default"].useEffect(function () {
    if (photo) {
      var img = new Image();
      img.src = photo;
      img.onload = function () {
        setSubmitting(false);
      };
      img.onerror = function () {
        changeError(["Error al cargar la imagen: ".concat(photo)]);
        setSubmitting(true);
      };
    }
  }, [photo]);
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
  }, changePhotoButtonProps))), submitting ? /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(loadingContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Components.Loading, loadingProps)) : photo && /*#__PURE__*/_react["default"].createElement("img", {
    className: (0, _css.css)(imageStyle),
    src: photo,
    alt: "Category"
  })));
};