import { useState } from 'react';

interface FlipCardProps {
  title: string;
  description: string;
  stack: string[];
  githubLink?: string;
  demoLink?: string;
}

export default function ProjectCard({
  title,
  description,
  stack,
  githubLink,
  demoLink,
}: FlipCardProps) {
  return (
    <div className="relative group w-full h-64 rounded-2xl border p-4 shadow-md overflow-hidden bg-white dark:bg-neutral-900">
      {/* Front content */}
      <div className="z-10 relative">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-3 text-gray-500">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {stack.map((tech) => (
            <span key={tech} className="text-xs bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Sliding overlay panel (drops down) */}
      <div
        className="absolute inset-0 bg-white dark:bg-neutral-900 z-20 px-4 py-6 px-4 py-6 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-out group-hover:delay-100 rounded-2xl shadow-inner"
        style={{
          transitionTimingFunction: 'cubic-bezier(0.12, 1, 0.36, 1)'
        }}
      >
        <div className="flex flex-col items-start gap-2 text-sm">
          <p className="text-base font-medium mb-2">Links</p>
          {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>}
          {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Demo</a>}
        </div>
      </div>
    </div>
  );
}
