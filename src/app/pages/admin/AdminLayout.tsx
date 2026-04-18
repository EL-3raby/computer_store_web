import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ShoppingCart
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: "لوحة القيادة", path: "/admin", end: true },
    { icon: Package, label: "المنتجات", path: "/admin/products" },
    { icon: ShoppingCart, label: "الطلبات", path: "/admin/orders" },
    { icon: Users, label: "العملاء", path: "/admin/users" },
    { icon: Settings, label: "الإعدادات", path: "/admin/settings" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex rtl:flex-row" dir="rtl">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`
          fixed lg:static top-0 right-0 h-full z-50
          w-64 bg-neutral-900 border-l border-neutral-800
          flex flex-col transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-neutral-950 font-black text-lg shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              ع
            </div>
            <span className="text-xl font-bold">لوحة التحكم</span>
          </div>
          <button 
            className="lg:hidden text-neutral-400 hover:text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                  ${isActive 
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.1)]" 
                    : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                  }
                `}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-neutral-800">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-3 px-4 py-3 w-full text-neutral-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">الخروج للموقع</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-20 bg-neutral-900/50 backdrop-blur-md border-b border-neutral-800 flex items-center justify-between px-4 lg:px-8 z-30">
          <button
            className="lg:hidden p-2 text-neutral-400 hover:text-white"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center gap-4 mr-auto">
            {/* User Profile Mock */}
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-white">المدير العام</div>
                <div className="text-xs text-cyan-400">admin@adelabusultan.com</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                <Users size={20} className="text-neutral-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
