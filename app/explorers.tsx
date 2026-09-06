'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { flushSync } from 'react-dom';
import { Search, Play, ArrowUpRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import videos from './videos.json';
export function VideoLibrary() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(12);
  const [active, setActive] = useState<(typeof videos)[number] | null>(null);
  const categories = [
    'All',
    'Calculus',
    'Algebra',
    'Geometry',
    'Trigonometry',
    'Probability & counting',
    'Vectors',
    'Number theory & proofs',
    'Competition problems',
    'Other explorations',
  ];
  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get('category');
    if (c && videos.some((v) => v.category === c)) {
      const timer = setTimeout(() => setCategory(c), 0);
      return () => clearTimeout(timer);
    }
  }, []);
  const filtered = videos.filter(
    (v) =>
      (category === 'All' || v.category === category) &&
      (v.title + ' ' + v.category)
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  useEffect(() => {
    const ctx = (
      document as Document & {
        modelContext?: {
          registerTool: (
            tool: unknown,
            options: { signal: AbortSignal },
          ) => void | Promise<void>;
        };
      }
    ).modelContext;
    if (!ctx?.registerTool) return;
    const controller = new AbortController();
    try {
      Promise.resolve(
        ctx.registerTool(
          {
            name: 'search_math_videos',
            description:
              'Filter the visible mathematics video library by title.',
            inputSchema: {
              type: 'object',
              properties: { query: { type: 'string' } },
              required: ['query'],
              additionalProperties: false,
            },
            annotations: { readOnlyHint: false, untrustedContentHint: true },
            execute: (input: unknown) => {
              if (
                !input ||
                typeof input !== 'object' ||
                !('query' in input) ||
                typeof input.query !== 'string'
              )
                throw new Error('query must be a string');
              const q = input.query;
              flushSync(() => {
                setQuery(q);
                setCategory('All');
                setLimit(12);
              });
              return videos
                .filter((v) =>
                  (v.title + ' ' + v.category)
                    .toLowerCase()
                    .includes(q.trim().toLowerCase()),
                )
                .map((v) => ({ title: v.title, id: v.id }));
            },
          },
          { signal: controller.signal },
        ),
      ).catch(() => {});
    } catch {}
    return () => controller.abort();
  }, []);
  return (
    <div className="wrap library">
      <div className="library-heading">
        <div>
          <h3>Find your next explanation.</h3>
          <p>
            Browse all {videos.length} available videos. Choose a topic, or
            search for a concept.
          </p>
        </div>
        <label className="search">
          <Search size={18} />
          <input
            aria-label="Search math videos"
            placeholder="Search a concept or topic…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setLimit(12);
            }}
          />
        </label>
      </div>
      <div className="filters" aria-label="Filter by topic">
        {categories.map((c) => (
          <button
            key={c}
            aria-pressed={category === c}
            onClick={() => {
              setCategory(c);
              setLimit(12);
            }}
          >
            {c}{' '}
            <span>
              {c === 'All'
                ? videos.length
                : videos.filter((v) => v.category === c).length}
            </span>
          </button>
        ))}
      </div>
      <div className="video-grid">
        {filtered.slice(0, limit).map((v) => (
          <button
            aria-label={'Watch ' + v.title}
            className="video-card"
            key={v.id}
            onClick={() => setActive(v)}
          >
            <div className="video-thumb">
              <Image
                width={480}
                height={360}
                unoptimized
                loading="lazy"
                src={'https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg'}
                alt=""
              />
              <span>
                <Play size={19} />
              </span>
            </div>
            <div className="video-info">
              <small>{v.category}</small>
              <h4>{v.title}</h4>
            </div>
          </button>
        ))}
      </div>
      <p className="result-count" aria-live="polite">
        {filtered.length === 0
          ? 'No videos match. Try another search or topic.'
          : `${Math.min(limit, filtered.length)} of ${filtered.length} videos`}
      </p>
      {limit < filtered.length && (
        <button className="button more" onClick={() => setLimit(limit + 12)}>
          Show more videos
        </button>
      )}
      <Dialog
        open={!!active}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent className="video-dialog">
          <DialogTitle>{active?.title}</DialogTitle>
          <DialogDescription>
            Mathematics, explained by Benjamin Yazdi.
          </DialogDescription>
          {active && (
            <>
              <iframe
                title={active.title}
                src={
                  'https://www.youtube-nocookie.com/embed/' +
                  active.id +
                  '?autoplay=1'
                }
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              <a
                className="text-link"
                href={'https://www.youtube.com/watch?v=' + active.id}
                target="_blank"
                rel="noreferrer"
              >
                Watch on YouTube <ArrowUpRight size={16} />
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
