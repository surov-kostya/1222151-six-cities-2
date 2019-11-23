import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item.jsx';

configure({adapter: new Adapter()});

const MockComponent = () => (
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
);
const MochComponentWrapper = withActiveItem(MockComponent);

it(`HOC withActiveItem renders correctly`, () => {
  const wrapper = mount(<MochComponentWrapper activeItem={1} />);

  expect(wrapper.state(`activeItem`)).toEqual(1);
});
