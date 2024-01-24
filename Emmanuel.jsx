import React, { useState } from 'react';
import './Login.css';
import { userSchema } from './Validation/LoginValidation';

function Emmanuel() {
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    console.log('This function is working');

    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    try {
      await userSchema.validate(formData, { abortEarly: false });
      // Validation passed
      setErrors({
        name: '',
        email: '',
        password: '',
      });
      console.log('Form is valid');
    } catch (validationError) {
      // Validation failed
      const errorDetails = {};
      validationError.inner.forEach((err) => {
        errorDetails[err.path] = err.message;
      });
      setErrors(errorDetails);
      console.log('Form validation error:', errorDetails);
    }
  };

  return (
    <>
      <form onSubmit={loginUser}>
        <h1>
          <u>LOGIN</u>
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={() => setErrors({ ...errors, name: '' })}
        />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={() => setErrors({ ...errors, email: '' })}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={() => setErrors({ ...errors, password: '' })}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Emmanuel;
