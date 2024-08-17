"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityUpdateForm = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _constants = require("../../constants");
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Button = require("../Button");
var _List = require("../List");
var _Form = require("../Form");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var photoContainerStyleDefault = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var photoMainContainerStyleDefault = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"])));
var nameContainerStyleDefault = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var optionsButtonContainerStyleDefault = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n  width: 91.66667%;\n  margin: 10px 0px;\n"])));
var optionsButtonUpdateContainerStyleDefault = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n"])));
var addressListContainerStyleDefault = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  border-top: 0.1rem solid rgb(227, 223, 218);\n  padding-top: 10px;\n  width: 96%;\n  margin-top: 15px;\n"])));
var EntityUpdateForm = exports.EntityUpdateForm = function EntityUpdateForm(_ref) {
  var _paginated$map, _documentPaginated$ma;
  var use = _ref.use,
    _ref$optionsButtonSta = _ref.optionsButtonStatusContainerStyle,
    optionsButtonStatusContainerStyle = _ref$optionsButtonSta === void 0 ? optionsButtonContainerStyleDefault : _ref$optionsButtonSta,
    _ref$optionsButtonTyp = _ref.optionsButtonTypeContainerStyle,
    optionsButtonTypeContainerStyle = _ref$optionsButtonTyp === void 0 ? optionsButtonContainerStyleDefault : _ref$optionsButtonTyp,
    _ref$optionsButtonUpd = _ref.optionsButtonUpdateContainerStyle,
    optionsButtonUpdateContainerStyle = _ref$optionsButtonUpd === void 0 ? optionsButtonUpdateContainerStyleDefault : _ref$optionsButtonUpd,
    _ref$optionsButtonDel = _ref.optionsButtonDeleteContainerStyle,
    optionsButtonDeleteContainerStyle = _ref$optionsButtonDel === void 0 ? optionsButtonUpdateContainerStyleDefault : _ref$optionsButtonDel,
    _ref$photoMainContain = _ref.photoMainContainerStyle,
    photoMainContainerStyle = _ref$photoMainContain === void 0 ? photoMainContainerStyleDefault : _ref$photoMainContain,
    _ref$photoContainerSt = _ref.photoContainerStyle,
    photoContainerStyle = _ref$photoContainerSt === void 0 ? photoContainerStyleDefault : _ref$photoContainerSt,
    _ref$nameContainerSty = _ref.nameContainerStyle,
    nameContainerStyle = _ref$nameContainerSty === void 0 ? nameContainerStyleDefault : _ref$nameContainerSty,
    _ref$addressListConta = _ref.addressListContainerStyle,
    addressListContainerStyle = _ref$addressListConta === void 0 ? addressListContainerStyleDefault : _ref$addressListConta,
    _ref$documentListCont = _ref.documentListContainerStyle,
    documentListContainerStyle = _ref$documentListCont === void 0 ? addressListContainerStyleDefault : _ref$documentListCont,
    buttonStatusProps = _ref.buttonStatusProps,
    buttonTypeProps = _ref.buttonTypeProps,
    buttonAddressFactProps = _ref.buttonAddressFactProps,
    buttonAddressDeleteProps = _ref.buttonAddressDeleteProps,
    modelFormProps = _ref.modelFormProps,
    nameInputProps = _ref.nameInputProps,
    lastNameInputProps = _ref.lastNameInputProps,
    emailPhoneConatinerProps = _ref.emailPhoneConatinerProps,
    emailInputProps = _ref.emailInputProps,
    phoneInputProps = _ref.phoneInputProps,
    addressListProps = _ref.addressListProps,
    documentListProps = _ref.documentListProps,
    propsPhoto = _ref.propsPhoto;
  var currentEntity = use.data.actions.getById(use.attributes.states.currentId);
  var isPersonalForm = (currentEntity === null || currentEntity === void 0 ? void 0 : currentEntity.type) === 'personal';
  var status = (currentEntity === null || currentEntity === void 0 ? void 0 : currentEntity.status) || 'inactive';
  var titleStatus = status === 'active' ? 'Activo' : status === 'inactive' ? 'Inactivo' : '';
  var type = (currentEntity === null || currentEntity === void 0 ? void 0 : currentEntity.type) || 'personal';
  var titleType = type === 'personal' ? 'Persona Natural' : type === 'legal' ? 'Persona Jurídica' : '';
  var ButtonStatus = function ButtonStatus() {
    var color = status === 'active' ? '#439b57' : '#c12429';
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionsButtonStatusContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      title: titleStatus,
      styles: {
        fontSize: '15px',
        backgroundColor: color,
        cursor: 'off',
        padding: '8px 19px'
      },
      Class: "email-button",
      buttonProps: {
        title: "".concat(titleStatus)
      }
    }, buttonStatusProps)));
  };
  var ButtonType = function ButtonType() {
    var color = '#07b2e7';
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionsButtonTypeContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      title: titleType,
      styles: {
        fontSize: '15px',
        backgroundColor: color,
        cursor: 'off',
        padding: '8px 19px'
      },
      Class: "email-button",
      buttonProps: {
        title: "".concat(titleType)
      }
    }, buttonTypeProps)));
  };

  // Address
  var ButtonUpdate = function ButtonUpdate(_ref2) {
    var id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionsButtonUpdateContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      title: "Fact...",
      buttonProps: {
        onClick: function onClick() {
          return use.api.actions.changeAddress(id);
        }
      },
      styles: {
        fontSize: '10px'
      }
    }, buttonAddressFactProps)), /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      title: "Borrar",
      buttonProps: {
        onClick: function onClick() {
          return use.api.actions.deleteAddress(id);
        }
      },
      styles: {
        fontSize: '10px',
        backgroundColor: '#c12429'
      }
    }, buttonAddressDeleteProps)));
  };
  var address = (currentEntity === null || currentEntity === void 0 ? void 0 : currentEntity.address) || [];
  address.sort(function (a, b) {
    if (a.id && b.id) {
      return a.id - b.id;
    } else {
      return 0;
    }
  });
  var paginated = use.paginations.actions.getPaginated(address, use.paginations.states.currentPage, use.paginations.states.itemsPerPage);
  var items = (_paginated$map = paginated === null || paginated === void 0 ? void 0 : paginated.map(function (item) {
    var itemAddress = item;
    var id = itemAddress.id || 0;
    var type = itemAddress.type === 'bill' ? 'Facturación' : itemAddress.type === 'shipping' ? 'Envío' : '';
    var stateCountry = _constants.StatesCountries[0][itemAddress === null || itemAddress === void 0 ? void 0 : itemAddress.country][0][itemAddress === null || itemAddress === void 0 ? void 0 : itemAddress.state] || '';
    var country = _constants.Countries[0][itemAddress === null || itemAddress === void 0 ? void 0 : itemAddress.country] || '';
    if (itemAddress.type !== 'bill') {
      return [type, itemAddress.address1, itemAddress.city, stateCountry, country, /*#__PURE__*/_react["default"].createElement(ButtonUpdate, {
        id: id
      })];
    } else {
      return [type, itemAddress.address1, itemAddress.city, stateCountry, country, ''];
    }
  })) !== null && _paginated$map !== void 0 ? _paginated$map : [];
  var headers = ['Tipo', 'Dirección 1', 'Ciudad', 'Estado', 'Pais', 'Acción'];
  var totalPages = Math.ceil(address.length / use.paginations.states.itemsPerPage);

  //DocumentId

  var ButtonActionsDocument = function ButtonActionsDocument(_ref3) {
    var id = _ref3.id;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionsButtonDeleteContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      title: "Borrar",
      buttonProps: {
        onClick: function onClick() {
          return use.api.actions.deleteDocument(id);
        }
      },
      styles: {
        fontSize: '10px',
        backgroundColor: '#c12429'
      }
    }));
  };
  var documents = (currentEntity === null || currentEntity === void 0 ? void 0 : currentEntity.documentId) || [];
  documents.sort(function (a, b) {
    if (a.id && b.id) {
      return a.id - b.id;
    } else {
      return 0;
    }
  });
  var documentPaginated = use.paginations.actions.getPaginated(documents, use.paginations.states.currentPage, use.paginations.states.itemsPerPage);
  var documentItems = (_documentPaginated$ma = documentPaginated === null || documentPaginated === void 0 ? void 0 : documentPaginated.map(function (item) {
    var _itemDocument$typeDoc, _itemDocument$typeDoc2;
    var itemDocument = item;
    var id = itemDocument.id || 0;
    var type = (_itemDocument$typeDoc = itemDocument.typeDocumentId) === null || _itemDocument$typeDoc === void 0 ? void 0 : _itemDocument$typeDoc.name;
    var country = (_itemDocument$typeDoc2 = itemDocument.typeDocumentId) !== null && _itemDocument$typeDoc2 !== void 0 && _itemDocument$typeDoc2.country ? _constants.Countries[0][itemDocument.typeDocumentId.country] : '';
    var number = itemDocument.index !== null ? "".concat(itemDocument.index, "-").concat(itemDocument.digit) : "".concat(itemDocument.digit);
    return [type, country, number, /*#__PURE__*/_react["default"].createElement(ButtonActionsDocument, {
      id: id
    })];
  })) !== null && _documentPaginated$ma !== void 0 ? _documentPaginated$ma : [];
  var documentHeaders = ['Tipo', 'Pais', 'Numero', 'Acción'];
  var documentTotalPages = Math.ceil(documents.length / use.paginations.states.itemsPerPage);
  _react["default"].useEffect(function () {
    if (currentEntity) {
      if (currentEntity.photo) {
        use.attributes.actions.setPhoto(currentEntity.photo);
        use.attributes.actions.validationPhoto(currentEntity.photo);
      }
      if (currentEntity.name) use.attributes.actions.changeName(currentEntity.name);
      if (currentEntity.lastName) use.attributes.actions.changeLastName(currentEntity.lastName);
      if (currentEntity.email) use.attributes.actions.changeEmail(currentEntity.email);
      if (currentEntity.phone) use.attributes.actions.changePhone(currentEntity.phone);
    }
  }, [currentEntity]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNextUpdate();
  }, [use.attributes.states.nameValid, use.attributes.states.lastNameValid, use.attributes.states.statusValid, use.attributes.states.typeValid, use.attributes.states.emailValid, use.attributes.states.phoneValid]);
  _react["default"].useEffect(function () {
    use.attributes.actions.setAddress(address);
    use.attributes.actions.setDocumentId(documents);
    use.attributes.actions.changeStatus({
      label: titleStatus,
      value: status
    });
    use.attributes.actions.changeType({
      label: titleType,
      value: type
    });
  }, []);
  var title1Text = isPersonalForm ? 'Actualizar personal natural' : 'Actualizar persona jurídica';
  var title2Text = isPersonalForm ? "Actualiza la persona natural # ".concat(currentEntity === null || currentEntity === void 0 ? void 0 : currentEntity.id) : "Actualiza la persona jur\xEDdica # ".concat(currentEntity === null || currentEntity === void 0 ? void 0 : currentEntity.id);
  var buttonTitle = 'Actualizar';
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        use.api.actions.update();
        break;
      case 'return':
        use.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, (0, _extends2["default"])({
    titles: {
      title1: title1Text,
      title2: title2Text
    },
    buttonTitles: {
      mainButton: buttonTitle,
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: use.error.states.error,
    boxProps: {
      styles: {
        width: '100%'
      }
    }
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(photoMainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(photoContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Form.PhotoEntity, {
    photo: use.attributes.states.photo,
    changePhoto: use.attributes.actions.changePhoto,
    submitting: use.attributes.states.submitting,
    changeError: use.error.actions.changeError,
    setSubmitting: use.attributes.actions.setSubmitting,
    props: propsPhoto
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(nameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.attributes.actions.changeName,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.name
      },
      styles: {
        width: '100%'
      }
    }, nameInputProps)
  }), isPersonalForm && /*#__PURE__*/_react["default"].createElement(_Input.InputLastName, {
    changeLastName: use.attributes.actions.changeLastName,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.lastName
      },
      styles: {
        width: '100%'
      }
    }, lastNameInputProps)
  }), /*#__PURE__*/_react["default"].createElement(ButtonStatus, null), /*#__PURE__*/_react["default"].createElement(ButtonType, null)))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, emailPhoneConatinerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputEmail, {
    changeEmail: use.attributes.actions.changeEmail,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.email
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, emailInputProps)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputPhone, {
    changePhone: use.attributes.actions.changePhone,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.phone
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, phoneInputProps)
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(addressListContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_List.List, (0, _extends2["default"])({
    title: "Direcciones",
    items: items,
    headers: headers,
    columns: 6,
    propsPagination: {
      currentPage: use.paginations.states.currentPage,
      setCurrentPage: use.paginations.actions.setCurrentPage,
      totalPages: totalPages
    },
    actionButton: {
      title: 'Agregar',
      buttonProps: {
        onClick: function onClick() {
          return use.pages.actions.onAddAddress();
        }
      }
    }
  }, addressListProps))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(documentListContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_List.List, (0, _extends2["default"])({
    title: "Documentos",
    items: documentItems,
    headers: documentHeaders,
    columns: 4,
    propsPagination: {
      currentPage: use.paginations.states.documentCurrentPage,
      setCurrentPage: use.paginations.actions.setDocumentCurrentPage,
      totalPages: documentTotalPages
    },
    actionButton: {
      title: 'Agregar',
      buttonProps: {
        onClick: function onClick() {
          return use.pages.actions.onAddDocument();
        }
      }
    }
  }, documentListProps))))));
};