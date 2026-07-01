"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  image: string;
  large?: boolean;
  index: number;
}

export default function SolutionCard({
  title,
  description,
  image,
  large,
  index,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
      className={`
        group
        overflow-hidden
        rounded-[36px]
        bg-white
        shadow-xl
        transition-all
        duration-500

        ${large ? "md:translate-y-12" : ""}
      `}
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={700}
          height={500}
          className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-8 left-8">
          <span className="rounded-full bg-white/20 px-4 py-2 text-xs uppercase tracking-widest text-white backdrop-blur">
            Premium Solution
          </span>

          <h3 className="mt-5 text-4xl font-semibold text-white">{title}</h3>
        </div>
      </div>

      <div className="p-8">
        <p className="leading-8 text-gray-600">{description}</p>

        <button className="mt-8 flex items-center gap-2 font-semibold text-[#7A0C1D] transition group-hover:gap-4">
          Explore Solution
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}
