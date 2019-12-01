import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in';

it(`SignIn should renders correctly`, () => {
  const tree = renderer.create(<SignIn onSignIn={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
