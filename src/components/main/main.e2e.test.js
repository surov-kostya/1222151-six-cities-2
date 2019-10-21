import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({adapter: new Adapter()});

it(`Should emit event by click`, () => {
  const clickHandler = jest.fn();

  const main = shallow(<Main
    places={[
      {
        id: 0,
        name: `Beautiful && luxurious apartment at great location`
      },
      {
        id: 1,
        name: `Wood and stone place`
      },
      {
        id: 2,
        name: `Nice, cozy, warm big bed apartment`
      },
      {
        id: 3,
        name: `Canal View Prinsengracht`
      }
    ]}
    onTitleClick={clickHandler}
  />);

  const headerLinks = main.find(`.place-card__name > a`);
  headerLinks.forEach((node) => {
    node.simulate(`click`);
  });

  expect(clickHandler).toHaveBeenCalledTimes(headerLinks.length);
});
