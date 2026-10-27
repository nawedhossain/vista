import React from 'react';
import { motion } from 'motion/react';

export const FloatingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Darkened Gradient on the Top-Left / Logo Side for High Contrast & Rich Depth */}
      <motion.div
        animate={{
          x: [0, 15, -10, 0],
          y: [0, -15, 10, 0],
          scale: [1, 1.04, 0.98, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#05050A] via-blue-950/20 to-transparent blur-[160px]"
      />

      {/* Subtle Vivid Magenta / Purple Ambient Glow on the Right Side */}
      <motion.div
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.95, 1.04, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -right-48 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-purple-900/15 via-fuchsia-950/10 to-transparent blur-[150px]"
      />

      {/* Deep Subtle Center Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-2/3 left-1/3 w-[450px] h-[450px] rounded-full bg-blue-900/10 blur-[160px]"
      />

      {/* Subtle Geometric Glass Accent Shapes for Desktop */}
      <div className="absolute top-[18%] left-[8%] hidden xl:block opacity-25">
        <motion.div
          animate={{ rotate: 360, y: [0, -15, 0] }}
          transition={{ rotate: { duration: 40, repeat: Infinity, ease: 'linear' }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.015] backdrop-blur-md shadow-lg shadow-black/40 rotate-12"
        />
      </div>

      <div className="absolute top-[35%] right-[7%] hidden xl:block opacity-20">
        <motion.div
          animate={{ rotate: -360, y: [0, 20, 0] }}
          transition={{ rotate: { duration: 50, repeat: Infinity, ease: 'linear' }, y: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
          className="w-24 h-24 rounded-3xl border border-purple-500/15 bg-gradient-to-br from-white/[0.02] to-purple-950/[0.02] backdrop-blur-lg"
        />
      </div>
    </div>
  );
};
