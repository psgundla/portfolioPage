import { useState, useEffect } from 'react';
import styles from './styles/App.module.css';
import Masthead from './components/Masthead';
import Abstract from './components/Abstract';
import Discussion from './components/Discussion';
import Results from './components/Results';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('cv-theme') || 'system';
    } catch {
      return 'system';
    }
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    try {
      localStorage.setItem('cv-theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>

      <div className={styles.bar}>
        <span className={styles.id}>
          arXiv:<b>2607.17</b>&nbsp;[cs.CV]&nbsp;·&nbsp;cv.v3
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            className={styles.hamburgerBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
          <nav aria-label="Sections" className={styles.navMenu}>
            <a href="#abstract">Abstract</a>
            <a href="#intro">Intro</a>
            <a href="#experience">Experience</a>
            <a href="#references">Refs</a>
            <a href="#contact">Contact</a>
            <button className={styles.theme} onClick={toggleTheme} aria-label="Toggle color theme">
              ◑ theme
            </button>
          </nav>
          <button
            className={styles.themeMobile}
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            ◑
          </button>
        </div>
        {menuOpen && (
          <nav className={styles.mobileMenu}>
            <a href="#abstract" onClick={() => setMenuOpen(false)}>Abstract</a>
            <a href="#intro" onClick={() => setMenuOpen(false)}>Intro</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#references" onClick={() => setMenuOpen(false)}>Refs</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </div>

      <main id="main" className={styles.wrap}>
        <Masthead />

        <div className={styles.cols}>
          <Abstract />

          {/* LEFT COLUMN */}
          <div className={styles.col}>
            <section id="intro">
              <h2 className={styles.head}>
                <span className={styles.no}>1</span> Introduction
              </h2>
              <p className={styles.dropcap}>
                A research career rarely begins where it lands. Mine started with a wide-base bachelor's in mathematics,
                electronics and computer science — the discipline of reasoning from first principles, and the habit of
                debugging circuits and code with equal patience. It moved into biology, then into machine learning, then into
                the specific problem of teaching a model to see what a pathologist sees and infer what a sequencer would report.
              </p>
              <p>
                The thread across every stop has been the same: build interpretable, scalable systems that survive contact with
                messy real data and cross the boundary between institutions. What began as tutoring and Arduino workshops is now
                vision transformers on HPCs — but the goal, "to make the world a slightly better place in the slow accumulation
                of small things," has not moved.
              </p>
            </section>

            <section id="methods">
              <h2 className={styles.head}>
                <span className={styles.no}>2</span> Approach &amp; Contributions
              </h2>
              <p className={styles.small}>
                Patches → features → attention → explainability. The contribution is not a single model but a <i>reproducible</i>{' '}
                one: weakly-supervised MIL that needs only slide-level labels, attention heatmaps that a pathologist can audit,
                and containerised pipelines (Docker / Apptainer, Snakemake) that move from one cohort — and one institution — to
                the next without silent failure.
              </p>
            </section>

            <section id="education">
              <h2 className={styles.head}>
                <span className={styles.no}>3</span> Education
              </h2>

              <div className={styles.entry}>
                <div className={styles.row}>
                  <h3>PhD — AI in Medicine</h3>
                  <span className={styles.when}>2023 — present</span>
                </div>
                <div className={styles.org}>
                  Kocakavuk Lab, IKIM · Westdeutsches Tumorzentrum, University Hospital Essen · Univ. of Duisburg-Essen, DE
                </div>
                <p>
                  Genotype-to-phenotype in adult diffuse gliomas (<i>IDH</i>, 1p/19q, <i>CDKN2A</i>). Weakly-supervised MIL,
                  vision transformers, attention heatmaps, cross-cohort validation on HPC. Part of the CANTAR research network.
                </p>
              </div>

              <div className={styles.entry}>
                <div className={styles.row}>
                  <h3>MSc — Healthy Living Technologies</h3>
                  <span className={styles.when}>2019 — 2020</span>
                </div>
                <div className={styles.org}>Université Grenoble Alpes, FR</div>
                <p>
                  M2 thesis: <i>Initiation of a lung adenocarcinoma cartography around TP53 activity</i> (IAB, Dr. Cyril
                  Boyault). IDEX &amp; UGA Foundation scholarship. 1st place, Hackathon — Congrès National des Pharmaciens,
                  Bordeaux.
                </p>
              </div>

              <div className={styles.entry}>
                <div className={styles.row}>
                  <h3>MSc — Bioinformatics</h3>
                  <span className={styles.when}>2018 — 2019</span>
                </div>
                <div className={styles.org}>Manipal Academy of Higher Education, IN</div>
                <p>NGS, sequence alignments, phylogenetics, functional genomics — bioinformatics proper, against the sound of the Arabian Sea.</p>
              </div>

              <div className={styles.entry}>
                <div className={styles.row}>
                  <h3>BSc — Mathematics, Electronics &amp; CS</h3>
                  <span className={styles.when}>2015 — 2018</span>
                </div>
                <div className={styles.org}>Osmania University · Hyderabad, IN</div>
                <p>First principles across three disciplines. Tutored matriculation students; ran a two-week Arduino / IoT workshop for ~40 participants.</p>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.col}>
            <section id="experience">
              <h2 className={styles.head}>
                <span className={styles.no}>4</span> Research &amp; Industry Experience
              </h2>

              <div className={styles.entry}>
                <div className={styles.row}>
                  <h3>Bioinformatics Analyst</h3>
                  <span className={styles.when}>USA</span>
                </div>
                <div className={styles.org}>Mbiomics LLC</div>
                <p>Biomarker identification in esophageal squamous-cell carcinoma (ESCC). Two peer-reviewed publications.</p>
              </div>

              <div className={styles.entry}>
                <div className={styles.row}>
                  <h3>Associate Bioinformatician</h3>
                  <span className={styles.when}>Paris, FR</span>
                </div>
                <div className={styles.org}>Plantik Biosciences</div>
                <p>Cloud architecture for plant breeding — GCP / AWS pipelines in Python &amp; R.</p>
              </div>

              <div className={styles.entry}>
                <div className={styles.row}>
                  <h3>Selected results</h3>
                  <span className={styles.when}>—</span>
                </div>
                <div className={styles.org}>Highlights across the work</div>
                <ul>
                  <li>ViT-based model for genetic-subtype prediction in diffuse gliomas (ESMO AI, 278P).</li>
                  <li>Divergent molecular evolution in IDH-mutant gliomas (medRxiv, 2025).</li>
                  <li>Population-specific transcriptomes in ESCC (Infectious Agents &amp; Cancer, 2023).</li>
                  <li>Downregulation of Desmoglein 1 in ESCC (Cancer Biomarkers, 2023).</li>
                </ul>
              </div>
            </section>

            <section id="awards">
              <h2 className={styles.head}>
                <span className={styles.no}>A</span> Awards &amp; Honours
              </h2>
              <div className={styles.entry}>
                <div className={styles.row}>
                  <h3>ESMO Merit Award</h3>
                  <span className={styles.when}>2025</span>
                </div>
                <div className={styles.org}>1st ESMO AI Congress (ESMO AI 2025)</div>
                <p>
                  For the poster <i>Genetic subtype prediction in diffuse gliomas using a vision-transformer-based model</i> (FPN
                  278P) — foundation models and attention-based MIL decoding molecular subtype from H&amp;E whole-slide images.
                  Mentors: Emre Kocakavuk, Christian Reinhardt.
                </p>
              </div>
              <div className={styles.entry}>
                <div className={styles.row}>
                  <h3>1st place — Hackathon</h3>
                  <span className={styles.when}>2020</span>
                </div>
                <div className={styles.org}>Congrès National des Pharmaciens, Bordeaux</div>
              </div>
              <div className={styles.entry}>
                <div className={styles.row}>
                  <h3>IDEX &amp; UGA Foundation Scholarship</h3>
                  <span className={styles.when}>2019</span>
                </div>
                <div className={styles.org}>Université Grenoble Alpes · M2 programme</div>
              </div>
            </section>

            <section id="results">
              <h2 className={styles.head}>
                <span className={styles.no}>5</span> By the Numbers
              </h2>
              <div className={styles.metrics} role="group" aria-label="Key metrics">
                <div className={styles.m}>
                  <div className={styles.v}>5K+</div>
                  <div className={styles.k}>WSIs trained</div>
                </div>
                <div className={styles.m}>
                  <div className={styles.v}>5</div>
                  <div className={styles.k}>Publications</div>
                </div>
                <div className={styles.m}>
                  <div className={styles.v}>4</div>
                  <div className={styles.k}>Countries</div>
                </div>
                <div className={styles.m}>
                  <div className={styles.v}>8+</div>
                  <div className={styles.k}>Years coding</div>
                </div>
              </div>
            </section>

            <section id="skills">
              <h2 className={styles.head}>
                <span className={styles.no}>6</span> Methods &amp; Materials
              </h2>
              <dl className={styles.kv}>
                <dt>Vision / ML</dt>
                <dd>PyTorch · TensorFlow · Vision Transformers · foundation models · MIL · scikit-learn</dd>
                <dt>OMICS</dt>
                <dd>multimodal OMICS · cancer ecotypes · transcriptomics</dd>
                <dt>Languages</dt>
                <dd>Python · R · Julia · Bash · JS / TS</dd>
                <dt>Imaging</dt>
                <dd>OpenSlide · QuPath · H&amp;E patching · WSI</dd>
                <dt>Data</dt>
                <dd>NumPy · pandas · NGS · multi-omics</dd>
                <dt>Cloud</dt>
                <dd>GCP · AWS · Azure</dd>
                <dt>Infra</dt>
                <dd>SLURM HPC · Docker · Apptainer · Snakemake</dd>
                <dt>Viz</dt>
                <dd>R Shiny · D3 · Plotly</dd>
              </dl>
              <div className={styles.tags} aria-hidden="true">
                <span className={styles.tag}>interpretable-AI</span>
                <span className={styles.tag}>reproducibility</span>
                <span className={styles.tag}>cross-cohort</span>
                <span className={styles.tag}>weakly-supervised</span>
              </div>
            </section>
          </div>
        </div>

        {/* DISCUSSION & RESULTS in 2-column layout */}
        <div className={styles.cols} style={{ gridColumn: '1 / -1' }}>
          <div className={styles.col}>
            <Discussion />
          </div>
          <div className={styles.col}>
            <Results />
          </div>
        </div>

        {/* REFERENCES full width */}
        <section id="references" className={styles.wrap} style={{ padding: 0 }}>
          <h2 className={styles.head}>
            <span className={styles.no}>7</span> References — Selected Publications
          </h2>
          <div className={styles.refs}>
            <div className={styles.ref}>
              <div className={styles.cite}>
                <b>Gundla, P.S.</b> et al. Genetic subtype prediction in diffuse gliomas using a vision-transformer-based model.{' '}
                <span className={styles.venue}>1st ESMO AI Congress</span>, poster FPN 278P — <b>ESMO Merit Award</b>,{' '}
                <span className={styles.yr}>2025</span>.
              </div>
            </div>
            <div className={styles.ref}>
              <div className={styles.cite}>
                Tumor-initiating genetics and therapy drive divergent molecular evolution in IDH-mutant gliomas.{' '}
                <span className={styles.venue}>medRxiv</span> preprint, <span className={styles.yr}>2025</span>.
              </div>
            </div>
            <div className={styles.ref}>
              <div className={styles.cite}>
                Real-World Data and Digital Oncology — ESMO AI Conference Abstract.{' '}
                <span className={styles.venue}>ESMO RWD</span>, DOI 10.1016/j.esmorw.2025.100474,{' '}
                <span className={styles.yr}>2025</span>.
              </div>
            </div>
            <div className={styles.ref}>
              <div className={styles.cite}>
                Global comparative transcriptomes uncover novel and population-specific gene expression in ESCC.{' '}
                <span className={styles.venue}>Infectious Agents &amp; Cancer</span>, <span className={styles.yr}>2023</span>.
              </div>
            </div>
            <div className={styles.ref}>
              <div className={styles.cite}>
                A comprehensive analysis of mRNA expression profiles of ESCC reveals downregulation of Desmoglein 1.{' '}
                <span className={styles.venue}>Cancer Biomarkers</span>, <span className={styles.yr}>2023</span>.
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}

export default App;
