"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderHorizontal = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("react"));
var _css = require("@emotion/css");
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _Button = require("../Button");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var MainSliderContainer = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: 38px;\n"])));
var SliderContainer = _styled["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  width: 100%;\n  margin: 0px auto 30px auto;\n  overflow: hidden;\n  border-radius: 5px;\n  padding: 20px;\n  border: 1px solid #ccc;\n"])));
var SliderWrapper = _styled["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  transition: transform 0.5s ease-in-out;\n  min-height: 160px;\n  transform: ", ";\n"])), function (_ref) {
  var currentIndex = _ref.currentIndex;
  return "translateX(-".concat(currentIndex * (100 / 4), "%)");
});
var SliderItem = _styled["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  flex: 0 0 25%; /* Ajusta el ancho seg\xFAn tus necesidades para mostrar 4 elementos a la vez */\n"])));
var Image = _styled["default"].img(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n"])));
var ContainerButtonSlider = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px;\n"])));
var floatingButtonsContainerStyles = (0, _css.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-right: 5px;\n  margin-bottom: 5px;\n"])));
var floatingCloseButtonStyles = (0, _css.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: 0px;\n  transform: translateY(-50%);\n  right: 0px;\n  cursor: pointer;\n  color: #fff;\n  background-color: #f44336;\n  border-radius: 100%;\n  padding: 2px 5px 4px 5px;\n  font-size: 8px;\n"])));
var SpanSlaiderStyles = function SpanSlaiderStyles(styles) {
  return (0, _css.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  color: ", ";\n  padding-left: ", ";\n  ", "\n"])), (styles === null || styles === void 0 ? void 0 : styles.fontSize) || 'x-small', (styles === null || styles === void 0 ? void 0 : styles.color) || '#8d8d8d', (styles === null || styles === void 0 ? void 0 : styles.paddingLeft) || '5px', styles.props || '');
};
var SliderHorizontal = exports.SliderHorizontal = function SliderHorizontal(_ref2) {
  var images = _ref2.images,
    title = _ref2.title,
    _ref2$stylesSpan = _ref2.stylesSpan,
    stylesSpan = _ref2$stylesSpan === void 0 ? {} : _ref2$stylesSpan,
    remove = _ref2.remove;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var handlePrev = function handlePrev() {
    setCurrentIndex(function (prevIndex) {
      return prevIndex > 0 ? prevIndex - 1 : images.length - 4;
    });
  };
  var handleNext = function handleNext() {
    setCurrentIndex(function (prevIndex) {
      return prevIndex < images.length - 4 ? prevIndex + 1 : 0;
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(MainSliderContainer)
  }, title ? /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.cx)(SpanSlaiderStyles(stylesSpan))
  }, title) : '', /*#__PURE__*/_react["default"].createElement(SliderContainer, null, /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
    currentIndex: currentIndex
  }, images.map(function (image, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.cx)(floatingButtonsContainerStyles),
      key: index
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _css.cx)(floatingCloseButtonStyles),
      onClick: function onClick() {
        return remove(image);
      }
    }, "x"), /*#__PURE__*/_react["default"].createElement(SliderItem, null, /*#__PURE__*/_react["default"].createElement(Image, {
      src: image,
      alt: "Imagen ".concat(index + 1)
    })));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(ContainerButtonSlider)
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "<",
    buttonProps: {
      onClick: function onClick() {
        return handlePrev();
      }
    },
    styles: {
      fontSize: '15px',
      padding: '5px 10px',
      margin: '0px 10px 0px 0px'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: ">",
    buttonProps: {
      onClick: function onClick() {
        return handleNext();
      }
    },
    styles: {
      fontSize: '15px',
      padding: '5px 10px',
      margin: '0px 0px 0px 10px'
    }
  }))));
};