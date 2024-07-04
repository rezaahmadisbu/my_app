// LoginSignup.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { firebase } from '../firebase';

function LoginSignup() {
  const { register, handleSubmit, errors } = useForm();
  const [loginError, setLoginError] = useState(null);

  const onSubmit = async (data) => {
    try {
      // Implement login or signup logic here
      await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
      // Redirect to survey page
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input type="email" {...register('email')} />
      <label>Password</label>
      <input type="password" {...register('password')} />
      <button type="submit">Login/Signup</button>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
    </form>
  );
}

export default LoginSignup;