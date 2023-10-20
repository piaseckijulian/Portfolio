import { ImageInterface, urlFor } from '@/sanityClient';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

interface Props {
  src: ImageInterface;
  title: string;
  desc: string;
  techStack: string[];
  githubUrl: string;
  liveSiteUrl: string;
}

const ProjectCard = ({ src, title, desc, techStack, liveSiteUrl, githubUrl }: Props) => {
  const links = [
    {
      href: liveSiteUrl,
      text: 'Demo',
      icon: AiOutlinePaperClip
    },
    {
      href: githubUrl,
      text: 'Github',
      icon: BsGithub
    }
  ];

  return (
    <div className="border-2 border-zinc-800 text-white">
      <Image
        src={urlFor(src).url()}
        alt={`Picture of the ${title}`}
        width={500}
        height={500}
        className="w-full object-contain"
      />

      <div className="my-5 px-5">
        <h3 className="mb-3 text-center text-2xl font-semibold xs:text-3xl lg:text-4xl">
          {title}
        </h3>
        <p className="xs:text-left xs:text-lg">{desc}</p>

        <p className="my-3 text-sm">Tech stack: {techStack.join(', ')}</p>

        <div className=" flex flex-col gap-x-6 gap-y-2 lg:flex-row">
          {links.map(({ text, href, icon: Icon }) => (
            <Link
              href={href}
              target="_blank"
              key={text}
              className="flex items-center gap-2 text-lg transition hover:text-red-500"
            >
              <Icon />
              {text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
