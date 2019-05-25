import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const {
      email, username, password
    } = this.state;

    const data = {
      email,
      username,
      password
    };

    const { signUpUser: signUp } = this.props;
    await signUp(data);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      email, username, password
    } = this.state;
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
                <button
                  className='button'
                  id='signup'
                  type='submit'
                >
                Signup
                </button>
              ) : <h4>Loading</h4>}
            </div>

            <div className='items'>
              <p id='login'>
                Already have an account?
                <a href='/login'>
                  Sign In
                </a>
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
  status: auth.status
});

const actionCreators = {
  signUpUser
};

export default connect(mapStateToProps, actionCreators)(SignUpForm);
