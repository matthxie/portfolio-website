interface ProjectCardProps {
    title: string;
    description: string;
    stack: string[];
  }

  export default function ProjectCard({
    title,
    description,
    stack,
  }: ProjectCardProps) {
    return (
        <div className="w-full bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 rounded-2xl p-4 shadow-sm hover:shadow-md">
            <div className="flex flex-col gap-y-2 break-words">

                <div className="flex flex-col gap-y-0.5">
                    <h3 className="text-xl font-semibold">{title}</h3>
                </div>

                <p className="text-base text-gray-600 dark:text-gray-400">{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                {/* {stack.map((tech) => (
                    <span
                    key={tech}
                    className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded px-2 py-1"
                    >
                    {tech}
                    </span>
                ))} */}
                </div>

            </div>
        </div>
      );
  }
