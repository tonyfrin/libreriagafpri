"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneralForm = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Containers = require("../Containers");
var _Form = require("../Form");
var _Input = require("../Input");
var _templateObject, _templateObject2, _templateObject3;
var defaultFormContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n"])));
var defaultImageContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var defaultTitleContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var GeneralForm = exports.GeneralForm = function GeneralForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputStatus = _React$useState2[0],
    setInputStatus = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputVisibility = _React$useState4[0],
    setInputVisibility = _React$useState4[1];
  var _React$useState5 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    InputType = _React$useState6[0],
    setInputType = _React$useState6[1];
  var current = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationStatus(use.attributes.states.status);
    use.attributes.actions.validationVisibility(use.attributes.states.visibility);
    use.attributes.actions.validationType(use.attributes.states.type);
  }, [use.attributes.states.name, use.attributes.states.status, use.attributes.states.visibility, use.attributes.states.type, InputStatus, InputVisibility, InputType]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.statusValid, use.attributes.states.visibilityValid, use.attributes.states.typeValid]);
  _react["default"].useEffect(function () {
    if (current) {
      use.attributes.actions.setUploadCurrent(false);
      if (current.name) use.attributes.actions.changeName(current.name);
      if (current.publicName) use.attributes.actions.changePublicName(current.publicName);
      if (current.image) use.attributes.actions.setPhoto(current.image);
      if (current.posts.permanentLink) use.attributes.actions.changeLink(current.posts.permanentLink);
      if (current.description) use.attributes.actions.changeDescription(current.description);
      if (current.posts.status) {
        var status = use.attributes.actions.getStatusOptionByValue(current.posts.status);
        if (status) use.attributes.actions.changeStatus(status);
      }
      if (current.posts.visibility) {
        var visibility = use.attributes.actions.getVisibilityOptionByValue(current.posts.visibility);
        if (visibility) use.attributes.actions.changeVisibility(visibility);
      }
      use.attributes.actions.setUploadCurrent(true);
    }
  }, [current]);
  _react["default"].useEffect(function () {
    if (isAddForm) {
      setInputStatus(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectStatus, {
          changeStatus: function changeStatus(e) {
            return use.attributes.actions.changeStatus(e);
          },
          props: {
            options: use.attributes.states.statusOptions,
            defaultValue: use.attributes.states.statusDefault,
            styles: {
              width: '100%'
            },
            title: 'Estado'
          }
        });
      });
      setInputVisibility(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectVisibility, {
          change: function change(e) {
            return use.attributes.actions.changeVisibility(e);
          },
          props: {
            options: use.attributes.states.visibilityOptions,
            defaultValue: use.attributes.states.visibilityDefault,
            styles: {
              width: '100%'
            },
            title: 'Estado'
          }
        });
      });
    }
    setInputType(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectType, {
        changeType: function changeType(e) {
          return use.attributes.actions.changeType(e);
        },
        props: {
          options: use.attributes.states.typeOptions,
          defaultValue: use.attributes.states.typeDefault,
          styles: {
            width: '100%'
          },
          title: 'Tipo'
        }
      });
    });
  }, []);
  _react["default"].useEffect(function () {
    if (isUpdateForm && current && use.attributes.states.uploadCurrent) {
      setInputStatus(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectStatus, {
          changeStatus: function changeStatus(e) {
            return use.attributes.actions.changeStatus(e);
          },
          props: {
            options: use.attributes.states.statusOptions,
            defaultValue: use.attributes.states.statusDefault,
            styles: {
              width: '100%'
            },
            title: 'Estado'
          }
        });
      });
      setInputVisibility(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectVisibility, {
          change: function change(e) {
            return use.attributes.actions.changeVisibility(e);
          },
          props: {
            options: use.attributes.states.visibilityOptions,
            defaultValue: use.attributes.states.visibilityDefault,
            styles: {
              width: '100%'
            },
            title: 'Estado'
          }
        });
      });
    }
  }, [current, use.attributes.states.uploadCurrent]);
  var title1Text = isAddForm ? 'General' : 'Actualización General';
  var title2Text = isAddForm ? '' : '';
  var buttonTitle = 'Siguiente';
  var buttonAction = use.subPages.actions.onPrice;
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
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, {
    boxProps: {
      styles: {
        width: '90%',
        padding: '0',
        margin: '0'
      }
    },
    childrenContainerProps: {
      styles: {
        width: '100%'
      }
    },
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
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultFormContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultImageContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Form.PhotoProduct, {
    photo: use.attributes.states.photo,
    changePhoto: use.attributes.actions.changePhoto,
    changeError: use.error.actions.changeError,
    submitting: use.attributes.states.submitting,
    setSubmitting: use.attributes.actions.setSubmitting
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultTitleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.attributes.actions.changeName,
    props: {
      inputProps: {
        title: 'Nombre',
        defaultValue: use.attributes.states.name
      },
      styles: {
        width: '100%',
        padding: '10px 19px'
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputPublicName, {
    change: use.attributes.actions.changePublicName,
    props: {
      inputProps: {
        defaultValue: use.attributes.states.publicName
      },
      styles: {
        width: '100%',
        padding: '10px 19px'
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputPermanentLink, {
    change: use.attributes.actions.changeLink,
    props: {
      inputProps: {
        defaultValue: use.attributes.states.permanentLink
      },
      styles: {
        width: '100%',
        padding: '10px 19px'
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputStatus)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputVisibility)))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.ParagraphDescription, {
    changeDescription: use.attributes.actions.changeDescription,
    props: {
      inputProps: {
        defaultValue: use.attributes.states.description
      },
      styles: {
        width: '90%',
        padding: '10px 19px',
        height: '200px'
      }
    }
  })))));
};