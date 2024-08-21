import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  // State to toggle between Sign In and Sign Up forms
  const [isSignInForm, setIsSignInForm] = useState(true);

  // Function to toggle the form view
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      {/* Header Component */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="path/to/your/logo.png" // Add the correct path to your image
          alt="logo"
          className="h-screen w-full object-cover"
        />
      </div>

      {/* Form Container */}
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        { !isSignInForm && <input
          type="text"
          placeholder="Username"
          className="p-4 my-4 w-full bg-gray-700 rounded"
        />}
         <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        
        
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p
          className="p-4 cursor-pointer text-center"
          onClick={toggleForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
