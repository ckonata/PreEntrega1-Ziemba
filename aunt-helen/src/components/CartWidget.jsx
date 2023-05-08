import React from 'react'

import { ShoppingCartIcon } from '@heroicons/react/20/solid'

const CartWidget = () => {
  return (
    <div className='flex gap-2 items-center'>
      <ShoppingCartIcon className="-mr-1 h-5 w-5 text-[#F9A8D4] h2" aria-hidden="true"/>
      <p className='h2'>1</p>
    </div>
  )
}

export default CartWidget