import { socials } from '@/lib/constants';
import Button from './Button';

const Hero = () => {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold leading-tight text-white xs:text-5xl">
        My name is <br className="hidden xs:block" />
        <span className="text-red-500">Julian Piasecki</span>{' '}
        <br className="hidden xs:block" />
        I&apos;m a Software Engineer
      </h1>

      <Button text="My Work" href={socials[0].href} color="red" styles="mt-5" />
    </section>
  );
};

export default Hero;
