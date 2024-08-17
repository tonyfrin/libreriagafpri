"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiUrl = exports.WALLET_ACCOUNT_ROUTE = exports.USERS_ROUTE = exports.UPLOAD_PHOTO_ROUTE = exports.TYPE_DOCUMENT_ID_ROUTE = exports.TAX_RATES_ROUTE = exports.TAX_CLASSES_ROUTE = exports.STORAGE_ROUTE = exports.SITES_ROUTE = exports.SHIPPING_METHODS_ROUTE = exports.SHIPPING_AREAS_ROUTE = exports.ROLES_ROUTE = exports.PROJECTS_ROUTE = exports.PRODUCTS_ROUTE = exports.PAYMENT_TRANSFER_CASH_REGISTER_ROUTE = exports.PAYMENT_TRANSFER_BANK_ROUTE = exports.PAYMENT_ORDER_ROUTE = exports.PAYMENT_ORDER_RETURN_ROUTE = exports.PAYMENT_CREDIT_ROUTE = exports.ORDER_ROUTE = exports.ORDER_RETURN_ROUTE = exports.LOGIN_TOKEN_ROUTE = exports.LOGIN_ROUTE = exports.INCOME_ROUTE = exports.EXPENSES_TYPE_ROUTE = exports.EXPENSES_ROUTE = exports.ENTITY_ROUTE = exports.CURRENCIES_ROUTE = exports.CATEGORY_ROUTE = exports.CASH_REGISTER_TYPE_ROUTE = exports.BUDGET_ROUTE = exports.BANK_TYPE_ROUTE = exports.API_URL = exports.ACCOUNTS_RECEIVABLE_ROUTE = void 0;
var getApiUrl = exports.getApiUrl = function getApiUrl() {
  return process.env.API_URL;
};
var API_URL = exports.API_URL = getApiUrl();
var UPLOAD_PHOTO_ROUTE = exports.UPLOAD_PHOTO_ROUTE = "".concat(getApiUrl(), "//upload-file");
var CATEGORY_ROUTE = exports.CATEGORY_ROUTE = '/category';
var CURRENCIES_ROUTE = exports.CURRENCIES_ROUTE = '/currencies';
var ENTITY_ROUTE = exports.ENTITY_ROUTE = '/entity';
var ROLES_ROUTE = exports.ROLES_ROUTE = '/roles';
var SITES_ROUTE = exports.SITES_ROUTE = '/sites';
var TYPE_DOCUMENT_ID_ROUTE = exports.TYPE_DOCUMENT_ID_ROUTE = '/type-document-id';
var USERS_ROUTE = exports.USERS_ROUTE = '/users';
var ORDER_ROUTE = exports.ORDER_ROUTE = '/orders';
var PRODUCTS_ROUTE = exports.PRODUCTS_ROUTE = '/products';
var TAX_CLASSES_ROUTE = exports.TAX_CLASSES_ROUTE = '/tax-classes';
var TAX_RATES_ROUTE = exports.TAX_RATES_ROUTE = '/tax-rates';
var BUDGET_ROUTE = exports.BUDGET_ROUTE = '/budgets';
var SHIPPING_METHODS_ROUTE = exports.SHIPPING_METHODS_ROUTE = '/shipping-methods';
var SHIPPING_AREAS_ROUTE = exports.SHIPPING_AREAS_ROUTE = '/shipping-areas';
var PROJECTS_ROUTE = exports.PROJECTS_ROUTE = '/projects';
var STORAGE_ROUTE = exports.STORAGE_ROUTE = '/storage';
var CASH_REGISTER_TYPE_ROUTE = exports.CASH_REGISTER_TYPE_ROUTE = '/cash-register-type';
var EXPENSES_TYPE_ROUTE = exports.EXPENSES_TYPE_ROUTE = '/expenses-type';
var EXPENSES_ROUTE = exports.EXPENSES_ROUTE = '/expenses';
var INCOME_ROUTE = exports.INCOME_ROUTE = '/income';
var PAYMENT_TRANSFER_CASH_REGISTER_ROUTE = exports.PAYMENT_TRANSFER_CASH_REGISTER_ROUTE = '/payment-transfer-cash-register';
var LOGIN_ROUTE = exports.LOGIN_ROUTE = '/auth/login';
var LOGIN_TOKEN_ROUTE = exports.LOGIN_TOKEN_ROUTE = '/auth/jwt';
var BANK_TYPE_ROUTE = exports.BANK_TYPE_ROUTE = '/bank-type';
var PAYMENT_TRANSFER_BANK_ROUTE = exports.PAYMENT_TRANSFER_BANK_ROUTE = '/payment-transfer-bank';
var ACCOUNTS_RECEIVABLE_ROUTE = exports.ACCOUNTS_RECEIVABLE_ROUTE = '/accounts-receivable';
var PAYMENT_ORDER_ROUTE = exports.PAYMENT_ORDER_ROUTE = '/payment-order';
var PAYMENT_CREDIT_ROUTE = exports.PAYMENT_CREDIT_ROUTE = '/payment-credit';
var ORDER_RETURN_ROUTE = exports.ORDER_RETURN_ROUTE = '/order-return';
var PAYMENT_ORDER_RETURN_ROUTE = exports.PAYMENT_ORDER_RETURN_ROUTE = '/payment-order-return';
var WALLET_ACCOUNT_ROUTE = exports.WALLET_ACCOUNT_ROUTE = '/wallet-account';