import React from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import {placeType} from '../../mocks/offers';

const PlaceList = (props) => {
  return (
      <>
        {props.places.map((place) => <PlaceCard
          key={place.id}
          place={place}
          onTitleClick={props.onTitleClick}
          onCardActivate={props.onCardActivate}
        />)}
      </>
  );

};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(placeType),
  onTitleClick: PropTypes.func,
  onCardActivate: PropTypes.func
};

export default PlaceList;


