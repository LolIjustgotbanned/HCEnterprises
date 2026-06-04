import { ImageResponse } from 'next/og'

export const alt = 'HC Enterprises — More Calls. More Customers.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 32 }}>
          <span style={{ fontSize: 56, fontWeight: 800, color: '#D4AF6A', letterSpacing: 2 }}>
            HC
          </span>
          <span style={{ fontSize: 56, fontWeight: 700, color: '#ffffff', marginLeft: 14 }}>
            Enterprises
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: 84, fontWeight: 800, color: '#ffffff', lineHeight: 1.05 }}>
            More Calls.
          </span>
          <span style={{ fontSize: 84, fontWeight: 800, color: '#D4AF6A', lineHeight: 1.05 }}>
            More Customers.
          </span>
        </div>

        {/* Subtitle */}
        <span style={{ fontSize: 28, color: '#a1a1aa', marginTop: 40 }}>
          Websites · CRM · Marketing for Local Businesses
        </span>
      </div>
    ),
    { ...size }
  )
}
