const COMPANIES = ['Vercel', 'Supabase', 'PlanetScale', 'Prisma', 'Grafana', 'Shopify', 'Netlify'];

export default function Companies() {
  return (
    <div id="companies" style={{ padding: '60px 32px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: '11px', fontWeight: 500,
          letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink3)',
          marginBottom: '28px', display: 'block',
        }}>
          Repos from teams at
        </span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
          {COMPANIES.map(c => (
            <div key={c} style={{
              fontFamily: "'Syne', sans-serif", fontSize: '15px', fontWeight: 800,
              color: 'rgba(26,24,20,0.25)', letterSpacing: '-0.01em',
              cursor: 'pointer', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--ink)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(26,24,20,0.25)'}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
