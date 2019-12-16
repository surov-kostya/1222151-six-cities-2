import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Main from '../main/main';
import PlaceDetails from '../place-details/place-details';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import {arrayOf, func, shape, bool, number} from 'prop-types';
import {placeType, cityType} from '../../models/index';
import {connect} from 'react-redux';
import {Operation} from '../../reducers/reducer';
import {ActionCreator} from '../../reducers/application/application';
import {variantType} from '../../models/index';
import {userParamsType} from '../../models/index';
import withAuth from '../../hocs/with-auth/with-auth';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const FavoritesWithAuth = withAuth(Favorites);
const MainWithAuth = withAuth(Main);
const PlaceDetailsWrapped = withActiveItem(PlaceDetails);

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

const App = ({data, application, chooseCity, fetchOfferList, sortVariations, sortMain, signIn}) => {
  const places = data.places;
  const cities = data.cities;
  const city = application.city;
  const mainSortVariant = application.mainSortVariant;
  const userParams = application.userParams;
  const serverError = data.serverError;
  const queryParams = new URLSearchParams(window.location.search);
  return (

    <Switch>
      <Route path="/" exact>
        <MainWithAuth
          serverError={serverError}
          path={`/`}
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
        />
      </Route>
      <Route path="/offer/:id" exact component={PlaceDetailsWrapped}>
      </Route>
      <Route path="/login" exact>
        {
          userParams
            ? <Redirect to={queryParams.get(`prevUrl`) || `/`} />
            : <SignIn onSignIn={(email, password) => signIn(email, password)}/>
        }
      </Route>
      <Route path="/favorites" exact>
        <FavoritesWithAuth serverError={serverError} path={`/favorites`}/>
      </Route>
      <Route path="page-not-found" render={() => (
        <h1>Page not found</h1>
      )}/>
    </Switch>
  );
};

App.propTypes = {
  data: shape({places: arrayOf(placeType), cities: arrayOf(cityType), serverError: number}),
  application: shape({
    city: cityType,
    mainSortVariant: variantType,
    isAuthorizationRequired: bool
  }),
  chooseCity: func,
  fetchOfferList: func,
  sortMain: func,
  sortVariations: arrayOf(variantType),
  signIn: func,
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
