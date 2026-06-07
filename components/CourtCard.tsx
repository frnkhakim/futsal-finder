/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import type { Court } from "@/data/courts";

export default function CourtCard({ court }: { court: Court }) {
  const categoryPreview = court.categories.slice(0, 2);
  const facilityPreview = court.facilities
    .filter((facility) => !categoryPreview.includes(facility))
    .slice(0, 3);

  const whatsappText = encodeURIComponent(
    `Hi! I'm interested in booking ${court.name} in ${court.area}. What slots are available?`
  );

  return (
    <div className="group overflow-hidden rounded-[1.4rem] border border-[#efdccd] bg-[#fffdf9] shadow-[0_12px_30px_rgba(71,40,24,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(71,40,24,0.12)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f3e8dc]">
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
            <h3 className="truncate text-lg font-bold tracking-tight text-[#2b1f19]">
              {court.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#6a5143]">
              {court.area} • R{court.price}/hour
            </p>
          </div>
          {court.featured ? (
            <span className="shrink-0 rounded-full bg-[#ffe3ba] px-2.5 py-1 text-xs font-bold text-[#875117]">
              Featured
            </span>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categoryPreview.map((category) => (
            <span
              key={category}
              className="rounded-full border border-[#cfe6df] bg-[#eef9f4] px-2.5 py-1 text-xs font-semibold text-[#216f5f]"
            >
              {category}
            </span>
          ))}
          {facilityPreview.map((f) => (
            <span
              key={f}
              className="rounded-full border border-[#eddccc] bg-[#fff5ea] px-2.5 py-1 text-xs font-medium text-[#6d5446]"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <Link
            href={`/courts/${court.id}`}
            className="inline-flex h-10 flex-1 items-center justify-center rounded-xl bg-[#e16e3d] px-4 text-sm font-semibold text-white transition hover:bg-[#bf4f24]"
          >
            View details
          </Link>
          <a
            href={`https://wa.me/?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-[#cde5db] bg-[#effaf5] px-4 text-sm font-semibold text-[#1f7664] transition hover:bg-[#dff4eb]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
