import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';

Enzyme.configure({adapter: new Adapter()});

const mockPlace = {
  id: 0,
  name: `Beautiful && luxurious apartment at great location`,
  imageSrc: `img/apartment-01.jpg`
};

it(`PlaceCard should emit place data on hover`, () => {
  const callbackFunc = jest.fn();
  const placeCard = shallow(<PlaceCard place={mockPlace} onCardActivate={callbackFunc}/>);
  const placeCardParentNode = placeCard.find(`article`);
  placeCardParentNode.simulate(`mouseEnter`);
  expect(callbackFunc).toBeCalledWith(mockPlace);
});
