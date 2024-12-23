import React from "react";

const SearchBar = () => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="md:w-[500px] outline-none border border-green-300 p-2  rounded-lg"
        placeholder="Search items..."
      />
    </div>
  );
};

export default SearchBar;
