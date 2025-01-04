import React, { useState } from "react";
import { categoriesList } from "../../utils/categoriesListArrays";
import CategoryListMobile from "../category/CategoryListMobile";
import { useContextApi } from "../../utils/Context";
import MainContent from "../category/MainContent";
import CategoryListItems from "../category/CategoryListItems";

const CategoryList = ({id}) => {
  const {selectedCategory, setSelectedCategory }= useContextApi();
  return (
    <div>
      <div className="flex">
        {/* Category for desktop */}
        <div
          className="md:flex hidden md:flex-col border md:h-[500px] h-[600px] md:w-[250px] w-full md:overflow-y-scroll 
        md:scrollbar-hide md:mt-5 md:border-gray-300 p-2 md:rounded-xl cursor-pointer"
        >
          {categoriesList.map(({ id, name, img }) => (
            <div
              className={`flex md:p-2 md:m-2 md:flex-col  hover:scale-95 duration-300
                    hover:shadow-xl hover:rounded-3xl
                    items-center space-y-4 ${
                      selectedCategory === id ? "shadow-lg shadow-slate-200 rounded-2xl" : ""
                    }`}
              key={id}
              onClick={() => setSelectedCategory(id)}
            >
              <img
                className="md:h-16 h-14  rounded-full"
                src={img}
                alt={name}
              />
              <p className="text-green-700 md:flex  font-semibold">{name}</p>
            </div>
          ))}
        </div>
        {/* Main Content */}
        <div className="flex-1 p-5">
          <MainContent/>
        </div>
      </div>

      {/* categoryList for mobile device */}
      <div className="flex md:hidden">
        {selectedCategory === id ? <MainContent/>:<CategoryListMobile/>}
      </div>
    </div>
  );
};

export default CategoryList;
