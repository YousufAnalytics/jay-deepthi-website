"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

const videos = [
  {
    id: 1,
    video: "/JD-video1.mp4",
  },
  {
    id: 2,
    video: "/JD-video2.mp4",
  },
  {
    id: 3,
    video: "/JD-video3.mp4",
  },
  {
    id: 4,
    video: "/JD-video4.mp4",
  },
  {
    id: 5,
    video: "/JD-video5.mp4",
  },
];

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <section className="border-t border-gray-200 bg-[#FAF8F5] py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-[#7A0C1D]">
              Our Work In Motion
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#222] md:text-5xl">
              See Our Craftsmanship
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Watch real installation videos and completed projects to
              experience the quality, precision and craftsmanship behind every
              space we transform.
            </p>
          </div>

          {/* Videos */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {videos.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  {/* Preview */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />

                  {/* Play Button */}
                  <button
                    onClick={() => setSelectedVideo(item.video)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl transition duration-300 group-hover:scale-110">
                      <Play
                        size={28}
                        fill="#7A0C1D"
                        className="ml-1 text-[#7A0C1D]"
                      />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-14 right-0 rounded-full bg-white p-3 shadow-lg transition hover:rotate-90"
            >
              <X size={22} className="text-[#7A0C1D]" />
            </button>

            {/* Video */}
            <div className="overflow-hidden rounded-3xl bg-black shadow-2xl">
              <video
                key={selectedVideo}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[85vh]"
              >
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
