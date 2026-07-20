"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const images = ["/allumin.jpg", "/bedroom.jpg", "/cupboards.jpg", "/door.jpg"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5]">
      {/* Background */}
      <div className="absolute -top-48 right-0 h-[550px] w-[550px] rounded-full bg-[#7A0C1D]/5 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-[#7A0C1D]/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#7A0C1D]/10 px-4 py-2 text-sm font-semibold text-[#7A0C1D]">
              <Sparkles size={16} />
              Premium Interior Solutions
            </div>

            <h1 className="mt-6 font-heading text-5xl leading-tight text-[#222] lg:text-7xl">
              Crafted for
              <br />
              Modern
              <span className="text-[#7A0C1D]"> Living</span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-gray-600 lg:mx-0">
              Premium UPVC Windows, Mesh Doors, PVC Interiors, Aluminium
              Partitions, Modular Kitchens and complete interior solutions
              crafted with precision.
            </p>

            <div className="mt-10">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A0C1D] px-8 py-4 font-medium text-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                View Our Work
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
