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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user)

        try {
            const response = await fetch("http://localhost:5000/api/users/login/", {
                method: "POST",
                body: JSON.stringify(user),
                headers: {"Content-Type": "application/json"}
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        
        } catch (error) {
            console.error("Login failed:", error.message);
        }


    }

    return { handleChange, handleSubmit }
}