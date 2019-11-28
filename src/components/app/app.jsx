import React from 'react';
import Main from '../main/main';
import PlaceDetails from '../place-details/place-details';
import {arrayOf, func, shape} from 'prop-types';
import {placeType, cityType} from '../../mocks/offers';
import {connect} from 'react-redux';
import {Operation} from '../../reducers/index';
import {ActionCreator} from '../../reducers/application/application';
import {variantType} from '../../mocks/sort-variations';

const sortPlaces = (places, sortVariant) => {
  switch (sortVariant && sortVariant.name) {
    case `Price: low to high`:
      return places.slice().sort((placeA, placeB) => placeA.price - placeB.price);

    case `Price: high to low`:
      return places.slice().sort((placeA, placeB) => placeB.price - placeA.price);

    case `Top rated first`:
      return places.slice().sort((placeA, placeB) => placeB.rating - placeA.rating);
    default:
      return places;
  }
};

const getPageScreen = ({
  data,
  application,
  chooseCity,
  fetchOfferList,
  sortMain,
  sortVariations
}) => {
  const places = data.places;
  const cities = data.cities;
  const city = application.city;
  const mainSortVariant = application.mainSortVariant;

  switch (location.pathname) {
    case `/`:
      return <Main
        places={sortPlaces(places, mainSortVariant)}
        cities={cities}
        currentCity={city}
        onTitleClick={() => {}}
        onChooseCity={(chosenCity) => {
          chooseCity(chosenCity);
          fetchOfferList(chosenCity.name);
        }}
        activeSortVariant={mainSortVariant}
        onSort={(variantId) => sortMain(variantId)}
        sortVariations={sortVariations}
      />;
    case `/place-details`:
      return <PlaceDetails
        currentCity={city}
        place={places[0]}
        neighbors={places.splice(0, 1)}
      />;
    default:
      return (
        <h1>Page not found</h1>
      );
  }
};

getPageScreen.propTypes = {
  data: shape({places: arrayOf(placeType), cities: arrayOf(cityType)}),
  application: shape({city: cityType, mainSortVariant: variantType}),
  chooseCity: func,
  fetchOfferList: func,
  sortMain: func,
  sortVariations: arrayOf(variantType)
};

const App = (props) => {
  return getPageScreen(props);
};

App.propTypes = {
  data: shape({places: arrayOf(placeType), cities: arrayOf(cityType)}),
  application: shape({city: cityType, mainSortVariant: variantType}),
  chooseCity: func,
  fetchOfferList: func,
  sortMain: func,
  sortVariations: arrayOf(variantType)
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, state);
const mapDispatchToProps = (dispatch) => ({
  chooseCity: (city) => dispatch(ActionCreator.chooseCity(city)),
  fetchOfferList: (cityName) => dispatch(Operation.fetchOfferList(cityName)),
  sortMain: (variantId) => dispatch(ActionCreator.sortMain(variantId))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
