import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company info */}
          <div>
            <div className="footer-brand">
              <div className="footer-logo">
                <span>TT</span>
              </div>
              <span className="footer-text">Nhà xe Thuận Thực</span>
            </div>
            <p className="footer-description">
              Hơn 10 năm phục vụ tuyến Hà Nội - Hà Giang với phương châm an toàn, đúng giờ và tận tâm.
            </p>
            {/* Social icons */}
            <div className="footer-socials">
              <button className="footer-social-button">
                <Facebook />
              </button>
              <button className="footer-social-button">
                <Instagram />
              </button>
              <button className="footer-social-button">
                <Youtube />
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="footer-heading">Liên kết nhanh</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  Lịch trình
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  Chính sách đặt vé
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Dịch vụ</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  Đặt vé online
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Thông tin tuyến xe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Hỗ trợ khách hàng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Ưu đãi - khuyến mãi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#D62828] transition-colors text-sm"
                >
                  Dịch vụ doanh nghiệp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">
              Liên hệ
            </h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <MapPin />
                <span>
                  123 Nguyễn Trãi, phường Trung Văn, quận Nam Từ Liêm, Hà Nội
                </span>
              </li>
              <li className="footer-contact-item">
                <Phone />
                <span>
                  1900 63 63 71
                </span>
              </li>
              <li className="footer-contact-item">
                <Mail />
                <span>
                  hotro@thuanthuc.vn
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
              © 2025 Nhà xe Thuận Thực. Đã đăng ký bản quyền.
          </p>
          <div className="footer-bottom-links">
            <a
              href="#"
            >
              Chính sách bảo mật
            </a>
            <a
              href="#"
            >
              Điều khoản dịch vụ
            </a>
            <a
              href="#"
            >
              Chính sách cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}