import * as React from "react";
import {
  MapPin,
  Search,
  PhoneCall,
  ArrowUpDown,
  Image as ImageIcon,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { motion } from "motion/react";

import seatPalaceImg from "./assets/ghexecungdien.jpg";
import seatPalaceImg2 from "./assets/ghexecungdien2.jpg";
import seatHotelImg from "./assets/ghexekhachsan.jpg";
import seatHotelImg2 from "./assets/ghexekhachsan2.jpg";
import seatStandardImg from "./assets/ghexethuong.jpg";
import seatStandardImg2 from "./assets/ghexethuong2.jpg";

import "./BookingForm.css";

type SeatOption = {
  label: string;
  price: string;
};

type RouteOption = {
  vehicleType: string;
  times: string[];
  price: string;
  notes?: string;
  seatOptions?: SeatOption[];
};

type RouteInfo = {
  origin: string;
  destination: string;
  options: RouteOption[];
  shuttle?: string;
  duration?: string;
  distance?: string;
};

const serviceLocations = [
  { value: "ha-giang", label: "Hà Giang" },
  { value: "lang-son", label: "Lạng Sơn" },
  { value: "bac-ninh", label: "Bắc Ninh" },
  { value: "bac-giang", label: "Bắc Giang" },
  { value: "mong-cai", label: "Móng Cái" },
  { value: "quang-ninh", label: "Quảng Ninh" },
  { value: "tay-nguyen", label: "Tây Nguyên" },
  { value: "chi-linh", label: "Chí Linh" },
];

const locationLabelLookup = serviceLocations.reduce<Record<string, string>>((acc, location) => {
  acc[location.value] = location.label;
  return acc;
}, {});

const vehicleImages: Record<string, string[]> = {
  "xe thường": [seatStandardImg, seatStandardImg2],
  "xe khách sạn": [seatHotelImg, seatHotelImg2],
  "xe cung điện": [seatPalaceImg, seatPalaceImg2],
};

const routes: RouteInfo[] = [
  {
    origin: "ha-giang",
    destination: "lang-son",
    duration: "6 giờ 15 phút",
    distance: "320 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["07h30", "18h30"],
        price: "350.000đ",
      },
    ],
  },
  {
    origin: "lang-son",
    destination: "ha-giang",
    duration: "6 giờ",
    distance: "320 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["06h30", "17h30"],
        price: "350.000đ",
      },
    ],
  },
  {
    origin: "ha-giang",
    destination: "bac-ninh",
    duration: "6 giờ 30 phút",
    distance: "350 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["07h30", "18h30"],
        price: "250.000đ",
      },
      {
        vehicleType: "Xe khách sạn",
        times: ["11h00", "18h00"],
        price: "250.000đ",
      },
      {
        vehicleType: "Xe cung điện",
        times: ["20h00"],
        price: "Ghế đơn 350.000đ",
        seatOptions: [
          { label: "Ghế đơn", price: "350.000đ" },
          { label: "Ghế ghép", price: "250.000đ" },
        ],
      },
    ],
  },
  {
    origin: "bac-ninh",
    destination: "ha-giang",
    duration: "6 giờ 15 phút",
    distance: "350 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["09h00"],
        price: "250.000đ",
      },
      {
        vehicleType: "Xe khách sạn",
        times: ["11h00", "20h30"],
        price: "250.000đ",
      },
      {
        vehicleType: "Xe cung điện",
        times: ["21h30"],
        price: "Ghế đơn 350.000đ",
        seatOptions: [
          { label: "Ghế đơn", price: "350.000đ" },
          { label: "Ghế ghép", price: "250.000đ" },
        ],
      },
    ],
  },
  {
    origin: "ha-giang",
    destination: "mong-cai",
    duration: "9 giờ 30 phút",
    distance: "530 km",
    options: [
      {
        vehicleType: "Xe cung điện",
        times: ["20h00"],
        price: "Ghế ghép 450.000đ",
        seatOptions: [{ label: "Ghế ghép", price: "450.000đ" }],
      },
    ],
  },
  {
    origin: "mong-cai",
    destination: "ha-giang",
    duration: "9 giờ",
    distance: "530 km",
    options: [
      {
        vehicleType: "Xe cung điện",
        times: ["14h30"],
        price: "Ghế đơn 600.000đ",
        seatOptions: [
          { label: "Ghế đơn", price: "600.000đ" },
          { label: "Ghế đôi", price: "900.000đ" },
        ],
      },
    ],
  },
  {
    origin: "ha-giang",
    destination: "quang-ninh",
    duration: "8 giờ 10 phút",
    distance: "470 km",
    options: [
      {
        vehicleType: "Xe khách sạn",
        times: ["11h00", "18h00"],
        price: "350.000đ",
      },
      {
        vehicleType: "Xe cung điện",
        times: ["20h00"],
        price: "Ghế đơn 550.000đ",
        seatOptions: [
          { label: "Ghế đơn", price: "550.000đ" },
          { label: "Ghế đôi", price: "750.000đ" },
          { label: "Ghế ghép", price: "350.000đ" },
        ],
      },
    ],
  },
  {
    origin: "quang-ninh",
    destination: "ha-giang",
    duration: "8 giờ",
    distance: "470 km",
    options: [
      {
        vehicleType: "Xe khách sạn",
        times: ["07h00", "16h20"],
        price: "350.000đ",
      },
      {
        vehicleType: "Xe cung điện",
        times: ["17h30"],
        price: "Ghế đơn 550.000đ",
        seatOptions: [
          { label: "Ghế đơn", price: "550.000đ" },
          { label: "Ghế đôi", price: "750.000đ" },
          { label: "Ghế ghép", price: "350.000đ" },
        ],
      },
    ],
  },
  {
    origin: "ha-giang",
    destination: "tay-nguyen",
    duration: "10 giờ",
    distance: "560 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["07h30", "18h30"],
        price: "200.000đ",
      },
      {
        vehicleType: "Xe khách sạn",
        times: ["18h00"],
        price: "250.000đ",
      },
      {
        vehicleType: "Xe cung điện",
        times: ["20h00"],
        price: "Ghế đơn 350.000đ",
        seatOptions: [
          { label: "Ghế đơn", price: "350.000đ" },
          { label: "Ghế đôi", price: "550.000đ" },
          { label: "Ghế ghép", price: "250.000đ" },
        ],
      },
    ],
  },
  {
    origin: "tay-nguyen",
    destination: "ha-giang",
    duration: "10 giờ",
    distance: "560 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["10h00"],
        price: "200.000đ",
      },
      {
        vehicleType: "Xe khách sạn",
        times: ["21h30"],
        price: "250.000đ",
      },
      {
        vehicleType: "Xe cung điện",
        times: ["22h15"],
        price: "Ghế đơn 350.000đ",
        seatOptions: [
          { label: "Ghế đơn", price: "350.000đ" },
          { label: "Ghế đôi", price: "550.000đ" },
          { label: "Ghế ghép", price: "250.000đ" },
        ],
      },
    ],
  },
  {
    origin: "ha-giang",
    destination: "chi-linh",
    duration: "7 giờ",
    distance: "400 km",
    options: [
      {
        vehicleType: "Xe khách sạn",
        times: ["11h00", "18h00"],
        price: "300.000đ",
      },
      {
        vehicleType: "Xe cung điện",
        times: ["20h00"],
        price: "Ghế đơn 400.000đ",
        seatOptions: [
          { label: "Ghế đơn", price: "400.000đ" },
          { label: "Ghế đôi", price: "700.000đ" },
          { label: "Ghế ghép", price: "300.000đ" },
        ],
      },
    ],
  },
  {
    origin: "chi-linh",
    destination: "ha-giang",
    duration: "7 giờ",
    distance: "400 km",
    options: [
      {
        vehicleType: "Xe khách sạn",
        times: ["10h30", "19h30"],
        price: "300.000đ",
      },
      {
        vehicleType: "Xe cung điện",
        times: ["20h30"],
        price: "Ghế đơn 400.000đ",
        seatOptions: [
          { label: "Ghế đơn", price: "400.000đ" },
          { label: "Ghế đôi", price: "700.000đ" },
          { label: "Ghế ghép", price: "300.000đ" },
        ],
      },
    ],
  },
  {
    origin: "ha-giang",
    destination: "bac-giang",
    duration: "6 giờ 45 phút",
    distance: "330 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["07h30", "18h30"],
        price: "250.000đ",
      },
      {
        vehicleType: "Xe khách sạn",
        times: ["11h00"],
        price: "250.000đ",
      },
      {
        vehicleType: "Xe cung điện",
        times: ["20h00"],
        price: "Ghế đơn 350.000đ",
        seatOptions: [
          { label: "Ghế đơn", price: "350.000đ" },
          { label: "Ghế đôi", price: "600.000đ" },
          { label: "Ghế ghép", price: "250.000đ" },
        ],
      },
    ],
  },
  {
    origin: "bac-giang",
    destination: "ha-giang",
    duration: "6 giờ 45 phút",
    distance: "330 km",
    options: [
      {
        vehicleType: "Xe thường",
        times: ["08h00", "20h00"],
        price: "250.000đ",
      },
      {
        vehicleType: "Xe khách sạn",
        times: ["11h00"],
        price: "250.000đ",
      },
      {
        vehicleType: "Xe cung điện",
        times: ["21h30"],
        price: "Ghế đơn 350.000đ",
        seatOptions: [
          { label: "Ghế đơn", price: "350.000đ" },
          { label: "Ghế đôi", price: "600.000đ" },
          { label: "Ghế ghép", price: "250.000đ" },
        ],
      },
    ],
  },
];

export function BookingForm() {
  const [origin, setOrigin] = React.useState<string>("ha-giang");
  const [destination, setDestination] = React.useState<string>("mong-cai");
  const [hasSearched, setHasSearched] = React.useState(false);
  const [expandedRouteKey, setExpandedRouteKey] = React.useState<string | null>(null);
  const [imageIndexByRoute, setImageIndexByRoute] = React.useState<Record<string, number>>({});

  const matchingRoutes = React.useMemo(() => {
    return routes.filter(
      (route) => route.origin === origin && route.destination === destination,
    );
  }, [origin, destination]);

  const handleSearch = () => {
    setHasSearched(true);
  };

  const handleOriginChange = (value: string) => {
    setOrigin(value);
    setHasSearched(false);
    setExpandedRouteKey(null);
    setImageIndexByRoute({});
  };

  const handleDestinationChange = (value: string) => {
    setDestination(value);
    setHasSearched(false);
    setExpandedRouteKey(null);
    setImageIndexByRoute({});
  };

  const handleSwap = () => {
    setOrigin(destination);
    setDestination(origin);
    setHasSearched(false);
    setExpandedRouteKey(null);
    setImageIndexByRoute({});
  };

  const toggleRouteImage = (key: string) => {
    setExpandedRouteKey((current) => {
      const nextKey = current === key ? null : key;
      if (nextKey !== null && nextKey !== current) {
        setImageIndexByRoute((prev) => ({ ...prev, [key]: 0 }));
      }
      return nextKey;
    });
  };

  const handleNextImage = (key: string, total: number) => {
    if (total <= 0) {
      return;
    }
    setImageIndexByRoute((prev) => {
      const current = prev[key] ?? 0;
      return { ...prev, [key]: (current + 1) % total };
    });
  };

  const handlePrevImage = (key: string, total: number) => {
    if (total <= 0) {
      return;
    }
    setImageIndexByRoute((prev) => {
      const current = prev[key] ?? 0;
      return { ...prev, [key]: (current - 1 + total) % total };
    });
  };

  return (
    <section className="booking-form-section" id="tim-chuyen">
      <div className="booking-form-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="booking-form-card"
        >
          {/* Form title */}
          <div className="booking-form-header">
            <h3 className="booking-form-title">Đặt vé trực tuyến</h3>
            <p className="booking-form-description">Nhập thông tin hành trình để xem chuyến phù hợp</p>
          </div>

          {/* Booking form grid */}
          <div className="booking-form-grid">
            <div className="booking-route-pair">
              {/* Origin input */}
              <div className="booking-field">
                <label className="booking-label">Điểm khởi hành</label>
                <div className="booking-input-wrapper">
                  <span className="booking-icon">
                    <MapPin />
                  </span>
                  <Select value={origin} onValueChange={handleOriginChange}>
                    <SelectTrigger className="booking-select-trigger">
                      <SelectValue placeholder="Chọn điểm khởi hành" className="booking-select-value" />
                    </SelectTrigger>
                    <SelectContent className="booking-select-content">
                      {serviceLocations.map((location) => (
                        <SelectItem key={location.value} value={location.value}>
                          {location.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="booking-swap-button"
                onClick={handleSwap}
                aria-label="Đổi chiều hành trình"
              >
                <ArrowUpDown />
              </Button>

              {/* Destination input */}
              <div className="booking-field">
                <label className="booking-label">Điểm đến</label>
                <div className="booking-input-wrapper">
                  <span className="booking-icon">
                    <MapPin />
                  </span>
                  <Select value={destination} onValueChange={handleDestinationChange}>
                    <SelectTrigger className="booking-select-trigger">
                      <SelectValue placeholder="Chọn điểm đến" className="booking-select-value" />
                    </SelectTrigger>
                    <SelectContent className="booking-select-content">
                      {serviceLocations.map((location) => (
                        <SelectItem key={location.value} value={location.value}>
                          {location.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Search button */}
            <div className="booking-field booking-search-field">
              <label className="booking-label booking-helper-label">&nbsp;</label>
              <Button type="button" className="booking-search-button" onClick={handleSearch}>
                <Search />
                Tìm chuyến
              </Button>
            </div>
          </div>

          {hasSearched && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="booking-results"
            >
              {matchingRoutes.length > 0 ? (
                matchingRoutes.flatMap((route) => {
                  const originLabel = locationLabelLookup[route.origin] ?? route.origin;
                  const destinationLabel = locationLabelLookup[route.destination] ?? route.destination;

                  return route.options.map((option, index) => {
                    const vehicleKey = option.vehicleType.toLowerCase();
                    const isPremium = vehicleKey.includes("cung điện");
                    const imageSet = vehicleImages[vehicleKey] ?? [];
                    const hasImages = imageSet.length > 0;
                    const cardKey = `${route.origin}-${route.destination}-${option.vehicleType}-${index}`;
                    const isExpanded = expandedRouteKey === cardKey;
                    const activeImageIndex = imageIndexByRoute[cardKey] ?? 0;
                    const effectiveIndex = hasImages
                      ? Math.min(Math.max(activeImageIndex, 0), imageSet.length - 1)
                      : 0;
                    const currentImage = hasImages ? imageSet[effectiveIndex] : undefined;
                    const primarySeat = option.seatOptions?.find((seat) => seat.label === "Ghế đơn") ?? option.seatOptions?.[0];
                    const displayPrice = isPremium ? null : option.price;

                    return (
                      <motion.div
                        layout
                        key={cardKey}
                        className={`booking-route-card${isPremium ? " booking-route-card--premium" : ""}`}
                        whileHover={{ translateY: -6 }}
                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                      >
                        <div className="booking-route-card-body">
                          <div className="booking-route-headline">
                            <div className="booking-route-service">
                              <span className="booking-route-service-name">{option.vehicleType}</span>
                            </div>
                            {!isPremium && <div className="booking-route-price">{displayPrice}</div>}
                          </div>

                          <div className="booking-route-path">
                            <span className="booking-route-location">{originLabel}</span>
                            <ArrowRight className="booking-route-path-icon" aria-hidden="true" />
                            <span className="booking-route-location booking-route-location--destination">{destinationLabel}</span>
                          </div>

                          <div className="booking-route-meta">
                            <div className="booking-route-meta-item">
                              <span className="booking-route-meta-label">Thời gian:</span>
                              <span className="booking-route-meta-value">{route.duration ?? "Đang cập nhật"}</span>
                            </div>
                            <div className="booking-route-meta-item">
                              <span className="booking-route-meta-label">Khoảng cách:</span>
                              <span className="booking-route-meta-value">{route.distance ?? "Đang cập nhật"}</span>
                            </div>
                          </div>

                          {option.times.length > 0 && (
                            <div className="booking-route-times">
                              <span className="booking-route-times-label">Giờ xuất bến:</span>
                              <div className="booking-route-time-list">
                                {option.times.map((time) => (
                                  <span key={`${option.vehicleType}-${time}`} className="booking-route-time-chip">
                                    {time}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {option.seatOptions?.length ? (
                            isPremium ? (
                              <div className="booking-route-seat-list">
                                <span className="booking-route-seat-list-heading">Loại ghế</span>
                                {option.seatOptions.map((seat) => (
                                  <div
                                    key={`${option.vehicleType}-${seat.label}-${seat.price}`}
                                    className="booking-route-seat-list-row"
                                  >
                                    <span className="booking-route-seat-list-label">{seat.label}</span>
                                    <span className="booking-route-seat-list-price">{seat.price}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="booking-route-seats">
                                {option.seatOptions.map((seat) => (
                                  <div
                                    key={`${option.vehicleType}-${seat.label}-${seat.price}`}
                                    className="booking-route-seat-chip"
                                  >
                                    <span className="booking-route-seat-chip-label">{seat.label}</span>
                                    <span className="booking-route-seat-chip-price">{seat.price}</span>
                                  </div>
                                ))}
                              </div>
                            )
                          ) : null}

                          {option.notes && <p className="booking-route-note">{option.notes}</p>}

                          {route.shuttle && <div className="booking-route-shuttle">{route.shuttle}</div>}

                          <div className="booking-route-actions">
                            {hasImages && (
                              <Button
                                type="button"
                                size="lg"
                                variant="outline"
                                className="booking-route-secondary"
                                onClick={() => toggleRouteImage(cardKey)}
                              >
                                <ImageIcon />
                                {isExpanded ? "Ẩn hình ảnh" : "Xem hình ảnh"}
                              </Button>
                            )}
                            <Button size="lg" className="booking-route-primary" asChild>
                              <a href="tel:0983250900">
                                <PhoneCall />
                                Đặt vé ngay
                              </a>
                            </Button>
                          </div>

                          {isExpanded && hasImages && currentImage ? (
                            <motion.div
                              layout
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="booking-route-photo"
                            >
                              <div className="booking-route-photo-frame">
                                <img
                                  src={currentImage}
                                  alt={`Hình ảnh ${option.vehicleType}`}
                                  loading="lazy"
                                  className="booking-route-photo-image"
                                />
                              </div>
                              {imageSet.length > 1 ? (
                                <>
                                  <button
                                    type="button"
                                    className="booking-route-photo-arrow booking-route-photo-arrow--prev"
                                    onClick={() => handlePrevImage(cardKey, imageSet.length)}
                                    aria-label="Ảnh trước"
                                  >
                                    <ChevronLeft />
                                  </button>
                                  <button
                                    type="button"
                                    className="booking-route-photo-arrow booking-route-photo-arrow--next"
                                    onClick={() => handleNextImage(cardKey, imageSet.length)}
                                    aria-label="Ảnh tiếp"
                                  >
                                    <ChevronRight />
                                  </button>
                                </>
                              ) : null}
                            </motion.div>
                          ) : null}
                        </div>
                      </motion.div>
                    );
                  });
                })
              ) : (
                <div className="booking-route-empty">
                  <p>Hiện chưa có lịch trình cho tuyến này. Vui lòng chọn tuyến khác hoặc liên hệ tổng đài.</p>
                  <Button size="lg" className="booking-route-primary" asChild>
                    <a href="tel:0983250900">
                      <PhoneCall />
                      Gọi tư vấn
                    </a>
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}