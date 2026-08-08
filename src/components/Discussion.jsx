import styles from '../styles/App.module.css';

export default function Discussion() {
  return (
    <section id="discussion" className={styles.wrap} style={{ padding: 0 }}>
      <h2 className={styles.head}>
        <span className={styles.no}>D</span> Discussion &amp; Results
      </h2>

      <p>
        In 2015 I read a Microsoft Research note on storing data in DNA—trillions of bits in a grain of salt.
        <i> Could biology be read like a signal?</i> I was studying circuits in Hyderabad, but that question moved me: from
        first principles in mathematics and electronics into biology, then into teaching a model to see what a pathologist sees.
        The thread never changed—<i>find the signal, and make it fail loud when it isn&apos;t there.</i>
      </p>

      <p>
        The early proof came from noise. Behavioral studies in mice—fear conditioning, digital signal processing—showed me that
        living systems keep patterns you can decode. A scholarship (IDEX &amp; Mérieux) took me to Grenoble in 2019, where a lung
        adenocarcinoma thesis around <i>TP53</i> activity made the stakes real. Then industry sharpened the craft: at Plantik I
        ran GCP/AWS genomics pipelines and learned how infrastructure breaks silently; at Mbiomics I asked what expression
        signatures reveal about esophageal cancer subtypes. The answer—population-specific transcriptomes and a systematic
        downregulation of Desmoglein-1—became my first two peer-reviewed papers [4, 5]. Small work, but honest: signal is
        everywhere if you refuse to hide it.
      </p>

      <p>
        That refusal defines the PhD. In Essen I was the lab&apos;s first student, building from scratch: a vision transformer
        trained on ~5,000 whole-slide images from the largest public glioma cohort, asking whether genotype—<i>IDH</i>, 1p/19q
        codeletion, <i>CDKN2A</i> loss—can be read from morphology alone. Attention heatmaps didn&apos;t cooperate at first;
        cross-cohort validation broke before it held. But that is where rigor lives. The model now predicts molecular subtype
        from H&amp;E with attention a pathologist can audit, and it generalized across cohorts—my first-author work [1, 3],
        recognized with the <b>ESMO Merit Award</b> at the 1st ESMO AI Congress. Not because the model is revolutionary—it
        isn&apos;t—but because it is interpretable and built to fail transparently. In parallel I helped show how tumor-initiating
        genetics and therapy drive divergent evolution in <i>IDH</i>-mutant gliomas [2].
      </p>

      <p>
        The next question is already clear: can we read the tumor microenvironment—immune infiltration, stromal architecture,
        the niche a <i>CDKN2A/B</i> deletion actually sculpts? The morphology encodes it; we are not reading it yet. Pairing
        spatial omics with interpretable vision + language foundation models could move the field from <i>&ldquo;this mutation
        matters&rdquo;</i> to <i>&ldquo;here is how it shapes the ecosystem.&rdquo;</i> That is the postdoc work—a specific
        hunger, not an open wish. I want a lab that values interpretability, mentors rigorously, and keeps asking the only
        question that has driven any of this: <i>can we see what tissue is really saying?</i>
      </p>
    </section>
  );
}
