import Posts from "./Posts"

const DeleteOwnPost = () => {
  return (
    <div>
        <div className="fixed w-screen h-screen bg-black-400 z-10 opacity-75">
            I'm on top
        </div>
        <Posts />
    </div>
  )
}

export default DeleteOwnPost