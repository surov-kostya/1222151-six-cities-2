import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ReviewList from '../review-list/review-list';
import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import ReviewForm from '../review-form/review-form';
import {placeType, cityType, userParamsType, reviewType} from '../../models/index';
import {arrayOf, func, shape} from 'prop-types';
import {Operation} from '../../reducers/index';

class PlaceDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hotelComments: undefined,
      activeCard: undefined
    };

    this._cardActivateHandler = this._cardActivateHandler.bind(this);
    this._postCommentHandler = this._postCommentHandler.bind(this);
  }

  render() {
    const {place, neighbors, currentCity, userParams} = this.props;
    const hotelComments = this.props.data.hotelComments;

    const gallery = place.gallerySrcs.map((picSrc) => (
      <div key={picSrc} className="property__image-wrapper">
        <img className="property__image" src={picSrc} alt="Photo studio" />
      </div>
    ));

    const features = place.features.map((feature) => (
      <li key={feature} className="property__inside-item">
        {feature}
      </li>
    ));

    // const hostsReviews = place.hostsReview.map((review) => (
    //   <p key={review} className="property__text">
    //     {review}
    //   </p>
    // ));

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">
                        {userParams && userParams.email}
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <div className="property__image-wrapper">
                  <img className="property__image" src={place.imageSrc} alt="Photo studio" />
                </div>
                {gallery}
              </div>
            </div>
            <div className="property__container container">

              <div className="property__wrapper">
                <div className="property__mark">
                  <span>{place.mark}</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {place.name}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `96%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{place.rating}</span>
                </div>


                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {place.parametres && place.parametres.place} place
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {place.parametres && place.parametres.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {place.parametres && place.parametres.adults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{place.price}</b>
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
                      {place.host.name}
                    </span>
                    <span className="property__user-status">
                      {place.host.status}
                    </span>
                  </div>
                  <div className="property__description">
                    {/* {hostsReviews} */}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot; <span className="reviews__amount">1</span>
                  </h2>
                  {hotelComments && <ReviewList reviews={hotelComments}/>}
                  {userParams && <ReviewForm
                    onCommentPost={(rawComment) => this._postCommentHandler(rawComment)}/>
                  }
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map places={neighbors} cityCoords={currentCity.coords} activePlace={this.state.activeCard}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <PlaceList
                  places={neighbors}
                  onTitleClick={() => { }}
                  onCardActivate={(activePlace) => this._cardActivateHandler(activePlace)}
                />
              </div>
            </section>
          </div>
        </main>
      </div>

    );
  }

  componentDidMount() {
    this.props.fetchHotelComments(this.props.place.id);
  }

  _cardActivateHandler(place) {
    this.setState({activeCard: place});
  }

  _postCommentHandler(rawComment) {
    this.props.postComment(this.props.place.id, Object.assign(rawComment, {
      creationDate: new Date().toISOString(),
      author: this.props.userParams
    }));
  }
}

PlaceDetails.propTypes = {
  currentCity: cityType,
  place: placeType,
  neighbors: arrayOf(placeType),
  userParams: userParamsType,
  fetchHotelComments: func,
  data: shape({hotelComments: arrayOf(reviewType)}),
  postComment: func
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, state);
};
const mapDispatchToProps = (dispatch) => ({
  fetchHotelComments: (hotelId) => dispatch(Operation.fetchHotelComments(hotelId)),
  postComment: (hotelId, comment) => dispatch(Operation.postComment(hotelId, comment))
});

export {PlaceDetails};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);
