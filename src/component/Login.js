import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name === '' || formData.password === '') {
      setError('Both fields are required!');
    } else {
      setError('');
      alert('Login successful!');
      // Here you can add code to send the form data to the server
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
          <div className="mb-4">
            <input
              type="submit"
              value="Submit"
              className="w-full p-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 cursor-pointer"
            />
          </div>
          <div className='text-center border border-gray-400 rounded-md p-2 hover:bg-blue-400'>
            <NavLink to='/signup'>Create Account</NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
