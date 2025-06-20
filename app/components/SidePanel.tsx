'use client'

import { useActiveSection } from 'app/hooks/ActiveSelection'


export default function SidePanel() {
  const sections = ['about', 'experience', 'research', 'publications', 'projects']
  const activeSection = useActiveSection(sections)

  console.log('Current active section:', activeSection)


  return (
    <aside className="w-1/3 sticky top-0 h-screen flex flex-col items-center justify-start pt-12 px-8 bg-white dark:bg-black border-r">
      <h1 className="text-4xl font-bold mb-4">Matthew Xie</h1>
      <img src="/me.jpg" className="w-32 h-32 rounded-full mb-6" alt="Profile" />
      <nav className="flex flex-col gap-2 text-sm">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`transition-all px-2 py-1 rounded-md ${
              activeSection === id
                ? 'text-blue-600 font-semibold'
                : 'text-neutral-500'
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </aside>
  )
}
