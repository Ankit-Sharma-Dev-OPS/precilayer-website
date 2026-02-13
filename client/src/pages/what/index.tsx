import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WhatSection from "@/components/what-section";

export default function WhatPage() {
  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <WhatSection />
      </div>
      <Footer />
    </div>
  );
}
