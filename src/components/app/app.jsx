import React from 'react';
import Main from '../main/main';
import PlaceDetails from '../place-details/place-details';
import SignIn from '../sign-in/sign-in';
import {arrayOf, func, shape, bool} from 'prop-types';
import {placeType, cityType} from '../../models/index';
import {connect} from 'react-redux';
import {Operation} from '../../reducers/index';
import {ActionCreator} from '../../reducers/application/application';
import {variantType} from '../../models/index';
import {userParamsType} from '../../models/index';

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
  if (data.places.length && application) {
    const places = data.places;
    const cities = data.cities;
    const city = application.city;
    const mainSortVariant = application.mainSortVariant;
    const userParams = application.userParams;

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
          userParams={userParams}
        />;
      case `/place-details`:
        return <PlaceDetails
          currentCity={city}
          place={places[0]}
          neighbors={places.slice(1)}
          userParams={userParams}
        />;
      default:
        return (
          <h1>Page not found</h1>
        );
    }
  }

  return <h1>Loading...</h1>;
};

getPageScreen.propTypes = {
  data: shape({places: arrayOf(placeType), cities: arrayOf(cityType)}),
  application: shape({
    city: cityType,
    mainSortVariant: variantType,
    isAuthorizationRequired: bool
  }),
  chooseCity: func,
  fetchOfferList: func,
  sortMain: func,
  sortVariations: arrayOf(variantType),
  userProps: userParamsType
};

const App = (props) => {
  if (props.application.isAuthorizationRequired) {
    return <SignIn onSignIn={(email, password) => props.signIn(email, password)}/>;
  }
  return getPageScreen(props);
};

App.propTypes = {
  data: shape({places: arrayOf(placeType), cities: arrayOf(cityType)}),
  application: shape({
    city: cityType,
    mainSortVariant: variantType,
    isAuthorizationRequired: bool
  }),
  chooseCity: func,
  fetchOfferList: func,
  sortMain: func,
  sortVariations: arrayOf(variantType),
  singIn: func,
  userProps: userParamsType
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, state);
};
const mapDispatchToProps = (dispatch) => ({
  chooseCity: (city) => dispatch(ActionCreator.chooseCity(city)),
  fetchOfferList: (cityName) => dispatch(Operation.fetchOfferList(cityName)),
  signIn: (email, password) => dispatch(Operation.signIn(email, password)),
  sortMain: (variantId) => dispatch(ActionCreator.sortMain(variantId))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
