import React from 'react'

const SmallButton = ({ innerHTML }) => {
  return (
    <button className='text-wrap rounded-[var(--size-sm)] bg-black-700 hover:bg-black-600 px-[var(--size-sm)] py-[6px] cursor-pointer'>
        <p className='font-raleway font-black text-white-100 text-xsm'>{ innerHTML }</p>
    </button>
  )
}

export default SmallButton;