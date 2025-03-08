import React from 'react'

const LargeButton = ({ innerHTML }) => {
  return (
    <button className='text-wrap rounded-[var(--size-2xl)] bg-black-700 hover:bg-black-600 px-[var(--size-md)] py-[var(--size-xsm)] cursor-pointer drop-shadow-(--btn-shadow)'>
        <p className='font-raleway font-black text-white-100 text-md'>{ innerHTML }</p>
    </button>
  )
}

export default LargeButton