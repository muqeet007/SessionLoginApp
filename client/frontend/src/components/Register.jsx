import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [message,setMessage]=useState("")
    const [errormessage,setErrorMessage]=useState("")

    const navigate=useNavigate()
    const AxiosRegisterPost=async()=>
    {
        try
        {
            const response=await axios.post('/api/users/register',{name,email,password})

            if(response.data.message)
            {
                setMessage(response.data.message)
            }

            setErrorMessage("")
            navigate('/')
        }
        catch(error)
        {
            setErrorMessage(error.response?.data?.message || "Registration Failed")
        }
    }

    const handleRegister=(e)=>
    {
        e.preventDefault()
        AxiosRegisterPost()
    }

  return (
    <div className="bg-gradient-to-br from-purple-700 to-pink-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
          Welcome to  <br/>
          <span className='text-pink-600'>Session Login App</span>
        </h1>
        <form className="space-y-6" onSubmit={handleRegister}>
            {errormessage && <p className=''>{errormessage}</p>}
            {message && <p className=''>{message}</p>}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Name
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="name"
              name="name"
              type="text"
              placeholder='Your name here'
              onChange={e=>setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="email"
              name="email"
              type="email"
              placeholder='Your Email here'
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
              placeholder='Your password here'
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
