export default function Figure3() {
  const skillCategories = [
    { name: 'Vision/ML', skills: ['PyTorch', 'ViT', 'MIL', 'scikit-learn'], level: 95 },
    { name: 'Languages', skills: ['Python', 'R', 'Bash', 'JS/TS'], level: 90 },
    { name: 'Infrastructure', skills: ['Docker', 'HPC', 'GCP/AWS', 'Snakemake'], level: 85 },
    { name: 'OMICS', skills: ['Transcriptomics', 'NGS', 'Genomics'], level: 80 }
  ];

  const awards = [
    { year: 2019, title: 'IDEX & Mérieux Scholarship', where: 'Grenoble', x: 100 },
    { year: 2020, title: 'Hackathon 1st Place', where: 'Bordeaux', x: 280 },
    { year: 2025, title: 'ESMO Merit Award', where: 'ESMO AI', x: 460 }
  ];

  return (
    <figure style={{ margin: '0 0 18px' }}>
      <div style={{ border: '1px solid var(--rule)', borderRadius: '4px', background: 'var(--paper)', padding: '20px', aspectRatio: '16 / 9', minHeight: '200px', position: 'relative', overflow: 'hidden' }}>
        <svg viewBox="0 0 900 340" style={{ width: '100%', height: '100%' }}>
          {/* LEFT SIDE: Skill bars */}
          <text x="30" y="25" fontSize="12" fontWeight="600" fill="var(--ink)">
            Technical Proficiency
          </text>

          {skillCategories.map((cat, idx) => {
            const y = 50 + idx * 65;
            const barWidth = 200;

            return (
              <g key={idx}>
                {/* Category label */}
                <text x="30" y={y + 15} fontSize="11" fontWeight="600" fill="var(--link)">
                  {cat.name}
                </text>

                {/* Background bar */}
                <rect x="30" y={y + 20} width={barWidth} height="18" fill="var(--rule)" fillOpacity="0.2" rx="2" />

                {/* Progress bar */}
                <rect x="30" y={y + 20} width={(barWidth * cat.level) / 100} height="18" fill="var(--link)" fillOpacity="0.7" rx="2" />

                {/* Percentage text */}
                <text x={45 + (barWidth * cat.level) / 100} y={y + 33} fontSize="10" fontWeight="600" fill="var(--ink)">
                  {cat.level}%
                </text>

                {/* Tech list */}
                <text x="30" y={y + 55} fontSize="9" fill="var(--ink-soft)">
                  {cat.skills.join(' · ')}
                </text>
              </g>
            );
          })}

          {/* RIGHT SIDE: Awards timeline */}
          <text x="550" y="25" fontSize="12" fontWeight="600" fill="var(--ink)">
            Recognition Timeline
          </text>

          {/* Timeline line */}
          <line x1="500" y1="130" x2="880" y2="130" stroke="var(--rule)" strokeWidth="2" />

          {awards.map((award, idx) => {
            const x = award.x;

            return (
              <g key={idx}>
                {/* Node */}
                <circle cx={x} cy="130" r="5" fill="var(--link)" />

                {/* Award box */}
                <rect x={x - 40} y="145" width="80" height="60" fill="var(--tag)" fillOpacity="0.5" stroke="var(--rule)" strokeWidth="1" rx="2" />

                {/* Year */}
                <text x={x} y="160" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--ink)">
                  {award.year}
                </text>

                {/* Title */}
                <text x={x} y="174" textAnchor="middle" fontSize="9" fontWeight="500" fill="var(--link)">
                  {award.title.split(' ')[0]}
                </text>

                {/* Where */}
                <text x={x} y="188" textAnchor="middle" fontSize="8" fill="var(--ink-mute)">
                  {award.where}
                </text>

                {/* Connector to node */}
                <line x1={x} y1="140" x2={x} y2="145" stroke="var(--rule)" strokeWidth="1" strokeDasharray="2,2" />
              </g>
            );
          })}

          {/* Legend */}
          <text x="30" y="300" fontSize="10" fill="var(--ink-mute)">
            Profile: Expert in vision/ML pipelines. Intermediate infrastructure & OMICS. Active in research community (2 mentor students, journal clubs, workshops, conferences).
          </text>
        </svg>
      </div>
      <figcaption>
        <b>Figure 3.</b> Left: Technical proficiency across four domains (95% Vision/ML, 90% Languages, 85% Infrastructure, 80% OMICS). Right: Recognition milestones (IDEX scholarship 2019, Hackathon 1st 2020, ESMO Merit 2025). Demonstrates deepening expertise trajectory and community engagement. Mentored 2 master students; leads lab journal clubs and workshops.
      </figcaption>
    </figure>
  );
}
