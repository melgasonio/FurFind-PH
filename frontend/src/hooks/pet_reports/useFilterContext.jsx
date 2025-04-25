import { useContext } from "react";
import { FilterContext } from "../../context/pet_report/FilterContext"

export const useFilterContext = () => {
    const context = useContext(FilterContext);

    if (!context) {
        throw Error('useFilterContext must only be used in FitlerContextProvider');
    }

    return context;
}