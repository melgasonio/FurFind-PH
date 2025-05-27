import { useModalContext } from "../modal/useModalContext";

export const useDeleteOwnPost = () => {
    const { setIsModalOpen } = useModalContext();

    // Update later
    const deletePostHandler = () => {
        console.log("Post deleted");
        
        setIsModalOpen(false);
    }

    return { deletePostHandler }
}