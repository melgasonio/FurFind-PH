import { useContext } from "react";
import { LastButtonContext } from "../../context/pet_report/LastButtonContext";

export const useLastButtonContext = () => {
    const context = useContext(LastButtonContext);

    if (!context) {
        throw Error('useLastButtonContext must only be used in LastButtonContextProvider');
    }

    return context;
}