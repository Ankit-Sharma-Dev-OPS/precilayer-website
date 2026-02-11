import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import FAQSection from "@/components/faq-section";

export default function FAQPage() {
  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
