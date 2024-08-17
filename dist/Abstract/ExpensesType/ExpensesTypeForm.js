"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpensesTypeForm = void 0;
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
var _templateObject, _templateObject2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultOptionsButtonMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n"])));
var defaultFormContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  margin-top: 10px;\n  flex-direction: column;\n"])));
var ExpensesTypeForm = exports.ExpensesTypeForm = function ExpensesTypeForm(_ref) {
  var _paginated$map;
  var use = _ref.use,
    formType = _ref.formType,
    _ref$optionsButtonMai = _ref.optionsButtonMainContainerStyle,
    optionsButtonMainContainerStyle = _ref$optionsButtonMai === void 0 ? defaultOptionsButtonMainContainerStyle : _ref$optionsButtonMai,
    _ref$formContainerSty = _ref.formContainerStyle,
    formContainerStyle = _ref$formContainerSty === void 0 ? defaultFormContainerStyle : _ref$formContainerSty,
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
    dependentsListProps = _ref.dependentsListProps;
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
  var currentCategory = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  var children = currentCategory ? use.data.actions.getChildren(currentCategory.id) : [];
  var ButtonUpdate = function ButtonUpdate(_ref2) {
    var id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionsButtonMainContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      buttonProps: {
        onClick: function onClick() {
          return use.api.actions.deleteParentId(id);
        }
      }
    }, deleteButtonProps)));
  };
  var filtered = use.paginations.actions.filterByName(children, use.paginations.states.searchTerm);
  var category = use.paginations.actions.sortByName(filtered, use.paginations.states.orderList) || [];
  var paginated = use.paginations.actions.getPaginated(category, use.paginations.states.currentPage, use.paginations.states.itemsPerPage);
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
  var valueDefaul = use.paginations.states.orderList === 'asc' ? {
    value: 'asc',
    label: 'Ascendente'
  } : {
    value: 'desc',
    label: 'Descendente'
  };
  var totalPages = Math.ceil(category.length / use.paginations.states.itemsPerPage);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationDescription(use.attributes.states.description);
    use.attributes.actions.validationParentId(use.attributes.states.parentId);
    use.attributes.actions.validationStatus(use.attributes.states.status);
  }, [use.attributes.states.name, use.attributes.states.parentId, use.attributes.states.description, use.attributes.states.status]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.parentIdValid, use.attributes.states.descriptionValid, use.attributes.states.statusValid]);
  _react["default"].useEffect(function () {
    if (currentCategory) {
      if (currentCategory.name) use.attributes.actions.changeName(currentCategory.name);
      if (currentCategory.description) use.attributes.actions.changeDescription(currentCategory.description);
      if (currentCategory.parentId === null) {
        use.attributes.actions.changeParentId({
          label: 'Sin categoría padre',
          value: ''
        });
      } else {
        var categoryParent = use.data.actions.getById(currentCategory.parentId);
        use.attributes.actions.changeParentId({
          label: "".concat(categoryParent === null || categoryParent === void 0 ? void 0 : categoryParent.name),
          value: "".concat(categoryParent === null || categoryParent === void 0 ? void 0 : categoryParent.id)
        });
      }
      if (currentCategory.status) {
        var label = currentCategory.status === 'active' ? 'Activo' : currentCategory.status === 'disabled' ? 'Desactivo' : '';
        use.attributes.actions.changeStatus({
          label: label,
          value: currentCategory.status
        });
      }
    }
    if (isAddForm) {
      setInputParentId(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectParentId, {
          changeParentId: function changeParentId(e) {
            return use.attributes.actions.changeParentId(e);
          },
          props: _objectSpread({
            options: use.attributes.states.parentIdOptions,
            defaultValue: use.attributes.states.parentIdDefault,
            title: 'Egreso padre',
            styles: {
              width: '100%'
            }
          }, parentIdInputProps)
        });
      });
      setInputStatus(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectStatus, {
          changeStatus: function changeStatus(e) {
            return use.attributes.actions.changeStatus(e);
          },
          props: _objectSpread({
            options: use.attributes.states.statusOptions,
            defaultValue: use.attributes.states.statusDefault,
            title: 'Estatus',
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
      if (use.attributes.states.parentIdDefault.value === '' && currentCategory.parentId === null || use.attributes.states.parentIdDefault.value !== '' && currentCategory.parentId !== null) {
        setInputParentId(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectParentId, {
            changeParentId: function changeParentId(e) {
              return use.attributes.actions.changeParentId(e);
            },
            props: _objectSpread({
              options: use.attributes.states.parentIdOptions,
              defaultValue: use.attributes.states.parentIdDefault,
              title: 'Egreso padre',
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
            return use.attributes.actions.changeStatus(e);
          },
          props: _objectSpread({
            options: use.attributes.states.statusOptions,
            defaultValue: use.attributes.states.statusDefault,
            title: 'Estatus',
            styles: {
              width: '100%'
            }
          }, statusInputProps)
        });
      });
    }
  }, [use.attributes.states.parentIdDefault, use.attributes.states.statusDefault]);
  var title1Text = isAddForm ? 'Nuevo Tipo de Egreso' : 'Actualizar tipo de egreso';
  var title2Text = isAddForm ? 'Agrega un nuevo tipo de egreso' : "Actualiza la informaci\xF3n del tipo de egreso #".concat(currentCategory === null || currentCategory === void 0 ? void 0 : currentCategory.id);
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
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(formContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'center'
    }
  }, nameContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.attributes.actions.changeName,
    props: _objectSpread({
      inputProps: {
        title: 'Nombre',
        defaultValue: use.attributes.states.name
      },
      styles: {
        width: '100%',
        padding: '10px 19px'
      }
    }, nameInputProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'center'
    }
  }, descriptionContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputDescription, {
    changeDescription: use.attributes.actions.changeDescription,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.description,
        title: 'Descripción'
      },
      styles: {
        width: '100%',
        padding: '10px 19px'
      }
    }, descriptionInputProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'center'
    }
  }, parentIdContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputParentId)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'center'
    }
  }, statusContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputStatus))), children.length > 0 && /*#__PURE__*/_react["default"].createElement("div", null, use.pages.states.childrenFetching ? /*#__PURE__*/_react["default"].createElement(_Components.Loading, loadingProps) : /*#__PURE__*/_react["default"].createElement(_List.List, (0, _extends2["default"])({
    title: "Dependientes",
    items: items,
    headers: headers,
    columns: 3,
    selectProps: {
      options: options,
      onChange: function onChange(event) {
        if (event !== null && event !== void 0 && event.value) {
          use.paginations.actions.setOrderList(event.value);
        }
      },
      defaultValue: valueDefaul,
      styles: {
        width: '50%'
      }
    },
    inputProps: {
      value: use.paginations.states.searchTerm,
      onChange: function onChange(e) {
        return use.paginations.actions.setSearchTerm(e.target.value);
      },
      placeholder: 'Buscar por nombre...'
    },
    propsPagination: {
      currentPage: use.paginations.states.currentPage,
      setCurrentPage: use.paginations.actions.setCurrentPage,
      totalPages: totalPages
    }
  }, dependentsListProps)))));
};