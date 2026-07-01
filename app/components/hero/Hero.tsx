"use client";

import { motion } from "framer-motion";
import HouseShowcase from "./HouseShowcase";

import {
  DoorOpen,
  House,
  LayoutGrid,
  Building2,
  PanelsTopLeft,
  Home,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const categories = [
    {
      title: "Mesh Doors",
      icon: DoorOpen,
    },
    {
      title: "UPVC Windows",
      icon: House,
    },
    {
      title: "PVC Interiors",
      icon: LayoutGrid,
    },
    {
      title: "Aluminium Partitions",
      icon: Building2,
    },
    {
      title: "False Ceiling",
      icon: PanelsTopLeft,
    },
    {
      title: "Modular Kitchens",
      icon: Home,
    },
  ];
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5]">
      {/* Decorative Circle */}

      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-heading mt-6 text-6xl leading-tight text-[#222] lg:text-7xl">
              Crafted for
              <br />
              Modern
              <span className="text-[#7A0C1D]"> Living</span>
            </h1>

            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="
        flex items-center gap-2
        rounded-full
        bg-white
        px-5 py-2
        border border-gray-200
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
                >
                  <Icon size={16} className="text-[#7A0C1D]" />
                  <span className="text-sm font-medium text-[#333]">
                    {title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-5">
              <Link
                href="/work"
                className="rounded-full bg-[#7A0C1D] px-8 py-4 text-white transition hover:shadow-xl"
              >
                Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
