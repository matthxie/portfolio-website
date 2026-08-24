'use client'

import { useEffect, useRef } from 'react'

export default function Spotlight() {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (divRef.current) {
        divRef.current.style.setProperty('--mouse-x', `${e.clientX}px`)
        divRef.current.style.setProperty('--mouse-y', `${e.clientY}px`)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={divRef}
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        backgroundImage: `
          radial-gradient(320px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(59, 130, 246, 0.22), transparent 80%),
          radial-gradient(rgba(59, 130, 246, 0.5) 1.2px, transparent 1.2px)
        `,
        backgroundSize: 'auto, 24px 24px',
        WebkitMaskImage: 'radial-gradient(320px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black 0%, transparent 80%)',
        maskImage: 'radial-gradient(320px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black 0%, transparent 80%)',
      }}
    />
  )
}
