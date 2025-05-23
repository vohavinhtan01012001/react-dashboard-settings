import { Link, useNavigate } from "react-router";
import { menuList } from "./menu";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/useAuthStore";

export const Sidebar = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-4 w-64 h-full shadow-xl flex flex-col border-r justify-between">
      <div>
        <h3 className="text-2xl font-semibold my-10">Admin Dashboard</h3>
        <ul className="space-y-4">
          {menuList.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="block px-2 py-3 text-base font-semibold "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Button variant="default" className="w-full" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
