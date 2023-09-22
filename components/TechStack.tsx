import Image from 'next/image';
import client, { ImageInterface, urlFor } from '@/sanityClient';

const TechStack = async () => {
  const order = await client.fetch(`*[_type == "other"][0].tech_stack_order`);
  const techStackItems = await client.fetch(`*[_type == "tech-stack"]`);
  const sortedItems = techStackItems.sort((a: ImageInterface, b: ImageInterface) => {
    const indexA = order.indexOf(a.alt);
    const indexB = order.indexOf(b.alt);

    if (indexA === -1) {
      return 1;
    }

    if (indexB === -1) {
      return -1;
    }

    return indexA - indexB;
  });

  return (
    <section id="tech-stack" className="my-10 flex scroll-mt-36 flex-col items-center">
      <h2 className="section-heading">Tech Stack</h2>
      <p className="section-desc">Tools I'm currently using</p>

      <div className="mt-8 grid grid-cols-3 items-center gap-4 sm:grid-cols-6 md:grid-cols-11">
        {sortedItems.map(({ alt, image }: ImageInterface) => (
          <Image src={urlFor(image).url()} alt={alt} width={64} height={64} key={alt} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
