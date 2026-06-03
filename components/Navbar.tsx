import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-zinc-950"
        >
          <span className="text-emerald-600">Futsal</span>{" "}
          Finder
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-700">
          <Link
            href="/"
            className="hover:text-emerald-700"
          >
            Courts
          </Link>
          <Link
            href="/owners"
            className="hover:text-emerald-700"
          >
            For Owners
          </Link>
        </nav>
      </div>
    </header>
  );
}
