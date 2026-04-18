import { Link } from "react-router";
import { ShoppingCart, Search, Menu, User, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-neutral-950 font-black text-xl shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-all">
              ع
            </div>
            <span className="text-2xl font-black tracking-tight text-white ms-2">
              عادل <span className="text-cyan-400">أبو سلطان</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/">الرئيسية</NavLink>
            <NavLink to="/products?category=components">قطع الجهاز</NavLink>
            <NavLink to="/products?category=peripherals">ملحقات</NavLink>
            <NavLink to="/offers">عروض خاصة</NavLink>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-neutral-400 hover:text-cyan-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-neutral-400 hover:text-cyan-400 transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-neutral-400 hover:text-cyan-400 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-cyan-500 text-neutral-950 text-[10px] font-bold flex items-center justify-center rounded-full">
                3
              </span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-neutral-400 hover:text-cyan-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-b border-neutral-800 overflow-hidden"
          >
            <div className="flex flex-col py-4 px-4 gap-4">
              <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>الرئيسية</MobileNavLink>
              <MobileNavLink to="/products" onClick={() => setIsMobileMenuOpen(false)}>قطع الجهاز</MobileNavLink>
              <MobileNavLink to="/peripherals" onClick={() => setIsMobileMenuOpen(false)}>ملحقات</MobileNavLink>
              <MobileNavLink to="/offers" onClick={() => setIsMobileMenuOpen(false)}>عروض خاصة</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className="text-neutral-300 font-medium hover:text-cyan-400 relative group transition-colors py-2"
    >
      {children}
      <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string, children: React.ReactNode, onClick: () => void }) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="text-neutral-300 font-medium hover:text-cyan-400 p-2 hover:bg-neutral-800 rounded-lg transition-colors"
    >
      {children}
    </Link>
  );
}
