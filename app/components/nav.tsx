import Link from 'next/link'

const navItems = {
  '/': {
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
    <aside className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800 h-16 flex items-center">
      <div className="w-full px-6 md:px-12 flex justify-end">
        <nav className="flex space-x-2">
          {Object.entries(navItems).map(([path, { name, external }]) =>
            external ? (
              <a
                key={path}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2"
              >
                {name}
              </a>
            ) : (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2"
              >
                {name}
              </Link>
            )
          )}
        </nav>
      </div>
    </aside>
  )
}
