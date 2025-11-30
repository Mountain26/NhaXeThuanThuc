import * as React from "react";
import { ArrowDown, ArrowUp, BusFront } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";

import routeImageA from "./assets/xett.jpg";
import routeImageB from "./assets/xett2.jpg";
import routeImageC from "./assets/Bus1.jpg";

import "./PopularRoutes.css";

const routes = [
  {
    id: 1,
    from: "Hà Giang",
    to: "Móng Cái",
    time: "9 giờ 30 phút",
    price: "450.000 đ",
    distance: "530 km",
    image: routeImageA,
  },
  {
    id: 2,
    from: "Hà Giang",
    to: "Quảng Ninh",
    time: "8 giờ",
    price: "350.000 đ",
    distance: "470 km",
    image: routeImageB,
  },
  {
    id: 3,
    from: "Hà Giang",
    to: "Bắc Ninh",
    time: "5 giờ 30 phút",
    price: "250.000 đ",
    distance: "320 km",
    image: routeImageC,
  },
  {
    id: 4,
    from: "Hà Giang",
    to: "Bắc Giang",
    time: "5 giờ 45 phút",
    price: "250.000 đ",
    distance: "310 km",
    image: routeImageC,
  },
  {
    id: 5,
    from: "Hà Giang",
    to: "Lạng Sơn",
    time: "6 giờ 30 phút",
    price: "350.000 đ",
    distance: "420 km",
    image: routeImageA,
  },
  {
    id: 6,
    from: "Hà Giang",
    to: "Sao Đỏ",
    time: "6 giờ",
    price: "300.000 đ",
    distance: "380 km",
    image: routeImageC,
  },
  {
    id: 7,
    from: "Hà Giang",
    to: "Thái Nguyên",
    time: "4 giờ 30 phút",
    price: "200.000 đ",
    distance: "270 km",
    image: routeImageB,
  },
];

export function PopularRoutes() {
  const [showAll, setShowAll] = React.useState(false);
  const visibleRoutes = showAll ? routes : routes.slice(0, 3);
  const hasMoreRoutes = routes.length > 3;

  return (
    <section className="routes-section">
      <div className="routes-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="routes-header"
        >
          <h2 className="routes-title">Tuyến xe nổi bật</h2>
          <p className="routes-description">
            Các tuyến xe Thuận Thực đang phục vụ cố định, giá vé niêm yết rõ ràng và lên đường mỗi ngày
          </p>
        </motion.div>

        {/* Routes grid */}
        <motion.div layout className="routes-grid">
          <AnimatePresence initial={false}>
            {visibleRoutes.map((route) => (
              <motion.div
                layout
                key={route.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="route-card"
              >
              {/* Image placeholder */}
                <div className="route-media">
                  <div className="route-media-placeholder">
                    <img src={route.image} alt={route.to} />
                  </div>
                  <div className="route-media-overlay" />

                  <div className="route-price">{route.price}</div>
                </div>

              {/* Card content */}
              <div className="route-body">
                <div className="route-meta">
                  <BusFront />
                  <span>Limousine 24 phòng VIP</span>
                </div>

                <div className="route-path">
                  <div className="route-points">
                    <div className="route-point">
                      <div className="route-point__dot" />
                      <span>{route.from}</span>
                    </div>
                    <div className="route-connector">
                      <ArrowDown />
                    </div>
                    <div className="route-point">
                      <div className="route-point__dot route-point__dot--destination" />
                      <span>{route.to}</span>
                    </div>
                  </div>
                  <div className="route-fare">
                    <span className="route-fare-value">{route.price}</span>
                  </div>
                </div>

                <div className="route-info">
                  <div className="route-info-row">
                    <span className="route-info-label">Thời gian:</span>
                    <span>{route.time}</span>
                  </div>
                  <div className="route-info-row">
                    <span className="route-info-label">Khoảng cách:</span>
                    <span>{route.distance}</span>
                  </div>
                </div>

                <Button className="route-button" asChild>
                  <a href="tel:0983250900">
                    Đặt vé ngay
                  </a>
                </Button>
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all button */}
        {hasMoreRoutes && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="routes-toggle"
          >
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="routes-toggle-button"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Thu gọn" : "Xem toàn bộ tuyến"}
              {showAll ? <ArrowUp /> : <ArrowDown />}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
