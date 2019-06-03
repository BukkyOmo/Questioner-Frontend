import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    const { history, message } = this.props;
    if (message === 'You have successfully signed in') {
      history.push('/meetups');
    } else {
      history.push('/signin');
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    const { loading } = this.props;
    return (
      <React.Fragment>
        <main>
          <form className='flex' onSubmit={this.handleSubmit}>
            <div className='items'>
              <h1>Sign In</h1>
            </div>
            <div className='items'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='email'
                onChange={this.handleChange}
                value={email}
              />
            </div>
            <div className='items'>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                onChange={this.handleChange}
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
  token: state.auth.token,
  message: state.auth.message,
  status: state.auth.status
});

const actionCreators = {
  signInUser
};

export default connect(
  mapStateToProps,
  actionCreators
)(SignInForm);
