import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Operation} from '../../reducers/reducer';
import {ActionCreator} from '../../reducers/application/application';
import {func, number, shape, string, bool} from 'prop-types';

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this._formRef = React.createRef();

    this._ratingHandler = this._ratingHandler.bind(this);
  }

  render() {
    const {hotelId, comment, application} = this.props;
    return (
      <form ref={this._formRef} className="reviews__form form" onSubmit={(event) => {
        event.preventDefault();
        this.props.toggleFormBlock(true);
        this.props.postComment(hotelId, comment, (response) => {

          if (response.status === 200) {
            this._formRef.current.reset();
          } else {
            this.props.toggleFormBlock(false);
          }
        });
      }}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" disabled={application.isFormBlocked} name="rating" value="5" id="5-stars" type="radio" onChange={this._ratingHandler} />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" disabled={application.isFormBlocked} name="rating" value="4" id="4-stars" type="radio" onChange={this._ratingHandler} />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" disabled={application.isFormBlocked} name="rating" value="3" id="3-stars" type="radio" onChange={this._ratingHandler} />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" disabled={application.isFormBlocked} name="rating" value="2" id="2-stars" type="radio" onChange={this._ratingHandler} />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" disabled={application.isFormBlocked} name="rating" value="1" id="1-star" type="radio" onChange={this._ratingHandler} />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
          disabled={application.isFormBlocked}
          onChange={(event) => {
            this.props.onCommentInput(event.target.value);
          }}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">{comment.comment.length}</p>
        </div>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit"
            disabled={!(comment.comment.length >= 50 && comment.comment.length <= 300 && comment.rating && !application.isFormBlocked)}
          >Submit</button>
        </div>
      </form>

    );
  }

  _ratingHandler(event) {
    this.props.onRatingSet(Number(event.target.value));
  }
}

ReviewForm.propTypes = {
  onRatingSet: func,
  postComment: func,
  onCommentInput: func,
  hotelId: number,
  comment: shape({comment: string, rating: number}),
  application: shape({isFormBlocked: bool}),
  toggleFormBlock: func
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state, ownProps);
};
const mapDispatchToProps = (dispatch) => ({
  postComment: (hotelId, comment, cb) => dispatch(Operation.postComment(hotelId, comment, cb)),
  toggleFormBlock: (status) => dispatch(ActionCreator.toggleFormBlock(status))
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
