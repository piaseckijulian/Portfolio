import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { type Image as ImageType } from 'sanity';

interface Props {
  title: string;
  desc: string;
  image: ImageType;
  techStack: string[];
  githubUrl: string;
  liveSiteUrl: string;
}

const ProjectCard = ({
  title,
  desc,
  image,
  techStack,
  liveSiteUrl,
  githubUrl
}: Props) => {
  const links = [
    { href: liveSiteUrl, text: 'Demo', icon: AiOutlinePaperClip },
    { href: githubUrl, text: 'Github', icon: BsGithub }
  ];

  return (
    <div className="flex flex-col border-2 border-zinc-800 text-white">
      <Image
        src={urlForImage(image)}
        alt={`Picture of the ${title}`}
        width={384}
        height={183}
        className="w-full object-cover"
      />

      <div className="my-5 flex h-full w-full flex-col gap-3 px-5">
        <h3 className="text-center text-2xl font-semibold xs:text-3xl lg:text-4xl">
          {title}
        </h3>

        <p className="flex-1 xs:text-left xs:text-lg">{desc}</p>

        <p className="text-sm">Tech stack: {techStack.join(', ')}</p>

        <div className="flex flex-col gap-x-6 gap-y-2 lg:flex-row">
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

      {/* </div> */}
    </div>
  );
};

export default ProjectCard;
