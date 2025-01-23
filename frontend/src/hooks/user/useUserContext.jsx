import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

export const useUserContext = () => {
    const context = useContext(UserContext);

    if(!context) {
        throw Error('UserContext must only be used in UserContextProvider');
    }

    return context;
}