import { createContext, useState } from "react"

export const AuthStatusContext = createContext();

export const AuthStatusContextProvider = ({ children }) => {
    const [authStatus, setAuthStatus] = useState("guest");

    return (
        <AuthStatusContext.Provider value={{ authStatus, setAuthStatus }}>
            {children}
        </AuthStatusContext.Provider>
    )
}
