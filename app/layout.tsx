import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
    "Explore Julian Piasecki's personal website to discover an impressive showcase of his diverse programming projects and exceptional skills in the world of technology."
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-zinc-900`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
