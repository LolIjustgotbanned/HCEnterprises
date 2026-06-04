interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const s = {
    sm: { box: 44, hcBox: 21, hcText: 26, enterprise: 9.5, digital: 7,   gap: 10 },
    md: { box: 54, hcBox: 26, hcText: 32, enterprise: 12,  digital: 8.5, gap: 12 },
    lg: { box: 68, hcBox: 33, hcText: 40, enterprise: 14,  digital: 10,  gap: 14 },
  }[size]

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: s.gap }}>
      {/* Gold-bordered monogram box */}
      <div style={{
        width: s.box,
        height: s.box,
        border: '1.5px solid #C9972A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <span style={{
          fontFamily: 'var(--font-display), Georgia, serif',
          fontSize: s.hcBox,
          color: '#ffffff',
          fontWeight: 700,
          letterSpacing: '0.02em',
          lineHeight: 1,
        }}>
          HC
        </span>
      </div>

      {/* Text lockup */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <span style={{
          fontFamily: 'var(--font-display), Georgia, serif',
          fontSize: s.hcText,
          color: '#ffffff',
          fontWeight: 700,
          letterSpacing: '0.06em',
          lineHeight: 1,
        }}>
          HC
        </span>
        <span style={{
          fontFamily: 'var(--font-display), Georgia, serif',
          fontSize: s.enterprise,
          color: '#ffffff',
          fontWeight: 600,
          letterSpacing: '0.22em',
          lineHeight: 1.2,
        }}>
          ENTERPRISES
        </span>
        <span style={{
          fontFamily: 'var(--font-body), system-ui, sans-serif',
          fontSize: s.digital,
          color: '#C9972A',
          fontWeight: 500,
          letterSpacing: '0.28em',
          lineHeight: 1,
          marginTop: 2,
        }}>
          DIGITAL MARKETING
        </span>
      </div>
    </div>
  )
}
