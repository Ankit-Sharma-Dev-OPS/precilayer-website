import { useState } from "react";

export default function IsoBadge() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/iso-9001-certificate.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 group hidden sm:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid="iso-badge"
      aria-label="View ISO 9001:2015 Certificate"
    >
      <div
        className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
          isHovered ? "shadow-lg shadow-black/30 scale-105" : "shadow-md shadow-black/20"
        }`}
        style={{ width: "72px" }}
      >
        <img
          src="/images/iso-9001-badge.png"
          alt="ISO 9001:2015 Certified"
          className="w-full h-auto block"
          loading="lazy"
        />
        <div className="px-1.5 pb-1.5 pt-0.5 text-center">
          <p className="text-[8px] leading-tight font-semibold text-gray-700">
            ISO 9001:2015
          </p>
          <p className="text-[7px] leading-tight text-gray-500">Certified</p>
        </div>
      </div>
    </a>
  );
}
