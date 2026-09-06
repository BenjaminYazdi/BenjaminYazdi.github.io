export const dynamic = 'force-static';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { VideoLibrary } from '../explorers';
import videos from '../videos.json';
export const metadata: Metadata = {
  title: 'Math Video Library | Benjamin Yazdi',
  description:
    'Browse Benjamin Yazdi’s mathematics lessons by topic, search for a concept, and watch videos here.',
};
export default function Videos() {
  return (
    <>
      <header className="nav wrap">
        <Link className="wordmark" href="/">
          Benjamin Yazdi<span> / </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#about">About</Link>
          <Link href="/#work">Projects</Link>
          <Link href="/videos/" aria-current="page">
            Math videos
          </Link>
        </nav>
      </header>
      <main>
        <section className="wrap video-page-intro">
          <Link className="text-link" href="/">
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
          <div className="eyebrow">THE MATHEMATICS LIBRARY</div>
          <h1>
            Let’s work
            <br />
            <em>through it.</em>
          </h1>
          <p>
            {videos.length} videos on mathematics. Find a topic, follow the
            reasoning, and watch without leaving this page.
          </p>
        </section>
        <VideoLibrary />
      </main>
      <footer className="wrap">
        <span>© 2026 Benjamin Yazdi</span>
        <Link href="/#contact">
          Get in touch <ArrowUpRight size={14} />
        </Link>
      </footer>
    </>
  );
}
