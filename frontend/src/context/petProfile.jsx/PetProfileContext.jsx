import { createContext, useState } from "react";

export const PetProfileContext = createContext();

export const PetProfileProvider = ({ children }) => {
    const [petProfile, setPetProfile] = useState(null);

    return (
        <PetProfileContext.Provider value={{ petProfile, setPetProfile }}>
            {children}
        </PetProfileContext.Provider>
    )
}