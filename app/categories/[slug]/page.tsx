import Link from "next/link";
import { notFound } from "next/navigation";

import CourtCard from "@/components/CourtCard";
import { courts } from "@/data/courts";
import { fromCategorySlug, getAllCategories, toCategorySlug } from "@/lib/categories";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    area?: string;
  }>;
};

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const category = fromCategorySlug(slug);

  if (!category) {
    notFound();
  }

  const area = (resolvedSearchParams?.area ?? "").trim();
  const allAreas = Array.from(
    new Set(courts.filter((court) => court.categories.includes(category)).map((court) => court.area))
  ).sort((a, b) => a.localeCompare(b));

  const categoryCourts = courts.filter((court) => {
    const categoryMatch = court.categories.includes(category);
    const areaMatch = area ? court.area === area : true;

    return categoryMatch && areaMatch;
  });

  const allCategories = getAllCategories();

  return (
    <div className="page-glow flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:py-14">
        <section className="hero-panel rounded-[2rem] p-6 sm:p-10">
          <p className="inline-flex items-center rounded-full border border-[#efdccd] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6552]">
            Futsal category
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#2b1f19] sm:text-5xl">
            {category}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#5e4b40] sm:text-lg">
            {categoryCourts.length} courts currently listed.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <Link
              href={`/categories/${toCategorySlug(category)}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                area
                  ? "border border-[#ead4c1] bg-white text-[#6b4f40] hover:bg-[#fff1e4]"
                  : "bg-[#e16e3d] text-white hover:bg-[#bf4f24]"
              }`}
            >
              All areas
            </Link>
            {allAreas.map((item) => (
              <Link
                key={item}
                href={`/categories/${toCategorySlug(category)}?area=${encodeURIComponent(item)}`}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  area === item
                    ? "bg-[#e16e3d] text-white hover:bg-[#bf4f24]"
                    : "border border-[#ead4c1] bg-white text-[#6b4f40] hover:bg-[#fff1e4]"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryCourts.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-[#efdccd] bg-[#fffdf9] p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-[#6a5143]">Explore more:</span>
            {allCategories
              .filter((item) => item !== category)
              .slice(0, 6)
              .map((item) => (
                <Link
                  key={item}
                  href={`/categories/${toCategorySlug(item)}`}
                  className="rounded-full border border-[#ead4c1] bg-white px-4 py-2 text-sm font-semibold text-[#6b4f40] transition hover:bg-[#fff1e4]"
                >
                  {item}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
