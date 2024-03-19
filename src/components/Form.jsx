import * as React from "react";

function Form() {
  return (
    <>
      <div>
        <h1>Welcome Back</h1>
        <p>Welcome back! Please enter your details</p>

        <div>
          <div>
            <label>Email</label>
            <input placeholder="Enter your Email" type="text" />
          </div>

          <div>
            <label>Email</label>
            <input placeholder="Enter your Password" type="password" />
          </div>

          <div>
            <div>
              <input type="checkbox" id="remember" />
              <label for="remember">Keep me logged in</label>
            </div>
            <button>Forgot Password</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
