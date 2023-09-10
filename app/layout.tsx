import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Footer, Navbar } from '@/components';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Julian Piasecki's Portfolio",
  description:
    "This is Julian Piasecki's personal website when he showcases his projects and skills"
};

interface childrenInterface {
  children: React.ReactNode;
}

const RootLayout = ({ children }: childrenInterface) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} dark:bg-darkClr`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
