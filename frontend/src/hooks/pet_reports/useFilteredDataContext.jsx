import { useContext } from "react";
import { FilteredDataContext } from "../../context/pet_report/FilteredDataContext";

export const useFilteredDataContext = () => {
    const context = useContext(FilteredDataContext);

    if (!context) {
        throw Error('useFilteredDataContext must only be used in FilteredDataContextProvider')
    }

    return context;
}