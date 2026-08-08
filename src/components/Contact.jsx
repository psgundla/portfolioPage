import styles from '../styles/App.module.css';

export default function Contact() {
  return (
    <footer id="contact" style={{ borderTop: '2px solid var(--ink)', marginTop: '30px', padding: '30px 0 60px' }}>
      <p style={{ maxWidth: 'var(--measure)', marginBottom: '20px' }}>
        I might not be where I want to be yet. But I get closer every day. This work is an invitation—to collaborate, to push
        on the questions that matter, to build tools that survive contact with reality. If you're interested in computational
        pathology, vision transformers, tumor microenvironment mapping, or just curious about how someone from first principles in
        Hyderabad ended up asking gliomas to reveal their secrets: let's talk.
      </p>

      <div className={styles.frow}>
        <span>✉ <a href="mailto:contact@psgundla.com">contact@psgundla.com</a></span>
        <span>🔗 <a href="https://linkedin.com/in/psgundla" target="_blank" rel="noopener">LinkedIn</a></span>
        <span>📚 <a href="https://scholar.google.com/citations?user=pranav-swaroop-gundla" target="_blank" rel="noopener">Google Scholar</a></span>
        <span>🔬 <a href="https://researchgate.net/profile/Pranav-Swaroop-Gundla" target="_blank" rel="noopener">ResearchGate</a></span>
      </div>

      <div className={styles.frow} style={{ marginTop: '8px' }}>
        <span>💻 <a href="https://github.com/psgundla" target="_blank" rel="noopener">GitHub</a></span>
        <span>𝕏 <a href="https://x.com/psgundla" target="_blank" rel="noopener">X (Twitter)</a></span>
        <span style={{ color: 'var(--ink-mute)' }}>Postdoc applications open July 2027. Looking for labs focused on vision + spatial omics in cancer.</span>
      </div>

      <div className={styles.frow} style={{ marginTop: '16px' }}>
        <span style={{ fontSize: '12px', color: 'var(--ink-mute)' }}>EACR 36044 · SNO 757239</span>
      </div>

      <pre className={styles.citeSelf}>
        <span className={styles.lbl}>@phdthesis</span>
        {`{gundla2026slide,
  author = {Gundla, Pranav Swaroop},
  title  = {Reading Cancer from the Slide},
  school = {University Hospital Essen, IKIM},
  year   = {2026}, note = {in progress}
}`}
      </pre>
    </footer>
  );
}
