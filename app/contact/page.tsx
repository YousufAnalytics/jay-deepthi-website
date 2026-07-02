"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const contact = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@jaydeepthiinteriors.com",
    href: "mailto:info@jaydeepthiinteriors.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Hyderabad, Telangana",
    href: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat • 9 AM - 7 PM",
    href: "#",
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
    </main>
  );
}
