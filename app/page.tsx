import { About, Hero, Projects, TechStack } from '@/components';

const Home = () => {
  return (
    <main className="px-5 md:px-10 lg:px-36">
      <Hero />
      <About />
      <TechStack />
      <Projects />
    </main>
  );
};

export default Home;
