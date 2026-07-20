"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS } from "../config/business";

const contact = [
  {
    icon: Phone,
    title: "Phone",
    value: `${BUSINESS.phone}`,
    href: `tel:+${BUSINESS.phone}`,
  },
  {
    icon: Mail,
    title: "Email",
    value: `${BUSINESS.email}`,
    href: `mailto:${BUSINESS.email}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: `${BUSINESS.address}`,
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: `${BUSINESS.workingHours}`,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      {/* Heading */}
      <section className="px-5 pt-28 pb-14 md:px-8 md:pt-36 md:pb-20 text-center ">
        <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#500a14]">
          CONTACT
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#222] sm:text-4xl md:text-7xl lg:text-6xl">
          We'd Love To
          <br className="hidden sm:block" />
          Hear From You
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
          Whether you're planning a new home, renovating your interiors, or
          looking for premium Mesh Doors, UPVC Windows and Aluminium Partitions,
          we're just a phone call away.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="pb-14 md:pb-20">
        <div className="mx-auto grid max-w-5xl gap-5 px-5 md:grid-cols-2 md:px-8">
          {contact.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group rounded-2xl border border-[#500a14]/10 bg-white p-5 shadow-sm transition-all hover:shadow-lg md:p-7"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#500a14]/10 text-[#500a14] transition-all group-hover:bg-[#500a14] group-hover:text-white md:h-16 md:w-16">
                    <Icon size={22} className="md:h-7 md:w-7" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-[#222] md:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-1 break-words text-sm text-gray-600 md:text-base">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* Google Map */}
      {/* Google Map */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#500a14]">
              Visit Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#222] md:text-4xl">
              Find Our Showroom
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Visit us to explore premium interior solutions and discuss your
              dream project with our experts.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#500a14]/10 bg-white p-2 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.4398314002387!2d80.3857881!3d16.300455699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a754f4553c2d7%3A0x57d7fbff95c0a771!2sJay%20Deepthi%20Interiors!5e0!3m2!1sen!2sin!4v1784536997283!5m2!1sen!2sin"
              className="h-[320px] w-full rounded-2xl md:h-[450px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
