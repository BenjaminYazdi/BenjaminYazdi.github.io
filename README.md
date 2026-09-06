# Benjamin Yazdi — portfolio

A static portfolio for benjaminyazdi.com. React, TypeScript and Vinext; no server, database or paid API required for the portfolio.

## Development

- `npm ci`
- `npm run dev`
- `npm run build` exports the site for static hosting. The current Vinext export is in `dist/client/`.

## Content

- `app/page.tsx`: biography, project descriptions, links and homepage.
- `app/videos.json`: 343 publicly visible real YouTube videos with editable categories. Append entries with `id`, `title`, and `category` to extend the library.
- `app/explorers.tsx`: video search, category filters, and embedded playback.
- `app/kaprekar-demo.tsx`: interactive four-digit Kaprekar example.
- `scripts/prepare-static.mjs`: verifies both pages were exported and adds a directory index for the library.
- `app/globals.css`: responsive design.
- `public/resume.pdf`: supplied September 2026 résumé. It contains the previous GitHub username; the site links to BenjaminYazdi.

The biography comes from the supplied résumé. Project descriptions were checked against the KaprekarConstant and shaggydog READMEs. LinkedIn could not be read. The website distinguishes the 350+ channel collection from the 343 videos imported into V1. Categories are based on titles and a review of ambiguous thumbnails; unclear lessons remain in Other explorations. Vor Finder can be added as a new project when ready; Mathematymar is intentionally omitted.

Shaggy Dog is hosted separately on Render and requires a backend. The portfolio does not.

## GitHub Pages

The included GitHub Actions workflow builds and deploys `dist/client/` when manually triggered. The draft repository is private; GitHub Free requires making it public before enabling Pages. In repository Settings → Pages, choose GitHub Actions. Set the custom domain to `benjaminyazdi.com` only when DNS is ready, and enable HTTPS. Domain records are not changed by this project.

## Validation

The production build exports both routes with no skipped pages. All 343 YouTube IDs are unique and their oEmbed endpoints returned valid embed information. Authored application files pass the JavaScript/accessibility lint check. The scaffold’s full lint has pre-existing findings in unused UI components; the separate TypeScript check was still pending at the time of the initial preview.

The four-digit Kaprekar routine was checked against all 9,990 valid inputs. A browser supporting the optional WebMCP interface may filter the library through `search_math_videos`; a supported validation context was unavailable, so that optional interface has not been runtime-verified.
