import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer';
import {cities} from './mocks/offers';

const init = () => {
  const store = createStore(reducer);

  ReactDOM.render(
      <Provider store={store}>
        <App cities={cities.map((city) => ({id: city.id, name: city.name, coords: city.coords}))} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
