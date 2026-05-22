// ─────────────────────────────────────────────
// Site sections — Nav, Hero, About, StatusBoard, Career, VisualWork, Contact, Footer
// ─────────────────────────────────────────────

const { Tape, Polaroid, FilmStripCard, PassportStamp, Sparkline, StickyPill } = window;
const useState = React.useState;
const useEffect = React.useEffect;

// ─────── NAV — sticky-note pills ───────
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      padding: '20px 32px',
      background: scrolled ? 'rgba(244, 234, 216, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(8px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
      transition: 'background 0.25s, border-color 0.25s, backdrop-filter 0.25s',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
      }}>
        <a href="#top" style={{
          fontFamily: 'Caveat, cursive', fontSize: 30, fontWeight: 700,
          color: '#1a1a1a', textDecoration: 'none', lineHeight: 1,
        }}>
          hi, i'm jino <span style={{ color: 'var(--accent)' }}>★</span>
        </a>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            ['about',       '#about',        '#fff3a8', -2],
            ['stuff',       '#projects',     '#ffd6d6',  3],
            ['visual work', '#visual',       '#d4f0c5', -1],
            ['hello',       '#contact',      '#cfe6f5',  2],
          ].map(([label, href, bg, rot]) => (
            <a key={href} href={href} style={{ textDecoration: 'none' }}>
              <StickyPill bg={bg} rot={rot} style={{ fontSize: 18 }}>{label}</StickyPill>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// ─────── HERO — collage ───────
const Hero = () => (
  <section id="top" style={{ padding: '40px 32px 80px', position: 'relative' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div className="hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: 40,
        alignItems: 'center',
      }}>
        <div>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 12,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#7d6f5d',
            margin: '0 0 14px',
          }}>
            jinocarlo abad · san jose, ca
          </p>
          <h1 style={{
            fontFamily: 'Caveat, cursive',
            fontSize: 'clamp(56px, 8vw, 96px)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            margin: 0,
            color: '#1a1a1a',
          }}>
            I make<br/>
            <span style={{ color: 'var(--accent)' }}>things</span>,{' '}
            <span style={{ textDecoration: 'underline wavy var(--accent)', textUnderlineOffset: '6px' }}>pictures</span><br/>
            &amp; <span style={{ background: '#fff3a8', padding: '0 14px', display: 'inline-block' }}>reels</span>.
          </h1>
          <p style={{
            fontFamily: 'Lora, Georgia, serif',
            fontSize: 'clamp(17px, 1.4vw, 19px)',
            lineHeight: 1.55,
            color: '#3d342a',
            maxWidth: 460,
            margin: '28px 0 0',
          }}>
            Servers in my closet. Camera on my shoulder. Twenty years figuring it out as I go —
            building the kind of quiet infrastructure most people never see, and making pictures of the
            people who do.
          </p>
          <div style={{ marginTop: 32, display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              background: '#1a1a1a',
              color: '#fefdf9',
              padding: '12px 22px',
              fontFamily: 'Caveat, cursive',
              fontSize: 22,
              fontWeight: 600,
              borderRadius: 3,
              textDecoration: 'none',
              transform: 'rotate(-1deg)',
              display: 'inline-block',
              boxShadow: '3px 3px 0 rgba(0,0,0,0.18)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(-2deg) translateY(-2px)'; e.currentTarget.style.boxShadow = '4px 5px 0 rgba(0,0,0,0.22)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotate(-1deg)'; e.currentTarget.style.boxShadow = '3px 3px 0 rgba(0,0,0,0.18)'; }}
            >say hi →</a>
            <span style={{
              fontFamily: 'Caveat, cursive', fontSize: 20, color: 'var(--accent)',
              transform: 'rotate(2deg)', display: 'inline-block',
            }}>or scroll, no rush</span>
          </div>
        </div>

        <div className="hero-collage" style={{ position: 'relative', height: 460 }}>
          <Tape style={{ position: 'absolute', top: 0, left: '34%', zIndex: 4 }} />
          <Polaroid
            src="waiting.png"
            alt="waiting"
            caption="waiting"
            rotate={-5}
            tape tapeRotate={-3}
            style={{ position: 'absolute', top: 14, left: 0, width: 230, zIndex: 2 }}
            className="hero-pola-1"
          />
          <Polaroid
            src="growth.png"
            alt="growth"
            caption="growth"
            rotate={6}
            tape tapeRotate={4}
            style={{ position: 'absolute', top: 110, right: 0, width: 210, zIndex: 3 }}
            className="hero-pola-2"
          />
          <div className="hero-sticky" style={{
            position: 'absolute',
            bottom: 0, left: 30,
            background: '#fff3a8',
            padding: '14px 18px',
            transform: 'rotate(-3deg)',
            boxShadow: '3px 3px 0 rgba(0,0,0,0.15)',
            maxWidth: 220,
            zIndex: 5,
          }}>
            <div style={{ fontFamily: 'Caveat, cursive', fontSize: 22, fontWeight: 700, marginBottom: 6, lineHeight: 1 }}>currently:</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', fontFamily: 'Caveat, cursive', fontSize: 18, lineHeight: 1.35 }}>
              <li>· brewing coffee</li>
              <li>· wiring a new MCP server</li>
              <li>· fewer screens, more film</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─────── ABOUT — index card ───────
const About = () => (
  <section id="about" style={{ padding: '40px 32px 80px' }}>
    <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative' }}>
      <div style={{
        background: '#fefdf9',
        border: '1.5px solid #1a1a1a',
        padding: '28px 32px',
        boxShadow: '4px 5px 0 rgba(0,0,0,0.15)',
        transform: 'rotate(-0.5deg)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* lined paper */}
        <div style={{
          position: 'absolute', top: 70, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(140, 165, 200, 0.32) 1px, transparent 1px)',
          backgroundSize: '100% 28px',
          pointerEvents: 'none',
        }} />
        {/* red margin line */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 70, width: 1, background: 'rgba(217, 78, 46, 0.28)' }} />

        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: 'Caveat, cursive', fontSize: 32, fontWeight: 700, marginBottom: 16, lineHeight: 1 }}>about me —</div>
          <div style={{ paddingLeft: 56, fontFamily: 'Lora, Georgia, serif', fontSize: 17, lineHeight: 1.65, color: '#1a1a1a' }}>
            <p style={{ margin: 0 }}>
              I'm an infrastructure architect and software engineer with twenty years across the Army's IT corps,
              clinical EHR rollouts, a self-employed studio, and most recently the County of Santa Clara's
              communications team.
            </p>
            <p style={{ margin: '16px 0 0' }}>
              These days I'm deep in the homelab — running thirty-something services on a self-hosted Proxmox
              cluster, building MCP servers for semantic search, and tailing my own status board with morning
              coffee. I document obsessively (107+ decision records and counting).
            </p>
            <p style={{ margin: '16px 0 0' }}>
              The rest of the time I'm behind a camera. Stills, motion, the occasional studio set. Same patience,
              different output.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─────── STATUS BOARD — projects ───────
const SERVICES = [
  { num: '001', slug: 'ai-semantic-search', stack: 'pgvector · MCP · CUDA', up: '99.9%', note: 'rag pipelines that actually work' },
  { num: '002', slug: 'homelab-platform',   stack: 'Proxmox · Traefik · Docker', up: '99.8%', note: '30+ services on bare metal' },
  { num: '003', slug: 'zero-trust-net',     stack: 'WireGuard · Tailscale',      up: '100%',  note: 'nobody gets in unless I say so' },
  { num: '004', slug: 'ci-cd-backup',       stack: 'Forgejo · rclone · PBS',     up: '99.7%', note: 'paranoid backups, every six hours' },
];

const StatusBoard = () => (
  <section id="projects" style={{ padding: '40px 32px 80px' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7d6f5d', margin: 0 }}>
            03 — what I'm building
          </p>
          <h2 style={{ fontFamily: 'Caveat, cursive', fontSize: 'clamp(38px, 5vw, 52px)', fontWeight: 700, lineHeight: 1, margin: '8px 0 0' }}>
            currently humming <span style={{ color: 'var(--accent)' }}>✓</span>
          </h2>
        </div>
        <StickyPill bg="#d4f0c5" rot={2} style={{ fontSize: 18 }}>● all systems happy</StickyPill>
      </div>

      <div style={{ position: 'relative' }}>
        <Tape style={{ position: 'absolute', top: -10, left: 60, transform: 'rotate(-8deg)', zIndex: 3 }} />
        <Tape style={{ position: 'absolute', top: -10, right: 60, transform: 'rotate(8deg)', zIndex: 3 }} />

        <div style={{
          background: '#fefdf9',
          border: '1.5px solid #1a1a1a',
          boxShadow: '5px 6px 0 rgba(0,0,0,0.18)',
          transform: 'rotate(-0.3deg)',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: `
            linear-gradient(rgba(80, 100, 130, 0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(80, 100, 130, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '14px 22px',
            borderBottom: '1.5px solid #1a1a1a',
            background: '#fff3a8',
            fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600,
          }}>
            <span>~/homelab/status.txt</span>
            <span style={{ display: 'flex', gap: 16, color: '#666' }}>
              <span>4 services</span><span>last check 2m ago</span>
            </span>
          </div>

          <div className="status-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {SERVICES.map((s, i) => (
              <div key={s.num} style={{
                padding: '24px 26px',
                borderRight: i % 2 === 0 ? '1.5px solid #1a1a1a' : 'none',
                borderTop: i >= 2 ? '1.5px solid #1a1a1a' : 'none',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: -8, right: -8,
                  width: 32, height: 32,
                  background: '#d4f0c5',
                  border: '1.5px solid #1a1a1a',
                  borderRadius: '50%',
                  boxShadow: '2px 2px 0 rgba(0,0,0,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Caveat, cursive', fontSize: 18, fontWeight: 700,
                  transform: `rotate(${i % 2 === 0 ? -8 : 6}deg)`,
                }} aria-hidden="true">✓</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#666', marginBottom: 6 }}>
                  <span>{s.num}</span><span>UP {s.up}</span>
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 18, fontWeight: 700, color: '#1a1a1a' }}>{s.slug}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#666', marginTop: 2 }}>{s.stack}</div>
                <div style={{ marginTop: 16 }}>
                  <Sparkline seed={i + 1} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: '#999', marginTop: 4 }}>
                    <span>-30d</span><span>now</span>
                  </div>
                </div>
                <div style={{
                  marginTop: 14,
                  fontFamily: 'Caveat, cursive', fontSize: 18, fontStyle: 'italic',
                  color: '#1a1a1a', paddingLeft: 14,
                  borderLeft: '3px solid var(--accent)',
                  lineHeight: 1.3,
                }}>"{s.note}"</div>
              </div>
            ))}
          </div>

          <div style={{
            borderTop: '1.5px solid #1a1a1a',
            background: '#fff3a8',
            padding: '16px 22px',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 8,
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          }}>
            {[['30+', 'services'], ['3', 'mcps'], ['16', 'tailscale nodes'], ['107+', 'ADRs'], ['34.9TB', 'backups']].map(([n, l], i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Caveat, cursive', fontSize: 28, fontWeight: 700, lineHeight: 1 }}>{n}</div>
                <div style={{ color: '#666', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 24, fontFamily: 'Caveat, cursive', fontSize: 18, color: '#7d6f5d' }}>
        ↑ live status · I tail this myself most mornings :)
      </div>
    </div>
  </section>
);

Object.assign(window, { Nav, Hero, About, StatusBoard });
