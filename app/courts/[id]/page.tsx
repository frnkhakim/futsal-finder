/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";

import { courts } from "@/data/courts";

export default function CourtPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const [resolvedParams] = [params];

  return <CourtPageContent paramsPromise={resolvedParams} />;
}

async function CourtPageContent({
  paramsPromise,
}: {
  paramsPromise: Promise<{ id: string }>;
}) {
  const { id } = await paramsPromise;
  const court = courts.find((c) => c.id === id);

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
    <div className="page-glow flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm font-semibold text-[#6c5345] hover:text-[#bf4f24]"
          >
            ← Back to courts
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="overflow-hidden rounded-3xl border border-[#efdccd] bg-[#fffdf9] shadow-[0_14px_34px_rgba(71,40,24,0.08)]">
            <div className="relative aspect-[16/10] w-full bg-[#f3e8dc]">
              <img
                src={court.image}
                alt={court.name}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold tracking-tight text-[#2b1f19]">
                {court.name}
              </h1>
              <p className="mt-2 text-sm font-medium text-[#6a5143]">
                {court.area} • R{court.price}/hour
              </p>

              <p className="mt-5 text-base leading-7 text-[#544339]">
                {court.description}
              </p>

              <h2 className="mt-7 text-base font-bold text-[#2b1f19]">
                Facilities
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {court.facilities.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#eddccc] bg-[#fff5ea] px-3 py-1 text-sm font-medium text-[#6c5244]"
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
                  className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-[#e16e3d] px-5 text-sm font-semibold text-white transition hover:bg-[#bf4f24]"
                >
                  Send enquiry on WhatsApp
                </a>
                <Link
                  href="/owners"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-[#cde5db] bg-[#effaf5] px-5 text-sm font-semibold text-[#1f7664] transition hover:bg-[#dff4eb]"
                >
                  Own a court?
                </Link>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <section className="overflow-hidden rounded-3xl border border-[#efdccd] bg-[#fffdf9] shadow-[0_14px_34px_rgba(71,40,24,0.08)]">
              <div className="p-6">
                <h2 className="text-base font-bold text-[#2b1f19]">
                  Location
                </h2>
                <p className="mt-2 text-sm text-[#6a5143]">
                  {court.address ?? `${court.area}, Johannesburg`}
                </p>
              </div>
              <div className="aspect-[16/10] w-full bg-[#f3e8dc]">
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
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-[#ead4c1] bg-white px-5 text-sm font-semibold text-[#523d33] transition hover:bg-[#fff2e7]"
                >
                  Open in Google Maps
                </a>
              </div>
            </section>

            <section className="rounded-3xl border border-[#efdccd] bg-[#fff8ef] p-6 shadow-[0_14px_34px_rgba(71,40,24,0.06)]">
              <h2 className="text-base font-bold text-[#2b1f19]">
                Tip for owners
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#5e4b40]">
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
