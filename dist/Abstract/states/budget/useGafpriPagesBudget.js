"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesBudget = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _helpers = require("../../../helpers");
var useGafpriPagesBudget = exports.useGafpriPagesBudget = function useGafpriPagesBudget(_ref) {
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
    isEntityForm = _useState6[0],
    setIsEntityForm = _useState6[1]; // formulario de Add Entity
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isEntitySearch = _useState8[0],
    setIsEntitySearch = _useState8[1]; // tabla de busqueda del cliente
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isAddEntity = _useState10[0],
    setIsAddEntity = _useState10[1]; // formulario de Add Entity
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    isSales = _useState12[0],
    setIsSales = _useState12[1]; // formulario de ventas
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    isProductSearch = _useState14[0],
    setIsProductSearch = _useState14[1]; // tabla de busqueda de productos
  var _useState15 = (0, _react.useState)(false),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    isPrintTable = _useState16[0],
    setIsPrintTable = _useState16[1]; // tabla de busqueda de productos
  var _useState17 = (0, _react.useState)(false),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    isPrint = _useState18[0],
    setIsPrint = _useState18[1]; // tabla de busqueda de productos

  // Funciones de paginas
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(false);
    (0, _helpers.scrollToTop)();
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(false);
    (0, _helpers.scrollToTop)();
  };
  var onEntityForm = function onEntityForm() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(true);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(false);
    (0, _helpers.scrollToTop)();
  };
  var onEntitySearch = function onEntitySearch() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(true);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(false);
    (0, _helpers.scrollToTop)();
  };
  var onAddEntity = function onAddEntity() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(true);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(false);
    (0, _helpers.scrollToTop)();
  };
  var onSales = function onSales() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(true);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(false);
    (0, _helpers.scrollToTop)();
  };
  var onProductSearch = function onProductSearch() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(true);
    setIsPrintTable(false);
    setIsPrint(false);
    (0, _helpers.scrollToTop)();
  };
  var onPrintTable = function onPrintTable() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(true);
    setIsPrint(false);
    (0, _helpers.scrollToTop)();
  };
  var onPrint = function onPrint() {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(true);
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
  var goPrint = function goPrint(id) {
    useAttributes.actions.setCurrentId(id);
    onPrint();
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
    isEntityForm: isEntityForm,
    isEntitySearch: isEntitySearch,
    isAddEntity: isAddEntity,
    isSales: isSales,
    isProductSearch: isProductSearch,
    isPrintTable: isPrintTable,
    isPrint: isPrint
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onEntityForm: onEntityForm,
    onEntitySearch: onEntitySearch,
    onAddEntity: onAddEntity,
    onSales: onSales,
    onProductSearch: onProductSearch,
    onPrintTable: onPrintTable,
    goPrint: goPrint,
    onPrint: onPrint,
    returnInit: returnInit,
    processEntityBydocumentId: processEntityBydocumentId,
    processEntityByName: processEntityByName,
    selectEntity: selectEntity,
    processEntityByPhone: processEntityByPhone,
    processEntityByEmail: processEntityByEmail,
    processProductBySku: processProductBySku,
    selectproduct: selectproduct,
    processProductByName: processProductByName,
    goSalesEntity: goSalesEntity
  };
  return {
    states: states,
    actions: actions
  };
};