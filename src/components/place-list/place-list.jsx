import React from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import {placeType} from '../../models/index';

const PlaceList = (props) => {
  return (
      <>
        {props.places.map((place) => <PlaceCard
          key={place.id}
          place={place}
          onCardActivate={props.onCardActivate}
        />)}
      </>
  );

};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(placeType),
  onCardActivate: PropTypes.func
};

export default PlaceList;


