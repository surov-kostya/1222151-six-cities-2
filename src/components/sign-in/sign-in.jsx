import React from 'react';
import {func} from 'prop-types';

const SignIn = ({onSignIn}) => {
  let email;
  let password;
  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={(event) => {
              event.preventDefault();
              onSignIn(email, password);
            }}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  autoComplete="off"
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={(event) => {
                    email = event.target.value;
                  }}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  autoComplete="off"
                  className="login__input form__input"
                  type="password"
                  name="password" placeholder="Password"
                  required
                  onChange={(event) => {
                    password = event.target.value;
                  }}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

SignIn.propTypes = {
  onSignIn: func
};

export default SignIn;
