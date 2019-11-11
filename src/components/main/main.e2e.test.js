import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import {places} from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`Should emit event by click`, () => {
  const clickHandler = jest.fn();

  const main = shallow(<Main
    places={places}
    onTitleClick={clickHandler}
  />);

  const headerLinks = main.find(`.place-card__name > a`);
  headerLinks.forEach((node) => {
    node.simulate(`click`);
  });

  expect(clickHandler).toHaveBeenCalledTimes(headerLinks.length);
});
