import styles from '../styles/App.module.css';

export default function Abstract() {
  return (
    <div className={styles.abstract} id="abstract">
      <h2>Abstract</h2>
      <p>
        Diffuse gliomas carry molecular fingerprints — <i>IDH</i> mutation, 1p/19q codeletion,{' '}
        <i>CDKN2A</i> loss — that determine prognosis, yet routine diagnosis still hinges on morphology already encoded
        in the histopathology slide. This work asks whether vision can recover the genotype directly from the whole-slide
        image. I develop weakly-supervised, attention-based deep-learning models trained on the largest publicly available
        glioma WSI cohort (≈5,000 slides), pairing vision transformers with interpretable attention as explanation and
        cross-cohort validation as the bar for clinical credibility. The document that follows traces the path — mathematics
        and electronics in Hyderabad, bioinformatics on the coast of Manipal, deep learning in the Alps of Grenoble, and
        a PhD at Essen — from first principles to a pipeline that earns its way toward the clinic.
      </p>
      <p className={styles.keywords}>
        <b>Keywords:</b> computational pathology · vision transformers · attention-based multiple-instance learning ·
        whole-slide imaging · glioma genomics · tumor microenvironment · spatial omics · cancer ecotypes · foundation models ·
        interpretable AI · reproducible pipelines
      </p>
    </div>
  );
}
