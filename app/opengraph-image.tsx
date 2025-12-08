import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Minh Doan - Contemporary Artist'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          gap: '20px',
        }}
      >
        <div style={{ fontWeight: 'bold', letterSpacing: '-0.05em' }}>
          Minh Doan
        </div>
        <div style={{ fontSize: 48, fontWeight: 'normal', opacity: 0.9 }}>
          Contemporary Artist
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
