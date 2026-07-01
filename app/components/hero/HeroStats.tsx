const stats = [
  {
    value: "150+",
    label: "Projects",
  },
  {
    value: "12+",
    label: "Years",
  },
  {
    value: "500+",
    label: "Happy Clients",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 flex flex-wrap gap-5">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/20 bg-white/10 px-8 py-6 backdrop-blur-md"
        >
          <h3 className="text-3xl font-bold text-yellow-400">{item.value}</h3>

          <p className="mt-2 text-gray-200">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
