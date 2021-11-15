export const disabled = {
  disabled: {
    control: { type: 'boolean' },
    table: { category: 'Props', type: { summary: 'boolean' } },
    defaultValue: {
      summary: 'false'
    },
    description: 'Specify if the component is disabled.'
  }
};

export const createType = obj => {
  return JSON.parse(JSON.stringify(obj));
};
