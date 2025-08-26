import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  keywords: string[];
}

const faqData: FAQItem[] = [
  {
    question: "What CNC machining services does Precilayer offer?",
    answer: "Precilayer provides comprehensive CNC machining services including 3-axis, 4-axis, and 5-axis CNC milling, CNC turning, precision drilling, and custom tooling. We specialize in working with aluminum, steel, stainless steel, brass, copper, and engineering plastics for aerospace, automotive, and medical applications.",
    keywords: ["CNC machining", "precision machining", "aerospace components", "automotive parts"]
  },
  {
    question: "What materials can you machine and 3D print?",
    answer: "Our CNC machining capabilities include aluminum 6061/7075, stainless steel 304/316, carbon steel, brass, copper, titanium, and engineering plastics like PEEK, PTFE, and nylon. For 3D printing, we work with PLA, ABS, PETG, nylon, carbon fiber composites, and metal powders including aluminum and steel.",
    keywords: ["aluminum machining", "stainless steel", "3D printing materials", "titanium machining"]
  },
  {
    question: "What industries does Precilayer serve?",
    answer: "We serve aerospace, automotive, medical devices, robotics, defense, electronics, energy, and industrial automation industries. Our precision manufacturing capabilities meet strict industry standards including AS9100 for aerospace, IATF 16949 for automotive, and ISO 13485 for medical devices.",
    keywords: ["aerospace manufacturing", "automotive components", "medical device manufacturing", "robotics parts"]
  },
  {
    question: "What are your typical lead times for CNC machining and 3D printing?",
    answer: "Standard CNC machining lead times are 5-10 business days for prototypes and 2-4 weeks for production runs. 3D printing and rapid prototyping typically take 1-3 business days. Rush orders can often be accommodated with 24-48 hour turnaround for simple parts.",
    keywords: ["fast CNC machining", "rapid prototyping", "quick turnaround", "manufacturing lead times"]
  },
  {
    question: "What quality certifications does Precilayer have?",
    answer: "Precilayer is ISO 9001:2015 certified for quality management systems. We maintain strict quality control with CMM inspection, surface roughness testing, and dimensional verification. All parts include detailed inspection reports and certificates of conformance.",
    keywords: ["ISO 9001", "quality assurance", "CMM inspection", "manufacturing certificates"]
  },
  {
    question: "Do you provide design for manufacturing (DFM) feedback?",
    answer: "Yes, our experienced engineers provide comprehensive DFM analysis to optimize your designs for manufacturability, reduce costs, and improve quality. We review tolerances, material selection, machining accessibility, and suggest design modifications to enhance production efficiency.",
    keywords: ["design for manufacturing", "DFM analysis", "manufacturing optimization", "cost reduction"]
  },
  {
    question: "What file formats do you accept for quotes?",
    answer: "We accept all major CAD file formats including STEP, IGES, STL, DWG, DXF, PDF drawings, SolidWorks (SLDPRT), AutoCAD, Inventor (IPT), and Fusion 360 files. For 3D printing, STL and OBJ files are preferred.",
    keywords: ["CAD files", "STEP files", "engineering drawings", "3D models"]
  },
  {
    question: "Can you handle both prototype and production volumes?",
    answer: "Absolutely. We excel at rapid prototyping with quantities from 1-50 pieces and scale seamlessly to production volumes of 100-10,000+ parts. Our flexible manufacturing approach allows us to optimize processes and pricing based on your volume requirements.",
    keywords: ["prototype manufacturing", "production volumes", "low volume production", "high volume manufacturing"]
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    // Add FAQ Schema for SEO
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]:last-of-type');
      if (existingScript) existingScript.remove();
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our CNC machining, 3D printing, and manufacturing services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-space-700/40 to-space-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl overflow-hidden hover:border-cyber-400/60 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-space-700/20 transition-colors duration-300"
                data-testid={`faq-question-${index}`}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <div className="border-t border-gray-700/30 pt-4">
                    <p className="text-gray-300 leading-relaxed" data-testid={`faq-answer-${index}`}>
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Have a specific question about our manufacturing capabilities?
          </p>
          <button className="bg-cyber-400/10 hover:bg-cyber-400/20 border border-cyber-400/50 hover:border-cyber-400 text-cyber-400 px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-400/20 font-semibold">
            Contact Our Engineering Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}