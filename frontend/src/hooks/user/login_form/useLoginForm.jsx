import { useUserContext } from "../useUserContext";

export const useLoginForm = () => {
    const { user, setUser } = useUserContext();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(user)

        try {
            const response = await fetch("http://localhost:5000/api/users/login/", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(user),
                headers: {"Content-Type": "application/json"}
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log("Logged in successfully")
        
        } catch (error) {
            console.error("Login failed:", error.message);
        }


    }

    return { handleChange, handleLogin }
}