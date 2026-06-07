export default function OwnersPage() {
  return (
    <div className="page-glow flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        <section className="hero-panel rounded-3xl p-10">
          <h1 className="text-4xl font-bold tracking-tight text-[#2b1f19]">
            List your futsal court
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#5e4b40]">
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
                className="rounded-2xl border border-[#efdccd] bg-[#fff8ef] p-5 text-sm font-semibold text-[#564237]"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@futsalfinder.co.za?subject=List%20my%20court%20on%20Futsal%20Finder"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-[#e16e3d] px-5 text-sm font-semibold text-white transition hover:bg-[#bf4f24]"
            >
              Contact us
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "Hi! I want to list my futsal court on Futsal Finder."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-[#cde5db] bg-[#effaf5] px-5 text-sm font-semibold text-[#1f7664] transition hover:bg-[#dff4eb]"
            >
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
