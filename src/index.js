import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {places} from './mocks/offers';


const init = () => {
  ReactDOM.render(
      <App places={places}/>,
      document.querySelector(`#root`)
  );
};

init();
