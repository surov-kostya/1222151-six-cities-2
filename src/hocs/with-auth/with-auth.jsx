import React, {PureComponent} from 'react';
import {string, number, element} from 'prop-types';
import {Redirect} from 'react-router-dom';

const UN_AUTH_STATUS = 401;

const withAuth = (Component) => {
  class WithAuth extends PureComponent {
    constructor(props) {
      super(props);

      this.path = props.path;
    }

    render() {
      if (this.props.serverError === UN_AUTH_STATUS) {
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
