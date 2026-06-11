"use client";

export default function BackToTopButton() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="group fixed bottom-8 right-8 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/90 text-cyan-300 shadow-lg shadow-black/40 backdrop-blur transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:text-cyan-100"
    >
      <span className="group-hover:hidden">↑</span>
      <span className="hidden text-sm group-hover:block">Top</span>
    </a>
  );
}