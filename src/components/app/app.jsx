import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Main from '../main/main';
import PlaceDetails from '../place-details/place-details';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import {arrayOf, func, shape, number, string} from 'prop-types';
import {placeType, cityType} from '../../models/index';
import {connect} from 'react-redux';
import {Operation} from '../../reducers/reducer';
import {ActionCreator as ActionCreatorApp} from '../../reducers/application/application';
import {ActionCreator as ActionCreatorData} from '../../reducers/data/data';
import {variantType} from '../../models/index';
import {userParamsType} from '../../models/index';
import withAuth from '../../hocs/with-auth/with-auth';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import ErrorModal from '../error-modal/error-modal';

const FavoritesWithAuth = withAuth(Favorites);
const MainWithAuth = withAuth(Main);
const PlaceDetailsWrapped = withAuth(withActiveItem(PlaceDetails));

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


const App = ({data, application, chooseCity, fetchOfferList, sortVariations, sortMain, signIn, resetServerError}) => {
  const places = data.places;
  const cities = data.cities;
  const city = application.city;
  const mainSortVariant = application.mainSortVariant;
  const userParams = application.userParams;
  const serverError = data.serverError;
  const queryParams = new URLSearchParams(window.location.search);
  return (
    <>
      {data.serverError.message && <ErrorModal errorMessage={serverError.message} onOk={resetServerError}/>}
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainWithAuth
            serverError={serverError.status}
            path={`/`}
            places={sortPlaces(places, mainSortVariant)}
            cities={cities}
            currentCity={city}
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
        <Route path="/offer/:city/:id" exact render={(props) => <PlaceDetailsWrapped
          {...props}
          serverError={serverError.status}
          path={`/offer/${props[`match`].params.city}/${props[`match`].params.id}`}
        />}>
        </Route>
        <Route path="/login" exact>
          {
            userParams
              ? <Redirect to={queryParams.get(`prevUrl`) || `/`} />
              : <SignIn onSignIn={(email, password) => signIn(email, password)}/>
          }
        </Route>
        <Route path="/favorites" exact>
          <FavoritesWithAuth serverError={serverError.status} path={`/favorites`}/>
        </Route>
        <Route render={() => (
          <h1>Page not found</h1>
        )}/>
      </Switch>
    </BrowserRouter>

    </>
  );
};

App.propTypes = {
  data: shape({
    places: arrayOf(placeType),
    cities: arrayOf(cityType),
    serverError: shape({status: number, message: string})
  }),
  application: shape({
    city: cityType,
    mainSortVariant: variantType,
  }),
  chooseCity: func,
  fetchOfferList: func,
  sortMain: func,
  sortVariations: arrayOf(variantType),
  signIn: func,
  userProps: userParamsType,
  resetServerError: func
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, state);
};
const mapDispatchToProps = (dispatch) => ({
  chooseCity: (city) => dispatch(ActionCreatorApp.chooseCity(city)),
  fetchOfferList: (cityName) => dispatch(Operation.fetchOfferList(cityName)),
  signIn: (email, password) => dispatch(Operation.signIn(email, password)),
  sortMain: (variantId) => dispatch(ActionCreatorApp.sortMain(variantId)),
  resetServerError: () => dispatch(ActionCreatorData.serverError({status: 0, message: ``}))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
