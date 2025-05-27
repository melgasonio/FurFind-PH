import { useNavigate } from "react-router-dom";

import { useModalContext } from "../modal/useModalContext";

export const useDiscardPostEdit = () => {
    const navigate = useNavigate();

    const { setIsModalOpen } = useModalContext();

    const discardEditHandler = () => {
        console.log("Changes discarded");
        setIsModalOpen(false);
        navigate(-1);
    }

    return { discardEditHandler };
}