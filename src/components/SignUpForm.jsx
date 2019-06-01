import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ToastMessage from '../common/ToastMessage';
import { signUpUser } from '../actions';

export class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, username, password } = this.state;

    const data = {
      email,
      username,
      password
    };

    const { signUpUser: signUp, history } = this.props;
    await signUp(data);

    const { message, error } = this.props;
    console.log(this.props);

    if (message === 'You have been successfully registered') {
      history.push('/signin');
      toast(<ToastMessage message={`${message}. Redirecting...`} />, {
        type: 'success',
        closeButton: false,
        hideProgressBar: true,
        onClose: () => window.location.reload(),
        autoClose: 0
      });
    } else if (error === 'user already exists') {
      let formattedMessage;
      if (typeof message === 'string') {
        formattedMessage = message;
      }
      toast(<ToastMessage message={formattedMessage} />, {
        type: 'error',
        closeButton: false,
        hideProgressBar: true,
        autoClose: 1000
      });
    } else {
      toast(<ToastMessage message='Something very strange happened' />, {
        type: 'error',
        closeButton: false,
        hideProgressBar: true,
        autoClose: 1000
      });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, username, password } = this.state;
    const { loading } = this.props;
    return (
      <React.Fragment>
        <main>
          <form className='flex' onSubmit={this.handleSubmit}>
            <div className='items'>
              <h1>Sign Up</h1>
            </div>
            <div id='msg' />
            <div>
              <input
                type='email'
                id='email'
                placeholder='Email'
                name='email'
                onChange={this.handleChange}
                value={email}
              />
            </div>

            <div>
              <input
                type='text'
                id='username'
                placeholder='User Name'
                name='username'
                onChange={this.handleChange}
                value={username}
              />
            </div>

            <div>
              <input
                type='password'
                id='password'
                placeholder='Password'
                name='password'
                onChange={this.handleChange}
                value={password}
              />
            </div>

            <div className='items'>
              {!loading ? (
                <button className='button' id='signup' type='submit'>
                  Signup
                </button>
              ) : (
                <h4>Loading</h4>
              )}
            </div>

            <div className='items'>
              <p id='login'>
                Already have an account?
                <Link to='/signin'>Sign In</Link>
              </p>
            </div>
          </form>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.isLoading,
  message: auth.message,
  status: auth.status,
  error: auth.error
});

const actionCreator = {
  signUpUser
};

export default connect(
  mapStateToProps,
  actionCreator
)(SignUpForm);
