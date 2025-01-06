import React, { useEffect } from "react";
import { categoryData } from "../../utils/categoriesListArrays";
import { useContextApi } from "../../utils/Context";

const CategoryListItems = ({ categoryId }) => {
  const { selectedItems, setSelectedItems } = useContextApi();
  // Retrieve items for the selected category dynamically
  const items = categoryData[categoryId] || [];

  useEffect(() => {
    // Load cart items from localStorage on mount
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    setSelectedItems(storedCartItems);
  }, [setSelectedItems]);

  useEffect(() => {
    // Save cart items to localStorage whenever selectedItems change
    localStorage.setItem('cartItems', JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleCartItem = (item) => {
    setSelectedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">Items for Selected Category</h2>
      {items.length > 0 ? (
        <div className="cursor-pointer pl-5 mt-3">
          {items.map((item, index) => (
            <div key={index} className="flex space-x-2 text-gray-700">
              <input
                checked={!!selectedItems[item]}
                onClick={() => handleCartItem(item)}
                className="cursor-pointer"
                type="checkbox"
              />
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
