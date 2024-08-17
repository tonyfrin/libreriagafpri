"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllRoles = void 0;
var AllRoles = exports.AllRoles = [{
  name: 'Tipos de egresos',
  permissions: [{
    name: 'Obtener',
    value: 'expenses-typeGet'
  }, {
    name: 'Crear',
    value: 'expenses-typeCreate'
  }, {
    name: 'Actualizar',
    value: 'expenses-typeUpdate'
  }, {
    name: 'Borrar',
    value: 'expenses-typeDelete'
  }]
}, {
  name: 'Proyectos',
  permissions: [{
    name: 'Obtener',
    value: 'projectsGet'
  }, {
    name: 'Crear',
    value: 'projectsCreate'
  }, {
    name: 'Actualizar',
    value: 'projectsUpdate'
  }, {
    name: 'Borrar',
    value: 'projectsDelete'
  }]
}, {
  name: 'Tipos de bancos',
  permissions: [{
    name: 'Obtener',
    value: 'bank-typeGet'
  }, {
    name: 'Crear',
    value: 'bank-typeCreate'
  }, {
    name: 'Actualizar',
    value: 'bank-typeUpdate'
  }, {
    name: 'Borrar',
    value: 'bank-typeDelete'
  }]
}, {
  name: 'Presupuestos',
  permissions: [{
    name: 'Obtener',
    value: 'budgetsGet'
  }, {
    name: 'Crear',
    value: 'budgetsCreate'
  }, {
    name: 'Actualizar',
    value: 'budgetsUpdate'
  }]
}, {
  name: 'Tipos de Cajas de Efectivo',
  permissions: [{
    name: 'Obtener',
    value: 'cash-register-typeGet'
  }, {
    name: 'Crear',
    value: 'cash-register-typeCreate'
  }, {
    name: 'Actualizar',
    value: 'cash-register-typeUpdate'
  }, {
    name: 'Borrar',
    value: 'cash-register-typeDelete'
  }, {
    name: 'Conciliar',
    value: 'cash-register-typeConciliate'
  }]
}, {
  name: 'Monedas',
  permissions: [{
    name: 'Obtener',
    value: 'currenciesGet'
  }, {
    name: 'Crear',
    value: 'currenciesCreate'
  }, {
    name: 'Actualizar',
    value: 'currenciesUpdate'
  }, {
    name: 'Borrar',
    value: 'currenciesDelete'
  }]
}, {
  name: 'Sitios',
  permissions: [{
    name: 'Obtener',
    value: 'sitesGet'
  }, {
    name: 'Crear',
    value: 'sitesCreate'
  }, {
    name: 'Actualizar',
    value: 'sitesUpdate'
  }, {
    name: 'Borrar',
    value: 'sitesDelete'
  }]
}, {
  name: 'Cuentas por cobrar',
  permissions: [{
    name: 'Obtener',
    value: 'accounts-receivableGet'
  }, {
    name: 'Crear',
    value: 'accounts-receivableCreate'
  }, {
    name: 'Actualizar',
    value: 'accounts-receivableUpdate'
  }, {
    name: 'Borrar',
    value: 'accounts-receivableDelete'
  }]
}, {
  name: 'Egresos',
  permissions: [{
    name: 'Obtener',
    value: 'expensesGet'
  }, {
    name: 'Crear',
    value: 'expensesCreate'
  }]
}, {
  name: 'Ingresos',
  permissions: [{
    name: 'Obtener',
    value: 'incomeGet'
  }, {
    name: 'Crear',
    value: 'incomeCreate'
  }]
}, {
  name: 'Pedidos',
  permissions: [{
    name: 'Obtener',
    value: 'ordersGet'
  }, {
    name: 'Crear',
    value: 'ordersCreate'
  }, {
    name: 'Actualizar',
    value: 'ordersUpdate'
  }, {
    name: 'Cancelar',
    value: 'ordersDelete'
  }]
}, {
  name: 'Pagos de créditos',
  permissions: [{
    name: 'Crear',
    value: 'payment-creditCreate'
  }]
}, {
  name: 'Pagos de pedidos',
  permissions: [{
    name: 'Crear',
    value: 'payment-orderCreate'
  }]
}, {
  name: 'Pagos de devolución de pedidos',
  permissions: [{
    name: 'Crear',
    value: 'payment-order-returnCreate'
  }]
}, {
  name: 'Transferencias entre bancos',
  permissions: [{
    name: 'Crear',
    value: 'payment-transfer-bankCreate'
  }]
}, {
  name: 'Transferencias entre cajas',
  permissions: [{
    name: 'Crear',
    value: 'payment-transfer-cash-registerCreate'
  }]
}, {
  name: 'Categoría de Productos',
  permissions: [{
    name: 'Obtener',
    value: 'categoryGet'
  }, {
    name: 'Crear',
    value: 'categoryCreate'
  }, {
    name: 'Actualizar',
    value: 'categoryUpdate'
  }, {
    name: 'Borrar',
    value: 'categoryDelete'
  }]
}, {
  name: 'Productos',
  permissions: [{
    name: 'Obtener',
    value: 'productsGet'
  }, {
    name: 'Crear',
    value: 'productsCreate'
  }, {
    name: 'Actualizar',
    value: 'productsUpdate'
  }, {
    name: 'Borrar',
    value: 'productsDelete'
  }]
}, {
  name: 'Areas de envio',
  permissions: [{
    name: 'Obtener',
    value: 'shipping-areasGet'
  }, {
    name: 'Crear',
    value: 'shipping-areasCreate'
  }, {
    name: 'Actualizar',
    value: 'shipping-areasUpdate'
  }, {
    name: 'Borrar',
    value: 'shipping-areasDelete'
  }]
}, {
  name: 'Metodos de envio',
  permissions: [{
    name: 'Obtener',
    value: 'shipping-methodsGet'
  }, {
    name: 'Crear',
    value: 'shipping-methodsCreate'
  }, {
    name: 'Actualizar',
    value: 'shipping-methodsUpdate'
  }, {
    name: 'Borrar',
    value: 'shipping-methodsDelete'
  }]
}, {
  name: 'Depositos',
  permissions: [{
    name: 'Obtener',
    value: 'storageGet'
  }, {
    name: 'Crear',
    value: 'storageCreate'
  }, {
    name: 'Actualizar',
    value: 'storageUpdate'
  }, {
    name: 'Borrar',
    value: 'storageDelete'
  }]
}, {
  name: 'Depositos Stock',
  permissions: [{
    name: 'Obtener',
    value: 'storage-stockGet'
  }]
}, {
  name: 'Clases de impuestos',
  permissions: [{
    name: 'Obtener',
    value: 'tax-classesGet'
  }, {
    name: 'Crear',
    value: 'tax-classesCreate'
  }, {
    name: 'Actualizar',
    value: 'tax-classesUpdate'
  }, {
    name: 'Borrar',
    value: 'tax-classesDelete'
  }]
}, {
  name: 'Tarifas de impuestos',
  permissions: [{
    name: 'Obtener',
    value: 'tax-ratesGet'
  }, {
    name: 'Crear',
    value: 'tax-ratesCreate'
  }, {
    name: 'Actualizar',
    value: 'tax-ratesUpdate'
  }, {
    name: 'Borrar',
    value: 'tax-ratesDelete'
  }]
}, {
  name: 'Entidas',
  permissions: [{
    name: 'Obtener',
    value: 'entityGet'
  }, {
    name: 'Crear',
    value: 'entityCreate'
  }, {
    name: 'Actualizar',
    value: 'entityUpdate'
  }, {
    name: 'Borrar',
    value: 'entityDelete'
  }]
}, {
  name: 'Roles',
  permissions: [{
    name: 'Obtener',
    value: 'rolesGet'
  }, {
    name: 'Crear',
    value: 'rolesCreate'
  }, {
    name: 'Actualizar',
    value: 'rolesUpdate'
  }, {
    name: 'Borrar',
    value: 'rolesDelete'
  }]
}, {
  name: 'Tipos de documentos',
  permissions: [{
    name: 'Obtener',
    value: 'type-document-idGet'
  }, {
    name: 'Crear',
    value: 'type-document-idCreate'
  }, {
    name: 'Actualizar',
    value: 'type-document-idUpdate'
  }, {
    name: 'Borrar',
    value: 'type-document-idDelete'
  }]
}, {
  name: 'Usuarios',
  permissions: [{
    name: 'Obtener',
    value: 'usersGet'
  }, {
    name: 'Crear',
    value: 'usersCreate'
  }, {
    name: 'Actualizar',
    value: 'usersUpdate'
  }]
}, {
  name: 'Cuentas de billetara',
  permissions: [{
    name: 'Obtener',
    value: 'wallet-accountGet'
  }, {
    name: 'Crear',
    value: 'wallet-accountCreate'
  }, {
    name: 'Actualizar',
    value: 'wallet-accountUpdate'
  }, {
    name: 'Borrar',
    value: 'wallet-accountDelete'
  }]
}, {
  name: 'Metodos de Pago',
  permissions: [{
    name: 'Obtener',
    value: 'payment-methodsGet'
  }, {
    name: 'Actualizar',
    value: 'payment-methodsUpdate'
  }, {
    name: 'Crear',
    value: 'payment-methodsCreate'
  }, {
    name: 'Borrar',
    value: 'payment-methodsDelete'
  }]
}];