import React from 'react'
import { useContextApi } from '../../utils/Context'

const MainContent = () => {
    const {selectedCategory} = useContextApi;
  return (
    <div>
      {/* Main Content */}
      <div className="flex-1 p-5">
          {selectedCategory ? (
            // Render CategoryListItems dynamically based on selected category
            <CategoryListItems categoryId={selectedCategory} />
          ) : (
            <p>Select a category to view its content.</p>
          )}
        </div>
    </div>
  )
}

export default MainContent
