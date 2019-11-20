import React from 'react';
import {arrayOf, func, number} from 'prop-types';
import {placeType, cityType} from '../../mocks/offers';
import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import SortVariations from '../sort-variations/sort-variations';
import {variantType} from '../../mocks/sort-variations';

const Main = ({
  places,
  cities,
  currentCity,
  onTitleClick,
  onChooseCity,
  onSort,
  activeSortVariant,
  sortVariations
}) => {
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList cities={cities} currentCityId={currentCity.id} onChooseCity={onChooseCity}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{places.length} places to stay in Amsterdam</b>
              <SortVariations
                onSort={(variantId) => onSort(variantId)}
                activeSortVariant={activeSortVariant}
                sortVariations={sortVariations}
              />
              <div className="cities__places-list tabs__content">
                <PlaceList places={places} onTitleClick={onTitleClick}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map cityCoords={currentCity.coords} places={places} />
              </section>
            </div>
          </div>
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
