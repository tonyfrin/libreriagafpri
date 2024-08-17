"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogForm = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Containers = require("../Containers");
var _Form = require("../Form");
var _CheckBox = require("../CheckBox");
var _Input = require("../Input");
var _Button = require("../Button");
var _Slider = require("../Slider");
var _templateObject, _templateObject2, _templateObject3;
var defaultFormContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n"])));
var defaultImageContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var defaultTitleContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var CatalogForm = exports.CatalogForm = function CatalogForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var current = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    if (current) {
      if (current.galleryImage) {
        use.attributes.actions.setGalleryImage(current.galleryImage);
      }
      if (current.categoryId) {
        use.attributes.actions.changeCategory(current.categoryId);
      }
      if (current.tags) {
        use.attributes.actions.setTags(current.tags);
      }
      if (current.catalogOrder) {
        use.attributes.actions.changeCatalogOrder("".concat(current.catalogOrder));
      }
    }
  }, [current]);
  var title1Text = isAddForm ? 'Catálogo' : 'Actualización de Catálogo';
  var title2Text = isAddForm ? '' : '';
  var buttonTitle = 'Siguiente';
  var buttonAction = use.subPages.actions.onInventory;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.subPages.actions.onPrice();
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
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'block'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Slider.SliderHorizontal, {
    title: "Galer\xEDa de Im\xE1genes",
    images: use.attributes.states.galleryImage,
    remove: use.attributes.actions.removeGalleryImage
  }), /*#__PURE__*/_react["default"].createElement(_Form.PhotoGalleryForm, {
    changePhoto: use.attributes.actions.changeGalleryImage,
    formId: "photo-form"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultFormContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultImageContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox.ScrollableContainer, {
    title: "Categor\xEDas",
    styles: {
      maxWidth: '100%',
      customStyle: "\n                      min-width: 237px;\n                      min-height: 70px;\n                    "
    }
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox.CategoriesCheckBox, {
    change: use.attributes.actions.changeCategory,
    selectedCategoryId: use.attributes.states.category,
    categoriesData: use.attributes.states.categoryOptions
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultTitleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputTags, {
    change: use.attributes.actions.changeTags,
    setSelected: use.attributes.actions.setSelectedTagsValue,
    props: {
      styles: {
        width: '100%'
      },
      inputProps: {
        value: use.attributes.states.selectedTagsValue
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.FloatingButtons, {
    items: use.attributes.states.tags,
    remove: use.attributes.actions.removeTag
  })))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputCatalogOrder, {
    change: use.attributes.actions.changeCatalogOrder,
    props: {
      styles: {
        width: '50%'
      },
      containerStyles: {
        custom: "\n                      display: flex;\n                      flex-direction: column;\n                  "
      },
      inputProps: {
        defaultValue: use.attributes.states.catalogOrder
      }
    }
  }))));
};