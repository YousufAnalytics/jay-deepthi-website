"use client";

import { motion, Variants } from "framer-motion";
import { DoorOpen, LayoutGrid, Building2, House } from "lucide-react";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const items = [
  {
    icon: House,
    label: "UPVC Windows",
    x: 110,
    y: 135,
  },
  {
    icon: DoorOpen,
    label: "Mesh Door",
    x: 160,
    y: 255,
  },
  {
    icon: Building2,
    label: "Aluminium Partition",
    x: 340,
    y: 180,
  },
  {
    icon: LayoutGrid,
    label: "PVC Interior",
    x: 300,
    y: 270,
  },
];

export default function HouseShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Glow */}

      <div className="absolute inset-0 rounded-full bg-[#7A0C1D]/10 blur-3xl" />

      {/* House */}

      <motion.svg
        width="450"
        height="360"
        viewBox="0 0 450 360"
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full"
      >
        {/* Roof */}

        <motion.path
          d="M80 150 L225 60 L370 150"
          stroke="#7A0C1D"
          strokeWidth="3"
          fill="transparent"
          variants={draw}
        />

        {/* Walls */}

        <motion.path
          d="M120 150 V310 H330 V150"
          stroke="#7A0C1D"
          strokeWidth="3"
          fill="transparent"
          variants={draw}
          transition={{ delay: 0.3 }}
        />

        {/* Door */}

        <motion.rect
          x="200"
          y="220"
          width="50"
          height="90"
          stroke="#7A0C1D"
          strokeWidth="3"
          fill="transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1 }}
          style={{ originY: 1 }}
        />

        {/* Left Window */}

        <motion.rect
          x="145"
          y="185"
          width="45"
          height="40"
          stroke="#7A0C1D"
          strokeWidth="3"
          fill="transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />

        {/* Right Window */}

        <motion.rect
          x="260"
          y="185"
          width="45"
          height="40"
          stroke="#7A0C1D"
          strokeWidth="3"
          fill="transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        />
      </motion.svg>

      {/* Floating service tags */}

      {items.map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            className="absolute rounded-xl bg-white px-4 py-3 shadow-xl border border-gray-100 flex items-center gap-2"
            style={{
              left: item.x,
              top: item.y,
            }}
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              delay: 1.5 + i * 0.3,
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Icon size={18} className="text-[#7A0C1D]" />

            <span className="text-sm font-medium whitespace-nowrap">
              {item.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
