import React from 'react'
import { IMG_LOGO } from '../utils/constant'
import SearchBar from './SearchBar';
import { LiaClipboardListSolid } from "react-icons/lia";

const Header = () => {
  return (
    <div className='flex md:p-3 justify-between bg-slate-100 md:h-16 md:w-full shadow-gray-300 shadow-md'>
      <div className='flex justify-between space-x-2 items-center'>
        <img className='cursor-pointer rounded-full md:h-12'
         src={IMG_LOGO} />
        <h1 className='cursor-pointer font-bold md:text-lg text-gray-700'><span className='text-green-700 italic'>R</span>ation
         <span className='text-green-700 italic'>P</span>ani</h1>
      </div>

      <div>
        <SearchBar/>
      </div>

      <div className='flex items-center  md:hover:scale-110 duration-300 hover:rounded-full'>
      <LiaClipboardListSolid className='text-green-700 
     cursor-pointer md:mr-2' size={32} />
      </div>
    </div>
  )
}

export default Header
