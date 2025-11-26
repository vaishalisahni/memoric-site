import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar({ setSidebarOpen }) {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="md:hidden p-2"
            onClick={() => setSidebarOpen((s) => !s)}
          >
            <Menu className="w-5 h-5" />
          </Button>

          <a href="#home" className="hidden md:flex items-center gap-2">
            <span className="text-lg font-bold">Memoric AI</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          {["Home", "Courses", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm hover:text-slate-700 font-medium transition-colors"
            >
              {item}
            </a>
          ))}

          <Button className="ml-4">Login</Button>
        </nav>
      </div>
    </header>
  );
}
