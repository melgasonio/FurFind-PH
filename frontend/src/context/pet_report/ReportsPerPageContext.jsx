import { createContext } from "react";

export const ReportsPerPageContext = createContext();

export const ReportsPerPageContextProvider = ({ children }) => {
    const reportsPerPage = 20;

    return (
        <ReportsPerPageContext.Provider value={{ reportsPerPage }}>
            {children}
        </ReportsPerPageContext.Provider>
    );
}