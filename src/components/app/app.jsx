import React from 'react';
import Main from '../main/main';
import PlaceDetails from '../place-details/place-details';
import {arrayOf, func} from 'prop-types';
import {placeType, cityType} from '../../mocks/offers';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

const getPageScreen = ({places, cities, city, chooseCity, fetchOfferList}) => {
  switch (location.pathname) {
    case `/`:
      return <Main places={places} cities={cities} currentCity={city} onTitleClick={() => {}}
        onChooseCity={(chosenCity) => {
          chooseCity(chosenCity);
          fetchOfferList(chosenCity.id);
        }}
      />;
    case `/place-details`:
      return (
        <PlaceDetails
          place={places[0]}
          neighbors={
            places[0].neighborIds
              .map((id) => places.find((place) => place.id === id))
          }
        />
      );
    default:
      return (
        <h1>Page not found</h1>
      );
  }
};

getPageScreen.propTypes = {
  places: arrayOf(placeType),
  cities: arrayOf(cityType),
  city: cityType,
  chooseCity: func,
  fetchOfferList: func
};

const App = (props) => {
  return getPageScreen(props);
};

App.propTypes = {
  places: arrayOf(placeType),
  cities: arrayOf(cityType),
  city: cityType,
  chooseCity: func,
  fetchOfferList: func
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, state);
const mapDispatchToProps = (dispatch) => ({
  chooseCity: (city) => dispatch(ActionCreator.chooseCity(city)),
  fetchOfferList: (chosenCityId) => dispatch(ActionCreator.fetchOfferList(chosenCityId))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
