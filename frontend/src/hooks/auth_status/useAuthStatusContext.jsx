import { useContext } from "react"
import { AuthStatusContext } from "../../context/auth_status/AuthStatusContext"

export const useAuthStatusContext = () => {
    const context = useContext(AuthStatusContext);

    if (!context) {
        throw Error('AuthStatusContext must only be used in')
    }

    return context;
}