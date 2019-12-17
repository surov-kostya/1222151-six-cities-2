import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Operation} from '../../reducers/reducer';
import Header from '../header/header';
import PlaceCard from '../place-card/place-card';
import {shape, arrayOf, func} from 'prop-types';
import {placeType} from '../../models/index';

export class Favorites extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const favPlaces = this.props.data.favorites;
    const favCities = favPlaces
      .map((place) => place.city)
      .filter((city, index, array) => array.indexOf(city) === index);

    return (
      <div className="page">
        <Header />

        {favPlaces.length
          ? (<main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {
                    favCities.map((city) => (
                      <li key={city} className="favorites__locations-items">
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{city}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">
                          {
                            favPlaces.filter((place) => place.city === city).map((place) => (
                              <PlaceCard
                                key={place.id}
                                place={place}
                                onCardActivate={() => {}}
                              />
                            ))
                          }
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </section>
            </div>
          </main>)

          : (<main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                </div>
              </section>
            </div>
          </main>)
        }

        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      </div>);
  }

  componentDidMount() {
    if (!this.props.data.favorites.length) {
      this.props.fetchFavorites();
    }
  }
}

Favorites.propTypes = {
  data: shape({favorites: arrayOf(placeType)}),
  fetchFavorites: func
};

const mapStateToProps = (state, ownProps) => Object.assign({}, state, ownProps);
const mapDispatchToProps = (dispatch) => ({
  fetchFavorites: () => dispatch(Operation.fetchFavorites())
});
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
