import Head from "next/head"
import Link from "next/link"

export default function Home() {
  const today = new Date().toLocaleDateString("en-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <Head>
        <title>Dopest Natives Alive</title>
      </Head>

      <main className="paper">
        <header className="masthead">
          <div className="meta">
            <span>Vancouver • Independent • Indigenous-led</span>
            <span>{today}</span>
          </div>

          <h1>DOPEST NATIVES ALIVE</h1>

          <div className="sub">
            Arts • Culture • Music • Media — Issue 006
          </div>

          <nav>
            <Link href="/">Front Page</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/submit">Submit</Link>
          </nav>
        </header>

        <section className="grid">
          <aside>
            <h3>The Briefs</h3>
            <ul>
              <li><strong>NEW DROP</strong> — DNA “Dopest” Tee returns</li>
              <li><strong>STUDIO</strong> — 2 guest slots this week</li>
              <li><strong>RADIO</strong> — Rotation updated Friday</li>
            </ul>
          </aside>

          <article>
            <h2>
              DJ Raven’s “Northern Lights” Live Session Makes the Case for What’s Next
            </h2>
            <p>
              A curated platform for Indigenous excellence — not an algorithm,
              not a leaderboard. DNA spotlights culture in motion.
            </p>
          </article>

          <aside>
            <h3>Latest</h3>
            <ul>
              <li>Rich Unk Podcast #42</li>
              <li>Northern Lights Live Take</li>
              <li>Dopest of the Week</li>
            </ul>
          </aside>
        </section>
      </main>

      <style jsx>{`
        .paper {
          max-width: 1100px;
          margin: 40px auto;
          padding: 20px;
          font-family: Georgia, "Times New Roman", serif;
          color: #111;
        }

        .masthead h1 {
          text-align: center;
          font-size: 48px;
          margin: 10px 0;
        }

        .meta {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          text-transform: uppercase;
        }

        .sub {
          text-align: center;
          font-size: 14px;
          margin-bottom: 10px;
        }

        nav {
          display: flex;
          justify-content: center;
          gap: 20px;
          border-top: 2px solid #111;
          border-bottom: 2px solid #111;
          padding: 8px 0;
          font-size: 12px;
          text-transform: uppercase;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          gap: 20px;
          margin-top: 30px;
        }

        h2 {
          font-size: 28px;
        }

        h3 {
          border-bottom: 1px solid #111;
          padding-bottom: 5px;
        }

        ul {
          padding-left: 16px;
        }
      `}</style>
    </>
  )
}
