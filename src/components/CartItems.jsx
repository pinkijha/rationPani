import React from "react";
import { useContextApi } from "../utils/Context";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { selectedItems, setSelectedItems } = useContextApi();
  const navigate = useNavigate();

  const handleDelete = (item) => {
    setSelectedItems((prevItems) => {
      const updatedItems = { ...prevItems };
      delete updatedItems[item]; // Remove the selected item from the object
      return updatedItems;
    });
  };

  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="mx-7 my-5 space-y-4 px-4 py-2 bg-green-500 text-xl text-white rounded md:text-2xl 
         hover:bg-green-600"
      >
        ←
      </button>
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
        {Object.entries(selectedItems)
          .filter(([_, isSelected]) => isSelected)
          .map(([item]) => (
            <div key={item} className="flex space-x-2 items-center">
              <input
                type="checkbox"
                onClick={() => handleDelete(item)}
                className="cursor-pointer"
              />
              <p className="text-lg text-gray-700">{item}</p>
            </div>
          ))}
        {!Object.keys(selectedItems).some((key) => selectedItems[key]) && (
          <p className="text-gray-500">No items in the cart.</p>
        )}
      </div>
    </>
  );
};

export default CartItems;
