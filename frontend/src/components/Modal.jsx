const Modal = ({ children }) => {
    return (
        <div>
            <div className="fixed w-screen h-screen z-20 bg-black-600 opacity-[50%]" />
            <div className="fixed w-screen h-screen z-30 flex items-center justify-center">
                <div className="bg-white-100 rounded-[10px] w-[360px] sm:w-[420px] md:w-[720px]">
                    <div className="p-[24px] flex flex-col gap-[8px]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal