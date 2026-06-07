import Link from "next/link";

import { courts } from "@/data/courts";
import { getAllCategories, toCategorySlug } from "@/lib/categories";

export default function CategoriesPage() {
  const categories = getAllCategories();
  const categoryCards = categories.map((category) => {
    const matchingCourts = courts.filter((court) => court.categories.includes(category));

    return {
      name: category,
      slug: toCategorySlug(category),
      count: matchingCourts.length,
      areas: Array.from(new Set(matchingCourts.map((court) => court.area))).length,
      minPrice: Math.min(...matchingCourts.map((court) => court.price)),
    };
  });

  return (
    <div className="page-glow flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:py-14">
        <section className="hero-panel rounded-[2rem] p-6 sm:p-10">
          <p className="inline-flex items-center rounded-full border border-[#efdccd] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6552]">
            Browse directory
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#2b1f19] sm:text-5xl">
            Futsal categories
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#5e4b40] sm:text-lg">
            Explore courts by match type, venue setup, and player goals. Choose a category and discover the right place to play.
          </p>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryCards.map((item) => (
            <Link
              key={item.name}
              href={`/categories/${item.slug}`}
              className="rounded-3xl border border-[#efdccd] bg-[#fffdf9] p-5 shadow-[0_12px_26px_rgba(71,40,24,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(71,40,24,0.12)]"
            >
              <p className="text-lg font-bold text-[#2b1f19]">{item.name}</p>
              <p className="mt-2 text-sm text-[#6a5143]">
                {item.count} courts • {item.areas} areas
              </p>
              <p className="mt-4 inline-flex rounded-full bg-[#fff2e6] px-3 py-1 text-xs font-semibold text-[#8b593f]">
                From R{item.minPrice}/hour
              </p>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
