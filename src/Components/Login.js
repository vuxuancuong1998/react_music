import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="box">
            <h1>Login</h1>
            <input
              type="email"
              name="email"
              defaultValue="email"
              onfocus="field_focus(this, 'email');"
              onblur="field_blur(this, 'email');"
              className="email"
            />
            <input
              type="password"
              name="email"
              defaultValue="email"
              onfocus="field_focus(this, 'email');"
              onblur="field_blur(this, 'email');"
              className="email"
            />

            <div className="btn"> Sign In </div>
            <div id="btn2">Sign Up</div>
          </div>
        </form>
        <p>
          Forgot your password? <u style={{ color: "#f1c40f" }}>Click Here!</u>
        </p>
      </div>
    );
  }
}
