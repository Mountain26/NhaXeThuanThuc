import { Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function PopularRoutes() {
  const routes = [
    { id: 1, from: "City A", to: "City B", time: "4-5 hours", price: "XXX.XXX VND" },
    { id: 2, from: "City C", to: "City D", time: "6-7 hours", price: "XXX.XXX VND" },
    { id: 3, from: "City E", to: "City F", time: "3-4 hours", price: "XXX.XXX VND" },
    { id: 4, from: "City G", to: "City H", time: "5-6 hours", price: "XXX.XXX VND" },
    { id: 5, from: "City I", to: "City J", time: "7-8 hours", price: "XXX.XXX VND" },
    { id: 6, from: "City K", to: "City L", time: "4-5 hours", price: "XXX.XXX VND" },
  ];

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1A1A1A] mb-3">Popular Routes</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover our most traveled routes with comfortable buses and professional service
          </p>
        </motion.div>

        {/* Routes grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-slate-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-400">IMAGE HERE</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent" />
                
                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-[#D62828] text-white px-4 py-2 rounded-full text-sm shadow-lg">
                  {route.price}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-[#D62828] rounded-full" />
                    <span className="text-[#1A1A1A]">{route.from}</span>
                  </div>
                  <div className="flex items-center gap-2 ml-5">
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#1A1A1A] rounded-full" />
                    <span className="text-[#1A1A1A]">{route.to}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-600 text-sm mb-4">
                  <Clock className="w-4 h-4 text-[#D62828]" />
                  <span>{route.time}</span>
                </div>

                <Button className="w-full bg-[#D62828] hover:bg-[#B01F1F] group-hover:shadow-lg transition-all">
                  BOOK NOW
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button variant="outline" size="lg" className="border-2 border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white">
            View All Routes
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
