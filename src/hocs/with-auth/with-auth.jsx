import React, {PureComponent} from 'react';
import {string, number, element} from 'prop-types';
import {Redirect} from 'react-router-dom';

const withAuth = (Component) => {
  class WithAuth extends PureComponent {
    constructor(props) {
      super(props);

      this.path = props.path;
      this.serverError = props.serverError;
    }

    render() {
      if (this.serverError === 401) {
        return (
          <Redirect to={`/login?prevUrl=${this.path}`}/>
        );
      }

      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  WithAuth.propTypes = {
    path: string,
    serverError: number
  };

  return WithAuth;
};

withAuth.propTypes = {
  Component: element
};

export default withAuth;
