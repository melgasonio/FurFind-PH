import React from 'react'

const NormalButton = ({ innerHTML, className }) => {
  return (
    <button className={`text-wrap rounded-[var(--size-md)] bg-black-700 hover:bg-black-600 px-[var(--size-sm)] py-[6px] cursor-pointer shadow-[0px_2px_4px_rgba(136,125,125,0.4)] font-raleway font-black text-white-100 text-sm ${className}`}>
        <p>{ innerHTML }</p>
    </button>
  )
}

export default NormalButton;