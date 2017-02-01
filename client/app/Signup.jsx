import React from 'react';
import {Link} from 'react-router';

class Signup extends React.Component {
  render () {
    return (
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                  <h1>Sign Up</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            <form action="/signup" method="post">
                  <b>Username:</b> &nbsp;
                  <input id="username" type="text" name="username" /> &nbsp;
                  <b>Password:</b> &nbsp;
                  <input id="password" type="password" name="password" /> &nbsp;
                  <input type="submit" className="btn login-btn" value="&nbsp;Sign Up&nbsp;" />
            </form>
            <p />
              <Link to="/login">Already have an account? Login &rarr;</Link>
            <p />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {Signup};