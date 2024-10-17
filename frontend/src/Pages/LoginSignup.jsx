import React from "react";

const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <a href="#">Login</a>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continueing, i agree to the terms of use & privacy policy.</p>
          </div>
        </p>
      </div>
    </div>
  )
}

export default LoginSignup;