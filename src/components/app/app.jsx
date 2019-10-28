import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {placeType} from '../../mocks/offers';

const App = ({places}) => {
  return (
    <Main places={places} onTitleClick={() => {}}/>
  );
};

App.propTypes = {
  places: PropTypes.arrayOf(placeType),
};

export default App;
