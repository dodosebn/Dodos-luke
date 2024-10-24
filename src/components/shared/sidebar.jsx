import React, { useState } from "react";
import { DASHBOARD_SIDEBAR } from "../link/navs";
import { Link } from "react-router-dom";
import { AiFillCar } from "react-icons/ai";
import { FcMenu } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
const Sidebar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const BoxWrapper = ({ children }) => {
        return <div className="relative">
            <div className=" pl-7 font-medium">
            {children}</div></div>;
    };

    return (
        <div>
            <aside className="md:hidden">
                {isMobile ? (
                    <BoxWrapper>
                        <button onClick={() => setIsMobile(false)}>
                            <AiOutlineClose />
                        </button>
                    </BoxWrapper>
                ) : (
                    <BoxWrapper>
                        <button onClick={() => setIsMobile(true)}>
                            <FcMenu />
                        </button>
                    </BoxWrapper>
                )}
            </aside>
            <aside className={`w-64 h-full bg-gray-800 text-white p-5 fixed top-5 left-0 duration-200
                transition-transform transform rounded-sm ${isMobile ? 'translate-x-0' : '-translate-x-full transition ease-out'} md:relative md:translate-x-0 md:block z-50`}>
                <div className="flex gap-2 px-2 py-6 cursor-default">
                    <AiFillCar fontSize={29} className="text-red-500 shadow-md" />
                    <h1 className="text-xl text-shadow-md">Dodo's Luxe</h1>
                </div>
                <nav>
                    <ul>
                        {DASHBOARD_SIDEBAR.map((data) => (
                            <li key={data.key} className="mb-2">
                                <Link to={data.path} className="flex items-center p-2 hover:bg-gray-700 rounded">
                                    <span className="mr-2">{data.icon}</span>
                                    <p className="text-lg">{data.label}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul>

                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;