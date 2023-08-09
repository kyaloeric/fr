import React, { useState, useContext } from 'react';
// let's implement another config option in the app first import our global config
import { ConfigContext } from './App';

const SignMeUp = ({ signupCallback }) => {
  const [email, setEmail] = useState('');

  // it in use
  const context = useContext(ConfigContext);
  // remember the global config stored in App variation occur based on what it's set to true or falsse
  return context.showSignMeUp === false ? null : (    <div className="container">
      <div>
        <div className="content">
          <input
            placeholder="Enter Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          &nbsp;
          <button
            disabled={!email.includes('@')}
            onClick={() => {
              signupCallback(email);
              setEmail('');
              alert('signup confirmed');
            }}
            className="btn"
            type="submit"
          >
            Get Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignMeUp;
