import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userParamsType} from '../../models/index';
import {shape} from 'prop-types';

export const Header = ({application}) => {
  const {userParams} = application;
  const avatarStyle = {
    backgroundImage: `${userParams && userParams.avatarSrc}`,
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {userParams && userParams.email
                ? <li className="header__nav-item user">
                  <Link to="/favorites" className="header__nav-link header__nav-link--profile">
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                      style={userParams && avatarStyle}
                    ></div>
                    <span className="header__user-name user__name">
                      {userParams.email}
                    </span>
                  </Link>
                </li>
                : <li className="header__nav-item user">
                  <Link to={`/login?prevUrl=${window.location.pathname}`} className="header__nav-link header__nav-link--profile">
                    <span className="header__user-name user__name">
                      Sign in
                    </span>
                  </Link>
                </li>

              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
Header.propTypes = {
  application: shape({userParams: userParamsType})
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, state);
};

export default connect(mapStateToProps)(Header);
