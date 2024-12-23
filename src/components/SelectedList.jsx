import React, { useState } from 'react';

const SelectedList = ({ selectedItems, setSelectedItems }) => {
  const [sortBy, setSortBy] = useState('date');

  const sortedItems = [...selectedItems].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return new Date(a.date) - new Date(b.date);
  });

  const handleRemoveItem = (name) => {
    setSelectedItems((prev) => prev.filter((item) => item.name !== name));
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Grocery List", 10, 10);
    sortedItems.forEach(({ name, category, date, quantity }, index) => {
      doc.text(`${index + 1}. ${name} (${category}) - Qty: ${quantity} - ${date}`, 10, 20 + index * 10);
    });
    doc.save("grocery-list.pdf");
  };

  const groupedItems = sortedItems.reduce((groups, item) => {
    const { category } = item;
    if (!groups[category]) groups[category] = [];
    groups[category].push(item);
    return groups;
  }, {});

  return (
    <div className="flex-1 bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Selected Grocery Items</h2>
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2 font-semibold">Sort by:</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md p-1"
        >
          <option value="date">Date</option>
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </div>
      <button
        onClick={exportToPDF}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Export to PDF
      </button>
      {Object.entries(groupedItems).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h3 className="font-semibold text-gray-600">{category}</h3>
          <ul>
            {items.map(({ name, date, quantity }) => (
              <li
                key={name}
                className="flex justify-between items-center p-2 border-b border-gray-300"
              >
                <span>{name} (Qty: {quantity})</span>
                <span className="text-sm text-gray-500">{date}</span>
                <button
                  onClick={() => handleRemoveItem(name)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SelectedList;
