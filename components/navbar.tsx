import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-4 border-b border-[#e8c6cc] bg-[#fdf8f8] px-6 py-4">
      <Link
        href="/"
        className="text-lg font-semibold tracking-wide text-[#493b3e] transition hover:text-[#bd8994]"
      >
        Aisyah Personal Website<span className="text-[#bd8994]">.</span>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="border-b-2 border-transparent py-2 text-sm font-medium text-[#827477] transition hover:border-[#bd8994] hover:text-[#493b3e]"
        >
          Beranda
        </Link>
        <Link
          href="/tentang"
          className="border-b-2 border-transparent py-2 text-sm font-medium text-[#827477] transition hover:border-[#bd8994] hover:text-[#493b3e]"
        >
          Tentang
        </Link>
        <Link
          href="/kontak"
          className="border-b-2 border-transparent py-2 text-sm font-medium text-[#827477] transition hover:border-[#bd8994] hover:text-[#493b3e]"
        >
          Kontak
        </Link>
      </div>
    </nav>
  );
}
