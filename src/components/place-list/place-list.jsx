import React, {PureComponent} from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import {placeType} from '../../mocks/offers';

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.places = props.places;
    this.onTitleClick = props.onTitleClick;

    this.state = {
      activeCard: undefined
    };

    this._cardActivateHandler = this._cardActivateHandler.bind(this);
  }

  render() {
    return (
      <>
        {this.places.map((place) => <PlaceCard
          key={place.id}
          place={place}
          onTitleClick={this.onTitleClick}
          onCardActivate={this._cardActivateHandler}
        />)}
      </>
    );
  }

  _cardActivateHandler(place) {
    this.setState(() => ({activeCard: place}));
  }
}

PlaceList.propTypes = {
  places: PropTypes.arrayOf(placeType),
  onTitleClick: PropTypes.func
};

export default PlaceList;


