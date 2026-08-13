import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Atomeric — AI-Native Growth Studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // Geist TTF ships with @vercel/og inside next — no network needed
  const syneFont = await readFile(
    join(process.cwd(), 'node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf')
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#060C18',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Blueprint grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(13,191,173,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(13,191,173,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Corner accent lines */}
        <div
          style={{
            position: 'absolute',
            top: 48,
            left: 48,
            width: 40,
            height: 40,
            borderTop: '1.5px solid rgba(13,191,173,0.4)',
            borderLeft: '1.5px solid rgba(13,191,173,0.4)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            right: 48,
            width: 40,
            height: 40,
            borderBottom: '1.5px solid rgba(13,191,173,0.4)',
            borderRight: '1.5px solid rgba(13,191,173,0.4)',
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            display: 'flex',
            fontSize: 96,
            fontFamily: 'Geist',
            fontWeight: 400,
            letterSpacing: '-4px',
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          <span style={{ color: '#E8F0FA' }}>atom</span>
          <span style={{ color: '#D4A843' }}>eric</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: 'Geist',
            fontSize: 18,
            fontWeight: 400,
            color: '#7B9CC0',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          AI-Native Growth Studio
        </div>

        {/* Teal accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(90deg, transparent 0%, #0DBFAD 50%, transparent 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Geist',
          data: syneFont,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}
