import React from 'react';
import {arrayOf, func, number} from 'prop-types';
import {cityType} from '../../models/index';

const CityList = ({cities, currentCityId, onChooseCity, onSelect}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.id} className="locations__item">
          <a className={`locations__item-link tabs__item${city.id === currentCityId && ` tabs__item--active`}`}
            href="#"
            onClick={() => {
              onChooseCity(city);
              onSelect(city.id);
            }}>
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
  currentCityId: number,
  onSelect: func,
};

export default CityList;
