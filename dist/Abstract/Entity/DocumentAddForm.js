"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentAddForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Input = require("../Input");
var _Form = require("../Form");
var _templateObject, _templateObject2, _templateObject3;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var photoInfoContainerStyleDefault = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var photoMainContainerStyleDefault = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"])));
var nameLastNameContainerStyleDefault = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var DocumentAddForm = exports.DocumentAddForm = function DocumentAddForm(_ref) {
  var use = _ref.use,
    _ref$photoMainContain = _ref.photoMainContainerStyle,
    photoMainContainerStyle = _ref$photoMainContain === void 0 ? photoMainContainerStyleDefault : _ref$photoMainContain,
    _ref$photoInfoContain = _ref.photoInfoContainerStyle,
    photoInfoContainerStyle = _ref$photoInfoContain === void 0 ? photoInfoContainerStyleDefault : _ref$photoInfoContain,
    _ref$nameLastNameCont = _ref.nameLastNameContainerStyle,
    nameLastNameContainerStyle = _ref$nameLastNameCont === void 0 ? nameLastNameContainerStyleDefault : _ref$nameLastNameCont,
    inputTypeDocumentIdIdProps = _ref.inputTypeDocumentIdIdProps,
    inputIndexProps = _ref.inputIndexProps,
    _ref$mainTitle = _ref.mainTitle,
    mainTitle = _ref$mainTitle === void 0 ? 'Nuevo documento' : _ref$mainTitle,
    _ref$subTitle = _ref.subTitle,
    subTitle = _ref$subTitle === void 0 ? 'Agrega un nuevo documento de identificación' : _ref$subTitle,
    modelFormProps = _ref.modelFormProps,
    inputDigitProps = _ref.inputDigitProps,
    propsPhoto = _ref.propsPhoto;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputTypeDocumentIdId = _React$useState2[0],
    setInputTypeDocumentIdId = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputIndex = _React$useState4[0],
    setInputIndex = _React$useState4[1];
  var fileInputRef = _react["default"].useRef(null);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationDocumentPhoto(use.attributes.states.documentPhoto);
    var typeDocumentIdId = use.attributes.states.typeDocumentIdId === null ? '' : "".concat(use.attributes.states.typeDocumentIdId);
    use.attributes.actions.validationTypeDocumentIdId(typeDocumentIdId);
    use.attributes.actions.validationIndex(use.attributes.states.index);
    use.attributes.actions.validationDigit(use.attributes.states.digit);
  }, [use.attributes.states.documentPhoto, use.attributes.states.typeDocumentIdId, InputTypeDocumentIdId, use.attributes.states.index, InputIndex, use.attributes.states.digit]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNextDocument();
  }, [use.attributes.states.documentPhotoValid, use.attributes.states.typeDocumentIdIdValid, use.attributes.states.indexValid, use.attributes.states.digitValid]);
  var buttonTitle = 'Agregar';
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        use.api.actions.addDocument();
        break;
      case 'return':
        use.pages.actions.goUpdate(use.attributes.states.currentId);
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  _react["default"].useEffect(function () {
    setInputTypeDocumentIdId(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectTypeDocumentIdId, {
        changeTypeDocumentIdId: use.attributes.actions.changeTypeDocumentIdId,
        props: _objectSpread({
          options: use.attributes.states.typeDocumentIdIdOptions,
          defaultValue: use.attributes.states.typeDocumentIdIdDefault,
          styles: {
            width: '92%'
          }
        }, inputTypeDocumentIdIdProps)
      });
    });
    setInputIndex(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectDocumentIdIndex, {
        changeIndex: use.attributes.actions.changeIndex,
        props: _objectSpread({
          options: use.attributes.states.indexOptions,
          defaultValue: use.attributes.states.indexDefault,
          styles: {
            width: '92%'
          }
        }, inputIndexProps)
      });
    });
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, (0, _extends2["default"])({
    titles: {
      title1: mainTitle,
      title2: subTitle
    },
    buttonTitles: {
      mainButton: buttonTitle,
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: use.error.states.error
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(photoMainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(photoInfoContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Form.PhotoDocumentId, {
    photo: use.attributes.states.documentPhoto,
    changePhoto: use.attributes.actions.changeDocumentPhoto,
    submitting: use.attributes.states.submitting,
    changeError: use.error.actions.changeError,
    setSubmitting: use.attributes.actions.setSubmitting,
    props: propsPhoto
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(nameLastNameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputTypeDocumentIdId, InputIndex, /*#__PURE__*/_react["default"].createElement(_Input.InputDocumentiIdDigit, {
    changeDocumentiIdDigit: function changeDocumentiIdDigit(event) {
      return use.attributes.actions.changeDigit(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.digit
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, inputDigitProps)
  }))))));
};