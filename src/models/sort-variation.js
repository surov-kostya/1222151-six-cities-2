import {shape, number, string} from 'prop-types';

export const variantType = shape({
  id: number,
  name: string
});
