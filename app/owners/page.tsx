export default function OwnersPage() {
  return (
    <div className="flex flex-1 flex-col bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
            List your futsal court
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Reach thousands of players looking for courts in Johannesburg.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "More bookings",
              "More visibility",
              "Mobile-friendly listing",
              "Enquiry management",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm font-medium text-zinc-800"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@futsalfinder.co.za?subject=List%20my%20court%20on%20Futsal%20Finder"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-medium text-white transition hover:bg-emerald-700"
            >
              Contact us
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "Hi! I want to list my futsal court on Futsal Finder."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-medium text-emerald-800 transition hover:bg-emerald-50"
            >
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
