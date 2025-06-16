interface ProjectCardProps {
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
}: ProjectCardProps) {
  return (
    <div className="group [perspective:1000px]">
      <div className="relative h-64 w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 rounded-2xl border p-4 shadow-md backface-hidden bg-white dark:bg-neutral-900">
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

        {/* Back Side */}
        <div className="absolute inset-0 rounded-2xl border p-4 shadow-md bg-gray-100 dark:bg-gray-800 [transform:rotateY(180deg)] backface-hidden">
          <h4 className="text-lg font-semibold mb-2">Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            {githubLink && <a href={githubLink} className="text-blue-600 hover:underline">GitHub</a>}
            {demoLink && <a href={demoLink} className="text-blue-600 hover:underline">Demo</a>}
          </div>
        </div>
      </div>
    </div>
  );
}
