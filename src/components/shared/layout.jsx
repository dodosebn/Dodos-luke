import React from "react";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import Header from "../header";

const Layout = () => {
  return (
    <div className="flex h-screen  bg-neutral-100  w-screen overflow-hidden">
      <Sidebar className="h-full" />
      <div className="flex flex-col">
        <Header className="z-10" />
        <div className="overflow-y-auto overflow-x-hidden z-1 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
