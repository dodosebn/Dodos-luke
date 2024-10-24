import { BsBagDashFill } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { MdBorderColor } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle,
    HiOutlineCog}  from "react-icons/hi";
export const DASHBOARD_SIDEBAR = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/dashboard',
        icon: <BsBagDashFill />
    },
    {
        key: 'products',
        label: 'Products',
        path: '/products',
        icon: <AiOutlineProduct />
    },
    {
        key: 'orders',
        label: 'Orders',
        path: '/orders',
        icon: <MdBorderColor />
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <FaUsers />
    },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog/>
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle/>
    }
 ]