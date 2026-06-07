import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#efdccd]/70 bg-[#fffaf5]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-[#2b1f19]"
        >
          Futsal <span className="text-[#e16e3d]">Finder</span>
        </Link>

        <nav className="flex items-center gap-2 text-sm font-semibold text-[#5a4336] sm:gap-3">
          <Link
            href="/"
            className="rounded-full px-4 py-2 transition hover:bg-[#fff1e4] hover:text-[#bf4f24]"
          >
            Courts
          </Link>
          <Link
            href="/categories"
            className="rounded-full px-4 py-2 transition hover:bg-[#fff1e4] hover:text-[#bf4f24]"
          >
            Categories
          </Link>
          <Link
            href="/owners"
            className="rounded-full bg-[#e16e3d] px-4 py-2 text-white transition hover:bg-[#bf4f24]"
          >
            For Owners
          </Link>
        </nav>
      </div>
    </header>
  );
}
