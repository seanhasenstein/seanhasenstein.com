import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import clsx from 'clsx';
import {
  GlobeAltIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

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
  const [shouldRender, setShouldRender] = useState(false);
  const [imageColumns, setImageColumns] = useState(2);
  const [clickedImageIndex, setClickedImageIndex] = useState<number | null>(
    null
  );
  const modalRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const images = Array.from(
    { length: totalImages },
    (_, i) => `${projectImagesPath}/${i + 1}.webp`
  );

  useEffect(() => {
    if (open) {
      // Small delay to let focus trap initialize
      const timer = setTimeout(() => setShouldRender(true), 0);
      return () => clearTimeout(timer);
    } else {
      setShouldRender(false);
    }

    // Reset to grid view when reopening
    setImageColumns(2);
    setClickedImageIndex(null);
  }, [open]);

  // Scroll to the clicked image after layout change
  useEffect(() => {
    if (clickedImageIndex !== null && imageRefs.current[clickedImageIndex]) {
      const timer = setTimeout(() => {
        imageRefs.current[clickedImageIndex]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 50); // Small delay to ensure layout has updated

      return () => clearTimeout(timer);
    }
  }, [imageColumns, clickedImageIndex]);

  const handleImageClick = (index: number) => {
    setClickedImageIndex(index);
    setImageColumns(prevCols => (prevCols === 2 ? 1 : 2));
  };

  const handleViewToggle = (newColumns: number) => {
    setImageColumns(newColumns);
    setClickedImageIndex(null); // Clear clicked index when manually toggling
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/75">
        <Dialog.Panel
          ref={modalRef}
          className="relative overflow-y-auto w-full max-w-[1440px] h-full xl:h-[700px] xl:max-h-[90vh] rounded bg-white shadow-lg pb-14 xl:pt-0 xl:pb-0 px-14 xl:grid xl:grid-cols-[1fr_320px] xl:gap-x-14"
        >
          {shouldRender && (
            <>
              {/* PROJECT INFO */}
              <div className="pt-14 xl:pt-0 xl:col-start-2 xl:row-start-1">
                <div className="xl:sticky xl:top-14">
                  <h3 className="font-bold leading-snug text-slate-900">
                    {title}
                  </h3>
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
                  <div className="hidden max-w-xs sm:flex sm:gap-x-2 mt-14 xl:mt-0 xl:absolute xl:bottom-0 xl:top-[35rem] text-xs font-medium leading-normal text-slate-700">
                    <CursorArrowRaysIcon className="inline-block h-5 w-5 shrink-0 xl:mt-[2px]" />
                    <p>
                      Click on an image to toggle between{' '}
                      <span
                        onClick={() => handleViewToggle(2)}
                        className="underline text-slate-900 cursor-pointer"
                      >
                        grid view
                      </span>{' '}
                      and{' '}
                      <span
                        onClick={() => handleViewToggle(1)}
                        className="underline text-slate-900 cursor-pointer"
                      >
                        single column view
                      </span>
                      .
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="fixed xl:absolute top-6 right-9 xl:top-[-2.5rem] xl:right-[-2.5rem] p-2 flex items-center justify-center"
                  >
                    <XMarkIcon className="inline-block h-5 w-5 shrink-0 text-gray-500" />
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
              </div>
              {/* GRID IMAGES */}
              <div
                className={clsx(
                  'grid gap-x-6 gap-y-6 mt-14 sm:mt-6 xl:mt-6 xl:mb-0 xl:col-start-1 xl:row-start-1',
                  imageColumns === 1 && 'sm:grid-cols-1',
                  imageColumns === 2 && 'sm:grid-cols-2'
                )}
              >
                {images.map((src, index) => (
                  <button
                    type="button"
                    ref={el => (imageRefs.current[index] = el)}
                    className="pointer-events-none sm:pointer-events-auto rounded flex w-full h-auto relative border border-gray-200 shadow-sm hover:shadow cursor-pointer box-border select-none"
                    key={index}
                    onClick={() => handleImageClick(index)}
                  >
                    <Image
                      src={`${src}?v=1`}
                      alt={`Image ${index + 1}`}
                      width={2500}
                      height={1375}
                      className="rounded"
                    />
                  </button>
                ))}
              </div>
              <button
                onClick={() =>
                  modalRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
                }
                className="mt-10 xl:mt-10 mb-11 mx-auto flex items-center justify-center text-sm font-medium leading-tight text-gray-700 underline hover:text-black focus-visible:text-blue-800 transition-colors"
              >
                Back to the top
              </button>
            </>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
