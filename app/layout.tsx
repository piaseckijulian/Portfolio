import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import type { PropsWithChildren } from 'react';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Julian Piasecki's Portfolio",
  description:
    "This is Julian Piasecki's personal website where he showcases his projects and skills."
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-zinc-900`}>{children}</body>
    </html>
  );
};

export default RootLayout;
