import React from "react";
import { IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import profile from "../assets/profile.png";

const Profile = () => {
  return (
    <div className="border border-gray-200 w-80 mx-auto mt-4 bg-white rubik-font">
      <div className=" px-4 py-3">
        <span className="text-gray-700">Account Settings</span>
      </div>
      <div className="flex items-start px-4 py-4 bg-gray-50">
        <span className="relative">
          <img
            src={profile}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div className="h-7 w-7 bg-violet-900 rounded-full absolute bottom-1 right-3 flex items-center justify-center">
            <IconButton className="p-0">
              <CameraAltIcon fontSize="small" className="text-white" />
            </IconButton>
          </div>
        </span>
        <div>
          <div className="flex items-center">
            <span className="rubik-font text-xl">Marry Doe</span>
          </div>
          <div className="text-xs rubik-font">Marry@Gmail.Com</div>
        </div>
      </div>
      <div className="px-4 pb-4 text-xs text-gray-700">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>
      <div className="border-t border-dashed border-gray-300 h-64"></div>
    </div>
  );
};

export default Profile;
