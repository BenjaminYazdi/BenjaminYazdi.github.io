import Link from 'next/link';
export default function NotFound() {
  return (
    <main className="wrap section">
      <div className="eyebrow">404 / PAGE NOT FOUND</div>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>This page may have moved, or the address may be incomplete.</p>
      <div className="hero-actions">
        <Link className="button primary" href="/">
          Back to Benjamin’s portfolio
        </Link>
        <Link className="text-link" href="/videos/">
          Browse math videos →
        </Link>
      </div>
    </main>
  );
}
