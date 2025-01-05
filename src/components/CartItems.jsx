import React from "react";
import { useContextApi } from "../utils/Context";

const CartItems = () => {
  const { selectedItems } = useContextApi();

  return (
    <div className="absolute top-12 right-0 bg-white shadow-lg p-4 rounded-lg w-64">
      <h3 className="text-lg font-semibold mb-2">Selected Items:</h3>
      {Object.entries(selectedItems)
        .filter(([_, isSelected]) => isSelected)
        .map(([item]) => (
          <p key={item} className="text-green-700">
            {item}
          </p>
        ))}
      {Object.keys(selectedItems).length === 0 && (
        <p className="text-gray-500">No items selected.</p>
      )}
    </div>
  );
};

export default CartItems;
