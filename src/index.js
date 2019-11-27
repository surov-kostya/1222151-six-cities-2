import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer, Operation} from './reducer';
import {cities} from './mocks/offers';
import {variations} from './mocks/sort-variations';
import {compose} from 'recompose';
import thunk from 'redux-thunk';
import createAPI from "./api.js";

const api = createAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);


const init = () => {
  store.dispatch(Operation.fetchCityList());
  ReactDOM.render(
      <Provider store={store}>
        <App
          cities={cities.map((city) => ({id: city.id, name: city.name, coords: city.coords}))}
          sortVariations={variations}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
