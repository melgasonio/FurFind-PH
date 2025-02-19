import { createContext } from "react";
import { useState } from "react";

export const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <NavigationContext.Provider value={{ isNavOpen, setIsNavOpen }}>
            {children}
        </NavigationContext.Provider>
    )
}