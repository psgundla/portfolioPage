export default function Figure1() {
  const milestones = [
    {
      year: 2015,
      location: 'Hyderabad',
      degree: 'BSc',
      title: 'Math, Electronics & CS',
      country: '🇮🇳'
    },
    {
      year: 2018,
      location: 'Manipal',
      degree: 'MSc',
      title: 'Bioinformatics',
      country: '🇮🇳'
    },
    {
      year: 2019,
      location: 'Grenoble',
      degree: 'MSc',
      title: 'Healthy Living Tech',
      country: '🇫🇷'
    },
    {
      year: 2023,
      location: 'Essen',
      degree: 'PhD',
      title: 'AI in Medicine',
      country: '🇩🇪'
    }
  ];

  return (
    <figure style={{ margin: '0 0 18px' }}>
      <div style={{ border: '1px solid var(--rule)', borderRadius: '4px', background: 'var(--paper)', padding: '20px', aspectRatio: '16 / 9', minHeight: '200px', position: 'relative', overflow: 'hidden' }}>
        <svg viewBox="0 0 800 300" style={{ width: '100%', height: '100%' }}>
          {/* Timeline line */}
          <line x1="80" y1="150" x2="750" y2="150" stroke="var(--rule)" strokeWidth="2" />

          {/* Vertical connector lines and nodes */}
          {milestones.map((milestone, idx) => {
            const x = 80 + (idx / (milestones.length - 1)) * 670;
            const y = 150;
            const topY = 80;

            return (
              <g key={idx}>
                {/* Vertical line from timeline to milestone */}
                <line x1={x} y1={y} x2={x} y2={topY + 20} stroke="var(--rule)" strokeWidth="1" strokeDasharray="2,2" />

                {/* Node circle */}
                <circle cx={x} cy={y} r="6" fill="var(--link)" />

                {/* Milestone box */}
                <g>
                  <rect x={x - 55} y={topY} width="110" height="60" fill="var(--tag)" fillOpacity="0.5" stroke="var(--rule)" strokeWidth="1" rx="3" />
                  <text x={x} y={topY + 14} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--ink)">
                    {milestone.country} {milestone.location}
                  </text>
                  <text x={x} y={topY + 28} textAnchor="middle" fontSize="10" fill="var(--link)" fontWeight="600">
                    {milestone.degree}
                  </text>
                  <text x={x} y={topY + 42} textAnchor="middle" fontSize="9" fill="var(--ink-mute)">
                    {milestone.year}
                  </text>
                </g>

                {/* Year label below */}
                <text x={x} y={220} textAnchor="middle" fontSize="10" fill="var(--ink-mute)" fontFamily="monospace">
                  {milestone.year}
                </text>
              </g>
            );
          })}

          {/* Title */}
          <text x="400" y="30" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--ink)">
            Life Timeline: Education &amp; Geography
          </text>
        </svg>
      </div>
      <figcaption>
        <b>Figure 1.</b> Career timeline spanning 4 countries and 3 disciplines. Bachelor's in first principles (math, electronics, CS) in Hyderabad; Master's in bioinformatics on India's coast; specialized health tech in French Alps; PhD in computational oncology in Germany. Numbers highlight: 3 degrees, 4 countries, 8+ years coding.
      </figcaption>
    </figure>
  );
}
