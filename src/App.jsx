import React, { useState } from "react";
import { AppProvider } from "./context/AppContext.jsx";
import Marquee from "./components/Marquee.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import PriceList from "./components/PriceList.jsx";
import About from "./components/About.jsx";
import Stats from "./components/Stats.jsx";
import DocumentChecker from "./components/DocumentChecker.jsx";
import FAQ from "./components/FAQ.jsx";
import DownloadsAndPay from "./components/DownloadsAndPay.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import Dock from "./components/Dock.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Toast from "./components/Toast.jsx";
import BookingModal from "./components/BookingModal.jsx";
import Reveal from "./components/Reveal.jsx";

function Site() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [presetService, setPresetService] = useState("");

  // Opens the booking modal, optionally pre-selecting a service (used by
  // the Price List section's per-row "Book" buttons).
  const openBooking = (service = "") => {
    setPresetService(service);
    setBookingOpen(true);
  };

  return (
    <>
      <ScrollProgress />
      <Marquee />
      <Navbar />
      <Hero onBook={() => openBooking()} />
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <PriceList onBook={openBooking} />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Stats />
      <Reveal>
        <DocumentChecker />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <DownloadsAndPay />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
      <WhatsAppFloat />
      <Dock onBook={() => openBooking()} />
      <BackToTop />
      <Toast />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        presetService={presetService}
      />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Site />
    </AppProvider>
  );
}
