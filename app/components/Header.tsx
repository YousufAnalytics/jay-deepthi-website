"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { BUSINESS } from "../config/business";

const menu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const message =
    "Hi Jay Deepthi Interiors, I visited your website and I'm interested in your services.";

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    `Hi ${BUSINESS.name}, I visited your website and would like to know more about your services.`,
  )}`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Gold Top Border */}

      <nav className="backdrop-blur-xl bg-white/90 border-b border-gray-200 shadow-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}

            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/logo.png"
                width={70}
                height={70}
                alt="Jay Deepthi Interiors"
                className="rounded-full"
              />

              <div>
                <h1 className="text-2xl font-black tracking-wide text-[#7A0C1D]">
                  JAY DEEPTHI
                </h1>

                <p className="uppercase tracking-[0.45em] text-[11px] text-yellow-700">
                  Interiors
                </p>
              </div>
            </Link>

            {/* Desktop */}

            <div className="hidden lg:flex items-center gap-10">
              {menu.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative group font-bold transition duration-300 ${
                      isActive
                        ? "text-[#7A0C1D]"
                        : "text-gray-700 hover:text-[#7A0C1D]"
                    }`}
                  >
                    {item.name}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* CTA */}

            <div className="hidden lg:flex">
              <a
                href={whatsappUrl}
                target="_blank"
                className="px-7 py-3 rounded-lg bg-gradient-to-r from-[#7A0C1D] to-[#a31632] text-white font-semibold hover:scale-105 transition shadow-lg hover:shadow-yellow-400/30 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            {/* Mobile */}

            <button onClick={() => setOpen(!open)} className="lg:hidden">
              <Menu size={30} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="lg:hidden bg-white border-t">
            {menu.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block border-l-4 px-6 py-4 font-medium transition-all duration-300 ${
                    isActive
                      ? "border-[#7A0C1D] bg-[#500a14]/5 text-[#500a14]"
                      : "border-transparent text-gray-700 hover:border-[#7A0C1D] hover:bg-gray-100 hover:text-[#500a14]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="p-6"></div>
          </div>
        )}
      </nav>
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400" />
    </header>
  );
}
