import React from "react";
import { useContextApi } from "../utils/Context";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { selectedItems } = useContextApi();
  const navigate = useNavigate();

  return (
    <>
    <button
      onClick={() => navigate("/")}
      className="mx-7 my-5  space-y-4 px-4 py-2 bg-green-500 text-xl text-white rounded md:text-2xl 
       hover:bg-green-600"
    >
      ←
    </button>
    <div className=" p-4 flex flex-col  items-center   ">
      <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
      {Object.entries(selectedItems)
        .filter(([_, isSelected]) => isSelected)
        .map(([item]) => (
          <p key={item} className="text-lg text-gray-700">
            {item}
          </p>
        ))}
      {Object.keys(selectedItems).length === 0 && (
        <p className="text-gray-500">No items in the cart.</p>
      )}
    </div>
    
    </>
  );
};


export default CartItems;
