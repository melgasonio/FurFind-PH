import { createContext } from "react";
import { useState } from "react";

export const PetReportContext = createContext();

export const PetReportContextProvider = ({ children }) => {
    const [petReports, setPetReports] = useState([]);

  return (
    <PetReportContext.Provider value={{ petReports, setPetReports }}>
        {children}
    </PetReportContext.Provider>
  )
}