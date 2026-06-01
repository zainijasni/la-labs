'use client'

interface LogoProps {
  size?: number
}

export default function LaLabsLogo({ size = 72 }: LogoProps) {
  return (
    <img
      src="/logo-la-labs.png"
      alt="La Labs"
      style={{
        height: size,
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
      }}
    />
  )
}
