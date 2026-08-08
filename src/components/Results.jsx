import styles from '../styles/App.module.css';

export default function Results() {
  return (
    <section id="results-narrative" className={styles.wrap} style={{ padding: 0 }}>
      <h2 className={styles.head}>
        <span className={styles.no}>R</span> Results: Publications &amp; Key Achievements
      </h2>

      <p>
        The first door opened in esophageal cancer. At Mbiomics, I asked: <i>what do gene expression signatures tell us about
        ESCC subtypes?</i> The data showed divergence—population-specific transcriptomes carved distinct molecular landscapes.
        One pattern stood out: Desmoglein-1, a cell adhesion protein, was systematically downregulated in ESCC tumors. That
        finding anchored two peer-reviewed publications (Infectious Agents &amp; Cancer, Cancer Biomarkers, 2023). Small work,
        but real—proof that messy data yields signal if you listen carefully.
      </p>

      <p>
        But ESCC was a stepping stone. The real question emerged in Essen: <i>can we read the genotype directly from morphology?</i>
      </p>

      <p>
        Diffuse gliomas carry molecular fingerprints—<i>IDH</i> mutation, 1p/19q codeletion, <i>CDKN2A</i> loss—that determine
        prognosis, yet routine diagnosis still hinges on morphology already encoded in the histopathology slide. I built a vision
        transformer trained on ~5,000 whole-slide images from the largest publicly available glioma cohort. The model learned to
        predict genetic subtype from H&amp;E alone, with attention heatmaps that a pathologist can audit. Cross-cohort validation
        held—the work generalized.
      </p>

      <p>
        That became my first-author paper: <i>"Genetic Subtype Prediction in Diffuse Gliomas via a Vision Transformer-Based Multiple
        Instance Learning Model"</i> (ESMO RWD, in review). Same work, refined as a poster, earned the ESMO Merit Award at the 1st
        ESMO AI Congress (2025). Recognition—but more importantly, proof that attention-based MIL is not black magic. It's
        interpretable. It holds up.
      </p>

      <p>
        In parallel, I contributed to a larger study: <i>"Tumor-initiating genetics and therapy drive divergent molecular evolution
        in IDH-mutant gliomas"</i>. My role: help build the data analysis, validate the hypothesis.
      </p>

      <p>
        This body of work—five publications, two first-author, one ESMO-recognized—tells a single story: signal is everywhere. You
        just have to refuse to hide it.
      </p>
    </section>
  );
}
