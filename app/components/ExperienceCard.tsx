interface ExperienceLink {
  label: string;
  url: string;
}

interface ExperienceCardProps {
  title: string;
  company?: string;
  description: string;
  stack: string[];
  date: string;
  links?: ExperienceLink[];
}

export default function ExperienceCard({
  title,
  company,
  description,
  stack,
  date,
  links,
}: ExperienceCardProps) {
  return (
    <div className="relative z-10 w-full bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50 transition-all duration-200 rounded-2xl p-5 shadow-xs hover:shadow-sm">
      <div className="flex flex-col gap-y-2 break-words">
        <div className="flex flex-col gap-y-0.5">
          <h3 className="text-xl font-semibold">{title}</h3>
          {company && (
            <p className="text-base font-medium text-blue-600 dark:text-blue-400">{company}</p>
          )}
          <p className="text-base text-gray-500 dark:text-gray-400 leading-snug">{date}</p>
        </div>

        {description && (
          <p className="text-base text-gray-600 dark:text-gray-400">{description}</p>
        )}

        {links && links.length > 0 && (
          <div className="flex flex-col gap-1.5 mt-1">
            {links.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline w-fit"
              >
                <span>{item.label}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
