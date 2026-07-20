import { Play } from "lucide-react";

export default function PlayButton() {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition group-hover:scale-110">
      <Play className="ml-1 text-[#7A0C1D]" fill="#7A0C1D" size={26} />
    </div>
  );
}
