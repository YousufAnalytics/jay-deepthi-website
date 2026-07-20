"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const works = [
  "/kitchen.jpg",
  "/door.jpg",
  "/all.jpg",
  "/cupboards.jpg",
  "/upvc.jpg",
  "/singledoor.jpg",
  "/bedroom.jpg",
  "/Grills.jpeg",
  "/cupboard2.jpeg",
  "/cupboard3.jpeg",
  "/cupboard4.jpeg",
  "/cupboards5.jpeg",
  "/cupboards6.jpeg",
  "/cupboard7.jpeg",
  "/JD-kitchen.jpeg",
  "/JD-door.jpeg",
  "/JD-entrance.jpeg",
  "/JD-dining.jpeg",
];

export default function WorkPage() {
  return (
    <section className="bg-[#faf8f5]">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#7A0C1D] via-[#5F0917] to-[#32050D] py-28">
        {/* Decorative circles */}
        <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:45px_45px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="tracking-[0.35em] uppercase text-[#D4AF37]">
            Portfolio
          </p>

          <h1 className="mt-6 font-heading text-5xl md:text-7xl text-white">
            OUR WORK
          </h1>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#D4AF37]" />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80">
            Every project reflects our passion for quality craftsmanship,
            thoughtful design and attention to detail.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="mx-auto max-w-[1700px] px-6 py-20">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {works.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.04,
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-sm bg-white shadow-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image}
                  alt={`Project ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-5 left-5 translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold text-white">
                    Project {index + 1}
                  </h3>

                  <p className="text-sm text-white/80">Jay Deepthi Interiors</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
