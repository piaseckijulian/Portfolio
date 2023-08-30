import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <h1 className="hero-text">
        Hi 👋,
        <br />
        My name is
        <br />
        <span className="gradient">
          Julian Piasecki
          <br />
        </span>
        I'm a Front-End Dev
      </h1>

      <div className="rounded-full bg-gradient p-2">
        <Image
          src="/assets/hero-photo.png"
          alt="Photo of Julian Piasecki"
          width={290}
          height={290}
          className="h-full w-full rounded-full max-lg:h-[200px] max-lg:w-[200px] max-xs:h-[150px] max-xs:w-[150px]"
        />
      </div>
    </section>
  );
};

export default Hero;
