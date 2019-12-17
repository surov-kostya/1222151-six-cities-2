import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PlaceCard} from './place-card';

Enzyme.configure({adapter: new Adapter()});

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
  ],
  coords: [52.3909553943508, 4.85309666406198],
  neighborIds: [1, 2, 3],
  reviews: [
    {
      id: 100,
      author: {
        id: 1000,
        name: `Max`,
        avatarSrc: `img/avatar-max.jpg`
      },
      rating: 94,
      text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      creationDate: `2019-04-24`
    },
    {
      id: 101,
      author: {
        id: 1001,
        name: `Angelina`,
        avatarSrc: `img/avatar-angelina.jpg`
      },
      rating: 94,
      text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      creationDate: `2019-04-25`
    },
    {
      id: 102,
      author: {
        id: 1002,
        name: `Max`,
        avatarSrc: `img/avatar-max.jpg`
      },
      rating: 94,
      text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      creationDate: `2019-04-26`
    }
  ]
};

it(`PlaceCard should emit place data on hover`, () => {
  const callbackFunc = jest.fn();
  const placeCard = shallow(<PlaceCard place={mockPlace} onCardActivate={callbackFunc} data={{favorites: [mockPlace]}} application={{city: {name: `Paris`}}}/>);
  const placeCardParentNode = placeCard.find(`article`);
  placeCardParentNode.simulate(`mouseEnter`);
  expect(callbackFunc).toBeCalledWith(mockPlace);
});
