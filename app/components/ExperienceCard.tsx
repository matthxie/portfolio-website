interface ExperienceCardProps {
    title: string;
    description: string;
    stack: string[];
    date: string;
  }
  
  export default function ExperienceCard({
    title,
    description,
    stack,
    date,
  }: ExperienceCardProps) {
    return (
        <div className="w-full bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 rounded-2xl p-4 shadow-sm hover:shadow-md">
            <div className="flex items-start gap-x-10">

                <div className="w-36 shrink-0 text-sm text-right text-gray-500 dark:text-gray-400 leading-snug">
                    {date}
                </div>

                <div className="flex-1 flex flex-col gap-y-2 break-words">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                    {stack.map((tech) => (
                        <span
                        key={tech}
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded px-2 py-1"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
                
            </div>
        </div>
      );
  }
  