import { useReducer, React } from "react";
import { petReportsReducer } from "./petReportsReducer";
import { PetReportContext } from "./petReportContext";

const PetReportContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(petReportsReducer, {
        petReports: null
    })

  return (
    <PetReportContext.Provider value={{...state, dispatch}}>
        {children}
    </PetReportContext.Provider>
  )
}

export default PetReportContextProvider