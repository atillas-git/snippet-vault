import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookTemplateIcon, ChevronLeftIcon, ChevronRightIcon, File, LogOutIcon, MountainIcon, Settings } from "lucide-react";
import { DashboardIcon } from "@radix-ui/react-icons";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: DashboardIcon, label: "Dashboard", path: "/dashboard" },
    { icon: BookTemplateIcon, label: "Templates", path: "/app/templates" },
    { icon: File, label: "Documents", path: "/documents" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside
      className={cn(
        "flex flex-col bg-slate-800 text-white transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-72"
      )}
    >
      <div className="p-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <MountainIcon className="h-6 w-6" />
          {!isCollapsed && <span className="text-xl font-bold">Acme Inc</span>}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex"
        >
          {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </Button>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center space-x-2 py-2 px-4 rounded transition-colors",
                  location.pathname === item.path
                    ? "bg-slate-700 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white",
                    isCollapsed && "px-2 py-2 justify-center"
                )}
              >
                <item.icon className="h-5 w-5" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <Button
          variant="outline"
          className={cn("w-full", isCollapsed && "p-2","text-slate-900")}
        >
          {isCollapsed ? <LogOutIcon /> : "Logout"}
        </Button>
      </div>
    </aside>
  );
}