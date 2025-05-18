import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);

    return(
        <DashboardContext.Provider value={{ isDashboardOpen, setIsDashboardOpen }}>
            {children}
        </DashboardContext.Provider>
    );
}