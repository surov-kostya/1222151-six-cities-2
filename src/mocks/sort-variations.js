import {shape, number, string} from 'prop-types';

export const variantType = shape({
  id: number,
  name: string
});

export const variations = [
  {
    id: 0,
    name: `Popular`
  },
  {
    id: 1,
    name: `Price: low to high`
  },
  {
    id: 2,
    name: `Price: high to low`
  },
  {
    id: 3,
    name: `Top rated first`
  }
];
