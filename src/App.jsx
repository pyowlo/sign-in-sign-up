import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="app">
      <div className="form-container">
        {isSignUp ? <SignUpForm /> : <SignInForm />}
        <button className="toggle-button" onClick={toggleForm}>
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}

function SignInForm() {
  return (
    <form className="form">
      <h2>Sign In</h2>
      <label>
        Email:
        <input type="email" required />
      </label>
      <label>
        Password:
        <input type="password" required />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}

function SignUpForm() {
  return (
    <form className="form">
      <h2>Sign Up</h2>
      <label>
        Username:
        <input type="text" required />
      </label>
      <label>
        Email:
        <input type="email" required />
      </label>
      <label>
        Password:
        <input type="password" required />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default App;