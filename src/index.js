import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer, Operation} from './reducers/reducer';
import {variations} from './mocks/sort-variations';
import {compose} from 'recompose';
import thunk from 'redux-thunk';
import createAPI from "./api.js";
import {BrowserRouter} from 'react-router-dom';


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
  store.dispatch(Operation.checkAuth());
  ReactDOM.render(
      <Provider store={store}>
        <App sortVariations={variations}/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
