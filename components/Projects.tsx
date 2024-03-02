import { client } from '@/sanity/lib/client';
import { type Image } from 'sanity';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  desc: string;
  image: Image;
  techStack: string[];
  liveSiteUrl: string;
  githubUrl: string;
}

const Projects = async () => {
  const projects: Project[] = await client.fetch('*[_type == "project"]');

  return (
    <section>
      <h2 className="mb-10 text-center text-4xl font-bold text-white xs:text-5xl">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ image, title, desc, techStack, liveSiteUrl, githubUrl }) => (
          <ProjectCard
            title={title}
            desc={desc}
            image={image}
            techStack={techStack}
            liveSiteUrl={liveSiteUrl}
            githubUrl={githubUrl}
            key={title}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
