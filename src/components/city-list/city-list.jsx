import React from 'react';
import {arrayOf, func, number} from 'prop-types';
import {cityType} from '../../mocks/offers';

const CityList = ({cities, currentCityId, onChooseCity}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.id} className="locations__item">
          <a className={`locations__item-link tabs__item${city.id === currentCityId && ` tabs__item--active`}`}
            href="#"
            onClick={() => onChooseCity(city)}>
            <span>{city.name}</span>
          </a>
        </li>
      ))
      }
    </ul>
  );
};

CityList.propTypes = {
  cities: arrayOf(cityType),
  onChooseCity: func,
  currentCityId: number
};

export default CityList;
