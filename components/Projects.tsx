import client, { ImageInterface, urlFor } from '@/sanityClient';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

interface Props {
  src: ImageInterface;
  title: string;
  desc: string;
  techStack: string[];
  githubUrl: string;
  liveSiteUrl: string;
}

const ProjectCard = ({ src, title, desc, techStack, liveSiteUrl, githubUrl }: Props) => (
  <div className="rounded-xl py-2 shadow-lg dark:bg-[rgba(0,0,0,0.1)] dark:shadow-white/5">
    <Image
      src={urlFor(src).url()}
      alt={`Picture of the ${title}`}
      width={375}
      height={260}
      className="w-full rounded-t-xl object-contain"
    />

    <div className="px-4 pb-10 lg:px-7">
      <h3 className="mt-5 text-center text-2xl font-medium dark:text-[#ccc]">{title}</h3>
      <p className="mt-2 text-sm font-light text-grayish dark:text-darkGrayish lg:max-w-[315px] lg:text-lg">
        {desc}
      </p>

      <p className="mt-2 text-xs font-light text-headingClr dark:text-[#ccc]">
        <span className="text-sm font-normal">Tech stack: </span>
        {techStack.join(', ')}
      </p>

      <div className="mt-4 justify-between lg:flex">
        <Link
          href={liveSiteUrl}
          target="_blank"
          className="flex items-center gap-2 underline transition duration-500 hover:text-purple-700 dark:text-white lg:text-lg"
        >
          <AiOutlineLink className="h-[24px] w-[24px] dark:fill-white" />
          Live Preview
        </Link>
        <Link
          href={githubUrl}
          target="_blank"
          className="flex items-center gap-2 underline transition duration-500 hover:text-purple-700 dark:text-white lg:text-lg"
        >
          <BsGithub className="h-[24px] w-[24px] dark:fill-white" />
          View Code
        </Link>
      </div>
    </div>
  </div>
);

interface ProjectInterface {
  image: ImageInterface;
  title: string;
  desc: string;
  tech_stack: string[];
  live_site_url: string;
  github_url: string;
}

const Projects = async () => {
  const projects = await client.fetch(`*[_type == "project"]`);

  return (
    <section id="projects" className="flex scroll-mt-36 flex-col items-center">
      <h2 className="section-heading">Projects</h2>
      <p className="section-desc mb-10">My personal projects</p>

      <div className="grid grid-cols-1 gap-10 xs:grid-cols-2 md:grid-cols-3">
        {projects.map((project: ProjectInterface) => (
          <ProjectCard
            src={project.image}
            title={project.title}
            desc={project.desc}
            techStack={project.tech_stack}
            liveSiteUrl={project.live_site_url}
            githubUrl={project.github_url}
            key={project.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
