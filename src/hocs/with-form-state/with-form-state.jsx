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

      this._handleCommentInput = this._handleCommentInput.bind(this);
      this._handleRatingSet = this._handleRatingSet.bind(this);
    }


    _handleCommentInput(comment) {
      this.setState({comment});
    }

    _handleRatingSet(rating) {
      this.setState({rating});
    }

    render() {
      return (
        <Component
          {...this.props}
          comment={this.state}
          onCommentInput={this._handleCommentInput}
          onRatingSet={this._handleRatingSet}
        />
      );
    }
  }

  return WithFormState;
};

withFromState.propTypes = {
  Component: element
};

export default withFromState;
