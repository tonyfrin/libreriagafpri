export const PRODUCT_TYPES = [
  { value: 'product', label: 'Producto' },
  { value: 'spare_parts', label: 'Repuesto' },
  { value: 'service', label: 'Servicio' },
];

export const PRODUCT_TYPES_DEFAULT = {
  value: '',
  label: 'Elije tipo del producto',
};

export const PRODUCT_STATUS = [
  { value: 'publish', label: 'Publicado' },
  { value: 'draft', label: 'Borrador' },
  { value: 'pending', label: 'Pendiente' },
  { value: 'private', label: 'Privado' },
];

export const PRODUCT_STATUS_DEFAULT = {
  value: '',
  label: 'Elije estado del producto',
};

export const TAX_STATUS = [
  { value: 'taxable', label: 'Gravable' },
  { value: 'none', label: 'Excento' },
];

export const TAX_STATUS_DEFAULT = {
  value: '',
  label: 'Elije estado del impuesto',
};

export const PACKAGE_TYPE = [
  { value: 'box', label: 'Caja' },
  { value: 'envelope', label: 'Sobre' },
  { value: 'bag', label: 'Bolsa' },
  { value: 'none', label: 'Sin paquete' },
];

export const PACKAGE_TYPE_DEFAULT = {
  value: '',
  label: 'Elije tipo de paquete',
};

export const VISIBILITY = [
  { value: 'visible', label: 'Visible' },
  { value: 'hidden', label: 'Oculto' },
];

export const VISIBILITY_DEFAULT = { value: '', label: 'Elije visibilidad' };

export const PRODUCT_IMAGE_DEFAULT =
  'https://categorygafpri.s3.us-east-2.amazonaws.com/2b5ibjbcbpco-woocommerce-placeholder.png';
