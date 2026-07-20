import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ChevronRight,
} from "lucide-react";
import { BUSINESS } from "../config/business";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/work" },
  { title: "Contact", href: "/contact" },
];

const services = [
  "UPVC Windows",
  "Mesh Doors",
  "PVC Interiors",
  "Aluminium Partitions",
  "False Ceiling",
  "Modular Kitchens",
  "ACP Fabrications",
  "SS Mesh Doors",
  "Invisible Grills",
  "Pigeon Net",
  "Carpenter Works",
  "Aluminium Cupboards",
  "WPVC Cupboards",
  "Profile Doors",
  "Cloth Handlers",
  "PVC Magnetic Curtains",
  "Wooden Furniture",
];

export default function Footer() {
  const whatsappUrl = `https://wa.me/${
    BUSINESS.whatsapp
  }?text=${encodeURIComponent(
    `Hi ${BUSINESS.name}, I visited your website and would like to know more about your services.`,
  )}`;

  return (
    <footer id="contact" className="border-t border-gray-200 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* TOP */}

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Company */}

          <div>
            <h2 className="text-3xl font-bold text-[#222]">
              Jay Deepthi Interiors
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Premium UPVC windows, mesh doors, PVC interiors, aluminium
              partitions, modular kitchens and complete interior solutions
              crafted for homes and commercial spaces.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#7A0C1D] px-7 py-4 text-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <MessageCircle size={20} />
              WhatsApp Us
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold text-[#222]">Quick Links</h3>

            <ul className="mt-6 space-y-4">
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

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold text-[#222]">Contact</h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <Phone size={18} className="mt-1 text-[#7A0C1D]" />
                <span className="text-gray-600">{BUSINESS.phone}</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="mt-1 text-[#7A0C1D]" />
                <span className="text-gray-600">{BUSINESS.email}</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 text-[#7A0C1D]" />
                <span className="text-gray-600">{BUSINESS.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES */}

        {/* Services */}

        <div className="mt-16 border-t border-gray-200 pt-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-2xl font-semibold text-[#222]">Our Services</h3>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all duration-300 hover:border-[#7A0C1D]/30 hover:shadow-md"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7A0C1D]/10">
                  <ChevronRight size={16} className="text-[#7A0C1D]" />
                </div>

                <span className="text-sm font-medium text-gray-700 group-hover:text-[#7A0C1D]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Jay Deepthi Interiors. All rights
            reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed & Developed by{" "}
            <Link
              href="https://digisoc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#7A0C1D] hover:underline"
            >
              DigiSoc
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
