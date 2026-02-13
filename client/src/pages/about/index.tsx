import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AboutSection from "@/components/about-section";

export default function AboutPage() {
  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}
