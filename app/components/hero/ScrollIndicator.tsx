export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div className="flex flex-col items-center">
        <span className="mb-3 text-xs uppercase tracking-[0.4em] text-white">
          Scroll
        </span>

        <div className="flex h-14 w-8 justify-center rounded-full border border-white">
          <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
}
