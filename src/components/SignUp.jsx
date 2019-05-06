import React from 'react';

const Signup = () => (
  <React.Fragment>
    <main>
      <form method="POST" className="flex">

        <div className="items">

          <h1>Sign Up</h1>

        </div>
        <div id="msg"></div>

        <div>

          <input type="email" id="email" placeholder="Email" />

        </div>
        <span className="error" id="error-email"></span>

        <div>

          <input type="text" name="username" id="username" placeholder="User Name" />

        </div>
        <span className="error" id="error-username"></span>

        <div>

          <input type="password" name="password" id="password" placeholder="Password" />

        </div>
        <span className="error" id="error-password"></span>

        <div>

          <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" />

        </div>
        <span className="error" id="error-cpassword"></span>

        <div className="items">

          <button className="button" id="signup" type="submit">

            <a href="login.html">Sign Up</a>

          </button>
        </div>

        <div className="items">

          <p id="login">

              Already have an account? <a href="login.html">Sign In </a>

          </p>

        </div>

      </form>

    </main>

  </React.Fragment>
);
export default Signup;
