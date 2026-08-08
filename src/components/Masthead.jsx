import styles from '../styles/App.module.css';

export default function Masthead() {
  return (
    <header className={styles.masthead}>
      <p className={styles.arxivTag}>
        <span>arXiv:2607.17091v3</span>
        <span className={styles.cls}>cs.CV · q-bio.QM</span>
        <span>Submitted 17 Jul 2026</span>
      </p>
      <div className={styles.mastheadGrid}>
        <div>
          <h1 className={styles.title}>
            Reading Cancer from the Slide: Vision AI, Biology, and the Path to the Clinic
          </h1>
          <p className={styles.byline}>
            <span className={styles.me}>Pranav Swaroop Gundla</span>
            <sup>1,2</sup>
          </p>
          <p className={styles.affil}>
            <span className={styles.n}>1</span>
            Department of Hematology and Stem Cell Transplantation, West German Cancer Center, NCT-West, University Hospital Essen, Essen, GER
            <br />
            <span className={styles.n}>2</span>
            Institute for Artificial Intelligence in Medicine (IKIM), University Hospital Essen, Essen, GER
          </p>
        </div>

        <aside className={styles.mastCard}>
          <div className={styles.mastProfile}>
            <img
              className={styles.avatar}
              src="/MyAvatar.png"
              width="64"
              height="64"
              alt="Portrait of Pranav Swaroop Gundla"
              loading="lazy"
            />
            <div>
              <p className={styles.avatarName}>Pranav Swaroop Gundla</p>
              <p className={styles.avatarRole}>PhD Researcher · AI in Medicine</p>
            </div>
          </div>

          <p className={styles.cardHead}>Correspondence &amp; Links</p>
          <ul>
            <li>✉ <a href="mailto:contact@psgundla.com">contact@psgundla.com</a></li>
            <li>📚 <a href="https://scholar.google.com/citations?user=UzlYsbgAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a></li>
            <li>🔗 <a href="https://linkedin.com/in/pranavswaroopgundla/" target="_blank" rel="noopener">LinkedIn</a></li>
            <li>𝕏 <a href="https://x.com/im_pranavgundla" target="_blank" rel="noopener">X (Twitter)</a></li>
            <li>💻 <a href="https://github.com/psgundla" target="_blank" rel="noopener">GitHub</a></li>
            <li>📄 <a href="/CV-Pranav-Swaroop-Gundla.pdf" target="_blank" rel="noopener">Download CV (PDF)</a></li>
          </ul>
          <p className={styles.note}>
            PhD researcher in AI for medicine · Essen, GER. Seeking postdoc collaborations in vision + spatial omics.
          </p>
        </aside>
      </div>
    </header>
  );
}
