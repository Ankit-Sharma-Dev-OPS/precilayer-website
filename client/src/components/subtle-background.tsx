import { motion } from "framer-motion";

export default function SubtleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle gradient orbs - very minimal like SpaceX */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 opacity-5">
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 opacity-3">
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
          animate={{
            scale: [1, 0.9, 1.2, 1],
            opacity: [0.02, 0.06, 0.02]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Minimal grid overlay - very subtle */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px"
        }}
      />
    </div>
  );
}