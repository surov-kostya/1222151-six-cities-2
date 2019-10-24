import React, {PureComponent} from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import {placeType} from '../../mocks/offers';

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      activeCard: undefined
    };
  }

  render() {
    return (
      <div className="cities__places-list places__list tabs__content">
        {this.props.places.map((place) => <PlaceCard
          key={place.id}
          place={place}
          onTitleClick={this.props.onTitleClick}
          onCardActivate={this._cardActivateHandler.bind(this)}
        />)}
      </div>
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
