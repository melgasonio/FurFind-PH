import React from 'react'

const SmallButton = ({ type, innerHTML, className, onClick }) => {
  return (
    <button
      type={type}
      className={`text-wrap rounded-[var(--size-sm)] bg-black-700 hover:bg-black-600 px-[var(--size-sm)] py-[6px] cursor-pointer ${className}`}
      onClick={onClick}>
        <p className='font-raleway font-black text-white-100 text-xsm'>{ innerHTML }</p>
    </button>
  )
}

export default SmallButton;