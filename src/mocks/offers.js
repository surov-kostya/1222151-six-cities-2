import {shape, number, string, arrayOf} from 'prop-types';

export const placeType = shape({
  id: number,
  name: string,
  imageSrc: string,
  contacts: shape({eMail: string}),
  gallerySrcs: arrayOf(string),
  mark: string,
  rating: number,
  parametres: shape({
    entire: string,
    bedrooms: number,
    adults: number
  }),
  price: number,
  features: arrayOf(string),
  host: shape({
    id: number,
    name: string,
    status: string
  }),
  hostsReview: arrayOf(string)
});

export const places = [
  {
    id: 0,
    name: `Beautiful && luxurious apartment at great location`,
    imageSrc: `img/apartment-01.jpg`,
    contacts: {
      eMail: `Oliver.conner@gmail.com`
    },
    gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/map.jpg`],
    mark: `Premium`,
    rating: 4.8,
    parametres: {
      entire: `Entire place`,
      bedrooms: 3,
      adults: 4
    },
    price: 120,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      id: 100,
      name: `Angelina`,
      status: `Pro`
    },
    hostsReview: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ]
  },
  {
    id: 1,
    name: `Wood and stone place`,
    imageSrc: `img/apartment-02.jpg`,
    contacts: {
      eMail: `Oliver.conner@gmail.com`
    },
    gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    mark: `Premium`,
    rating: 4.8,
    parametres: {
      entire: `Entire place`,
      bedrooms: 3,
      adults: 4
    },
    price: 120,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      id: 100,
      name: `Angelina`,
      status: `Pro`
    },
    hostsReview: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ]
  },
  {
    id: 2,
    name: `Nice, cozy, warm big bed apartment`,
    imageSrc: `img/apartment-03.jpg`,
    contacts: {
      eMail: `Oliver.conner@gmail.com`
    },
    gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    mark: `Premium`,
    rating: 4.8,
    parametres: {
      entire: `Entire place`,
      bedrooms: 3,
      adults: 4
    },
    price: 120,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      id: 100,
      name: `Angelina`,
      status: `Pro`
    },
    hostsReview: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ]
  },
  {
    id: 3,
    name: `Canal View Prinsengracht`,
    imageSrc: `img/room.jpg`,
    contacts: {
      eMail: `Oliver.conner@gmail.com`
    },
    gallerySrcs: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    mark: `Premium`,
    rating: 4.8,
    parametres: {
      entire: `Entire place`,
      bedrooms: 3,
      adults: 4
    },
    price: 120,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      id: 100,
      name: `Angelina`,
      status: `Pro`
    },
    hostsReview: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ]
  }
];
