import React, { Component } from 'react';
import axios from 'axios';

const endPoint = 'https://bukkyomo-questioner.herokuapp.com/api/v1/auth/signup';

class SignUpForm extends Component {
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

    const user = {
      email,
      username,
      password
    };

    const data = await axios.post(endPoint, user);
    this.setState(data);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      email, username, password
    } = this.state;
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
              <button
                className='button'
                id='signup'
                type='submit'
              >
                Signup
              </button>
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

export default SignUpForm;
