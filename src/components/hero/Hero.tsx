'use client';

interface HeroProps {
  onBrowse: () => void;
  onPortfolio: () => void;
}

export default function Hero({ onBrowse, onPortfolio }: HeroProps) {
  return (
    <section style={{
      padding: '80px 32px 72px',
      maxWidth: '1200px', margin: '0 auto',
      display: 'grid', gridTemplateColumns: '1fr 480px', gap: '80px', alignItems: 'center',
    }}>
      <div>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: '11px', fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--green)', background: 'var(--green-light)',
          border: '1px solid rgba(26,122,74,0.2)',
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '5px 12px', borderRadius: '20px', marginBottom: '28px',
        }}>
          <div className="animate-pulse-dot" style={{ width: '6px', height: '6px', background: 'var(--green)', borderRadius: '50%' }} />
          1,847 open issues today
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(40px, 5vw, 62px)',
          fontWeight: 800, lineHeight: 1.05, marginBottom: '22px', color: 'var(--ink)',
          letterSpacing: '-0.02em',
        }}>
          Your first OSS<br />contribution,<br />
          <em style={{ fontStyle: 'italic', fontFamily: "'Instrument Serif', serif", fontWeight: 400, color: 'var(--green)' }}>
            curated.
          </em>
        </h1>

        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: '15px',
          color: 'var(--ink3)', lineHeight: 1.75, marginBottom: '36px', maxWidth: '520px',
        }}>
          Stop scrolling GitHub for hours. We surface quality &ldquo;good first issues&rdquo; filtered by language, difficulty, and repo health — then help you turn contributions into a portfolio that gets you hired.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <a href="#board" onClick={onBrowse} style={{
            fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: 700,
            color: '#fff', background: 'var(--ink)', border: 'none',
            padding: '13px 28px', borderRadius: '8px', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none',
            transition: 'all 0.2s', letterSpacing: '0.01em',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = 'var(--green)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'var(--ink)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}>
            Browse Issues →
          </a>
          <a href="#portfolio" onClick={onPortfolio} style={{
            fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: 600,
            color: 'var(--ink)', background: 'transparent', border: '1.5px solid var(--border-strong)',
            padding: '13px 28px', borderRadius: '8px', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none',
            transition: 'all 0.2s',
          }}>
            See Portfolio Builder
          </a>
        </div>

        <div style={{ display: 'flex', gap: '32px' }}>
          {[
            { num: '12,400+', label: 'issues curated' },
            { num: '3,800+', label: 'devs placed' },
            { num: '890+', label: 'quality repos' },
          ].map(stat => (
            <div key={stat.label}>
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '26px', fontWeight: 800, color: 'var(--ink)', display: 'block', lineHeight: 1 }}>
                {stat.num}
              </span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: 'var(--ink3)', marginTop: '4px', display: 'block' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal Visual */}
      <div className="animate-slide-in" style={{
        background: 'var(--ink)', borderRadius: '12px',
        boxShadow: 'var(--shadow-lg)', overflow: 'hidden',
        fontFamily: "'DM Mono', monospace", fontSize: '12.5px',
      }}>
        <div style={{ background: '#2A2724', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }} />
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginLeft: 'auto', marginRight: 'auto' }}>
            firstissue.xyz — bash
          </div>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
            <span style={{ color: 'var(--green-mid)' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.85)' }}>firstissue find --lang=python --level=beginner</span>
          </div>
          <div style={{ marginBottom: '8px', color: 'rgba(255,255,255,0.6)' }}>Scanning 890 curated repositories...</div>
          <div style={{ marginBottom: '12px', color: 'rgba(255,255,255,0.6)' }}>✓ Found 47 matching issues</div>

          {[
            { title: '⬡ Add type hints to utils module', repo: 'fastapi/fastapi · ★ 73.4k · open 3 days' },
            { title: '⬡ Fix pagination in list view', repo: 'tiangolo/sqlmodel · ★ 14.2k · open 1 day' },
          ].map((issue, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '6px', padding: '12px 14px', marginBottom: '8px',
            }}>
              <div style={{ color: '#63B3ED', fontWeight: 500, marginBottom: '4px' }}>{issue.title}</div>
              <div style={{ marginBottom: '4px' }}>
                {['beginner', 'python', 'good-first-issue'].map(tag => (
                  <span key={tag} style={{
                    display: 'inline-block', padding: '1px 7px', borderRadius: '3px',
                    fontSize: '10px', marginRight: '4px',
                    background: tag === 'beginner' ? 'rgba(39,201,63,0.15)' : tag === 'python' ? 'rgba(99,179,237,0.15)' : 'rgba(255,189,46,0.15)',
                    color: tag === 'beginner' ? '#27C93F' : tag === 'python' ? '#63B3ED' : '#FFBD2E',
                  }}>{tag}</span>
                ))}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px' }}>{issue.repo}</div>
            </div>
          ))}

          <div style={{ marginTop: '12px', display: 'flex', gap: '10px' }}>
            <span style={{ color: 'var(--green-mid)' }}>›</span>
            <span className="animate-blink" style={{ display: 'inline-block', width: '8px', height: '14px', background: 'var(--green-mid)', verticalAlign: 'middle' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
