import { useContext } from "react";
import { PetProfileContext } from "../../context/pet_profile/PetProfileContext";

export const useGetPetReport = () => useContext(PetProfileContext);