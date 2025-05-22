import { Radio } from "@mui/material";
import React from "react";
import InputField from "./Form Components/InputField";
const Signup = () => {
  const labels = [
    "Full Name",
    "Phone number",
    "Email address",
    "Password",
    "Company Name",
  ];

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50 w-1/4 mx-auto px-5 rubik-font">
      <div className="w-full max-w-lg mx-auto pt-10">
        <div className="w-full  mx-auto mb-15 flex flex-col justify-around">
          <h1 className="text-4xl roboto-font text-left mb-5">
            Create your <br /> PopX Account
          </h1>
          <InputField labels={labels} />
          <div>
            <h5 className="roboto-font text-left">
              Are you an Agency? <span style={{ color: "#ec4899" }}>*</span>
            </h5>
            <label className="roboto-font">
              <Radio color="secondary" checked={true} />
              Yes
            </label>

            <label className="roboto-font">
              <Radio color="secondary" />
              No
            </label>
          </div>
        </div>
      </div>
      <div className="w-full max-w-lg mx-auto pb-10 text-center">
        <button className="w-full bg-violet-600 text-white font-semibold py-3 rounded-lg hover:bg-violet-500 cursor-pointer">
          Create Account
        </button>
        <a href="/signin" className=" text-sm text-gray-500">
          Already have an account?{" "}
          <span className="text-violet-700">Signin</span>
        </a>
      </div>
    </div>
  );
};

export default Signup;
