import {shape, number, string, arrayOf} from 'prop-types';

export const personType = shape({
  id: number.isRequired,
  name: string.isRequired,
  email: string,
  avatarSrc: string,
  status: string
});

export const reviewType = shape({
  id: number.isRequired,
  author: personType.isRequired,
  rating: number.isRequired,
  text: string.isRequired,
  creationDate: string.isRequired
});

export const placeType = shape({
  id: number,
  name: string,
  imageSrc: string,
  gallerySrcs: arrayOf(string),
  mark: string,
  rating: number,
  parametres: shape({
    place: string,
    bedrooms: number,
    adults: number
  }),
  price: number,
  features: arrayOf(string),
  host: personType.isRequired,
  hostsReview: arrayOf(string),
  coords: arrayOf(number),
  reviews: arrayOf(reviewType)
});

export const cityType = shape({
  id: number,
  name: string,
  coords: arrayOf(number)
});
