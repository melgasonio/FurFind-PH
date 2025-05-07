import { createContext, useState } from "react";

export const FilteredCitiesContext = createContext();

export const FilteredCitiesContextProvider = ({ children }) => {
    const [filteredCities, setFilteredCities] = useState([]);

    return (
        <FilteredCitiesContext.Provider value={{ filteredCities, setFilteredCities }}>
            {children}
        </FilteredCitiesContext.Provider>
    );
}