import { createContext, useState } from "react";

export const FilteredPetReportContext = createContext();

export const FilteredPetReportContextProvider = ({ children }) => {
    const [filteredPetReports, setFilteredPetReports] = useState([]);

  return (
    <FilteredPetReportContext.Provider value={{ filteredPetReports, setFilteredPetReports }}>
        {children}
    </FilteredPetReportContext.Provider>
  )
}