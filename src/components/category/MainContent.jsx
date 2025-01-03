import React from 'react'
import { useContextApi } from '../../utils/Context';
import CategoryListItems from "../category/CategoryListItems";

const MainContent = () => {
    const {selectedCategory} = useContextApi();
  return (
    <div>
      {/* Main Content */}
      <div className="flex-1 md:p-5">
          {selectedCategory ? (
            // Render CategoryListItems dynamically based on selected category
            <CategoryListItems categoryId={selectedCategory} />
          ) : (
            <p className='md:flex hidden'>Select a category to view its content.</p>
          )}
        </div>
    </div>
  )
}

export default MainContent
