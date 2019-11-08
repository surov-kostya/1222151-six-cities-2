import React from 'react';
import Review from '../review/review';
import {arrayOf} from 'prop-types';
import {reviewType} from '../../mocks/offers';
const ReviewList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (<Review key={review.id} review={review}/>))}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: arrayOf(reviewType)
};

export default ReviewList;
