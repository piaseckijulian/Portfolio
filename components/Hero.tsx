import client from '@/sanityClient';
import Button from './Button';

const Hero = async () => {
  const { name, job_title, github_url } = await client.fetch(`*[_type == "general"]{
    name,
    job_title,
    github_url
  }[0]`);

  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold leading-tight text-white xs:text-5xl">
        My name is <br className="hidden xs:block" />
        <span className="text-red-500">{name}</span> <br className="hidden xs:block" />
        {job_title}
      </h1>

      <Button text="My Work" href={github_url} color="red" styles="mt-5" />
    </section>
  );
};

export default Hero;
