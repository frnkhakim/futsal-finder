import CourtCard from "@/components/CourtCard";
import { courts } from "@/data/courts";
import Link from "next/link";

type HomeProps = {
  searchParams?: {
    area?: string;
  };
};

export default function Home({ searchParams }: HomeProps) {
  const area = (searchParams?.area ?? "").trim();

  const areas = Array.from(new Set(courts.map((c) => c.area))).sort((a, b) =>
    a.localeCompare(b)
  );

  const featured = courts.filter((c) => c.featured);
  const filtered = area ? courts.filter((c) => c.area === area) : courts;

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Johannesburg
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
              Find futsal courts. Send enquiries. Fill more slots.
            </h1>
            <p className="mt-4 text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Discover courts, view facilities, and message venues instantly via WhatsApp.
            </p>
          </div>

          <form
            action="/"
            method="GET"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end"
          >
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                Search by area
              </span>
              <select
                name="area"
                defaultValue={area}
                className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-950 shadow-sm outline-none focus:border-zinc-400 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50"
              >
                <option value="">All areas</option>
                {areas.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-medium text-white transition hover:bg-emerald-700"
            >
              Search
            </button>

            {area ? (
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-medium text-emerald-800 transition hover:bg-emerald-50 dark:border-emerald-500/30 dark:bg-zinc-950 dark:text-emerald-300 dark:hover:bg-emerald-500/10"
              >
                Clear
              </Link>
            ) : null}
          </form>
        </section>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                Featured courts
              </h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                High-demand venues players love.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {featured.map((court) => (
              <CourtCard key={court.id} court={court} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {area ? `Courts in ${area}` : "Available courts"}
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Compare price, facilities, and location.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {filtered.map((court) => (
              <CourtCard key={court.id} court={court} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
