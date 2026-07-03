import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "../config/business";
const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const services = [
  "UPVC Windows",
  "Mesh Doors",
  "PVC Interiors",
  "Aluminium Partitions",
  "False Ceiling",
  "Modular Kitchens",
];

export default function Footer() {
  const message =
    "Hi Jay Deepthi Interiors, I visited your website and I'm interested in your services.";

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    `Hi ${BUSINESS.name}, I visited your website and would like to know more about your services.`,
  )}`;
  return (
    <footer id="contact" className="border-t border-gray-200 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top */}

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Company */}

          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-[#222]">
              Jay Deepthi Interiors
            </h2>

            <p className="mt-5 max-w-md leading-8 text-gray-600">
              Premium UPVC windows, mesh doors, PVC interiors, aluminium
              partitions, false ceilings and modular kitchens crafted for
              beautiful homes and commercial spaces.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#7A0C1D] px-7 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <MessageCircle size={20} />

              <span>WhatsApp Us</span>

              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Links */}

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {/* Quick Links */}

            <div>
              <h3 className="font-semibold text-[#222]">Quick Links</h3>

              <ul className="mt-5 space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-600 transition hover:text-[#7A0C1D]"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}

            <div>
              <h3 className="font-semibold text-[#222]">Services</h3>

              <ul className="mt-5 space-y-4">
                {services.map((service) => (
                  <li key={service} className="text-gray-600">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}

            <div>
              <h3 className="font-semibold text-[#222]">Contact</h3>

              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <Phone className="mt-1 text-[#7A0C1D]" size={18} />

                  <span className="text-gray-600">{BUSINESS.phone}</span>
                </div>

                <div className="flex gap-3">
                  <Mail className="mt-1 text-[#7A0C1D]" size={18} />

                  <span className="text-gray-600">{BUSINESS.email}</span>
                </div>

                <div className="flex gap-3">
                  <MapPin className="mt-1 text-[#7A0C1D]" size={18} />

                  <span className="text-gray-600">{BUSINESS.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Jay Deepthi Interiors. All rights
            reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed & Developed by
            <span className="ml-1 font-medium text-[#7A0C1D]">DigiSoc</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
