import { sortTechStackItems } from "@/lib/sortTechStackItems"
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"

const TechStack = async () => {
  const techStackItems = await sortTechStackItems()

  return (
    <section>
      <h2 className="text-center font-bold text-4xl text-white xs:text-5xl">
        Tech Stack
      </h2>

      <div className="my-10 grid grid-cols-3 xs:grid-cols-6 place-items-center gap-3 xs:gap-4 md:grid-cols-12">
        {techStackItems.map(({ alt, image }) => (
          <Image
            src={urlForImage(image)}
            alt={alt}
            width={64}
            height={64}
            key={alt}
          />
        ))}
      </div>
    </section>
  )
}

export default TechStack
