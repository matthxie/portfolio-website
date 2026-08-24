'use client'

import { useActiveSection } from 'app/hooks/ActiveSelection'
import SocialIcons from './SocialIcons'


export default function SidePanel() {
    const sections = ['about', 'experience', 'research', 'publications', 'projects']
    const activeSection = useActiveSection(sections)


    return (
        <aside className="w-1/3 sticky top-0 h-screen flex flex-col items-center justify-start pt-12 px-8 bg-white dark:bg-black border-r">
            <h1 className="text-4xl pt-20 font-bold mb-4">Matthew Xie</h1>
            {/* <img
                src={"/media/IMG_2645.png"}
                className="w-30 h-32 rounded-full mb-6"
                alt="Profile"
            /> */}

            <nav className="flex flex-col gap-2 pt-20 text-sm items-center w-full">
            {sections.map((id) => (
                <a
                key={id}
                href={`#${id}`}
                className={`w-40 text-left transition-all px-2 py-1 rounded-md leading-6 ${
                    activeSection === id
                    ? 'text-blue-600 font-semibold text-lg'
                    : 'text-neutral-500 text-base'
                }`}
                >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
            ))}
            </nav>

            <div className="pt-40">
                <SocialIcons />
            </div>
        </aside>
    )
}
