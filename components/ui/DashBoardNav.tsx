"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashBoardNav = () => {
  const pathname = usePathname();

  const tabs = [
    {
      name: "Product Registration",
      href: "/dashboard/product-registration",
      icon: "📝",
    },
    { name: "Manage Products", href: "/dashboard/manage-products", icon: "🛠️" },
    { name: "Scans", href: "/dashboard/scans", icon: "📱" },

    {
      name: "Counterfeit Reports",
      href: "/dashboard/counterfeit-reports",
      icon: "⚠️",
    },
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 h-screen bg-[#0b145e] text-white border-r ">
        {/* Sidebar header */}
        <div className="flex items-center justify-center h-16 px-4 border-b border-blue-800">
          <Link href="/dashboard" className="text-xl font-bold">
            DashBoard
          </Link>
        </div>

        {/* Sidebar tabs */}
        <div className="flex flex-col flex-grow p-4 overflow-y-auto">
          <nav className="flex-1 space-y-2">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                  pathname === tab.href
                    ? "bg-blue-800 text-white"
                    : "text-blue-200 hover:bg-blue-800 hover:text-white"
                }`}
              >
                <span className="mr-3 text-lg">{tab.icon}</span>
                <span className="text-sm font-medium">{tab.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-blue-800">
          <div className="flex items-center justify-between">
            <div className="text-sm text-blue-300">
              © {new Date().getFullYear()} Your Company
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNav;
