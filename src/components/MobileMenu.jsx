import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-slate-900">MemoricAI</span>
          <Button variant="ghost" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {["Home", "Courses", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors font-medium"
              onClick={onClose}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
