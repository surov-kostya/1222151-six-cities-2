import React from 'react';
import renderer from 'react-test-renderer';
import ReviewForm from './review-form';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);
const store = mockStore({});

it(`ReviewForm renders correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <ReviewForm hotelId={0} comment={{rating: 4, comment: `aaa`}} application={{isFormBlocked: true}}/>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
