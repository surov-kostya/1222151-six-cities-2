import React from 'react';
import {connect} from 'react-redux';
import {Operation} from '../../reducers/reducer';
import {shape, arrayOf, func, string} from 'prop-types';
import {placeType} from '../../models/index';
import {Link} from 'react-router-dom';

export const PlaceCard = ({place, onCardActivate, changeFavorites, data, application}) => {
  const isPlaceFavorite = data.favorites.length
    ? data.favorites.some((favPlace) => place.id === favPlace.id)
    : false;
  const active = isPlaceFavorite ? `place-card__bookmark-button--active` : ``;
  return (
    <article className="cities__place-card place-card" onMouseEnter={() => onCardActivate(place)}>
      <div className="place-card__mark">
        <span>{place.mark}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        {application.city && <Link to={`/offer/${application.city.name}/${place.id}`}>
          <img className="place-card__image" src={place.imageSrc} width="260" height="200" alt="Place image" />
        </Link>}
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${active} button`} type="button"
            onClick={() => changeFavorites(place.id, isPlaceFavorite ? 0 : 1)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${place.rating / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          {application.city && <Link to={`/offer/${application.city.name}/${place.id}`}>{place.name}</Link>}
        </h2>
        <p className="place-card__type">{place.parameters && place.parameters.place}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  place: placeType,
  onCardActivate: func,
  changeFavorites: func,
  data: shape({favorites: arrayOf(placeType)}),
  application: shape({city: shape({name: string})})
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, state);
};

const mapDispatchToProps = (dispatch) => ({
  changeFavorites: (placeId, status) => dispatch(Operation.changeFavorites(placeId, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);

