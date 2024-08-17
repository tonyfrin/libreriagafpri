import { StatesCountries } from './StatesCountries';
import { Cities } from './Cities';

export const OPTIONS_REGION = (): { value: string; label: string }[] => {
  const optionsRegion: { value: string; label: string }[] = [
    { value: 'VE', label: 'Venezuela' },
  ];

  const venezuelaData = StatesCountries.find((country) =>
    Object.prototype.hasOwnProperty.call(country, 'VE')
  );

  if (venezuelaData) {
    /* eslint-disable no-restricted-syntax */
    for (const [key, value] of Object.entries(venezuelaData.VE[0])) {
      optionsRegion.push({ value: key, label: value });
    }
    /* eslint-enable no-restricted-syntax */
  }

  const optionsCity: { value: string; label: string }[] = [];

  optionsRegion.map((state) => {
    const stateKey = state?.value;

    if (stateKey !== 'VE' && stateKey !== undefined) {
      const cities = Cities[0].VE[0][stateKey][0];

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(cities).forEach(([_, value]) =>
        optionsCity.push({
          value,
          label: value,
        })
      );
    }
    return null;
  });

  const mergedArray = [...optionsRegion, ...optionsCity];

  return mergedArray;
};

export const OPTIONS_SHIPPING_METHODS_TYPE: { value: string; label: string }[] =
  [
    { value: 'percent', label: 'Porcentaje' },
    { value: 'flat_rate', label: 'Costo fijo' },
    { value: 'free_shipping', label: 'Grátis' },
  ];

export const OPTIONS_SHIPPING_METHODS_TYPE_DEFAULT: {
  value: string;
  label: string;
} = { value: '', label: 'Elija el tipo de método de envío' };

export const OPTIONS_SHIPPING_SERVICES: { value: string; label: string }[] = [
  { value: 'express', label: 'Express' },
  { value: 'delivery', label: 'Delivery' },
  { value: 'standar', label: 'Standar' },
];

export const OPTIONS_SHIPPING_SERVICES_DEFAULT: {
  value: string;
  label: string;
} = { value: '', label: 'Elija el tipo de servicio de envío' };

export const OPTIONS_SHIPPING_METHODS_STATUS: {
  value: string;
  label: string;
}[] = [
  { value: 'enabled', label: 'Habilitado' },
  { value: 'disabled', label: 'Deshabilitado' },
];

export const OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT: {
  value: string;
  label: string;
} = { value: 'enabled', label: 'Habilitado' };
