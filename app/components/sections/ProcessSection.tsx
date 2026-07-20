import { PhoneCall, Ruler, FileText, Hammer, House } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Contact us through WhatsApp or phone and tell us about your project.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Site Visit & Measurement",
    description:
      "Our team visits your location to understand the space and take accurate measurements.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Design & Quote",
    description: "Receive a customized solution with transparent pricing.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Professional Installation",
    description:
      "Our experienced technicians complete the installation with precision.",
    icon: Hammer,
  },
  {
    number: "05",
    title: "Final Handover",
    description:
      "After quality inspection, we hand over your completed project.",
    icon: House,
  },
];

export default function ProcessSection() {
  return (
    <section className="border-t border-gray-200 bg-[#FAF8F5] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#7A0C1D]">
            Our Process
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#222] md:text-5xl">
            From Your Vision
            <span className="text-[#7A0C1D]"> to Reality</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-7">
            A simple and transparent process designed to deliver premium
            interiors with complete peace of mind.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-14 max-w-6xl">
          {/* Center line only on desktop */}

          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-[#7A0C1D]/20 lg:block" />

          <div className="space-y-8 lg:space-y-14">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`relative flex ${
                    index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Mobile timeline */}

                  <div className="absolute left-6 top-0 bottom-0 w-px bg-[#7A0C1D]/20 lg:hidden" />

                  {/* Number */}

                  <div className="absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#7A0C1D] text-sm font-bold text-white lg:left-1/2 lg:-translate-x-1/2">
                    {step.number}
                  </div>

                  {/* Card */}

                  <div className="ml-16 w-full lg:ml-0 lg:w-[46%]">
                    <div className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A0C1D]/10">
                        <Icon className="text-[#7A0C1D]" size={28} />
                      </div>

                      <h3 className="text-xl font-semibold text-[#222]">
                        {step.title}
                      </h3>

                      <p className="mt-3 leading-7 text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
