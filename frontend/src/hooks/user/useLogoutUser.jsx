

export const useLogoutUser = () => {

    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/users/logout/", {
                method: "POST",
                credentials: "include",
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log("Logged out successfully");

        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    }

    return { handleLogout }
}