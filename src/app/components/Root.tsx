import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect } from "react";

export function Root() {
  useEffect(() => {
    // Set RTL direction for the whole app
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans flex flex-col selection:bg-cyan-500 selection:text-neutral-950">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
