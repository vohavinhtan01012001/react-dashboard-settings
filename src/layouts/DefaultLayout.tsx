import { Sidebar } from "@/components/features/layout/Sidebar";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

export const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="hidden lg:block lg:w-64">
        <Sidebar />
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-black shadow-md transform transition-transform duration-300 lg:hidden",
          {
            "translate-x-0": sidebarOpen,
            "-translate-x-full": !sidebarOpen,
          }
        )}
      >
        <Sidebar />
      </div>

      <div className="flex-1 p-4 lg:p-8 overflow-auto">
        <button
          className="lg:hidden mb-4 px-3 py-2 rounded"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar menu"
        >
          <Menu />
        </button>

        {children}
      </div>
    </div>
  );
};
