import React from 'react'

const NormalButton = ({ type, innerHTML, className, onClick }) => {
  return (
    <button
      type={type}
      className={`text-wrap rounded-[var(--size-md)] px-[var(--size-sm)] py-[6px] cursor-pointer font-raleway font-black text-sm ${className}`}
      onClick={onClick}>
        <p>{ innerHTML }</p>
    </button>
  )
}

export default NormalButton;