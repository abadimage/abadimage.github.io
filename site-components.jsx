// ─────────────────────────────────────────────
// Site components — Polaroid, Tape, FilmStripCard, PassportStamp, Sparkline
// ─────────────────────────────────────────────

const { useState, useEffect, useRef } = React;

// ───── Tape strip ─────
const Tape = ({ style = {}, color = 'rgba(217, 78, 46, 0.32)', width = 60 }) => (
  <div style={{
    width, height: 18,
    background: color,
    border: '1px dashed rgba(0,0,0,0.22)',
    borderLeft: 'none', borderRight: 'none',
    ...style,
  }} aria-hidden="true" />
);

// ───── Polaroid frame (real-polaroid proportions: square photo, cream frame, deep bottom margin) ─────
const Polaroid = ({ src, alt = '', caption, rotate = 0, style = {}, tape, tapeRotate = 0, lift = true, className = '' }) => {
  const [hover, setHover] = useState(false);
  // Tiny deterministic caption rotation per polaroid for handwritten feel
  const capTilt = caption ? (caption.charCodeAt(0) % 5) - 2 : 0;
  return (
    <div
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        // Clean Wimbledon white frame, barely-perceptible warm bottom
        background: 'linear-gradient(180deg, #fdfdfb 0%, #f6f5f0 100%)',
        padding: '10px 11px 58px',
        // Layered shadows: thin edge highlight + soft paper shadow (no hard border)
        boxShadow: hover && lift
          ? '0 1px 0 rgba(255,255,255,0.7) inset, 0 0 0 1px rgba(80,75,65,0.14), 0 14px 28px -10px rgba(40,35,25,0.36), 0 6px 12px -4px rgba(40,35,25,0.2)'
          : '0 1px 0 rgba(255,255,255,0.7) inset, 0 0 0 1px rgba(80,75,65,0.14), 0 8px 18px -8px rgba(40,35,25,0.28), 0 3px 8px -2px rgba(40,35,25,0.16)',
        transform: `rotate(${hover && lift ? rotate * 0.4 : rotate}deg) translateY(${hover && lift ? -4 : 0}px)`,
        transition: 'transform 0.4s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease',
        borderRadius: 2,
        position: 'relative',
        ...style,
      }}
    >
      {tape && <Tape style={{ position: 'absolute', top: -10, left: '35%', width: 50, transform: `rotate(${tapeRotate}deg)` }} />}

      {/* Photo well — square aspect, recessed via inner shadow, vignette + color grade on image */}
      <div style={{
        position: 'relative',
        aspectRatio: '1 / 1',
        background: '#0a0a0a',
        overflow: 'hidden',
        boxShadow: 'inset 0 0 0 1px rgba(30, 25, 15, 0.35), inset 0 2px 6px rgba(0,0,0,0.16), inset 0 -1px 3px rgba(0,0,0,0.1)',
      }}>
        {src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{
              display: 'block',
              width: '100%', height: '100%',
              objectFit: 'cover',
              // Polaroid color cast: slight desaturation, warm shift, lifted blacks
              filter: 'saturate(0.88) contrast(0.92) brightness(1.02) sepia(0.06)',
              userSelect: 'none',
            }}
            draggable={false}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'repeating-linear-gradient(45deg, transparent 0 8px, rgba(255,255,255,0.06) 8px 9px)' }} />
        )}
        {/* Soft vignette inside the photo */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.18) 100%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Caption — handwritten, slight tilt + off-center jitter */}
      {caption && (
        <div style={{
          position: 'absolute',
          left: 14, right: 14, bottom: 16,
          fontFamily: 'Caveat, cursive',
          fontSize: 24,
          fontWeight: 500,
          textAlign: 'center',
          color: '#2b2419',
          lineHeight: 1,
          transform: `rotate(${capTilt * 0.5}deg)`,
          letterSpacing: '0.01em',
        }}>{caption}</div>
      )}
    </div>
  );
};

// ───── Film strip card ─────
const FilmStripCard = ({ src, title, runtime, meta, rotate = 0, style = {} }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#141414',
        padding: '8px 0',
        boxShadow: hover ? '5px 7px 0 rgba(0,0,0,0.25)' : '3px 4px 0 rgba(0,0,0,0.2)',
        transform: `rotate(${hover ? rotate * 0.3 : rotate}deg) translateY(${hover ? -3 : 0}px)`,
        transition: 'transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease',
        position: 'relative',
        cursor: 'pointer',
        ...style,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 8px 8px' }} aria-hidden="true">
        {Array.from({ length: 6 }).map((_, j) => (
          <div key={j} style={{ width: 14, height: 10, background: '#f4ead8', borderRadius: 2 }} />
        ))}
      </div>
      <div style={{
        margin: '0 10px',
        aspectRatio: '16/9',
        position: 'relative',
        border: '1.5px solid #fefdf9',
        overflow: 'hidden',
        background: '#222',
      }}>
        {src && (
          <img
            src={src}
            alt={title}
            loading="lazy"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(0.4) brightness(0.7) contrast(1.05)',
              transition: 'filter 0.4s ease, transform 0.5s ease',
              transform: hover ? 'scale(1.04)' : 'scale(1)',
            }}
            draggable={false}
          />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.1))' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: 42, height: 42, borderRadius: '50%',
            background: '#fefdf9', color: '#1a1a1a',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, paddingLeft: 3,
            boxShadow: '2px 2px 0 rgba(0,0,0,0.35)',
            transform: hover ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.25s cubic-bezier(.34,1.56,.64,1)',
          }} aria-hidden="true">▶</div>
        </div>
        <div style={{
          position: 'absolute', top: 6, right: 6,
          background: '#fefdf9', color: '#1a1a1a',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 700,
          padding: '2px 6px',
        }}>{runtime}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '8px 8px 0' }} aria-hidden="true">
        {Array.from({ length: 6 }).map((_, j) => (
          <div key={j} style={{ width: 14, height: 10, background: '#f4ead8', borderRadius: 2 }} />
        ))}
      </div>
      <div style={{
        background: '#fefdf9',
        margin: '8px 8px 0',
        padding: '8px 10px',
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 22, lineHeight: 1 }}>{title}</div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#666', marginTop: 4 }}>{meta}</div>
      </div>
    </div>
  );
};

// ───── Outlined passport stamp ─────
const PassportStamp = ({ year, company, role, color = '#d94e2e', rotate = 0, variant = 'star', size = 170 }) => {
  const slug = `${year}-${company.replace(/[^a-zA-Z0-9]/g, '')}`;
  const cx = 80, cy = 80, R_OUTER = 72, R_INNER = 60, TEXT_ARC_R = 50;
  const [hover, setHover] = useState(false);

  const Glyph = () => {
    const p = { fill: 'none', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
    switch (variant) {
      case 'bars': return (<g {...p}>
        <line x1={cx - 14} y1={cy - 22} x2={cx + 14} y2={cy - 22} strokeWidth="2.5" />
        <line x1={cx - 10} y1={cy - 17} x2={cx + 10} y2={cy - 17} strokeWidth="1.5" />
      </g>);
      case 'plane': return (<g {...p}>
        <path d={`M ${cx - 14} ${cy - 20} L ${cx + 14} ${cy - 24} L ${cx + 10} ${cy - 16} L ${cx - 10} ${cy - 16} Z`} />
        <line x1={cx} y1={cy - 18} x2={cx} y2={cy - 12} />
      </g>);
      case 'diamond': return (<g {...p}>
        <path d={`M ${cx} ${cy - 26} L ${cx + 8} ${cy - 18} L ${cx} ${cy - 10} L ${cx - 8} ${cy - 18} Z`} />
      </g>);
      case 'circle': return (<g {...p}>
        <circle cx={cx} cy={cy - 18} r="5" />
        <circle cx={cx} cy={cy - 18} r="2" fill={color} />
      </g>);
      case 'dots': return (<g {...p}>
        <circle cx={cx - 8} cy={cy - 18} r="2" fill={color} />
        <circle cx={cx} cy={cy - 18} r="2" fill={color} />
        <circle cx={cx + 8} cy={cy - 18} r="2" fill={color} />
      </g>);
      case 'star':
      default:
        return (<text x={cx} y={cy - 13} textAnchor="middle" fontSize="14" fill={color} fontFamily="serif">★</text>);
    }
  };

  return (
    <svg
      width={size} height={size} viewBox="0 0 160 160"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        transform: `rotate(${hover ? rotate * 0.5 : rotate}deg) scale(${hover ? 1.06 : 1})`,
        transition: 'transform 0.35s cubic-bezier(.34,1.56,.64,1)',
        display: 'block',
        cursor: 'help',
      }}
    >
      <defs>
        <path id={`${slug}-top`} d={`M ${cx - TEXT_ARC_R} ${cy} A ${TEXT_ARC_R} ${TEXT_ARC_R} 0 0 1 ${cx + TEXT_ARC_R} ${cy}`} fill="none" />
        <path id={`${slug}-bot`} d={`M ${cx + TEXT_ARC_R} ${cy + 4} A ${TEXT_ARC_R} ${TEXT_ARC_R} 0 0 1 ${cx - TEXT_ARC_R} ${cy + 4}`} fill="none" />
      </defs>
      <circle cx={cx} cy={cy} r={R_OUTER} stroke={color} strokeWidth="2.6" fill="none" opacity="0.95" />
      <circle cx={cx} cy={cy} r={R_INNER} stroke={color} strokeWidth="1.3" fill="none" opacity="0.9" />
      <line x1={cx - 56} y1={cy + 18} x2={cx + 56} y2={cy + 18} stroke={color} strokeWidth="1" opacity="0.7" />
      <line x1={cx - R_OUTER + 2} y1={cy} x2={cx - R_INNER - 2} y2={cy} stroke={color} strokeWidth="1.5" />
      <line x1={cx + R_INNER + 2} y1={cy} x2={cx + R_OUTER - 2} y2={cy} stroke={color} strokeWidth="1.5" />
      <text fill={color} fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="700" letterSpacing="2.5">
        <textPath href={`#${slug}-top`} startOffset="50%" textAnchor="middle">{company.toUpperCase()}</textPath>
      </text>
      <text fill={color} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600" letterSpacing="2" opacity="0.85">
        <textPath href={`#${slug}-bot`} startOffset="50%" textAnchor="middle">{role.toUpperCase()}</textPath>
      </text>
      <Glyph />
      <text x={cx} y={cy + 11} textAnchor="middle" fill={color} fontSize="22" fontFamily="JetBrains Mono, monospace" fontWeight="800">{year}</text>
    </svg>
  );
};

// ───── Sparkline (handmade-looking) ─────
const Sparkline = ({ seed = 1, color = '#1a1a1a', blipColor = '#d94e2e' }) => {
  const bars = 40;
  const heights = Array.from({ length: bars }).map((_, i) => {
    const r = Math.sin((seed + 1) * 13.7 + i * 1.31);
    return 0.45 + Math.abs(r) * 0.5;
  });
  const blips = [(seed * 7 + 11) % bars, (seed * 5 + 27) % bars];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 32 }} aria-hidden="true">
      {heights.map((h, i) => {
        const isBlip = blips.includes(i);
        return (
          <div key={i} style={{
            flex: 1,
            height: `${h * 100}%`,
            background: isBlip ? blipColor : color,
            opacity: 0.88,
            transform: `translateY(${(i % 3) - 1}px)`,
          }} />
        );
      })}
    </div>
  );
};

// ───── Sticky-note pill (used for nav + accents) ─────
const StickyPill = ({ children, bg = '#fff3a8', rot = 0, style = {}, ...rest }) => (
  <span style={{
    display: 'inline-block',
    background: bg,
    padding: '6px 14px',
    transform: `rotate(${rot}deg)`,
    boxShadow: '2px 2px 0 rgba(0,0,0,0.14)',
    fontFamily: 'Caveat, cursive',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1,
    color: '#1a1a1a',
    ...style,
  }} {...rest}>{children}</span>
);

Object.assign(window, { Tape, Polaroid, FilmStripCard, PassportStamp, Sparkline, StickyPill });
