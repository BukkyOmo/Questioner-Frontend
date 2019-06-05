import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInUser } from '../actions';

export class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const data = {
      email,
      password
    };

    const { signInUser: signIn } = this.props;
    await signIn(data);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    const { loading, redirect, isAdmin } = this.props;

    if (redirect) {
      if (isAdmin) {
        return <Redirect to='/admin' />;
      }
      return <Redirect to='/meetups' />;
    }

    return (
      <React.Fragment>
        <main>
          <form className='flex' onSubmit={this.handleSubmit.bind(this)}>
            <div className='items'>
              <h1>Sign In</h1>
            </div>
            <div className='items'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='email'
                onChange={this.handleChange.bind(this)}
                value={email}
              />
            </div>
            <div className='items'>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                onChange={this.handleChange.bind(this)}
                value={password}
              />
            </div>
            <div className='items'>
              {!loading ? (
                <button id='login' className='button' type='submit'>
                  Sign In
                </button>
              ) : (
                <img
                  src='https://www.voya.ie/Interface/Icons/LoadingBasketContents.gif'
                  alt='spinner'
                  className='spinner-button'
                />
              )}
            </div>
            <div className='items-forgot'>
              <p>
                <Link to='/signup'> Sign Up </Link>
              </p>
            </div>
          </form>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.isLoading,
  isAdmin: state.auth.isAdmin,
  message: state.auth.message,
  status: state.auth.status,
  redirect: state.auth.redirect
});

const actionCreators = {
  signInUser
};

export default connect(
  mapStateToProps,
  actionCreators
)(SignInForm);
