import { useState, useEffect } from 'react';

import NormalButton from '../buttons/NormalButton';

import closeIcon from "../../assets/pet-reports/close-icon.png";

import { useFilterContext } from '../../hooks/pet_reports/useFilterContext';
import { usePsgcData } from '../../hooks/report_form/usePsgcData';
import { useFilteredDataContext } from '../../hooks/pet_reports/useFilteredDataContext';
import { useFilterReports } from '../../hooks/pet_reports/useFilterReports';
import { useHasFilterAppliedContext } from '../../hooks/pet_reports/useHasFilterAppliedContext';
import { useFilteredCitiesContext } from '../../hooks/pet_reports/useFilteredCitiesContext';

const PetReportsFilter = () => {

    const { setIsFiltered } = useFilterContext();
    const { filterReports } = useFilterReports();
    const { regions, fetchCities } = usePsgcData();
    const { filteredData, setFilteredData } = useFilteredDataContext();
    const { setHasFilterApplied } = useHasFilterAppliedContext();
    const { filteredCities, setFilteredCities } = useFilteredCitiesContext();

    useEffect(() => {
        const loadCities = async () => {
            const region = filteredData.region;

            if (region === "") {
                setFilteredCities([]);
            }
            
            if (region !== "" && !filteredCities) {
                const cities = await fetchCities(region);
                setFilteredCities(cities);
            }
        }
        
        loadCities();
    }, []);

    const handleFormChange = async (e, setFilteredData) => {
        const { name, value } = e.target

        setFilteredData((prevData) => ({
            ...prevData,
            [name]: value
        }))

        if (name === "region") {
            const region = value;
            const cities = await fetchCities(region);
            setFilteredCities(cities);
            setFilteredData((prevData) => ({ 
                ...prevData,
                region: region,
                city: ""
            }));            
        }
    }

    const handleApplyFilterClick = () => {
        filterReports(filteredData);
        setHasFilterApplied(true);
        setIsFiltered(false);
    }

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
        <form 
            className='text-black-500 text-[16px]'
            onSubmit={(e) => e.preventDefault()}
        >
            <div className='flex flex-col gap-[36px]'>
                <div className='flex flex-col gap-[12px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <label
                            className='font-semibold'
                            htmlFor='type'
                        >
                            Status of Pet:
                        </label>
                        <div className='flex-grow flex flex-row justify-between items-center gap-[8px] px-[6px]'>
                            <div 
                                className={
                                    filteredData.type === "Lost" 
                                        ? 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 bg-black-100 hover:bg-white-200 border-black-500 py-[4px]' 
                                        : 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 hover:bg-white-200 border-black-500 py-[4px]'
                                }
                                onClick={() => setFilteredData(prev => ({ ...prev, type: "Lost" }))}
                            >
                                <input
                                    className='absolute opacity-0 cursor-pointer'
                                    type='radio'
                                    id="Lost"
                                />
                                <p>Lost</p>
                            </div>
                            <div 
                                className={
                                    filteredData.type === "Found" 
                                        ? 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 bg-black-100 hover:bg-white-200 border-black-500 py-[4px]' 
                                        : 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 hover:bg-white-200 border-black-500 py-[4px]'
                                }
                                onClick={() => setFilteredData(prev => ({ ...prev, type: "Found" }))}
                            >
                                <input
                                    className='absolute opacity-0 cursor-pointer'
                                    type='radio'
                                    id="Found"
                                />
                                <p>Found</p>
                            </div>
                        </div>
                    </div>                
                    <div className='flex flex-col gap-[8px]'>
                        <label
                            className='font-semibold'
                            htmlFor='pet'
                        >
                            What is your pet?
                        </label>
                        <div className='flex-grow flex flex-row justify-between items-center gap-[8px] px-[6px]'>
                            <div 
                                className={
                                    filteredData.pet === "All" 
                                        ? 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 bg-black-100 hover:bg-white-200 border-black-500 py-[4px]' 
                                        : 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 hover:bg-white-200 border-black-500 py-[4px]'
                                }
                                onClick={() => setFilteredData(prev => ({ ...prev, pet: "All" }))}
                            >
                                <input
                                    className='absolute opacity-0 cursor-pointer'
                                    type='radio'
                                    id="All"
                                />
                                <p>All</p>
                            </div>
                            <div 
                                className={
                                    filteredData.pet === "Cat" 
                                        ? 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 bg-black-100 hover:bg-white-200 border-black-500 py-[4px]' 
                                        : 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 hover:bg-white-200 border-black-500 py-[4px]'
                                }
                                onClick={() => setFilteredData(prev => ({ ...prev, pet: "Cat" }))}
                            >
                                <input
                                    className='absolute opacity-0 cursor-pointer'
                                    type='radio'
                                    id="cat"
                                />
                                <p>Cat</p>
                            </div>
                            <div 
                                className={
                                    filteredData.pet === "Dog" 
                                        ? 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 bg-black-100 hover:bg-white-200 border-black-500 py-[4px]' 
                                        : 'flex-1 flex flex-row justify-center cursor-pointer rounded-[15px] border-1 hover:bg-white-200 border-black-500 py-[4px]'
                                }
                                onClick={() => setFilteredData(prev => ({ ...prev, pet: "Dog" }))}
                            >
                                <input
                                    className='absolute opacity-0 cursor-pointer'
                                    type='radio'
                                    id="dog"
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
                            Region where the pet was last seen:
                        </label>
                        <div className='px-[6px]'>
                            <select
                                id="region"
                                name="region"
                                value={filteredData.region}
                                onChange={(e) => handleFormChange(e, setFilteredData)}
                                className="cursor-pointer border-1 border-black-400 rounded-[5px] py-[6px] px-[8px] w-full"
                                >
                                <option
                                key="dp-region"
                                value=""
                                disabled
                                >
                                    -- Select One --
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
                            City/Municipality where the pet was last seen:
                        </label>
                        <div className='px-[6px]'>
                            <select
                                id="city"
                                name="city"
                                value={filteredData.city}
                                onChange={(e) => handleFormChange(e, setFilteredData)}
                                className="cursor-pointer border-1 border-black-400 rounded-[5px] py-[6px] px-[8px] w-full"
                            >
                                <option
                                    key="dp-city"
                                    value=""
                                    disabled
                                >
                                    -- Select One --
                                </option>
                                {filteredCities
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
                                Date the pet first went missing/found:
                        </label>
                        <div className='flex flex-col gap-[4px] px-[6px]'>
                            <div className='flex flex-row gap-[6px]'>
                                <input 
                                    type="date"
                                    name="date_range"
                                    id="date"
                                    value={filteredData.date_range}
                                    onChange={(e) => handleFormChange(e, setFilteredData)}
                                    className="cursor-pointer border-1 border-black-400 rounded-[5px] py-[6px] px-[8px] w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[6px]'>
                    <NormalButton
                        type={"button"}
                        className={'bg-white-100 hover:bg-white-200 !text-black-600 hover:text-black-500 shadow-none border-1 border-black-600'}
                        innerHTML={"Reset"}
                        onClick={() => setFilteredData({
                            type: "",
                            pet: "",
                            region: "",
                            city: "",
                            date_range: ""
                        })}
                    />
                    <NormalButton
                        className={'shadow-none'}
                        innerHTML={"Apply Filter"} 
                        onClick={handleApplyFilterClick}
                    />
                </div>
            </div>
        </form>
    </div>
  )
}

export default PetReportsFilter