import React from 'react';
import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import SortVariations from '../sort-variations/sort-variations';
import {placeType, cityType} from '../../models/index';
import {variantType} from '../../models/index';
import {arrayOf, func, number} from 'prop-types';

const CityPlaces = (props) => {
  const {places, currentCity, onSort, activeSortVariant, sortVariations, onTitleClick, onSelect, activeItem} = props;
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{places.length} places to stay in {currentCity.name}</b>
        <SortVariations
          onSort={(variantId) => onSort(variantId)}
          activeSortVariant={activeSortVariant}
          sortVariations={sortVariations}
        />
        <div className="cities__places-list tabs__content">
          <PlaceList
            places={places}
            onTitleClick={onTitleClick}
            onCardActivate={(place) => onSelect(place.id)}
          />
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            cityCoords={currentCity.coords}
            places={places}
            activePlace={activeItem}
          />
        </section>
      </div>
    </div>
  );
};

CityPlaces.propTypes = {
  places: arrayOf(placeType),
  cities: arrayOf(cityType),
  currentCity: cityType,
  onTitleClick: func,
  onChooseCity: func,
  activeSortVariant: variantType,
  onSort: func,
  sortVariations: arrayOf(variantType),
  onSelect: func,
  activeItem: number
};

export default CityPlaces;
