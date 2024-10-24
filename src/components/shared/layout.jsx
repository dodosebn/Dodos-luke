import React from "react";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import Header from "../header";

const Layout = () => {
  return (
    <div className="flex h-screen  bg-neutral-100  w-screen overflow-hidden">
      <Sidebar className="h-full" />
      <div className="flex flex-col flex-grow">
        <Header className="z-10" />
        <div className="flex-grow overflow-y-auto z-0 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
