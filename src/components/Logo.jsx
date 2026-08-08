import styles from '../styles/App.module.css';

/**
 * PSG monogram — theme-aware SVG mark.
 * Ink rounded-square badge, serif P·S·G with the S in the terracotta accent.
 * Colors bind to CSS vars so it inverts automatically with the site theme.
 *
 * @param {number} size      badge edge length in px (default 30)
 * @param {boolean} wordmark render "psgundla" logotype beside the mark
 */
export default function Logo({ size = 30, wordmark = false }) {
  return (
    <span className={styles.logo} aria-label="Pranav Swaroop Gundla">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-hidden={wordmark ? 'true' : 'false'}
      >
        <rect x="2" y="2" width="60" height="60" rx="13" fill="var(--ink)" />
        <text
          x="32"
          y="43"
          textAnchor="middle"
          fontFamily="var(--display)"
          fontSize="31"
          fontWeight="600"
          letterSpacing="-1.5"
        >
          <tspan fill="var(--paper)">P</tspan>
          <tspan fill="var(--link)">S</tspan>
          <tspan fill="var(--paper)">G</tspan>
        </text>
      </svg>
      {wordmark && <span className={styles.logoWord}>psgundla</span>}
    </span>
  );
}
