import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-end h-screen rubik-font bg-gray-50 w-1/4 mx-auto">
      <div className="w-full mx-auto mb-15 px-10">
        <h1 className="text-4xl roboto-font text-left mb-2">Welcome to PopX</h1>
        <div className="text-gray-500 text-left mb-6 text-xl">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </div>
        <button
          className="w-full bg-violet-600 text-white font-semibold py-3 rounded-lg mb-3 hover:bg-violet-500"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>
        <button
          className="w-full bg-violet-200 text-gray-600 font-bold py-3 rounded-lg hover:bg-violet-100"
          onClick={() => navigate("/signin")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
