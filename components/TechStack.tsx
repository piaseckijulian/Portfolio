import { ImageInterface, urlFor } from '@/sanityClient';
import { getTechStackItems } from '@/utils';
import Image from 'next/image';

const TechStack = async () => {
  const techStackItems = await getTechStackItems();

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white xs:text-5xl">
        Tech Stack
      </h2>
      <div className="my-10 grid grid-cols-3 place-items-center gap-3 xs:grid-cols-6 xs:gap-4 md:grid-cols-12">
        {techStackItems.map(({ alt, image }: ImageInterface) => (
          <Image src={urlFor(image).url()} alt={alt} width={64} height={64} key={alt} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
