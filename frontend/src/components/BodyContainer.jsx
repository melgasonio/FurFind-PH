const BodyContainer = ({ children, className }) => {
  return (
    <div className={`pt-[48px] w-full ${className}`}>
        {children}
    </div>
  )
}

export default BodyContainer;