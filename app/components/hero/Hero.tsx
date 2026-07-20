"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  DoorOpen,
  House,
  LayoutGrid,
  Building2,
  PanelsTopLeft,
  CookingPot,
  ArrowRight,
  Home,
  Hammer,
  Shield,
  Bird,
  Archive,
  Package,
  Wrench,
  Shirt,
  Blinds,
  Sofa,
} from "lucide-react";

export default function Hero() {
  const categories = [
    { title: "Mesh Doors", icon: DoorOpen },
    { title: "UPVC Windows", icon: House },
    { title: "PVC Interiors", icon: LayoutGrid },
    { title: "Aluminium Partitions", icon: Building2 },
    { title: "False Ceiling", icon: PanelsTopLeft },
    { title: "Modular Kitchens", icon: Home },
    { title: "ACP Fabrications", icon: Hammer },
    { title: "Invisible Grill", icon: Shield },
    { title: "Pigeon Net", icon: Bird },
    { title: "Aluminium Cupboards", icon: Archive },
    { title: "WPVC Cupboards", icon: Package },
    { title: "Carpenter Works", icon: Wrench },
    { title: "SS Mesh Doors", icon: DoorOpen },
    { title: "Profile Doors", icon: DoorOpen },
    { title: "Cloth Handlers", icon: Shirt },
    { title: "PVC Magnetic Curtains", icon: Blinds },
    { title: "Wooden Furniture", icon: Sofa },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5]">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-[#7A0C1D]">
              Jay Deepthi Interiors
            </p>

            <h1 className="font-heading text-4xl leading-tight text-[#222] sm:text-5xl lg:text-7xl">
              Crafted for
              <br />
              Modern
              <span className="text-[#7A0C1D]"> Living</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Premium interior and exterior solutions for homes and commercial
              spaces with quality craftsmanship and elegant finishes.
            </p>

            {/* Services */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-gray-200
        bg-white
        p-4
        transition-all
        duration-300
        hover:border-[#7A0C1D]/30
        hover:shadow-lg
      "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A0C1D]/10">
                    <Icon size={18} className="text-[#7A0C1D]" />
                  </div>

                  <span className="text-sm font-medium leading-5 text-[#333]">
                    {title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A0C1D] px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Our Work
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          {/* <HouseShowcase /> */}
        </div>
      </div>
    </section>
  );
}
