import { Footer, Navbar } from '@/components';
import { type PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
    <Navbar />
    <main className="xs:px-18 px-5 sm:px-28">{children}</main>
    <Footer />
    </>

  );
};

export default MainLayout;
