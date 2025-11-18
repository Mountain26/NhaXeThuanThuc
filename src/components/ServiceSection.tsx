import { Shield, Coffee, Wifi, Armchair } from "lucide-react";
import { motion } from "motion/react";

import "./ServiceSection.css";

export function ServiceSection() {
  const services = [
    {
      icon: Shield,
      title: "An toàn chuẩn 5 sao",
      description: "Bảo hiểm hành khách đầy đủ, tài xế nhiều kinh nghiệm và kiểm tra xe định kỳ trước mỗi chuyến",
    },
    {
      icon: Armchair,
      title: "Giường nằm cao cấp",
      description: "Nệm da kháng khuẩn, rèm riêng tư, chăn gối sạch sẽ giúp bạn nghỉ ngơi thoải mái",
    },
    {
      icon: Wifi,
      title: "Wifi & sạc tiện lợi",
      description: "Trang bị wifi miễn phí, cổng USB và điện thoại hỗ trợ suốt hành trình",
    },
    {
      icon: Coffee,
      title: "Nước uống - khăn lạnh",
      description: "Phục vụ nước suối, khăn lạnh và điểm dừng nghỉ hợp lý để bạn luôn tỉnh táo",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <h2 className="services-title">Tiện ích nổi bật</h2>
          <p className="services-description">
            Trải nghiệm chất lượng khác biệt với hệ thống xe đời mới và đội ngũ phục vụ tận tâm
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                {/* Image placeholder */}
                <div className="service-image">Ảnh tiện ích minh họa</div>

                {/* Icon */}
                <div className="service-icon">
                  <Icon />
                </div>

                {/* Content */}
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
