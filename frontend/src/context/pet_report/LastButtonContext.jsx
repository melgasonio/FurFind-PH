import { createContext, useState } from "react";

export const LastButtonContext = createContext();

export const LastButtonContextProvider = ({ children }) => {
    const [lastClicked, setLastClicked] = useState(null);

    return (
        <LastButtonContext.Provider value={{ lastClicked, setLastClicked }}>
            {children}
        </LastButtonContext.Provider>
    )
}