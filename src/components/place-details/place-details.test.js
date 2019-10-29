import React from 'react';
import renderer from 'react-test-renderer';
import PlaceDetails from './place-details';

const mockPlace = {
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
    place: `Entire`,
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
};

it(`PlaceDetails renders correctly`, () => {
  const tree = renderer.create(<PlaceDetails place={mockPlace} />).toJSON();
  expect(tree).toMatchSnapshot();
});
