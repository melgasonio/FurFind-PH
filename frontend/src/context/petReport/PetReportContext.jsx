import { createContext, useReducer } from "react";

export const PetReportContext = createContext();

export const PetReportsReducer = (state, action) => {
  switch (action.type) {
      case 'SET_PETREPORTS':
          return {
              petReports: action.payload
          }
      case 'CREATE_PETREPORT':
          return {
              petReports: [action.payload, ...state.petReports]
          }
      case 'UPDATE_PETREPORT':
          return {
              petReports: state.petReports.map((p) => p._id === action.payload._id)
          }
      case 'DELETE_PETREPORT':
          return {
              petReports: state.petReports.filter((p) => p._id !== action.payload._id)
          }
      default:
          return state
  }
}

export const PetReportContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PetReportsReducer, {
        petReports: []
    })

  return (
    <PetReportContext.Provider value={{...state, dispatch}}>
        {children}
    </PetReportContext.Provider>
  )
}