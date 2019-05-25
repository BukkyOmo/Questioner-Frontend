import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class SignInForm extends Component {
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
    const user = {
      email,
      password
    };

    // const data = await axios.post(endPoint, user);
    // this.setState(data);
  }

   handleChange = (e) => {
     this.setState({ [e.target.name]: e.target.value });
   }

   render() {
     const { email, password } = this.state;
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
               <button
                 id='login'
                 className='button'
                 type='submit'
               >
                  Sign In
               </button>
             </div>
             <div className='items'>
               <p>
                Dont have an account?
                 {' '}
                 <Link to='/signup'> Sign Up </Link>
               </p>
             </div>
             <div className='items forgot'>
               <p><a href='forgotpassword.html'> Forgot Password? </a></p>
             </div>
           </form>
         </main>
       </React.Fragment>
     );
   }
}

export default SignInForm;
