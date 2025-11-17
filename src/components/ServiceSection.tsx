import { Shield, Coffee, Wifi, Armchair } from "lucide-react";
import { motion } from "motion/react";

export function ServiceSection() {
  const services = [
    {
      icon: Shield,
      title: "Service Title 1",
      description: "Service description placeholder text explaining the benefit and features",
    },
    {
      icon: Armchair,
      title: "Service Title 2",
      description: "Service description placeholder text explaining the benefit and features",
    },
    {
      icon: Wifi,
      title: "Service Title 3",
      description: "Service description placeholder text explaining the benefit and features",
    },
    {
      icon: Coffee,
      title: "Service Title 4",
      description: "Service description placeholder text explaining the benefit and features",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1A1A1A] mb-3">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experience premium quality service with modern amenities and professional care
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-slate-100 hover:border-[#D62828] group"
              >
                {/* Image placeholder */}
                <div className="mb-4 h-32 bg-slate-100 rounded-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-slate-400 text-sm">IMAGE HERE</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-[#D62828] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h4 className="text-[#1A1A1A] mb-2">{service.title}</h4>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
