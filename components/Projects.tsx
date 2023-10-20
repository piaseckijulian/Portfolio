import client, { ImageInterface } from '@/sanityClient';
import ProjectCard from './ProjectCard';

interface ProjectInterface {
  image: ImageInterface;
  title: string;
  desc: string;
  tech_stack: string[];
  live_site_url: string;
  github_url: string;
}

const Projects = async () => {
  const projects: ProjectInterface[] = await client.fetch(`*[_type == "project"]`);

  return (
    <section>
      <h2 className="mb-10 text-center text-4xl font-bold text-white xs:text-5xl">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ image, title, desc, tech_stack, live_site_url, github_url }) => (
          <ProjectCard
            src={image}
            title={title}
            desc={desc}
            techStack={tech_stack}
            liveSiteUrl={live_site_url}
            githubUrl={github_url}
            key={title}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
