import React, {Fragment} from 'react'

import ProductDropdown from './ProductDropdown'
import CartWidget from './CartWidget'


const Navbar = () => {
  return (
  <div className="w-full h-20 flex justify-between items-center px-8 text-black">
    <h1 className='text-3xl font-bold text-[#F9A8D4]'>aunt-helen</h1>
    <ul className='flex items-center'>
      <li className='p-4'><ProductDropdown /></li>
      <li className='p-4'>Sobre Nosotros</li>
      <li className='p-4'><CartWidget /></li>
    </ul>
  </div>
  )
}

export default Navbar