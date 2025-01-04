import React from 'react'
import { useContextApi } from '../../utils/Context';
import CategoryListItems from "../category/CategoryListItems";

const MainContent = () => {
    const {selectedCategory, setSelectedCategory} = useContextApi();

    const handleBack = () => {
      setSelectedCategory(null); // Reset selection to return to the list
    };
  return (
    <div>
      {/* Main Content */}
      <div className="md:flex-1   md:p-5">
          {selectedCategory ? (
            // Render CategoryListItems dynamically based on selected category
            <div>
              <button
            onClick={handleBack}
            className="mb-4 px-3 py-1 bg-green-300 rounded-lg hover:scale-110 duration-200
             text-sm"
          >
            Back
          </button>
            <CategoryListItems categoryId={selectedCategory} />
            </div>
          ) : (
            <p className='md:flex hidden'>Select a category to view its content.</p>
          )}
        </div>
    </div>
  )
}

export default MainContent
