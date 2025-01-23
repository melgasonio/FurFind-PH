import { useAuthStatusContext } from "../auth_status/useAuthStatusContext";

export const useLogoutUser = () => {
    const { setAuthStatus } = useAuthStatusContext();

    const logoutUser = (e) => {
        e.preventDefault();

        setAuthStatus("guest");
    }

    return { logoutUser }
}