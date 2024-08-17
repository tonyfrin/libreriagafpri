"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoCategory = void 0;
var _react = _interopRequireDefault(require("react"));
var _PhotoForm = require("./PhotoForm");
var _constants = require("../../constants");
var PhotoCategory = exports.PhotoCategory = function PhotoCategory(_ref) {
  var photo = _ref.photo,
    changePhoto = _ref.changePhoto,
    submitting = _ref.submitting,
    changeError = _ref.changeError,
    setSubmitting = _ref.setSubmitting,
    props = _ref.props,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_PhotoForm.PhotoForm, {
    formId: "".concat(_constants.PHOTO_CATEGORY_INPUT).concat(inputId),
    photo: photo,
    imageFormConatinerStyle: props === null || props === void 0 ? void 0 : props.imageFormConatinerStyle,
    changePhoto: changePhoto,
    changePhotoButtonProps: props === null || props === void 0 ? void 0 : props.changePhotoButtonProps,
    submitting: submitting,
    loadingContainerStyle: props === null || props === void 0 ? void 0 : props.loadingContainerStyle,
    loadingProps: props === null || props === void 0 ? void 0 : props.loadingProps,
    imageStyle: props === null || props === void 0 ? void 0 : props.imageStyle,
    changeError: changeError,
    setSubmitting: setSubmitting
  }));
};