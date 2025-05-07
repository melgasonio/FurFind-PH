import { createContext, useState } from "react";

export const FilteredDataContext = createContext();

export const FilteredDataContextProvider = ({ children }) => {
    const [filteredData, setFilteredData] = useState({
        type: "",
        pet: "",
        region: "",
        city: "",
        date_range: ""
    })

    return (
        <FilteredDataContext.Provider value={{ filteredData, setFilteredData }}>
            {children}
        </FilteredDataContext.Provider>
    )
}