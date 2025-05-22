import React from "react";
import InputField from "./Form Components/InputField";

const Signin = () => {
  const labels = ["Email address", "Password"];
  return (
    <div className="flex flex-col justify-between min-h-screen w-1/4 max-w-lg mx-auto pt-10 rubik-font">
      <div className="w-full  mx-auto mb-15 flex flex-col justify-around">
        <h1 className="text-4xl roboto-font text-left mb-5">
          Signin to your <br /> PopX Account
        </h1>
        <div className="text-gray-500 text-left mb-6 rubik-font text-xl">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </div>
        <InputField labels={labels} />
        <button className="w-full bg-gray-400 text-white font-semibold py-3 rounded-lg roboto-font cursor-pointer">
          Login
        </button>
        <a href="/signup" className="text-center text-sm text-gray-500">
          Don't have an account?
          <span className="text-violet-700">Signup</span>
        </a>
      </div>
    </div>
  );
};

export default Signin;
