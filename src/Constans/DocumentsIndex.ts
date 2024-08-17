type Index = {
  label: string;
  value: string;
};

type Documents = {
  [key: string]: Index[] | [];
};

export const DocumentsIndex: Documents = {
  VE: [
    { label: 'J', value: 'J' },
    { label: 'G', value: 'G' },
    { label: 'V', value: 'V' },
    { label: 'No aplica', value: 'null' },
  ],
  US: [{ label: 'No aplica', value: 'null' }],
};
