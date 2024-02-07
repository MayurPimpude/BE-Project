import React from 'react';
import registration from '../images/registration.png'
import login from '../images/login.png'

const DRegister = () => {
  return (
    <form>
      <div className="bg-gradient-to-r from-sky-400 to-blue-500 flex justify-center items-center h-screen font-stellar font-medium mt-70 ">
        <div className="bg-white border rounded flex flex-row">
          <div className="sm:p-5 p-7 flex flex-col space-y-5">
            <div>
              <label className="mx-0 text-lg">Name:</label>
              <input type="text" className="mx-0 bg-blue-300 rounded block placeholder-gray-700 px-1 py-1" placeholder="eg: Chris Philler" />
            </div>
            <div>
              <label className="mx-0 text-lg">Email:</label>
              <input type="email" className="mx-0 bg-blue-300 rounded block placeholder-gray-700 px-1 py-1" placeholder="eg: chris321@gmail.com" />
            </div>
            <div>
              <label className="mx-0 text-lg">Mobile No:</label>
              <input type="number" className="mx-0 bg-blue-300 rounded block placeholder-gray-700 px-1 py-1" placeholder="eg: 7895637221" />
            </div>
            <div>
              <label className="mx-0 text-lg">Password:</label>
              <input type="password" className="mx-0 bg-blue-300 rounded block placeholder-gray-700 px-1 py-1" placeholder="Set Your Password..." />
            </div>
            <div className="text-center">
              <button className="bg-blue-900 hover:bg-blue-700 text-white rounded py-2 px-3 text-lg">Sign Up</button>
            </div>
            <div className="text-center">
              <a href="/DLogin"><p className="text-blue-700 hover:underline text-lg">Already a user? Login</p></a>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <img src={registration} alt="REGISTRATION" className="h-80 w-80" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default DRegister;
