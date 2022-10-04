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
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-800">
          Full stack web developer
        </h1>
        <p className="mt-6 max-w-2xl text-gray-600">
          Hi, I'm Sean, a full stack web developer based in Sheboygan,
          Wisconsin. I have {new Date().getFullYear() - 2014} years of exprience
          designing and developing websites, web applications, ecommerce
          solutions, content management systems, dashboards, APIs, and more.
        </p>
        <p className="mt-6 max-w-2xl text-gray-600">
          If you're interested in working together feel free to{' '}
          <a
            href="mailto:seanhasenstein@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="underline transition text-gray-900 hover:text-blue-700"
          >
            send me a message
          </a>
          .
        </p>
        <div className="mt-7 flex items-center gap-6">
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
