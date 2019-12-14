import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Operation} from '../../reducers/index';
import Header from '../header/header';
import PlaceCard from '../place-card/place-card';
import {shape, arrayOf, func} from 'prop-types';
import {placeType} from '../../models/index';

class Favorites extends PureComponent {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.fetchFavorites = props.fetchFavorites;
    this.favPlace = this.data.favorites;
    this.favCities = this.favPlace
      .map((place) => place.city)
      .filter((city, index, array) => array.indexOf(city) === index);
  }

  render() {
    return (
      <div className="page">
        <Header />

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  this.favCities.map((city) => (
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
                          this.favPlace.filter((place) => place.city === city).map((place) => (
                            <PlaceCard
                              key={place.id}
                              place={place}
                              onTitleClick={() => {}}
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
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      </div>);
  }

  conponentDidMount() {
    this.fetchFavorites();
  }
}

Favorites.propTypes = {
  data: shape({favoorites: arrayOf(placeType)}),
  fetchFavorites: func
};

const mapStateToProps = (state, ownProps) => Object.assign({}, state, ownProps);
const mapDispatchToProps = (dispatch) => ({
  fetchFavorites: () => dispatch(Operation.fetchFavorites())
});
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
