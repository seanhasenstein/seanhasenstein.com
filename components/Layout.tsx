import React from 'react';
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout(props: Props) {
  const defaultTitle = 'Sean Hasenstein | Full Stack Web Developer';

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
        <main className="mx-auto py-20 px-6 max-w-7xl">{props.children}</main>
      </div>
      <footer className="px-6">
        <div className="mx-auto py-10 max-w-7xl flex flex-col sm:flex-row justify-between border-t border-gray-300/75">
          <div className="flex flex-col justify-center sm:justify-between sm:items-center gap-8 md:gap-16 sm:flex-row text-gray-700 font-medium">
            <a
              href="mailto:seanhasenstein@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="transition-all hover:text-black hover:underline"
            >
              Send me an email
            </a>
            <a
              href="https://res.cloudinary.com/dra3wumrv/image/upload/v1666116546/resume-sean-hasenstein.pdf"
              target="_blank"
              rel="noreferrer"
              className="transition-all hover:text-black hover:underline"
            >
              My resume
            </a>
          </div>
          <div className="mt-12 sm:mt-0 text-gray-500 sm:text-right">
            &copy; {new Date().getFullYear()} Sean Hasenstein. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
