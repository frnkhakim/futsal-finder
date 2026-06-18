/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";

import { creches } from "@/data/creches";

export default function CrechePage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const [resolvedParams] = [params];

  return <CrechePageContent paramsPromise={resolvedParams} />;
}

async function CrechePageContent({
  paramsPromise,
}: {
  paramsPromise: Promise<{ id: string }>;
}) {
  const { id } = await paramsPromise;
  const creche = creches.find((item) => item.id === id);

  if (!creche) {
    notFound();
  }

  const mapQuery = encodeURIComponent(creche.mapQuery ?? `${creche.name}, ${creche.area}`);
  const embedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  const whatsappText = encodeURIComponent(
    `Hi! I'm interested in enrolling my child at ${creche.name} in ${creche.area}. Please share availability and fees.`
  );

  return (
    <div className="page-glow flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm font-semibold text-[#6c5345] hover:text-[#bf4f24]"
          >
            ← Back to creches
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="overflow-hidden rounded-3xl border border-[#efdccd] bg-[#fffdf9] shadow-[0_14px_34px_rgba(71,40,24,0.08)]">
            <div className="relative aspect-[16/10] w-full bg-[#f3e8dc]">
              <img
                src={creche.image}
                alt={creche.name}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold tracking-tight text-[#2b1f19]">
                {creche.name}
              </h1>
              <p className="mt-2 text-sm font-medium text-[#6a5143]">
                {creche.area} • From R{creche.price}/month
              </p>

              <p className="mt-5 text-base leading-7 text-[#544339]">
                {creche.description}
              </p>

              <h2 className="mt-7 text-base font-bold text-[#2b1f19]">
                Facilities
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {creche.facilities.map((item) => (
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
                  Send enrolment enquiry
                </a>
                <Link
                  href="/owners"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-[#cde5db] bg-[#effaf5] px-5 text-sm font-semibold text-[#1f7664] transition hover:bg-[#dff4eb]"
                >
                  Own a creche?
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
                  {creche.address ?? `${creche.area}, Johannesburg`}
                </p>
              </div>
              <div className="aspect-[16/10] w-full bg-[#f3e8dc]">
                <iframe
                  title={`Map for ${creche.name}`}
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
                List your creche to get discovered by parents, receive enrolment enquiries, and
                soon manage admissions online.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
