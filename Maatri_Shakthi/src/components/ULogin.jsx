import React from 'react';
import registration from '../images/registration.png'
import login from '../images/login.png'

const ULogin = () => {
  return (
    <form>
      <div className="bg-gradient-to-r from-sky-400 to-blue-500 flex justify-center items-center h-screen font-stellar font-medium">
        <div className="bg-white border rounded flex flex-row">
          {/* Large Screen */}
          <div className="sm:p-5 p-7 flex flex-col space-y-7">
            <div className="sm:visible md:visible hidden">
              <h1 className="text-center text-3xl text-black">Welcome Back!</h1>
            </div>
            <div>
              <label className="mx-0 text-lg">Email:</label>
              <input type="email" className="mx-0 bg-blue-300 rounded block placeholder-gray-700 px-1 py-1" placeholder="Enter Your email..." />
            </div>
            <div>
              <label className="mx-0 text-lg">Password:</label>
              <input type="password" className="mx-0 bg-blue-300 rounded block placeholder-gray-700 px-1 py-1" placeholder="Enter Your Password..." />
            </div>
            <div className="text-center">
              <button className="bg-blue-900 hover:bg-blue-700 text-white rounded py-2 px-3 text-lg">Login</button>
            </div>     
            <div className="text-center">
              <a href="/URegister"><p className="text-blue-700 hover:underline text-lg">Not a user? Sign Up</p></a>
            </div>
          </div>

          {/* Small Screen */}
          <div className="p-5 ">
            <h1 className="text-center text-3xl">Welcome Back!</h1>
            <img src={login} alt="LOGIN" className="h-60 w-60" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ULogin;
