export const AllRoles = [
  {
    name: 'Usuarios',
    permissions: [
      { name: 'Obtener', value: 'usersGet' },
      { name: 'Crear', value: 'usersCreate' },
      { name: 'Actualizar', value: 'usersUpdate' },
      { name: 'Borrar', value: 'usersDelete' },
    ],
  },
  {
    name: 'Clientes',
    permissions: [
      { name: 'Obtener', value: 'customerGet' },
      { name: 'Crear', value: 'customerCreate' },
      { name: 'Actualizar', value: 'customerUpdate' },
      { name: 'Borrar', value: 'customerDelete' },
    ],
  },
  {
    name: 'Direcciones',
    permissions: [
      { name: 'Obtener', value: 'addressGet' },
      { name: 'Crear', value: 'addressCreate' },
      { name: 'Actualizar', value: 'addressUpdate' },
      { name: 'Borrar', value: 'addressDelete' },
    ],
  },
  {
    name: 'Tipos de documentos Ids',
    permissions: [
      { name: 'Obtener', value: 'typeDocumentIdGet' },
      { name: 'Crear', value: 'typeDocumentIdCreate' },
      { name: 'Actualizar', value: 'typeDocumentIdUpdate' },
      { name: 'Borrar', value: 'typeDocumentIdDelete' },
    ],
  },
  {
    name: 'Documentos Ids',
    permissions: [
      { name: 'Obtener', value: 'documentIdGet' },
      { name: 'Crear', value: 'documentIdCreate' },
      { name: 'Actualizar', value: 'documentIdUpdate' },
      { name: 'Borrar', value: 'documentIdDelete' },
    ],
  },
  {
    name: 'Monedas',
    permissions: [
      { name: 'Obtener', value: 'currenciesGet' },
      { name: 'Crear', value: 'currenciesCreate' },
      { name: 'Actualizar', value: 'currenciesUpdate' },
      { name: 'Borrar', value: 'currenciesDelete' },
    ],
  },
  {
    name: 'Sitios',
    permissions: [
      { name: 'Obtener', value: 'sitesGet' },
      { name: 'Crear', value: 'sitesCreate' },
      { name: 'Actualizar', value: 'sitesUpdate' },
      { name: 'Borrar', value: 'sitesDelete' },
    ],
  },
  {
    name: 'Roles',
    permissions: [
      { name: 'Obtener', value: 'rolesGet' },
      { name: 'Crear', value: 'rolesCreate' },
      { name: 'Actualizar', value: 'rolesUpdate' },
      { name: 'Borrar', value: 'rolesDelete' },
    ],
  },
  {
    name: 'Empleados',
    permissions: [
      { name: 'Obtener', value: 'employessGet' },
      { name: 'Crear', value: 'employessCreate' },
      { name: 'Actualizar', value: 'employessUpdate' },
      { name: 'Borrar', value: 'employessDelete' },
    ],
  },
  {
    name: 'Pagos',
    permissions: [
      { name: 'Obtener', value: 'paymentGet' },
      { name: 'Crear', value: 'paymentCreate' },
      { name: 'Actualizar', value: 'paymentUpdate' },
      { name: 'Borrar', value: 'paymentDelete' },
    ],
  },
  {
    name: 'Proveedores',
    permissions: [
      { name: 'Obtener', value: 'suppliersGet' },
      { name: 'Crear', value: 'suppliersCreate' },
      { name: 'Actualizar', value: 'suppliersUpdate' },
      { name: 'Borrar', value: 'suppliersDelete' },
    ],
  },
  {
    name: 'Pedidos',
    permissions: [
      { name: 'Obtener', value: 'ordersGet' },
      { name: 'Crear', value: 'ordersCreate' },
      { name: 'Actualizar', value: 'ordersUpdate' },
      { name: 'Borrar', value: 'ordersDelete' },
    ],
  },
  {
    name: 'Categorías',
    permissions: [
      { name: 'Obtener', value: 'categoryGet' },
      { name: 'Crear', value: 'categoryCreate' },
      { name: 'Actualizar', value: 'categoryUpdate' },
      { name: 'Borrar', value: 'categoryDelete' },
    ],
  },
  {
    name: 'Proyectos',
    permissions: [
      { name: 'Obtener', value: 'projectsGet' },
      { name: 'Crear', value: 'projectsCreate' },
      { name: 'Actualizar', value: 'projectsUpdate' },
      { name: 'Borrar', value: 'projectsDelete' },
    ],
  },
  {
    name: 'Productos',
    permissions: [
      { name: 'Obtener', value: 'productsGet' },
      { name: 'Crear', value: 'productsCreate' },
      { name: 'Actualizar', value: 'productsUpdate' },
      { name: 'Borrar', value: 'productsDelete' },
    ],
  },
  {
    name: 'Depositos',
    permissions: [
      { name: 'Obtener', value: 'storagesGet' },
      { name: 'Crear', value: 'storagesCreate' },
      { name: 'Actualizar', value: 'storagesUpdate' },
      { name: 'Borrar', value: 'storagesDelete' },
    ],
  },
  {
    name: 'Presupuestos',
    permissions: [
      { name: 'Obtener', value: 'budgetsGet' },
      { name: 'Crear', value: 'budgetsCreate' },
      { name: 'Actualizar', value: 'budgetsUpdate' },
      { name: 'Borrar', value: 'budgetsDelete' },
    ],
  },
  {
    name: 'Tipos de Cajas de Efectivo',
    permissions: [
      { name: 'Obtener', value: 'crtGet' },
      { name: 'Crear', value: 'crtCreate' },
      { name: 'Actualizar', value: 'crtUpdate' },
      { name: 'Borrar', value: 'crtDelete' },
    ],
  },
  {
    name: 'Metodos de pago',
    permissions: [{ name: 'Obtener', value: 'pmGet' }],
  },
  {
    name: 'Cajas de Efectivo',
    permissions: [
      { name: 'Obtener', value: 'crGet' },
      { name: 'Crear', value: 'crCreate' },
      { name: 'Actualizar', value: 'crUpdate' },
      { name: 'Borrar', value: 'crDelete' },
    ],
  },
  {
    name: 'Transacciones de Cajas de Efectivo',
    permissions: [{ name: 'Obtener', value: 'crtransactionsGet' }],
  },
  {
    name: 'Tipos de bancos',
    permissions: [
      { name: 'Obtener', value: 'bank-typeCreate' },
      { name: 'Crear', value: 'bank-typeGet' },
      { name: 'Actualizar', value: 'bank-typeUpdate' },
      { name: 'Borrar', value: 'bank-typeDelete' },
    ],
  },
  {
    name: 'Cuentas de billeteras',
    permissions: [
      { name: 'Obtener', value: 'wallet-accountCreate' },
      { name: 'Crear', value: 'wallet-accountGet' },
      { name: 'Actualizar', value: 'wallet-accountUpdate' },
      { name: 'Borrar', value: 'wallet-accountDelete' },
    ],
  },
  {
    name: 'Beneficiarios de billeteras',
    permissions: [
      { name: 'Obtener', value: 'wallet-beneficiariesCreate' },
      { name: 'Crear', value: 'wallet-beneficiariesGet' },
      { name: 'Actualizar', value: 'wallet-beneficiariesUpdate' },
      { name: 'Borrar', value: 'wallet-beneficiariesDelete' },
    ],
  },
  {
    name: 'Transferencias de billeteras en trasito',
    permissions: [
      { name: 'Obtener', value: 'wt-in-transitCreate' },
      { name: 'Crear', value: 'wt-in-transitGet' },
      { name: 'Actualizar', value: 'wallet-wt-in-transitUpdate' },
      { name: 'Borrar', value: 'wt-in-transitDelete' },
    ],
  },
  {
    name: 'Cuentas por cobrar',
    permissions: [
      { name: 'Obtener', value: 'accounts-receivableCreate' },
      { name: 'Crear', value: 'accounts-receivableGet' },
      { name: 'Actualizar', value: 'accounts-receivableUpdate' },
      { name: 'Borrar', value: 'accounts-receivableDelete' },
    ],
  },
  {
    name: 'Referidos',
    permissions: [
      { name: 'Obtener', value: 'referredCreate' },
      { name: 'Crear', value: 'referredGet' },
      { name: 'Actualizar', value: 'referredUpdate' },
      { name: 'Borrar', value: 'referredDelete' },
    ],
  },
  {
    name: 'Pagos de créditos',
    permissions: [
      { name: 'Obtener', value: 'credit-order-paymentsCreate' },
      { name: 'Crear', value: 'credit-order-paymentsGet' },
      { name: 'Actualizar', value: 'credit-order-paymentsUpdate' },
      { name: 'Borrar', value: 'credit-order-paymentsDelete' },
    ],
  },
  {
    name: 'Pagos de Transacciones bancarias',
    permissions: [
      { name: 'Obtener', value: 'banking-transactions-paymentsGet' },
      { name: 'Crear', value: 'banking-transactions-paymentsCreate' },
      { name: 'Actualizar', value: 'banking-transactions-paymentsUpdate' },
      { name: 'Borrar', value: 'banking-transactions-paymentsDelete' },
    ],
  },
  {
    name: 'Devolución de pedidos',
    permissions: [
      { name: 'Crear', value: 'order-return-paymentsCreate' },
      { name: 'Actualizar', value: 'order-return-paymentsUpdate' },
      { name: 'Borrar', value: 'order-return-paymentsDelete' },
      { name: 'Obtener', value: 'order-return-paymentsGet' },
    ],
  },
  {
    name: 'Corridas de pago',
    permissions: [
      { name: 'Crear', value: 'pay-runCreate' },
      { name: 'Actualizar', value: 'pay-runUpdate' },
      { name: 'Borrar', value: 'pay-runDelete' },
      { name: 'Obtener', value: 'pay-runGet' },
    ],
  },
  {
    name: 'Descuentos',
    permissions: [
      { name: 'Crear', value: 'discountCreate' },
      { name: 'Actualizar', value: 'discountUpdate' },
      { name: 'Borrar', value: 'discountDelete' },
      { name: 'Obtener', value: 'discountGet' },
    ],
  },
  {
    name: 'Zona de Envíos',
    permissions: [
      { name: 'Crear', value: 'shipping-areasCreate' },
      { name: 'Actualizar', value: 'shipping-areasUpdate' },
      { name: 'Borrar', value: 'shipping-areasDelete' },
      { name: 'Obtener', value: 'shipping-areasGet' },
    ],
  },
  {
    name: 'Métodos de Envíos',
    permissions: [
      { name: 'Crear', value: 'shipping-methodsCreate' },
      { name: 'Actualizar', value: 'shipping-methodsUpdate' },
      { name: 'Borrar', value: 'shipping-methodsDelete' },
      { name: 'Obtener', value: 'shipping-methodsGet' },
    ],
  },
];
