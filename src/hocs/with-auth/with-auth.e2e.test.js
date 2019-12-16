import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withAuth from './with-auth.jsx';
import {BrowserRouter, Redirect} from 'react-router-dom';

configure({adapter: new Adapter()});

const MockComponent = () => (
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
);

const MochComponentWrapper = withAuth(MockComponent);

it(`HOC withAuth redirects correctly`, () => {
  const SERVER_ERROR = 401;
  const wrapper = mount(
      <BrowserRouter>
        <MochComponentWrapper serverError={SERVER_ERROR} path={`/`} />
      </BrowserRouter>
  );

  expect(wrapper.find(Redirect)).toHaveLength(1);
});

it(`HOC withAuth renders component correctly`, () => {
  const SERVER_ERROR = 0;
  const wrapper = mount(
      <BrowserRouter>
        <MochComponentWrapper serverError={SERVER_ERROR} path={`/`} />
      </BrowserRouter>
  );

  expect(wrapper.find(MockComponent)).toHaveLength(1);
});
