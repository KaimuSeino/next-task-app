import { FaRegCheckSquare, FaRegClock, FaTasks } from "react-icons/fa";
import NavItem from "./nav-item/nav-item";

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navList: NavItemType[] = [
    { id: 1, label: "All tasks", link: "/", icon: <FaTasks className="size-5" /> },
    { id: 2, label: "completed tasks", link: "/completed", icon: <FaRegCheckSquare className="size-5" /> },
    { id: 3, label: "Expired tasks", link: "/expired", icon: <FaRegClock className="size-5" /> },
  ]
  return (
    <div className="mt-24">
      {navList.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default NavList;