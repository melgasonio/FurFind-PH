import { useState } from "react";

export const useNavToggle = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    console.log(isNavOpen)

    return {isNavOpen, setIsNavOpen};
}