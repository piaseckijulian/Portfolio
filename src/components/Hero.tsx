import { socials } from "@/lib/constants"
import Button from "./Button"

const Hero = () => {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center">
      <h1 className="text-center font-bold text-4xl text-white xs:text-5xl leading-tight">
        My name is <br className="xs:block hidden" />
        <span className="text-red-500">Julian Piasecki</span>{" "}
        <br className="xs:block hidden" />
        I&apos;m a Software Engineer
      </h1>

      <Button text="My Work" href={socials[0].href} color="red" styles="mt-5" />
    </section>
  )
}

export default Hero
