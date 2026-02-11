import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import VisionSection from "@/components/vision-section";

export default function VisionPage() {
  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <VisionSection />
      </div>
      <Footer />
    </div>
  );
}
