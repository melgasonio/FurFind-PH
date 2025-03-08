import React from 'react'

const SmallButtonNeg = ({ innerHTML }) => {
  return (
    <button className='text-wrap rounded-[var(--size-sm)] border-1 border-black-600 hover:bg-black-100 px-[var(--size-sm)] py-[6px] cursor-pointer'>
        <p className='font-raleway font-black text-black-600 text-xsm'>{ innerHTML }</p>
    </button>
  )
}

export default SmallButtonNeg;