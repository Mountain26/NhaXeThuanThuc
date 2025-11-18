import { Phone, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

import "./ContactButtons.css";

export function ContactButtons() {
  return (
    <section className="contact-section">
      <div className="contact-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-heading"
        >
          <h3 className="contact-title">Liên hệ với chúng tôi</h3>
          <p className="contact-subtitle">Chọn kênh phù hợp để được hỗ trợ ngay</p>
        </motion.div>

        <div className="contact-actions">
          {/* Gọi Viettel Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="contact-button"
          >
            <div className="contact-button__icon">
              <Phone />
            </div>
            <span>Gọi Viettel</span>
          </motion.button>

          {/* Gọi Vina Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="contact-button"
          >
            <div className="contact-button__icon">
              <Phone />
            </div>
            <span>Gọi Vina</span>
          </motion.button>

          {/* Nhắn Zalo Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="contact-button"
          >
            <div className="contact-button__icon">
              <MessageCircle />
            </div>
            <span>Nhắn Zalo</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
