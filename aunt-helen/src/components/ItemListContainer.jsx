import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='flex w-full items-center justify-center'>
     <p className='text-5xl font-bold text-black'>{greeting}</p>
    </div>
  )
}

export default ItemListContainer