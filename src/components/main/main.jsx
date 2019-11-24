import React from 'react';
import {arrayOf, func} from 'prop-types';
import {placeType, cityType} from '../../mocks/offers';
import CityList from '../city-list/city-list';
import CityPlaces from '../city-places/city-places';
import MainEmpty from '../main-empty/main-empty';
import {variantType} from '../../mocks/sort-variations';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const CityListWrapped = withActiveItem(CityList);
const CityPlacesWrapped = withActiveItem(CityPlaces);

const Main = (props) => {
  const {cities, currentCity, onChooseCity, places, onSort, activeSortVariant, sortVariations, onTitleClick} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={
        `page__main page__main--index ${places.length && `page__main--index-empty`}`
      }>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityListWrapped
              cities={cities}
              currentCityId={currentCity ? currentCity.id : 0}
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
              onTitleClick={onTitleClick}
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
  onTitleClick: func,
  onChooseCity: func,
  activeSortVariant: variantType,
  onSort: func,
  sortVariations: arrayOf(variantType)
};

export default Main;
