"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesOrder = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _helpers = require("../../../helpers");
var useGafpriPagesOrder = exports.useGafpriPagesOrder = function useGafpriPagesOrder(_ref) {
  var useAttributes = _ref.useAttributes,
    useEntity = _ref.useEntity,
    useProducts = _ref.useProducts,
    useProductItems = _ref.useProductItems;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isFetching = _useState2[0],
    setIsFetching = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isInit = _useState4[0],
    setIsInit = _useState4[1]; // busqueda del cliente
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    isEntitySearch = _useState6[0],
    setIsEntitySearch = _useState6[1]; // tabla de busqueda del cliente
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isAddEntity = _useState8[0],
    setIsAddEntity = _useState8[1]; // formulario de Add Entity
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isSales = _useState10[0],
    setIsSales = _useState10[1]; // formulario de ventas
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    isProductSearch = _useState12[0],
    setIsProductSearch = _useState12[1]; // tabla de busqueda de productos

  var _useState13 = (0, _react.useState)(true),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    isOrderList = _useState14[0],
    setIsOrderList = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    isOrderView = _useState16[0],
    setIsOrderView = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    isOrderPayment = _useState18[0],
    setIsOrderPayment = _useState18[1];

  // Funciones de paginas
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onEntitySearch = function onEntitySearch() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(true);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onAddEntity = function onAddEntity() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(true);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onSales = function onSales() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(true);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onProductSearch = function onProductSearch() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(true);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onOrderList = function onOrderList() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(true);
    setIsOrderView(false);
    setIsOrderPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onOrderView = function onOrderView() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(true);
    setIsOrderPayment(false);
    (0, _helpers.scrollToTop)();
  };
  var onOrderPayment = function onOrderPayment() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(true);
    (0, _helpers.scrollToTop)();
  };
  var goSalesEntity = function goSalesEntity(entity) {
    useAttributes.actions.setEntity(entity);
    useAttributes.actions.changeCustomerId(entity.id);
    onSales();
  };
  var goSalesProduct = function goSalesProduct(product) {
    useProductItems.actions.addItemToCart(product);
    onSales();
  };
  var goOrderView = function goOrderView(id) {
    useAttributes.actions.setCurrentId(id);
    onOrderView();
  };
  var returnInit = function returnInit() {
    useAttributes.actions.infoReset();
    onInit();
  };
  var processEntityBydocumentId = function processEntityBydocumentId(event) {
    if (event.key === 'Enter') {
      var currentEntity = useEntity.data.actions.findByDocumentIdDigit(useEntity.attributes.states.digit);
      if (currentEntity) {
        goSalesEntity(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };
  var processEntityByName = function processEntityByName(event) {
    if (event.key === 'Enter') {
      useEntity.paginations.actions.changeSearchBy({
        value: 'name',
        label: 'Nombre'
      });
      useEntity.paginations.actions.setSearchTerm(useEntity.attributes.states.name);
      onEntitySearch();
    }
  };
  var selectEntity = function selectEntity(id) {
    var currentEntity = useEntity.data.actions.getById(id);
    if (currentEntity) {
      goSalesEntity(currentEntity);
    }
  };
  var processEntityByPhone = function processEntityByPhone(event) {
    if (event.key === 'Enter') {
      var currentEntity = useEntity.data.actions.findByPhone(useEntity.attributes.states.phone);
      if (currentEntity) {
        goSalesEntity(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };
  var processEntityByEmail = function processEntityByEmail(event) {
    if (event.key === 'Enter') {
      var currentEntity = useEntity.data.actions.findByEmail(useEntity.attributes.states.email);
      if (currentEntity) {
        goSalesEntity(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };
  var processProductBySku = function processProductBySku(event) {
    if (event.key === 'Enter') {
      useProducts.attributes.actions.changeSku('');
      var currentProduct = useProducts.data.actions.findBySku(useProducts.attributes.states.sku);
      if (currentProduct) {
        useProductItems.actions.addItemToCart(currentProduct);
      } else {
        useProducts.paginations.actions.changeSearchBy({
          value: 'sku',
          label: 'Código'
        });
        useProducts.paginations.actions.setSearchTerm(useProducts.attributes.states.sku);
        onProductSearch();
      }
    }
  };
  var processProductByName = function processProductByName(event) {
    if (event.key === 'Enter') {
      useProducts.attributes.actions.changeName('');
      useProducts.paginations.actions.changeSearchBy({
        value: 'name',
        label: 'Nombre'
      });
      useProducts.paginations.actions.setSearchTerm(useProducts.attributes.states.name);
      onProductSearch();
    }
  };
  var selectproduct = function selectproduct(id) {
    var currentProduct = useProducts.data.actions.getById(id);
    if (currentProduct) {
      goSalesProduct(currentProduct);
    }
  };
  var states = {
    isFetching: isFetching,
    isInit: isInit,
    isEntitySearch: isEntitySearch,
    isAddEntity: isAddEntity,
    isSales: isSales,
    isProductSearch: isProductSearch,
    isOrderList: isOrderList,
    isOrderView: isOrderView,
    isOrderPayment: isOrderPayment
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onEntitySearch: onEntitySearch,
    onAddEntity: onAddEntity,
    onSales: onSales,
    onProductSearch: onProductSearch,
    returnInit: returnInit,
    processEntityBydocumentId: processEntityBydocumentId,
    processEntityByName: processEntityByName,
    selectEntity: selectEntity,
    processEntityByPhone: processEntityByPhone,
    processEntityByEmail: processEntityByEmail,
    processProductBySku: processProductBySku,
    selectproduct: selectproduct,
    processProductByName: processProductByName,
    goSalesEntity: goSalesEntity,
    onOrderList: onOrderList,
    onOrderView: onOrderView,
    goOrderView: goOrderView,
    onOrderPayment: onOrderPayment
  };
  return {
    states: states,
    actions: actions
  };
};