import React from 'react';
import {reviewType} from '../../mocks/offers';

const converDate = (dateString) => {
  const month = new Date(dateString).getMonth();
  const year = new Date(dateString).getFullYear();
  const monthNames = [
    `January`, `February`, `March`,
    `April`, `May`, `June`, `July`,
    `August`, `September`, `October`,
    `November`, `December`
  ];

  return `${monthNames[month]} ${year}`;
};

const Review = ({review}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.author.avatarSrc} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.author.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${review.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={review.creationDate}>{converDate(review.creationDate)}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: reviewType
};

export default Review;
