import { useContext } from "react";
import { ModalContext } from "../../context/modal/ModalContext";

export const useModalContext = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw Error("ModalContext must only be used inside ModalContextProvider")
    }

    return context;
}