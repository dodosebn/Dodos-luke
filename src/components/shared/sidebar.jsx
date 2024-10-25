import React, { useState } from "react"; 
import { DASHBOARD_SIDEBAR } from "../link/navs"; 
import { Link, useNavigate } from "react-router-dom"; 
import { AiFillCar, AiOutlineMenu } from "react-icons/ai";
import {DASHBOARD_SIDEBAR_BOTTOM_LINKS} from "../link/navs";

const Sidebar = () => {

  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); 

  
  const handleLinkClick = (path) => {
    if (isMobile) {
      setIsMobile(false); 
      setTimeout(() => {
        navigate(path); 
      }, 200); 
    } else {
      navigate(path);
    }
  };

  return (
    <div className="relative">
      
      <button
        onClick={() => setIsMobile(!isMobile)}
        className="absolute top-5 left-5 z-50 md:hidden"
      >
        {isMobile ? (
          <AiOutlineMenu fontSize={26} color="red" className="transition duration-200 ease-out" />
        ) : (
          <AiOutlineMenu fontSize={24} />
        )}
      </button>

  
      <aside
        className={`w-64 h-full bg-gray-800 text-white p-5 fixed top-5 left-0 transition-transform transform rounded-sm ${
          isMobile ? "translate-x-0" : "-translate-x-full transition ease-in-out duration-200"
        } md:relative md:translate-x-0 md:block z-40 opacity-1`}
      >
  
        <div className="flex gap-2 px-1 py-6 cursor-default">
          {isMobile ? <AiFillCar fontSize={30} className="hidden" />  :<AiFillCar fontSize={30} className="text-yellow-500 shadow-md" /> }
          
          <h1 className="text-2xl" style={{ textShadow: "2px 2px 1px red" }}>
            Dodo's Luxe
          </h1>
        </div>
        
        <nav className="flex flex-col gap-y-9">
          <ul>
            {DASHBOARD_SIDEBAR.map((data) => (
              <li key={data.key} className="mb-1">
                <Link
                to={data.path}
                  className="flex items-center p-2 hover:bg-gray-700 rounded"
                  onClick={() => handleLinkClick(data.path)} 
                >
                  <span className="mr-2">{data.icon}</span>
                  <p className="text-lg">{data.label}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((data) => (
              < li key={data.key} className="mb-1">
                <Link
                to={data.path}
                  className="flex items-center p-2 hover:bg-gray-700 rounded"
                  onClick={() => handleLinkClick(data.path)} 
                >
                  <span className="mr-2">{data.icon}</span>
                  <p className="text-lg">{data.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
