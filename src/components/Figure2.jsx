export default function Figure2() {
  const roles = [
    {
      title: 'Mbiomics LLC',
      position: 'Bioinformatics Analyst',
      location: 'USA',
      period: '~1 year',
      tech: ['DSP', 'Transcriptomics', 'ESCC Atlas'],
      output: '2 publications',
      highlight: 'Biomarker discovery'
    },
    {
      title: 'Plantik Biosciences',
      position: 'Associate Bioinformatician',
      location: 'Paris, FR',
      period: '2 years',
      tech: ['GCP/AWS', 'Python/R', 'Pipelines'],
      output: 'Disease-resistant plants',
      highlight: 'Cloud infrastructure'
    },
    {
      title: 'Kocakavuk Lab, IKIM',
      position: 'PhD Researcher',
      location: 'Essen, DE',
      period: '2023-present',
      tech: ['ViT', 'MIL', 'HPC', 'Cross-cohort validation'],
      output: '2 first-author papers',
      highlight: 'Interpretable AI'
    }
  ];

  return (
    <figure style={{ margin: '0 0 18px' }}>
      <div style={{ border: '1px solid var(--rule)', borderRadius: '4px', background: 'var(--paper)', padding: '20px', aspectRatio: '16 / 9', minHeight: '200px', position: 'relative', overflow: 'hidden' }}>
        <svg viewBox="0 0 900 320" style={{ width: '100%', height: '100%' }}>
          {/* Connecting arrows */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="var(--link)" />
            </marker>
          </defs>

          {/* Arrow 1: Mbiomics -> Plantik */}
          <line x1="260" y1="160" x2="370" y2="160" stroke="var(--link)" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="315" y="150" textAnchor="middle" fontSize="10" fill="var(--ink-mute)">→ growth</text>

          {/* Arrow 2: Plantik -> PhD */}
          <line x1="570" y1="160" x2="680" y2="160" stroke="var(--link)" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="625" y="150" textAnchor="middle" fontSize="10" fill="var(--ink-mute)">→ depth</text>

          {/* Role boxes */}
          {roles.map((role, idx) => {
            const x = 50 + idx * 330;
            const boxWidth = 240;
            const boxHeight = 240;

            return (
              <g key={idx}>
                {/* Main box */}
                <rect x={x} y="40" width={boxWidth} height={boxHeight} fill="var(--tag)" fillOpacity="0.3" stroke="var(--rule)" strokeWidth="1.5" rx="4" />

                {/* Title */}
                <text x={x + boxWidth / 2} y="70" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ink)">
                  {role.title}
                </text>

                {/* Position */}
                <text x={x + boxWidth / 2} y="90" textAnchor="middle" fontSize="11" fill="var(--link)" fontWeight="500">
                  {role.position}
                </text>

                {/* Location & Period */}
                <text x={x + 10} y="115" fontSize="10" fill="var(--ink-soft)">
                  📍 {role.location}
                </text>
                <text x={x + 10} y="130" fontSize="10" fill="var(--ink-soft)">
                  ⏱ {role.period}
                </text>

                {/* Tech stack */}
                <text x={x + 10} y="155" fontSize="9" fontWeight="600" fill="var(--ink-mute)" textTransform="uppercase">
                  Stack
                </text>
                {role.tech.map((tech, tidx) => (
                  <text key={tidx} x={x + 10} y={170 + tidx * 12} fontSize="9" fill="var(--ink-soft)">
                    • {tech}
                  </text>
                ))}

                {/* Output highlight box */}
                <rect x={x + 8} y={230} width={boxWidth - 16} height="35" fill="var(--rule)" fillOpacity="0.2" rx="2" />
                <text x={x + boxWidth / 2} y="245" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--link)">
                  {role.output}
                </text>
                <text x={x + boxWidth / 2} y="259" textAnchor="middle" fontSize="9" fill="var(--ink-mute)" fontStyle="italic">
                  {role.highlight}
                </text>
              </g>
            );
          })}

          {/* Title */}
          <text x="450" y="30" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--ink)">
            Experience Pipeline: Biomarkers → Infrastructure → Clinical AI
          </text>
        </svg>
      </div>
      <figcaption>
        <b>Figure 2.</b> Career progression through three complementary roles. Mbiomics: biomarker discovery in ESCC transcriptomics (2 publications). Plantik: scaled cloud infrastructure for genomics (GCP/AWS). PhD at Essen: ViT-based genotype prediction in gliomas with cross-cohort validation (2 first-author papers, ESMO Merit Award). Each role deepened technical expertise and moved closer to interpretable AI for clinical impact.
      </figcaption>
    </figure>
  );
}
