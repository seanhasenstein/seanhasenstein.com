import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { GlobeAltIcon, XMarkIcon } from '@heroicons/react/24/outline';

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  tags?: string[];
  hrefs?: { label: string; url: string }[];
  projectImagesPath?: string;
  totalImages?: number;
};

export default function ProjectModal({
  open,
  onClose,
  title,
  description,
  tags,
  hrefs,
  projectImagesPath,
  totalImages = 0,
}: Props) {
  const images = Array.from(
    { length: totalImages },
    (_, i) => `${projectImagesPath}/${i + 1}.webp`
  );

  if (!open) return null;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/75">
        <Dialog.Panel className="relative overflow-y-auto w-full max-w-[1440px] h-full xl:h-[700px] xl:max-h-[90vh] rounded bg-white shadow-lg pb-14 xl:pt-0 xl:pb-0 px-14 xl:grid xl:grid-cols-[1fr_320px] xl:gap-x-14">
          {/* PROJECT INFO */}
          <div className="pt-14 xl:pt-0 xl:col-start-2 xl:row-start-1">
            <div className="xl:sticky xl:top-14">
              <h3 className="font-bold leading-snug text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-normal text-slate-700">
                {description}
              </p>
              {tags ? (
                <ul className="mt-3 flex flex-wrap">
                  {tags.map(tag => (
                    <li key={tag} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 border border-gray-300 text-gray-950">
                        {tag}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-6">
                {hrefs?.map(({ label, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Visit ${label} (opens in a new tab)`}
                    className="mt-2 inline-block text-sm font-medium leading-tight underline text-gray-900 focus-visible:underline hover:text-blue-800 focus-visible:text-blue-800 transition-colors"
                  >
                    <GlobeAltIcon className="inline-block h-4 w-4 shrink-0 mr-1.5 -mt-0.5" />
                    {label}
                  </a>
                ))}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="absolute top-2.5 right-3.5 xl:top-[-2.5rem] xl:right-[-2.5rem] p-2 flex items-center justify-center"
              >
                <XMarkIcon className="inline-block h-5 w-5 shrink-0 text-gray-500" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          </div>
          {/* GRID IMAGES */}
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6 mt-14 xl:mt-6 xl:mb-6 xl:col-start-1 xl:row-start-1">
            {images.map((src, index) => (
              <div
                className="rounded flex w-full h-auto relative border border-gray-200 shadow-sm box-border select-none"
                key={index}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={2500}
                  height={1375}
                  className="rounded"
                />
              </div>
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
