import styles from '../styles/App.module.css';

export default function Discussion() {
  return (
    <section id="discussion" className={styles.wrap} style={{ padding: 0 }}>
      <h2 className={styles.head}>
        <span className={styles.no}>D</span> Discussion
      </h2>

      <p>
        I was reading a Microsoft Research blog in 2015. They were talking about DNA as storage—trillions of bits in a
        molecule the size of a grain of sand. <i>Could we use biology as infinite hard drives?</i> That thought planted
        something: signals hide everywhere. You just need to listen.
      </p>

      <p>In Hyderabad, I was studying circuits. But my mind was elsewhere.</p>

      <p>
        My first real experiment was mice. Behavioral studies, digital signal processing, learning in fear conditioning. I
        was pinning back to electronics—circuits, signals, noise—but now the system was alive. Scared mice have patterns.
        Frightened mice have different patterns. <i>What if I could read that?</i> What if biology spoke in frequencies I
        could decode?
      </p>

      <p>
        That curiosity got me a scholarship. IDEX + Mérieux. Grenoble in 2019 was my first time living outside India. First
        time doing research at scale. My thesis was on lung adenocarcinoma transcriptomics (NSCLADC study). I remember the
        moment I saw the data—how TP53 activity carved the tumor landscape. That's when I knew: <i>this is the question. Not storage. Not abstractions. Real biology. Real stakes.</i>
      </p>

      <p>
        COVID hit. Back to India. I took an internship at Himalaya (cloud infrastructure, data pipelines) for a month. Then
        Plantik: two years building algorithms for disease-resistant plants, maintaining AWS/GCP pipelines, analyzing genomics.
        It was <i>work</i>—not research yet. But I learned: how to move code between institutions, how infrastructure breaks
        silently, how real data is messier than papers ever admit.
      </p>

      <p>
        In parallel, I did a year at Mbiomics studying ESCC—esophageal cancer. Two papers. First taste of real science:
        hypothesis, failure, refinement. That's when I applied for the PhD.
      </p>

      <p>
        2023. Essen. Emre's lab. I was the first student. No playbook. We were building from scratch: vision transformers on
        whole-slide images, asking <i>can we predict glioma genotype from morphology alone?</i> The answer was harder than I
        expected. Attention heatmaps didn't work cleanly. Cross-cohort validation broke. But that's where rigor matters. That's
        where the electronics lesson holds: <i>if it breaks silently, you miss it. Make it fail loud.</i>
      </p>

      <p>
        ESMO Merit Award felt surreal. Not because the model is revolutionary—it's not. But because it's <i>honest</i>.
        Because I built it to fail transparently.
      </p>

      <p>
        Now I'm asking the next question: can we see the tumor microenvironment—the immune cells, the stromal architecture—in
        spatial omics? Can foundation models trained on morphology + genomics + outcomes unlock what tissue is <i>really</i>{' '}
        saying? That's the next chapter.
      </p>

      <p>
        But here's the thing: I don't know if I'll solve it. I'm building toward postdoc, toward continuing science after the
        PhD. I read papers obsessively, I learn JavaScript for fun (building tools matters), I listen to music 6+ hours a day
        (it keeps me sane). I've traveled from India to France to Switzerland to Germany and Spain. Each place taught me
        something. Each place made me smaller and bigger at once.
      </p>

      <p>
        The photo collage says it: <i>I might not be where I want to be yet. But I get closer every day.</i> I don't know
        what's next. But I'm strapped in to learn it.
      </p>

      <p style={{ marginTop: '20px' }}>
        <b>
          Building a lab demands clarity—but not blindness to opportunity. My research appetite is specific: vision
          transformers + large language models as foundation models for computational pathology. I'm deep in gliomas now, and I
          want to go deeper.
        </b>
      </p>

      <p>
        The questions that keep me awake: <i>Why do some gliomas thrive in hypoxia while others don't?</i> The morphology
        encodes that—the stromal architecture, immune infiltration, necrosis patterns—but we're not reading it yet. Spatial
        omics + interpretable vision models could unlock it. <i>What does CDKN2A/B deletion actually do to the tumor microenvironment?</i> It's a genetic driver, but the phenotype is written in tissue. If I could map
        niche-level changes across genomic backgrounds, I could move beyond "this mutation matters" to "here's how it sculpts
        the ecosystem."
      </p>

      <p>
        That's the postdoc work. That's the specific hunger that will drive the next three years. I'm open to where a position
        takes me—but I'm not empty. I want a lab that values interpretability, mentors rigorously, and asks:{' '}
        <i>Can we see what tissue is really saying?</i>
      </p>

      <p>The problem will sharpen during postdoc. The approach is already clear.</p>
    </section>
  );
}
