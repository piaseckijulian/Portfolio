import client, { ImageInterface } from '@/sanityClient';

export const getTechStackItems = async () => {
  const order = await client.fetch(`*[_type == "other"][0].tech_stack_order`);
  const techStackItems = await client.fetch(`*[_type == "tech-stack"]`);

  return techStackItems.sort((a: ImageInterface, b: ImageInterface) => {
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
};
