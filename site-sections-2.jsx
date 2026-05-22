// ─────────────────────────────────────────────
// Site sections part 2 — Career (passport stamps), VisualWork (tabs), Contact, Footer
// ─────────────────────────────────────────────

const { Polaroid: P2, FilmStripCard: FSC, PassportStamp: Stamp, Tape: T2, StickyPill: Pill } = window;

// ─────── CAREER — passport stamps ───────
const STAMPS = [
  { y: '2004', co: 'U.S. Army',     r: 'IT Specialist',   color: '#d94e2e', rot: -8, variant: 'star',    desc: 'Eight years in the Reserve. Network ops and service desk supporting 80,000+ personnel during Operation Iraqi Freedom.' },
  { y: '2010', co: 'abadimage',     r: 'Self-employed',   color: '#2a6fdb', rot:  5, variant: 'plane',   desc: 'Fourteen years of independent content work — 500+ projects, mostly photo + video, mostly word-of-mouth.' },
  { y: '2013', co: 'Providence',    r: 'Desktop Support', color: '#1f8a5b', rot: -3, variant: 'circle',  desc: 'EPIC EHR rollout across five medical centers. Deployed 300+ workstations on schedule.' },
  { y: '2019', co: 'Balsam Brands', r: 'Video Lead',      color: '#a04e9c', rot:  8, variant: 'diamond', desc: 'Produced 200+ marketing videos driving 2M+ annual impressions. Built a remote production workflow for 15+ collaborators.' },
  { y: '2024', co: 'SC County',     r: 'Communications',  color: '#c97d1a', rot: -5, variant: 'bars',    desc: 'Communications associate at the County of Santa Clara — 50+ assets reaching 1.8M residents, 35% engagement lift.' },
  { y: '2026', co: 'next?',         r: 'open to it',      color: '#1a1a1a', rot:  3, variant: 'dots',    desc: 'Open to software engineering, AI/ML, and creative production roles. Remote-ready. Say hi.' },
];

const Career = () => (
  <section id="career" style={{ padding: '40px 32px 80px' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ marginBottom: 32 }}>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7d6f5d', margin: 0 }}>
          04 — career
        </p>
        <h2 style={{ fontFamily: 'Caveat, cursive', fontSize: 'clamp(38px, 5vw, 52px)', fontWeight: 700, lineHeight: 1, margin: '8px 0 4px' }}>
          places I've been —
        </h2>
        <p style={{ fontFamily: 'Lora, serif', fontSize: 17, color: '#3d342a', margin: 0 }}>
          twenty years, six stamps. hover one for the story.
        </p>
      </div>

      <div className="stamps-row" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
        gap: 16,
        marginBottom: 28,
        justifyItems: 'center',
        alignItems: 'center',
      }}>
        {STAMPS.map((s) => (
          <Stamp key={s.y} year={s.y} company={s.co} role={s.r} color={s.color} rotate={s.rot} variant={s.variant} />
        ))}
      </div>

      <div className="stamps-stories" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {STAMPS.map((s) => (
          <div key={s.y} style={{
            background: 'rgba(254, 253, 249, 0.55)',
            border: '1px dashed rgba(0,0,0,0.18)',
            padding: '14px 16px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 700, color: s.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.co}</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#7d6f5d' }}>{s.y}</span>
            </div>
            <div style={{ fontFamily: 'Lora, serif', fontSize: 14, lineHeight: 1.55, color: '#3d342a' }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─────── VISUAL WORK — tabs ───────
const STILLS = [
  { src: 'sakura.png',       cap: 'sakura' },
  { src: 'kirei.png',        cap: 'kirei' },
  { src: 'snow.png',         cap: 'snow' },
  { src: 'waves.png',        cap: 'waves' },
  { src: 'upinthesky.png',   cap: 'up in the sky' },
  { src: 'shoes.png',        cap: 'shoes' },
  { src: 'plantlife.png',    cap: 'plantlife' },
  { src: 'tunnelvision.png', cap: 'tunnel vision' },
  { src: 'lightsout.png',    cap: 'lights out' },
];

const MOTION = [
  { src: 'rushhour.png',   title: 'rush hour',   runtime: '0:42', meta: 'Balsam · 2022',    rot: -3 },
  { src: 'slowmotion.png', title: 'slow motion', runtime: '1:08', meta: 'Balsam · 2021',    rot:  2 },
  { src: 'peekaboo.png',   title: 'peekaboo',    runtime: '0:28', meta: 'abadimage · 2022', rot: -2 },
  { src: 'castle.png',     title: 'castle',      runtime: '2:14', meta: 'abadimage · 2020', rot:  3 },
  { src: 'junkadelic.png', title: 'junkadelic',  runtime: '3:36', meta: 'self · 2023',      rot: -1.5 },
  { src: 'scale.png',      title: 'scale',       runtime: '0:30', meta: 'Balsam · 2023',    rot:  1.5 },
];

const VisualWork = () => {
  const [tab, setTab] = React.useState('stills');

  return (
    <section id="visual" style={{ padding: '40px 32px 80px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7d6f5d', margin: 0 }}>
              05 — visual work
            </p>
            <h2 style={{ fontFamily: 'Caveat, cursive', fontSize: 'clamp(38px, 5vw, 52px)', fontWeight: 700, lineHeight: 1, margin: '8px 0 0' }}>
              through the lens ✶
            </h2>
          </div>
          <p style={{ fontFamily: 'Caveat, cursive', fontSize: 20, color: '#7d6f5d', margin: 0 }}>two formats, one wall</p>
        </div>

        {/* Tabs */}
        <div role="tablist" aria-label="Visual work" style={{ display: 'flex', gap: 12, marginBottom: 36, flexWrap: 'wrap' }}>
          <button
            role="tab"
            aria-selected={tab === 'stills'}
            onClick={() => setTab('stills')}
            style={{
              border: 'none', cursor: 'pointer',
              background: '#fff3a8',
              padding: '10px 22px',
              transform: `rotate(${tab === 'stills' ? -2 : -1}deg) scale(${tab === 'stills' ? 1.04 : 1})`,
              boxShadow: tab === 'stills' ? '3px 4px 0 rgba(0,0,0,0.2)' : '2px 2px 0 rgba(0,0,0,0.1)',
              fontFamily: 'Caveat, cursive', fontSize: 22, fontWeight: 700,
              opacity: tab === 'stills' ? 1 : 0.65,
              transition: 'transform 0.25s, box-shadow 0.25s, opacity 0.25s',
            }}
          >
            ◉ stills <span style={{ color: '#7d6f5d', fontSize: 16 }}>({STILLS.length})</span>
          </button>
          <button
            role="tab"
            aria-selected={tab === 'motion'}
            onClick={() => setTab('motion')}
            style={{
              border: 'none', cursor: 'pointer',
              background: '#ffd6d6',
              padding: '10px 22px',
              transform: `rotate(${tab === 'motion' ? 2 : 1.5}deg) scale(${tab === 'motion' ? 1.04 : 1})`,
              boxShadow: tab === 'motion' ? '3px 4px 0 rgba(0,0,0,0.2)' : '2px 2px 0 rgba(0,0,0,0.1)',
              fontFamily: 'Caveat, cursive', fontSize: 22, fontWeight: 700,
              opacity: tab === 'motion' ? 1 : 0.65,
              transition: 'transform 0.25s, box-shadow 0.25s, opacity 0.25s',
            }}
          >
            ▶ motion <span style={{ color: '#7d6f5d', fontSize: 16 }}>({MOTION.length})</span>
          </button>
          <div style={{ alignSelf: 'center', fontFamily: 'Caveat, cursive', fontSize: 18, color: '#7d6f5d' }}>
            ← tap to switch
          </div>
        </div>

        {/* Stills */}
        {tab === 'stills' && (
          <div style={{ animation: 'fadeIn 0.4s ease' }}>
            <div className="polaroid-wall" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: 32,
              padding: '20px 8px',
            }}>
              {STILLS.map((s, i) => (
                <Polaroid
                  key={i}
                  src={s.src}
                  caption={s.cap}
                  alt={s.cap}
                  rotate={[-4, 5, -2, 6, -5, 3, -3, 7, -4][i % 9]}
                  tape tapeRotate={[3, -2, 4, -3, 2, -4, 3, -2, 4][i % 9]}
                />
              ))}
            </div>
          </div>
        )}

        {/* Motion */}
        {tab === 'motion' && (
          <div style={{ animation: 'fadeIn 0.4s ease' }}>
            <div className="film-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 28,
              padding: '20px 8px',
            }}>
              {MOTION.map((m, i) => (
                <FilmStripCard key={i} {...m} />
              ))}
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href="#" style={{
            background: '#1a1a1a',
            color: '#fefdf9',
            padding: '12px 22px',
            fontFamily: 'Caveat, cursive',
            fontSize: 22, fontWeight: 600,
            borderRadius: 3,
            textDecoration: 'none',
            transform: 'rotate(-1deg)',
            display: 'inline-block',
            boxShadow: '3px 3px 0 rgba(0,0,0,0.18)',
          }}>see all visual work →</a>
        </div>
      </div>
    </section>
  );
};

// ─────── CONTACT — letter ───────
const Contact = () => (
  <section id="contact" style={{ padding: '40px 32px 80px' }}>
    <div style={{ maxWidth: 720, margin: '0 auto' }}>
      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7d6f5d', margin: '0 0 14px', textAlign: 'center' }}>
        06 — say hi
      </p>
      <div style={{
        background: '#fefdf9',
        border: '1.5px solid #1a1a1a',
        padding: 'clamp(28px, 4vw, 44px)',
        boxShadow: '5px 6px 0 rgba(0,0,0,0.16)',
        transform: 'rotate(0.4deg)',
        fontFamily: 'Lora, serif',
        fontSize: 18,
        lineHeight: 1.7,
        position: 'relative',
      }}>
        <h2 style={{ fontFamily: 'Caveat, cursive', fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 700, margin: 0, lineHeight: 1 }}>
          let's talk.
        </h2>
        <p style={{ margin: '18px 0 4px' }}>
          Open to software engineering, AI/ML, and creative production work — full-time, contract, or
          collaboration. Based in San Jose, available remote.
        </p>
        <div style={{ marginTop: 24, display: 'grid', gap: 10 }}>
          {[
            ['email',    'jino@abadimage.com',                  'mailto:jino@abadimage.com'],
            ['linkedin', 'linkedin.com/in/jinocarloabad',       'https://www.linkedin.com/in/jinocarloabad'],
            ['github',   'github.com/abadimage',                'https://github.com/abadimage'],
            ['site',     'abadimage.com',                       'https://www.abadimage.com'],
          ].map(([label, val, href]) => (
            <a key={label} href={href} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              padding: '10px 0',
              borderBottom: '1px dashed rgba(0,0,0,0.3)',
              textDecoration: 'none',
              color: '#1a1a1a',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
            >
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#7d6f5d' }}>{label}</span>
              <span style={{ fontFamily: 'Lora, serif', fontSize: 17 }}>{val} →</span>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 28, fontFamily: 'Caveat, cursive', fontSize: 24, fontStyle: 'italic', color: '#7d6f5d', textAlign: 'right' }}>
          —— jino, from san jose
        </div>
        <div style={{ marginTop: 8, textAlign: 'right', fontSize: 30, color: 'var(--accent)' }} aria-hidden="true">✦</div>
      </div>
    </div>
  </section>
);

// ─────── FOOTER ───────
const Footer = () => (
  <footer style={{
    padding: '32px',
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
    color: '#7d6f5d',
    textAlign: 'center',
    borderTop: '1px dashed rgba(0,0,0,0.2)',
  }}>
    <div>© 2026 jinocarlo abad · built by hand · no analytics, no tracking</div>
  </footer>
);

Object.assign(window, { Career, VisualWork, Contact, Footer });
