import React from 'react'

const LargeButton = ({ innerHTML }) => {
  return (
    <button className='text-wrap rounded-[var(--size-2xl)] bg-black-700 hover:bg-black-600 px-[var(--size-md)] py-[var(--size-xsm)] cursor-pointer shadow-[0px_2px_4px_rgba(136,125,125,0.4)]'>
        <p className='font-raleway font-black text-white-100 text-[21px]'>{ innerHTML }</p>
    </button>
  )
}

export default LargeButton