import React from 'react';
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout(props: Props) {
  const defaultTitle = 'Sean Hasenstein | Senior Full-Stack Software Engineer';

  return (
    <div className="h-screen flex flex-col justify-between">
      <Head>
        <title>
          {props.title ? `${props.title} | ${defaultTitle}` : defaultTitle}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header />
        <main className="mx-auto py-16 xl:py-20 px-6 max-w-7xl">
          {props.children}
        </main>
        <footer className="mx-auto px-6 max-w-7xl">
          <div className="py-9 lg:py-12 md:flex md:justify-between border-t border-gray-300/75">
            <p className="text-gray-500 text-sm italic w-72 lg:w-auto mb-8 lg:mb-0">
              Designed in{' '}
              <a
                href="https://www.figma.com/"
                className="text-gray-900 underline hover:text-black transition-all"
                target="_blank"
                rel="noreferrer"
              >
                Figma
              </a>
              , built with{' '}
              <a
                href="https://nextjs.org/"
                className="text-gray-900 underline hover:text-black transition-all"
                target="_blank"
                rel="noreferrer"
              >
                Next.js
              </a>{' '}
              and{' '}
              <a
                href="https://tailwindcss.com/"
                className="text-gray-900 underline hover:text-black transition-all"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind CSS
              </a>{' '}
              and deployed on{' '}
              <a
                href="https://vercel.com/"
                className="text-gray-900 underline hover:text-black transition-all"
                target="_blank"
                rel="noreferrer"
              >
                Vercel
              </a>
              .
            </p>
            <p className="text-gray-900 text-sm">
              &copy; {new Date().getFullYear()} Sean Hasenstein. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
