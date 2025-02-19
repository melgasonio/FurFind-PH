import { useContext } from "react";
import { NavigationContext } from "../../context/navigation/NavigationContext";

export const useNavigationContext = () => {
    const context = useContext(NavigationContext);

    if (!context) {
        throw Error('useNavigationContext must only be used in NavigationContextProvider');
    }

    return context;
}