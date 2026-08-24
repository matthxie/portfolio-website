'use client'

import { useActiveSection } from 'app/hooks/ActiveSelection'
import SocialIcons from './SocialIcons'

export default function SidePanel() {
    const sections = ['about', 'experience', 'projects', 'publications']
    const activeSection = useActiveSection(sections)

    return (
        <aside className="hidden lg:flex w-64 shrink-0 sticky top-0 h-screen flex-col justify-center gap-12 px-8 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
            <div className="w-full">
                <nav className="flex flex-col gap-4">
                    {sections.map((id) => {
                        const isActive = activeSection === id
                        return (
                            <a
                                key={id}
                                href={`#${id}`}
                                className={`group flex items-center gap-2.5 text-base transition-colors ${
                                    isActive
                                    ? 'text-neutral-900 dark:text-neutral-100 font-semibold'
                                    : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
                                }`}
                            >
                                <span className={`text-sm font-mono transition-opacity ${
                                    isActive
                                    ? 'opacity-100 text-blue-600 dark:text-blue-400 font-bold'
                                    : 'opacity-0 group-hover:opacity-40'
                                }`}>
                                    &gt;
                                </span>
                                <span>
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </span>
                            </a>
                        )
                    })}
                </nav>
            </div>

            <div className="flex flex-col gap-4">
                <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors w-full"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Resume
                </a>

                <SocialIcons className="justify-center" />
            </div>
        </aside>
    )
}