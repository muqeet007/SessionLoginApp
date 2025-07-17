import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-white text-xl font-bold hover:cursor-pointer ">
            <a href="#"><span className='hover:text-pink-300'>
                Session Login App
            </span>
            </a>
          </div>
          <div className='flex space-x-3.5'>
            <div className="space-x-6 flex items-center">
            <a href="/profile" className="text-white hover:text-gray-200 font-medium">
              Profile
            </a>
            <a href="/dashboard" className="text-white hover:text-gray-200 font-medium">
              Dashboard
            </a>
          </div>

            <div>
            <button className='bg-white text-pink-500 px-3.5 py-2 rounded-4xl hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out'>Login</button>
          </div>

          <div>
            <button className='bg-white text-pink-500 px-3.5 py-2 rounded-4xl hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out'>Register</button>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
