import React, { useState } from "react";
import { AppProvider } from "./context/AppContext.jsx";
import Marquee from "./components/Marquee.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Stats from "./components/Stats.jsx";
import DocumentChecker from "./components/DocumentChecker.jsx";
import FAQ from "./components/FAQ.jsx";
import DownloadsAndPay from "./components/DownloadsAndPay.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import Toast from "./components/Toast.jsx";
import BookingModal from "./components/BookingModal.jsx";

function Site() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Marquee />
      <Navbar />
      <Hero onBook={() => setBookingOpen(true)} />
      <Services />
      <About />
      <Stats />
      <DocumentChecker />
      <FAQ />
      <DownloadsAndPay />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <Toast />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}

// Footer is imported above with the other components

export default function App() {
  return (
    <AppProvider>
      <Site />
    </AppProvider>
  );
}
