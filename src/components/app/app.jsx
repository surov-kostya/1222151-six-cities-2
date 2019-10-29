import React from 'react';
import Main from '../main/main';
import PlaceDetails from '../place-details/place-details';
import PropTypes from 'prop-types';
import {placeType} from '../../mocks/offers';

const getPageScreen = ({places}) => {
  switch (location.pathname) {
    case `/`:
      return <Main places={places} onTitleClick={() => {}} />;
    case `/place-details`:
      return <PlaceDetails place={places[0]} />;
    default:
      return (
        <h1>Page not found</h1>
      );
  }
};

getPageScreen.propTypes = {
  places: PropTypes.arrayOf(placeType)
};

const App = (props) => {
  return getPageScreen(props);
};

App.propTypes = {
  places: PropTypes.arrayOf(placeType),
};

export default App;
