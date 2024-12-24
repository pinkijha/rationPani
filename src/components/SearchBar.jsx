import React from "react";

const SearchBar = () => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="md:w-[500px] focus:outline-none focus:ring-1 focus:ring-green-500 border border-gray-300  p-2  rounded-lg"
        placeholder="Search items..."
      />
    </div>
  );
};

export default SearchBar;
