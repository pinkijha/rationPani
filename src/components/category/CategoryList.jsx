import React from 'react'
import { categoriesList } from '../../utils/categoriesListArrays'

const CategoryList = () => {
  return (
    <div>
      <div>
        <div className='border md:h-[500px] h-[600px] md:w-[250px] w-full md:overflow-y-scroll 
        md:scrollbar-hide md:mt-5 md:border-gray-300 p-2 md:rounded-xl cursor-pointer'>
            {
                categoriesList.map(({id,name,img}) => (
                                    
                    <div className='md:flex md:p-2 md:m-2 md:flex-col  hover:scale-95 duration-300
                     hover:bg-green-100 hover:rounded-3xl
                     items-center space-y-4' key={id}>
                        <img className='md:h-16 h-14  rounded-full' src={img} />
                        <p className='text-green-700 md:flex  font-semibold'>{name}</p>
                    </div>                   

                ))
            }
        </div>
      </div>
    </div>
  )
}

export default CategoryList
