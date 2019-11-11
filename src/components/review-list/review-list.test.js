import React from 'react';
import renderer from 'react-test-renderer';
import ReviewList from './review-list';

const reviews = [
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
];

it(`ReviewList renders correctly`, () => {
  const tree = renderer.create(<ReviewList reviews={reviews} />).toJSON();
  expect(tree).toMatchSnapshot();
});
