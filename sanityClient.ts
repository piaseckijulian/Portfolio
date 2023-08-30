import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: true,
};

const client = createClient(config);
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
export default client;
