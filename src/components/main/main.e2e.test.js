import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import {cities} from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`Should emit event by click`, () => {
  const clickHandler = jest.fn();

  const main = shallow(<Main
    places={cities[0].places}
    cities={cities.map((city) => ({id: city.id, coords: city.coords, name: city.name}))}
    currentCity={{id: 0, coords: [1, 2], name: `City`}}
    onTitleClick={() => { }}
    onChooseCity={() => { }}
    userParams={{id: 1, name: `Vasya`, email: `at@at.ru`, avatarSrc: `static/avatar/6.jpg`, isPro: false}}
  />);

  const headerLinks = main.find(`.place-card__name > a`);
  headerLinks.forEach((node) => {
    node.simulate(`click`);
  });

  expect(clickHandler).toHaveBeenCalledTimes(headerLinks.length);
});
