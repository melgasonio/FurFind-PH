import { useContext } from "react";
import { PetProfileContext } from "../../context/petProfile.jsx/PetProfileContext";

export const useGetPetReport = () => useContext(PetProfileContext);