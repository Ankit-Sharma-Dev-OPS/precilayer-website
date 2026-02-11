import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

export default function ContactPage() {
  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
