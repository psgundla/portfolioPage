import { useState } from 'react';

export default function Figure3() {
  const [zoomActive, setZoomActive] = useState(false);

  const skillCategories = [
    { name: 'Vision/ML', skills: ['PyTorch', 'ViT', 'MIL', 'scikit-learn'], level: 95 },
    { name: 'Languages', skills: ['Python', 'R', 'Bash', 'JS/TS'], level: 90 },
    { name: 'Infrastructure', skills: ['Docker', 'HPC', 'GCP/AWS', 'Snakemake'], level: 85 },
    { name: 'OMICS', skills: ['Transcriptomics', 'NGS', 'Genomics'], level: 80 }
  ];

  const awards = [
    { year: 2019, title: 'IDEX & Mérieux Scholarship', where: 'Grenoble', x: 120 },
    { year: 2020, title: 'Hackathon 1st Place', where: 'Bordeaux', x: 310 },
    { year: 2025, title: 'ESMO Merit Award', where: 'ESMO AI', x: 500 }
  ];

  return (
    <figure style={{ margin: '0 0 18px' }}>
      <div
        style={{
          border: '1px solid var(--rule)',
          borderRadius: '4px',
          background: 'var(--paper)',
          padding: '20px',
          position: 'relative',
          overflow: 'visible',
          cursor: zoomActive ? 'zoom-out' : 'zoom-in'
        }}
        onMouseEnter={() => setZoomActive(true)}
        onMouseLeave={() => setZoomActive(false)}
      >
        <svg
          viewBox="0 0 600 420"
          style={{
            width: '100%',
            height: '100%',
            transform: zoomActive ? 'scale(1.3)' : 'scale(1)',
            transformOrigin: 'center',
            transition: 'transform 0.2s ease-out'
          }}
        >
          {/* ROW 1: Technical Proficiency */}
          <text x="30" y="25" fontSize="14" fontWeight="600" fill="var(--ink)">
            Technical Proficiency
          </text>

          {skillCategories.map((cat, idx) => {
            const y = 50 + idx * 65;
            const barWidth = 220;

            return (
              <g key={idx}>
                <text x="30" y={y + 15} fontSize="11" fontWeight="600" fill="var(--link)">
                  {cat.name}
                </text>
                <rect x="30" y={y + 20} width={barWidth} height="18" fill="var(--rule)" fillOpacity="0.2" rx="2" />
                <rect x="30" y={y + 20} width={(barWidth * cat.level) / 100} height="18" fill="var(--link)" fillOpacity="0.7" rx="2" />
                <text x={45 + (barWidth * cat.level) / 100} y={y + 33} fontSize="10" fontWeight="600" fill="var(--ink)">
                  {cat.level}%
                </text>
                <text x="30" y={y + 55} fontSize="9" fill="var(--ink-soft)">
                  {cat.skills.join(' · ')}
                </text>
              </g>
            );
          })}

          {/* ROW 2: Recognition Timeline */}
          <text x="30" y="310" fontSize="14" fontWeight="600" fill="var(--ink)">
            Recognition Timeline
          </text>

          <line x1="30" y1="330" x2="570" y2="330" stroke="var(--rule)" strokeWidth="2" />

          {awards.map((award, idx) => {
            const x = 30 + award.x;

            return (
              <g key={idx}>
                <circle cx={x} cy="330" r="5" fill="var(--link)" />
                <rect x={x - 40} y="345" width="80" height="55" fill="var(--tag)" fillOpacity="0.5" stroke="var(--rule)" strokeWidth="1" rx="2" />
                <text x={x} y="360" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--ink)">
                  {award.year}
                </text>
                <text x={x} y="373" textAnchor="middle" fontSize="9" fontWeight="500" fill="var(--link)">
                  {award.title.split(' ')[0]}
                </text>
                <text x={x} y="386" textAnchor="middle" fontSize="8" fill="var(--ink-mute)">
                  {award.where}
                </text>
                <line x1={x} y1="335" x2={x} y2="345" stroke="var(--rule)" strokeWidth="1" strokeDasharray="2,2" />
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption>
        <b>Figure 3.</b> Top: Technical proficiency across four domains (95% Vision/ML, 90% Languages, 85% Infrastructure, 80% OMICS). Bottom: Recognition milestones (IDEX scholarship 2019, Hackathon 1st 2020, ESMO Merit 2025). Hover to zoom. Demonstrates deepening expertise trajectory and community engagement. Mentored 2 master students; leads lab journal clubs and workshops.
      </figcaption>
    </figure>
  );
}
