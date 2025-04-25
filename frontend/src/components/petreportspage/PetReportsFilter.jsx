import React, { useState } from 'react'

import NormalButton from '../buttons/NormalButton'

import closeIcon from "../../assets/pet-reports/close-icon.png"

import { useFilterContext } from '../../hooks/pet_reports/useFilterContext'
import { usePsgcData } from '../../hooks/report_form/usePsgcData'
import { useFilteredDataContext } from '../../hooks/pet_reports/useFilteredDataContext'

const PetReportsFilter = () => {
    const { setIsFiltered } = useFilterContext();
    const { regions, fetchCities } = usePsgcData();
    const { filteredData, setFilteredData } = useFilteredDataContext();

    const [cities, setCities] = useState([]);

    const handleFormChange = async (e, setFilteredData) => {
        const { name, value } = e.target

        setFilteredData((prevData) => ({
            ...prevData,
            [name]: value
        }))

        if (name === "region") {
            const region = value;
            const cities = await fetchCities(region);
            setCities(cities);
        }
    }    

    console.log(filteredData)

  return (
    <div className='flex flex-col gap-[12px] px-[42px]'>
        <div className='flex flex-row pt-[16px] pb-[12px] justify-between items-center border-b-1 border-black-200'>
            <p className='text-[20px] text-black-600 font-bold'>Filter Missing Pets</p>
            <img 
                src={closeIcon}
                className='cursor-pointer'
                onClick={() => setIsFiltered(false)}
            />
        </div>
        <form className='text-black-500 text-[16px]'>
            <div className='flex flex-col gap-[36px]'>
                <div className='flex flex-col gap-[12px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <label
                            className='font-semibold'
                            htmlFor='pet'
                        >
                            Pet
                        </label>
                        <div className='flex-grow flex flex-row justify-between items-center gap-[8px] px-[6px]'>
                            <div 
                                className={
                                    filteredData.pet === "all" 
                                        ? 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 bg-black-100 hover:bg-white-200 border-black-500 py-[4px]' 
                                        : 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 hover:bg-white-200 border-black-500 py-[4px]'
                                }
                                onClick={() => setFilteredData({ ...filteredData, pet: "all" })}
                            >
                                <input
                                    className='absolute opacity-0 cursor-pointer'
                                    type='radio'
                                    name="pet"
                                    id="all"
                                    value='all'
                                />
                                <p>All</p>
                            </div>
                            <div 
                                className={
                                    filteredData.pet === "cat" 
                                        ? 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 bg-black-100 hover:bg-white-200 border-black-500 py-[4px]' 
                                        : 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 hover:bg-white-200 border-black-500 py-[4px]'
                                }
                                onClick={() => setFilteredData({ ...filteredData, pet: "cat" })}
                            >
                                <input
                                    className='absolute opacity-0 cursor-pointer'
                                    type='radio'
                                    name="pet"
                                    id="cat"
                                    value='cat'
                                />
                                <p>Cat</p>
                            </div>
                            <div 
                                className={
                                    filteredData.pet === "dog" 
                                        ? 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 bg-black-100 hover:bg-white-200 border-black-500 py-[4px]' 
                                        : 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 hover:bg-white-200 border-black-500 py-[4px]'
                                }
                                onClick={() => setFilteredData({ ... filteredData, pet: "dog" })}
                            >
                                <input
                                    className='absolute opacity-0 cursor-pointer'
                                    type='radio'
                                    name="pet"
                                    id="dog"
                                    value='dog'
                                />
                                <p>Dog</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-stretch gap-[8px]'>
                        <label 
                            className='font-semibold'
                            htmlFor='region'
                        >
                            Region
                        </label>
                        <div className='px-[6px]'>
                            <select
                                id="region"
                                name="region"
                                value={filteredData.region}
                                onChange={(e) => handleFormChange(e, setFilteredData)}
                                required
                                className="cursor-pointer border-1 border-black-400 rounded-[5px] py-[6px] px-[8px] w-full"
                                >
                                <option
                                key="dp-region"
                                value=""
                                disabled
                                >
                                    -- Choose a Region --
                                </option>
                                {regions
                                    .slice()
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map((r) => (
                                    <option
                                        key={r.code}
                                        value={r.name}
                                        className="cursor-pointer"
                                    >
                                        {r.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col items-stretch gap-[8px]'>
                        <label
                        className='font-semibold'
                        htmlFor='city'
                        >
                            City
                        </label>
                        <div className='px-[6px]'>
                            <select
                                id="city"
                                name="city"
                                value={filteredData.city}
                                onChange={(e) => handleFormChange(e, setFilteredData)}
                                required
                                className="cursor-pointer border-1 border-black-400 rounded-[5px] py-[6px] px-[8px] w-full"
                            >
                                <option
                                    key="dp-city"
                                    value=""
                                    disabled
                                >
                                    -- Choose a City --
                                </option>
                                {cities
                                    .slice()
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map((c) => (
                                    <option
                                        key={c.code}
                                        value={c.name}
                                        className="cursor-pointer"
                                    >
                                        {c.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <label
                            className='font-semibold'
                            htmlFor='date_range'
                        >
                                Date Missing
                        </label>
                        <div className='flex flex-col gap-[4px] px-[6px]'>
                            <div className='flex flex-row gap-[6px]'>
                                <input 
                                    type="radio"
                                    name="date_range"
                                    id="24_hours"
                                    value="24_hours"
                                    onChange={(e) => handleFormChange(e, setFilteredData)}
                                    className='cursor-pointer accent-coral-600'
                                />
                                <p>Last 24 hours</p>
                            </div>
                            <div className='flex flex-row gap-[6px]'>
                                <input 
                                    type="radio"
                                    name="date_range"
                                    id="3_days"
                                    value="3_days"
                                    onChange={(e) => handleFormChange(e, setFilteredData)}
                                    className='cursor-pointer accent-coral-600' 
                                />
                                <p>Last 3 days</p>
                            </div>
                            <div className='flex flex-row gap-[6px]'>
                                <input 
                                    type="radio"
                                    name="date_range"
                                    id="last_week"
                                    value="last_week"
                                    onChange={(e) => handleFormChange(e, setFilteredData)}
                                    className='cursor-pointer accent-coral-600' 
                                />
                                <p>Last week</p>
                            </div>
                            <div className='flex flex-row gap-[6px]'>
                                <input 
                                    type="radio"
                                    name="date_range"
                                    id="last_month"
                                    onChange={(e) => handleFormChange(e, setFilteredData)}
                                    value="last_month"
                                    className='cursor-pointer accent-coral-600'
                                />
                                <p>Last month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[6px]'>
                    <NormalButton 
                        className={'bg-white-100 hover:bg-white-200 !text-black-600 hover:text-black-500 shadow-none border-1 border-black-600'}
                        innerHTML={"Reset"} 
                    />
                    <NormalButton
                        className={'shadow-none'}
                        innerHTML={"Apply Filter"} 
                    />
                </div>
            </div>
        </form>
    </div>
  )
}

export default PetReportsFilter