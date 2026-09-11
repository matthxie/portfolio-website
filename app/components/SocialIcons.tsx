'use client'

import { SiGithub, SiLinkedin } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { track } from '@vercel/analytics'

export default function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href="https://github.com/matthxie"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        onClick={() => track('GitHub Click')}
        className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
      >
        <SiGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/mattxie/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        onClick={() => track('LinkedIn Click')}
        className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
      >
        <SiLinkedin size={24} />
      </a>
      <a
        href="mailto:mattx180@gmail.com"
        aria-label="Email"
        onClick={() => track('Email Click')}
        className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
      >
        <MdEmail size={24} />
      </a>
    </div>
  )
}
