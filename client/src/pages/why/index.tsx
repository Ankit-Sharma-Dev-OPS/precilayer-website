import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WhySection from "@/components/why-section";

export default function WhyPage() {
  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <WhySection />
      </div>
      <Footer />
    </div>
  );
}
