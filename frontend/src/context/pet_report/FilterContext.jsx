import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
    const [isFiltered, setIsFiltered] = useState(false);

    return (
        <FilterContext.Provider value={{ isFiltered, setIsFiltered }}>
            {children}
        </FilterContext.Provider>
    )
}