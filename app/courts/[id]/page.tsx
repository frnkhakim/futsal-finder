/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";

import { courts } from "@/data/courts";

export default function CourtPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const court = courts.find((c) => c.id === params.id);

  if (!court) {
    notFound();
  }

  const mapQuery = encodeURIComponent(court.mapQuery ?? `${court.name}, ${court.area}`);
  const embedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  const whatsappText = encodeURIComponent(
    `Hi! I'm interested in booking ${court.name} in ${court.area}. What slots are available?`
  );

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 hover:text-emerald-700 dark:text-zinc-400 dark:hover:text-emerald-300"
          >
            ← Back to courts
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <div className="relative aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900">
              <img
                src={court.image}
                alt={court.name}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                {court.name}
              </h1>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {court.area} • R{court.price}/hour
              </p>

              <p className="mt-5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                {court.description}
              </p>

              <h2 className="mt-7 text-base font-semibold text-zinc-950 dark:text-zinc-50">
                Facilities
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {court.facilities.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-medium text-white transition hover:bg-emerald-700"
                >
                  Send enquiry on WhatsApp
                </a>
                <Link
                  href="/owners"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-medium text-emerald-800 transition hover:bg-emerald-50 dark:border-emerald-500/30 dark:bg-zinc-950 dark:text-emerald-300 dark:hover:bg-emerald-500/10"
                >
                  Own a court?
                </Link>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <div className="p-6">
                <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                  Location
                </h2>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {court.address ?? `${court.area}, Johannesburg`}
                </p>
              </div>
              <div className="aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900">
                <iframe
                  title={`Map for ${court.name}`}
                  src={embedUrl}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
                >
                  Open in Google Maps
                </a>
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                Tip for owners
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                List your venue to get discovered, receive enquiries, and (soon) accept online
                bookings.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
