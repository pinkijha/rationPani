import React, { useState } from "react";
import { categoryData } from "../../utils/categoriesListArrays";

const CategoryListItems = ({ categoryId }) => {
  // Retrieve items for the selected category dynamically
  const items = categoryData[categoryId] || [];

  return (
    <div className=" space-y-3">
      <h2 className="text-xl font-bold">Items for Selected Category</h2>
      {items.length > 0 ? (
        <div className=" pl-5 mt-3">
          {items.map((item, index) => (
            <div key={index} className="flex space-x-2 text-gray-700 ">
              <input className="" type="checkbox" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No items available for this category.</p>
      )}
    </div>
  );
};

export default CategoryListItems;
