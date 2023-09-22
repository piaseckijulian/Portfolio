import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const config: ClientConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: true
};

const client = createClient(config);
const builder = imageUrlBuilder(client);

export interface ImageInterface {
  alt: string;
  image: SanityImageSource;
}

export const urlFor = (source: SanityImageSource) => builder.image(source);
export default client;
