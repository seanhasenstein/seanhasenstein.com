import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid';

type Props = {
  title: string;
  description: string;
  featuredImg: string;
  tags: string[];
  handleOpenModal: () => void;
};

export default function FreelanceProject({
  title,
  description,
  featuredImg,
  tags,
  handleOpenModal,
}: Props) {
  return (
    <button
      type="button"
      onClick={handleOpenModal}
      className="group relative flex flex-col md:flex-row-reverse gap-6 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 text-left"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-200/50" />
      <div className="z-10">
        <h3 className="font-medium leading-snug text-slate-900">
          <span className="inline-flex items-baseline font-medium leading-tight text-slate-900 group text-base hover:text-blue-800 focus-visible:text-blue-800">
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            {title}
            <ArrowTopRightOnSquareIcon
              className="inline-block h-4 w-4 shrink-0 lg:transition-transform lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none ml-1 mr-1 pt-px"
              aria-hidden="true"
            />
          </span>
        </h3>
        <p className="mt-1.5 text-sm leading-normal text-slate-700">
          {description}
        </p>
        {tags ? (
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
      <div>
        <div className="p-0.5 w-44 flex bg-white border border-gray-200 rounded shadow-sm">
          <Image src={featuredImg} alt={title} width={500} height={275} />
        </div>
      </div>
    </button>
  );
}
