import { client } from "@/sanity/lib/client"
import type { Image } from "sanity"

interface TechStack {
  image: Image
  alt: string
}

interface General {
  techStackOrder: string[]
}

export const sortTechStackItems = async () => {
  const techStack: TechStack[] = await client.fetch('*[_type == "techStack"]')
  const { techStackOrder }: General = await client.fetch(
    `*[_type == "general"][0]`,
  )

  return techStack.sort((a, b) => {
    const indexA = techStackOrder.indexOf(a.alt)
    const indexB = techStackOrder.indexOf(b.alt)

    if (indexA === -1) return 1
    if (indexB === -1) return -1
    return indexA - indexB
  })
}
