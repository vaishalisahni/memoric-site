import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
            M
          </div>
          <span className="text-lg font-semibold">MemoricAI</span>
        </Link>

        {/* Desktop nav (hidden on mobile) */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/courses" className="text-sm">Courses</Link>
          <Link to="/about" className="text-sm">About</Link>
          <Link to="/contact" className="text-sm">Contact</Link>
        </nav>

        {/* Mobile Sheet Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="menu" className="p-2">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 flex items-center justify-center text-white font-semibold">M</div>
                  <span className="font-semibold">MemoricAI</span>
                </div>
                <SheetTrigger asChild>
                  <button className="p-1"><X className="h-5 w-5" /></button>
                </SheetTrigger>
              </div>

              <nav className="flex flex-col gap-4">
                <Link to="/" className="text-lg" onClick={() => window.scrollTo(0,0)}>Home</Link>
                <Link to="/courses" className="text-lg">Courses</Link>
                <Link to="/about" className="text-lg">About</Link>
                <Link to="/contact" className="text-lg">Contact</Link>
                <div className="mt-4">
                  <Button asChild><a href="/mnt/data/WebSite_Ideas.pptx" download>Download Brief</a></Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
