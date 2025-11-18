import * as React from "react";
import { MapPin, Calendar, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { motion } from "motion/react";

import "./BookingForm.css";

const serviceLocations = [
  { value: "ha-giang", label: "Hà Giang" },
  { value: "mong-cai", label: "Móng Cái" },
  { value: "quang-ninh", label: "Quảng Ninh" },
  { value: "bac-ninh", label: "Bắc Ninh" },
  { value: "bac-giang", label: "Bắc Giang" },
  { value: "lang-son", label: "Lạng Sơn" },
  { value: "sao-do", label: "Sao Đỏ" },
  { value: "thai-nguyen", label: "Thái Nguyên" },
];

export function BookingForm() {
  const [origin, setOrigin] = React.useState<string>("ha-giang");
  const [destination, setDestination] = React.useState<string>("mong-cai");

  return (
    <section className="booking-form-section">
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
            {/* Origin input */}
            <div className="booking-field">
              <label className="booking-label">Điểm khởi hành</label>
              <div className="booking-input-wrapper">
                <span className="booking-icon">
                  <MapPin />
                </span>
                <Select value={origin} onValueChange={setOrigin}>
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

            {/* Destination input */}
            <div className="booking-field">
              <label className="booking-label">Điểm đến</label>
              <div className="booking-input-wrapper">
                <span className="booking-icon">
                  <MapPin />
                </span>
                <Select value={destination} onValueChange={setDestination}>
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

            {/* Date input */}
            <div className="booking-field">
              <label className="booking-label">Ngày khởi hành</label>
              <div className="booking-date-wrapper">
                <Calendar className="booking-date-icon" />
                <Input
                  type="date"
                  className="booking-date-input"
                />
              </div>
            </div>

            {/* Search button */}
            <div className="booking-field">
              <label className="booking-label booking-helper-label">&nbsp;</label>
              <Button className="booking-search-button">
                <Search />
                Tìm chuyến
              </Button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}