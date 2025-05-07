import React from 'react'

const NormalButton = ({ type, innerHTML, className, onClick }) => {
  return (
    <button
      type={type}
      className={`text-wrap rounded-[var(--size-md)] bg-black-700 hover:bg-black-600 px-[var(--size-sm)] py-[6px] cursor-pointer shadow-[0px_2px_4px_rgba(136,125,125,0.4)] font-raleway font-black text-white-100 text-sm ${className}`}
      onClick={onClick}>
        <p>{ innerHTML }</p>
    </button>
  )
}

export default NormalButton;