'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
    const [active, setActive] = useState('')

    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
        for (const entry of entries) {
            console.log('Entry:', entry);
            if (entry.isIntersecting) {
                console.log('Active section is now:', entry.target.id)
                setActive(entry.target.id)
                break
            }
        }
        },
        {
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.3,
        }
    )

    sectionIds.forEach((id) => {
        console.log('observing section:', id)

        const el = document.getElementById(id)
        if (el) observer.observe(el)
    })

        return () => observer.disconnect()
  }, [sectionIds])

  return active
}
