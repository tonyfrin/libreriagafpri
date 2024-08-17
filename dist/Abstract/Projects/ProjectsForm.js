"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectsForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _Form = require("../Form");
var _Containers = require("../Containers");
var _Input = require("../Input");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ProjectsForm = exports.ProjectsForm = function ProjectsForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType,
    modelFormProps = _ref.modelFormProps,
    infoContainerProps = _ref.infoContainerProps,
    nameInputProps = _ref.nameInputProps,
    descriptionInputProps = _ref.descriptionInputProps;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var currentProject = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationDescription(use.attributes.states.description);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name, use.attributes.states.description]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.descriptionValid]);
  _react["default"].useEffect(function () {
    if (currentProject) {
      use.attributes.actions.changeName(currentProject.name);
      use.attributes.actions.changeDescription(currentProject.description);
    }
  }, []);
  var title1Text = isAddForm ? 'Nuevo Proyecto' : 'Actualizar Proyecto';
  var title2Text = isAddForm ? 'Agrega un nuevo proyecto' : "Actualiza la informaci\xF3n del proyecto #".concat(currentProject === null || currentProject === void 0 ? void 0 : currentProject.postsId);
  var buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  var buttonAction = isAddForm ? use.api.actions.add : use.api.actions.update;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, (0, _extends2["default"])({
    titles: {
      title1: title1Text,
      title2: title2Text
    },
    buttonTitles: {
      mainButton: buttonTitle,
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: use.error.states.error
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.attributes.actions.changeName,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.name
      },
      styles: {
        width: '85%'
      }
    }, nameInputProps)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputDescription, (0, _extends2["default"])({
    changeDescription: use.attributes.actions.changeDescription,
    props: {
      inputProps: {
        defaultValue: use.attributes.states.description
      },
      styles: {
        width: '85%'
      }
    }
  }, descriptionInputProps))))));
};