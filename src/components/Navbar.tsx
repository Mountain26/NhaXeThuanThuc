import { Phone, Menu } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-[#D62828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo placeholder */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D62828] to-[#B01F1F] rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">LOGO</span>
            </div>
            <span className="text-[#1A1A1A]">Bus Company Name</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[#1A1A1A] hover:text-[#D62828] transition-colors">
              Home
            </a>
            <a href="#" className="text-[#1A1A1A] hover:text-[#D62828] transition-colors">
              Routes
            </a>
            <a href="#" className="text-[#1A1A1A] hover:text-[#D62828] transition-colors">
              Booking
            </a>
            <a href="#" className="text-[#1A1A1A] hover:text-[#D62828] transition-colors">
              Contact
            </a>
            <Button size="sm" className="bg-[#D62828] hover:bg-[#B01F1F]">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6 text-[#1A1A1A]" />
          </button>
        </div>
      </div>
    </nav>
  );
}