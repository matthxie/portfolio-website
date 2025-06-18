import Link from 'next/link'

const navItems = {
  '/projects': {
    name: 'projects',
    external: false,
  },
  'https://github.com/matthxie': {
    name: 'github',
    external: true,
  },
  'https://www.linkedin.com/in/mattxie/': {
    name: 'linkedin',
    external: true,
  },
}

export function Navbar() {
  return (
    <aside className="sticky top-0 z-50 px-6 md:px-12 mb-16 tracking-tight">
      <div className="-ml-[8px] flex justify-end">
        <nav className="flex flex-row items-start" id="nav">
          <div className="flex flex-row space-x-2">
            {Object.entries(navItems).map(([path, { name, external }]) => 
              external ? (
                <a
                  key={path}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            )}
          </div>
        </nav>
      </div>
    </aside>
  )
}
