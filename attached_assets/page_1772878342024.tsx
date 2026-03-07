'use client';
import React, { useEffect, useRef, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from "@/app/components/layout/navbar";
import Footer from "@/app/components/layout/footer";
import RoboticsContactPage from "@/components/robotics-automation/robotics-contact-page";
import AirMobilityHeroSection from "@/components/air-mobility/airMobilityHeroSection";
import AirMobilityManufacturingTechnologiesSection from "@/components/air-mobility/manufacturing-capabilities";
import AirMobilityPartWeManufacture from "@/components/air-mobility/part-we-manufacture";
import AirMobilityCompanyTrust8xPartsSection from "@/components/air-mobility/air-mobility-truct-8xparts";


// export const metadata = {
//   title: 'Robotics Components | 8xparts',
//   description: 'High-precision components for robotics and automation.',
// };


export default function RoboticsLandingPage() {
    const manufacturingTechSectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        document.title = 'Air mobility  | 8xparts';
    }, []);



    const handleScrollToManufacturingTechSection = () => {

        if (manufacturingTechSectionRef.current) {
            manufacturingTechSectionRef.current.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start', // Align to the start of the section
            });
        }
    };

    return (
        <div className="min-h-screen max-w-screen mx-3 md:mx-0 bg-white">

            {/* Navigation */}
            <Navbar title="" />

            {/* Hero Section */}
            <AirMobilityHeroSection onViewCapabilitiesButtonClick={handleScrollToManufacturingTechSection} />

            {/* Simple Process Overview */}
            {/* <AirMobilityHowWeHelpSection /> */}

            {/* Manufacturing Technologies Section */}
            <AirMobilityManufacturingTechnologiesSection ref={manufacturingTechSectionRef} />

            {/* Parts We Manufacture Section */}
            <AirMobilityPartWeManufacture />

            {/* Satellites Company Trust 8xParts Section */}
            <AirMobilityCompanyTrust8xPartsSection />
            <div className="bg-white p-6 rounded-xl my-2 text-gray-800  mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight text-center mb-5">Ready for Takeoff?</h1>

                <p className=" leading-relaxed text-center ">
                    <span className="text-2xl ">Upload your CAD or chat with our team of aerospace-focused engineers.</span>
                    <br />
                    <button
                        className="px-6 mt-5 py-3  bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors"
                        onClick={() => window.open(process.env.NEXT_PUBLIC_MAKE_URL)}
                    >
                        Get an Instant Quote
                    </button>
                </p>
            </div>

            <div className="bg-white p-6 rounded-xl my-2  text-gray-800 mx-auto mt-6">
                <h4 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight text-center mb-5">Want a custom workflow?</h4>
                <p className="leading-relaxed mb-1 text-center text-2xl">
                    Let’s co-develop a lean, scalable manufacturing workflow for your AAM project.
                </p>
                <p className="text-2xl text-blue-600 font-medium text-center">
                    <a href={`mailto:${process.env.NEXT_PUBLIC_SENDER_EMAIL || ''}`} className="underline hover:text-blue-800">
                        {process.env.NEXT_PUBLIC_SENDER_EMAIL || ''}
                    </a>
                </p>
            </div>
            <hr className="my-6 border-t border-gray-200" />
            {/* Contact Us Section */}
            <RoboticsContactPage heading="" />

            {/* Footer with Comprehensive Sitemap */}
            <Footer />
        </div>
    );
}
