"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern UPVC Windows",
    image: "/upvc.jpg",
    large: true,
  },
  {
    id: 2,
    title: "Luxury Mesh Door",
    image: "/all.jpg",
  },
  {
    id: 3,
    title: "PVC Wall Panels",
    image: "/door.jpg",
  },
  {
    id: 4,
    title: "Aluminium Partition",
    image: "/allumin.jpg",
  },
  {
    id: 5,
    title: "False Ceiling",
    image: "/jay-deepthi.jpg",
  },
  {
    id: 6,
    title: "Modular Kitchen",
    image: "/kitchen.jpg",
    large: true,
  },
];

export default function HomeSolutions() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="mt-4 text-5xl font-heading text-[#222]">
            Crafted Spaces That
            <span className="text-[#7A0C1D]"> Inspire</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Every project is designed with precision, premium materials and
            attention to detail. Browse some of our recent residential and
            commercial installations.
          </p>
        </motion.div>

        <div className="mt-20 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative mb-6 break-inside-avoid overflow-hidden rounded-xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={project.large ? 800 : 450}
                className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <h3 className="text-white text-xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
