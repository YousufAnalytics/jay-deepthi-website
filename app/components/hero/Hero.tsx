"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  DoorOpen,
  House,
  LayoutGrid,
  Building2,
  PanelsTopLeft,
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
  ArrowRight,
  Sparkles,
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
      {/* Background decoration */}
      <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#7A0C1D]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#7A0C1D]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#7A0C1D]/10 px-4 py-2 text-sm font-semibold text-[#7A0C1D]">
              <Sparkles size={16} />
              Premium Interior Solutions
            </p>

            <h1 className="font-heading text-4xl leading-tight text-[#222] sm:text-5xl lg:text-7xl">
              Crafted for
              <br />
              Modern
              <span className="text-[#7A0C1D]"> Living</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              We design and install premium UPVC windows, mesh doors, aluminium
              partitions, modular kitchens, false ceilings and complete interior
              solutions for homes and commercial spaces.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A0C1D] px-8 py-4 font-medium text-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                View Our Work
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="rounded-3xl mt-10 border border-gray-200 bg-white p-6 shadow-xl">
              <h3 className="text-2xl font-semibold text-[#222]">
                Services We Offer
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Complete interior & exterior solutions under one roof.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {categories.map(({ title, icon: Icon }) => (
                  <div
                    key={title}
                    className="group flex items-center gap-3 rounded-xl border border-gray-100 p-3 transition-all duration-300 hover:border-[#7A0C1D]/30 hover:bg-[#7A0C1D]/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#7A0C1D]/10">
                      <Icon size={18} className="text-[#7A0C1D]" />
                    </div>

                    <span className="text-sm font-medium text-[#333]">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
