import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ReviewList from '../review-list/review-list';
import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import ReviewForm from '../review-form/review-form';
import {placeType, cityType, userParamsType, reviewType} from '../../models/index';
import {arrayOf, func, shape, string, number, bool} from 'prop-types';
import {Operation} from '../../reducers/reducer';
import Header from '../header/header';

class PlaceDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.id = Number(props.match.params.id);
    this._postCommentHandler = this._postCommentHandler.bind(this);
  }

  render() {
    if (!this.props.data.places.length) {
      return <h1>Loading...</h1>;
    }
    this.userParams = this.props.application.userParams;
    this.place = this.props.data.places.find((place) => place.id === this.id);
    this.city = this.props.application.city;
    this.neighbors = this.props.data.places.filter((place) => place.id !== this.id);
    this.hotelComments = this.props.data ? this.props.data.hotelComments : undefined;
    const isPlaceFavorite = this.props.data.favorites.length
      ? this.props.data.favorites.some((favPlace) => this.id === favPlace.id)
      : false;

    const gallery = this.place.gallerySrcs.slice(0, 6).map((picSrc) => (
      <div key={picSrc} className="property__image-wrapper">
        <img className="property__image" src={picSrc} alt="Photo studio" />
      </div>
    ));

    const features = this.place.features.map((feature) => (
      <li key={feature} className="property__inside-item">
        {feature}
      </li>
    ));

    const active = isPlaceFavorite ? `property__bookmark-button--active` : ``;

    return (
      <div className="page">
        <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {gallery}
              </div>
            </div>
            <div className="property__container container">

              <div className="property__wrapper">
                <div className="property__mark">
                  <span>{this.place.mark}</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {this.place.name}
                  </h1>
                  <button
                    className={`property__bookmark-button ${active} button`} type="button"
                    onClick={() => this.props.changeFavorites(this.id, isPlaceFavorite ? 0 : 1)}
                  >
                    <svg className="property__bookmark-icon" width="31" height="33"
                      style={
                        {
                          fill: isPlaceFavorite ? `#4481c3` : `none`,
                          stroke: isPlaceFavorite ? `#4481c3` : `#b8b8b8`
                        }
                      }
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${100 / 5 * this.place.rating}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{this.place.rating}</span>
                </div>


                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {this.place.parameters && this.place.parameters.place} place
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {this.place.parameters && this.place.parameters.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {this.place.parameters && this.place.parameters.adults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{this.place.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {features}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {this.place.host.name}
                    </span>
                    <span className="property__user-status">
                      {this.place.host.status}
                    </span>
                  </div>
                  <div className="property__description">
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot; <span className="reviews__amount">1</span>
                  </h2>
                  {this.hotelComments && <ReviewList reviews={this.hotelComments}/>}
                  {this.userParams && <ReviewForm
                    onCommentPost={(rawComment) => this._postCommentHandler(rawComment)}/>
                  }
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                places={this.neighbors}
                cityCoords={this.city.coords}
                activePlace={this.props.activeItem}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <PlaceList
                  places={this.neighbors}
                  onTitleClick={() => { }}
                  onCardActivate={(activePlace) => this.props.onSelect(activePlace.id)}
                />
              </div>
            </section>
          </div>
        </main>
      </div>

    );
  }

  componentDidMount() {
    this.props.fetchHotelComments(this.id);
  }

  _postCommentHandler(rawComment) {
    this.props.postComment(this.id, rawComment);
  }
}

PlaceDetails.propTypes = {
  onSelect: func,
  activeItem: number,
  fetchHotelComments: func,
  postComment: func,
  data: shape({
    hotelComments: arrayOf(reviewType),
    places: arrayOf(placeType),
    favorites: arrayOf(placeType)
  }),
  application: shape({
    userParams: userParamsType,
    city: cityType,
    isAuthorizationRequired: bool
  }),
  match: shape({params: shape({id: string | number, city: string})}),
  changeFavorites: func
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state, ownProps);
};
const mapDispatchToProps = (dispatch) => ({
  fetchHotelComments: (hotelId) => dispatch(Operation.fetchHotelComments(hotelId)),
  postComment: (hotelId, comment) => dispatch(Operation.postComment(hotelId, comment)),
  changeFavorites: (hotelId, status) => dispatch(Operation.changeFavorites(hotelId, status)),
});

export {PlaceDetails};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);
