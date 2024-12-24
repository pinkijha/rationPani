import React from 'react'
import { categoriesList } from '../../utils/categoriesListArrays'

const CategoryList = () => {
  return (
    <div>
      <div>
        <div>
            {
                categoriesList.map(({id,name,img}) => (
                    <>
                    <div className='' key={id}>
                        <img className='md:h-16 rounded-full' src={img} />
                        <p>{name}</p>
                    </div>
                    </>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default CategoryList
