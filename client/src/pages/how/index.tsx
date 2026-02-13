import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HowSection from "@/components/how-section";

export default function HowPage() {
  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <HowSection />
      </div>
      <Footer />
    </div>
  );
}
