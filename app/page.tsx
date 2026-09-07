import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowDown, ArrowRight, Code2 } from 'lucide-react';
import { KaprekarDemo } from './kaprekar-demo';
const github = 'https://github.com/BenjaminYazdi';
const linkedin = 'https://www.linkedin.com/in/benjamin-yazdi-6219701b2/';
export default function Home() {
  return (
    <>
      <header className="nav wrap" id="top">
        <Link className="wordmark" href="/">
          Benjamin Yazdi<span> / </span>
        </Link>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <Link href="/videos/">Math videos</Link>
        </nav>
        <a className="resume" href="/resume.pdf" target="_blank">
          Résumé <ArrowUpRight size={16} />
        </a>
      </header>
      <main>
        <section className="about-hero wrap" id="about">
          <div className="eyebrow">
            <span className="status-dot" /> OPEN TO SOFTWARE ENGINEERING
            OPPORTUNITIES
          </div>
          <div className="about-opening with-portrait">
            <div className="about-copy">
              <h1>
                Hi, I’m
                <br />
                <em>Benjamin Yazdi.</em>
              </h1>
              <div className="about-story">
                <p className="lead">
                  I like coding, making projects, and turning an interesting
                  question into something people can use.
                </p>
                <p>
                  I’m a computer science student at Touro University. My work
                  spans software engineering, research, and teaching
                  mathematics. I enjoy understanding how things work, thinking
                  through the details, and collaborating with people to make
                  them better.
                </p>
                <p>
                  Three interests connect the things I do:{' '}
                  <strong>data, logic, and human connection.</strong>
                </p>
              </div>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  See what I’m building <ArrowDown size={17} />
                </a>
                <a className="text-link" href="/resume.pdf" target="_blank">
                  Read my résumé <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
            <div className="portrait-frame">
              <Image
                src="/benjamin-yazdi.jpg"
                alt="Benjamin Yazdi wearing a suit and tie"
                width={817}
                height={907}
                priority
                unoptimized
              />
            </div>
          </div>
          <div className="interests">
            <article>
              <span>01 /</span>
              <h2>Data</h2>
              <p>
                Numbers, patterns, and the questions behind them. I enjoy
                exploring data to understand what’s happening and uncover
                something useful.
              </p>
            </article>
            <article>
              <span>02 /</span>
              <h2>Logic</h2>
              <p>
                From a mathematical argument to the rules behind a business
                process, I like breaking problems down and building solutions
                that make sense.
              </p>
            </article>
            <article>
              <span>03 /</span>
              <h2>Human connection</h2>
              <p>
                Talking with people, learning how they think, and sharing ideas.
                I value the collaboration and clear communication that turn
                individual work into something better.
              </p>
            </article>
          </div>
        </section>
        <div className="fact-strip wrap">
          <span>
            <b>CloudResearch</b> Software engineering intern · 2026
          </span>
          <span>
            <b>350+</b> Mathematics videos
          </span>
          <span>
            <b>3.97</b> GPA · Touro University
          </span>
        </div>
        <section className="section wrap" id="work">
          <div className="section-heading">
            <div className="eyebrow">EXPLORE MY WORK</div>
            <h2>
              Things I’ve made.
              <br />
              Ideas I’m exploring.
            </h2>
            <p>
              Software projects, mathematical experiments, and a library of
              explanations.
            </p>
          </div>
          <div className="projects">
            <article className="project">
              <div className="project-visual kaprekar">
                <span className="small-label">MATHEMATICAL EXPLORATION</span>
                <div className="sequence">
                  3087 <ArrowRight /> 8352 <ArrowRight /> <b>6174</b>
                </div>
                <span className="small-label">Order. Subtract. Repeat.</span>
              </div>
              <div className="project-body">
                <div className="project-title">
                  <h3>Kaprekar’s constant</h3>
                  <span>01</span>
                </div>
                <p>
                  What happens when you sort a number’s digits, then subtract?
                  Exploring fixed points and cycles across number bases and
                  digit counts.
                </p>
                <div className="tags">
                  <span>Mathematics</span>
                  <span>Algorithms</span>
                </div>
                <KaprekarDemo />
                <a
                  className="text-link"
                  href={github + '/KaprekarConstant'}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore the code <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
            <article className="project">
              <div className="project-visual shaggy">
                <span className="small-label">AI IMAGE APPLICATION</span>
                <h4>
                  Shaggy<span>Dog.</span>
                </h4>
                <span className="small-label">
                  A different kind of self-portrait.
                </span>
              </div>
              <div className="project-body">
                <div className="project-title">
                  <h3>Shaggy Dog</h3>
                  <span>02</span>
                </div>
                <p>
                  A web app that finds your canine counterpart and transforms a
                  headshot into a dog portrait, with generated transition images
                  along the way.
                </p>
                <div className="tags">
                  <span>Python</span>
                  <span>Generative AI</span>
                  <span>Full stack</span>
                </div>
                <p>
                  Built with user accounts, a database for saved images, and
                  concurrent image generation.
                </p>
                <a
                  className="text-link"
                  href="https://shaggydog-bsl8.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Try Shaggy Dog <ArrowUpRight size={17} />
                </a>
                <small>The demo may take about a minute to wake up.</small>
                <a
                  className="text-link"
                  href={github + '/shaggydog'}
                  target="_blank"
                  rel="noreferrer"
                >
                  View source <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          </div>
        </section>
        <section className="teaching">
          <div className="wrap teaching-layout">
            <div>
              <div className="eyebrow">MATHEMATICS, EXPLAINED</div>
              <h2>
                Math is better
                <br />
                when it clicks.
              </h2>
              <p>
                I’ve created 350+ videos, working through concepts and problems
                one step at a time. Explore the library by topic and watch right
                here.
              </p>
              <Link className="button light" href="/videos/">
                Browse the video library <ArrowRight size={17} />
              </Link>
            </div>
            <div className="teaching-topics">
              <Link href="/videos/?category=Calculus">
                <span>01</span> Calculus <ArrowUpRight />
              </Link>
              <Link href="/videos/?category=Algebra">
                <span>02</span> Algebra <ArrowUpRight />
              </Link>
              <Link href="/videos/?category=Probability%20%26%20counting">
                <span>03</span> Probability & counting <ArrowUpRight />
              </Link>
              <Link href="/videos/">
                <span>↗</span> All topics <ArrowUpRight />
              </Link>
            </div>
          </div>
        </section>
        <section className="section wrap about">
          <div>
            <div className="eyebrow">EXPERIENCE & EDUCATION</div>
            <h2>Learning by doing.</h2>
          </div>
          <div>
            <p className="about-intro">
              At CloudResearch, I worked on the ML Red Team and co-built a
              self-healing optimization harness.
            </p>
            <p>
              At Washington University, I contributed to research on
              computational performance and agent-based simulation. At Touro, I
              co-lead the Coding Club’s data structures and algorithms sessions
              and serve as a student representative.
            </p>
            <p>
              I’m pursuing a B.S. in Computer Science at Touro University, with
              graduation expected in January 2027.
            </p>
            <div className="about-links">
              <a
                className="text-link"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={18} /> GitHub <ArrowUpRight size={15} />
              </a>
              <a
                className="text-link"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>
        <section className="contact wrap" id="contact">
          <div className="eyebrow">LET’S CONNECT</div>
          <h2>Have a conversation.</h2>
          <p>
            I’d love to talk about software engineering opportunities,
            interesting problems, or something you’re building.
          </p>
          <p className="email-text">byazdi13 at gmail.com</p>
          <a
            className="text-link"
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <ArrowUpRight size={16} />
          </a>
        </section>
      </main>
      <footer className="wrap">
        <span>© 2026 Benjamin Yazdi</span>
        <span>Data. Logic. Human connection.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
