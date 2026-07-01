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
    <main className="bg-[#faf8f5] min-h-screen">
      {/* Heading */}

      <section className="py-30 text-center">
        <p className="uppercase tracking-[0.35em] text-[#500a14]">Contact</p>

        <h1 className="mt-5 font-heading text-5xl md:text-6xl text-[#222]">
          We'd Love To Hear From You
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Whether you're planning a new home, renovating an existing space, or
          looking for premium mesh doors and UPVC windows, we're just a phone
          call away.
        </p>
      </section>

      {/* Contact Cards */}

      <section className="pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2">
          {contact.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group rounded-3xl border border-[#500a14]/10 bg-white p-8 shadow-sm transition hover:shadow-xl"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#500a14]/10 text-[#500a14] transition group-hover:bg-[#500a14] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#222]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-gray-600">{item.value}</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* WhatsApp */}

      <section className="pb-24">
        <div className="mx-auto max-w-xl px-6">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="flex items-center justify-center gap-3 rounded-full bg-[#500a14] px-8 py-5 text-lg font-medium text-white transition hover:scale-[1.02]"
          >
            <MessageCircle />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
