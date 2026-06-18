import { creches } from "@/data/creches";

export function toCategorySlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function getAllCategories(): string[] {
  return Array.from(new Set(creches.flatMap((creche) => creche.categories))).sort((a, b) =>
    a.localeCompare(b)
  );
}

export function fromCategorySlug(slug: string): string | null {
  const categories = getAllCategories();
  return categories.find((category) => toCategorySlug(category) === slug) ?? null;
}
