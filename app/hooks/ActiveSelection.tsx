'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
    const [active, setActive] = useState('')
    const key = sectionIds.join(',')

    useEffect(() => {
        const ids = key.split(',')
        let frame = 0

        const update = () => {
            frame = 0
            const line = window.innerHeight / 3
            let current = ''

            for (const id of ids) {
                const el = document.getElementById(id)
                if (!el) continue

                const { top, bottom } = el.getBoundingClientRect()
                if (top <= line && bottom > line) {
                    current = id
                    break
                }
                if (top <= line) current = id
            }

            setActive(current)
        }

        const onScroll = () => {
            if (frame) return
            frame = requestAnimationFrame(update)
        }

        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)

        return () => {
            if (frame) cancelAnimationFrame(frame)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [key])

    return active
}
