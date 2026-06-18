import CrecheCard from "@/components/CrecheCard";
import { creches } from "@/data/creches";
import { toCategorySlug } from "@/lib/categories";
import Link from "next/link";

type HomeProps = {
  searchParams?: {
    area?: string;
    category?: string;
  };
};

export default function Home({ searchParams }: HomeProps) {
  const area = (searchParams?.area ?? "").trim();
  const category = (searchParams?.category ?? "").trim();

  const areas = Array.from(new Set(creches.map((c) => c.area))).sort((a, b) =>
    a.localeCompare(b)
  );
  const categories = Array.from(
    new Set(creches.flatMap((c) => c.categories))
  ).sort((a, b) => a.localeCompare(b));

  const filtered = creches.filter((c) => {
    const areaMatch = area ? c.area === area : true;
    const categoryMatch = category ? c.categories.includes(category) : true;

    return areaMatch && categoryMatch;
  });
  const featured = filtered.filter((c) => c.featured);
  const topCategories = categories
    .map((name) => ({
      name,
      count: creches.filter((c) => c.categories.includes(name)).length,
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="page-glow flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:py-14">
        <section className="hero-panel overflow-hidden rounded-[2rem] p-6 sm:p-10">
          <div className="grid gap-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="rise-in inline-flex items-center rounded-full border border-[#efdccd] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6552]">
                Johannesburg, South Africa
              </p>
              <h1 className="rise-in delay-1 mt-4 max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight text-[#2b1f19] sm:text-5xl">
                Discover trusted creches where little learners can thrive.
              </h1>
              <p className="rise-in delay-2 mt-5 max-w-2xl text-base leading-8 text-[#5e4b40] sm:text-lg">
                Browse by age group, curriculum style, or area. Find the right preschool and daycare option in one place.
              </p>

              <form
                action="/"
                method="GET"
                className="rise-in delay-2 mt-8 flex flex-col gap-3 rounded-2xl border border-[#f0decc] bg-white p-4 shadow-[0_14px_30px_rgba(58,34,24,0.08)] sm:flex-row sm:items-end"
              >
                <label className="flex min-w-0 flex-1 flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7f5e4d]">
                    Search by area
                  </span>
                  <select
                    name="area"
                    defaultValue={area}
                    className="h-12 w-full rounded-xl border border-[#ead4c1] bg-[#fffaf5] px-3 text-sm font-medium text-[#32251f] outline-none focus:border-[#e16e3d]"
                  >
                    <option value="">All areas</option>
                    {areas.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex min-w-0 flex-1 flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7f5e4d]">
                    Preschool category
                  </span>
                  <select
                    name="category"
                    defaultValue={category}
                    className="h-12 w-full rounded-xl border border-[#ead4c1] bg-[#fffaf5] px-3 text-sm font-medium text-[#32251f] outline-none focus:border-[#e16e3d]"
                  >
                    <option value="">All programmes</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[#e16e3d] px-6 text-sm font-semibold text-white transition hover:bg-[#bf4f24]"
                >
                  Find creches
                </button>

                {area || category ? (
                  <Link
                    href="/"
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-[#ead4c1] bg-white px-6 text-sm font-semibold text-[#6b4f40] transition hover:bg-[#fff2e7]"
                  >
                    Clear
                  </Link>
                ) : null}
              </form>
            </div>

            <div className="rise-in delay-2 rounded-[1.5rem] border border-[#efdccd] bg-white/85 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f6552]">
                Popular programmes
              </p>
              <div className="mt-4 grid gap-2">
                {topCategories.slice(0, 6).map((item) => (
                  <Link
                    key={item.name}
                    href={`/categories/${toCategorySlug(item.name)}`}
                    className="flex items-center justify-between rounded-xl bg-[#fff5eb] px-4 py-3 text-sm font-semibold text-[#4f3a2f] transition hover:bg-[#ffedd9]"
                  >
                    <span>{item.name}</span>
                    <span className="rounded-full bg-white px-2 py-0.5 text-xs text-[#7d5d4d]">
                      {item.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-7">
          <div className="flex flex-wrap gap-2">
            <Link
              href={area ? `/?area=${encodeURIComponent(area)}` : "/"}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                category
                  ? "border border-[#ead4c1] bg-white text-[#6b4f40] hover:bg-[#fff1e4]"
                  : "bg-[#e16e3d] text-white hover:bg-[#bf4f24]"
              }`}
            >
              All categories
            </Link>
            {categories.map((item) => (
              <Link
                key={item}
                href={`/categories/${toCategorySlug(item)}`}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === item
                    ? "bg-[#e16e3d] text-white hover:bg-[#bf4f24]"
                    : "border border-[#ead4c1] bg-white text-[#6b4f40] hover:bg-[#fff1e4]"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#2b1f19] sm:text-3xl">
                Featured creches
              </h2>
              <p className="mt-1 text-sm text-[#6e5649]">
                High-interest schools parents are viewing this week.
              </p>
            </div>
          </div>

          {featured.length ? (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {featured.map((creche) => (
                <CrecheCard key={creche.id} creche={creche} />
              ))}
            </div>
          ) : (
            <p className="mt-4 rounded-2xl border border-[#efdccd] bg-white/80 px-4 py-4 text-sm font-medium text-[#6e5649]">
              No featured creches match this filter yet.
            </p>
          )}
        </section>

        <section className="mt-12 pb-4">
          <h2 className="text-2xl font-bold tracking-tight text-[#2b1f19] sm:text-3xl">
            {area ? `Creches in ${area}` : "All listed creches"}
          </h2>
          <p className="mt-1 text-sm text-[#6e5649]">
            {category
              ? `Showing results for ${category}.`
              : "Compare areas, facilities, and fees in one scroll."}
          </p>

          {filtered.length ? (
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((creche) => (
                <CrecheCard key={creche.id} creche={creche} />
              ))}
            </div>
          ) : (
            <p className="mt-4 rounded-2xl border border-[#efdccd] bg-white/80 px-4 py-4 text-sm font-medium text-[#6e5649]">
              No creches found for this area/category. Try a different filter.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
