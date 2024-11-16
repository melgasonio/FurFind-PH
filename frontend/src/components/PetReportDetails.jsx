import React from 'react'

const PetReportDetails = ({ petReport }) => {

    return (
        <div className='PetReportDetails'>
            <image src={petReport.image}></image>
            <p>{petReport.name}</p>
            <p>{petReport.status}</p>
        </div>
  )
}

export default PetReportDetails