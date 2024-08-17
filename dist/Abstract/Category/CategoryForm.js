"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryForm = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Containers = require("../Containers");
var _Form = require("../Form");
var _List = require("../List");
var _Components = require("../../Components");
var _Button = require("../Button");
var _Input = require("../Input");
var _templateObject, _templateObject2, _templateObject3;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultOptionsButtonMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n"])));
var defaultFormContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n"])));
var defaultImageContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var CategoryForm = exports.CategoryForm = function CategoryForm(_ref) {
  var _paginated$map;
  var use = _ref.use,
    formType = _ref.formType,
    _ref$optionsButtonMai = _ref.optionsButtonMainContainerStyle,
    optionsButtonMainContainerStyle = _ref$optionsButtonMai === void 0 ? defaultOptionsButtonMainContainerStyle : _ref$optionsButtonMai,
    _ref$formContainerSty = _ref.formContainerStyle,
    formContainerStyle = _ref$formContainerSty === void 0 ? defaultFormContainerStyle : _ref$formContainerSty,
    _ref$imageContainerSt = _ref.imageContainerStyle,
    imageContainerStyle = _ref$imageContainerSt === void 0 ? defaultImageContainerStyle : _ref$imageContainerSt,
    _ref$infoContainerSty = _ref.infoContainerStyle,
    infoContainerStyle = _ref$infoContainerSty === void 0 ? defaultImageContainerStyle : _ref$infoContainerSty,
    _ref$deleteButtonProp = _ref.deleteButtonProps,
    deleteButtonProps = _ref$deleteButtonProp === void 0 ? {
      title: 'Eliminar',
      styles: {
        backgroundColor: '#c12429',
        fontSize: '10px'
      }
    } : _ref$deleteButtonProp,
    modelFormProps = _ref.modelFormProps,
    loadingProps = _ref.loadingProps,
    nameContainerProps = _ref.nameContainerProps,
    nameInputProps = _ref.nameInputProps,
    descriptionContainerProps = _ref.descriptionContainerProps,
    descriptionInputProps = _ref.descriptionInputProps,
    parentIdContainerProps = _ref.parentIdContainerProps,
    parentIdInputProps = _ref.parentIdInputProps,
    statusContainerProps = _ref.statusContainerProps,
    statusInputProps = _ref.statusInputProps,
    dependentsListProps = _ref.dependentsListProps,
    propsPhotoCategory = _ref.propsPhotoCategory;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputParentId = _React$useState2[0],
    setInputParentId = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputStatus = _React$useState4[0],
    setInputStatus = _React$useState4[1];
  var currentCategory = isUpdateForm ? use.actions.getById(use.states.currentId) : null;
  var children = currentCategory ? use.actions.getChildren(currentCategory.id) : [];
  var ButtonUpdate = function ButtonUpdate(_ref2) {
    var id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionsButtonMainContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      buttonProps: {
        onClick: function onClick() {
          return use.actions.deleteParentId(id);
        }
      }
    }, deleteButtonProps)));
  };
  var filtered = use.actions.filterByName(children, use.states.searchTerm);
  var category = use.actions.sortByName(filtered, use.states.orderList) || [];
  var paginated = use.actions.getPaginated(category, use.states.currentPage, use.states.itemsPerPage);
  var items = (_paginated$map = paginated === null || paginated === void 0 ? void 0 : paginated.map(function (item) {
    return [item.name, item.description, /*#__PURE__*/_react["default"].createElement(ButtonUpdate, {
      id: item.id
    })];
  })) !== null && _paginated$map !== void 0 ? _paginated$map : [];
  var headers = ['Nombre', 'Descripción', 'Opciones'];
  var options = [{
    value: 'asc',
    label: 'Ascendente'
  }, {
    value: 'desc',
    label: 'Descendente'
  }];
  var valueDefaul = use.states.orderList === 'asc' ? {
    value: 'asc',
    label: 'Ascendente'
  } : {
    value: 'desc',
    label: 'Descendente'
  };
  var totalPages = Math.ceil(category.length / use.states.itemsPerPage);
  _react["default"].useEffect(function () {
    use.actions.validationName(use.states.name);
    use.actions.validationDescription(use.states.description);
    use.actions.validationParentId(use.states.parentId);
    use.actions.validationPhoto(use.states.photo);
    use.actions.validationStatus(use.states.status);
  }, [use.states.name, use.states.parentId, use.states.description, use.states.photo, use.states.status]);
  _react["default"].useEffect(function () {
    use.actions.validationButtonNext();
  }, [use.states.nameValid, use.states.parentIdValid, use.states.descriptionValid, use.states.photoValid, use.states.statusValid]);
  _react["default"].useEffect(function () {
    if (currentCategory) {
      if (currentCategory.name) use.actions.changeName(currentCategory.name);
      if (currentCategory.description) use.actions.changeDescription(currentCategory.description);
      if (currentCategory.parentId !== undefined) {
        if (currentCategory.parentId === null) {
          use.actions.changeParentId({
            label: 'Sin categoría padre',
            value: "null"
          });
        } else {
          var categoryParent = use.actions.getById(currentCategory.parentId);
          use.actions.changeParentId({
            label: "".concat(categoryParent === null || categoryParent === void 0 ? void 0 : categoryParent.name),
            value: "".concat(categoryParent === null || categoryParent === void 0 ? void 0 : categoryParent.id)
          });
        }
      }
      if (currentCategory.photo) use.actions.setPhoto(currentCategory.photo);
      if (currentCategory.status) {
        var label = currentCategory.status === 'active' ? 'Activo' : currentCategory.status === 'disabled' ? 'Desactivo' : '';
        use.actions.changeStatus({
          label: label,
          value: currentCategory.status
        });
      }
    }
    if (isAddForm) {
      setInputParentId(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectParentId, {
          changeParentId: function changeParentId(e) {
            return use.actions.changeParentId(e);
          },
          props: _objectSpread({
            options: use.states.parentIdOptions,
            defaultValue: use.states.parentIdDefault,
            styles: {
              width: '100%'
            }
          }, parentIdInputProps)
        });
      });
      setInputStatus(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectStatus, {
          changeStatus: function changeStatus(e) {
            return use.actions.changeStatus(e);
          },
          props: _objectSpread({
            options: use.states.statusOptions,
            defaultValue: use.states.statusDefault,
            styles: {
              width: '100%'
            }
          }, statusInputProps)
        });
      });
    }
  }, []);
  _react["default"].useEffect(function () {
    if (isUpdateForm && currentCategory) {
      if (use.states.parentIdDefault.value === 'null' && currentCategory.parentId === null || use.states.parentIdDefault.value !== 'null' && currentCategory.parentId !== null) {
        setInputParentId(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectParentId, {
            changeParentId: function changeParentId(e) {
              return use.actions.changeParentId(e);
            },
            props: _objectSpread({
              options: use.states.parentIdOptions,
              defaultValue: use.states.parentIdDefault,
              styles: {
                width: '100%'
              }
            }, parentIdInputProps)
          });
        });
      }
      setInputStatus(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectStatus, {
          changeStatus: function changeStatus(e) {
            return use.actions.changeStatus(e);
          },
          props: _objectSpread({
            options: use.states.statusOptions,
            defaultValue: use.states.statusDefault,
            styles: {
              width: '100%'
            }
          }, statusInputProps)
        });
      });
    }
  }, [use.states.parentIdDefault, use.states.statusDefault]);
  var title1Text = isAddForm ? 'Nueva Categoría' : 'Actualizar Categoría';
  var title2Text = isAddForm ? 'Agrega un nuevo tipo de Categoría de producto' : "Actualiza la informaci\xF3n de la categor\xEDa #".concat(currentCategory === null || currentCategory === void 0 ? void 0 : currentCategory.id);
  var buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  var buttonAction = isAddForm ? use.actions.add : use.actions.update;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.actions.returnInit();
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
    error: use.states.error
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(formContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(imageContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Form.PhotoCategory, {
    photo: use.states.photo,
    changePhoto: use.actions.changePhoto,
    changeError: use.actions.changeError,
    submitting: use.states.submitting,
    setSubmitting: use.actions.setSubmitting,
    props: propsPhotoCategory
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(infoContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'end'
    }
  }, nameContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.actions.changeName,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.name
      },
      styles: {
        width: '100%',
        padding: '10px 19px'
      }
    }, nameInputProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'end'
    }
  }, descriptionContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputDescription, {
    changeDescription: use.actions.changeDescription,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.description
      },
      styles: {
        width: '100%',
        padding: '10px 19px'
      }
    }, descriptionInputProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'end'
    }
  }, parentIdContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputParentId)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'end'
    }
  }, statusContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputStatus)))), children.length > 0 && /*#__PURE__*/_react["default"].createElement("div", null, use.states.childrenFetching ? /*#__PURE__*/_react["default"].createElement(_Components.Loading, loadingProps) : /*#__PURE__*/_react["default"].createElement(_List.List, (0, _extends2["default"])({
    title: "Dependientes",
    items: items,
    headers: headers,
    columns: 3,
    selectProps: {
      options: options,
      onChange: function onChange(event) {
        if (event !== null && event !== void 0 && event.value) {
          use.actions.setOrderList(event.value);
        }
      },
      defaultValue: valueDefaul,
      styles: {
        width: '50%'
      }
    },
    inputProps: {
      value: use.states.searchTerm,
      onChange: function onChange(e) {
        return use.actions.setSearchTerm(e.target.value);
      },
      placeholder: 'Buscar por nombre...'
    },
    propsPagination: {
      currentPage: use.states.currentPage,
      setCurrentPage: use.actions.setCurrentPage,
      totalPages: totalPages
    }
  }, dependentsListProps)))));
};