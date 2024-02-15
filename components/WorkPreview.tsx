import Image from 'next/image';
import { LinkIcon } from '../components/Icons';

type Props = {
  title: string;
  description: string;
  domain: string;
  img: string;
  href: string;
  height?: number;
  width?: number;
};

export default function WorkPreview(props: Props) {
  return (
    <li className="group relative flex flex-col items-start">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5">
        <Image
          src={`/${props.img}`}
          alt={`${props.title} logo`}
          height={props.height || 30}
          width={props.width || 30}
        />
      </div>
      <div>
        <h3 className="mt-6 text-base font-bold text-gray-800">
          <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-200/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6" />
          <a href={props.href} target="_blank" rel="noreferrer">
            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
            <span className="relative z-10">{props.title}</span>
          </a>
        </h3>
        <p className="relative z-10 mt-2 text-gray-600">{props.description}</p>
        <div className="relative z-10 mt-6 flex items-center text-sm font-medium text-gray-400 transition group-hover:text-blue-800 group-hover:underline">
          <LinkIcon />
          <span className="ml-2">{props.domain}</span>
        </div>
      </div>
    </li>
  );
}
