import { type Metadata } from 'next';

export const createMetadata = (
  title: string,
  description: string,
  image: string,
  url: URL
): Metadata => ({
  title,
  description,
  openGraph: { title, description, images: [{ url: image }], url },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
    creator: '@piaseckijulian'
  },
  icons: ['/favicon.ico'],
  metadataBase: url
});
