import Link from 'next/link'

const navItems = {
  '/projects': {
    name: 'projects',
  },
  '/resume': {
    name: 'experience',
  },
  '/': {
    name: 'contact',
  },
}

export function Navbar() {
  return (
    <aside className="px-6 md:px-12 mb-16 tracking-tight">
      <div className="-ml-[8px] flex justify-end">
        <nav className="flex flex-row items-start" id="nav">
          <div className="flex flex-row space-x-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
