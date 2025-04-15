import React from 'react';
import { useState } from 'react';

import filterIcon from "../../assets/pet-reports/filter-icon.png";
import filterIconHover from "../../assets/pet-reports/filter-icon-hover.png";

const FilterToggle = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className='cursor-pointer' 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
        <img src={isHovered ? filterIconHover : filterIcon} />
    </div>
  )
}

export default FilterToggle