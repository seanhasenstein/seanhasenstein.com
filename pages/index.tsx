import { useState } from 'react';
import Image from 'next/image';
import { IdentificationIcon } from '@heroicons/react/16/solid';

import Layout from '../components/Layout';
import { GitHubIcon, LinkedInIcon } from '../components/Icons';
import ExperienceItem from '../components/ExperienceItem';
import FreelanceProject from '../components/FreelanceProject';
import ProjectModal from '../components/ProjectModal';

import { freelanceProjects } from '../data';

import { Project } from '../types';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setIsModalOpen(true);
    setSelectedProject(project);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Layout>
      <div>
        <Image
          src="/profile.jpg"
          alt="Sean Hasenstein"
          width={56}
          height={56}
          className=" bg-gray-500 rounded-full"
        />
        <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900">
          Sean Hasenstein
        </h1>
        <h2 className="mt-0.5 font-medium italic text-xl text-gray-500">
          Senior Full-Stack Software Engineer
        </h2>
        <p className="mt-6 max-w-3xl text-gray-600">
          I have {new Date().getFullYear() - 2014}+ years of experience helping{' '}
          <span className="text-gray-800 font-semibold">startups</span> and{' '}
          <span className="text-gray-800 font-semibold">businesses</span> build
          scalable platforms using{' '}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-800 font-semibold underline"
          >
            React
          </a>
          ,{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-800 font-semibold underline"
          >
            Next.js
          </a>
          , and{' '}
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-800 font-semibold underline"
          >
            Node.js
          </a>
          . I thrive on taking products from conception to production in
          fast-paced, collaborative environments.
        </p>
        <a
          href="mailto:seanhasenstein@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-slate-900 text-white inline-block px-4 py-2.5 mt-6 rounded-md text-sm font-semibold leading-tight hover:bg-black focus-visible:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-all"
        >
          Send me a message
        </a>
        <div className="mt-7 flex items-center gap-3">
          <a
            href="https://github.com/seanhasenstein"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500/50 hover:text-gray-600/75 transition"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/seanhasenstein/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500/50 hover:text-gray-600/75 transition"
          >
            <LinkedInIcon />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500/50 hover:text-gray-600/75 transition"
          >
            <IdentificationIcon className="h-7 w-7" />
          </a>
        </div>
      </div>
      <div className="max-w-3xl mt-16 pt-14 border-t border-gray-300/75">
        <h3 className="mb-12 text-sm font-bold uppercase tracking-widest text-slate-900">
          Experience
        </h3>
        <ExperienceItem
          dates="NOV 2022 — AUG 2025"
          title="Senior Full-Stack Software Engineer"
          company="Everdays"
          companyUrl="https://everdays.com/"
          description="Built and shipped features end-to-end from conception to production
          using React, Next.js, Node.js and Express, deploying almost daily.
          Collaborated cross-functionally with engineering, design, sales, and
          marketing teams to deliver business-critical features and
          integrations."
          tags={[
            'JavaScript',
            'TypeScript',
            'HTML & SCSS',
            'React',
            'Next.js',
            'Node.js',
            'Express',
            'MongoDB',
            'Redis',
            'NGINX',
            'AWS',
            'Vercel',
          ]}
        />
        <ExperienceItem
          dates="MAY 2014 — OCT 2022"
          title="Freelance Full-Stack Web Developer & Designer"
          description="Delivered complete web solutions for 10+ clients across diverse industries including apparel, education, sports organizations, and manufacturing. Managed entire project lifecycle from client consultation and requirements gathering to deployment and ongoing support."
          tags={[
            'JavaScript',
            'TypeScript',
            'HTML & CSS',
            'React',
            'Next.js',
            'Gatsby',
            'Node.js',
            'MongoDB',
            'PostgreSQL',
            'AWS',
            'Vercel',
          ]}
        />
        <div className="mt-12">
          <a
            href="/resume.pdf"
            aria-label="View Full Resume (opens in a new tab)"
            className="inline-flex items-baseline leading-tight hover:text-blue-800 focus-visible:text-blue-800 font-semibold text-gray-800 group text-base"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              View my full resume
              <span className="inline-block ml-px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none ml-1"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
      <div className="max-w-3xl mt-16 pt-14 border-t border-gray-300/75">
        <h3 className="mb-12 text-sm font-bold uppercase tracking-widest text-slate-900">
          Freelance Projects
        </h3>
        <div>
          {freelanceProjects.map((project, index) => {
            return (
              <div key={index} className="mb-16 xl:mb-12 last:mb-0">
                <FreelanceProject
                  {...project}
                  handleOpenModal={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleOpenModal(project);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-12">
        <a
          href="mailto:seanhasenstein@gmail.com"
          aria-label="Send me a message (opens in a new tab)"
          className="inline-flex items-baseline leading-tight hover:text-blue-800 focus-visible:text-blue-800 font-semibold text-gray-800 group text-base"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>
            Let's work together
            <span className="inline-block ml-px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none ml-1"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
        </a>
      </div>
      <ProjectModal
        open={isModalOpen}
        onClose={onCloseModal}
        title={selectedProject?.title}
        description={selectedProject?.description}
        tags={selectedProject?.tags}
        hrefs={selectedProject?.hrefs}
        projectImagesPath={
          selectedProject ? selectedProject.projectImagesPath : undefined
        }
        totalImages={selectedProject ? selectedProject.totalImages : 0}
      />
    </Layout>
  );
}
