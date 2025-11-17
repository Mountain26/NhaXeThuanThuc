import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D62828] to-[#B01F1F] rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">LOGO</span>
              </div>
              <span className="text-white">Company Name</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Company description placeholder text. Leading bus
              service provider with years of experience.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-white/10 hover:bg-[#D62828] rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-[#D62828] rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-[#D62828] rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Routes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Booking Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Ticket Booking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Route Information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Special Offers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Corporate Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">
              Contact Placeholder
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D62828] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  Address placeholder text here, City Name,
                  Country
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D62828] flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  1900 XXXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D62828] flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  contact@placeholder.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Bus Company Name. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-400 hover:text-[#D62828] text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-[#D62828] text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-[#D62828] text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}