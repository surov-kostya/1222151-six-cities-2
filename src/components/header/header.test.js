import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Header renders correctly`, () => {
  const USER_PARAMS = {id: 1, name: `Vasya`, email: `vasy@mail.ru`, avatartSrc: `url.ru`};
  const tree = renderer.create(<Router><Header userParams={USER_PARAMS}/></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
