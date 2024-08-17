export type SiteOptions = {
  id: number;
  CURRENCY_FORMAT: {
    miles: '.' | ',';
    decimal: '.' | ',';
  };
  CURRENCY_LOCATION: 'left' | 'right';
  CURRENCY_SYMBOL: string;
  DECIMAL_NUMBERS: number;
  MAIN_STORAGE: number;
  name: string;
  documentIndex: string;
  documentNumber: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
  email: string;
  phone: string;
  taxes: boolean;
  host: string;
  footerBudget: string[];
  budgetValidation: string;
  currencyId: number;
  footerOrderPending: string[];
};
