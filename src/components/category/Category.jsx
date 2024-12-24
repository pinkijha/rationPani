import React from 'react'
import CategoryList from './CategoryList';


const Category = () => {
  return (
      <div className="flex flex-col m-4  md:mx-24 md:my-10">
      <div className="">
        <h1
          className="text-green-700 text-lg font-semibold
         md:font-bold md:text-xl"
        >
          All Categories
        </h1>
      </div>

      <div className="flex">
        <div><CategoryList/></div>

        <div>
        </div>

      </div>
    </div>
  )
}

export default Category
