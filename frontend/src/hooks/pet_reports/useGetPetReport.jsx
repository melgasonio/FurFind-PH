import { usePetProfileContext } from "./usePetProfileContext";

export const useGetPetReport = () => {
    const { setPetProfile } = usePetProfileContext();
    const currentUrl = window.location.href;

    const getPetProfile = async () => {

        // Extract the ID, i.e., the strings that follows the last "/"
        const petProfileID = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);

        // Send a GET request
        const response = await fetch(`http://localhost:5000/api/petreports/${petProfileID}`);
        const json = await response.json();

        // Update petProfile
        setPetProfile(json);
    }

    return { getPetProfile };
}