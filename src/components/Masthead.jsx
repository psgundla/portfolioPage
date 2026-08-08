import styles from '../styles/App.module.css';

export default function Masthead() {
  return (
    <header className={styles.masthead}>
      <p className={styles.arxivTag}>
        <span>arXiv:2607.17091v3</span>
        <span className={styles.cls}>cs.CV · q-bio.QM</span>
        <span>Submitted 17 Jul 2026</span>
      </p>
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
      <p className={styles.corr}>
        <a href="mailto:contact@psgundla.com">✉ correspondence</a>
        <a href="https://scholar.google.com/scholar?q=%22Pranav+Swaroop+Gundla%22" target="_blank" rel="noopener">
          Google Scholar
        </a>
        <a href="https://github.com/psgundla" target="_blank" rel="noopener">
          GitHub
        </a>
        <a href="/CV-Pranav-Swaroop-Gundla.pdf" target="_blank" rel="noopener">
          PDF
        </a>
      </p>
    </header>
  );
}
