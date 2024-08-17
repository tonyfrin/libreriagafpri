"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiEntity = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _helpers = require("../../../helpers");
var _constants = require("../../../constants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useGafpriApiEntity = exports.useGafpriApiEntity = function useGafpriApiEntity(_ref) {
  var usePages = _ref.usePages,
    useAttributes = _ref.useAttributes,
    useError = _ref.useError,
    token = _ref.token,
    getAddData = _ref.getAddData,
    getUpdateData = _ref.getUpdateData;
  var newError = function newError(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: usePages.actions.onAdd
    });
  };
  var newErrorUpdate = function newErrorUpdate(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: usePages.actions.onUpdate
    });
  };
  var successAdd = function successAdd(data) {
    usePages.actions.returnInit();
    if (getAddData) {
      getAddData(data);
    }
  };
  var add = function add() {
    if (useAttributes.states.nameValid && useAttributes.states.lastNameValid && useAttributes.states.typeDocumentIdIdValid && useAttributes.states.indexValid && useAttributes.states.digitValid && useAttributes.states.addressTypeValid && useAttributes.states.address1Valid && useAttributes.states.address2Valid && useAttributes.states.cityValid && useAttributes.states.stateCountryValid && useAttributes.states.countryValid && useAttributes.states.postCodeValid && useAttributes.states.emailValid && useAttributes.states.phoneValid && useAttributes.states.typeValid && useAttributes.states.photoValid && useAttributes.states.statusValid && token) {
      var payload = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
        name: useAttributes.states.name,
        type: useAttributes.states.type,
        status: useAttributes.states.status
      }, useAttributes.states.lastName ? {
        lastName: useAttributes.states.lastName
      } : {}), useAttributes.states.email ? {
        email: useAttributes.states.email
      } : {}), useAttributes.states.phone ? {
        phone: useAttributes.states.phone
      } : {}), useAttributes.states.photo ? {
        photo: useAttributes.states.photo
      } : {}), {}, {
        documentId: _objectSpread(_objectSpread({
          typeDocumentIdId: useAttributes.states.typeDocumentIdId
        }, useAttributes.states.index !== 'null' ? {
          index: useAttributes.states.index
        } : {}), {}, {
          digit: useAttributes.states.digit
        }),
        address: _objectSpread(_objectSpread({
          type: useAttributes.states.addressType,
          address1: useAttributes.states.address1
        }, useAttributes.states.address2 ? {
          address2: useAttributes.states.address2
        } : {}), {}, {
          city: useAttributes.states.city,
          state: useAttributes.states.state,
          country: useAttributes.states.country
        }, useAttributes.states.postCode ? {
          postCode: useAttributes.states.postCode
        } : {})
      });
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.ENTITY_ROUTE,
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: successAdd,
        functionError: newError
      });
    }
  };
  var successUpdate = function successUpdate(data) {
    usePages.actions.returnInit();
    if (getUpdateData) {
      getUpdateData(data);
    }
  };
  var update = function update() {
    if (useAttributes.states.nameValid && useAttributes.states.lastNameValid && useAttributes.states.typeValid && useAttributes.states.photoValid && useAttributes.states.statusValid && useAttributes.states.phoneValid && useAttributes.states.emailValid && token) {
      var payload = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, useAttributes.states.name ? {
        name: useAttributes.states.name
      } : {}), useAttributes.states.type ? {
        type: useAttributes.states.type
      } : {}), useAttributes.states.status ? {
        status: useAttributes.states.status
      } : {}), useAttributes.states.lastName ? {
        lastName: useAttributes.states.lastName
      } : {}), useAttributes.states.email ? {
        email: useAttributes.states.email
      } : {}), useAttributes.states.phone ? {
        phone: useAttributes.states.phone
      } : {}), useAttributes.states.photo ? {
        photo: useAttributes.states.photo
      } : {});
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.ENTITY_ROUTE, "/").concat(useAttributes.states.currentId),
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: successUpdate,
        functionError: newErrorUpdate
      });
    }
  };
  var successUpdateAddressDocumentId = function successUpdateAddressDocumentId(data) {
    usePages.actions.goUpdate(useAttributes.states.currentId);
    usePages.actions.returnInit();
    if (getUpdateData) {
      getUpdateData(data);
    }
  };
  var updateAddress = function updateAddress(newAddress) {
    if (token) {
      var payload = {
        address: newAddress
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.ENTITY_ROUTE, "/").concat(useAttributes.states.currentId),
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: successUpdateAddressDocumentId,
        functionError: newErrorUpdate
      });
    }
  };
  var updateDocument = function updateDocument(newDocument) {
    if (token) {
      var payload = {
        documentId: newDocument
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.ENTITY_ROUTE, "/").concat(useAttributes.states.currentId),
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: function functionSuccess() {
          return usePages.actions.goUpdate(useAttributes.states.currentId);
        },
        functionError: newErrorUpdate
      });
    }
  };
  var addAddress = function addAddress() {
    if (useAttributes.states.addressTypeValid && useAttributes.states.address1Valid && useAttributes.states.address2Valid && useAttributes.states.cityValid && useAttributes.states.stateCountryValid && useAttributes.states.countryValid && useAttributes.states.postCodeValid) {
      var updateNewAddress = useAttributes.states.address;
      if (useAttributes.states.addressType === 'bill') {
        updateNewAddress = useAttributes.actions.changeTypeInAllAddresses(useAttributes.states.address, 'shipping');
      }
      var newAddress = _objectSpread(_objectSpread(_objectSpread({
        type: useAttributes.states.addressType,
        address1: useAttributes.states.address1
      }, useAttributes.states.address2 ? {
        address2: useAttributes.states.address2
      } : {}), {}, {
        city: useAttributes.states.city,
        state: useAttributes.states.state,
        country: useAttributes.states.country
      }, useAttributes.states.postCode ? {
        postCode: useAttributes.states.postCode
      } : {}), {}, {
        entityId: useAttributes.states.currentId
      });
      updateNewAddress.push(newAddress);
      updateAddress(updateNewAddress);
    }
  };
  var addDocument = function addDocument() {
    if (useAttributes.states.typeDocumentIdIdValid && useAttributes.states.indexValid && useAttributes.states.digitValid && useAttributes.states.documentPhotoValid) {
      var newDocument = [_objectSpread(_objectSpread({
        typeDocumentIdId: useAttributes.states.typeDocumentIdId
      }, useAttributes.states.index !== 'null' ? {
        index: useAttributes.states.index
      } : {}), {}, {
        digit: useAttributes.states.digit,
        photo: useAttributes.states.documentPhoto
      })];
      updateDocument(newDocument);
    }
  };
  var changeAddress = function changeAddress(id) {
    var newAddress = useAttributes.actions.changeTypeInAllAddresses(useAttributes.states.address, 'shipping');
    var updateNewAddress = useAttributes.actions.updateAddressTypeById(newAddress, id, 'bill');
    useAttributes.actions.setAddress(updateNewAddress);
    updateAddress(updateNewAddress);
  };
  var deleteAddress = function deleteAddress(id) {
    if (token) {
      var payload = {
        address: [{
          id: id
        }]
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'DELETE',
        initRoute: "".concat(_constants.ENTITY_ROUTE, "/").concat(useAttributes.states.currentId),
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: function functionSuccess() {
          return usePages.actions.goUpdate(useAttributes.states.currentId);
        },
        functionError: newErrorUpdate
      });
    }
  };
  var deleteDocument = function deleteDocument(id) {
    if (useAttributes.states.documentId.length > 1 && token) {
      var payload = {
        documentId: [{
          id: id
        }]
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'DELETE',
        initRoute: "".concat(_constants.ENTITY_ROUTE, "/").concat(useAttributes.states.currentId),
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: function functionSuccess() {
          return usePages.actions.goUpdate(useAttributes.states.currentId);
        },
        functionError: newErrorUpdate
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('No se puede borrar el documento principal');
    }
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    addAddress: addAddress,
    changeAddress: changeAddress,
    newError: newError,
    newErrorUpdate: newErrorUpdate,
    add: add,
    addDocument: addDocument,
    deleteAddress: deleteAddress,
    deleteDocument: deleteDocument,
    update: update
  };
  return {
    actions: actions
  };
};