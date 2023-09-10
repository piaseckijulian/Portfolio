import Image from 'next/image';
import client, { urlFor } from '@/sanityClient';

const TechStack = async () => {
  const techStackItems = await client.fetch(`*[_type == "tech-stack"]`);

  const order = await client.fetch(`*[_type == "other"][0].tech_stack_order`);

  return (
    <section id="tech-stack" className="my-10 flex scroll-mt-36 flex-col items-center">
      <h2 className="section-heading">Tech Stack</h2>
      <p className="section-desc">Tools I'm currently using</p>

      <div className="mt-8 grid grid-cols-3 items-center gap-x-5 gap-y-2 xs:grid-cols-3 xs:gap-x-20 xs:gap-y-5 md:grid-cols-6">
        {techStackItems
          .sort((a: { alt: string; image: any }, b: { alt: string; image: any }) => {
            const indexA = order.indexOf(a.alt);
            const indexB = order.indexOf(b.alt);

            if (indexA === -1) {
              return 1;
            }

            if (indexB === -1) {
              return -1;
            }

            return indexA - indexB;
          })
          .map(({ alt, image }: { alt: string; image: any }) => {
            if (alt === 'Next.js White' || alt === 'Express.js White') {
              return (
                <Image
                  src={urlFor(image).url()}
                  alt={alt}
                  width={64}
                  height={64}
                  className="hidden h-[64px] w-[64px] dark:block"
                  key={alt}
                />
              );
            } else if (alt === 'Next.js Black' || alt === 'Express.js Black') {
              return (
                <Image
                  src={urlFor(image).url()}
                  alt={alt}
                  width={64}
                  height={64}
                  className="block h-[64px] w-[64px] dark:hidden"
                  key={alt}
                />
              );
            }

            return (
              <Image
                src={urlFor(image).url()}
                alt={alt}
                width={64}
                height={64}
                className="h-[64px] w-[64px]"
                key={alt}
              />
            );
          })}
      </div>
    </section>
  );
};

export default TechStack;
