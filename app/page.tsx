import { Footer, Hero, Navbar, Projects, TechStack } from '@/components';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="xs:px-18 px-5 sm:px-28">
        <Hero />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Home;
