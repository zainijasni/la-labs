'use client'

interface LogoProps {
  size?: number
  showText?: boolean
  darkText?: boolean
}

export default function LaLabsLogo({ size = 48, showText = true, darkText = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer hexagon frame */}
        <path
          d="M60 8 L100 30 L100 75 L60 97 L20 75 L20 30 Z"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="3"
        />
        {/* Inner bracket left */}
        <path
          d="M30 25 L18 25 L18 95 L30 95"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Inner bracket right */}
        <path
          d="M90 25 L102 25 L102 95 L90 95"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Network nodes */}
        <circle cx="60" cy="38" r="5" fill="white" />
        <circle cx="42" cy="58" r="4" fill="rgba(255,150,220,0.9)" />
        <circle cx="78" cy="58" r="4" fill="rgba(255,150,220,0.9)" />
        <circle cx="50" cy="78" r="4" fill="rgba(255,180,230,0.8)" />
        <circle cx="70" cy="78" r="4" fill="rgba(255,180,230,0.8)" />
        <circle cx="60" cy="62" r="3" fill="rgba(255,200,240,0.9)" />
        {/* Network lines */}
        <line x1="60" y1="38" x2="42" y2="58" stroke="rgba(255,180,220,0.7)" strokeWidth="1.5" />
        <line x1="60" y1="38" x2="78" y2="58" stroke="rgba(255,180,220,0.7)" strokeWidth="1.5" />
        <line x1="42" y1="58" x2="60" y2="62" stroke="rgba(255,180,220,0.7)" strokeWidth="1.5" />
        <line x1="78" y1="58" x2="60" y2="62" stroke="rgba(255,180,220,0.7)" strokeWidth="1.5" />
        <line x1="60" y1="62" x2="50" y2="78" stroke="rgba(255,180,220,0.7)" strokeWidth="1.5" />
        <line x1="60" y1="62" x2="70" y2="78" stroke="rgba(255,180,220,0.7)" strokeWidth="1.5" />
        <line x1="42" y1="58" x2="50" y2="78" stroke="rgba(255,180,220,0.5)" strokeWidth="1" />
        <line x1="78" y1="58" x2="70" y2="78" stroke="rgba(255,180,220,0.5)" strokeWidth="1" />
      </svg>

      {showText && (
        <div>
          <div
            className="font-extrabold leading-none"
            style={{
              fontSize: size * 0.5,
              color: darkText ? '#A8005C' : 'white',
              letterSpacing: '-0.02em',
            }}
          >
            La Labs
          </div>
          <div
            className="font-medium tracking-widest uppercase"
            style={{
              fontSize: size * 0.16,
              color: darkText ? '#A8005C' : 'rgba(255,255,255,0.75)',
              letterSpacing: '0.15em',
            }}
          >
            Innovation Connected
          </div>
        </div>
      )}
    </div>
  )
}
