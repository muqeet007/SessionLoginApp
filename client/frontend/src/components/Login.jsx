import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [message,setMessage]=useState("")
    const [errormessage,setErrorMessage]=useState("")

    const navigate=useNavigate()

    const AxiosLoginPost=async()=>
    {
        try
        {
            const response=await axios.post('/api/users/login',{email,password})

            if(response.data.message)
            {
                setMessage(response.data.message)
            }

            setErrorMessage("")
            navigate("/dashboard")
        }

        catch(error)
        {
            setErrorMessage(error.response?.data?.message||"Login Failed")
        }
    }

    const handleLogin=(e)=>
    {
        e.preventDefault()
        AxiosLoginPost()
    }
    
  return (
    <div className="bg-gradient-to-br from-purple-700 to-pink-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
          Welcome to  <br/>
          <span className='text-pink-600'>Session Login App</span>
        </h1>
        <form className="space-y-6" onSubmit={handleLogin}>
             {errormessage && <p className=''>{errormessage}</p>}
            {message && <p className=''>{message}</p>}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="email"
              name="email"
              type="email"
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="password"
              name="password"
              type="password"
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
          <div className='flex flex-col space-y-3'>
            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg"
            >
              Log In
            </button>

            <button
              type="button"
              className="w-full bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg"
              onClick={()=>navigate('/register')}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
