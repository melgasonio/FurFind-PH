import { Link } from "react-router-dom";

import Logo from "./Logo";

import { useLastButtonContext } from "../hooks/pet_reports/useLastButtonContext";
import { useLogoutUser } from "../hooks/user/useLogoutUser";
import { useNavigationContext } from "../hooks/navigation/useNavigationContext";

import closeIcon from "../assets/navigation/close-icon.svg";
import hamburgerIcon from "../assets/navigation/hamburger-icon.svg";
import dashboardIcon from "../assets/navigation/dashboard-icon.png";
import { useDashboardContext } from "../hooks/dashboard/useDashboardContext";

const Navbar = () => {
  const { lastClicked } = useLastButtonContext();
  const { handleLogout } = useLogoutUser();
  const { isNavOpen, setIsNavOpen } = useNavigationContext();
  const { isDashboardOpen, setIsDashboardOpen } = useDashboardContext();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Lost & Found Pets", path: `/petreports/page/${lastClicked}` },
    { label: "Report a Pet", path: "/reportpet" },
    { label: "Login", path: "/login", className: "font-bold" },
    { label: "Sign Up", path: "/signup", className: "font-bold" },
    { label: "Logout", path: "/logout", className: "font-bold" },
  ];

  return (
    !isDashboardOpen && (
      isNavOpen ? (
        <div className='bg-white-100 h-screen w-full p-[42px] flex flex-col duration-200 ease-in-out font-lato'>
          {/* Header Section */}
          <div className="h-[52px] px-[4px] flex justify-between items-center border-b-[1px] border-black-100">
            <Link to="/" onClick={() => setIsNavOpen(false)}>
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
                      onClick={() => setIsNavOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>      
      ) : (
        // Render if navigation is closed
        <div className="fixed top-0 left-0 right-0 w-full h-[48px] bg-white-100 shadow-md flex items-center px-[8px] py-[4px] z-10">
          <div className="absolute left-[0px] px-[8px] py-[8px]">
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
          <div className="absolute right-[0px] px-[8px] py-[8px]">
            <img
              onClick={() => setIsDashboardOpen(true)}
              src={dashboardIcon}
              alt="Open Dashboard Button"
              className="w-[28px] h-[28px] cursor-pointer"
            />
          </div>
        </div>
      )
    )
  );
};

export default Navbar;
