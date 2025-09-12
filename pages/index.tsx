import Image from 'next/image';
import Layout from '../components/Layout';
import { GitHubIcon, LinkedInIcon } from '../components/Icons';
import WorkPreview from '../components/WorkPreview';
import { workExamples } from '../data';

export default function Home() {
  return (
    <Layout>
      <div>
        <Image
          src="/profile.jpg"
          alt="Sean Hasenstein"
          width={64}
          height={64}
          className="h-16 w-16 bg-gray-500 rounded-full"
        />
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
          Sean Hasenstein
        </h1>
        <h2 className="mt-0.5 font-medium text-xl text-gray-600">
          Senior Full-Stack Software Engineer
        </h2>
        <p className="mt-6 max-w-2xl text-gray-600">
          Hi, I'm Sean, a Senior Full-Stack Software Engineer based in
          Sheboygan, Wisconsin. With {new Date().getFullYear() - 2014}+ years of
          experience, I've helped startups and businesses build scalable
          platforms using React, Next.js, and Node.js. I thrive on taking
          products from conception to production in fast-paced, collaborative
          environments.
        </p>
        <p className="mt-6 max-w-3xl text-gray-600">
          Below you'll find examples of my freelance work, or for more on my
          career,{' '}
          <a
            href="https://sean-hasenstein.s3.us-east-1.amazonaws.com/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="underline transition text-gray-900 hover:text-black"
          >
            see my resume
          </a>
          .
        </p>
        <div className="mt-7 flex items-center gap-5">
          <a
            href="https://github.com/seanhasenstein"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500/50 hover:text-gray-600/50 transition"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/seanhasenstein/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500/50 hover:text-gray-600/50 transition"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <h2 className="mt-10 sm:mt-20 text-gray-900 font-bold">
        Examples of my freelance work
      </h2>
      <div className="mt-4 border-t border-gray-300/75">
        <ul className="mt-10 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {workExamples.map(example => (
            <WorkPreview
              key={example.id}
              title={example.title}
              description={example.description}
              domain={example.domain}
              img={example.img}
              height={example.height}
              width={example.width}
              href={example.href}
            />
          ))}
        </ul>
      </div>
    </Layout>
  );
}
