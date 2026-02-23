import { TICKER_ITEMS } from '@/lib/data';

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{
      background: 'var(--ink)', color: 'rgba(255,255,255,0.7)',
      padding: '10px 0', overflow: 'hidden',
      fontSize: '11px', letterSpacing: '0.08em',
    }}>
      <div className="animate-ticker" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            padding: '0 28px', display: 'inline-flex', alignItems: 'center', gap: '20px',
          }}>
            {item}
            <span style={{ color: 'var(--green-mid)', fontSize: '7px', opacity: 0.5 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
