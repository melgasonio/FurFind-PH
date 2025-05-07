import { useContext } from "react";
import { HasFilterAppliedContext } from "../../context/pet_report/HasFilterAppliedContext";

export const useHasFilterAppliedContext = () => {
    const context = useContext(HasFilterAppliedContext);

    if (!context) {
        throw Error('useHasFilterAppliedContext can only be used in HasFilterAppliedContextProvider')
    }

    return context;
}