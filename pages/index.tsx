import Image from 'next/image';
import Layout from '../components/Layout';
import { GitHubIcon, LinkedInIcon } from '../components/Icons';
import WorkPreview from '../components/WorkPreview';
import profilePicture from '../public/profile.jpg';
import { workExamples } from '../data';

export default function Home() {
  return (
    <Layout>
      <div>
        <Image
          src={profilePicture}
          alt="A picture of Sean Hasenstein smiling"
          width={64}
          height={64}
          className="h-16 w-16 bg-gray-500 rounded-full"
        />
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
          Sean Hasenstein
        </h1>
        <h2 className="mt-0.5 font-medium text-lg text-gray-600">
          Full stack web developer
        </h2>
        <p className="mt-6 max-w-2xl text-gray-600">
          Hi, I'm Sean, a web developer based in Sheboygan, Wisconsin. I have{' '}
          {new Date().getFullYear() - 2014} years of exprience working with
          clients to create and improve their digital products. This includes
          static marketing websites, full stack web applications, e-commerce
          solutions, custom dashboards, and more.
        </p>
        <p></p>
        <p className="mt-6 max-w-2xl text-gray-600">
          I welcome discussing your project and helping you find success.{' '}
          <a
            href="mailto:seanhasenstein@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="underline transition text-gray-900 hover:text-blue-700"
          >
            Let's talk!
          </a>
        </p>
        <div className="mt-7 flex items-center gap-5">
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
        </div>
      </div>
      <h2 className="mt-10 sm:mt-20 text-gray-900 font-bold">
        Examples of my work
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
