import clsx from 'clsx';

type Props = {
  dates: string;
  title: string;
  company?: string;
  companyUrl?: string;
  description: string;
  tags?: string[];
};

export default function ExperienceItem({
  dates,
  title,
  company,
  companyUrl,
  description,
  tags = [],
}: Props) {
  return (
    <div
      className={clsx(
        'group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 last-of-type:mb-0 mb-16 xl:mb-12',
        {
          'transition-all hover:!opacity-100 group-hover/list:opacity-50':
            !!company && !!companyUrl,
        }
      )}
    >
      {!!company && !!companyUrl ? (
        <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 block group-hover:bg-gray-200/50" />
      ) : null}
      <p className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {dates}
      </p>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-900">
          <a
            href={companyUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Full-Stack Software Engineer at Everdays (opens in a new tab)"
            className={clsx(
              'inline-flex items-baseline font-medium leading-tight text-slate-900 group text-base',
              {
                'hover:text-blue-800 focus-visible:text-blue-800':
                  !!company && !!companyUrl,
              }
            )}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 rounded md:-inset-x-6 md:-inset-y-4 block" />
            <span>
              {title}
              {company && companyUrl ? (
                <>
                  {' '}
                  ·{' '}
                  <span className="inline-block">
                    {company}{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none ml-0 mr-1"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </>
              ) : null}
            </span>
          </a>
        </h3>
        <p className="mt-1.5 text-sm leading-normal">{description}</p>
        {tags.length ? (
          <ul className="mt-2 flex flex-wrap">
            {tags.map(tag => (
              <li key={tag} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 border border-gray-300 text-gray-950">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
