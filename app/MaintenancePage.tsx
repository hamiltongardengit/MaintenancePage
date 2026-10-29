import type { ReactNode } from "react";

const GEAR_PATH =
  "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z";

const MAIL_ICON = (
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </>
);

const HIGHLIGHTS = [
  {
    title: "Back in 24–48 hours",
    text: "We expect to reopen within two days.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    title: "Upgrading for you",
    text: "A faster, smoother booking experience.",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    title: "Team is available",
    text: "Call or email us for bookings and help.",
    icon: (
      <path d="M2.5 5.5c0 8.3 6.7 15 15 15l2.5-3.2-4-2.3-1.8 1.3a10.5 10.5 0 0 1-4.9-4.9l1.3-1.8-2.3-4L2.5 5.5Z" />
    ),
  },
];

const CONTACTS = [
  {
    label: "Call us",
    value: "098103 41979",
    href: "tel:+919810341979",
    icon: HIGHLIGHTS[2].icon,
  },
  {
    label: "General enquiries",
    value: "info@hamiltongardeninnsuites.com",
    href: "mailto:info@hamiltongardeninnsuites.com",
    icon: MAIL_ICON,
  },
  {
    label: "Bookings & support",
    value: "support@hamiltongardeninnsuites.com",
    href: "mailto:support@hamiltongardeninnsuites.com",
    icon: MAIL_ICON,
  },
];


function Icon({
  children,
  className = "h-5 w-5",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}


export default function MaintenancePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-5 py-12 text-slate-800">
      <style>{`
        @keyframes hg-spin { to { transform: rotate(360deg); } }
        @keyframes hg-spin-rev { to { transform: rotate(-360deg); } }
        @keyframes hg-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -24px, 0); }
        }
        @keyframes hg-slide {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(320%); }
        }
        @keyframes hg-rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hg-spin { animation: hg-spin 9s linear infinite; }
        .hg-spin-rev { animation: hg-spin-rev 6s linear infinite; }
        .hg-float { animation: hg-float 9s ease-in-out infinite; }
        .hg-float-slow { animation: hg-float 12s ease-in-out infinite reverse; }
        .hg-slide { animation: hg-slide 1.8s ease-in-out infinite; }
        .hg-rise { animation: hg-rise .7s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .hg-spin, .hg-spin-rev, .hg-float, .hg-float-slow, .hg-slide, .hg-rise {
            animation: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="hg-float absolute -left-32 -top-32 h-80 w-80 rounded-full bg-sky-100 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hg-float-slow absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-100 blur-3xl"
      />

      <section className="relative w-full max-w-2xl rounded-3xl border border-white bg-white/90 p-7 text-center shadow-xl shadow-slate-200/70 backdrop-blur sm:p-12">
        {/* Animated gears */}
        <div
          className="hg-rise relative mx-auto mb-6 h-28 w-32"
          role="img"
          aria-label="Gears turning, website under maintenance"
        >
          <div className="absolute left-0 top-3 flex h-20 w-20 items-center justify-center rounded-full bg-[#17364A] text-white shadow-lg shadow-[#17364A]/30">
            <Icon className="hg-spin h-12 w-12">
              <path d={GEAR_PATH} />
              <circle cx="12" cy="12" r="3" />
            </Icon>
          </div>
          <div className="absolute right-0 top-0 flex h-14 w-14 items-center justify-center rounded-full bg-[#2A6F97] text-white shadow-lg shadow-[#2A6F97]/30">
            <Icon className="hg-spin-rev h-8 w-8">
              <path d={GEAR_PATH} />
              <circle cx="12" cy="12" r="3" />
            </Icon>
          </div>
          <div className="absolute bottom-0 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-white shadow-md shadow-amber-300/50">
            <Icon className="hg-spin h-5 w-5">
              <path d={GEAR_PATH} />
              <circle cx="12" cy="12" r="3" />
            </Icon>
          </div>
        </div>

        <p
          className="hg-rise mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#2A6F97]"
          style={{ animationDelay: "80ms" }}
        >
          Hamilton Garden Inn &amp; Suites
        </p>

        <div
          className="hg-rise mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800"
          style={{ animationDelay: "160ms" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
          </span>
          Website under maintenance
        </div>

        <h1
          className="hg-rise text-3xl font-bold leading-tight text-[#17364A] sm:text-5xl"
          style={{ animationDelay: "240ms" }}
        >
          We’re upgrading our website.
        </h1>

        <p
          className="hg-rise mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg"
          style={{ animationDelay: "320ms" }}
        >
          Our site is currently under maintenance and will be back online in{" "}
          <span className="font-semibold text-[#17364A]">24 to 48 hours</span>.
          We’re sorry for the inconvenience and truly appreciate your patience.
        </p>

        {/* Indeterminate progress bar */}
        <div
          className="hg-rise mx-auto mt-7 max-w-md"
          style={{ animationDelay: "400ms" }}
        >
          <div
            className="relative h-2 overflow-hidden rounded-full bg-slate-100"
            role="progressbar"
            aria-label="Maintenance in progress"
          >
            <div className="hg-slide absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-[#2A6F97] to-[#17364A]" />
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Maintenance in progress
          </p>
        </div>

        {/* Highlights */}
        <ul
          className="hg-rise mt-9 grid gap-3 text-left sm:grid-cols-3"
          style={{ animationDelay: "480ms" }}
        >
          {HIGHLIGHTS.map(({ title, text, icon }) => (
            <li
              key={title}
              className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
            >
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-[#2A6F97]">
                <Icon className="h-[18px] w-[18px]">{icon}</Icon>
              </span>
              <p className="text-sm font-semibold text-[#17364A]">{title}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
            </li>
          ))}
        </ul>

        {/* Contact */}
        <div
          className="hg-rise mt-9 text-left"
          style={{ animationDelay: "560ms" }}
        >
          <h2 className="text-center text-lg font-semibold text-[#17364A]">
            Need help right now?
          </h2>
          <p className="mb-4 mt-1 text-center text-sm text-slate-500">
            Reach our team for bookings, changes or any questions.
          </p>

          <ul className="space-y-3">
            {CONTACTS.map(({ label, value, href, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#2A6F97] hover:bg-sky-50 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6F97] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#17364A] text-white transition-colors group-hover:bg-[#2A6F97]">
                    <Icon>{icon}</Icon>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium text-slate-500">
                      {label}
                    </span>
                    <span className="block break-words text-sm font-semibold text-[#17364A] sm:text-base">
                      {value}
                    </span>
                  </span>
                  <Icon className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-[#2A6F97] motion-reduce:transition-none">
                    <path d="m9 6 6 6-6 6" />
                  </Icon>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-9 border-t border-slate-100 pt-6 text-xs text-slate-500">
          © 2026 Hamilton Garden Inn &amp; Suites
          <p className="mt-2">
            Sorry for the inconvenience. We’ll be back very soon.
          </p>
        </div>
      </section>
    </main>
  );
}