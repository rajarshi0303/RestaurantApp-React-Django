import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const apiUrl = 'http://localhost:8000'; // Replace with your Django server's URL

// Function to obtain access token using provided credentials
const obtainToken = async (username, password) => {
  try {
    const response = await axios.post(`${apiUrl}/api/token/`, { username, password });
    return response.data.token; // Return the token from the response
  } catch (error) {
    console.error(error); // Log any errors to the console
    return null; // Return null if there's an error
  }
};

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('access_token'));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accessToken = await obtainToken(username, password);
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      setToken(accessToken);
	    window.location.href = '/dashboard'; // Redirect the user to the login page
    }
  };

  return (
	<div className='mt-24'>
    <div className='bg-orange-50 min-h-screen'>

  <div className="mx-auto w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
	<h1 className="mt-36 text-2xl font-bold text-center">Login</h1>
	<form onSubmit={handleSubmit} className=" space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label for="username" className="block dark:text-gray-400">Username</label>
			<input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block dark:text-gray-400">Password</label>
			<input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			<div className="flex justify-end text-xs dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>

      <button type="submit" className="mt-10 bg-black text-white w-full py-2 font-semibold border rounded">Sign in</button>

	</form>
	
</div>

	</div>
	</div>
  );
}
