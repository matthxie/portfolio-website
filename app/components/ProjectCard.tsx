interface ProjectCardProps {
    title: string;
    description: string;
    stack: string[];
    githubLink?: string;
    demoLink?: string;
  }
  
  export default function ProjectCard({ title, description, stack, githubLink, demoLink }: ProjectCardProps) {
    return (
      <div className="rounded-2xl border p-4 shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-3 text-gray-500">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {stack.map((tech) => (
            <span key={tech} className="text-xs bg-gray-100 rounded px-2 py-1">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 text-sm">
          {githubLink && <a href={githubLink} className="text-blue-600 hover:underline">GitHub</a>}
          {demoLink && <a href={demoLink} className="text-blue-600 hover:underline">Demo</a>}
        </div>
      </div>
    );
  }
  