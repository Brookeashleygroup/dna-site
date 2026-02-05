// app/page.tsx
import React from "react";

export default function Home() {
  const today = new Date().toLocaleDateString("en-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const briefs = [
    { k: "NEW DROP", v: "DNA ‘Dopest’ Tee returns in limited run." },
    { k: "STUDIO", v: "Open sessions: 2 slots this week for guests." },
    { k: "RADIO", v: "DNA Radio rotation updated every Friday." },
    { k: "COMMUNITY", v: "Nominate the next ‘Dopest’ feature." },
  ];

  const latest = [
    { title: "Rich Unk Podcast #42 — Kiona", tag: "Podcast", meta: "64 min" },
    { title: "Session: ‘Northern Lights’ Live Take", tag: "Session", meta: "2:18" },
    { title: "Spotlight: DJ Raven — Producer Profile", tag: "Feature", meta: "Read" },
    { title: "Clip: Cypher Moment — ‘North Star’", tag: "Clip", meta: "0:58" },
  ];

  const sections = [
    {
      section: "MUSIC",
      items: [
        {
          h: "Five tracks moving right now",
          d: "A weekly edit — not algorithmic. Indigenous sounds across genres.",
        },
        {
          h: "Producer desk: how the drums hit",
          d: "Breakdowns from the studio, with stems and stories.",
        },
      ],
    },
    {
      section: "CULTURE",
      items: [
        {
          h: "Behind the name: what ‘Dopest’ means",
          d: "It’s not a contest. It’s a spotlight — earned, curated, respected.",
        },
        {
          h: "On the ground: community builders",
          d: "Art, language, healing, and the people doing the work.",
        },
      ],
    },
    {
      section: "DROPS",
      items: [
        { h: "Episode-tied collab tees", d: "Limited runs tied to specific guests." },
        { h: "DNA core pieces", d: "Staples that never go out of season." },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f2e7] text-[#111]">
      {/* Page frame */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Masthead */}
        <header className="border-b-4 border-[#111] pb-3">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div className="text-xs tracking-widest uppercase">
              Vancouver • Independent • Indigenous-led
            </div>
            <div className="text-xs tracking-widest uppercase">{today}</div>
          </div>

          {/* ORIGINAL SERIF MASTHEAD (no Old English) */}
          <h1
            className="mt-2 text-center font-extrabold tracking-tight leading-none
                       text-4xl sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "ui-serif, Georgia, 'Times New Roman', Times, serif",
            }}
          >
            DOPEST NATIVES ALIVE
          </h1>

          {/* Newspaper rules */}
          <div className="mt-2 border-t-2 border-b border-[#111] h-2" />

          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="uppercase tracking-widest">Arts • Culture • Music • Media</div>
            <div className="uppercase tracking-widest">Issue 006 • “The Dopest Edition”</div>
          </div>
        </header>

        {/* Top nav like a newspaper section bar */}
        <nav className="border-b border-[#111] py-2 text-xs uppercase tracking-widest">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {["Front Page", "Dopest", "Music", "Culture", "Podcast", "Sessions", "Drops", "Radio", "Submit"].map(
              (x) => (
                <a key={x} href="#" className="hover:underline">
                  {x}
                </a>
              )
            )}
          </div>
        </nav>

        {/* Grid */}
        <section className="mt-5 grid gap-6 md:grid-cols-12">
          {/* LEFT COLUMN — Briefs */}
          <aside className="md:col-span-3">
            <div className="border border-[#111] bg-[#fffaf0]">
              <div className="border-b border-[#111] px-3 py-2 text-xs font-bold uppercase tracking-widest">
                The Briefs
              </div>
              <ul className="divide-y divide-[#111]">
                {briefs.map((b) => (
                  <li key={b.k} className="px-3 py-3">
                    <div className="text-[11px] font-bold uppercase tracking-widest">{b.k}</div>
                    <div
                      className="mt-1 text-sm leading-snug"
                      style={{ fontFamily: "ui-serif, Georgia, Times, serif" }}
                    >
                      {b.v}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 border-t border-[#111] pt-4">
              <div className="text-xs font-bold uppercase tracking-widest">Ticker</div>
              <div className="mt-2 border border-[#111] bg-[#fffaf0] p-3 text-sm leading-snug">
                <div className="font-semibold">Now:</div>
                <div style={{ fontFamily: "ui-serif, Georgia, Times, serif" }}>
                  “Dopest of the Week” session posted • New podcast clip • Drop live
                </div>
              </div>
            </div>
          </aside>

          {/* CENTER — Lead story */}
          <article className="md:col-span-6">
            <div className="border-b border-[#111] pb-4">
              <div className="text-[11px] font-bold uppercase tracking-widest">
                Front Page • Dopest of the Week
              </div>

              <h2
                className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight"
                style={{ fontFamily: "ui-serif, Georgia, 'Times New Roman', Times, serif" }}
              >
                DJ Raven’s “Northern Lights” Live Session Makes the Case for What’s Next
              </h2>

              <p
                className="mt-2 text-base leading-relaxed"
                style={{ fontFamily: "ui-serif, Georgia, Times, serif" }}
              >
                A curated platform for Indigenous excellence — not a leaderboard, not an algorithm. DNA spotlights the
                voices moving culture right now, across all genres.
              </p>

              <div className="mt-4 aspect-video border border-[#111] bg-[#111]/5 grid place-items-center">
                <div className="text-xs uppercase tracking-widest">Featured video embed</div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button className="border border-[#111] bg-[#111] text-[#f7f2e7] px-4 py-2 text-sm font-semibold hover:opacity-90">
                  Watch the Session
                </button>
                <button className="border border-[#111] bg-[#fffaf0] px-4 py-2 text-sm font-semibold hover:bg-[#f3ead9]">
                  Read the Feature
                </button>
              </div>
            </div>

            {/* Two-column “below the fold” like a newspaper */}
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {sections.map((s) => (
                <div key={s.section} className="border-t border-[#111] pt-3">
                  <div className="text-xs font-bold uppercase tracking-widest">{s.section}</div>
                  <ul className="mt-2 space-y-3">
                    {s.items.map((it) => (
                      <li key={it.h}>
                        <div className="font-bold leading-snug" style={{ fontFamily: "ui-serif, Georgia, Times, serif" }}>
                          {it.h}
                        </div>
                        <div className="text-sm leading-snug" style={{ fontFamily: "ui-serif, Georgia, Times, serif" }}>
                          {it.d}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          {/* RIGHT COLUMN — Latest + Drops */}
          <aside className="md:col-span-3">
            <div className="border border-[#111] bg-[#fffaf0]">
              <div className="border-b border-[#111] px-3 py-2 text-xs font-bold uppercase tracking-widest">
                Latest
              </div>
              <ul className="divide-y divide-[#111]">
                {latest.map((x) => (
                  <li key={x.title} className="px-3 py-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-[11px] font-bold uppercase tracking-widest">{x.tag}</div>
                      <div className="text-[11px] uppercase tracking-widest">{x.meta}</div>
                    </div>
                    <div className="mt-1 text-sm leading-snug" style={{ fontFamily: "ui-serif, Georgia, Times, serif" }}>
                      {x.title}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 border border-[#111] bg-[#fffaf0]">
              <div className="border-b border-[#111] px-3 py-2 text-xs font-bold uppercase tracking-widest">
                Drops
              </div>
              <div className="p-3">
                <div className="text-sm font-bold" style={{ fontFamily: "ui-serif, Georgia, Times, serif" }}>
                  Episode #42 Collab Tee
                </div>
                <div className="text-xs uppercase tracking-widest mt-1">Limited • DTF • Ships in 3–7 days</div>
                <button className="mt-3 w-full border border-[#111] bg-[#111] text-[#f7f2e7] px-4 py-2 text-sm font-semibold hover:opacity-90">
                  Shop the Drop
                </button>
              </div>
            </div>

            <div className="mt-4 border-t border-[#111] pt-4">
              <div className="text-xs font-bold uppercase tracking-widest">DNA Radio</div>
              <div className="mt-2 border border-[#111] bg-[#fffaf0] p-3 text-sm">
                <div className="text-[11px] uppercase tracking-widest">Now Playing</div>
                <div className="mt-1 font-semibold" style={{ fontFamily: "ui-serif, Georgia, Times, serif" }}>
                  “Dopest Right Now” — live rotation
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="border border-[#111] px-3 py-2 text-sm font-semibold hover:bg-[#f3ead9]">
                    Play
                  </button>
                  <button className="border border-[#111] px-3 py-2 text-sm font-semibold hover:bg-[#f3ead9]">
                    Queue
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t-4 border-[#111] pt-4 text-xs uppercase tracking-widest flex flex-wrap justify-between gap-2">
          <div>© {new Date().getFullYear()} Dopest Natives Alive</div>
          <div>Editorial • Podcast • Sessions • Drops</div>
        </footer>
      </div>
    </main>
  );
}
