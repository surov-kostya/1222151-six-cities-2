import {shape, number, string, bool} from 'prop-types';

export const userParamsType = shape({
  id: number,
  name: string,
  email: string,
  avatarSrc: string,
  isPro: bool
});

