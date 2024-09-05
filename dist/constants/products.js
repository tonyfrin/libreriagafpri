"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VISIBILITY_DEFAULT = exports.VISIBILITY = exports.TAX_STATUS_DEFAULT = exports.TAX_STATUS = exports.PRODUCT_TYPES_DEFAULT = exports.PRODUCT_TYPES = exports.PRODUCT_STATUS_DEFAULT = exports.PRODUCT_STATUS = exports.PRODUCT_IMAGE_DEFAULT = exports.PACKAGE_TYPE_DEFAULT = exports.PACKAGE_TYPE = void 0;
var PRODUCT_TYPES = exports.PRODUCT_TYPES = [{
  value: 'product',
  label: 'Producto'
}, {
  value: 'spare_parts',
  label: 'Repuesto'
}, {
  value: 'service',
  label: 'Servicio'
}];
var PRODUCT_TYPES_DEFAULT = exports.PRODUCT_TYPES_DEFAULT = {
  value: '',
  label: 'Elije tipo del producto'
};
var PRODUCT_STATUS = exports.PRODUCT_STATUS = [{
  value: 'publish',
  label: 'Publicado'
}, {
  value: 'draft',
  label: 'Borrador'
}, {
  value: 'pending',
  label: 'Pendiente'
}, {
  value: 'private',
  label: 'Privado'
}];
var PRODUCT_STATUS_DEFAULT = exports.PRODUCT_STATUS_DEFAULT = {
  value: '',
  label: 'Elije estado del producto'
};
var TAX_STATUS = exports.TAX_STATUS = [{
  value: 'taxable',
  label: 'Gravable'
}, {
  value: 'none',
  label: 'Excento'
}];
var TAX_STATUS_DEFAULT = exports.TAX_STATUS_DEFAULT = {
  value: '',
  label: 'Elije estado del impuesto'
};
var PACKAGE_TYPE = exports.PACKAGE_TYPE = [{
  value: 'box',
  label: 'Caja'
}, {
  value: 'envelope',
  label: 'Sobre'
}, {
  value: 'bag',
  label: 'Bolsa'
}, {
  value: 'none',
  label: 'Sin paquete'
}];
var PACKAGE_TYPE_DEFAULT = exports.PACKAGE_TYPE_DEFAULT = {
  value: '',
  label: 'Elije tipo de paquete'
};
var VISIBILITY = exports.VISIBILITY = [{
  value: 'visible',
  label: 'Visible'
}, {
  value: 'hidden',
  label: 'Oculto'
}];
var VISIBILITY_DEFAULT = exports.VISIBILITY_DEFAULT = {
  value: '',
  label: 'Elije visibilidad'
};
var PRODUCT_IMAGE_DEFAULT = exports.PRODUCT_IMAGE_DEFAULT = 'https://categorygafpri.s3.us-east-2.amazonaws.com/2b5ibjbcbpco-woocommerce-placeholder.png';