import React, { useState } from 'react';

const initialCategories = {
  "Bathroom Accessories": ["Soap", "Shampoo", "Toothpaste"],
  Grains: ["Rice", "Wheat", "Daal"],
  Oil: ["Mustard Oil", "Olive Oil", "Coconut Oil"],
  Spices: ["Turmeric", "Cumin", "Coriander"],
  Vegetables: ["Potatoes", "Tomatoes", "Onions"],
};

const CategoryList = ({ selectedItems, setSelectedItems }) => {
  const [categories, setCategories] = useState(initialCategories);
  const [customCategories, setCustomCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCheckboxChange = (item, category) => {
    const date = new Date().toLocaleString();
    const quantity = prompt(`Enter quantity for ${item}:`, "1");
    if (quantity) {
      setSelectedItems((prev) => [...prev, { name: item, category, date, quantity }]);
    }
  };

  const addCategory = () => {
    const newCategory = prompt("Enter new category name:");
    if (newCategory) {
      setCustomCategories((prev) => [...prev, newCategory]);
      setCategories((prev) => ({ ...prev, [newCategory]: [] }));
    }
  };

  const filteredCategories = Object.entries(categories).filter(([category, items]) =>
    category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    items.some((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Grocery Categories</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <button
        onClick={addCategory}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Add Category
      </button>
      {filteredCategories.map(([category, items]) => (
        <div key={category} className="mb-4">
          <h3 className="font-semibold text-gray-600 mb-2">{category}</h3>
          <ul>
            {items.map((item) => (
              <li key={item} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(item, category)}
                />
                <label>{item}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;