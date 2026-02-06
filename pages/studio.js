export default function Studio() {
  return (
    <main style={{ background: "#f7f2e7", minHeight: "100vh", color: "#111" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px" }}>
        <h1 style={{ fontFamily: "Georgia, Times, serif", fontSize: "48px" }}>
          DNA Studio
        </h1>

        <p style={{ fontFamily: "Georgia, Times, serif", fontSize: "18px" }}>
          Book podcast recordings, music sessions, and creative studio time with
          Dopest Natives Alive.
        </p>

        <hr />

        <h3>Services</h3>
        <ul>
          <li>Podcast recording</li>
          <li>Music / vocal recording</li>
          <li>Studio sessions & freestyles</li>
        </ul>

        <h3>Booking</h3>
        <p>Booking is by appointment.</p>

        <div style={{ border: "1px solid #111", padding: "20px" }}>
          Scheduler embed goes here (Calendly or Google).
        </div>
      </div>
    </main>
  );
}
