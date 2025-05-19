import { Link } from "react-router-dom";

import { useDashboardContext } from "../hooks/dashboard/useDashboardContext";

import closeIcon from "../assets/navigation/close-icon.svg";

import Logo from "./Logo";

const Dashboard = () => {
    const dashboardLinks = [
        { label: "My Posts", path: "/posts" },
        { label: "Messages", path: "/messages" },
        { label: "Account Settings", path:"/settings" }
    ];

    const { isDashboardOpen, setIsDashboardOpen } = useDashboardContext();


  return (
    isDashboardOpen && (
    <div className="bg-white-100 h-screen w-full p-[42px] flex flex-col duration-200 ease-in-out font-lato">
        <div className="h-[52px] px-[4px] flex justify-between items-center border-b-[1px] border-black-100">
            <h1 className="font-raleway text-logo text-coral-700 font-black hover:text-coral-600">My Dashboard</h1>
            <img
                onClick={() => setIsDashboardOpen(false)}
                src={closeIcon}
                alt="Close Menu Button"
                className="w-[16px] h-[16px] cursor-pointer"
            />
        </div>
        <div className="h-full px-[8px] py-[24px]">
          <div className="px-[4px]">
            <ul className="flex flex-col gap-[12px]">
              {dashboardLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="focus:text-coral-700 hover:text-coral-600"
                    onClick={() => setIsDashboardOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
    )
  )
}

export default Dashboard