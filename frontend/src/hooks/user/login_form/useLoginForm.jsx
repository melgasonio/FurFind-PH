import { useUserContext } from "../useUserContext";
import { useState } from "react";

export const useLoginForm = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const { user, setUser } = useUserContext();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/users/login/", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(form),
                headers: {"Content-Type": "application/json"}
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            const userObj = json.user;

            setUser(userObj)

        } catch (error) {
            console.error("Login failed:", error.message);
        }
    }

    return { handleChange, handleLogin, form }
}