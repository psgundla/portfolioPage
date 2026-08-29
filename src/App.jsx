import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './styles/Portfolio.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const asset = (name) => `/portfolio/${name}`;

const projects = [
  {
    title: 'Glioma AI',
    description: 'Predicting molecular subtype from H&E whole-slide images.',
    image: 'project_glioma.png',
    alt: 'Glioma tissue with an interpretable model attention map',
    className: 'work-card--feature',
  },
  {
    title: 'Spatial biology',
    description: 'Connecting morphology with cellular and molecular context.',
    image: 'project_spatial.png',
    alt: 'Spatial cell map aligned with tissue morphology',
    className: 'work-card--compact',
  },
  {
    title: 'Reproducible research',
    description: 'Pipelines built to move across cohorts and institutions.',
    image: 'project_registration.png',
    alt: 'Reproducible computational research workflow',
    className: 'work-card--compact',
  },
];

const interests = [
  ['life_travel.png', 'Travel', 'Mountain lake landscape'],
  ['life_photo.png', 'Photography', 'Camera used for documentary photography'],
  ['life_music.png', 'Music', 'Headphones for focused listening'],
  ['life_reading.png', 'Reading', 'Books stacked near a window'],
  ['life_running.png', 'Running', 'Forest path used for running'],
  ['life_open.png', 'Open source', 'Code on a laptop screen'],
];

const getInitialTheme = () => {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  } catch {
    // Storage may be unavailable in privacy modes.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#11100f' : '#f7f6f2',
    );
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Theme remains active for current visit.
    }
  }, [theme]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeMenu = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeMenu);
    return () => document.removeEventListener('keydown', closeMenu);
  }, [menuOpen]);

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const media = gsap.matchMedia();

    gsap.from('.hero-copy > *', {
      y: 22,
      autoAlpha: 0,
      duration: 0.85,
      stagger: 0.09,
      ease: 'power3.out',
    });

    gsap.from('.hero-media', {
      scale: 0.94,
      autoAlpha: 0,
      duration: 1.1,
      ease: 'power3.out',
    });

    gsap.utils.toArray('.reveal').forEach((element) => {
      gsap.from(element, {
        y: 18,
        autoAlpha: 0,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          once: true,
        },
      });
    });

    gsap.utils.toArray('.motion-image').forEach((image) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.7,
        },
      })
        .fromTo(image, { scale: 0.9, autoAlpha: 0.5 }, { scale: 1, autoAlpha: 1, duration: 0.46, ease: 'none' })
        .to(image, { autoAlpha: 0.35, duration: 0.54, ease: 'none' });
    });

    media.add('(min-width: 981px)', () => {
      ScrollTrigger.create({
        trigger: '.work-layout',
        start: 'top 104px',
        end: 'bottom bottom-=96',
        pin: '.work-intro',
        pinSpacing: false,
      });
    });

    return () => media.revert();
  }, { scope: pageRef });

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={pageRef} className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#main" aria-label="Pranav Swaroop Gundla, home" onClick={closeMenu}>
          <span className="monogram"><span>P</span><span>S</span><span>G</span></span>
          <span className="brand-name">Pranav Swaroop Gundla</span>
        </a>

        <nav id="primary-navigation" className={menuOpen ? 'site-nav site-nav--open' : 'site-nav'} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#life" onClick={closeMenu}>Life</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="role">PhD researcher · AI in medicine · Essen</p>
            <h1 id="hero-title"><span>I teach machines to</span>{' '}<span>read cancer from tissue.</span></h1>
            <p className="hero-summary">Computational pathology, spatial biology, and interpretable AI.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">View work</a>
              <a className="button button--secondary" href="/CV-Pranav-Swaroop-Gundla.pdf" target="_blank" rel="noreferrer">Download CV</a>
            </div>
          </div>

          <figure className="hero-media">
            <img src={asset('hero_histology.png')} alt="Monochrome illustration of a histology tissue section" />
            <figcaption>Illustrative interface · not clinical data</figcaption>
          </figure>
        </section>

        <section id="work" className="chapter work-section" aria-labelledby="work-title">
          <div className="work-layout">
            <div className="work-intro reveal">
              <p className="section-kicker">Selected work</p>
              <h2 id="work-title">Tissue to evidence.</h2>
            </div>

            <div className="work-grid">
              {projects.map((project) => (
                <article className={`work-card ${project.className} reveal`} key={project.title}>
                  <div className="work-image-wrap">
                    <img className="motion-image" src={asset(project.image)} alt={project.alt} />
                  </div>
                  <div className="work-card-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <dl className="proof reveal" aria-label="Research highlights">
            <div><dt>5K+</dt><dd>whole-slide images</dd></div>
            <div><dt>5</dt><dd>publications</dd></div>
            <div><dt>ESMO</dt><dd>Merit Award</dd></div>
          </dl>
        </section>

        <section id="about" className="chapter about" aria-labelledby="about-title">
          <p className="section-kicker">About</p>
          <div className="about-grid reveal">
            <h2 id="about-title">
              From mathematics to{' '}
              <span className="inline-sample" role="img" aria-label="histology sample" />{' '}
              bioinformatics, cancer biology, and AI in medicine.
            </h2>
            <div className="about-details">
              <p>I build models that connect tissue morphology with molecular and spatial context.</p>
              <p className="methods">Python · PyTorch · R · Docker · HPC · Snakemake</p>
            </div>
          </div>
        </section>

        <section id="life" className="chapter life" aria-labelledby="life-title">
          <div className="life-heading reveal">
            <div>
              <p className="section-kicker">Outside research</p>
              <h2 id="life-title">What keeps me curious.</h2>
            </div>
            <p>Travel, images, sound, books, movement, and useful code.</p>
          </div>

          <div className="life-gallery" role="list">
            {interests.map(([image, title, alt], index) => (
              <figure className="life-item reveal" role="listitem" key={title} style={{ '--item-index': index }}>
                <div className="life-image-wrap">
                  <img className="motion-image" src={asset(image)} alt={alt} />
                </div>
                <figcaption>{title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="chapter contact" aria-labelledby="contact-title">
          <div className="contact-copy reveal">
            <p className="section-kicker">Contact</p>
            <h2 id="contact-title">Interested in careful AI for cancer research?</h2>
            <a className="contact-email" href="mailto:contact@psgundla.com">
              contact@psgundla.com
              <Arrow />
            </a>
          </div>

          <nav className="contact-links reveal" aria-label="External profiles">
            <a href="https://linkedin.com/in/pranavswaroopgundla/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://scholar.google.com/citations?user=UzlYsbgAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar <Arrow /></a>
            <a href="https://github.com/psgundla" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://researchgate.net/profile/Pranav-Swaroop-Gundla" target="_blank" rel="noreferrer">ResearchGate <Arrow /></a>
          </nav>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Pranav Swaroop Gundla</span>
        <span>Computational oncology · Essen</span>
        <a href="#main">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
