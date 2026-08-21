const BRANDS: { name: string; slug: string }[] = [
  { name: 'Razorpay',      slug: 'razorpay'     },
  { name: 'Meesho',        slug: 'meesho'        },
  { name: 'Nykaa',         slug: 'nykaa'         },
  { name: 'Lenskart',      slug: 'lenskart'      },
  { name: 'boAt',          slug: 'boat'          },
  { name: 'Mamaearth',     slug: 'mamaearth'     },
  { name: 'Groww',         slug: 'groww'         },
  { name: 'Urban Company', slug: 'urbancompany'  },
  { name: 'Wakefit',       slug: 'wakefit'       },
  { name: 'Cashfree',      slug: 'cashfree'      },
  { name: 'Spinny',        slug: 'spinny'        },
  { name: 'CRED',          slug: 'cred'          },
  { name: 'Chumbak',       slug: 'chumbak'       },
  { name: 'Dot & Key',     slug: 'dotandkey'     },
  { name: 'IndiaMart',     slug: 'indiamart'     },
  { name: 'mCaffeine',     slug: 'mcaffeine'     },
  { name: 'WOW Skin',      slug: 'wowskin'       },
  { name: 'Bewakoof',      slug: 'bewakoof'      },
  { name: 'Senco Gold',    slug: 'sencogold'     },
  { name: 'Plum',          slug: 'plum'          },
  { name: 'LBB',           slug: 'lbb'           },
  { name: 'PC Chandra',    slug: 'pcchandra'     },
]

const TRACK = [...BRANDS, ...BRANDS]

export function BrandStrip() {
  return (
    <section
      aria-label="Brands we have collaborated with"
      style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '52px 0 44px',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes brand-roll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .brand-strip-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: brand-roll 60s linear infinite;
        }
        .brand-strip-wrap:hover .brand-strip-track {
          animation-play-state: paused;
        }
        .brand-strip-tile {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 0 28px;
          flex-shrink: 0;
          cursor: default;
          transition: opacity 0.2s;
        }
        .brand-strip-tile:hover { opacity: 0.7; }

        .brand-strip-logo-wrap {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        [data-theme="light"] .brand-strip-logo-wrap {
          background: rgba(0,0,0,0.05);
        }
        .brand-strip-logo {
          width: 30px;
          height: 30px;
          object-fit: contain;
          display: block;
        }
        .brand-strip-name {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.02em;
          white-space: nowrap;
          color: var(--color-text-3, rgba(120,140,170,0.7));
          line-height: 1;
        }
        .brand-strip-accent {
          color: #D4A017;
          font-style: normal;
        }
        [data-theme="light"] .brand-strip-accent {
          color: var(--color-teal);
        }
      `}</style>

      {/* Section heading */}
      <div style={{ padding: '0 var(--page-padding, 24px)', marginBottom: '32px' }}>
        <p style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.13em',
          textTransform: 'uppercase',
          color: 'var(--color-teal)',
          marginBottom: '8px',
        }}>
          Our network
        </p>
        <h2 style={{
          fontSize: 'clamp(16px, 1.5vw, 20px)',
          fontWeight: 700,
          letterSpacing: '-0.3px',
          whiteSpace: 'nowrap',
          color: 'var(--color-text-1)',
          margin: 0,
        }}>
          Brands we have{' '}
          <em className="brand-strip-accent">collaborated</em>
          {' '}with
        </h2>
      </div>

      {/* Scrolling logo strip */}
      <div
        className="brand-strip-wrap"
        style={{
          overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        }}
      >
        <div className="brand-strip-track">
          {TRACK.map((brand, i) => (
            <span key={i} className="brand-strip-tile">
              <span className="brand-strip-logo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/brands/${brand.slug}.png`}
                  alt={brand.name}
                  width={30}
                  height={30}
                  className="brand-strip-logo"
                  loading="eager"
                  decoding="async"
                />
              </span>
              <span className="brand-strip-name">{brand.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
