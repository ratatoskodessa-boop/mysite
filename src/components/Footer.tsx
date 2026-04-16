"use client";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-black text-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xl font-bold">
          bistro<span className="bg-[#AAFF00] text-black px-1 rounded-md">site</span>
        </span>
        <p className="text-sm text-gray-400 font-medium">
          © {new Date().getFullYear()} bistrosite. Зроблено з ❤️ в Україні.
        </p>
        <a
          href="#"
          className="text-sm font-bold text-[#AAFF00] hover:underline underline-offset-4"
        >
          Вгору ↑
        </a>
      </div>
    </footer>
  );
}
