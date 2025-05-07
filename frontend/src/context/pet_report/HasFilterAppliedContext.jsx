import { createContext, useState } from "react";

export const HasFilterAppliedContext = createContext();

export const HasFilterAppliedContextProvider = ({ children }) => {
    const [hasFilterApplied, setHasFilterApplied] = useState(false);

    return (
        <HasFilterAppliedContext.Provider value={{ hasFilterApplied, setHasFilterApplied }}>
            {children}
        </HasFilterAppliedContext.Provider>
    );
}