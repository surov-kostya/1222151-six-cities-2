import React from 'react';
import {arrayOf, func} from 'prop-types';
import {placeType, cityType} from '../../models/index';
import CityList from '../city-list/city-list';
import CityPlaces from '../city-places/city-places';
import MainEmpty from '../main-empty/main-empty';
import {variantType} from '../../models/index';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {userParamsType} from '../../models/index';
import Header from '../header/header';

const CityListWrapped = withActiveItem(CityList);
const CityPlacesWrapped = withActiveItem(CityPlaces);
const DEF_CITY_ID = 0;
const Main = (props) => {
  const {cities, currentCity, onChooseCity, places, onSort, activeSortVariant, sortVariations} = props;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={
        `page__main page__main--index ${places.length && `page__main--index-empty`}`
      }>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityListWrapped
              cities={cities}
              currentCityId={currentCity ? currentCity.id : DEF_CITY_ID}
              onChooseCity={onChooseCity}
            />
          </section>
        </div>
        <div className="cities">
          {places.length
            ? <CityPlacesWrapped
              places={places}
              currentCity={currentCity}
              onSort={onSort}
              activeSortVariant={activeSortVariant}
              sortVariations={sortVariations}
            />
            : <MainEmpty currentCity={currentCity} />}
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  places: arrayOf(placeType),
  cities: arrayOf(cityType),
  currentCity: cityType,
  onChooseCity: func,
  activeSortVariant: variantType,
  onSort: func,
  sortVariations: arrayOf(variantType),
  userParams: userParamsType
};

export default Main;
