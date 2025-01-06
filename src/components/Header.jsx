import React from "react";
import { IMG_LOGO } from "../utils/constant";
import SearchBar from "./SearchBar";
import { LiaClipboardListSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { useContextApi } from "../utils/Context"; // Import the context

const Header = () => {
  const navigate = useNavigate();
  const { selectedItems } = useContextApi(); // Access selectedItems from context

  // Calculate the count of selected items
  const itemCount = Object.values(selectedItems).filter((isSelected) => isSelected).length;

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className="flex md:p-3 justify-between bg-slate-100 md:h-16 md:w-full shadow-gray-300 shadow-md">
      <div className="flex justify-between space-x-2 items-center">
        <img
          className="cursor-pointer rounded-full h-10 md:h-12"
          src={IMG_LOGO}
          alt="Logo"
        />
        <h1 className="cursor-pointer font-bold md:text-lg text-gray-700">
          <span className="text-green-700 italic">R</span>ation
          <span className="text-green-700 italic">P</span>ani
        </h1>
      </div>

      <div className="md:flex hidden">
        <SearchBar />
      </div>

      <div
        className="relative flex items-center md:mx-1 m-3 hover:scale-90 
       md:hover:scale-110 duration-300 hover:rounded-full"
      >
        <LiaClipboardListSolid
          className="text-green-700 cursor-pointer md:mr-2"
          onClick={handleCartClick}
          size={32}
        />
        {/* Show item count as a badge */}
        {itemCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {itemCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
