import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { BookingForm } from "./components/BookingForm";
import { ContactButtons } from "./components/ContactButtons";
import { PopularRoutes } from "./components/PopularRoutes";
import { ServiceSection } from "./components/ServiceSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
      <BookingForm />
      <ContactButtons />
      <PopularRoutes />
      <ServiceSection />
      <Footer />
    </div>
  );
}