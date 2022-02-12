import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Graphs",
        path: '/graph',
        icon: <BsIcons.BsGraphUp />,
        cName: 'nav-text'
    },
    {
        title: "Contact-Us",
        path: '/contactus',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]