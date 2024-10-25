import { HiOutlineHome, HiOutlineUsers, HiOutlineCollection, HiOutlineShoppingCart,
   HiOutlineQuestionMarkCircle, HiOutlineLibrary, HiOutlineCog, HiOutlineLogout} from "react-icons/hi";
export const DASHBOARD_SIDEBAR = [
  {
    key: 1,
    label: "Home",
    path: "/",
    icon: <HiOutlineHome/>,
  },
  {
    key: 2,
    label: "Dashboard",
    path: "/dashboard",
    icon: < HiOutlineLibrary />,
  },
  {
    key: 4,
    label: "Products",
    path: "/products",
    icon: <HiOutlineCollection/>,
  },
  {
    key: 5,
    label: "Orders",
    path: "/orders",
    icon: < HiOutlineShoppingCart  />,
  },
  {
    key: 6,
    label: "Customers",
    path: "/customers",
    icon: < HiOutlineUsers  />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 1,
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: 2,
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
  {
key: 3,
label: "Logout",
path: "/logout",
icon: <HiOutlineLogout className="text-red-500 shadow-md"/>
  },
];
