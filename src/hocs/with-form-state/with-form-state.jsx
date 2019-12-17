import React, {PureComponent} from 'react';
import {element} from 'prop-types';

const DEF_RATING = 0;
const withFromState = (Component) => {
  class WithFormState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        rating: DEF_RATING
      };

      this._commentInputHandler = this._commentInputHandler.bind(this);
      this._ratingSetHandler = this._ratingSetHandler.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          comment={this.state}
          onCommentInput={this._commentInputHandler}
          onRatingSet={this._ratingSetHandler}
        />
      );
    }

    _commentInputHandler(comment) {
      this.setState({comment});
    }

    _ratingSetHandler(rating) {
      this.setState({rating});
    }
  }

  return WithFormState;
};

withFromState.propTypes = {
  Component: element
};

export default withFromState;
