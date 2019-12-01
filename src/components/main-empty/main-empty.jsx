import React from 'react';
import {cityType} from '../../mocks/offers';

const MainEmpty = ({currentCity}) => {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property availbale at the moment {currentCity && currentCity.name ? `in ${currentCity.name}` : ``}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
};

MainEmpty.propTypes = {
  currentCity: cityType
};

export default MainEmpty;
