import HeroSection from "@/components/HeroSection";
import VisieSection from "@/components/VisieSection";
import ShortOverviewSection from "@/components/ShortOverviewSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="visie">
        <VisieSection />
      </section>
      <section id="short-overview">
        <ShortOverviewSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <FooterSection />
    </div>
  );
}