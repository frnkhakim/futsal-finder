/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import type { Court } from "@/data/courts";

export default function CourtCard({ court }: { court: Court }) {
  const whatsappText = encodeURIComponent(
    `Hi! I'm interested in booking ${court.name} in ${court.area}. What slots are available?`
  );

  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-950">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <img
          src={court.image}
          alt={court.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {court.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {court.area} • R{court.price}/hour
            </p>
          </div>
          {court.featured ? (
            <span className="shrink-0 rounded-full bg-amber-400 px-2.5 py-1 text-xs font-semibold text-zinc-950">
              Featured
            </span>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {court.facilities.slice(0, 3).map((f) => (
            <span
              key={f}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <Link
            href={`/courts/${court.id}`}
            className="inline-flex h-10 flex-1 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            View details
          </Link>
          <a
            href={`https://wa.me/?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 text-sm font-medium text-emerald-800 transition hover:bg-emerald-50 dark:border-emerald-500/30 dark:bg-zinc-950 dark:text-emerald-300 dark:hover:bg-emerald-500/10"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
