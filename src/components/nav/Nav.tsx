'use client';
import { useState, useEffect } from 'react';

interface NavProps {
  onSignIn: () => void;
  onGetStarted: () => void;
}

export default function Nav({ onSignIn, onGetStarted }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('board');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 200,
      background: scrolled ? 'rgba(242,240,235,0.95)' : 'rgba(242,240,235,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px', height: '56px',
      transition: 'background 0.2s',
    }}>
      <a href="#" style={{
        fontFamily: "'Syne', sans-serif", fontSize: '17px', fontWeight: 800,
        color: 'var(--ink)', textDecoration: 'none',
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <div className="animate-pulse-dot" style={{
          width: '8px', height: '8px', background: 'var(--green)', borderRadius: '50%',
        }} />
        FirstIssue
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {[
          { label: 'Browse Issues', href: '#board', id: 'board' },
          { label: 'Portfolio Builder', href: '#portfolio', id: 'portfolio' },
          { label: 'Pricing', href: '#pricing', id: 'pricing' },
          { label: 'For Companies', href: '#companies', id: 'companies' },
        ].map(link => (
          <a
            key={link.id}
            href={link.href}
            onClick={() => setActiveSection(link.id)}
            style={{
              fontFamily: "'DM Mono', monospace", fontSize: '12px', fontWeight: 500,
              color: activeSection === link.id ? 'var(--bg)' : 'var(--ink3)',
              textDecoration: 'none', padding: '6px 14px', borderRadius: '6px',
              background: activeSection === link.id ? 'var(--ink)' : 'transparent',
              transition: 'background 0.15s, color 0.15s',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={onSignIn} style={{
          fontFamily: "'DM Mono', monospace", fontSize: '12px', fontWeight: 500,
          color: 'var(--ink2)', background: 'transparent', border: '1px solid var(--border-strong)',
          padding: '7px 16px', borderRadius: '6px', cursor: 'pointer',
        }}>
          Sign in
        </button>
        <button onClick={onGetStarted} style={{
          fontFamily: "'DM Mono', monospace", fontSize: '12px', fontWeight: 500,
          color: '#fff', background: 'var(--ink)', border: 'none',
          padding: '8px 18px', borderRadius: '6px', cursor: 'pointer',
        }}>
          Get started free →
        </button>
      </div>
    </nav>
  );
}
