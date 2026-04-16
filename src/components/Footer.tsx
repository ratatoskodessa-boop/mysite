"use client";

export default function Footer() {
  return (
    <footer className="bg-white text-[#111212] px-6 py-10 shadow-[0_-10px_30px_rgba(17,18,18,0.05)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xl font-bold">
          bistro<span className="bg-[#ff4d6d] text-white px-1 rounded-md">site</span>
        </span>
        <p className="text-sm text-[#444648] font-medium">
          © {new Date().getFullYear()} bistrosite. eugen.bistrosite@gmail.com · +380 93 853 3691
        </p>
        <a
          href="#"
          className="text-sm font-bold text-[#ff4d6d] hover:underline underline-offset-4"
        >
          Вгору ↑
        </a>
      </div>
    </footer>
  );
}
