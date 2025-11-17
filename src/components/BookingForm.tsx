import { MapPin, Calendar, Search, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "motion/react";

export function BookingForm() {
  return (
    <section className="relative -mt-16 mb-16 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl shadow-[#1A1A1A]/10 p-6 lg:p-8 border-t-4 border-[#D62828]"
        >
          {/* Form title */}
          <div className="mb-6">
            <h3 className="text-[#1A1A1A] mb-1">Booking Form Placeholder</h3>
            <p className="text-slate-500">Search for available routes and schedules</p>
          </div>

          {/* Booking form grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Origin input */}
            <div className="space-y-2">
              <label className="text-slate-600 text-sm">Origin Placeholder</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D62828]" />
                <Input
                  placeholder="From location"
                  className="pl-10 h-12 border-slate-200 focus:border-[#D62828]"
                />
              </div>
            </div>

            {/* Destination input */}
            <div className="space-y-2">
              <label className="text-slate-600 text-sm">Destination Placeholder</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D62828]" />
                <Input
                  placeholder="To location"
                  className="pl-10 h-12 border-slate-200 focus:border-[#D62828]"
                />
              </div>
            </div>

            {/* Date input */}
            <div className="space-y-2">
              <label className="text-slate-600 text-sm">Date Placeholder</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D62828]" />
                <Input
                  type="date"
                  className="pl-10 h-12 border-slate-200 focus:border-[#D62828]"
                />
              </div>
            </div>

            {/* Search button */}
            <div className="space-y-2">
              <label className="text-slate-600 text-sm invisible sm:visible">Action</label>
              <Button className="w-full h-12 bg-[#D62828] hover:bg-[#B01F1F] shadow-lg shadow-[#D62828]/30">
                <Search className="w-5 h-5 mr-2" />
                Search Button
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <div className="flex flex-wrap gap-3">
              <span className="text-slate-500 text-sm">Quick routes:</span>
              {["Route A → Route B", "Route C → Route D", "Route E → Route F"].map((route, index) => (
                <button
                  key={index}
                  className="text-sm text-[#D62828] hover:text-[#B01F1F] flex items-center gap-1 transition-colors"
                >
                  {route}
                  <ArrowRight className="w-3 h-3" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}