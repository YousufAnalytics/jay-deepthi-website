"use client";

import { motion } from "framer-motion";
import {
  DoorOpen,
  Building2,
  House,
  PanelsTopLeft,
  LayoutGrid,
  CookingPot,
} from "lucide-react";

const cards = [
  {
    title: "Mesh Doors",
    subtitle: "Premium Protection",
    icon: DoorOpen,
    className: "lg:absolute lg:top-0 lg:right-16",
  },
  {
    title: "UPVC Windows",
    subtitle: "Energy Efficient",
    icon: House,
    className: "lg:absolute lg:top-36 lg:left-0",
  },
  {
    title: "PVC Interiors",
    subtitle: "Elegant Finish",
    icon: LayoutGrid,
    className: "lg:absolute lg:top-48 lg:right-0",
  },
  {
    title: "Aluminium",
    subtitle: "Modern Partitions",
    icon: Building2,
    className: "lg:absolute lg:bottom-16 lg:left-20",
  },
  {
    title: "False Ceiling",
    subtitle: "Luxury Design",
    icon: PanelsTopLeft,
    className: "lg:absolute lg:bottom-0 lg:right-28",
  },
  {
    title: "Modular Kitchen",
    subtitle: "Smart Living",
    icon: CookingPot,
    className: "lg:absolute lg:top-72 lg:left-36",
  },
];

export default function FloatingCards() {
  return (
    <div className="relative h-[600px]">
      {/* Mobile */}
      <div className="grid grid-cols-2 gap-4 lg:hidden">
        {cards.map((card, index) => (
          <Card key={card.title} card={card} delay={index * 0.15} />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden lg:block h-full">
        {cards.map((card, index) => (
          <div key={card.title} className={card.className}>
            <Card card={card} delay={index * 0.2} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ card, delay }: { card: any; delay: number }) {
  const Icon = card.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: [0, -12, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay,
      }}
      whileHover={{
        y: -12,
        rotate: -2,
        scale: 1.05,
      }}
      className="w-56 rounded-3xl border border-white/40 bg-white/60 p-6 backdrop-blur-xl shadow-xl"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A0C1D]/10">
        <Icon className="text-[#7A0C1D]" size={28} />
      </div>

      <h3 className="text-xl font-semibold text-[#222]">{card.title}</h3>

      <p className="mt-2 text-sm text-gray-500">{card.subtitle}</p>
    </motion.div>
  );
}
