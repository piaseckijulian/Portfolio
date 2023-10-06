import { Hero, Projects, TechStack } from '@/components';

const Home = () => {
  return (
    <main className="xs:px-18 px-5 sm:px-28">
      <Hero />
      <TechStack />
      <Projects />
    </main>
  );
};

export default Home;
