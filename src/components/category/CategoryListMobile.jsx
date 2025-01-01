import React from 'react'
import { categoriesList } from '../../utils/categoriesListArrays'

const CategoryListMobile = () => {
  return (
    <div>
      <div className='flex flex-wrap cursor-pointer  '>
        {categoriesList.map(({id, img, name}) => (
            <div key={id} className=' p-2 m-2  hover:scale-95 duration-300
            hover:bg-green-50 hover:rounded-3xl
             flex flex-col items-center border space-y-1 w-28 h-36 border-gray-300 rounded-xl'>
            <img className='h-16 rounded-full' src={img} />
            <p className='text-green-700 text-sm font-semibold w-20'>{name}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryListMobile
