import React, { useState, useEffect } from 'react';
import CategoryList from './components/CategoryList';
import SelectedList from './components/SelectedList';

const App = () => {
  const [selectedItems, setSelectedItems] = useState(
    JSON.parse(localStorage.getItem('selectedItems')) || []
  );
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
  }, [selectedItems]);

  return (
    <div className={darkMode ? 'dark bg-gray-800 text-white' : 'bg-gray-100 text-black'}>
      <div className="container mx-auto p-4">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Toggle Dark Mode
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CategoryList selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
          <SelectedList selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>
      </div>
    </div>
  );
};

export default App;