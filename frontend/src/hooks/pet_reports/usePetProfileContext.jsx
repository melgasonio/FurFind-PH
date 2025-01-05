import { useContext } from "react";
import { PetProfileContext } from "../../context/pet_profile/PetProfileContext";

export const usePetProfileContext = () => {
    const context = useContext(PetProfileContext);

    if (!context) {
        throw Error('usePetProfileContext must only be used in PetProfileContextProvider');
    }

    return context;
}