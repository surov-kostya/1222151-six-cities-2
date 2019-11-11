import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review';

const review = {
  id: 100,
  author: {
    id: 1000,
    name: `Max`,
    avatarSrc: `img/avatar-max.jpg`
  },
  rating: 94,
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  creationDate: `2019-04-24`
};

it(`Review renders correctly`, () => {
  const tree = renderer.create(<Review review={review} />).toJSON();
  expect(tree).toMatchSnapshot();
});
