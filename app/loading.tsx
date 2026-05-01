"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-floral-bg flex items-center justify-center z-[999]">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 1, 0.3] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-2xl font-light tracking-[0.3em] text-floral-text"
        >
          S T U D I O <span className="text-floral-primary">.</span>
        </motion.div>
        <div className="w-12 h-[1px] bg-floral-accent overflow-hidden relative">
          <motion.div 
            animate={{ x: [-48, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-floral-primary w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}