import { Link } from "react-router-dom";

import Logo from "./Logo";

import { useLastButtonContext } from "../hooks/pet_reports/useLastButtonContext";
import { useLogoutUser } from "../hooks/user/useLogoutUser";
import { useNavigationContext } from "../hooks/navigation/useNavigationContext";

import closeIcon from "../assets/navigation/close-icon.svg";
import hamburgerIcon from "../assets/navigation/hamburger-icon.svg";

const Navbar = () => {
  const { lastClicked } = useLastButtonContext();
  const { handleLogout } = useLogoutUser();
  const { isNavOpen, setIsNavOpen } = useNavigationContext();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Lost & Found Pets", path: `/petreports/page/${lastClicked}` },
    { label: "Report a Pet", path: "/reportpet" },
    { label: "Login", path: "/login", className: "font-bold" },
    { label: "Sign Up", path: "/signup", className: "font-bold" },
  ];

  return (
    isNavOpen ? (
      <div className='bg-white-100 h-screen w-full p-[42px] flex flex-col duration-200 ease-in-out'>
        {/* Header Section */}
        <div className="h-[52px] px-[4px] flex justify-between items-center border-b-[1px] border-black-100">
          <Link to="/">
            <Logo />
          </Link>
          <img
            onClick={() => setIsNavOpen(false)}
            src={closeIcon}
            alt="Close Menu Button"
            className="w-[16px] h-[16px] cursor-pointer"
          />
        </div>

        {/* Navigation Links */}
        <div className="h-full px-[8px] py-[24px]">
          <div className="px-[4px]">
            <ul className="flex flex-col gap-[12px]">
              {navLinks.map(({ label, path, className }) => (
                <li key={path} className={className || ""}>
                  <Link
                    to={path}
                    className="focus:text-coral-700 hover:text-coral-600"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="hidden">
                <button
                  onClick={handleLogout}
                  className="focus:text-coral-700 hover:text-coral-600"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>      
    ) : (
      // Render if navigation is closed
      <div className="fixed top-0 left-0 right-0 w-full h-[48px] bg-white-100 shadow-md flex items-center px-[8px] py-[4px] z-50">
        <div className="absolute left-0 px-[8px] py-[8px]">
          <img
            onClick={() => setIsNavOpen(true)}
            src={hamburgerIcon}
            alt="Open Menu Button"
            className="w-[16px] h-[16px] cursor-pointer"
          />
        </div>
        <Link className="flex justify-center items-center w-full" to="/">
          <Logo />
        </Link>
      </div>
    )
  );
};

export default Navbar;
