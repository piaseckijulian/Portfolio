import Button from './Button';

const Hero = () => {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold leading-tight text-white xs:text-5xl">
        My name is <br className="hidden xs:block" />
        <span className="text-red-500">Julian Piasecki</span>{' '}
        <br className="hidden xs:block" />
        I'm a Full-Stack Dev
      </h1>

      <Button
        text="My Work"
        href="https://github.com/piaseckijulian"
        color="red"
        styles="mt-5"
      />
    </section>
  );
};

export default Hero;
