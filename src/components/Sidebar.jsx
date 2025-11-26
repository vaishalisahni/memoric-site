import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sidebar({ setOpen }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
      onClick={() => setOpen(false)}
    >
      <div
        className="fixed left-0 top-0 w-64 h-full bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <span className="text-lg font-bold">Memoric AI</span>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="flex flex-col gap-3">
          {["Home", "Courses", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-2 rounded hover:bg-slate-100 font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
